import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <h1 className="text-lg text-indigo-900">Hello world</h1> 
    </div>
  )
}
