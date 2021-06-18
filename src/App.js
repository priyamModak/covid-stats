import './App.css';
import Stats from './components/Stats';
import Header from './components/header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div>
            <div>
              <Stats></Stats>
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
