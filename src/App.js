import data from './data'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {

  const main = data.map(item => {
    return (
      <Main
        {...item}
      />
    )
  })

  return (
    <div className="app">
      <Nav />
      <section className="Main-items">
        {main}
      </section>
    </div>
  );
}

export default App;
