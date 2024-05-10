import { useRouteError } from "react-router-dom";
import Navbar_black from "./Components/Shared/Navbar_black";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Navbar_black></Navbar_black>
            <div id="error-page" className="text-center mt-12">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}