const MyCartItem = ({ cart }) => {
  //   console.log(cart);
  const { _id, productName, image } = cart;
  const handleDelete = (_id) => {
    console.log("deleted", _id);
    fetch(`http://localhost:5000/mycart/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 h-[450px] rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{productName}</h1>

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary mt-5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartItem;
