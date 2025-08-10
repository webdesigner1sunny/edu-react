import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BestEducation from "./components/Main/BestEducation";
import EducationforTomorrowLeaders from "./components/Main/EducationforTomorrowLeaders";
import Instructor from "./components/Main/Instructor";
import RightCourseForYou from "./components/Main/RightCourseForYou";
import SchoolNews from "./components/Main/SchoolNews";
import TopCategory from "./components/Main/TopCategory";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TopCategory />
      <Instructor />
      <BestEducation />
      <RightCourseForYou />
      <EducationforTomorrowLeaders />
      <SchoolNews />
      <Footer />
    </>
  );
}

export default App;
