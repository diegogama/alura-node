import express from "express";
import LivrosController from "../controller/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .post("/livros", LivrosController.cadastrarLivros)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .get("/livros/:id", LivrosController.listarPorId)
    .delete("/livros/:id", LivrosController.excluirLivro)

export default router;