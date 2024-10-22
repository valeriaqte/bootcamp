'use client'; // Indica que este es un componente del lado del cliente

import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice'; // Importa la acción de logout
import { useRouter } from 'next/navigation'; // Importa useRouter para redirigir
import { useState } from 'react'; // Importa useState para gestionar el estado local

const DashboardPage = () => {
  const dispatch = useDispatch(); // Usa useDispatch para acceder a Redux
  const router = useRouter(); // Inicializa useRouter para la redirección
  const [logoutMessage, setLogoutMessage] = useState(''); // Estado para el mensaje de logout

  // Recupera los datos del sessionStorage
  const user = JSON.parse(sessionStorage.getItem('user')) || {}; // Carga el usuario o un objeto vacío si no existe
  const game = JSON.parse(sessionStorage.getItem('game')) || {}; // Carga el juego o un objeto vacío si no existe

  const handleLogout = async () => {
    try {
      // Llama a tu endpoint de logout
      await fetch('/api/logout', { method: 'POST' }); // Ajusta la URL según tu configuración

      // Eliminar datos del sessionStorage
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('game');
      
      // Llamar a la acción de logout en Redux
      dispatch(logout());

      // Establecer el mensaje de logout exitoso
      setLogoutMessage('Deslogueado exitosamente.');

      // Redirigir al usuario a la página principal después de un breve retraso
      setTimeout(() => {
        router.push('/'); // Cambia a la ruta de tu página principal
      }, 2000); // Espera 2 segundos antes de redirigir
    } catch (error) {
      console.error('Error durante el logout:', error);
    }
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      
      <h2>Información del Usuario</h2>
      <p><strong>Usuario:</strong> {user.username || 'No disponible'}</p>
      <p><strong>ID del Usuario:</strong> {user.id || 'No disponible'}</p>

      <h2>Información del Juego</h2>
      <p><strong>ID del Juego:</strong> {game.id || 'No disponible'}</p>
      <p><strong>Nombre del Juego:</strong> {game.name || 'No disponible'}</p>
      <p><strong>Puntuación:</strong> {game.score || 'No disponible'}</p>

      <button onClick={handleLogout}>Logout</button>

      {/* Mensaje de logout exitoso */}
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default DashboardPage;
