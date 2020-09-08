import passport from 'passport';
import LocalStrategy from 'passport-local';
import PassportJwt from 'passport-jwt';
const { Strategy, ExtractJwt } = PassportJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    if (email === 'anatolyt@gmail.com' && password === '12345') {
        const user = {
            email: email,
            name: 'Anatoly Tarnavsky'
        }
        return done(null, user);
    } else {
        return done(null, false, {
            errors: {
                'email or password': 'is invalid'
            }
        });
    }
}));


const jwtStrategyOptions = {}
jwtStrategyOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtStrategyOptions.secretOrKey = process.env.JWT_PRIVATE_KEY;

passport.use(new Strategy(jwtStrategyOptions, function(jwt_payload, done) {
    return done(null, jwt_payload);
}));
