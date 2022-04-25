import React from "react";

const Loader = () => {
  return (
    <div className="py-32 px-14 md:px-32">
      <img
        src="/images/vinyl_2.png"
        alt="Loader image"
        className="mx-auto animate-spin max-w-5xl w-full"
      />
    </div>
  );
};

export default Loader;