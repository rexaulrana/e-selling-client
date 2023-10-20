// import { stringify } from "postcss";

import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    if (
      !productName ||
      !brandName ||
      !price ||
      !description ||
      !rating ||
      !image
    ) {
      toast("please fill all fields ");
      return;
    }

    const newProduct = {
      productName,
      brandName,
      price,
      description,
      rating,
      image,
    };
    console.log(newProduct);

    fetch("http://localhost:5000/addProduct", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Your product added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="mt-6 mb-5">
      <h1 className="text-center text-4xl font-bold">Add Product</h1>

      <div>
        <form onSubmit={handleAddProduct}>
          <div className="flex justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="product-Name"
                  className="input input-bordered md:w-full"
                  name="productName"
                />
              </label>
            </div>
            {/*  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Brand Name</span>
              </label>
              <label className="input-group">
                <select
                  name="brandName"
                  className="select select-bordered w-full"
                >
                  <option>Select Brand Name</option>
                  <option>Walmart</option>
                  <option>AliBaba</option>
                  <option>eBay</option>
                  <option>Amazon</option>
                  <option>Target</option>
                  <option>Best Buy</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered md:w-full"
                  name="price"
                />
              </label>
            </div>
            {/*  */}
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text font-medium">
                  Short Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered md:w-full"
                  name="description"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered md:w-full"
                  name="rating"
                />
              </label>
            </div>
            {/*  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Product Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product image"
                  className="input input-bordered md:w-full"
                  name="image"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-6 ">
            <button className="btn bg-green-500 w-full hover:bg-green-600">
              Add
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
