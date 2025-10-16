import React from 'react';
import Navbar from './Components/Navbar';
import Name from './Components/Name';
import Sociallinks from './Components/Sociallinks';
import LatestWorks from './Components/LatestWorks';
import MatterBackground from './Components/MatterBackground';
import Timeline from './Components/Timeline';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import TechStack from './Components/TechStack';

const App = () => {
  return (
    <div className="bg-[#0a0909] text-white min-h-screen w-full overflow-x-hidden relative z-10">
      <MatterBackground />

      {/* Fixed Navbar */}
      <Navbar />
      

      {/* Main Sections */}
      <main className=" flex flex-col gap-20 md:gap-28 lg:gap-36">
        <Name />
        <Sociallinks />
        <LatestWorks />
        <Timeline />
        <TechStack />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
