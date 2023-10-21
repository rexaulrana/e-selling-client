import swal from "sweetalert";

const MyCartItem = ({ cart, setRemaining, remaining }) => {
  //   console.log(cart);
  const { _id, productName, image } = cart;
  const handleDelete = (_id) => {
    // console.log("deleted", _id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://e-selling-f3zbghz52-rexaulrana.vercel.app/mycart/${_id}`,
          {
            method: "Delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);

            if (data.deletedCount > 0) {
              swal("Poof! Your cart item has been deleted!", {
                icon: "success",
              });
            }
            const existsItem = remaining.filter((item) => item._id !== _id);
            setRemaining(existsItem);
          });
      } else {
        swal("Your cart item is safe!");
      }
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
