import React from "react";
import TextField, { HelperText, Input } from '@material/react-text-field';
import Button from '@material/react-button';

const getTextField = (label, component) => (<div style={{ marginBottom: "10px", width: "100%" }}>
    <TextField
        label={label}
        outlined={true}
    >
        <Input
            value={component.state[label]}
            onChange={(e) => {
                e.persist();
                component.setState(prevState => {
                    prevState[label] = e.target.value;
                    return prevState;
                });
            }} />
    </TextField>
</div>);


class LSystemForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState(this.props.defaultValues)
    }

    render() {
        return (
            <form className="lsystem-form">
                {getTextField("axiom", this)}
                {getTextField("iterations", this)}
                {getTextField("ruleXstr", this)}
                {getTextField("ruleYstr", this)}
                {getTextField("angle", this)}

                <Button raised onClick={(e) => { e.preventDefault(); this.props.send(this.state) }}>Draw</Button>

            </form>);
    }
}


export default LSystemForm;