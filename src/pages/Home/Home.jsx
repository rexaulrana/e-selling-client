import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import CustomerReview from "../../components/Review/CustomerReview";
import System from "../../components/system/System";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerReview></CustomerReview>
      <System></System>
      <Footer></Footer>
    </div>
  );
};

export default Home;
