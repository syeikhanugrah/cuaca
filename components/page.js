import React from 'react';
import { Provider } from 'react-redux';
import { store }  from '../redux';

import '../styles/styles.scss';

const page = (Page) => {
  return (
    class PageWrapper extends React.Component {
      render () {
        return (
          <Provider store={store}>
            <section id="main" className="section">
              <div className="container">
                <Page />
              </div>
            </section>
          </Provider>
        )
      }
    }
  );
};

export default page;
