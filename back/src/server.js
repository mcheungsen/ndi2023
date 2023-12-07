// server.js
import express from 'express';
import routes from './routes.js'; // Chemin vers votre fichier de routes

const app = express();
const PORT = 3030;

app.use('/', routes); // Utilisation des routes définies dans routes.js

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
