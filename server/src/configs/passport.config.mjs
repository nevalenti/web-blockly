import passport from 'passport';
import passportJwt from 'passport-jwt';

import prisma from '../lib/prisma.mjs';

const { ExtractJwt } = passportJwt;
const JwtStrategy = passportJwt.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET;

const strategy = new JwtStrategy(jwtOptions, (async (jwtPayload, next) => {
  const user = await prisma.user.findUnique({
    where: {
      id: jwtPayload.id,
    },
  });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(strategy);

export default passport;
