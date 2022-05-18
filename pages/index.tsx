import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Redit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
