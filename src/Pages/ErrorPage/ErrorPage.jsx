import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='flex justify-center items-center h-screen text-center'>
      <div id='error-page' className='font-bold text-lg'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>404 {error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
