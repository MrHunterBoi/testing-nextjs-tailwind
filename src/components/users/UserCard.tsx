import LabelValue from '@/components/ui/LabelValue';
import { IUser } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useMemo } from 'react';

interface UserCardProps {
  user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  // Formatting created date on each change of the user field
  const createdDate = useMemo(() => {
    const date = new Date(user.createdAt);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }, [user.createdAt]);

  return (
    // Card with the link to page
    <Link
      href={`/users/${user.id}`}
      className='border-2 border-white rounded-md p-4 flex items-center gap-2 hover:bg-slate-900 duration-150'
    >
      <Image
        width={64}
        height={64}
        src={user.avatar || '/user_pfp.jpg'}
        alt={user.username}
        className={'rounded-full'}
      />

      <div className='max-w-full overflow-hidden'>
        <LabelValue label='Username' value={user.username} />

        <LabelValue label='Email' value={user.email} />

        <LabelValue label='Joined' value={createdDate} />
      </div>
    </Link>
  );
};

export default UserCard;
