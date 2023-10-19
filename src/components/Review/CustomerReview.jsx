const CustomerReview = () => {
  return (
    <div>
      <div className="text-5xl text-center font-bold mt-10 mb-4">
        {" "}
        <h1>Customer Testimonial</h1>
      </div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-green-300   ml-5  "
        >
          <p className="text-xl px-20 py-28">
            "I can't say enough good things about this e-commerce site! The
            variety of products is amazing, and the user-friendly interface
            makes shopping a breeze. I've been a loyal customer for over a year
            now, and the quality of the products and the speed of delivery
            always impress me. Plus, their customer support team is top-notch.
            Whenever I've had a question or concern, they've been quick to
            assist. I highly recommend this site to anyone looking for a
            fantastic online shopping experience."
            <br />
            --Robiul Islam ROni
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full  bg-green-300   ml-5 "
        >
          <p className="text-xl px-20 py-28">
            "This e-commerce site is a tech geek's paradise. Whether I'm looking
            for the latest gadgets, accessories, or hard-to-find tech
            components, they've got it all. The product reviews and ratings are
            incredibly helpful in making informed decisions, and their prices
            are very competitive. What truly sets them apart is their commitment
            to customer satisfaction. I had a minor issue with one of my orders,
            and their responsive customer support team resolved it swiftly. I
            won't shop for tech anywhere else." These additional testimonials
            reflect the e-commerce site's appeal to customers with specific
            interests, such as fashion and technology, and highlight the site's
            commitment to customer satisfaction, product range, and ease of
            shopping. Regenerate
            <br />
            --Rokibul
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full  bg-green-300   ml-5 "
        >
          <p className="text-xl px-20 py-28">
            "As a busy mom, I rely on online shopping to make my life easier.
            This e-commerce site has been a lifesaver! I can find everything I
            need for my family in one place, from groceries to clothing and
            toys. The subscription service for essentials has been a
            game-changer, saving me time and money. I also appreciate their
            detailed product descriptions and reviews from other customers,
            which help me make informed choices. It's a one-stop shop that I
            trust and love."
            <br />
            --Sumu
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full  bg-green-300   ml-5"
        >
          <p className="text-xl px-20 py-28">
            "This e-commerce site is a tech geek's paradise. Whether I'm looking
            for the latest gadgets, accessories, or hard-to-find tech
            components, they've got it all. The product reviews and ratings are
            incredibly helpful in making informed decisions, and their prices
            are very competitive. What truly sets them apart is their commitment
            to customer satisfaction. I had a minor issue with one of my orders,
            and their responsive customer support team resolved it swiftly. I
            won't shop for tech anywhere else."
            <br />
            --Priom
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
