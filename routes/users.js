// import {generateJWTToken} from "../security/jwt";

import passport from 'passport';

import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([1,2,3]);
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user   : user
      });
    }

    const token = 'ttttttt';//generateJWTToken(user.email);
    return res.json({user, token});
  })(req, res);
});

export default router;
