import Head from 'next/head'
import { server } from '../config';
import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';

export default function Home({ articles }) {
  return (
    <div>
      <Meta/>
      <ArticleList articles={articles} />
    </div>

  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles/`)
  const articles = await response.json()

  return {
    props: {
      articles,
    }
  }
}
