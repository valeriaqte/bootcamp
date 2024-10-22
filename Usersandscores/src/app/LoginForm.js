// src/app/LoginForm.js
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from './store/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Establecer un ID fijo para el ejemplo
  const userId = 123; // Cambia este valor según lo necesites

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    // Asignar el ID fijo al usuario
    dispatch(login({ ...user, id: userId }));

    // Redirigir al usuario a la nueva página
    router.push('/Dashboard');
    
  };





  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Token"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
