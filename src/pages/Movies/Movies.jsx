import { useState, useEffect } from 'react';
import { fetchMovies } from 'components/Api/Api';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    setQuery(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <li>{movie.title || movie.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
