import React from 'react';
import { useGetScoresQuery, useAddScoreMutation } from './store/scoresSlice.js'; // Ajusta la ruta

const ScoreComponent = () => {
  const { data: scores, error, isLoading } = useGetScoresQuery();
  const [addScore] = useAddScoreMutation();

  const handleAddScore = async () => {
    const newScore = { player: 'Jugador 1', points: 100 }; // Cambia esto según tus requisitos
    await addScore(newScore).unwrap();
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las puntuaciones.</div>;

  return (
    <div>
      <h1>Puntuaciones</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            {score.player}: {score.points}
          </li>
        ))}
      </ul>
      <button onClick={handleAddScore}>Añadir Puntuación</button>
    </div>
  );
};

export default ScoreComponent;
