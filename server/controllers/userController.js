require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const verifyJWT = require('../config/jwt');

class userController {

    register(){

        return (req, res) => {

            const cpf = req.body.cpf
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            
            const sqlInsert =
            "INSERT INTO tbcadastro (cpf, nome, email, senha) VALUES (?,?,?,?)";
            bcrypt.hash(senha, 10, (errBcrypt, hash) => {
                if (errBcrypt) {return res.status(500).send ({error: bcrypt }) }    
            db.query(sqlInsert, [cpf, nome, email, hash], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
            });  
        };  
    }
    login(){
        return (req, res) => {
 
            const cpf = req.body.cpf
            const senha = req.body.senha        
        
            const sqlSelect =
            `SELECT * FROM  tbcadastro WHERE cpf = ${mysql.escape(cpf)}`;
            db.query(sqlSelect, [cpf, senha], (err, result) => {
                if (err){return res.status(500).send (err)}
                if (result.length < 1) {
                    return res.status(401).send({msg: "Falha na autenticação."})
                }
                verifyJWT(req, result).then((token) => {
                    if (!token){                
                        return res.status(401).send({msg: "Falha na autenticação."})
                    } else {
                        return res.status(200).send({
                            msg: "Login Realizado.",
                            token: token
                        });
                    }
                })  
            });    
        };  
    };
    calc(){

        return (req, res) => {

            let indiceEtanol = 1.09;
            let indiceGasolina = 2.27;

            const data = req.body.data
            const etanol = req.body.etanol
            const gasolina = req.body.gasolina
            const litros = parseFloat(req.body.litros)
            const indice = req.body.indice
            
            let result_etanol = etanol ? ' Ao utilizar Etanol o índice de poluição será de ' + (litros * indiceEtanol) + ' ' : ' '
            let result_gasolina = gasolina ? ' Ao utilizar Gasolina o índice de poluição será de ' + (litros * indiceGasolina) + ' ' : ''
            let resultado_final = result_etanol + result_gasolina

            const sqlInsert =
            "INSERT INTO tbcalculo (data, etanol, gasolina, litros, indice) VALUES (?,?,?,?,?)";   
            db.query(sqlInsert, [data, etanol, gasolina, litros, indice], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send(err)
                }

                let resultado = {
                    msg: "Cadastro Realizado.",
                    msg_resultado: resultado_final
                }

                return res.status(201).send(resultado)
            });
        };  
    };
    table(){

        return (req, res) => {

            const id_calculo = req.body.id_calculo
            const data = req.body.data
            const etanol = req.body.etanol
            const gasolina = req.body.gasolina
            const litros = parseFloat(req.body.litros) 
            const indice = req.body.indice
            

            const sqlSelect =
            "SELECT id_calculo, data, etanol, gasolina, litros, indice FROM tbcalculo";   
            db.query(sqlSelect, [id_calculo, data, etanol, gasolina, litros, indice], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send(err)
                }
                return res.status(201).send(resultado)
            });
        };  
    };    
}

module.exports = userController;
