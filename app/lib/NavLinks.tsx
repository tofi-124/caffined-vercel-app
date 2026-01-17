import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Offerings',
      path: '/offerings' 
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact Us',
      path: '/contact-us'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
  ]
  return (
    <>
      {links.map((link, index) => <Link className=' hover:underline' key={index} href={link.path}> {link.name} </Link>)}
    </>
  )
}

export default NavLinks
