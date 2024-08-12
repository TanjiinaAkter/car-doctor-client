import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="flex items-center absolute top-0 left-0 bg-gradient-to-r from-[#151515] h-full to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-3 p-3 md:pl-12  md:w-1/2">
            <h2 className="font-bold text-xl md:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2">
              <button className="btn-sm btn md:btn-md outline-none border-none text-white bg-[#FF3811]">
                Discover more
              </button>
              <button className="btn-sm btn md:btn-md btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 bottom-0 right-0 gap-[1px]  md:gap-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn-sm btn md:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn-sm btn md:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="flex items-center absolute top-0 left-0 bg-gradient-to-r from-[#151515] h-full to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-3 p-3 md:pl-12  md:w-1/2">
            <h2 className="font-bold text-xl md:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2">
              <button className="btn-sm btn md:btn-md outline-none border-none text-white bg-[#FF3811]">
                Discover more
              </button>
              <button className="btn-sm btn md:btn-md btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 bottom-0 right-0 gap-[1px]  md:gap-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn-sm btn md:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn-sm btn md:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="flex items-center absolute top-0 left-0 bg-gradient-to-r from-[#151515] h-full to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-3 p-3 md:pl-12  md:w-1/2">
            <h2 className="font-bold text-xl md:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2">
              <button className="btn-sm btn md:btn-md outline-none border-none text-white bg-[#FF3811]">
                Discover more
              </button>
              <button className="btn-sm btn md:btn-md btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 bottom-0 right-0 gap-[1px]  md:gap-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn-sm btn md:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn-sm btn md:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="flex items-center absolute top-0 left-0 bg-gradient-to-r from-[#151515] h-full to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-3 p-3 md:pl-12  md:w-1/2">
            <h2 className="font-bold text-xl md:text-6xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2">
              <button className="btn-sm btn md:btn-md outline-none border-none text-white bg-[#FF3811]">
                Discover more
              </button>
              <button className="btn-sm btn md:btn-md btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 bottom-0 right-0 gap-[1px]  md:gap-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn-sm btn md:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn-sm btn md:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
