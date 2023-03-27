import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <h2>login site</h2>
     <Login/>
   </div>
  )
}
