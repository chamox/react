export const searchMovies = async (search) => {
  if (!search) {
    return null
  }
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=ef3e0ef`
    )
    const json = await response.json()
    const movies = json.Search
    const mappedMovies = movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }
    })
    return mappedMovies
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
