import { User } from "../models/userModel";

export const registerUser = async (userData: any) => {
    const user = new User(userData);
    await user.save();
    return user;
};
