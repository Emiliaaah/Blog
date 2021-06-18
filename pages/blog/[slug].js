import Head from 'next/head'
import {format, parseISO } from 'date-fns'
import { getAllPosts } from '../../lib/data';

export default function BlogPage({title, date, content}) {
  return (
    <div >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className="border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-s">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
        </div>
        <div>{content}</div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getAllPosts()
  const {data, content} = allPosts.find((item) => item.slug === params.slug)
  console.log(data, content)
  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: content
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      }
    })),
    fallback: false
  };
}
