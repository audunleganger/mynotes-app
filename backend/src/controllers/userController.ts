import {Request, Response } from "express";
import { registerUser } from "../services/userService";

export const register = async (req: Request, res: Response)  => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: "Registration successful!", user})
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unknown error occured" });;
        }
    }
}