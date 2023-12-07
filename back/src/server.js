import express from 'express';
const app = express();
const PORT = 3030; // Choisissez le port que vous souhaitez utiliser

// Route pour la page 404
app.get('/', (req, res) => {
  res.status(200).send('hello ');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
