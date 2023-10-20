import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import CustomerReview from "../../components/Review/CustomerReview";
import System from "../../components/system/System";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <CustomerReview></CustomerReview>
      <System></System>
      <Footer></Footer>
    </div>
  );
};

export default Home;
