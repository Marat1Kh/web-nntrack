import { useLanguage } from "@/context/LanguageContext";
export default function Information() {
  const { t } = useLanguage();

  return (
    <div className="py-1">
      <div className="w-full mb-12">
        <div className="flex flex-col gap-6">
     
          <h3 className="text-center text-3xl font-bold">
            {t("useCases.title")}
          </h3>

          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
           
            <div className="w-full md:w-1/2">
              <h2 className="text-center bg-purple-500 text-xl font-semibold rounded-md p-3 text-white">
                {t("useCases.desktop.title")}
              </h2>

              <div className="flex flex-col md:flex-row justify-between gap-4">
             
                <div className="flex flex-col border-r border-indigo-500 gap-4 p-4">
                  <div className="text-center">
                    <div className="flex justify-around">
                      <img src="../camera.png" alt="Camera" />
                      <img src="../galery.png" alt="Gallery" />
                    </div>
                    <p className="font-semibold text-xl">
                      {t("useCases.desktop.features.0.title")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.desktop.features.0.points.0")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.desktop.features.0.points.1")}
                    </p>
                  </div>
                </div>

      
                <div className="flex flex-col gap-4 p-4">
                  <div className="text-center">
                    <img src="../api.png" alt="API" className="mx-auto" />
                    <p className="text-xl font-semibold">
                      {t("useCases.desktop.features.1.title")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.desktop.features.1.points.0")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.desktop.features.1.points.1")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

     
            <div className="w-full md:w-1/2 ">
              <h2 className="text-center bg-purple-500 text-xl font-semibold rounded-md p-3 text-white">
                {t("useCases.robots.title")}
              </h2>

              <div className="flex flex-col md:flex-row justify-between gap-4">
              
                <div className="flex flex-col border-r border-indigo-500 gap-4 p-4">
                  <div className="text-center">
                    <img
                      src="../station.png"
                      alt="Stationary Robot"
                      className="mx-auto"
                    />
                    <p className="font-semibold text-xl">
                      {t("useCases.robots.features.0.title")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.robots.features.0.points.0")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-4">
            <div className="text-center">
                    <img
                      src="../robot.png"
                      alt="Mobile Robot"
                      className="mx-auto"
                    />
                    <p className="text-xl font-semibold">
                      {t("useCases.robots.features.1.title")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-purple-600 text-3xl">✓</span>
                    <p className="text-sm">
                      {t("useCases.robots.features.1.points.0")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
                            </div>
                        </div>
                    </div>

      <div className="w-full">
        <div className="flex items-center gap-4 mb-6 p-4">
          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            20 {t("information.lessons")}
          </div>
          <h4 className="text-xl font-semibold">
            {t("information.course.convolutionalNN.title")}
          </h4>
        </div>

        <div className="space-y-4 mb-8 p-4">
          <div className="flex items-start gap-2">
            <span className="text-purple-600 text-xl">✓</span>
            <p>{t("information.course.convolutionalNN.point1")}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-purple-600 text-xl">✓</span>
            <p>{t("information.course.convolutionalNN.point2")}</p>
          </div>
        </div>

        <div className="relative border-2 border-purple-400 rounded-[2rem] p-8">
          <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-purple-500 text-white px-8 py-1.5 rounded-full text-center min-w-[140px]">
              <h5 className="text-base font-semibold">
                {t("information.exampleTopics")}
              </h5>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <span className="text-sm">
                  {t(`information.course.convolutionalNN.topics.${index + 1}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6 p-4">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              21 {t("information.lessons")}
            </div>
            <h4 className="text-xl font-semibold">
              {t("information.course.aiBasics.title")}
            </h4>
          </div>

          <div className="space-y-4 mb-8 p-4">
            <div className="flex items-start gap-2">
              <span className="text-purple-600 text-xl">✓</span>
              <p>{t("information.course.aiBasics.point1")}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 text-xl">✓</span>
              <p>{t("information.course.aiBasics.point2")}</p>
            </div>
          </div>

          <div className="relative border-2 border-purple-400 rounded-[2rem] p-8">
            <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-purple-500 text-white px-8 py-1.5 rounded-full text-center min-w-[140px]">
                <h5 className="text-base font-semibold">
                  {t("information.exampleTopics")}
                </h5>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 6v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    </div>
                  <span className="text-sm">
                    {t(`information.course.aiBasics.topics.${index + 1}`)}
                  </span>
                </div>
              ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
