import React from "react";
import "./Rendering.css"
import {Link} from "react-router-dom"

function RenderingData(props){

    const {id, date, name, Total, Amount} = props.detail
    console.log(props)
    return(
        <div>
            
            <div className="dataRender">
            <Link to={{pathname: `/detail/${id}`, state:{ info: props.detail}}}>
            <p>{date}</p>
            </Link>
            <p>{name}</p>
            <p>{Total}</p>
            <p>{Amount}</p>
            {/* </Link> */}
            </div>
            

        </div>
    )
}

export default RenderingData;