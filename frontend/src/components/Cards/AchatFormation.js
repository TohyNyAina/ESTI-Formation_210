import React from "react";
import axios from "axios";
import { useState } from "react"
import addNotification from "react-push-notification";
import * as html2pdf from 'html2pdf.js'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components

export default function AchatFormation() {


    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [name, setName] = useState("Transversale")
    const [categorie, setCategorie] = useState("A")
    const [pay, setPay] = useState("Mobil money")

    const PDF = () => {
        const element = document.getElementById('pdf');
        var opt = {
            margin:      0,
            filename:    'facture.pdf',
            image:       {type: 'jpeg',quality: 0.98},
            html2canvas: { scale: 2 },
            jsPDF:       { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(opt).from(element).save();
    }

    const submitForm = () => {
        addNotification({
            title: 'ESTI Formation',
            message: 'Achat effectué avec succes',
            duration: 6000,
            native: true,
        });
        inputs.name = name
        inputs.categorie = categorie
        inputs.pay = pay
        axios.post('http://127.0.0.1:8000/api/tarif', inputs).then((res) => {
        })
    }

    return (
        <>
            <div  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <h2 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">  Veuillez remplir le formulaire pour effectuer votre commande </h2>
                <container id='pdf'>
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <table ClassName="tab">
                            <thead>
                               
                                <tr>
                                    <th> <label>Nom</label> <br />
                                        <input type="text" name="client" className="from-control mb-2"
                                            value={inputs.client || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label>Prénom</label> <br />
                                        <input type="text" name="prenomclient" className="from-control mb-2"
                                            value={inputs.prenomclient || ''}
                                            onChange={handleChange}
                                        />
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th> <label>Numero de telephone</label> <br />
                                        <input type="number" name="tel" className="from-control mb-2"
                                            value={inputs.tel || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                    <th> <label>Adresse Email</label> <br />
                                        <input type="email" name="email" className="from-control mb-2"
                                            value={inputs.email || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label> Type de payement </label> <br />
                                        <select onChange={e => { setPay(e.target.value) }} name="pay" id="">
                                            <option value="Mobil money">Mobil money</option>
                                            <option value="Virement bancaire">Virement bancaire</option>
                                        </select>
                                    </th>
                                    <th>
                                        <label> Numéro du compte du payement </label> <br />
                                        <input type="number" name="num" className="from-control mb-2"
                                            value={inputs.num || ''}
                                            onChange={handleChange}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th> <label> Secteur </label> <br />
                                        <select onChange={e => { setName(e.target.value) }} name="categorie" id="">
                                            <option value="Transversale">Transversale</option>
                                            <option value="Programmation">Programmation</option>
                                            <option value="Administration systemes et réseaux">Administration systemes et réseaux</option>
                                            <option value="Gestion de projets">Gestion de projets</option>
                                            <option value="Sécurité">Sécurité</option>
                                            <option value="Informatique décisionnelle/ Marketing Digital">Informatique décisionnelle/ Marketing Digital</option>
                                        </select>
                                    </th>
                                    <th> <label> Categorie </label> <br />
                                        <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <br />
                                    <th></th>
                                    <th> Mr Le Directeur </th>
                                </tr>
                    
                            </tbody>
                        </table>
                    </div>
                </div>
                </container>
                <button type="button" onClick={submitForm} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                                            Acheter</button> <br />
                <button type="button" onClick={PDF} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                                            Obtenir le Facture</button>
            </div>

        </>
    );
}



