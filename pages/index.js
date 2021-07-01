import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>HomePage</title>
        <meta name="keywords" content="Web development, programming"></meta>
    </Head>
    <div>
        <h1 className={styles.title}>HomePage </h1>
        <p className={styles.text}>Officia esse cillum excepteur ipsum elit Lorem et qui fugiat sunt sint.</p>
        <p className={styles.text}>Ut voluptate sunt laborum incididunt quis anim id fugiat eiusmod enim quis ut tempor ullamco. Ipsum id Lorem velit officia magna est labore aliqua pariatur. Ipsum fugiat in et quis. Eiusmod commodo dolor enim minim enim tempor quis Lorem fugiat ad irure officia. Do commodo duis exercitation aute et Lorem ullamco minim.</p>
        <Link href="/users">
          <a className={styles.btn}>See Users</a>
        </Link>
    </div>
    </>
   
  )
}
