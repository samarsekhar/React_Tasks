import React, { useState } from "react";
import ETForm from "./ETForm";
import ETracker from "./ETracker";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const EApp = () => {
    const [track, settrack] = useState([]);
    return (
        <>
        <ETForm track={track} settrack={settrack} />
        <ETracker track={track} />
        </>
    )
};

export default EApp;