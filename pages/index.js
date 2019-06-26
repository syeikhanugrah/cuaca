import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastList from '../components/forecastList';
import Form from '../components/form';
import Page from '../components/page';
import WeatherInfo from '../components/weatherInfo';
import TabToggler from '../components/tabToggler';
import { getCurrentWeather } from '../redux/actions/current';
import { getHourlyForecast } from '../redux/actions/forecast';

class Index extends Component {
  state = {
    errorMessage: null,
    tab: 'current'
  };

  clearErrorMessage = () => this.setState({ errorMessage: null });

  handleSubmit = async (e, values) => {
    e.preventDefault();

    const { getCurrentWeather, getHourlyForecast } = this.props;

    await Promise.all([getCurrentWeather(values), getHourlyForecast(values)]).catch((e) => {
      this.setState({ errorMessage: e.message });
    });
  };

  handleToggleTab = (tab) => {
    this.setState({ tab: tab });
  };

  componentWillReceiveProps() {
    this.clearErrorMessage();
  }

  render () {
    const {
      data: currentData,
      isFetched: currentIsFetched,
      error: currentError
    } = this.props.current;

    const {
      data: forecastData,
      isFetched: forecastIsFetched,
      error: forecastError
    } = this.props.forecast;

    const { errorMessage, tab } = this.state;

    return (
      <>
        <h1 className="title is-1">
          {tab === 'current' ? 'Cuaca sekarang' : 'Ramalan cuaca per jam'}
        </h1>

        <Form handleSubmit={this.handleSubmit} />

        <TabToggler
          handleToggleTab={this.handleToggleTab}
          currentTab={tab} />

        {errorMessage &&
          <div className="box">
            <p className="has-text-centered"><strong>{errorMessage}</strong></p>
          </div>
        }

        {tab === 'current'
          ? currentIsFetched && !currentError && <WeatherInfo data={currentData} />
          : forecastIsFetched && !forecastError && <ForecastList data={forecastData} />
        }
      </>
    );
  }
}

export default Page(connect(state => state, { getCurrentWeather, getHourlyForecast })(Index));
