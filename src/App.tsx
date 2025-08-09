import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BestEducation from "./components/Main/BestEducation";
import Instructor from "./components/Main/Instructor";
import TopCategory from "./components/Main/TopCategory";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TopCategory />
      <Instructor />
      <BestEducation />
    </>
  );
}

export default App;
