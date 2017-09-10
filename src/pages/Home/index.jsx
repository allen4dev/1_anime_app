import React, {Component}  from 'react';

import MovieSection from './../../features/movies/components/MovieSection';

class Home extends Component {
  constructor(props) {
    super(props);

    this.baseURL = 'https://kitsu.io/api/edge';

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`${this.baseURL}/anime?%3Fpage%5Blimit%5D=1`).then(response => response.json())
    .then(movies => this.setState({ movies: movies.data }));
  }

  render() {
    console.log('MOVIES', this.state.movies)
    return (
      <div className="Home container">
        <MovieSection movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
