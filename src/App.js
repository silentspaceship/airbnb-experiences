import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import data from "./data";

function App() {
  // const cards = data.map((item) => {
  //   return <Card key={item.id} item={item} />;
  // });

  return (
    <>
      <Navbar />
      <Hero />
      {/* <section className="cards-container">{cards}</section> */}
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
