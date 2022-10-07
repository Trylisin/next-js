import { server } from "../../../config"
import Meta from "../../../components/Meta";
import Item from "../../../components/Item";
// import { useRouter } from "next/router"

const article = ({ article }) => {
    // const routers = useRouter()
    // const {id} = routers.query
    return (
        <>
            <Meta title={article[0].title}/>
            <Item article={article} />
        </>
    )
}

// export const getServerSideProps = async (content) => {

//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${content.params.id}`)
//     const article = await response.json()

//     return {
//         props: {
//             article,
//         }
//     }
// }

// export const getStaticProps = async ({ params }) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const article = await response.json()

//     return {
//         props: {
//             article,
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//     const articles = await response.json()
//     // const allID = articles.map( article => article.id)
//     // const paths = allID.map(id => ({params: {id:id.toString()}}))]

//     // other way to write
//     const paths = articles.map(article => {
//         return {
//             params: {
//                 id: article.id.toString()
//             }
//         }
//     })
//     return  {
//                 paths,
//                 fallback: false, // true, false, 'blocking'
//              }
// }

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`${server}/api/articles/${params.id}`)
    const article = await response.json()

    return {
        props: {
            article,
        }
    }
}

export const getStaticPaths = async () => {
    const response = await fetch(`${server}/api/articles/`)
    const articles = await response.json()
    // const allID = articles.map( article => article.id)
    // const paths = allID.map(id => ({params: {id:id.toString()}}))]

    // other way to write
    const paths = articles.map(article => {
        return {
            params: {
                id: article.id.toString()
            }
        }
    })
    return  {
                paths,
                fallback: false, // true, false, 'blocking'
             }

}
export default article