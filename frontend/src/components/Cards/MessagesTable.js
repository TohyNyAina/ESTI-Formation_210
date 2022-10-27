import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import http from "../http";
import axios from "axios";
import Delete from "../Cards/delete.png"
import "./CardTable.css"



// components



export default function MessagesTable({ color }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    axios.get('http://127.0.0.1:8000/api/message').then(res => {
      setUsers(res.data);
    })
  }

  const deleteUser = (id) => {
    const res = axios.delete(`http://127.0.0.1:8000/api/message/${id}`).then(res => {
      fetchAllUsers();
    })
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-6 py-6 bg-transparent">
        <h2 className="text-blueGray-700 text-xl font-semibold"> Boite de reception </h2> <hr />
          <div className="flex flex-wrap mt-6">
          
           <div> {users.map((user, index) => (
            <div key={user.id}> <h6 className="text-blueGray-700 text-xl font-semibold">{++index} - {user.nom} {user.prenom} ,    {user.email}</h6> <p> {user.message}   <button type="button"  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            onClick={() => { deleteUser(user.id) }}
          >  Supprimer </button> </p> </div>
           ))} </div>
           
          </div>
        </div>
      </div>
           
    </>
  );
}

