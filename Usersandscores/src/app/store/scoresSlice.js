import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define la API utilizando createApi
export const scoresApi = createApi({
  reducerPath: 'scoresApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Reemplaza con la URL base de tu API
  endpoints: (builder) => ({
    // Endpoint para obtener todas las puntuaciones
    getScores: builder.query({
      query: () => '/scores', // Ajusta el endpoint según tu API
    }),
    // Endpoint para enviar una nueva puntuación
    addScore: builder.mutation({
      query: (newScore) => ({
        url: '/scores', // Ajusta el endpoint según tu API
        method: 'POST',
        body: newScore,
      }),
    }),
  }),
});

// Exporta las funciones generadas por RTK Query para su uso en los componentes
export const { useGetScoresQuery, useAddScoreMutation } = scoresApi;

// Exporta el reducer para añadirlo a la store
export default scoresApi.reducer;
