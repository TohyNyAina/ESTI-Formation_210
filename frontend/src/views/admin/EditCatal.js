import React from "react";

// components

import CardProfile from "components/Cards/CardProfile.js";
import EditCatalogue from "components/Cards/EditCatalogue";


export default function EditCatal() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <EditCatalogue /> 
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}