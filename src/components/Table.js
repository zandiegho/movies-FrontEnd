import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Table(){

const baseUrl = "http://localhost:8082/api/";

const [genders, setGenders] = useState([]);

useEffect(() => {
    getGenders();
}, []);

const getGenders = () => {
    axios.get(`${baseUrl}gender`)
    .then(response => {
        //obtenemos los datos 
        setGenders(response.data);
        console.log(response.data);
    })

    .catch(e => {
        //capturamos los errores
        console.log('hubo un error' + e )
    })
}

    return(
        <>
        <h2>Generos</h2>
      <table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID Genero</th>
                <th scope="col">Genero</th>                
            </tr>
        </thead>
        <tbody>
            {
                genders.map(item => {
                    return(
                <tr key = {setGenders}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                </tr>
                )})
            }          
        </tbody>
      </table>
      </>
    );
} 