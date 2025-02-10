import jwt, { Secret, SignOptions } from "jsonwebtoken";

const createToken = (
  payload: object,
  secret: Secret,
  expireTime: number | string
) => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime as SignOptions["expiresIn"],
  });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret);
};

export const JwtHelper = {
  createToken,
  verifyToken,
};
