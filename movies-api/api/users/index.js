import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';
import actorsModel from '../actors/actorsModel';

const router = express.Router(); // eslint-disable-line

let pswRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// Register OR authenticate a user
router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.status(401).json({success: false, msg: 'Please pass username and password.'});
      return next();
    }
    if (req.query.action === 'register') {
        // Checks the with the regex the password that has been given
        if (pswRegex.test(req.body.password)){
        await User.create(req.body);
        res.status(201).json({code: 201, msg: 'Successful created new user.'});
        }
        else{ 
            res.status(401).json({code: 401, msg: 'Incorrect password format.'});
        }
    } else {
      const user = await User.findByUserName(req.body.username);
        if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // if user is found and password matches, create a token
            const token = jwt.sign(user.username, process.env.SECRET);
            // return the information including token as JSON
            res.status(200).json({success: true, token: 'BEARER ' + token});
          } else {
            res.status(401).json({code: 401,msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
  }));
  

  // Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

//Add a favourite. No Error Handling Yet. Can add duplicates too!
router.post('/:userName/favourites', asyncHandler(async (req, res) => {
    const newFavourite = req.body.id;
    const userName = req.params.userName;
    const movie = await movieModel.findByMovieDBId(newFavourite);
    if (movie == null){
        res.status(401).json({ code: 401, msg: 'The movie id not exits' });
      }
    const user = await User.findByUserName(userName);
    if (user.favourites.indexOf(movie._id)== -1){
        await user.favourites.push(movie._id);
        await user.save(); 
        res.status(201).json(user); 
    } else {
        res.status(209).json({code: 209, msg: "Duplicates cannot be added."});
    }
    
  }));

  router.get('/:userName/favourites', asyncHandler( async (req, res) => {
    const userName = req.params.userName;
    const user = await User.findByUserName(userName).populate('favourites');
    res.status(200).json(user.favourites);
  }));


router.post('/', asyncHandler(async (req, res) => {
    if (req.query.action === 'register') {  //if action is 'register' then save to DB
        await User(req.body).save()
        res.status(201).json({
            code: 201,
            msg: 'Successful created new user.',
        });
    }
    else {  //Must be authenticating the!!! Query the DB and check if there's a match
        const user = await User.findOne(req.body);
        if (!user) {
            return res.status(401).json({ code: 401, msg: 'Authentication failed' })
        } else {
            return res.status(200).json({ code: 200, msg: "Authentication Successful", token: 'TEMPORARY_TOKEN' })
        }
    }
}));

router.post('/:userName/fav_actors', asyncHandler(async (req, res) => {
  const newFavActors = req.body.id;
  const userName = req.params.userName;
  const actor = await actorsModel.findByActorDBId(newFavActors);
  if (actor == null){
    res.status(401).json({ code: 401, msg: 'The actor id not exits' });
  }
  const user = await User.findByUserName(userName);
  if (user.fav_actors.indexOf(actor._id)==-1){
    await user.fav_actors.push(actor._id);
    await user.save(); 
    res.status(201).json(user); 
  }else{
    res.status(404).json({ code: 404, msg: 'Unable to add duplicates' });
  }

}));

router.get('/:userName/fav_actors', asyncHandler( async (req, res) => {
  const userName = req.params.userName;
  const user = await User.findByUserName(userName).populate('fav_actors');
  res.status(200).json(user.fav_actors);
}));

export default router;