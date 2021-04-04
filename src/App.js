import React from 'react';
import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Form from './pages/Form';
import Routes from "./pages/Routes";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes />
      {/* <div className="row">
       <Form /> */}
        {/* <Content /> */}
        {/* <Sidebar /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;


