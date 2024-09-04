// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../customhook/useServices";

const Services = () => {
  const services = useServices();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://car-doctor-server-mu-sable.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div className="mx-auto w-full ">
      <div className="text-center space-y-3 mt-8  md:w-1/2 mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">
          Service {services.length}
        </h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ml-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
