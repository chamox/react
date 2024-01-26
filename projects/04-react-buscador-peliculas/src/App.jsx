import './App.css'
import responseMovies from './mocks/withResults.json'
import withoutResults from './mocks/withoutResults.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies && movies.length > 0
  const renderMovies = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
            />
          </li>
        ))}
      </ul>
    )
  }

  const renderMoviesWithoutResults = () => {
    return <p>Sorry, no movies found</p>
  }

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input placeholder="Kill Bill, The Hateful Eight, Fight Club... " />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>{hasMovies ? renderMovies() : renderMoviesWithoutResults()}</main>
    </div>
  )
}

export default App
