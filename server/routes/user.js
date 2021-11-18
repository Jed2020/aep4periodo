const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController.js');
const userController = new UserController();




router.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

// Rota de cadastro de usuário
router.post("/api/insert", userController.register());

// Rota de login de usuário
router.post("/api/select", userController.login());

// Rota de calculo de poluição
router.post("/api/calc", userController.calc());

// Rota de tabela de calculo 
router.get("/api/table", userController.table());

module.exports = router;