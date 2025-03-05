// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(Draggable);

// export default function FlowPage() {
//   // Container ref for offset calculations
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Refs for shape groups
//   const shape1Ref = useRef<SVGGElement>(null);
//   const shape2Ref = useRef<SVGGElement>(null);
//   const shape3Ref = useRef<SVGGElement>(null);
//   const shape4Ref = useRef<SVGGElement>(null);
//   const shape5Ref = useRef<SVGGElement>(null);

//   // Refs for lines connecting the shapes
//   // e.g. line1: shape1.rightCircle -> shape2.leftCircle
//   const line1Ref = useRef<SVGLineElement>(null);
//   const line2Ref = useRef<SVGLineElement>(null);
//   const line3Ref = useRef<SVGLineElement>(null);
//   const line4Ref = useRef<SVGLineElement>(null);

//   // For each shape, define where the left/right circle is *within* the shape's local coords
//   // We'll place the rectangle at [0,0] to [80,50].
//   // The left circle is at (0,25), the right circle is at (80,25).
//   // We'll store these offsets to compute global positions for lines.
//   const circleOffsets = {
//     left: { x: 0, y: 25 },
//     right: { x: 80, y: 25 },
//   };

//   /**
//    * Get bounding box of the entire <g> group. 
//    * We'll add the local circle offset to the top-left corner to get the circle's global position,
//    * then convert to container-local coordinates.
//    */
//   function getCirclePosition(gEl: SVGGElement, offset: { x: number; y: number }) {
//     const shapeRect = gEl.getBoundingClientRect();
//     const containerRect = containerRef.current?.getBoundingClientRect();
//     if (!containerRect) {
//       // fallback if container is not defined
//       return {
//         x: shapeRect.left + offset.x,
//         y: shapeRect.top + offset.y,
//       };
//     }
//     return {
//       x: shapeRect.left - containerRect.left + offset.x,
//       y: shapeRect.top - containerRect.top + offset.y,
//     };
//   }

//   /**
//    * Update all lines to connect the shapes at their left/right circles
//    */
//   function updateLines() {
//     if (
//       !line1Ref.current ||
//       !line2Ref.current ||
//       !line3Ref.current ||
//       !line4Ref.current ||
//       !shape1Ref.current ||
//       !shape2Ref.current ||
//       !shape3Ref.current ||
//       !shape4Ref.current ||
//       !shape5Ref.current
//     )
//       return;

//     // shape1.right -> shape2.left
//     const shape1Right = getCirclePosition(shape1Ref.current, circleOffsets.right);
//     const shape2Left = getCirclePosition(shape2Ref.current, circleOffsets.left);
//     line1Ref.current.setAttribute("x1", shape1Right.x.toString());
//     line1Ref.current.setAttribute("y1", shape1Right.y.toString());
//     line1Ref.current.setAttribute("x2", shape2Left.x.toString());
//     line1Ref.current.setAttribute("y2", shape2Left.y.toString());

//     // shape2.right -> shape3.left
//     const shape2Right = getCirclePosition(shape2Ref.current, circleOffsets.right);
//     const shape3Left = getCirclePosition(shape3Ref.current, circleOffsets.left);
//     line2Ref.current.setAttribute("x1", shape2Right.x.toString());
//     line2Ref.current.setAttribute("y1", shape2Right.y.toString());
//     line2Ref.current.setAttribute("x2", shape3Left.x.toString());
//     line2Ref.current.setAttribute("y2", shape3Left.y.toString());

//     // shape3.right -> shape4.left
//     const shape3Right = getCirclePosition(shape3Ref.current, circleOffsets.right);
//     const shape4Left = getCirclePosition(shape4Ref.current, circleOffsets.left);
//     line3Ref.current.setAttribute("x1", shape3Right.x.toString());
//     line3Ref.current.setAttribute("y1", shape3Right.y.toString());
//     line3Ref.current.setAttribute("x2", shape4Left.x.toString());
//     line3Ref.current.setAttribute("y2", shape4Left.y.toString());

//     // shape4.right -> shape5.left
//     const shape4Right = getCirclePosition(shape4Ref.current, circleOffsets.right);
//     const shape5Left = getCirclePosition(shape5Ref.current, circleOffsets.left);
//     line4Ref.current.setAttribute("x1", shape4Right.x.toString());
//     line4Ref.current.setAttribute("y1", shape4Right.y.toString());
//     line4Ref.current.setAttribute("x2", shape5Left.x.toString());
//     line4Ref.current.setAttribute("y2", shape5Left.y.toString());
//   }

