import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
  
  const token = req.cookies.access_token;
  if (!token) return res.status(403).send("Bạn chưa xác thực");
  
  jwt.verify(token, process.env.Access_key, (err, user) => {
    if (err) return res.status(403).send("Token hết hạn")
    req.user = user;
    next()
  });
};