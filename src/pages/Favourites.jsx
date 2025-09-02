import '../css/Favourites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourite() {
  const { favourites } = useMovieContext();
  if (favourites) {
    return (
      <div className='favourites'>
        <h2>Your Favourites</h2>
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
    )
  }

  return (
    <div className='favorites'>
      <div className="favorites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites Now.</p>
      </div>
    </div>
  );
}

export default Favourite;
