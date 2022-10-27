import React from "react";

// components

import CreateFormation from "components/Cards/CreateFormation";
import CardProfile from "components/Cards/CardProfile.js";
import CreateCatalogue from "components/Cards/CreateCatalogue";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CreateFormation /> <br /> <CreateCatalogue/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
