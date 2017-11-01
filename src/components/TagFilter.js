import React from 'react';
import Select from 'react-select';

import './TagFilter.css';

class TagFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [],
            rtl: false,
            tags: this.props.tags,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        console.log(value);
        this.setState({ value });

        this.props.onChange(value);
    }

    handleClick() {
        this.props.onClick(this.state.value);
    }

    render() {
        const { disabled, stayOpen, value, tags } = this.state;

        return (
            <div>
                <label>Filter Tags</label>
                <Select 
                closeOnSelect={!stayOpen}
                disabled={disabled}
                multi 
                simpleValue
                placeholder="Type in your wanted tag(s)" 
                value={value} 
                options={tags} 
                onChange={this.handleChange}
                removeSelected={this.state.removeSelected}
                rtl={this.state.rtl} />
            </div>
        );
    }    
}
export default TagFilter;