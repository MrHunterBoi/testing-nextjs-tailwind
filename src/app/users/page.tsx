import UserCard from '@/components/users/UserCard';
import { IUser } from '@/types/user';
import { promises as fs } from 'fs';

export default async function Users() {
  // Loading users data. Currently it's server component so it's fine.
  const usersFile = await fs.readFile(process.cwd() + '/src/assets/users.json', 'utf8');
  const users: IUser[] = JSON.parse(usersFile);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {/* Mapping users and displaying them as cards */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
