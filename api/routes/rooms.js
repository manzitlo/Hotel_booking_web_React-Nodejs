import express from "express";
import { createRoom } from "../controllers/roomController";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//get all
router.get("/", getRooms);

export default router;