import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import addNotification from "react-push-notification";

export default function Vente() {
    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        axios.get('http://127.0.0.1:8000/api/tarif').then(res=>{
           setUsers(res.data);
        }) 
    }

    const deleteUser = (id) => {
        addNotification({
            title: 'ESTI Formation',
            message: 'Commande supprimé avec succes',
            duration:6000,
            native: true,
        });
        axios.delete(`http://127.0.0.1:8000/api/tarif/${id}`).then(res=>{
           fetchAllUsers();
        }) 
    }

    return (
        <div>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap mt-6"></div>
                    <h2 className="text-blueGray-700 text-xl font-semibold"> Liste des commandes </h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Client</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Payement</th>
                                <th>N° Compte de Payement</th>
                                <th>Secteur</th>
                                <th>Categorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.client} {user.prenomclient}</td>
                         <td>{user.tel}</td>
                         <td>{user.email}</td>
                         <td>{user.pay}</td>
                         <td>{user.num}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
                         <td>
                           
                            {/* <Link className="btn btn-primary" to={{ pathname:"/view/"+user.id }}>Voir</Link> */}
                            <button type="button" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                onClick={()=>{deleteUser(user.id)}}
                                >Supprimer</button>
                         </td>
                     </tr>
                     ))}
                    
                 </tbody>
           
                    </table>
                </div>
            </div>
        </div>
    )
}
