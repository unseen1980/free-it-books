import React, { Component } from 'react';
import { Link } from "react-router-dom";
import books from '../books.json';
import { flatList } from '../common/data/booksparser'

const flatbooks = flatList(books)
console.log('books', flatbooks)

class HeaderF extends Component {
    componentWillMount(props) {

        this.setState({searchOpen: false, searchString: ''})
    }

    searchClicked = () => {
        const {searchString, searchOpen} = this.state
        if (searchOpen) {
            this.setState({searchOpen: false, searchString: ''})
        } else {
            this.setState({searchOpen: true})
        }
    }

    searchUpdated = (event) => {
        const inputVal = event.currentTarget.value
        this.setState({searchString: inputVal})
    }

    render() {
        const {searchString, searchOpen} = this.state

        return (
            <div className="fd-ui__header">
                <nav className="fd-global-nav">
                    <div className="fd-global-nav__group fd-global-nav__group--left">
                        <div className="fd-global-nav__side-menu">
                            <button className=" fd-button--secondary fd-button--l sap-icon--menu2 fd-global-nav__btn"
                                aria-label="BUTTON_LABEL"></button>
                        </div>
                        <Link to='/'>
                            <div className="fd-global-nav__logo fd-has-margin-left-none"></div>
                        </Link>
                    </div>
                    <div className="fd-global-nav__group fd-global-nav__group--right">
                        <div className="fd-global-nav__actions">
                            <div className="fd-global-nav__search">
                                <button className=" fd-button--secondary fd-button--m sap-icon--search fd-global-nav__btn"
                                        aria-label="BUTTON_LABEL" aria-controls="RUmA0636" aria-haspopup="true" aria-expanded={searchOpen} onClick={this.searchClicked}></button>
                                <input type="text" className="fd-form__control" id="RUmA0636" aria-hidden={!searchOpen}
                                       placeholder="Search... " value={searchString} onChange={this.searchUpdated}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderF;
