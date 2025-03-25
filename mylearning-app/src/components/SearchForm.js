import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.input = null;
    }

    handleSearch = () => {
        const inputValue = this.input.value;
        if (this.props.onSearch) {
            this.props.onSearch(inputValue);
        }
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    };
    setInput = (element) => {
        this.input = element;
    };
    render() {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <input
              ref={this.setInput}
              type="text"
              defaultValue={this.props.initialQuery || ""}
              onChange={this.handleKeyPress}
              style={{ padding: "5px", fontSize: "16px", marginBottom: "10px" }}
            />
            <button
              onClick={this.handleSearch}
              style={{ padding: "5px 10px", fontSize: "16px" }}
            >
              Search
            </button>
          </div>
        );
      }
}

export default SearchBox