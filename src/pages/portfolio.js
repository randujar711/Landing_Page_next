import React from 'react'
import Link from 'next/link'
import PortfolioCard from '@/components/portfolioCard'

export default function testpage({projects}) {
  return (
    <div>
        <h1>testpage</h1>
        <Link href="/">go home</Link>
        <PortfolioCard projects={projects} />
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('http://127.0.0.1:3001/projects')
  const projects = await res.json()

  return {props: {projects}}
}