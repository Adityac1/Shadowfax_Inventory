import React from "react";
import {Link} from "react-router-dom"
import {CSVLink} from "react-csv";
import axios from "axios";

const headers = [
    {label: "Date", key:"date"},
    {label: "Rider Name", key:"name"},
    {label: "Deliveries", key:"Deliveries"},
    {label: "Amount", key:"Amount"},
    {label: "Pickups", key:"pickups"},
    {label: "Total", key:"Total"},
]


class Buttons extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    
        this.csvLinkEl = React.createRef();    
    }

    getApiData = () => {
        return fetch("https://612c8be0ab461c00178b5d5e.mockapi.io/api/Inventory").then(res => res.json())
    }

    downloadReport = async() => {
        const data = await this.getApiData();
        this.setState({data: data}, () => {
            setTimeout(() => {
                this.csvLinkEl.current.link.click();
            })
        })
    }
    
    render(){
        const {data} = this.state;
        return(
            <div className="addedList">
            <p> Rider's Data List</p>
            <Link to="/add">
            <button className="btn1">Add</button>
            </Link>
            <button onClick={this.downloadReport} className="btn">Export to CSV</button>
            <CSVLink 
            headers={headers}
            filename = "Monthly_Riders_Data.csv" 
            data = {data}
            ref={this.csvLinkEl}
            />
            </div>
        )
    }
}


export default Buttons