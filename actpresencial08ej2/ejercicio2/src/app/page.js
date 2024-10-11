/*
Ejercicio 2: Consumiendo una API con useEffect
Objetivo: Hacer una solicitud a una API externa cuando se cargue el componente y mostrar los datos en pantalla.

Crea un estado data para almacenar los resultados de la API.
Usa useEffect para hacer una llamada fetch a una API (por ejemplo, a la API de usuarios de JSONPlaceholder: https://jsonplaceholder.typicode.com/users).
Muestra los datos en la página.
Pasos:

Usa fetch para obtener datos y almacenarlos en el estado data.
Maneja el estado de carga y posibles errores. 
*/

"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  // Crea un estado data para almacenar los resultados de la API.
  const [data, setData] = useState(null);

  //Usa useEffect para hacer una llamada fetch a una API (por ejemplo, a la API de usuarios de JSONPlaceholder: https://jsonplaceholder.typicode.com/users).
  useEffect(() => {
    // 1. Crea una función asincrónica para hacer la llamada fetch
    const fetchData = async () => {
      // 2. Usa fetch para hacer la llamada a la API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // 3. Convierte la respuesta a JSON
      const data = await response.json();
      // 4. Almacena los datos en el estado 'data'
      setData(data);
    };
    // 5. Llama a la función fetchData al montar el componente para obtener los datos
    fetchData();
  }, []); // El efecto se ejecutará solo una vez, al montar el componente

  // Muestra los datos en la página
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Users Data</h1>
      {data && data.map(user => (
        <div key={user.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      ))}
    </div>
  );
  
}
