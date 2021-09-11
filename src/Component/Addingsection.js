import React, {useState} from "react";
import axios from "axios";
import emailjs from "emailjs-com"

function Addingsection(){

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [deliveries, setDeliveries] = useState('');
    const [amount, setAmount] = useState('');
    const [hamount, setHamount] = useState('');
    const [oamount, setOamount] = useState('');
    const [method, setMethod] = useState('');
    const [pick, setPick] = useState('');
    const [comment, setComment] = useState('');
    const [entered, setEntered] = useState(null)
    


   const handleSubmit = (e) => {
       e.preventDefault();
       const entered={
        date:date,
        name:name,
        Deliveries:deliveries,
        Amount:amount,
        Hamount:hamount,
        Oamount:oamount,
        Method:method,
        pickups:pick,
        Comment:comment,
        Total:Number(deliveries) + Number(pick)
    }

    const value = Number(deliveries) + Number(pick);
    console.log(value)
    // console.log(Deliveries + pickups)
    sendEmail(e);
    axios.post("https://612c8be0ab461c00178b5d5e.mockapi.io/api/Inventory", entered)
    .then(res => {
        // console.log(res.data)
        setEntered(res.data)
        // console.log(entered)
        setDate('')
        setName('');
        setDeliveries('');
        setAmount('');
        setHamount('');
        setOamount('');
        setMethod('');
        setPick('');
        setComment('');
    })
    .catch(error => {
        console.log(error)
    })

    }

    function sendEmail(e){
        // e.preventDefault();
        // emailjs.sendForm('gmail', 'template_ihu7ofe',e.target,'user_d16mde1PrgerHIikzVNoF')
        // .then(res => {
        //     console.log(res.text);
        // }), (error) => {
        //     console.log(error.text)
        // }
        // e.target.reset()

        emailjs.sendForm('service_qqa67im','template_ihu7ofe', e.target, 'user_d16mde1PrgerHIikzVNoF').then(
            res => {
                console.log(res.text)
            }, (error) => {
                console.log(error.text)
            }
        )
    }


    return(
        <div>
            <p>Adding</p>
            <form onSubmit = {handleSubmit}>
                <label for = "Date">Select the Date</label>
                <input 
                type="date" 
                id="Date"
                value = {date}
                onChange = {e => setDate(e.target.value)}
                name="date"
                 /> <br/> <br/>
                <label for = "rname">Rider Name</label>
                <input 
                type="text" 
                id="rname" 
                placeholder = "Enter the rider name" 
                value = {name}
                onChange = {e => setName(e.target.value)}
                name="name"
                /> <br/> <br/>
                <label for = "deliveries">Number of Deliveries</label>
                <input 
                type="number" 
                id="deliveries" 
                placeholder = "Enter the no of deliveries" 
                value = {deliveries}
                onChange = {e => setDeliveries(e.target.value)}
                /> <br/> <br/>
                <label for = "damount">Delivery Amount</label>
                <input 
                type="number" 
                id="damount" 
                placeholder = "Enter the delivery Amount" 
                value = {amount}
                onChange={e => setAmount(e.target.value)}
                name="amount"
                /> <br/> <br/>
                <label for = "dhamount">Delivery Amount Hand Paid</label>
                <input 
                type="number" 
                id="dhamount" 
                placeholder = "Enter the delivery Amount Hand Paid" 
                value = {hamount}
                onChange = {e => setHamount(e.target.value)}
                name="hand"
                /> <br/> <br/>
                <label for = "damount">Delivery Amount Online Paid    </label>
                <input 
                type="number" 
                id="damount" 
                placeholder = "Enter the delivery Amount online paid" 
                value={oamount}
                onChange = {e => setOamount(e.target.value)}
                name="online"
                /> <br/> <br/>
                <label for = "damountapp">Delivery Amount online paid App(Gpay/PhonePe)</label>
                <input 
                type="text" 
                id="damountapp" 
                placeholder = "Enter the delivery Amount online paid App(Gpay or PhonePe) "
                value = {method}
                onChange = {e => setMethod(e.target.value)}
                name="app"
                /> <br/> <br/>
                <label for = "pick">Enter the Pickups </label>
                <input type="text" id="pick" placeholder = "Enter the Pickups "
                value = {pick}
                onChange = {e => setPick(e.target.value)}
                /> <br/> <br/>
                <label for = "comm">Enter the Comment </label>
                <input type="text" id="comm" placeholder = "Enter the comment " 
                value = {comment}
                onChange = {e => setComment(e.target.value)}
                /> <br/> <br/>
                {/* <Link to="/"> */}
                <button>Add the Data</button>
                {/* </Link> */}
            </form>
        </div>
    )

}




export default Addingsection;