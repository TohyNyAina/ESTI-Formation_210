import {React, useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import CreateEvent from 'components/Cards/CreateEvent';
import axios from 'axios';



export default function Agenda() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
  fetchAllUsers();
}, []);

const fetchAllUsers = () => {
  axios.get('http://127.0.0.1:8000/api/date').then(res => {
    setUsers(res.data);
  })
}

const deleteUser = (id) => {
  const res = axios.delete(`http://127.0.0.1:8000/api/date/${id}`).then(res=> {
    fetchAllUsers();
  })
}

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


const events = [
  
    {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022,10,0),
    end: new Date(2022,10,0)
  },
  
]

  return (
    <div>
         <div className="relative flex flex-col min-w-1 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-2">
            <div className='App' > 
            <h1 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"> Bienvenue dans l'Agenda </h1>
           
            </div>
                   <Calendar 
                   localizer={localizer} 
                   events={users} 
                   startAccessor="start" 
                   endAccessor="end" 
                   style={{height:600, margin: "50px" }} />
                </div>
        
    </div>
  )
}

