import Countdown from "react-countdown";

const SmallOffer = () => {

    const Completionist = () => <span>Opps You missed a great deal!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span className="text-3xl font-semibold flex items-center">
                <p className="bg-green-600 p-4 rounded-md" >00</p> :
                <p className="bg-green-600 p-4 rounded-md" > {hours}</p> :
                <p className="bg-green-600 p-4 rounded-md" > {minutes}</p> :
                <p className="bg-green-600 p-4 rounded-md" > {seconds}</p>
            </span>;
        }
    };

    return (
        <div className=" w-11/12 mx-auto mt-8">
            <div className="relative bg-center bg-cover h-40  bg-small-component rounded-lg">
                <div className="absolute inset-0 bg-black bg-opacity-40 ps-4 flex items-center justify-starts">
                    <p className="text-3xl font-semibold">We are dedicated to you with 100% security.</p>
                </div>
            </div>

            <div className=" md:flex justify-around items-center mt-8">
                <div>
                    <h1 className="text-red-600 text-3xl font-semibold">Hurry up it will be great deal! </h1>
                    <h1 className="text-green-600">Hurry up it will be great deal! </h1>
                </div>

                <div>
                    <Countdown date={Date.now() + 50000000} renderer={renderer} />
                </div>
            </div>
        </div>
    );
};

export default SmallOffer;