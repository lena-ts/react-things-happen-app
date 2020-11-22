import React from "react";

const AddThingButton = (handleClick) => {
    const handleButtonClick = () => {
        handleClick.handleClick()
    }
    return(
        <div className="addthing-button" onClick={handleButtonClick}>

        </div>
    )
}

export default AddThingButton;