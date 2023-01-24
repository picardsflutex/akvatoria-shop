import './styles/App.css';
import Header from './modules/blocks/Header/Header';
import Footer from './modules/blocks/Footer/Footer';
import MainPage from './modules/pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;