import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import cx from 'classnames';

const LinkItem: React.FC<{ href: string; active: boolean }> = ({
  children,
  href,
  active,
}) => (
  <Link href={href}>
    <a
      className={cx(
        'flex font-medium py-3 px-5 text-lg',
        { 'bg-blue-700 text-white': active },
        { 'bg-gray-100 text-blue-700 hover:bg-gray-200': !active }
      )}
    >
      {children}
    </a>
  </Link>
);

const links = [
  { label: 'Table', href: '/' },
  { label: 'Map', href: '/map' },
  { label: 'Dashboard', href: '/dashboard' },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="z-50 border-b border-solid border-gray-400">
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <li key={link.href}>
              <LinkItem href={link.href} active={router.asPath === link.href}>
                {link.label}
              </LinkItem>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
