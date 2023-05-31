const express = require('express');
const router = express.Router();

const { validarJWT } = require('../middlewares/validarJWT');
const { validateInputDataLogin } = require('../middlewares/validateInputData');

const { login, renewToken, getEmpresas } = require("../controllers/auth");


router.post('/',validateInputDataLogin, login);
router.get('/renew', validarJWT, renewToken);
router.get('/empresas', getEmpresas);

module.exports = { router };