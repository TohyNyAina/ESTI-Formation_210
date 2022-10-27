import React from 'react';
import Pdf from 'react-to-pdf';

const ref = React.createRef()

const PDF = (props) => {
    return (
        <>
            <div className='Post' ref={ref}>
                <h1>Facture de Payement</h1>
                <p> {props.nom} {props.prenom} </p>
                <p> {props.name} Categorie: {props.categorie} </p>
            </div>
            <Pdf targetRef={ref} filename="facture.pdf">
                {({ toPdf }) => <button onClick={toPdf}> Recevoir la facture </button> }
            </Pdf>
        </>
    )
}

export default PDF;