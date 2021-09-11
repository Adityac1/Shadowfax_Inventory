import React from "react";
import "./AddedCard.css"


function AddedCard(props){

    console.log(props.location.state.info)

    const {date, name, Deliveries, Amount, Hamount, Oamount, Method, pickups, Comment, Total} = props.location.state.info

    return(
        <div className="details">
            <p>{name} Details of {date}</p>
            <p>Date: {date}</p>
            <p>Name: {name}</p>
            <p>Deliveries: {Deliveries}</p>
            <p>Total Collected Amount: {Amount}</p>
            <p>Hand Paid Amount: {Hamount}</p>
            <p>Online Paid Amount: {Oamount}</p>
            <p>Payment Gateway App: {Method}</p>
            <p>Pickups: {pickups}</p>
            <p>Comments: {Comment}</p>
            <p>Total: {Total}</p>
        </div>
    )
}

export default AddedCard