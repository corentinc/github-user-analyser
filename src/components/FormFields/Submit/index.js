import React from 'react';

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
        let query = this.refs.username.value;
        this.props.onSubmit(query);
        this.refs.username.value = "";
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} className="form-inline mt-2 mt-md-0">
                <input ref="username" className="form-control mr-sm-2" placeholder={this.props.placeholder} aria-label={this.props.placeholder} type="text" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}
