export const drawSystem = (axiom, ruleXstr, ruleYstr, iterations, angle) => ({
    type: "DRAW_LSYSTEM",
    data: {
        axiom,
        ruleXstr,
        ruleYstr, 
        iterations,
        angle
    }
})