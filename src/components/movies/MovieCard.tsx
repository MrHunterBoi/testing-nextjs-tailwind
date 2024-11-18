import LabelValue from '@/components/ui/LabelValue';
import { IMovie } from '@/types/movie';
import { FC, useMemo } from 'react';

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  // Formatting genres
  const genresViewing = useMemo(() => movie.genre.split('|').join(', '), [movie.genre]);

  return (
    <div className='border-2 border-white rounded-md p-4 flex flex-col gap-2 hover:bg-slate-900 duration-150'>
      <LabelValue label='Title' value={movie.title} />

      <LabelValue label='Genre' value={genresViewing} />
    </div>
  );
};

export default MovieCard;
