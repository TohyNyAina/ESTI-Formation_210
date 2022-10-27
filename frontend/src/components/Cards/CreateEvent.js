import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import addNotification from 'react-push-notification';

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})


export default function CreateEvent() {




    const [inputs, setInputs] = useState({});
    // const [allEvents, setAllEvents ] = useState()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        addNotification({
            title: 'ESTI Formation',
            message: 'Formation crée avec succes',
            duration:6000,
            native: true,
        });
        console.log(inputs)
        axios.post('http://127.0.0.1:8000/api/date', inputs).then((res) => {
        })
    }


    return (
        <div>
            <div className="relative flex flex-col min-w-1 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-2">
                <div className='App' >
                   <div>
                        <table>
                            <thead>
                                <th>
                                    Ajouter un titre
                                </th>

                                <th>
                                    Date du debut
                                </th>

                                <th>
                                    Date de la fin
                                </th>

                                <th>

                                </th>
                            </thead>
                            <tbody>
                                <th>
                                    <input type="text" placeholder="Add Title" style={{ width: "100%", marginRight: "10px" }}
                                        name="title" value={inputs.title || ''} onChange={handleChange}
                                    />
                                </th>
                                <td>
                                    <input type="datetime-local" placeholder="Add Start" style={{ width: "100%", marginRight: "10px" }}
                                      name="start" value={inputs.start || ''} onChange={handleChange}  
                                    />
                                </td>
                                <td>
                                <input type="datetime-local" placeholder="Add End" style={{ width: "100%", marginRight: "10px" }}
                                      name="end" value={inputs.end || ''} onChange={handleChange}  
                                    />
                                </td>
                                <td>
                                    <button style={{ marginTop: "10px" }} onClick={submitForm}
                                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >Ajouter un evenement</button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
