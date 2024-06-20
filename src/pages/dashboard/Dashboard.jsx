import { useEffect, useState } from "react";
import DashBar from "../../components/Dashboard/DashBar";
import DashGraph from "../../components/Dashboard/DashGraph";

const Dashboard = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    let sum = 0;
    data?.map(p => sum = sum + parseFloat(p?.price))

    return (
        <div className="container mx-auto mt-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
                <div className="bg-green-300 w-11/12 p-3 px-8 rounded-lg">
                    <h1 className="text-2xl font-semibold">Worth of Product</h1>
                    <h2 className="text-xl font-semibold">$ {sum.toFixed(2)}</h2>
                    <p>Save amount 20%</p>
                </div>
                <div className="bg-red-300 w-11/12 p-3 px-8 rounded-lg">
                    <h1 className="text-2xl font-semibold">Product Number</h1>
                    <h2 className="text-xl font-semibold mt-4">{data?.length}</h2>

                </div>
                <div className="bg-blue-300 w-11/12 p-3 px-8 rounded-lg">
                    <h1 className="text-2xl font-semibold">Total Sells</h1>
                    <h2 className="text-xl font-semibold">$ 000</h2>
                    <p>Save amount 20%</p>
                </div>
                <div className="bg-gray-300 w-11/12 p-3 px-8 rounded-lg">
                    <h1 className="text-2xl font-semibold">Approximate Profit</h1>
                    <h2 className="text-xl font-semibold">$ 50</h2>
                    <p>Save amount 20%</p>
                </div>

            </div>

            <div className="md:flex mt-6 p-4">
                <div className="md:w-1/2"><DashGraph /></div>
                <div className="md:w-1/2"><DashBar /></div>
            </div>
        </div>
    );
};

export default Dashboard;