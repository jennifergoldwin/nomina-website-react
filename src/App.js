import Header from "./components/Header";
import "../src/css/App.css"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import All from "./pages/All";
import React, { useEffect,useState } from "react";
import Loading from "./components/Loading";

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => setLoading(false), 3000)
  },[]);
  
  return (
    <>{loading === false?(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<All/>}></Route>
      </Routes>
      <Footer/>
    </Router>) : (
      <Loading/>
    )}</>
  );
}
 
export default App;