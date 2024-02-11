import {ObjectId, WithId} from "mongodb";

import jwt from 'jsonwebtoken';
import {UserDbModel} from "../models/users/users-models";

const secretWord =  process.env.JWT_SECRET || "test";
export class jwtService {
        static async createJWT(user: WithId<UserDbModel>) {

            return jwt.sign({userId: user._id},
                secretWord, {expiresIn: '2h'})
        }

        static async getUserIdByToken(token: string) {
            try {
                const result: any = jwt.verify(token, secretWord)
                return new ObjectId(result.userId)
            } catch (error) {
                return null
            }
        }

    }