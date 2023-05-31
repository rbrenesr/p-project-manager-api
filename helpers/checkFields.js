const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validarCompos');

const authVal = [
    check("email", "El email es requerido").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({ min: 6 }),
    validarCampos
];

module.exports={ authVal }