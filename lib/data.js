import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), '_content')

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory)

  return allPosts.map(fileName => {
    const slug = fileName.replace('.md', '')
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      'utf8'
    )
    const { data, content } = matter(fileContents)
    return {
      data,
      content,
      slug
    }
  })
}

export const blogPosts = [
  {
    title: 'My first post!',
    slug: 'first',
    date: new Date().toISOString(),
    content: '111111111111'
  },
  {
    title: 'Second again!',
    slug: 'second',
    date: new Date().toISOString(),
    content: '2222222222222'
  },
  {
    title: 'Third is the best!',
    slug: 'third',
    date: new Date().toISOString(),
    content: '3333333333333'
  }
]