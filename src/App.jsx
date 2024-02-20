import BooksSection from "./pages/BooksSection";
import NavBar from './pages/Navbar';

const App = () => {
  return (
    <>
    <NavBar/>
      <main className="my-10 lg:my-14">
        <BooksSection />
      </main>
    </>
  );
};

export default App;