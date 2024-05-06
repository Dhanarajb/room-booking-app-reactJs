import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingSystem from "./components/BookingMenu";
import "./App.css"; // Including a CSS file for styling

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>Room Booking System</h1>
        <BookingSystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