//   useEffect(() => {
//     // Make shapes draggable
//     const draggables = [
//       Draggable.create(shape1Ref.current, { type: "x,y", onDrag: updateLines })[0],
//       Draggable.create(shape2Ref.current, { type: "x,y", onDrag: updateLines })[0],
//       Draggable.create(shape3Ref.current, { type: "x,y", onDrag: updateLines })[0],
//       Draggable.create(shape4Ref.current, { type: "x,y", onDrag: updateLines })[0],
//       Draggable.create(shape5Ref.current, { type: "x,y", onDrag: updateLines })[0],
//     ];

//     // Initial line positions
//     updateLines();

//     // Cleanup Draggables on unmount (helps with Strict Mode)
//     return () => {
//       draggables.forEach((d) => d.kill());
//     };
//   }, []);

//   return (
//     <div className="flex min-h-screen">
//       {/* LEFT SIDEBAR */}
//       <aside className="w-64 bg-gray-100 p-4">
//         <h2 className="text-xl font-bold mb-4">Shapes</h2>
//         <ul className="space-y-2">
//           <li className="p-2 bg-blue-200 rounded">Dense</li>
//           <li className="p-2 bg-blue-200 rounded">ReLU</li>
//           <li className="p-2 bg-blue-200 rounded">Dropout</li>
//           <li className="p-2 bg-blue-200 rounded">Softmax</li>
//         </ul>
//       </aside>

//       {/* MAIN AREA */}
//       <div
//         ref={containerRef}
//         className="relative flex-1 bg-white"
//         style={{ minHeight: "600px" }}
//       >
//         {/* Lines drawn in an overlay SVG */}
//         <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
//           <line ref={line1Ref} stroke="black" strokeWidth={2} />
//           <line ref={line2Ref} stroke="black" strokeWidth={2} />
//           <line ref={line3Ref} stroke="black" strokeWidth={2} />
//           <line ref={line4Ref} stroke="black" strokeWidth={2} />
//         </svg>

//         {/* Single big SVG for shapes (g groups) */}
//         <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
//           {/* shape 1: Dense */}
//           <g
//             ref={shape1Ref}
//             transform="translate(150,100)"
//             className="cursor-move pointer-events-auto"
//           >
//             {/* Rectangle body */}
//             <rect width="80" height="50" fill="white" stroke="#ccc" strokeWidth="2" rx="5" ry="5" />
//             {/* Label */}
//             <text
//               x="40"
//               y="30"
//               textAnchor="middle"
//               fontSize="14"
//               fontFamily="sans-serif"
//             >
//               Dense
//             </text>
//             {/* Left circle */}
//             <circle cx="0" cy="25" r="5" fill="#ccc" />
//             {/* Right circle */}
//             <circle cx="80" cy="25" r="5" fill="#ccc" />
//           </g>

//           {/* shape 2: ReLU */}
//           <g
//             ref={shape2Ref}
//             transform="translate(300,100)"
//             className="cursor-move pointer-events-auto"
//           >
//             <rect width="80" height="50" fill="white" stroke="#ccc" strokeWidth="2" rx="5" ry="5" />
//             <text
//               x="40"
//               y="30"
//               textAnchor="middle"
//               fontSize="14"
//               fontFamily="sans-serif"
//             >
//               ReLU
//             </text>
//             <circle cx="0" cy="25" r="5" fill="#ccc" />
//             <circle cx="80" cy="25" r="5" fill="#ccc" />
//           </g>

//           {/* shape 3: Dropout */}
//           <g
//             ref={shape3Ref}
//             transform="translate(450,100)"
//             className="cursor-move pointer-events-auto"
//           >
//             <rect width="80" height="50" fill="white" stroke="#ccc" strokeWidth="2" rx="5" ry="5" />
//             <text
//               x="40"
//               y="30"
//               textAnchor="middle"
//               fontSize="14"
//               fontFamily="sans-serif"
//             >
//               Dropout
//             </text>
//             <circle cx="0" cy="25" r="5" fill="#ccc" />
//             <circle cx="80" cy="25" r="5" fill="#ccc" />
//           </g>

