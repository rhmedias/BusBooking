import React, { Component } from 'react';
import CarouselPage from '../CarouselPage';
import { Link } from "react-router-dom";
import {
    Grid,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import './index.scss';

export default class RootPage extends Component {
  render() {
    return (
      <>
        <CarouselPage />
        <Grid>
          <Row className="topbusroute">
            <Col xs={12}>
              <h3>Top Bus Routes</h3>
            </Col>
            <Col xs={12}>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Price</th>
                    <th>Total Operator</th>
                    <th>Bus</th>
                    <th>Durection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Delhi to Gaya</td>
                    <td>900</td>
                    <td>30</td>
                    <td>30</td>
                    <td>1300 KM</td>
                  </tr>
                  <tr>
                    <td>Delhi to Patna</td>
                    <td>900</td>
                    <td>30</td>
                    <td>30</td>
                    <td>1400 KM</td>
                  </tr>
                  <tr>
                    <td>Delhi to Allahabad</td>
                    <td>200</td>
                    <td>50</td>
                    <td>95</td>
                    <td>900 KM</td>
                  </tr>
                  <tr>
                    <td>Indore To Bhopal</td>
                    <td>200</td>
                    <td>50</td>
                    <td>9</td>
                    <td>195 KM</td>
                  </tr>
                  <tr>
                    <td>Pune To Indore</td>
                    <td>600</td>
                    <td>12</td>
                    <td>5</td>
                    <td>593 KM</td>
                  </tr>
                  <tr>
                    <td>Bangalore to Hyderabad</td>
                    <td>500</td>
                    <td>2</td>
                    <td>4</td>
                    <td>900</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Row
              className="text-center"
              style={{ marginTop: '75px', marginBottom: '15px' }}
            >
              <Col md={8} className="col-md-offset-2">
                <h2>Our Bus Services</h2>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={3} sm={3}>
                <div className="panel panel-primary" style={{ height: 302 }}>
                  <div className="panel-heading">
                    <h4>VOLVO</h4>
                  </div>
                  <div className="panel-body" style={{ height: 200 }}>
                    <img
                      src="./assets/img/bus/busvolvo1.jpg"
                      className="img-responsive grayscale"
                      alt="busvolvo"
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="panel-footer">
                    <Link to="/bus-booking">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right" />
                      </span>
                    </Link>
                    <div className="clearfix" />
                  </div>
                </div>
              </Col>
              <Col md={3} sm={3}>
                <div className="panel panel-primary" style={{ height: 302 }}>
                  <div className="panel-heading">
                    <h4>AC</h4>
                  </div>
                  <div className="panel-body" style={{ height: 200 }}>
                    <img
                      src="./assets/img/bus/busAc2.jpg"
                      className="img-responsive grayscale"
                      alt="busAc"
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="panel-footer">
                    <Link to="/bus-booking">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right" />
                      </span>
                    </Link>
                    <div className="clearfix" />
                  </div>
                </div>
              </Col>
              <Col md={3} sm={3}>
                <div className="panel panel-primary" style={{ height: 302 }}>
                  <div className="panel-heading">
                    <h4>Non A/C</h4>
                  </div>
                  <div className="panel-body" style={{ height: 200 }}>
                    <img
                      src="./assets/img/bus/busDelux1.jpg"
                      className="img-responsive grayscale"
                      alt="busDelux"
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="panel-footer">
                    <Link to="/bus-booking">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right" />
                      </span>
                    </Link>
                    <div className="clearfix" />
                  </div>
                </div>
              </Col>
              <Col md={3} sm={3}>
                <div className="panel panel-primary" style={{ height: 302 }}>
                  <div className="panel-heading">
                    <h4>SEMIDELUX</h4>
                  </div>
                  <div className="panel-body" style={{ height: 200 }}>
                    <img
                      src="./assets/img/bus/busO1.jpg"
                      className="img-responsive grayscale"
                      alt="bus"
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="panel-footer">
                    <Link to="/bus-booking">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right" />
                      </span>
                    </Link>
                    <div className="clearfix" />
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Grid>
      </>
    );
  }
}
