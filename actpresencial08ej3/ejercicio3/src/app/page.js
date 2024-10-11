/*
Ejercicio 3: Temporizador con useEffect
Objetivo: Crear un temporizador que aumente cada segundo usando setInterval.

Crea un estado time que represente los segundos que han pasado desde que se montó el componente.
Usa useEffect para crear un temporizador que actualice el estado time cada segundo.
Limpia el intervalo cuando el componente se desmonte.
Pasos:

Usa setInterval para actualizar el tiempo.
Asegúrate de limpiar el intervalo cuando el componente se desmonte.
*/

"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  // 1. Crea un estado 'time' para almacen
  const [time, setTime] = useState(0);

  // 2. Usa useEffect para crear un temporizador que aumente cada segundo con comentario en cada linea
  useEffect(() => { 
    // 1. Crea un temporizador con setInterval que aumente el tiempo en 1 cada segundo
    const timer = setInterval(() => { 
      setTime(time + 1); // Aumenta el tiempo en 1
    }, 1000); // Cada segundo
    // 2. Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [time]); // El efecto se ejecutará cada vez que 'time' cambie


  // 3. Muestra el tiempo en la página
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Time: {time} seconds</h1>
    </div>
  );
}
