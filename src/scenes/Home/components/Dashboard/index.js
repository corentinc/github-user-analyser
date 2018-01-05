import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import OwnRepositories from "./components/OwnRepositories/index";
import './style.css';

export default class Dashboard extends React.Component {
  render(){
    return(
        <Grid>
          <Row>
              <Col xs={12} sm={6} md={4}>
                  <OwnRepositories/>
              </Col>
          </Row>
        </Grid>
    );
  }
}
