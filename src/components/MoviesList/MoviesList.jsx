import {  useLocation, NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './MovieList.module.css'

export const MoviesList = ({movies}) => {

    const location = useLocation();
    return (
        <ul className={css.movieList}>
          {movies.map(movie => (
            <NavLink 
            className={css.movieListItem}
              to={`/movies/${movie.id}`}
              key={movie.id}
              state={{ from: location }}
            >
              <li className={css.movieListItemDetails}>{movie.title || movie.name}</li>
            </NavLink>
          ))}
        </ul>
    )
}

MoviesList.propTypes ={
    movies: propTypes.array.isRequired,
  }



  