import "./card.css"  ;
export const Card = ({title,price,id})=>{
    return (
        <div className = "container">
           <p>Title : {title}</p>
           <p>Price : {price}</p>
           <p>id : {id}</p>
        </div>
    )
}