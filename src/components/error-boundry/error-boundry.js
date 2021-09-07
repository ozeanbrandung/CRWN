import React, { Component } from 'react';
//CUSTOM COMPONENTS
import ErrorIndicator from '../errror-indicator/error-indicator';

class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch () {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        
        return this.props.children;
    }
}

export default ErrorBoundry;