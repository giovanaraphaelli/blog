import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';

function App() {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu primeiro post" readingTime={1}>
          <p>Introdução</p>
          <p>Desenvolvimento</p>
          <p>Conclusão</p>
        </Post>

        <Post title="Meu segundo post" readingTime={1}>
          <p>
            <em>Texto em Itálico</em>
          </p>
        </Post>
      </main>
      <Footer />
    </>
  );
}

export default App;
