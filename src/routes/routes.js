//En este apartado traemos las rutas de las paginas q deseamor crear y que se renderizaran
import { Router } from "express";

const router = Router();

// Renderizamos las vistas a mostrar
router.get("/", (req, res) => res.render("index", { title: "DhalisMarket" })); //s epuede agregar informacion en JS y luego llamarla desde el front

router.get("/about", (req, res) => res.render("about"));

router.get("/contact", (req, res) => res.render("contact"));

export default router;
