import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRec from "../ChefRec/ChefRec";
import Featured from "../Featured/Featured";
import HeroSection from "../HeroSection/HeroSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <HeroSection></HeroSection>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRec></ChefRec>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
