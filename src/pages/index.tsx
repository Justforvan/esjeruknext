import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from './components/login-form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Es Jeruk Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid h-screen place-items-center">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france-.jpg"
                className="w-30 h-60"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <LoginForm/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
