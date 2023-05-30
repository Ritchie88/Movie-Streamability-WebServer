import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="HomePage">
      <header className="Home-Header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Homepage for Movie Search API
        </p>
      </header>
    </div>
  );
}

export default Home;
