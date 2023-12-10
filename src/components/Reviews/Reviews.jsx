import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieRewievs] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setMovieRewievs(reviews);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  const reviewsList = movieReviews
    ? movieReviews.map(({ id, author, content }) => (
        <div key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </div>
      ))
    : 'there is no reviews';

  return <div>{reviewsList}</div>;
};

export default Reviews;
