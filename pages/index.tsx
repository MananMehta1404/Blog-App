import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'}
];

const Home: NextPage = () => {
  return (
    <div className="">

      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid- grid-cols-1 lg:grid-cols-12 gap-12'>

        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>

        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home

