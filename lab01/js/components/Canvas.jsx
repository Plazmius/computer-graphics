import React from "react";

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateCanvas2d(this.props.drawingCallback);
    }
    updateCanvas2d(drawingCallback) {
        const ctx = this.refs.canvas.getContext('2d');
        drawingCallback(ctx);
    }
    render() {
        return (
            <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
        );
    }
}

export default Canvas;