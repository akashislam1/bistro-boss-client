import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/carousel/01.jpg";
import img2 from "../../../assets/home/carousel/02.jpg";
import img3 from "../../../assets/home/carousel/03.png";
import img4 from "../../../assets/home/carousel/04.jpg";
import img5 from "../../../assets/home/carousel/05.png";
import img6 from "../../../assets/home/carousel/06.png";
const Banner = () => {
  return (
    <Carousel className="carousel-style text-center">
      <div>
        <img className="max-h-[600px]" src={img1} />
      </div>
      <div>
        <img className="max-h-[600px]" src={img2} />
      </div>
      <div>
        <img className="max-h-[600px]" src={img3} />
      </div>
      <div>
        <img className="max-h-[600px]" src={img4} />
      </div>
      <div>
        <img className="max-h-[600px]" src={img5} />
      </div>
      <div>
        <img className="max-h-[600px]" src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
