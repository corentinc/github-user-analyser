import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Submit from 'components/FormFields/Submit';
import UserSummaryWithData from "./components/UserSummary/UserSummaryWithData";
import DashboardWithData from "./components/Dashboard/DashboardWithData";

export default class BodyContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            query: "corentinc"
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(username) {
        this.setState({query: username});
    }

    render() {
        return(
            <Grid fluid={true}>
                <Row>
                    <Col xs={12} sm={4} md={2} className="pt-4 bg-light">
                        <Submit onSubmit={this.onSearch}/>
                        <hr />
                        <UserSummaryWithData username={this.state.query}/>
                    </Col>
                    <Col xs={12} sm={8} md={10} className="pt-1">
                        <DashboardWithData  username={this.state.query}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}