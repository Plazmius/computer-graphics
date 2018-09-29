import LSystemForm from "../components/LSystemForm";
import { drawSystem } from "../actions/lsystem";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    send: ({axiom, ruleXstr, ruleYstr, iterations, angle}) => dispatch(drawSystem(axiom, ruleXstr, ruleYstr, parseInt(iterations), parseFloat(angle)))
})

const mapStateToProps = state => ({
    defaultValues: {
        axiom: state.lsystem.lsystem.axiom,
        ruleXstr: state.lsystem.lsystem.rules[0].ruleString,
        ruleYstr: state.lsystem.lsystem.rules[1].ruleString,
        iterations: state.lsystem.iterations,
        angle: state.lsystem.angle
    }
})

const LSystemDrawForm = connect(mapStateToProps, mapDispatchToProps)(LSystemForm);

export default LSystemDrawForm;