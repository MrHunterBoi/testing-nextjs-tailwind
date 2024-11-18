import MovieCard from '@/components/movies/MovieCard';
import { IMovie } from '@/types/movie';
import { promises as fs } from 'fs';

export default async function Movies() {
  const moviesFile = await fs.readFile(process.cwd() + '/src/assets/movies.json', 'utf8');
  const movies: IMovie[] = JSON.parse(moviesFile);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {movies.map((user) => (
        <MovieCard key={user.id} movie={user} />
      ))}
    </div>
  );
}
