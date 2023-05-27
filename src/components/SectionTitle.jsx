const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-8">
      <p className="text-[#D99904] mb-2 md:text-xl italic ">
        ---{subheading}---
      </p>
      <h2 className="border-y-4 inline-block p-2 font-normal uppercase text-3xl md:text-4xl ">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
