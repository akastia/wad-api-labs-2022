import './db';
import './seedData';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres'; 
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';
import https from 'https';
import fs from 'fs';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const options={
  key: fs.readFileSync('keys/expressApp.key'),
  cert: fs.readFileSync('keys/expressApp.crt')
}

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(passport.initialize());

app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

// const tlsServer=https.createServer(options,app);

// tlsServer.listen(8081,()=>{
//   console.log('Secure server is listening on port 8081')
//   })