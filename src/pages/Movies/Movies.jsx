import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/Api';
import { NavLink } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';


  const location = useLocation();


  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (query === '') return;
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
        <input type="text" name="search" placeholder="Search movie..." />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id} state={{from: location}} >
            <li>{movie.title || movie.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
