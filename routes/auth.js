const express = require('express');
const router = express.Router();

const { validarJWT } = require('../middlewares/validarJWT');
const { validateInputDataLogin, validateInputDataNewUser } = require('../middlewares/validateInputData');

const { login, newUser, renewToken, getEmpresas } = require("../controllers/auth");


router.post('/',validateInputDataLogin, login);
router.post('/new', validateInputDataNewUser, newUser);


router.get('/renew', validarJWT, renewToken);
router.get('/empresas', getEmpresas);

module.exports = { router };