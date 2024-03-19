import React from "react";

function DashboardPage() {
  return (
    <>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-3">
        <header className={`col-span-2`}>
          <p className="mb-2 text-sm font-semibold text-amber-400">
            Halo, Admin 👋
          </p>
          <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
            Dashboard
          </h1>
        </header>
      </div>
    </>
  );
}

export default DashboardPage;
