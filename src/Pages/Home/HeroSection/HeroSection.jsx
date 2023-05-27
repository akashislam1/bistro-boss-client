import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-item my-28 py-4">
      <div className="md:flex justify-center items-center gap-5  py-10 px-5 md:px-32 ">
        <div className="text-black bg-white text-center p-5 md:py-20 md:px-40">
          <h3 className="uppercase text-xl mb-4 md:text-4xl">Bistro Boss</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
