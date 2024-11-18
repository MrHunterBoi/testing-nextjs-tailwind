import HeaderLink from '@/components/header/HeaderLink';

const Header = () => {
  return (
    <div className='flex justify-center mb-8'>
      <HeaderLink href={'/'}>Home</HeaderLink>

      <HeaderLink href={'/users'}>Users</HeaderLink>

      <HeaderLink href={'/movies'}>Movies</HeaderLink>
    </div>
  );
};

export default Header;
