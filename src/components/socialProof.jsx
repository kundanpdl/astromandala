import React from "react";

const SocialProof = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row mt-20 mb-10 px-5">
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center flex-1 p-4">
        <h1 className="text-yellow-800 text-5xl">12+</h1>
        <h3 className="text-yellow-800 text-2xl text-center uppercase">
          Years Of Experience
        </h3>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center flex-1 p-4">
        <h1 className="text-yellow-800 text-5xl">200+ Clients</h1>
        <h3 className="text-yellow-800 text-2xl text-center uppercase">
          Trusted By Hundreds Of Clients
        </h3>
      </div>
      {/* <div className="divider lg:divider-horizontal"></div>
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
        content
      </div> */}
    </div>
  );
};

export default SocialProof;
