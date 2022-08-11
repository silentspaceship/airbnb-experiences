import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}

export default App;
