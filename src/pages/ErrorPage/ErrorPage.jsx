import error from "../../assets/images/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <img className="h-screen w-full" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
