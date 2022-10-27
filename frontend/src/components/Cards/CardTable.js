import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import http from "../http";
import axios from "axios";
import Edit from "../Cards/edit.png";
import Delete from "../Cards/delete.png"
import "./CardTable.css"


// components



export default function CardTable({ color }) {
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
                  <th>Action</th>
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
                    <td class="flex">
                     
                  <Link
                  className={
                    (window.location.href.indexOf("/admin/formations") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to={{ pathname:"/admin/editform/" + user.id}}
                  >
                  <i
                    className={
                      (window.location.href.indexOf("/admin/editform") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  <img src={Edit} alt="" width="30px" height="30px" />
                  </Link>

                      {/* <Link className="btn btn-primary" to={{ pathname:"/view/"+user.id }}>Voir</Link> */}
                      <button type="button" className="btn btn-danger"
                        onClick={() => { deleteUser(user.id) }}
                      > <img src={Delete} alt="" width="30px" height="30px" /> </button>
                    </td>
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

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
