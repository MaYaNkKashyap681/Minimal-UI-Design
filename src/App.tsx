import { Hero, About, Navbar, Footer } from "./components";

const App = () => {
  return (
    <div>
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default App;
