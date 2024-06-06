
const FeaturesProduct = () => {
    return (
        <div>
            <div className="mt-4 relative bg-center bg-cover h-[300px]   bg-feature-component rounded-lg">
                <div className="absolute inset-0 bg-black  bg-opacity-30 ps-4 flex flex-col items-start justify-center gap-6">
                    <div className="bg-red-400 bg-opacity-70 p-8 md:w-2/3 rounded-lg">
                        <h1 className="text-3xl font-semibold">Fresh organic vegetables</h1>
                        <p className="">All vegetables are collected from our super fresh farm. We also done our lab experiment.</p>
                        <button className="btn btn-success rounded-full mt-4">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesProduct;