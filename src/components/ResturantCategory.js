import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory=({data})=>{
    console.log(data);
    const[showList,setShowList]=useState(false);
    const handleClick=()=>{
        setShowList(!showList);
    }

    return (
    <div>
        {/* {Header} */}
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
           <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>{"⬇️"}</span>
            </div>
        {showList && <ItemList items={data.itemCards}/>}
        </div>
        {/* {Accordian} */}

    </div>
    );
}
export default ResturantCategory;