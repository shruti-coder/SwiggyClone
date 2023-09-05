import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/contants";
import { Shimmer } from "./Shimmer";
const ResturantMenu=()=>{

const[menuName,setMenuName]=useState(null);

const {resId} =useParams();
// console.log(params);

useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu = async ( ) => {
    const data =await fetch(MENU_URL+ resId);
    const json= await data.json();
    setMenuName(json);
};
console.log(menuName);
// console.log(menuName?.data?.cards[0]?.card?.card?.info?.name);

if(menuName===null) return <Shimmer/>;

const {name,cuisines,costForTwoMessage}= menuName?.data?.cards[0]?.card?.card?.info;

const {itemCards}= menuName?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[5].card.card;


    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => (
                 <li key={item.card.info.id}> 
                    {item.card.info.name}- {"Rs."}{item.card.info.price/100}
                </li>

                ))}
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>Coke</li> */}
            </ul>
        </div>
    
    );
};
export default ResturantMenu;