//           {/* shape 4: Dense */}
//           <g
//             ref={shape4Ref}
//             transform="translate(600,100)"
//             className="cursor-move pointer-events-auto"
//           >
//             <rect width="80" height="50" fill="white" stroke="#ccc" strokeWidth="2" rx="5" ry="5" />
//             <text
//               x="40"
//               y="30"
//               textAnchor="middle"
//               fontSize="14"
//               fontFamily="sans-serif"
//             >
//               Dense
//             </text>
//             <circle cx="0" cy="25" r="5" fill="#ccc" />
//             <circle cx="80" cy="25" r="5" fill="#ccc" />
//           </g>

//           {/* shape 5: Softmax */}
//           <g
//             ref={shape5Ref}
//             transform="translate(750,100)"
//             className="cursor-move pointer-events-auto"
//           >
//             <rect width="80" height="50" fill="white" stroke="#ccc" strokeWidth="2" rx="5" ry="5" />
//             <text
//               x="40"
//               y="30"
//               textAnchor="middle"
//               fontSize="14"
//               fontFamily="sans-serif"
//             >
//               Softmax
//             </text>
//             <circle cx="0" cy="25" r="5" fill="#ccc" />
//             <circle cx="80" cy="25" r="5" fill="#ccc" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import React, { useEffect, useRef, useState, useCallback } from "react";
// // import gsap from "gsap";
// // import { Draggable } from "gsap/Draggable";

// // gsap.registerPlugin(Draggable);

// // // Data structures for shapes and lines.
// // interface ShapeData {
// //   id: string;
// //   type: string;
// //   x: number;
// //   y: number;
// // }

// // type PortSide = "left" | "right";

// // interface LineData {
// //   id: string;
// //   startShapeId: string;
// //   startPort: PortSide;
// //   endShapeId: string;
// //   endPort: PortSide;
// // }

// // interface PendingConnection {
// //   shapeId: string;
// //   port: PortSide;
// // }

// // export default function FlowPage() {
// //   // State for shapes and lines.
// //   const [shapes, setShapes] = useState<ShapeData[]>([]);
// //   const [lines, setLines] = useState<LineData[]>([]);
// //   const [pendingConnection, setPendingConnection] = useState<PendingConnection | null>(null);

// //   // Refs for storing each shape's <g> element.
// //   const shapeRefs = useRef<Record<string, SVGGElement | null>>({});

// //   // Ref for the container (for local coordinate conversion)
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   // Ref to store GSAP draggable instances.
// //   const draggablesRef = useRef<Record<string, any>>({});

// //   // When user clicks a shape type in the sidebar, add a new shape.
// //   const handleAddShape = (shapeType: string) => {
// //     const id = crypto.randomUUID();
// //     // Place new shape at default coordinates.
// //     const newShape: ShapeData = { id, type: shapeType, x: 200, y: 200 };
// //     setShapes((prev) => [...prev, newShape]);
// //   };

// //   // When a port is clicked, start or complete a connection.
// //   const handlePortClick = (shapeId: string, port: PortSide) => {
// //     if (!pendingConnection) {
// //       setPendingConnection({ shapeId, port });
// //     } else {
// //       // If clicking a different port, finalize connection.
// //       if (pendingConnection.shapeId !== shapeId || pendingConnection.port !== port) {
// //         const newLine: LineData = {
// //           id: crypto.randomUUID(),
// //           startShapeId: pendingConnection.shapeId,
// //           startPort: pendingConnection.port,
// //           endShapeId: shapeId,
// //           endPort: port,
// //         };
// //         setLines((prev) => [...prev, newLine]);
// //       }
// //       setPendingConnection(null);
// //     }
// //   };

// //   // When a line is clicked, remove it.
// //   const handleLineClick = (lineId: string) => {
// //     setLines((prev) => prev.filter((l) => l.id !== lineId));
// //   };

// //   // For our shapes, we assume a fixed size: 80 x 50.
// //   // Left port: (0, 25) and right port: (80, 25)
// //   const getPortOffset = (port: PortSide) =>
// //     port === "left" ? { x: 0, y: 25 } : { x: 80, y: 25 };

// //   // Given a shape, return its port position in container-local coordinates.
// //   const getPortPosition = (shape: ShapeData, port: PortSide) => {
// //     const containerRect = containerRef.current?.getBoundingClientRect();
// //     if (!containerRect) {
// //       return { x: shape.x, y: shape.y };
// //     }
// //     const offset = getPortOffset(port);
// //     return {
// //       x: shape.x + offset.x,
// //       y: shape.y + offset.y,
// //     };
// //   };

