// routes.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('hello');
});

router.use('*', (req, res) => {
    res.status(404).send('Page introuvable');
  });
  

export default router;
