import './styles/App.css';
import Header from './modules/blocks/header/Header';
import Footer from './modules/blocks/footer/Footer';
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