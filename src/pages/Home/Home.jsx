import Banner from "../../components/Banner/Banner";
import FeaturedRoom from "../../components/FeaturedRoom/FeaturedRoom";
import Map from "../../components/Map/Map";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <Map></Map>
            <FeaturedRoom></FeaturedRoom>
        </div>
    );
};

export default Home;