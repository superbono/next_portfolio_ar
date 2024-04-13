import React from "react";

export default function DetailStack() {
  return (
    <div className="flex flex-wrap mt-10 ">
      <div className="p-4" style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400  cursor-pointer p-10 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Language
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- JavaScript</p>
            <p className="leading-relaxed text-base">- TypeScript</p>
          </div>
        </div>
      </div>
      <div className="p-4" style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400 cursor-pointer p-10 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Web FE
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- React</p>
            <p className="leading-relaxed text-base">- Vue</p>
            <p className="leading-relaxed text-base">- Next</p>
            <p className="leading-relaxed text-base">- Nuxt</p>
            <p className="leading-relaxed text-base">- HTML</p>
            <p className="leading-relaxed text-base">- CSS</p>
            <p className="leading-relaxed text-base">- Pinia</p>
            <p className="leading-relaxed text-base">- Recoil</p>
          </div>
        </div>
      </div>
      {/* <div className="p-4 md:w-1/2"> */}
      <div className="p-4" style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400 cursor-pointer p-10 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Ui Framework
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- BootStrap</p>
            <p className="leading-relaxed text-base">- MUI</p>
            <p className="leading-relaxed text-base">- Tailwind</p>
            <p className="leading-relaxed text-base">- Vuetify</p>
            <p className="leading-relaxed text-base">- Quasar</p>
            <p className="leading-relaxed text-base">- Storybook</p>
          </div>
        </div>
      </div>
      <div className="p-4" style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400 cursor-pointer p-10 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Editor
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- Visual Code</p>
            <p className="leading-relaxed text-base">- Intellij</p>
          </div>
        </div>
      </div>
      <div className="p-4 " style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400 cursor-pointer  p-10 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Tool
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- Git</p>
            <p className="leading-relaxed text-base">- Github</p>
            <p className="leading-relaxed text-base">- SourceTree</p>
            <p className="leading-relaxed text-base">- SVN</p>
          </div>
        </div>
      </div>
      <div className="p-4 " style={{ width: "100%" }}>
        <div className="flex rounded-lg h-full border-2 border-gray-400  cursor-pointer p-8 flex-col hover:scale-105 duration-700">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-1 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Etc
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">- Postman</p>
            <p className="leading-relaxed text-base">- Zeplin</p>
            <p className="leading-relaxed text-base">- Figma</p>
            <p className="leading-relaxed text-base">- Notion</p>
            <p className="leading-relaxed text-base">- MS Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}
