import React from "react";

/* FULLSCREEN LOADER */
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-20">
      <div className="w-32 h-32 border-t-2 border-b-2 rounded-full animate-spin border-primary" />
    </div>
  );
};

export default Loader;
