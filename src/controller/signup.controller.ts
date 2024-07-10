import User from "../model/signup.model";
import type { Request, Response } from 'express';

interface reqBodyTypes {
    firstName: string;
    surname: string;
    emailOrMobile: string;
    password: string;
    gender: 'Female' | 'Male' | 'Custom';
    dateOfBirth: string
}

const signUpUser = async (req: Request, res: Response) => {
    // get req body
    try {
        const { firstName, surname, emailOrMobile, password, gender, dateOfBirth } = req.body as unknown as reqBodyTypes
        const findExistingUser = await User.findOne({ contact: emailOrMobile })
        if (findExistingUser) {
            return res.json({ message: " Your email or number are already used!", status: false, data: null })
        }
        const createUser = await User.create({ firstName, surname, emailOrMobile, password, gender, dateOfBirth })
        return res.json({ message: "You're account create successfully", status: true, data: createUser })
    } catch (error) {
        return res.json({ message: "Something want wrong", status: false, data: error })
    }
}

export default { signUpUser }