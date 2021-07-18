import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './comps/Footer'
import Navbar from './comps/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head >
        <title> Homepage</title>
        <meta name="keywords" content="onepiece" />
      </Head>
      <div>
        <Image src="/op.jpeg" width={100} height={90} />

        <p>JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.</p>
        <Link href="/blogs"><a>see all the blogs heere </a></Link>
      </div>
    </>
  )
}
