
import { Link, useLocation } from 'react-router-dom'
import XMLParser from 'react-xml-parser';

export default function BlogPost() {

    const location = useLocation()
    const { imagePath, post } = location.state
    debugger;


    return (

        <div>
            <img src={imagePath} alt='img' />
            <p >{post}</p>

            <Link to="/" >back to List</Link>
        </div>

    )
}