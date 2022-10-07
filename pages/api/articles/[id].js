import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {

    //For parameter req
    // const id = req.query.id
    const getFilter = articles.filter(article => article.id === id)

    if (getFilter.length > 0) {
        res.status(200).json(getFilter)
    }
    else {
        res.status(404).json({ "message": `This articcle ID: ${id} is not found.` })
    }
}