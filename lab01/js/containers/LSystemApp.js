import LSystemCanvas from "../components/LSystemCanvas";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        lsystem: state.lsystem.lsystem,
        iterations: state.lsystem.iterations,
        angle: state.lsystem.angle
    }
}

const LSystemApp = connect(mapStateToProps)(LSystemCanvas);

export default LSystemApp;