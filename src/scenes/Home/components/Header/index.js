import React from 'react';

import SearchInput from './../../../../components/FormFields/Submit';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 offset-4">
                                <SearchInput onSubmit={this.props.onSearch}/>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}