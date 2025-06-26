import { UserModel, ContentModel, TagModel,LinkModel } from "../db/db";
import bcrypt from 'bcrypt';
import {signupSchema} from 
import jwt from "jsonwebtoken";

export const signup = (req,res) => {
    const parsedData = signupSchema.safeParse(req.body);

    if (!parsedData.success){
        return res.staus(403).json({message: 'Error in signing up the user.'})
    }
    try{
        const user = UserModel.findOne({
            email: parsedData.data.email;
        })

        const hashedPassword = bcrypt.hash(parsedData.data.password,10)

        if (user){
            return res.status(403).json({message: 'User already exists!'})
        }

        UserModel.create({
            firstName: parsedData.data.firstName
            email: parsedData.data.email
            password: hashedPassword
        })

        return res.status(200).json({message: 'User Signed Up!'})

        
    }catch(e){
        return res.status(403).json({error:`${e.message}`})
    } 
}

export const signin = (req,res) => {
    //get the data from body, check if 
    const parsedData = signinSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(403).json({message:'Sign in failed'})
    }

    const user = UserModel.findOne({
        email: parsedData.data.email
    })

    if(!user){
        return res.status(403).json({message: "User not found!"})
    }

    const passwordCheck = bcrypt.compare(parsedData.data.password, user.password)

}