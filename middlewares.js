exports.checkWord = (req, res, next) => {
  const secretWord = process.env.SECRET_WORD;
  if (req.body.word === secretWord) {
    next();
  } else {
    res.status(401).json({ error: "Palabra incorrecta" });
  }
};