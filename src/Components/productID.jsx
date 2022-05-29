import {useParams} from "react-router-dom" ; 
import {useState , useEffect} from "react" ; 
import axios from  "axios" ; 
import { Card } from "./card";
import {Navigate} from "react-router-dom" 
export const ProductID = ()=>{ 
    const {id}  = useParams() ;  

   

    const [item, setItem] = useState([]) ; 
           //  console.log(item) ;  

        
    useEffect(()=>{
        getData()
    },[]) ; 

    const getData =()=>{
        axios.get(`http://localhost:8080/data/${id}`).then((data)=>{  
                return setItem(data.data)
        }).catch((err)=>{
            <Navigate to = {"/error"}/>
        })}     
        
return  <div style = {{ marginLeft : "40%" , marginRight : "40%" , marginTop : "100px"}}> 
        <Card title = {item.name} price = {item.price} id = {item.id}/></div>
}