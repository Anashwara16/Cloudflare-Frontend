import React from 'react';
import './SearchBar.css';
import Button from './Button';
import ReactTooltip from 'react-tooltip';
import { FaQuestionCircle } from 'react-icons/fa';

class SearchBar extends React.Component {
    state = { val: '' };

    onInputChange = (event) => {
        this.setState({ val: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="form-control">
                    <div className="split-image-search">
                        <div className="split-image-search-one">
                            <div className="align-horizontal">
                                <label data-tip data-for="ImageTip">
                                    Image Search
                                </label>
                                <p> &nbsp;&nbsp;&nbsp;</p>
                                <FaQuestionCircle data-tip data-for="ImageTip">
                                    ?
                                </FaQuestionCircle>
                            </div>
                            <ReactTooltip
                                id="ImageTip"
                                place="top"
                                effect="solid"
                                multiline={true}
                                data-html={true}
                                insecure={true}
                            >
                                <p>
                                    <p>
                                        1) In the input textbox search for an
                                        image like 'cat' or 'dog'
                                    </p>
                                    <p>
                                        2) Click the search button to the right
                                        or press Enter
                                    </p>
                                    <p>3) Wait for the images to load </p>
                                    <p>4) Click the image you like </p>
                                    <p>
                                        5) Once you click an image, the image
                                        description will show up below the input
                                        text box{' '}
                                    </p>
                                    <p>
                                        6) Once you are done selecting, click
                                        "Submit Post"
                                    </p>
                                </p>
                            </ReactTooltip>
                            <input
                                className="inputStyle"
                                type="text"
                                placeholder="Search for an image like cat or dog"
                                value={this.state.val}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="split-image-search-first-split"></div>
                        <div className="split-image-search-two">
                            <Button
                                color={'blue'}
                                text={'Search'}
                                onClick={this.onFormSubmit}
                            />
                        </div>
                        <div className="split-image-search-second-split"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
