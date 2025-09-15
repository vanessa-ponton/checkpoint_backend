import { Request, Response } from "express";
import { Pays } from "../entities/pays";

export const createPays = async (req: Request, res: Response) => {
  try {
    const { code, name, emoji, codeContinent } = req.body;
    if (!code || !name || !emoji || !codeContinent) {
      return res.status(400).json({ error: "Tous les champs (code, name, emoji, codeContinent) sont obligatoires." });
    }
    const pays = Pays.create({ code, name, emoji, codeContinent });
    await pays.save();
    res.status(201).json(pays);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du pays" });
  }
};

export const getAllPays = async (_req: Request, res: Response) => {
  try {
    const pays = await Pays.find();
    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des pays" });
  }
};

export const getPaysByCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const pays = await Pays.findOneBy({ code });
    if (!pays) return res.status(404).json({ error: "Pays non trouvé" });
    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du pays" });
  }
};

export const getPaysByContinent = async (req: Request, res: Response) => {
  try {
    const { codeContinent } = req.params;
    if (!codeContinent) {
      return res.status(400).json({ error: "Le code continent est obligatoire." });
    }
    const pays = await Pays.findBy({ codeContinent });
    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des pays du continent" });
  }

};
