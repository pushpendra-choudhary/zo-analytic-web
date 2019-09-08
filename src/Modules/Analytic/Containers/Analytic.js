import React, { Component } from 'react';
import styles from '../styles';
import PieChart from '../Components/PieChart';
import WithHeader from '../Components/WithHeader';
import BarChart from '../Components/BarChart';
import Separator from '../Components/Separator';
import ProgressChart from '../Components/ProgressChart';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionTypes from '../../../Actions/ActionTypes';
import Header from '../Components/Header';

class Analytic extends Component {
  componentDidMount() {
    const { getAnalyticData } = this.props;
    getAnalyticData();
  }

  onLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {

    const {isLoggedIn } = this.props;
    if(!isLoggedIn){
      setTimeout(() => {
        if(!isLoggedIn) window.location.href = '/';
      }, 300)
    }


    const { pieData = [], ratingData = [], onlineDeliveryData = {} } = this.props;

    const PieWithHeader = WithHeader(PieChart, {
      title: '1. Restaurant Price Range',
      description: 'Restaurant Price Range Presentaion using Pie Chart',
      data: pieData,
    });

    const BarWithHeader = WithHeader(BarChart, {
      title: '2. Restaurant Rating',
      description: 'Restaurant Rating Presentaion using Bar Chart',
      data: ratingData,
    });

    const ProgessWithHeader = WithHeader(ProgressChart, {
      title: '3. Restaurant: Online Delivery Availibilty',
      description:
        'Restaurant Online Delivery Availibilty Presentaion using Progress Line',
      data: onlineDeliveryData,
    });

    return (
      <>
        <Header onLogout={this.onLogout} />
        <div style={styles.container}>
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <div style={{ flex: 0.32 }}>
              <PieWithHeader />
            </div>
            <Separator />
            <div style={{ flex: 0.32 }}>
              <BarWithHeader />
            </div>
            <Separator />
            <div style={{ flex: 0.32 }}>
              <ProgessWithHeader />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Analytic.propTypes = {
  pieData: PropTypes.array,
  ratingData: PropTypes.array,
  onlineDeliveryData: PropTypes.object,
};

Analytic.defaultProps = {
  pieData: [],
  ratingData: [],
  onlineDeliveryData: {},
};

const mapStateToProps = state => {
  const { analytic, auth } = state;
  const { pieData = [], ratingData = [], onlineDeliveryData = {} } = analytic;
  const { isLoggedIn = false } = auth;
  return {
    isLoggedIn,
    pieData,
    ratingData,
    onlineDeliveryData,
  };
};

const mapDispatchToProps = dispatch => ({
  getAnalyticData: () => {
    dispatch({ type: ActionTypes.DATA_REQUEST_SUCCESS, payload: {} });
  },
  logout: () => {
    dispatch({ type: ActionTypes.RESET, payload: {} });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Analytic);
