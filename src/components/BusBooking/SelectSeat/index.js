import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { Button, Row, Col } from 'react-bootstrap';
import Loader from '../../common/Loader';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.scss';
import LowerSeat from '../LowerSeat';
import UpperSeat from '../UpperSeat';
import SymbolSeat from '../SymbolSeat';
import { showToastrOnError } from '../../../utils/common';
class SelectSeat extends Component {
  state = {
    seatNumber: '',
    fare: 0,
    total: '',
    selectedBoardingPoint: null,
    selectedDroppingPoint: null,
    selectedSeat: [],
    selectedBoardingPointError: false,
    selectedDroppingPointError: false,
    selectedSeatError: false
  };
  handleSeatClick = data => {
    const selectedSeat = [...this.state.selectedSeat];
    let fare = this.state.fare;
    const index = selectedSeat.indexOf(data.seatNumber);
    if (index > -1) {
      selectedSeat.splice(index, 1);
      fare = fare - data.fare;
    } else {
      selectedSeat.push(data.seatNumber);
      fare = fare + data.fare;
    }
    if (selectedSeat.length > 5) {
      showToastrOnError('Max 5 seat');
    } else {
      this.setState({
        seatNumber: data.seatName,
        fare,
        total: fare,
        selectedSeat
      });
    }
  };
  handleContinue = e => {
    e.preventDefault();
    const {
      selectedBoardingPoint,
      selectedDroppingPoint,
      selectedSeat,
      total
    } = this.state;
    if (!selectedBoardingPoint) {
      this.setState({ selectedBoardingPointError: true });
    }
    if (!selectedDroppingPoint) {
      this.setState({ selectedDroppingPointError: true });
    } else if (selectedSeat.length == 0) {
      this.setState({ selectedSeatError: true });
    }
    if (
      selectedBoardingPoint &&
      selectedDroppingPoint &&
      selectedSeat.length != 0
    ) {
      const login = JSON.parse(localStorage.getItem('loginData')) || {};
      this.props.history.push({
        pathname: login.userId ? '/passenger' : '/login',
        state: {
          selectedBoardingPoint,
          selectedDroppingPoint,
          selectedSeat,
          total,
          busDetails: this.props.busDetails
        }
      });
    }
  };
  handleBoarding = selectedBoardingPoint => {
    this.setState({ selectedBoardingPoint });
    this.setState({ selectedBoardingPointError: false });
  };
  handleDropping = selectedDroppingPoint => {
    this.setState({ selectedDroppingPoint });
    this.setState({ selectedDroppingPointError: false });
  };
  render() {
    const { seatDetails, boardingPoints, droppingPoints } = this.props;
    const boardingOptions =
      boardingPoints &&
      boardingPoints.map(item => ({
        label: item.locationName,
        value: item.locationName
      }));
    const droppingOptions =
      droppingPoints &&
      droppingPoints.map(item => ({
        label: item.locationName,
        value: item.locationName
      }));
    const {
      selectedDroppingPoint,
      selectedBoardingPoint,
      selectedBoardingPointError,
      selectedDroppingPointError,
      selectedSeat,
      selectedSeatError
    } = this.state;
    const upperBerth = seatDetails.filter(seatDetail => {
      return !seatDetail.isLowerBerth;
    });
    const lowerBerth = seatDetails.filter(seatDetail => {
      return seatDetail.isLowerBerth;
    });
    return (
      <div className="bus-collapse">
        <Row>
          <Col md={7} xs={12}>
            {seatDetails.length ? (
              <div>
                {lowerBerth.length ? (
                  <LowerSeat
                    handleSeatClick={this.handleSeatClick}
                    lowerBerth={lowerBerth}
                    selectedSeat={this.state.selectedSeat}
                  />
                ) : (
                  <div />
                )}
                {upperBerth.length ? (
                  <UpperSeat
                    selectedSeat={this.state.selectedSeat}
                    handleSeatClick={this.handleSeatClick}
                    upperBerth={upperBerth}
                  />
                ) : (
                  <div />
                )}
                <Col md={12} lg={12} xs={12} sm={12} className="seat-sign">
                  <SymbolSeat
                    seatType="occupied"
                    handleSeatClick={() => false}
                  />
                  <span style={{ marginRight: 5 }}>Occupied</span>
                  <SymbolSeat handleSeatClick={() => false} />
                  <span style={{ marginRight: 5 }}>Available</span>
                  <SymbolSeat
                    seatType="selected"
                    handleSeatClick={() => false}
                  />
                  <span>Selected</span>
                  <SymbolSeat
                    seatType="reserved-by-lady"
                    handleSeatClick={() => false}
                  />
                  <span style={{ marginRight: 5 }}>Booked By Ladies</span>
                  <SymbolSeat
                    seatType="reserved-for-lady"
                    handleSeatClick={() => false}
                  />
                  <span style={{ marginRight: 5 }}> Reserved for Ladies</span>
                </Col>
              </div>
            ) : (
              <div className="text-center">
                <Loader inline />
              </div>
            )}
          </Col>
          <Col md={5} lg={5} xs={12} sm={12}>
            <div className="aGYy">
              <div className="boarding-point">
                <Select
                  value={selectedBoardingPoint}
                  onChange={this.handleBoarding}
                  options={boardingOptions}
                  isSearchable={true}
                  placeholder="Select Boarding Point"
                />
              </div>
              <div className="dropping-point">
                <Select
                  value={selectedDroppingPoint}
                  onChange={this.handleDropping}
                  options={droppingOptions}
                  placeholder="Select Dropping point"
                  isSearchable={true}
                />
              </div>
              {selectedSeat.length ? (
                <>
                  <Row style={{ margin: '15px 0' }}>
                    <Col xs={4}>Seat(s) :</Col>
                    <Col
                      xs={8}
                      style={{
                        fontWeight: 600,
                        textAlign: 'right',
                        color: '#000'
                      }}
                    >
                      {selectedSeat &&
                        selectedSeat.map((selected, index) => {
                          const last = selectedSeat.length - 1 === index;
                          const separator = last ? '' : ', ';
                          return (
                            <Fragment
                              key={index}
                            >{`${selected} ${separator}`}</Fragment>
                          );
                        })}
                    </Col>
                  </Row>
                  <Row style={{ margin: '15px 0' }}>
                    <Col xs={4}>Fare :</Col>
                    <Col
                      xs={8}
                      style={{
                        fontWeight: 600,
                        textAlign: 'right',
                        color: '#000'
                      }}
                    >
                      {this.state.fare}
                    </Col>
                  </Row>
                  <Row style={{ margin: '15px 0' }}>
                    <Col xs={4}>Total :</Col>
                    <Col
                      xs={8}
                      style={{
                        fontWeight: 600,
                        textAlign: 'right',
                        color: '#000'
                      }}
                    >
                      {this.state.total}
                    </Col>
                  </Row>
                </>
              ) : (
                <div className="col-md-12" style={{ paddingLeft: '0px' }}>
                  <div
                    style={{
                      textAlign: 'center',
                      marginBottom: '10px',
                      paddingLeft: '0px'
                    }}
                  >
                    Please select seat(s), boarding & dropping points to
                    continue
                  </div>
                  {selectedSeatError && (
                    <span className="error-message">
                      Please select seat(s) to continue
                    </span>
                  )}
                </div>
              )}
              {(selectedBoardingPointError || selectedDroppingPointError) && (
                <span className="error-message">
                  Please select boarding and dropping point to continue
                </span>
              )}
              <Button
                block
                bsStyle="primary"
                onClick={this.handleContinue}
                type="submit"
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(SelectSeat);
