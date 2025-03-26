import React from "react";

class MovieGenres extends React.Component {
  constructor(props) {
    super(props);
    this.selectedGenre = props.selectedGenre || ""; 
  }
  handleGenreSelect = (genre) => {
    this.selectedGenre = genre; 
    console.log(`Selected genre: ${genre}`);
    if (this.props.onSelect) {
      this.props.onSelect(genre); 
    }
    this.forceUpdate();
  };

  render() {
    const { genres } = this.props; 

    return (
        <div className="horizontal-flex">
        {genres.map((genre) => (
          <button
            key={genre}
            style={{
              padding: "10px 15px",
              backgroundColor: this.selectedGenre === genre ? "#007bff" : "#f0f0f0",
              color: this.selectedGenre === genre ? "#fff" : "#000",
              fontWeight: this.selectedGenre === genre ? "bold" : "normal",
            }}
            onClick={() => this.handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  };
}

export default MovieGenres;