const express = require('express');
const { Quest, Theme } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const userQuestions = await Theme.findAll({ include: Quest });
  res.json(userQuestions);
});

module.exports = router;
