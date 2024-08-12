import person from "../../../assets/images/about_us/person.jpg";

import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute border-8 border-white top-1/2 w-1/2 rounded-lg shadow-2xl right-5"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="py-6 text-5xl">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p className="text-gray-600">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn btn-sm md:btn-md btn-error text-white rounded-md bg-[#FF3811]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
