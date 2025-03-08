// import { useState } from "react";

const Food = ({ food, handleCooking }) => {
     // const [clickedRecipeName, setClickedRecipeName] = useState('')
     // const handleClickedRecipe = (Name) => {
     //      console.log(Name)
     //      if(clickedRecipeName){
     //           alert('You have already clicked on a recipe')
     //           return false
               
     //      }
     //      else{
     //           setClickedRecipeName(Name)
     //      }
     // }
     const { recipeName, recipeImage, shortDescription, ingredients, preparingTime, calories } = food
     // console.log(recipeName)
     // console.log(food)
     return (
          <div className="flex flex-col gap-3 grow p-4 border rounded-lg">
               <img src={recipeImage} className="w-full h-80 rounded-xl border" alt="" />
               <div className="grow">
                    <h1>{recipeName}</h1>
                    <p>{shortDescription}</p>
               </div>
               <div className="grow">
                    <h1>Ingredients: {ingredients.length}</h1>
                    <div>
                         {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                    </div>
               </div>
               <div className="flex gap-12">
                    <h1>{preparingTime}</h1>
                    <h1>{calories}</h1>
               </div>
               <button onClick={() => {handleCooking(food)}} className="btn btn-outline bg-white font-extrabold hover:bg-[#ff6969cd] duration-700 hover:scale-105 text-black">Want To Cook</button>
          </div>

     );
};

export default Food;