import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
import { Card } from "./card";
import {Link} from "react-router-dom"
export const Product = ()=>{

    const [list , setList] = useState([]) ; 
        console.log(list) ; 

       useEffect(()=>{
            getData()
       },[]) 

   const getData =()=>{
        axios.get("http://localhost:8080/data").then((data)=>{
              //console.log(data) ; 
              return setList(data.data) ; 
        })
       }
    return (
       <div style = {{ textDecoration :"none" ,  display : "flex" , flexDirection : "row" , gap : "20px" , marginTop : "100px"}}>
           {list.map((e)=>{
               return  <Link to = {`${e.id}`}  ><Card id = {e.id} title = {e.name} price = {e.price} /></Link>
               
           })}
       </div>
    )
}