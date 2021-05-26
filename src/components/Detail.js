import { useParams } from 'react-router'
import menu from '../data/Menu'
const Detail = () => {

    const {id} = useParams()

    const item = menu.find(i=>i.id==id)

    return (
        <div >
            <button className="btn btn-danger" > <a href={item.movie}>1 Серия</a></button>
            <h1>{item.title}</h1>

        </div>
        
    )
}

export default Detail