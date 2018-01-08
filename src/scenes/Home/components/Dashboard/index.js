import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import OwnRepositories from "./components/OwnRepositories";
import UserList from "./components/UserList";
import './style.css';

export default class Dashboard extends React.Component {
    render(){
        var sortByMostFollowed = function(userList) {
            userList.sort((a, b) => {
                return b.followers.totalCount - a.followers.totalCount;
            });
        }

        const user = this.props.user;
        let followers = user.followers.nodes.slice(0);
        sortByMostFollowed(followers);

        let following = user.following.nodes.slice(0);
        sortByMostFollowed(following);

        return(
            <Grid>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <OwnRepositories ownRepositoriesCount={user.ownRepositories.totalCount}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <UserList title='Most popular followers' users={followers}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <UserList title='Most popular followed' users={following}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
