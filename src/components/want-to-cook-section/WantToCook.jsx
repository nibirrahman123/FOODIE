const WantToCook = ({ cooking, handlePreparing }) => {
     // console.log(cooking)


     return (
          <div className="border  rounded-lg">
               <h1 className="text-2xl font-bold text-center">Want To Cook : {cooking.length}</h1>
               <table>
                    <tbody className="flex flex-col text-gray-600">
                         <tr className="text-center font-bold">
                              <td className="w-36 ">Name</td>
                              <td className="w-36">Time</td>
                              <td className="w-36">Calories</td>
                              <td className="w-36">Actions</td>
                         </tr>

                         {
                              cooking.map((item, index) =>
                                   <tr className="flex text-center p-2" key={index}>
                                        <tr>
                                             <td className="w-36 px-1">{item.recipeName}</td>
                                             <td className="w-36 px-1">{item.preparingTime}</td>
                                             <td className="w-36 px-1">{item.calories}</td>
                                        </tr>
                                        <button onClick={() => handlePreparing(item)} className="btn btn-outline">preparing</button>
                                   </tr>
                              )
                         }

                    </tbody>
               </table>
          </div>
     );
};

export default WantToCook;
