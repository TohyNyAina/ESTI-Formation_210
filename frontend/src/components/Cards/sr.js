import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ClientFormations from 'views/client/ClientFormations'



export default function Sr() {
    return (
        <div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <div className="md:pr-12">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-file-alt text-xl"></i>
                            </div>
                            
                            <h3 className="text-3xl font-semibold">
                                "Soyez les bienvenue!"
                            </h3>

                            <img alt="..." 
                                 src={require("assets/img/documentation.png").default}/>


                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                               L'ESTI vous propose des formations pour ceux qui 
                               souhaite initier à l'informatique et s'intégrer dans le monde 
                               du digitalisation 
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
