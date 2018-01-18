import React from 'react';

export default class OwnRepositories extends React.Component {
    render(){
        return (
            <div className="statItem bg-light">
                <span className="value">{this.props.ownRepositoriesCount}</span>
                <span className="desc">repositories created</span>
            </div>
    );
    }
}