import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import { Post as PostProps } from '../typings'
import Post from './Post'

const Feed = () => {
  const { data, error } = useQuery(GET_ALL_POSTS)

  const posts: PostProps[] = data?.getPostList

  console.log(posts)

  return (
    <div className="mt-5 w-full space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
