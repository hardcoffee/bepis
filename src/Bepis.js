import React from 'react';

import i18n from './i18n/i18n';
import Routes from './routes';

i18n.start();

export default class Bepis extends React.Component {
  render() {
    return <Routes />;
  }
}
