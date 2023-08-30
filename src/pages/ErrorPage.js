import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <h1>Error Page</h1>
            <div>Error Status: {error.statusText}</div>
            <div>Error Message: {error.message}</div>
        </>
    );
};

export default ErrorPage;
