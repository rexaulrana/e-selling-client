import error from "../../assets/images/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <img className="h-screen" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
