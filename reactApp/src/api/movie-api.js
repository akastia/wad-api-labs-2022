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

  export const getUpcomingMovies = () => {
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