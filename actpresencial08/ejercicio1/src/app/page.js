/*
Ejercicio 1: Actualización del título de la página
Objetivo: Actualizar el título de la página de manera dinámica cada vez que cambie un estado.

Crea una página en Next.js que contenga un estado count.
Cada vez que el valor de count cambie, usa useEffect para actualizar el título del documento con el nuevo valor de count.
Pasos:

Crea un estado inicial count con el valor 0.
Usa useEffect para actualizar document.title con el valor de count cada vez que este cambie.
*/

"use client";
import { useState, useEffect } from 'react';

export default function Home() {
// 1. Inicializa el estado 'count' en 0
const [count, setCount] = useState(0);

// 2. Usa useEffect para actualizar el título del documento cada vez que 'count' cambie
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // El efecto se ejecutará cada vez que 'count' cambie

return (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Current Count: {count}</h1>
    <button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px' }}>
      Increment Count
    </button>
  </div>
);
}
