import React from "react";
import axios from "axios";
import { useState } from "react"
import addNotification from "react-push-notification";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components

export default function CreateFormation() {
    // const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [categorie, setCategorie] = useState("A");
    const submitForm = () => {
        addNotification({
            title: 'ESTI Formation',
            message: 'Formation crée avec succes',
            duration:6000,
            native: true,
        });
        inputs.categorie = categorie
        console.log(inputs)
        axios.post('http://localhost:8000/api/user', inputs).then((res) => {
            // navigate('/formation');
        })
    }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
          <table ClassName="tab">
                        <thead>
                          <tr className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Création d'une nouvelle formation</tr>
                            <tr>
                                <th> <label>Secteur</label> <br />
                                    <input type="text" name="name" className="from-control mb-2"
                                        value={inputs.name || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                                <th> <label>Categorie</label> <br />
                                    <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>  <label>Taux horaires enseignant Min</label> <br />
                                    <input type="number" name="themin" className="from-control mb-2"
                                        value={inputs.themin || ''}
                                        onChange={handleChange}
                                    /> </th>
                                <th>  <label>Taux horaires enseignant Max</label> <br />
                                    <input type="number" name="themax" className="from-control mb-2"
                                        value={inputs.themax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Horaire Min</label> <br />
                                    <input type="number" name="crhmin" className="from-control mb-2"
                                        value={inputs.crhmin || ''}
                                        onChange={handleChange}
                                    /> </th>
                                <th>   <label>Cout reel Horaire Max</label> <br />
                                    <input type="number" name="crhmax" className="from-control mb-2"
                                        value={inputs.crhmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Journalier Min</label> <br />
                                    <input type="number" name="crjmin" className="from-control mb-2"
                                        value={inputs.crjmin || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                                <th>  <label>Cout reel Journalier Max</label> <br />
                                    <input type="number" name="crjmax" className="from-control mb-2"
                                        value={inputs.crjmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                <button type="button" onClick={ submitForm } className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Créer</button> 
                                </th>
                            </tr>

                        </tbody>
                    </table>
        </div>
      </div>
      </div>
    </>
  );
}
