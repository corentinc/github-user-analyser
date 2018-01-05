import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class Input extends React.Component {

    static defaultProps = {
        placeholder: "Type username..."
    };

    constructor(props){
        super(props);

        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let query = this.input.value;
        this.props.onSubmit(query);
        this.input.value = "";
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <FormControl
                            componentClass="input"
                            inputRef={ref => { this.input = ref; }}
                            type="text"
                            placeholder={this.props.placeholder} />
                    </FormGroup>
                </form>
            </div>
        );
    }
}
