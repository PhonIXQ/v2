import Nav from './components/Nav';
import { Hero, About, Experience, Projects, Contact, Footer } from './sections';

function App() {
   return (
      <div className="">
         <header className="max-w-screen-lg my-0 mx-auto">
            <Nav />
         </header>
         <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
}

export default App;
