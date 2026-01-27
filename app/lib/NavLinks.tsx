import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Shop',
      path: '/shop' 
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact-us'
    },
  ]
  return (
    <>
      {links.map((link, index) => <Link className='hover:underline' key={index} href={link.path}> {link.name} </Link>)}
    </>
  )
}

export default NavLinks
