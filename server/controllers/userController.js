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

            const data = req.body.data
            const etanol = req.body.etanol
            const gasolina = req.body.gasolina
            const litros = req.body.litros
            const consumo = req.body.consumo
            

            const sqlInsert =
            "INSERT INTO tbcalculo (data, etanol, gasolina, litros, consumo) VALUES (?,?,?,?,?)";   
            db.query(sqlInsert, [data, etanol, gasolina, litros, consumo], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
        };  
    };  
}

module.exports = userController;
