import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
      <form className="form">
        <input placeholder="Kill Bill, The Hateful Eight, Fight Club... "/>
      <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        Movies will be here
      </main>
    </div>
  )
}

export default App
