import User from "../model/signup.model";
import type { Request, Response } from 'express';

interface reqBodyTypes {
    firstName: string;
    surname: string;
    emailOrMobile: string;
    password: string;
    gender: 'Female' | 'Male' | 'Custom';
    date: string
}

const signUpUser = async (req: Request, res: Response) => {
    // get req body
    try {
        const { firstName, surname, emailOrMobile, password, gender, date: dateOfBirth } = req.body as unknown as reqBodyTypes
        const findExistingUser = await User.findOne({ emailOrMobile });

        if (findExistingUser) {
            return res.json({ message: " Your email or number are already used!", success: false, data: null, status: 301 })
        }
        const createUser = await User.create({ firstName, surname, emailOrMobile, password, gender, dateOfBirth })


        return res.json({ message: "You're account create successfully", status: 200, success: true, data: createUser })
    } catch (error) {
        return res.json({ message: "Something want wrong", status: 400, data: error, success: false, })
    }
}

export default { signUpUser }