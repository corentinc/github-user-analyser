import React from 'react';

export default class Input extends React.Component {
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
            <form onSubmit={this.onSubmit}>
              <div class="input-group">
                <input type="text" ref="username" class="form-control" placeholder="Search for..." aria-label="Search for..." />
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="submit">Go!</button>
                </span>
              </div>
            </form>
        );
    }
}
