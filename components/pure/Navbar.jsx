import React from 'react';
import Link from 'next/link';

function Navbar() {
  let links = [
    {name: 'Home', href: '/'},
    {name: 'Compound Interest', href: '/compound-interest'},
    {name: 'Debt Capacity', href: '/debt-capacity'}
  ]
  return (
    <ul>
      {
        links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Navbar;