import React from "react";

const SectionTitle = ({ mainHeader, subHeader }) => {
  return (
    <div className="mx-auto text-center md:w-6/12 lg:w-4/12 my-8">
      <p className="text-yellow-500 mb-2">--- {subHeader} ---</p>
      <h3 className="text-4xl border-y-4 uppercase py-4">{mainHeader}</h3>
    </div>
  );
};

export default SectionTitle;
