import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Formations from "views/admin/Formations.js";
import Agenda from "views/admin/Agenda.js";
import Messages from "views/admin/Messages.js";
import EditForm from "views/admin/EditForm.js";
import EditCatal from "views/admin/EditCatal";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/formations" exact component={Formations} />
            <Route path="/admin/agenda" exact component={Agenda}/>
            <Route path="/admin/messages" exact component={Messages}/>
            <Route path="/admin/editform/:id" exact component={EditForm}/>
            <Route path="/admin/editcatal/:id" exact component={EditCatal}/>
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
