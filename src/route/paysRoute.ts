import { Router } from "express";
import * as pays from "../controllers/paysController";

const router = Router();

router.get("/", pays.getAllPays);
router.get("/:id", pays.getPaysByCode);
router.post("/", pays.createPays);
router.get("/:id", pays.getPaysByCode);

export default router;