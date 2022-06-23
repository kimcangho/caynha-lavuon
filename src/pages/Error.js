import {useNavigate} from "react-router-dom";

export default function Error() {

    const navigate = useNavigate();

    return(
        <div className="modal__content">
            <h2>Oopsies! Looks like y'all got a little lost!</h2>
            <button
            onClick={() => {
                navigate("/");  //Navigates back to login page
            }}
            >Take me home!</button>
        </div>
    )
}