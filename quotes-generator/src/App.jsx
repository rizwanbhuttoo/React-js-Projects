import { useState } from 'react'

import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getQuote = async () => {
    setIsLoading(true)
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content)
    setAuthor(data.author)
    setIsLoading(false)
  }



  return (
    <>
     <h1>Quotes Generator</h1>

      <div className="quote-box">

        <div className="quote-text">
          <i className="fas fa-quote-left"></i>
          <span id="quote">{quote}</span>
        </div>
        <div className="quote-author">
          <span id="author">{author}</span>
        </div>

        <div className="buttons">
          <a href="twitter.com/intent/tweet" className="button" id="tweet-quote">
            <i className="fab fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={getQuote}>
            New Quote
          </button>
        </div>
      </div>
      
    </>
  )
}

export default App
