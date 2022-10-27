import React from "react";

// components

import CardProfile from "components/Cards/CardProfile";
import Sr from "components/Cards/sr";
import CardSettings from "components/Cards/CardSettings";

export default function ClientDashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
          <Sr/> <br />  <CardSettings />
        </div>
        <div className="w-full xl:w-4/12 px-4">
        <CardProfile />
        </div>
      </div>
      {/* <div className="w-full mb-12 px-4">
          <Vente color="dark" />
        </div> */}
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}
