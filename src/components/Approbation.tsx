"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(Draggable);

interface ShapeData {
  id: string;
  type: string;
  position: { x: number; y: number };
}

interface LineData {
  id: string;
  from: { shapeId: string; port: "left" | "right" };
  to: { shapeId: string; port: "left" | "right" };
}

const FlowDiagram: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [shapes, setShapes] = useState<ShapeData[]>([]);
  const [lines, setLines] = useState<LineData[]>([]);
  const [isCreatingLine, setIsCreatingLine] = useState<{
    from: { shapeId: string; port: "left" | "right" };
    currentPos: { x: number; y: number };
  } | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // We store references to each shape's <g> element so we can make them draggable
  const shapeRefs = useRef<Map<string, SVGGElement>>(new Map());
  const draggableInstances = useRef<Map<string, Draggable>>(new Map());

  // Offsets for where the connection ports should be relative to each shape
  const portOffsets = {
    left: { x: 0, y: 25 },
    right: { x: 80, y: 25 },
  };

  // Tabs in the sidebar
  const [activePanel, setActivePanel] = useState("shapes");

  // Auto-set sidebar to hidden on mobile, visible on desktop
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 768) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [windowSize]);

  // Helper: get shape's current translate(x,y)
  const getShapePosition = (shapeId: string) => {
    const shapeEl = shapeRefs.current.get(shapeId);
    if (!shapeEl) return { x: 0, y: 0 };

    const transform = shapeEl.getAttribute("transform");
    const match = transform?.match(/translate\(([^,]+),([^)]+)\)/);
    if (match) {
      return {
        x: parseFloat(match[1]),
        y: parseFloat(match[2]),
      };
    }
    return { x: 0, y: 0 };
  };

  // Helper: get absolute position for a port (left/right) on a shape
  const getPortPosition = (shapeId: string, port: "left" | "right") => {
    const shapePos = getShapePosition(shapeId);
    const offset = portOffsets[port];

    // If shape <g> transform is 0,0, try using the shape’s stored state
    if (shapePos.x === 0 && shapePos.y === 0) {
      const shapeData = shapes.find((s) => s.id === shapeId);
      if (shapeData) {
        return {
          x: shapeData.position.x + offset.x,
          y: shapeData.position.y + offset.y,
        };
      }
    }
    return {
      x: shapePos.x + offset.x,
      y: shapePos.y + offset.y,
    };
  };

  // Update line positions so they remain connected to shapes
  const updateLines = () => {
    // Wait for DOM to catch up if needed
    const allElementsExist = lines.every((line) =>
      document.getElementById(`line-${line.id}`)
    );
    if (!allElementsExist) {
      setTimeout(updateLines, 10);
      return;
    }

    lines.forEach((line) => {
      const lineEl = document.getElementById(`line-${line.id}`);
      const hitAreaEl = document.getElementById(`hitarea-${line.id}`);
      if (!lineEl || !hitAreaEl) return;

      const fromPos = getPortPosition(line.from.shapeId, line.from.port);
      const toPos = getPortPosition(line.to.shapeId, line.to.port);

      lineEl.setAttribute("x1", fromPos.x.toString());
      lineEl.setAttribute("y1", fromPos.y.toString());
      lineEl.setAttribute("x2", toPos.x.toString());
      lineEl.setAttribute("y2", toPos.y.toString());

      hitAreaEl.setAttribute("x1", fromPos.x.toString());
      hitAreaEl.setAttribute("y1", fromPos.y.toString());
      hitAreaEl.setAttribute("x2", toPos.x.toString());
      hitAreaEl.setAttribute("y2", toPos.y.toString());
    });

    // If currently creating a line, move the temp line’s end to cursor
    if (isCreatingLine) {
      const tempLine = document.getElementById("temp-line");
      if (!tempLine) return;

      const fromPos = getPortPosition(
        isCreatingLine.from.shapeId,
        isCreatingLine.from.port
      );
      tempLine.setAttribute("x1", fromPos.x.toString());
      tempLine.setAttribute("y1", fromPos.y.toString());
      tempLine.setAttribute("x2", isCreatingLine.currentPos.x.toString());
      tempLine.setAttribute("y2", isCreatingLine.currentPos.y.toString());
    }
  };

  // Make a shape draggable using GSAP Draggable
  const makeShapeDraggable = (shapeId: string) => {
    const shapeEl = shapeRefs.current.get(shapeId);
    if (!shapeEl || draggableInstances.current.has(shapeId)) return;

    const draggable = Draggable.create(shapeEl, {
      type: "x,y",
      onDrag: updateLines,
      onDragEnd: function () {
        // Update shape position in state after drag
        setShapes((prev) =>
          prev.map((s) =>
            s.id === shapeId
              ? { ...s, position: { x: this.x, y: this.y } }
              : s
          )
        );
      },
    })[0];

    draggableInstances.current.set(shapeId, draggable);
  };

  // Add a shape to the canvas
  const addShape = (type: string) => {
    const id = `shape-${Date.now()}`;
    const canvasRect = canvasRef.current?.getBoundingClientRect();

    // Center new shape in the canvas horizontally
    const centerX = canvasRect ? canvasRect.width / 2 - 40 : 100;
    // Slightly stagger shapes vertically
    const y = canvasRect ? 100 + ((shapes.length * 20) % 300) : 100;

    // If on mobile, close sidebar after adding shape
    if (windowSize.width < 768) {
      setSidebarOpen(false);
    }

    setShapes((prev) => [
      ...prev,
      { id, type, position: { x: centerX, y: y } },
    ]);

    // Let the DOM update, then refresh lines
    setTimeout(() => {
      updateLines();
    }, 100);
  };

  // Start creating a connection from a shape’s port
  const startConnection = (
    shapeId: string,
    port: "left" | "right",
    e: React.MouseEvent | React.TouchEvent
  ) => {
    e.stopPropagation();
    const portPos = getPortPosition(shapeId, port);

    setIsCreatingLine({
      from: { shapeId, port },
      currentPos: { x: portPos.x, y: portPos.y },
    });
  };

  // Move the temp line endpoint to follow cursor/finger
  const updateTempLine = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isCreatingLine) return;

    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - canvasRect.left;
    const y = clientY - canvasRect.top;

    setIsCreatingLine((prev) => {
      if (!prev) return null;
      return { ...prev, currentPos: { x, y } };
    });
  };

  // Finish creating a connection by clicking another shape’s port
  const finishConnection = (shapeId: string, port: "left" | "right") => {
    if (!isCreatingLine) return;

    // Don’t connect a shape to itself
    if (isCreatingLine.from.shapeId === shapeId) {
      setIsCreatingLine(null);
      return;
    }

    const newLine: LineData = {
      id: `${Date.now()}`,
      from: isCreatingLine.from,
      to: { shapeId, port },
    };

    setLines((prev) => [...prev, newLine]);
    setIsCreatingLine(null);

    // Let the DOM update, then refresh lines
    setTimeout(() => {
      updateLines();
    }, 0);
  };

  // Delete a shape (and all its lines)
  const deleteShape = (shapeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLines((prev) =>
      prev.filter(
        (line) => line.from.shapeId !== shapeId && line.to.shapeId !== shapeId
      )
    );
    setShapes((prev) => prev.filter((shape) => shape.id !== shapeId));

    // Kill GSAP Draggable instance
    if (draggableInstances.current.has(shapeId)) {
      draggableInstances.current.get(shapeId)?.kill();
      draggableInstances.current.delete(shapeId);
    }
  };

  // Delete a line
  const deleteLine = (lineId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLines((prev) => prev.filter((line) => line.id !== lineId));
  };

  // Cancel line creation if user clicks outside
  const cancelLineCreation = () => {
    setIsCreatingLine(null);
  };

  // Return an SVG <rect> for each shape type
  const renderShapeByType = (type: string) => {
    switch (type) {
      case "MaxPooling2D":
        return (
          <rect
            width="80"
            height="50"
            fill="white"
            stroke="#666566"
            strokeWidth="2"
            rx="5"
            ry="5"
          />
        );
      case "Conv2D":
      case "Flatten":
        return (
          <rect
            width="80"
            height="50"
            fill="white"
            stroke="#666566"
            strokeWidth="2"
            rx="0"
            ry="0"
          />
        );
      default:
        // E.g. ReLU, Dense, Dropout, Softmax...
        return (
          <rect
            width="80"
            height="50"
            fill="white"
            stroke="#666566"
            strokeWidth="2"
            rx="5"
            ry="5"
          />
        );
    }
  };

  // Whenever shapes or lines change, re-init draggables and refresh lines
  useEffect(() => {
    shapes.forEach((shape) => {
      makeShapeDraggable(shape.id);
    });
    // Slight delay to let the DOM update
    const timer = setTimeout(() => {
      updateLines();
    }, 50);

    return () => clearTimeout(timer);
  }, [shapes, lines]);

  // Also refresh lines if window size changes
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLines();
    }, 50);
    return () => clearTimeout(timer);
  }, [windowSize]);

  return (
    <div className="relative flex flex-col md:flex-row gap-10">
      {/* MOBILE SIDEBAR TOGGLE BUTTON (only shows on small screens) */}
      <div className="absolute top-2 right-2 md:hidden z-50">
        <button
          className="bg-purple-600 text-white p-2 rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide" : "Show"} Sidebar
        </button>
      </div>

      {/* Feature boxes - leftmost column (hidden on mobile) */}
      <div className="hidden md:flex w-1/4 h-[500px] flex-col justify-between gap-7">
        <div className="bg-purple-500 rounded-lg py-4 px-6 text-white text-center font-medium text-base">
          {t("approbation.features.intuitive")}
        </div>
        <div className="bg-purple-500 rounded-lg py-4 px-6 text-white text-center font-medium text-base">
          {t("approbation.features.flexibility")}
        </div>
        <div className="bg-purple-500 rounded-lg py-4 px-6 text-white text-center font-medium text-base">
          {t("approbation.features.accessibility")}
        </div>
        <div className="bg-purple-500 rounded-lg py-4 px-6 text-white text-center font-medium text-base">
          {t("approbation.features.variety")}
        </div>
        <div className="bg-purple-500 rounded-lg py-4 px-6 text-white text-center font-medium text-base">
          {t("approbation.features.performance")}
        </div>
      </div>

      {/* Middle column (Sidebar) + Right column (Canvas) */}
      <div className="flex flex-col md:flex-row w-full h-[500px]">
        {/* SIDEBAR */}
        <aside
          className={`h-full bg-purple-700 shadow-lg transition-all duration-300 z-40
            ${
              sidebarOpen
                ? // Show on mobile: full width; on desktop: 1/3
                  "block w-full md:w-1/3 p-3"
                : // Hidden on mobile; always visible on desktop
                  "hidden md:block w-1/3 p-0 md:p-3"
            }
          `}
        >
          {/* Tabs: Shapes vs. Instructions */}
          <div className="flex w-fit justify-between space-x-3 mb-6 px-2">
            <button
              className={`text-md font-medium text-white px-4 py-2 rounded-lg transition-all ${
                activePanel === "shapes"
                  ? "bg-purple-500"
                  : "bg-purple-600 hover:bg-purple-500"
              }`}
              onClick={() => setActivePanel("shapes")}
            >
              Фигурки
            </button>
            <button
              className={`text-md font-medium text-white px-4 py-2 rounded-lg transition-all ${
                activePanel === "instructions"
                  ? "bg-purple-500"
                  : "bg-purple-600 hover:bg-purple-500"
              }`}
              onClick={() => setActivePanel("instructions")}
            >
              Инструкции
            </button>
          </div>

          {/* Shapes Panel */}
          {activePanel === "shapes" && (
            <ul className="space-y-3 overflow-y-auto mx-3">
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("Conv2D")}
              >
                <span className="text-base">Conv2D</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("ReLU")}
              >
                <span className="text-base">ReLU</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("MaxPooling2D")}
              >
                <span className="text-base">MaxPooling2D</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("Flatten")}
              >
                <span className="text-base">Flatten</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("Dense")}
              >
                <span className="text-base">Dense</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("Dropout")}
              >
                <span className="text-base">Dropout</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
              <li
                className="p-3 bg-purple-400 rounded-lg cursor-pointer hover:bg-purple-300 transition-all shadow-sm text-white font-medium flex items-center justify-between"
                onClick={() => addShape("Softmax")}
              >
                <span className="text-base">Softmax</span>
                <button className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                  +
                </button>
              </li>
            </ul>
          )}

          {/* Instructions Panel */}
          {activePanel === "instructions" && (
            <div className="text-ellipsis text-xs md:text-sm text-purple-100 bg-purple-700 p-3 md:p-4 rounded-lg shadow-inner">
              <ul className="space-y-1 md:space-y-2 list-disc pl-4">
                <li>Нажмите на фигуру, чтобы добавить ее на холст</li>
                <li>Перетаскивайте фигуры, чтобы разместить их</li>
                <li>Нажмите на кружки портов для создания соединений</li>
                <li>
                  Дважды щелкните по фигуре, чтобы удалить ее и ее соединения
                </li>
                <li>
                  Наведите курсор на фигуру, чтобы увидеть кнопку удаления
                </li>
                <li>Нажмите на линию, чтобы удалить ее</li>
              </ul>
            </div>
          )}
        </aside>

        {/* CANVAS AREA */}
        <div
          ref={containerRef}
          className="w-full md:w-2/3 h-[500px] relative bg-[#f0f7ff] overflow-hidden"
        >
          {/* Background Grid */}
          <div className="w-full absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="5"
                  height="5"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="0.2"
                  />
                </pattern>
                <pattern
                  id="notebook"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="20" height="20" fill="url(#grid)" />
                  <path
                    d="M 0 0 L 100 0 100 100 0 100 Z"
                    fill="none"
                    stroke="#6faaf2"
                    strokeWidth="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#notebook)" />
            </svg>
          </div>

          {/* The scrollable area for shapes */}
          <div
            ref={canvasRef}
            className="absolute inset-0 overflow-auto touch-auto"
            onMouseMove={updateTempLine}
            onTouchMove={updateTempLine}
            onClick={cancelLineCreation}
            onTouchEnd={cancelLineCreation}
          >
            {/* LINES SVG */}
            <svg className="absolute inset-0" width="100%" height="100%">
              {lines.map((line) => (
                <g key={line.id}>
                  {/* Clickable hit area (invisible but thicker line) */}
                  <line
                    id={`hitarea-${line.id}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="0"
                    stroke="rgba(255, 0, 0, 0)"
                    strokeWidth={15}
                    className="cursor-pointer"
                    onClick={(e) => deleteLine(line.id, e)}
                  />
                  {/* Visible line */}
                  <line
                    id={`line-${line.id}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="0"
                    stroke="black"
                    strokeWidth={2}
                    className="pointer-events-none"
                  />
                </g>
              ))}

              {/* Temporary line while creating a connection */}
              {isCreatingLine && (
                <line
                  id="temp-line"
                  stroke="black"
                  strokeWidth={2}
                  strokeDasharray="5,5"
                  x1={getPortPosition(
                    isCreatingLine.from.shapeId,
                    isCreatingLine.from.port
                  ).x}
                  y1={getPortPosition(
                    isCreatingLine.from.shapeId,
                    isCreatingLine.from.port
                  ).y}
                  x2={isCreatingLine.currentPos.x}
                  y2={isCreatingLine.currentPos.y}
                  className="pointer-events-none"
                />
              )}
            </svg>

            {/* SHAPES SVG */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="100%"
              height="100%"
            >
              {shapes.map((shape) => (
                <g
                  key={shape.id}
                  ref={(el) => {
                    if (el) shapeRefs.current.set(shape.id, el);
                  }}
                  transform={`translate(${shape.position.x},${shape.position.y})`}
                  className="cursor-move pointer-events-auto"
                  onDoubleClick={(e) => deleteShape(shape.id, e)}
                >
                  {/* The shape itself (rect) */}
                  {renderShapeByType(shape.type)}

                  {/* The shape’s label */}
                  <text
                    x="40"
                    y="30"
                    textAnchor="middle"
                    fontSize={windowSize.width < 768 ? "10" : "12"}
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    {shape.type}
                  </text>

                  {/* Optional: delete "X" button in the corner */}
                  <g className="opacity-0 hover:opacity-100 transition-opacity">
                    <circle cx="75" cy="8" r="7" fill="#ff4d4f" />
                    <text
                      x="75"
                      y="11"
                      fontSize="10"
                      fill="white"
                      textAnchor="middle"
                    >
                      ✕
                    </text>
                  </g>

                  {/* Connection ports (left/right) */}
                  <circle
                    cx="0"
                    cy="25"
                    r="5"
                    fill="#9333ea"
                    className="cursor-pointer pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      isCreatingLine
                        ? finishConnection(shape.id, "left")
                        : startConnection(shape.id, "left", e);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      isCreatingLine
                        ? finishConnection(shape.id, "left")
                        : startConnection(shape.id, "left", e);
                    }}
                  />
                  <circle
                    cx="80"
                    cy="25"
                    r="5"
                    fill="#9333ea"
                    className="cursor-pointer pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      isCreatingLine
                        ? finishConnection(shape.id, "right")
                        : startConnection(shape.id, "right", e);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      isCreatingLine
                        ? finishConnection(shape.id, "right")
                        : startConnection(shape.id, "right", e);
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
