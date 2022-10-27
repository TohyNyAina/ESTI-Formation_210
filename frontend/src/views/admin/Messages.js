import React from "react";

// components

import MessagesTable from "components/Cards/MessagesTable";


export default function Messages() {
  return (
    <>
    <div className="flex flex-wrap mt-6">
      <div className="flex flex-wrap mt-6">
        <div className="w-full mb-12 px-4"à>
          <MessagesTable/>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <Catalogue color="dark" />
        </div> */}
      </div>
      </div>
    </>
  );
}
