import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Submit from 'components/FormFields/Submit';
import UserSummaryWithData from "./components/UserSummary/UserSummaryWithData";
import DashboardWithData from "./components/Dashboard/DashboardWithData";
import { changeUser } from 'actions/userActions';
import "./style.css";

import { connect } from "react-redux";

class BodyContainer extends React.Component {

    constructor(props){
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(username) {
        this.props.dispatch(changeUser(username));
    }

    render() {
        return(
            <Grid fluid={true}>
                <Row>
                    <Col xs={12} sm={4} md={2} className="pt-4 bg-light sidebar">
                        <Submit onSubmit={this.onSearch}/>
                        <hr />
                        <UserSummaryWithData username={this.props.username}/>
                    </Col>
                    <Col xs={12} sm={8} md={10} className="pt-3">
                        <DashboardWithData  username={this.props.username}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default connect((store) => {
        return {
            username: store.user.username
        }
    }
)(BodyContainer);