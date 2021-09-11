import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import RenderingData from "./RedneringData";
import "./List.css"
import Buttons from "./Buttons";

function AddedList(){

    const [details, setDetails] = useState([]);
    // const [date, setDate] = useState(null)

    useEffect (() => {
        axios.get("https://612c8be0ab461c00178b5d5e.mockapi.io/api/Inventory")
        .then(res => {
            setDetails(res.data)
        })

    }, [])


    let dataRender = details.map(detail => {
        return(
            <RenderingData detail = {detail} key = {detail.id} />
            // console.log(detail)
        )
    })

    // let rending = details
    // .map(detail => {
    //     return(
    //         <div>{detail.date}</div>
    //     )
    // })


    return(
        <div className="list">
            <Buttons/>
            
            <div className="headings" >
                <p>Date</p>
                <p>Name</p>
                <p>Total Count</p>
                <p>Total Amount</p>
            </div>
            <div className="dataList">
            <div>
                {/* {rending}
                 */}
                 {dataRender}
            </div>
            </div>

        </div>
    )
}


export default AddedList