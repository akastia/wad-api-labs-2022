import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
// import genres from './genres';
import genreModel from '../api/genres/genreModel';
import movieModel from '../api/movies/movieModel';
import getMovies from '../api/tmdb-api';
import actorsModel from '../api/actors/actorsModel';
// import actors from './actors.js';

const {getMovies, getGenres, getActors} = require('../api/tmdb-api')

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  // console.log(movies.length);
  try {
    const movies = await getMovies();
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all genres documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre Data');
  try {
    await genreModel.deleteMany();
    const genres = await getGenres();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

export async function loadActors() {
  console.log('load seed data');
  console.log(actors.length);
  try {
    await actorsModel.deleteMany();
    const actors = await getActors();
    await actorsModel.collection.insertMany(actors);
    console.info(`${actors.length} Actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load actor Data: ${err}`);
  }
}

if (process.env.SEED_DB == 'true') {
  loadUsers();
  loadGenres();
  loadMovies();
  loadActors();
}