// //   // Render lines based on shapes' positions.
// //   const renderLines = () => {
// //     return lines.map((line) => {
// //       const startShape = shapes.find((s) => s.id === line.startShapeId);
// //       const endShape = shapes.find((s) => s.id === line.endShapeId);
// //       if (!startShape || !endShape) return null;
// //       const startPos = getPortPosition(startShape, line.startPort);
// //       const endPos = getPortPosition(endShape, line.endPort);
// //       return (
// //         <line
// //           key={line.id}
// //           x1={startPos.x}
// //           y1={startPos.y}
// //           x2={endPos.x}
// //           y2={endPos.y}
// //           stroke="black"
// //           strokeWidth={2}
// //           onClick={() => handleLineClick(line.id)}
// //           className="cursor-pointer"
// //         />
// //       );
// //     });
// //   };

// //   // Register GSAP Draggable for each shape. This effect runs when the shapes array changes.
// //   useEffect(() => {
// //     shapes.forEach((shape) => {
// //       const el = shapeRefs.current[shape.id];
// //       if (!el) return;
// //       // If already registered, skip.
// //       if (draggablesRef.current[shape.id]) return;

// //       draggablesRef.current[shape.id] = Draggable.create(el, {
// //         type: "x,y",
// //         onDrag() {
// //           const { x, y } = this;
// //           // Update the shape position in state.
// //           setShapes((prev) =>
// //             prev.map((s) => (s.id === shape.id ? { ...s, x, y } : s))
// //           );
// //         },
// //         onDragEnd: () => {
// //           // Optionally update lines on drag end.
// //         },
// //       })[0];
// //     });

// //     // When shapes change, update lines.
// //     // (We can call updateLines on every render by simply re-rendering lines in our render function.)
// //   }, [shapes]);

// //   return (
// //     <div className="flex min-h-screen">
// //       {/* SIDEBAR */}
// //       <aside className="w-64 bg-gray-100 p-4">
// //         <h2 className="text-xl font-bold mb-4">Shapes</h2>
// //         <p className="text-sm mb-2">Click to add a shape:</p>
// //         <ul className="space-y-2">
// //           {["Dense", "ReLU", "Dropout", "Dense", "Softmax"].map((type) => (
// //             <li
// //               key={type + Math.random()}
// //               className="p-2 bg-blue-200 rounded cursor-pointer"
// //               onClick={() => handleAddShape(type)}
// //             >
// //               {type}
// //             </li>
// //           ))}
// //         </ul>
// //         <p className="mt-4 text-sm text-gray-500">
// //           1) Click a shape's port to start a connection.
// //           <br />
// //           2) Click another port to complete.
// //           <br />
// //           3) Click a line to remove it.
// //         </p>
// //       </aside>

// //       {/* MAIN CANVAS */}
// //       <div ref={containerRef} className="relative flex-1 bg-white" style={{ minHeight: 600 }}>
// //         {/* SVG for lines */}
// //         <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
// //           {renderLines()}
// //         </svg>

// //         {/* Render shapes as SVG groups */}
// //         <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
// //           {shapes.map((shape) => (
// //             <g
// //               key={shape.id}
// //               // Store the element in shapeRefs for Draggable registration.
// //               ref={(el) => (shapeRefs.current[shape.id] = el)}
// //               transform={`translate(${shape.x},${shape.y})`}
// //               className="cursor-move pointer-events-auto"
// //             >
// //               <rect
// //                 width="80"
// //                 height="50"
// //                 fill="white"
// //                 stroke="#333"
// //                 strokeWidth={2}
// //                 rx={5}
// //                 ry={5}
// //               />
// //               <text
// //                 x={40}
// //                 y={30}
// //                 textAnchor="middle"
// //                 fontSize={14}
// //                 fontFamily="sans-serif"
// //                 fill="#333"
// //               >
// //                 {shape.type}
// //               </text>
// //               {/* Left port */}
// //               <circle
// //                 cx={0}
// //                 cy={25}
// //                 r={5}
// //                 fill="gray"
// //                 className="cursor-pointer pointer-events-auto"
// //                 onClick={() => handlePortClick(shape.id, "left")}
// //               />
// //               {/* Right port */}
// //               <circle
// //                 cx={80}
// //                 cy={25}
// //                 r={5}
// //                 fill="gray"
// //                 className="cursor-pointer pointer-events-auto"
// //                 onClick={() => handlePortClick(shape.id, "right")}
// //               />
// //             </g>
// //           ))}
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // }
