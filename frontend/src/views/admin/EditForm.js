import React from "react";

// components

import EditFormation from "components/Cards/EditFormation";
import CardProfile from "components/Cards/CardProfile.js";


export default function EditForm() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <EditFormation /> 
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}