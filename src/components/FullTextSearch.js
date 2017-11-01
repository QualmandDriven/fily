import React from 'react';

class FullTextSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: this.props.searchText,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        this.setState({
            inputText: evt.target.value
        });

        this.props.onChange(evt.target.value);
    }

    handleClick() {
        this.props.onClick(this.state.inputText);
    }

    render() {
        return (
            <div>
                <label>Full text search</label>
                <input type="text" value={this.state.inputText} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search</button>
            </div>
        );
    }
}
export default FullTextSearch;