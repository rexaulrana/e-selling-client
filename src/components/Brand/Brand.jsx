import { Link } from "react-router-dom";

const Brand = ({ brandItem }) => {
  const { brandName, brandImg } = brandItem;
  return (
    <div>
      <Link
        to={`/brands/${brandName}`}
        className="card h-[400px]  bg-base-100 shadow-xl image-full"
      >
        <figure>
          <img className="" src={brandImg} alt={brandName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title bg-green-700 py-1 px-2 w-24 rounded-lg">
            {brandName}
          </h2>

          <div className="card-actions justify-end"></div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
