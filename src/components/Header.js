import React, {useState} from "react";

export default function Header(props) {
    // const [isToggled, setIsToggled] = useState(true); //Not in use

    return(
        <div className="modal__header header__main">
            <h1>CAYNHA-LAVUON</h1>
            {/* {!isToggled && <button>Logout</button>} */}
        </div>
    )
}