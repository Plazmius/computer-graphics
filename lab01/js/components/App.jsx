import React from "react";
import Canvas from "./Canvas";
import Point from "../models/Point";
import { Rule, LSystem } from "../services/LSystem";
import { Vector } from "../models/Vector";

// const drawingState = {
//     direction: new Vector()
// }

// const resolve = {
//     "X": () => ({}),
//     "Y": () => ({}),
//     "+": ()
// }

// const axiom = "X" + "+X".repeat(23);

// const ruleXstr = "[" 
//     + "F" + "+F".repeat(3) 
//     + "[---X-Y]" + "+".repeat(5)
//     + "F" + "+".repeat(8) + "F"
//     + "-F".repeat(3) 
//     + "]";

// const ruleYstr = "[" 
//     + "F" + "+F".repeat(3) 
//     + "[---Y]" + "+".repeat(5)
//     + "F" + "+".repeat(8) + "F"
//     + "-F".repeat(3) 
//     + "]";
// const ruleX = new Rule("X", ruleXstr);
// const ruleY = new Rule("Y", ruleYstr);
// const mosaicLSystem = new LSystem(axiom, [ruleX, ruleY]);


const mosaic = (ctx) => {
    const start = new Point(100, 100);
    //TODO
}

const App = () => (
    <Canvas height={500} width={500} drawingCallback={mosaic}/>
);

export default App;
