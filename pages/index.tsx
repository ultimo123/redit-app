import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Redit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {PostBox} */}

      <PostBox />

      <div>{/* Feed */}</div>
    </div>
  )
}

export default Home
