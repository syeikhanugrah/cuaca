import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';
import Page from '../components/page';
import WeatherInfo from '../components/weatherInfo';
import { getCurrentWeather } from '../redux/actions/current';

class Index extends Component {
  state = {
    errorMessage: null,
  };

  clearErrorMessage = () => this.setState({ errorMessage: null });

  handleSubmit = async (e, values) => {
    e.preventDefault();

    const { getCurrentWeather } = this.props;

    await Promise.all([getCurrentWeather(values)]).catch((e) => {
      this.setState({ errorMessage: e.message });
    });
  };

  componentWillReceiveProps() {
    this.clearErrorMessage();
  }

  render () {
    const { data, isFetched, error } = this.props.current;
    const { errorMessage } = this.state;

    return (
      <>
        <h1 className="title is-1">Cuaca sekarang</h1>
        <Form handleSubmit={this.handleSubmit} />

        {errorMessage &&
          <div className="box">
            <p className="has-text-centered"><strong>{errorMessage}</strong></p>
          </div>
        }

        {isFetched && !error && <WeatherInfo data={data} />}
      </>
    );
  }
}

export default Page(connect(state => state, { getCurrentWeather })(Index));
