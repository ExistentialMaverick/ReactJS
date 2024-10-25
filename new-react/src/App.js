import logo from './logo.svg';
import './App.css';

const quoteBank = [
  {
      text: 'Life isn’t about getting and having, it’s about giving and being.',
      author:'Kevin Kruse'
  },
  
  {
      text: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill'
  },

  {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein'
  }
]



const quote = quoteBank[Math.floor(Math.random() * quoteBank.length)]



const newQuote = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    }


console.log()
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div id="text">
            <p className="quote-text">{quote.text}</p>
          </div>
          <div id="author">
            <p className="author-name">- {quote.author}</p>
          </div>
          <button id="new-quote" onClick={newQuote()}>New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
