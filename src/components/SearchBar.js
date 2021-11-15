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
                                <span>
                                    <p>
                                        1) Enter a search query like 'cat' or
                                        'dog'
                                    </p>
                                    <p>
                                        2) Press Enter or Click the search
                                        button and wait for the images to load
                                    </p>
                                    <p>
                                        3) Click any image. The image
                                        description will show up under "Image
                                        Selected"{' '}
                                    </p>
                                    <p>
                                        4) After selecting, click "Submit Post"
                                    </p>
                                </span>
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
