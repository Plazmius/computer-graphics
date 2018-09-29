import React from "react";
import Canvas from "./Canvas";
import Point from "../models/Point";
import { Rule, LSystem } from "../services/LSystem";
import { Vector } from "../models/Vector";

const canvasHeight = 500;
const canvasWidth = 500;

const initDrawingState = {
    direction: new Vector(new Point(0, 0), new Point(10, 10)),
    currentPosition: new Point(canvasHeight / 2, canvasWidth / 2),
}
const stateStack = [];
const resolve = {
    "X": (state) => state,
    "Y": (state) => state,
    "[": (state) => {
        stateStack.push(state);
        return state;
    },
    "]": () => {
        return stateStack.pop();
    },
    "+": (state) => {
        return Object.assign({}, state, {
            direction: Vector.turn(state.direction, state.angle)
        });
    },
    "-": (state) => {
        return Object.assign({}, state, {
            direction: Vector.turn(state.direction, -state.angle)
        });
    },
    "F": (state, ctx) => {
        const nextPosition = Point.move(state.currentPosition, state.direction);
        ctx.moveTo(...nextPosition.coords);
        ctx.stroke();
        ctx.lineTo(...state.currentPosition.coords);

        return Object.assign({}, state, {
            currentPosition: nextPosition
        });
    }
}



const getDrawSystem = (lsystem, iterations, angle) => (ctx) => {
    const system = lsystem.buildIter(iterations);
    let state = initDrawingState;
    state.angle = angle;
    ctx.beginPath();
    ctx.moveTo(...initDrawingState.currentPosition.coords);

    for (let i = 0; i < system.length; i++) {
        state = resolve[system[i]](state, ctx);
    }
}

const LSystemCanvas = ({ lsystem, iterations, angle }) => {
    return (
        <Canvas className="lsystem-canvas" height={canvasHeight} width={canvasWidth} drawingCallback={getDrawSystem(lsystem, iterations, angle)} />
    );
}

export default LSystemCanvas;
