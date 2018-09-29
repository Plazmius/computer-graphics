import React from "react";
import { drawSystem } from "../actions/lsystem";
import LSystemApp from "../containers/LSystemApp";
import LSystemDrawForm from "../containers/LSystemDrawForm";

const App = () => {
    return (
        <div className="container">
            <LSystemDrawForm />
            <LSystemApp />
        </div>)
}

export default App;