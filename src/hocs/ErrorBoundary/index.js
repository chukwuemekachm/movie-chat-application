import React, { Component } from 'react';

import FallBackUI from '../../components/FallBackUI';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (!hasError) return children;
    return (<FallBackUI />);
  }
}
