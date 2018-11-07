import React, { Component } from 'react';
import Styles from './styles.m.css';
import { object } from 'prop-types';

export default class Catcher extends Component {

    static propTypes = {
        children: object.isRequired,
    }

    state = {
        error: false,
    }

    componentDidCatch (error, stack) {
        this.setState({
            error: true,
        });
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        return (
            error ?
                <section className = { Styles.catcher }>
                    <span> If you see that  error  </span>
                    <p>
                    , something wrong. keep calm!!
                    </p>
                </section>
                : children
        );
    }

}
