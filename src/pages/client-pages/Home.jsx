import Banner from "../../components/home/Banner";
import Products from "../../components/home/Products";
import SmallOffer from "../../components/home/SmallOffer";
import AllProducts from "./AllProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <SmallOffer />
            <Products />
            <AllProducts />
        </div>
    );
};

export default Home;