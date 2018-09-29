import React from "react";

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateCanvas2d(this.props.drawingCallback);
    }

    componentDidUpdate() {
        this.updateCanvas2d(this.props.drawingCallback);
    }
    updateCanvas2d(drawingCallback) {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        drawingCallback(ctx);
    }
    render() {
        return (
            <canvas className={this.props.className} ref="canvas" width={this.props.width} height={this.props.height} />
        );
    }
}

export default Canvas;