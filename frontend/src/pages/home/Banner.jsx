import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>

        <p className="mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          iure ratione amet eius repudiandae, minima veniam! Quam vel quas, esse
          iusto sequi magni suscipit temporibus beatae doloribus, delectus alias
          animi!
        </p>

        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
