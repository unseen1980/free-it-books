import React, { Component } from 'react';
import './main-f.css';
import books from '../books.json'
import PanelF from './panel-f';

class MainF extends Component {
    componentWillMount() {
        this.setState({ data: books });
    }

    render() {
        return (
            <div className="fd-ui__app">
                <div className="fd-app">
                    <main className="fd-app__main">
                        <section className="fd-section">
                            <div className="fd-panel-grid fd-panel-grid--4col">
                                {
                                    Object.keys(this.state.data).map((x) => {
                                        return (
                                            <PanelF key={x} category={x} books={this.state.data[x]}/>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default MainF;
