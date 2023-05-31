
const { response, request } = require("express");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const sql = require('mssql');
const { configBD } = require('../database/config');

const login = async (req = request, res = response) => {

  try {

    const { email, password } = req.body;


    //todo
    //*Verificar que el usuario exista en la base de datos
    const usuario = 'null';

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Error de autenticación.!"
      });
    }

    //todo
    //*verificar contraseña asociada al mail
    const isValid = 'null';
    if (!isValid) {
      return res.status(400).json({
        ok: false,
        msg: "Error de autenticación.!"
      });
    }

    //todo
    //* Generar el token JWT
    //const token = await generarJWT(usuario.id, usuario.name);
    const token = await generarJWT('123456789', 'rafael brenes');

    res.status(200).json({
      ok: true,
      email,
      name: "",
      token
    });

  } catch (error) {
    console.log('Error de ejecución:  ' + error);
    res.status(500).json({
      ok: false,
      msg: "View log system."
    });
  }
}


const renewToken = async (req, res = response) => {

  const { uid, name } = req;

  // //*Validar si el user uid ya existe en la base de datos??
  // const usuario = await Usuario.findOne({ _id:uid });

  // if (!usuario) {
  //   return res.status(400).json({
  //     ok: false,
  //     msg: "UID usuario no registrado"
  //   });
  // }

  // //* Generar el token JWT
  //const token = await generarJWT(usuario.id, usuario.name);
  const token = await generarJWT(uid, name);


  return res.status(200).json({
    ok: true,
    token
  });
};


const getEmpresas = async(req, res = response) => {


  try {

    const  pool = await  sql.connect(configBD);    
    const  empresas = await  pool.request().query('select * from swe.SWTEMP_EMPRESA');
    const { recordsets } = empresas;
    
    res.status(200).json({
      ok:true,
      empresas: recordsets
    });

/*
    sql.connect(configBD, (err) => {

      if (err) {
        console.log('ssss: ' + err);
      }
      const sqlreq = new sql.Request();
      sqlreq.query(


        'select * from swe.SWTEMP_EMPRESA'

        , (err, recordset) => {
          if (err) {
            console.log('saaasqqll: ' + err);
          }
          console.log(recordset);
          res.send(recordset);

        })

    });*/

  } catch (error) {
    console.log('Error de ejecución:  ' + error);
    res.status(500).json({
      ok: false,
      msg: "View log system."
    });
  }


};

module.exports = { login, renewToken, getEmpresas };