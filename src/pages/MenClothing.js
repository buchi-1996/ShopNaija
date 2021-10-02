import React from 'react'
import { Link, useParams } from 'react-router-dom';

const MenClothing = () => {
    console.log(useParams())
    const {name} = useParams();
    // const name = 'buchi';
    return (
        <div>
            <h1>Mens Clothing</h1>
            <Link to={`/men/${name}`}></Link>
        </div>
    )
}

export default MenClothing
