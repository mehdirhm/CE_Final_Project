import jwt from 'jsonwebtoken';
import config from 'config';

export default function (req, res, next) {

  // console.log(req.body);
  const token = req.header('x-auth-token');
  //  const token = req.data.authToken;

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    if (!req.user.isAdmin) return res.status(401).send('Access denied. only admins can add new users.');
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}