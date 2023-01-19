import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
      <>
          <Head>
        <title>Fun with Words</title>
      </Head>
        <Navbar currentPage='home'/>
          <div>

          </div>
      </>
  )
}

export default Home