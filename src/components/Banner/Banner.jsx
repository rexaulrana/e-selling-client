const Banner = () => {
  return (
    <div>
      <div
        className="hero  min-h-screen "
        style={{
          backgroundImage: "url(https://i.ibb.co/cXPSnxb/banner4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md pr-20">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-green-600">Show</span> Your <br /> Personal{" "}
              <span className="text-green-600">Style</span>
            </h1>
            <p className="mb-5 text-xl">
              Shop with us and make <br /> your life colorful
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
