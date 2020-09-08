import jwt from 'jsonwebtoken';
import pify from "pify";

export async function generateJWTToken(email){
    const jwtSecret = process.env.JWT_PRIVATE_KEY || 'jwt_secret_replace_in_production';
    try {
        const payload = {
            email: email
        };
        const jwtToken = await pify(jwt.sign)(payload, jwtSecret, { algorithm: 'HS256' });
        return jwtToken;
    } catch (e) {
        console.error("Creating JWT token error");
        throw e;
    }
}

export async function getUserPhoneFromJWTToken(jwtToken){
    const jwtSecret = process.env.JWT_PRIVATE_KEY || 'jwt_secret_replace_in_production';
    try {
        const decodedToken = await pify(jwt.verify)(jwtToken, jwtSecret, { algorithm: 'HS256' });
        return decodedToken;
    } catch (e) {
        console.error("Creating JWT token error");
        throw e;
    }
    return '';
}
