import React from "react";

const ChatsColumn = () => {
  return (
    <ul className="space-y-5 w-full px-5 py-4 h-[35rem] mb-5 overflow-y-scroll">
      <li className="flex gap-x-2 sm:gap-x-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
          <h2 className="font-medium text-gray-800">How can we help?</h2>
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800">
              You can ask questions like:
            </p>
            <ul className="list-disc list-outside space-y-1.5 ps-3.5">
              <li className="text-sm text-gray-800">Whats Preline UI?</li>

              <li className="text-sm text-gray-800">
                How many Starter Pages & Examples are there?
              </li>

              <li className="text-sm text-gray-800">Is there a PRO version?</li>
            </ul>
          </div>
        </div>
      </li>

      <li className=" ms-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          <div className="inline-block bg-gray-900 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">whats preline ui?</p>
          </div>
        </div>
      </li>

      <li className=" flex gap-x-2 sm:gap-x-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
          <p className="text-sm text-gray-800">
            Preline UI is an open-source set of prebuilt UI components based on
            the utility-first Tailwind CSS framework.
          </p>
          <div className="space-y-1.5">
            <p className="text-sm text-gray-800">
              Herere some links to get started
            </p>
            <ul>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  href=""
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  href=""
                >
                  Framework Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className=" ms-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          <div className="inline-block bg-gray-900 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">whats preline ui?</p>
          </div>
        </div>
      </li>
      <li className=" ms-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          <div className="inline-block bg-gray-900 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">whats preline ui?</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ChatsColumn;
