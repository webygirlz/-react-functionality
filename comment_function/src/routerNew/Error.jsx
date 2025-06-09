import { useRouteError } from "react-router-dom";


function Error() {
    const error = useRouteError();
  return (
    <div>
    <h1>Error occurred</h1>   
    <p>{error.message}</p>
    </div>
  )
}

export default Error;
