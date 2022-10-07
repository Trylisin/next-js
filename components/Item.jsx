import Link from "next/link"
import itemStyles from "../styles/Item.module.css"

const Item = ({ article }) => {
    return (
        <>
            <div className={itemStyles.item} >
                
                <h3>{article[0].id}. {article[0].title}</h3>
                <p>{article[0].body}</p>

                <button className={itemStyles.button}>
                <Link href='/' className={itemStyles.button}>Back</Link>
                </button>
            </div>
        </>
    )
}

export default Item