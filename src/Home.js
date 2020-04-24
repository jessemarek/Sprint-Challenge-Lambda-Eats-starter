import React from 'react'
import { Link } from 'react-router-dom'

const Home = props =>{

    return(
        <div className="container">
            <Link to={"/pizza"} ><button>Order Pizza</button></Link>

        </div>
    )
}

export default Home