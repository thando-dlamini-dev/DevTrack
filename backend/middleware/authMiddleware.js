import passport from 'passport';


//Middleware to authenticate requests using JWT
 
export const authenticateJWT = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        details: info?.message || 'Authentication required'
      });
    }
    
    // Attach user to request object
    req.user = user;
    next();
  })(req, res, next);
};


//Middleware to ensure user is authenticated via session

export const ensureAuthenticated = (req, res, next) => {
  if (req.session && req.session.token) {
    return next();
  }
  
  res.redirect('/login');
};