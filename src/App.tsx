import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AreaOfActivity from './components/AreaOfActivity';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import RecentArticles from './components/RecentArticles';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AreaOfActivity />
        <AboutUs />
        <Vision />
        <Newsletter />
        <Testimonials />
        <RecentArticles />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
