import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-8 px-4 md:py-16 md:px-96 text-center bg-black bg-opacity-40">
            <h1 className="mb-5 md:text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in.</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
