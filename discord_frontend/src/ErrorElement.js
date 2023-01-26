import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>{error.status}</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorElement;
