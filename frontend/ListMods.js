import React, { useState, useEffect } from "react";
import HeaderS from "../students/HeaderS";
import axios from "axios";
import Swal from "sweetalert2";
import AnimatedPage from "../AnimatedPage";

function ListMods() {
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  useEffect(() => {
    var grade = window.prompt("Enter Grade to see List");
    const res = axios
      .get(`http://localhost:8000/api/module/list/${grade}`)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setData(res.data);
          setIsLoading(false);
        }, 3000);
        setData(res.data);
      });
  }, []);
  const deleteMods = async (e, id) => {
    e.preventDefault();
    const click = e.currentTarget;
    click.innerText = "Deleting";
    const res = await axios.delete(`http://localhost:8000/api/module/${id}`);
    if (res.data.status === 200) {
      click.closest("tr").remove();
      Swal.fire({
        text: "Mods Deleted",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <AnimatedPage>
      {loading ? (
        <center>
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      ) : (
        <>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Hour</th>
                  <th scope="col">Credit</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((mods) => {
                  return (
                    <tr scope="row" key={mods.module.id}>
                      <td>{mods.module.name}</td>
                      <td>{mods.module.code}</td>
                      <td>{mods.module.hour}</td>
                      <td>{mods.module.coefficient}</td>
                      <td>
                        <button
                          type="submit"
                          value="Envoyer"
                          className="btn btn-danger"
                          onClick={(e) => deleteMods(e, mods.module.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AnimatedPage>
  );
}

export default ListMods;
