import { useEffect } from "react";
import { useState } from "react";
import Food from "./Food";
const Foods = ({handleCooking}) => {
     const [foods,setFoods] = useState([])
     // console.log(foods)
     useEffect(() => {
          fetch('foodie.json')
          .then(res => res.json())
          .then(data => setFoods(data))
     },[])
     return (
          <div className="grid grid-cols-2 gap-3 w-2/3">
               {
                    foods.map((food,idx) => <Food key={idx} food={food} handleCooking={handleCooking}></Food>)
               }
          </div>
     );
};


export default Foods;