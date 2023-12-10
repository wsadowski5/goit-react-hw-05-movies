import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/Api';

import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrending();
        setTrending(movies);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>{loading ? <p>Loading...</p> : <MoviesList movies={trending} />}</div>
  );
};

export default Home;
