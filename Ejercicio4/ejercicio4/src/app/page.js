
/*
Ejercicio 4: Desactivar efecto condicionalmente
Objetivo: Practicar cómo desactivar o no ejecutar un efecto secundario si se cumple una condición.

Crea un estado isFetching que controle si se debe hacer una solicitud a una API.
Usa useEffect para hacer una solicitud a la API solo cuando isFetching sea true.
Pasos:

Usa useEffect condicionalmente según el estado isFetching.
*/

//el isFetching es un estado que controla si se debe hacer una solicitud a una API
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  // Crea un estado isFetching que controle si se debe hacer una solicitud a una API
  const [isFetching, setIsFetching] = useState(true);

  // Usa useEffect para hacer una solicitud a la API solo cuando isFetching sea true
  useEffect(() => {
    // 1. Crea una función asincrónica para hacer la llamada fetch
    const fetchData = async () => {
      // 2. Usa fetch para hacer la llamada a la API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // 3. Convierte la respuesta a JSON
      const data = await response.json();
      // 4. Muestra los datos en la consola
      console.log(data);
    };
    // 5. Llama a la función fetchData solo si isFetching es true
    if (isFetching) {
      fetchData();
    }}, [isFetching]); // El efecto se ejecutará cada vez que 'isFetching' cambie

  // Muestra los datos
  return (
    <div>
      <h1>Información en el fetch</h1>
      <button onClick={() => setIsFetching(!isFetching)} style={{ padding: '10px', fontSize: '16px' }}>
        {isFetching ? 'True' : 'False'}</button>
        <p>Estos son todos los valores que tiene el codigo y su respectivo cambio</p>    
      </div>
  );


}
