import React, { Component } from 'react';
import { Link } from "react-router-dom";
import books from '../books.json';
import { flatList } from '../common/data/booksparser'
import './header.css'

const flatbooks = flatList(books)
const bookDisplayLimit = 10;

class HeaderF extends Component {
    componentWillMount(props) {

        this.setState({searchOpen: false, searchString: '', results: []})
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
        let books = this.filterBooks(inputVal)
        const limit = books.length > bookDisplayLimit;
        if (limit) {
            books = books.filter((item,idx) => idx <= bookDisplayLimit)
        }

        this.setState({searchString: inputVal, results: books, resultLimit:limit})
    }

    filterBooks (str) {
        const lowStr = str.toLowerCase()
        if(str == '') {
            return []
        }
        return flatbooks.filter(book => {
            return book.subject.toLowerCase().indexOf(lowStr) !== -1 ||
                   book.title.toLowerCase().indexOf(lowStr) !== -1
        })
    }

    render() {
        const {searchString, searchOpen, results, resultLimit} = this.state

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
                        {results.length !== 0 && (
                            <div className="search-results">
                                {results.map((item,idx) => (
                                    <div className="result" key={idx+item.title+item.subject}>
                                        <a href={item.url} target="_blank">
                                            {item.title} ({item.subject})
                                        </a>
                                    </div>
                                ))}
                                {resultLimit && (
                                    <div>To many results</div>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderF;
