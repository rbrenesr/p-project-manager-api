const express = require('express');
const router = express.Router();

const { validarJWT } = require('../middlewares/validarJWT');
const {authVal} = require('../helpers/checkFields');

const { login, renewToken, getEmpresas } = require("../controllers/auth");


router.post('/',authVal, login);
router.get('/renew', validarJWT, renewToken);
router.get('/empresas', getEmpresas);

module.exports = { router };