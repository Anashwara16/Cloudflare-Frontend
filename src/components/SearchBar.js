import React from 'react';
import './SearchBar.css';
import Button from './Button';
import ReactTooltip from 'react-tooltip';

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
                            <label>Image Search</label>
                            <p
                                ref={(ref) => (this.fooRef = ref)}
                                data-tip="tooltip"
                            ></p>
                            <button
                                onClick={() => {
                                    ReactTooltip.hide(this.fooRef);
                                }}
                            ></button>
                            <ReactTooltip />
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
