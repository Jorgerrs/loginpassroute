const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');

router.get('/', (req, res) => {
  res.send(`
    <form action="/check" method="POST">
      <input type="text" name="word" placeholder="Introduce la palabra secreta">
      <button type="submit">Comprobar</button>
    </form>
  `);
});

router.post('/check', middlewares.checkWord, (req, res) => {
  res.json({ success: true, message: "¡Correcto!" });
});