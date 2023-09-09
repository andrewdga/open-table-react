import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '../components/nav'
import Restaurants from '../components/restaurants'

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Restaurants />
    </div>
  )
}
