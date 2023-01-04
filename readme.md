# Assignment 2 - Web API.

Name: Mary Akastia Christo [20101086]

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - API routes for the pages
 + Feature 3 - Login System
 + Feature 4 - Login Page
 + Feature 5 - SignUp Page
 + Feature 6 - dropdown menu in the site header
 + Feature 7 - a filter for tv shows
 + Feature 8 - Added pages; actors and actor details, tv shows and tv details and top rated tv shows and airing now tv shows. Top rated movie and playing now movie.

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/akastia/wad-api-labs-2022.git
```

followed by installation

```bat
npm install react-scripts
npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
npm install --save-dev nodemon
npm install dotenv --save
npm install --save-dev eslint babel-eslint
npx eslint --init
npx eslint index.js
npm install eslint eslint-plugin-react --save-dev
npx eslint index.js --fix
npm init
npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
npm install --save dotenv express
npm install --save uniqid
mongod -dbpath db
npm install -save mongoose
npm install express-async-handler --save
npm install --save express-session
npm install -s node-fetch@2
cd movies-api/
npm install
cd moviesApp
npm install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=ilikecake
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

It is not working as planned, but attempted the following:
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/tmdb/upcoming | Gets upcoming movies | N/A | N/A | N/A
| /api/movies/tmdb/now_playing | Gets now playing movies | N/A | N/A | N/A
| /api/movies/tmdb/top_movies | Gets top rated movies | N/A | N/A | N/A 
| /api/users | Gets users | Login user | N/A | N/A
| /api/users/{userid} | Gets one user | N/A | N/A | N/A
| /api/users?action=register | N/A | Registering an user | N/A | N/A 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

For this assignment I tried to intergrate the API that we made in the labs combined with the pervious assignment. 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovie = id => {
    return fetch(
        `/api/movies/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


  export const getMovieReviews = id => {
    return fetch(
       '/api/movies/'+id+'/reviews',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcomingMovie = () => {
    return fetch(
        '/api/upcomingMovies',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getNowPlayingMovies = () => {
  return fetch(
      '/api/nowPlayingMovies',{headers: {
          'Authorization': window.localStorage.getItem('token')
      }
  }
  )
  .then(res => res.json());
};


export const getTopMovies = () => {
  return fetch(
      '/api/topRatedMovies',{headers: {
          'Authorization': window.localStorage.getItem('token')
      }
  }
  )
  .then(res => res.json());
};

~~~
