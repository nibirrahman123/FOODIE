// all import goes here

import Navbar from "./components/navbar/Navbar"
import Banner from './components/banner/Banner'
import Foods from './components/food/Foods'
import WantToCook from "./components/want-to-cook-section/WantToCook"
import { useState } from "react"
import CurrentlyCooking from "./components/currently cooking/CurrentlyCooking"
import { toast, ToastContainer } from "react-toastify"




function App() {

  const [cooking, setCooking] = useState([])
  const [preparing, setpreparing] = useState([])
  console.log(preparing)

  const handlePreparing = (data) => {
    // console.log(data)
    const newPreaparing = [...preparing,data]
    setpreparing(newPreaparing)
    const remaining = cooking.filter(cartId => cartId.recipeName !== data.recipeName)
    setCooking(remaining)
  }
  // console.log(cooking)
  const handleCooking = (cookData) => {
    // console.log(cookData)
    const isExist = cooking.find(item => item.recipeName === cookData.recipeName)
    if (isExist) {
      return toast.error('Cooking in process');
    }
    const newCooking = [...cooking, cookData]
    setCooking(newCooking)
    // console.log(cooking)
  }




  return (
    <div className="container mx-auto px-3 space-y-4">
      <ToastContainer />
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className="flex justify-between p-4 gap-3">
        <Foods handleCooking={handleCooking}></Foods>
        <div className="flex flex-col gap-3">
          <WantToCook handlePreparing={handlePreparing} cooking={cooking}></WantToCook>
          <CurrentlyCooking preparing={preparing}></CurrentlyCooking>
        </div>
      </div>
    </div>
  )
}




export default App
