import React, { Component } from 'react';

class NumberDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      numbers: [1, 2, 3, 4, 5],
    };
  }

  handleNextPage = () => {
    const { currentPage } = this.state;
    if (currentPage < 2) {
      this.setState({
        currentPage: currentPage + 1,
        numbers: [6, 7, 8, 9, 10],
      });
    }
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
        numbers: [1, 2, 3, 4, 5],
      });
    }
  };

  render() {
    const { numbers, currentPage } = this.state;
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === 2;

    return (
      <div>
        <div id="number-display">
          {numbers.map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
        <button
          id="back-button"
          onClick={this.handlePrevPage}
          disabled={isFirstPage}
        >
          Prev Page
        </button>
        <button
          id="next-button"
          onClick={this.handleNextPage}
          disabled={isLastPage}
        >
          Next Page
        </button>
      </div>
    );
  }
}

export default NumberDisplay;
