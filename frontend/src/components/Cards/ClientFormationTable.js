import React from "react";
import { useState, useEffect } from "react";
// import http from "../http";
import axios from "axios";
import "./CardTable.css"


// components



export default function ClientFormationTable({ color }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    axios.get('http://127.0.0.1:8000/api/user').then(res => {
      setUsers(res.data);
    })
  }

  const deleteUser = (id) => {
    const res = axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(res => {
      fetchAllUsers();
    })
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap mt-6">
            <h2 className="text-blueGray-700 text-xl font-semibold"> Liste des Formations <br /></h2>
            <table className='table'>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Secteur</th>
                  <th>Categorie</th>
                  <th>Taux horaires enseignant Min</th>
                  <th>Taux horaires enseignant Max</th>
                  <th>Cout reel Horaire Min</th>
                  <th>Cout reel Horaire Max</th>
                  <th>Cout reel Journalier Min</th>
                  <th>Cout reel Journalier Max</th>
                  
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{++index}</td>
                    <td>{user.name}</td>
                    <td>{user.categorie}</td>
                    <td>{user.themin}</td>
                    <td>{user.themax}</td>
                    <td>{user.crhmin}</td>
                    <td>{user.crhmax}</td>
                    <td>{user.crjmin}</td>
                    <td>{user.crjmax}</td>
                    
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}


