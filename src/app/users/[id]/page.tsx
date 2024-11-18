import { BackButton } from '@/components/ui/BackButton';
import LabelValue from '@/components/ui/LabelValue';
import { IUser } from '@/types/user';
import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function User({ params }: { params: Promise<{ id: string }> }) {
  // Getting users and finding the correct one. If not, displaying "Not found"
  const usersFile = await fs.readFile(process.cwd() + '/src/assets/users.json', 'utf8');
  const users: IUser[] = JSON.parse(usersFile);
  const id = (await params).id;
  const user = users.find((user) => user.id === +id);

  return (
    <div className='flex flex-col gap-4 items-start'>
      <BackButton />

      <div className='flex flex-col gap-4 w-full items-center'>
        {user ? (
          <>
            <Image
              width={256}
              height={256}
              src={user?.avatar || '/user_pfp.jpg'}
              alt={user?.username || 'User'}
              className={'rounded-full'}
            />

            <LabelValue centered label='Username' value={user.username} />

            <LabelValue centered label='Email' value={user.email} />
          </>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
}
