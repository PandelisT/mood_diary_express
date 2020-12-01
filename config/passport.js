const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("./../database/models/user_model");
const {Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id)
        return done(null, user);
    } catch (error) {
        return done(error);
    }
})

passport.use(new LocalStrategy({ 
    usernameField: "email"
    },
    async (email, password, done) => {
        console.log(email, password);
        try {
            const user = await UserModel.findOne({ email })
            console.log(user)
            if (user && user.password !== password) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            done(error);
        }
        
    }
));

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "duck" //process.env.JWT_SECRET
  }, 
  async (jwt_payload, done) => {
      const user = await UserModel.findById(jwt_payload.sub)
          .catch(done);

      if (!user) {
          return done(null, false);
      }

      return done(null, user);
  }
));


module.exports = passport;

