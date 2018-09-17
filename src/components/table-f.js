import React, { Component } from 'react';
import books from '../books.json';

class TableF extends Component {
    constructor() {
        super();
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    componentWillMount() {
        this.setState({
            data: books,
            dropState: []
        });
    }
    nameHelper(str) {
        return str.substring(
            str.lastIndexOf('[') + 1,
            str.lastIndexOf(']')
        );
    }

    urlHelper(text) {
        const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        const c = text.match(urlRegex, (url) => url);
        return c;
    }
    toggleDropdown(index,e) {
        let dropState = this.state.dropState;
        dropState[index] = !dropState[index]
        this.setState({ dropState: dropState });
    }
    render() {
        return (
            <div className="fd-ui__app">
                <div className="fd-app">
                    <main className="fd-app__main">
                        <section className="fd-app_main">
                            <table className="fd-table">
                                <thead>
                                    <tr>
                                        <th>Column Header</th>
                                        <th>Action</th>
                                        <th>Share</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data[this.props.location.pathname.substring(1)].map((b, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td><a className="fd-has-font-weight-semi">{this.nameHelper(b)}</a></td>
                                                    <td>
                                                        <a href={this.urlHelper(b)} target="_blank">
                                                            <button className="fd-button--action-bar fd-button--xs">Read</button>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="fd-popover">
                                                            <div className="fd-popover__control">
                                                                <button onClick={this.toggleDropdown.bind(this, idx)} className="fd-button--secondary sap-icon--vertical-grip" aria-controls="pQqQR213" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                                                            </div>
                                                            <div className="fd-popover__body" aria-hidden={!this.state.dropState[idx]} id="pQqQR213">
                                                                <nav className="fd-menu">
                                                                    <ul className="fd-menu__list">
                                                                        <li><a className="fd-menu__item">Twitter</a></li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default TableF;
