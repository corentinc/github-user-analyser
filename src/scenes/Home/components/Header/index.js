import React from 'react';

import SearchInput from 'components/FormFields/Submit';

export default class Header extends React.Component {
    render() {
        return (
                <header className="bg-dark">
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <span className="navbar-brand">GitHub User Analyser</span>
                        <div className="collapse navbar-collapse">
                            <SearchInput onSubmit={this.props.onSearch}/>
                        </div>
                    </nav>
                </header>
        )
    }
}