import { Link } from "react-router-dom";

const AboutUs = () => {
    const img1 = "https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28165.jpg?t=st=1718909081~exp=1718912681~hmac=7cfb375d433eeda92cf7486deebaddfe2bb85057be483c94d942e2122c31af92&w=1060"
    const img2 = "https://img.freepik.com/free-photo/bag-full-vegetables_1112-369.jpg?t=st=1718910630~exp=1718914230~hmac=0b403d87542cf3e600b023ee047a8974a1dfbd9a2426d2b6ef9253f67a4e92e5&w=360"
    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-center text-3xl font-bold">About Us</h1>
            <p className="text-lg text-justify mt-2 max-w-5xl mx-auto">Welcome to our e-commerce haven! At Bangla Bazar, we`re dedicated to offering a curated selection of premium products that enhance your lifestyle. With a commitment to quality and customer satisfaction, we strive to provide a seamless shopping experience with fast shipping and exceptional service. Join us and explore excellence today! fast shipping and exceptional service. Join us and explore excellence today!</p>
            <div className="flex justify-center items-center gap-6 mt-8">
                <div className="">
                    <Link to={"/regular-products"}>
                        <img className="h-[400px]" src={img1} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={"/regular-products"}>
                        <img className="h-[400px]" src={img2} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;