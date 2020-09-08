const passport = require('passport');
const LocalStrategy = require('passport-local');

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
