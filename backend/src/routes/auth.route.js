import { Router } from "express";
// import { authCallback } from "../controller/auth.controller.js";

const router = Router();

// router.post("/callback", authCallback);
router.get("/", (req, res) => {
  res.send("Welcome auth");
});

export default router;
