import './app.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
    </section>
    <section id='Servicos'>Paralax</section>
    <section>Services</section>
    <section id='Portfolio'>Paralax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contato'>Contact</section>
  </div>;
};

export default App;
