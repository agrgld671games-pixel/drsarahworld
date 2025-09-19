import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import EmotionalEating from './pages/EmotionalEating';
import WhyDietsFail from './pages/WhyDietsFail';
import MindfulEating from './pages/MindfulEating';
import BingeRestrictCycle from './pages/BingeRestrictCycle';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/emotional-eating" element={<EmotionalEating />} />
          <Route path="/blog/why-diets-fail" element={<WhyDietsFail />} />
          <Route path="/blog/mindful-eating" element={<MindfulEating />} />
          <Route path="/blog/binge-restrict-cycle" element={<BingeRestrictCycle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;