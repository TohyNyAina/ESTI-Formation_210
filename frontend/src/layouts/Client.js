import React from "react";
import { Switch, Route, Redirect } from "react-router";

// components

import ClientNavbar from "components/Navbars/ClientNavbar";
import ClientSidebar from "components/Sidebar/ClientSidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

// views

import ClientDashboard from "views/client/ClientDashboard";
import ClientFormations from "views/client/ClientFormations";
import Planing from "views/client/Planing";
import Achat from "views/client/Achat";

export default function Client() {
    return(
        <>
            <ClientSidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <ClientNavbar/>

                <HeaderStats/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/client/clientdashboard" exact component={ClientDashboard}/>
                        <Route path="/client/clientFormations" exact component={ClientFormations}/>
                        <Route path="/client/planing" exact component={Planing}/>
                        <Route path="/client/achat" exact component={Achat} />
                        <Redirect from= "/client" to="/client/clientdashboard" />
                    </Switch>
                    <FooterAdmin />
                </div>
            </div>
        </>
    )
}