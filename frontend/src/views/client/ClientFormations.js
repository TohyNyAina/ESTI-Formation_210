import React from "react";

// components

import ClientFormationTable from "components/Cards/ClientFormationTable";
import ClientCatalogue from "components/Cards/ClientCatalogue";

export default function ClientFormations() {
  return (
    <>
    <div className="flex flex-wrap mt-6">
      <div className="flex flex-wrap mt-6">
        <div className="w-full mb-12 px-4">
          <ClientFormationTable />
        </div>
        <div className="w-full mb-12 px-4">
          <ClientCatalogue color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
