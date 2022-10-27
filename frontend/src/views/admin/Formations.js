import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import Catalogue from "components/Cards/Catalogue";

export default function Formations() {
  return (
    <>
    <div className="flex flex-wrap mt-6">
      <div className="flex flex-wrap mt-6">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <Catalogue color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
