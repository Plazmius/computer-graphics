import { Rule, LSystem } from "../services/LSystem";

const ruleXstr = "["
    + "F" + "+F".repeat(3)
    + "[---X-Y]" + "+".repeat(5)
    + "F" + "+".repeat(8) + "F"
    + "-F".repeat(3)
    + "]";
const ruleYstr = "["
    + "F" + "+F".repeat(3)
    + "[---Y]" + "+".repeat(5)
    + "F" + "+".repeat(8) + "F"
    + "-F".repeat(3)
    + "]";
const axiom = "X" + "+X".repeat(23);

const ruleX = new Rule("X", ruleXstr);
const ruleY = new Rule("Y", ruleYstr);
const lsystem = new LSystem(axiom, [ruleX, ruleY]);

const initState = {
    angle: 24,
    iterations: 2,
    lsystem
}

const lsystemReducer = (state = initState, action) => {
    switch (action.type) {
        case "DRAW_LSYSTEM":
            const ruleX = new Rule("X", action.data.ruleXstr);
            const ruleY = new Rule("Y", action.data.ruleYstr);
            const lsystem = new LSystem(action.data.axiom, [ruleX, ruleY]);
            return Object.assign({}, state, {
                lsystem: lsystem,
                iterations: action.data.iterations,
                angle: action.data.angle
            })
        default:
            return state;
    }
}

export default lsystemReducer;