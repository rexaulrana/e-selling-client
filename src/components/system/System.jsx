import {
  CiAlarmOn,
  CiBadgeDollar,
  CiDeliveryTruck,
  CiMoneyCheck1,
} from "react-icons/ci";

const System = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="md:flex justify-evenly items-center gap-5">
        <div className="text-center border-2 border-green-500 py-4 px-5">
          <h1 className="text-8xl w-20 mx-auto">
            <CiDeliveryTruck></CiDeliveryTruck>
          </h1>
          <h1 className="text-xl font-semibold">Fast & Free Delivery</h1>
          <p className="text-lg ">Free delivery on all orders</p>
        </div>
        <div className="text-center border-2 border-green-500 py-4 px-5 ">
          <h1 className="text-8xl w-20 mx-auto ">
            <CiMoneyCheck1></CiMoneyCheck1>
          </h1>
          <h1 className="text-xl font-semibold">Secure Payment</h1>
          <p className="text-lg ">You will payment us by ssl</p>
        </div>
        <div className="text-center border-2 border-green-500 py-4 px-5">
          <h1 className="text-8xl w-20 mx-auto ">
            <CiBadgeDollar></CiBadgeDollar>
          </h1>
          <h1 className="text-xl font-semibold">Money Back Guarantee</h1>
          <p className="text-lg ">We have return policy</p>
        </div>
        <div className="text-center border-2 border-green-500 py-4 px-5">
          <h1 className="text-8xl w-20 mx-auto ">
            <CiAlarmOn></CiAlarmOn>
          </h1>
          <h1 className="text-xl font-semibold">Online 24 hours Support</h1>
          <p className="text-lg ">Our Agent will support you</p>
        </div>
      </div>
    </div>
  );
};

export default System;
