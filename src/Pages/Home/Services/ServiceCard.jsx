import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-md border border-gray-200">
      <figure className="px-4 pt-4 w-full h-full">
        <img src={img} alt="Shoes" className="rounded-xl h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <div className="flex justify-between  items-center ">
          <p className="text-orange-600 text-xl font-semibold">
            Price : ${price}
          </p>
          <Link to={`/book/${_id}`}>
            <FaArrowRightLong className="text-orange-600 text-xl font-semibold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
