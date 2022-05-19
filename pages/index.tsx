import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home = () => {
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Head>
        <title>Redit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostBox />

      <div className="flex">{/* Feed */}</div>
    </div>
  )
}

export default Home
