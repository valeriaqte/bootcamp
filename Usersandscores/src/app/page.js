// src/app/page.js
'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from './store/authSlice';
import LoginForm from './LoginForm'; // Asegúrate de importar el componente LoginForm

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  return (
    <div>
      <h1>Bienvenido a la aplicación de logueo</h1>
      <LoginForm /> {/* Aquí usas el componente LoginForm */}
    </div>
  );
}
