import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link className='py-8 px-4 duration-100 hover:bg-white hover:text-black' href={href}>
      {children}
    </Link>
  );
};

export default HeaderLink;
