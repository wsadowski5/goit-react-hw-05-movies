import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/Api';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from '../../components/MoviesList/MoviesList';




const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    const inputValue = e.target.elements.search.value;
    setSearchParams({ query: inputValue });
    form.reset()
  };

  useEffect(() => {
    
    if (query === '') return;
    const fetchData = async () => {
      try {
        setLoading(true)
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      } finally {
        setLoading(false);
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
      <div>{loading ? <p>Loading...</p> : <MoviesList movies={movies} />}</div>
    </div>
  );
};

export default Movies;
