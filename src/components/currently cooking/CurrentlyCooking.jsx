const CurrentlyCooking = ({ preparing }) => {
    console.log(preparing)
    return (
        <div className="border  rounded-lg">
            <h1 className="text-2xl font-bold text-center">Currently Cooking : {preparing.length}</h1>
            <table>
                <tbody className="flex flex-col text-gray-600">
                    <tr className="text-center font-bold">
                        <td className="w-36 ">Name</td>
                        <td className="w-36">Time</td>
                        <td className="w-36">Calories</td>
                    </tr>

                    {
                        preparing.map((item, index) =>
                            <tr className="flex flex-col text-center p-2" key={index}>
                                <tr>
                                    <td className="w-36 px-1">{item.recipeName}</td>
                                    <td className="w-36 px-1">{item.preparingTime}</td>
                                    <td className="w-36 px-1">{item.calories}</td>
                                </tr>
                            </tr>
                        )
                    }
                    <div className="flex justify-between px-4">
                        <h1>total preparingTime : {preparing.reduce((a, b) => a + parseInt(b.preparingTime), 0)}</h1>
                        <h1>total Calories : {preparing.reduce((a, b) => a + parseInt(b.calories), 0)}</h1>
                    </div>

                </tbody>
            </table>
        </div>
    );
};

export default CurrentlyCooking;