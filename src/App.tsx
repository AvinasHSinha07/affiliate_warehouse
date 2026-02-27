import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AudienceClarification } from '@/components/sections/AudienceClarification';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PriceTracking } from '@/components/sections/PriceTracking';
import { PricingTransparency } from '@/components/sections/PricingTransparency';
import { Fees } from '@/components/sections/Fees';
import { NoLockIns } from '@/components/sections/NoLockIns';
import { WholesalerAlignment } from '@/components/sections/WholesalerAlignment';
import { Compliance } from '@/components/sections/Compliance';
import { OurStory } from '@/components/sections/OurStory';
import { FAQ } from '@/components/sections/FAQ';
import { FormsSection } from '@/components/sections/FormsSection';
import { Reviews } from '@/components/sections/Reviews';
import { Disclaimer } from '@/components/sections/Disclaimer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      <Header />
      
      <main>
        <Hero />
        <AudienceClarification />
        <HowItWorks />
        <PriceTracking />
        <PricingTransparency />
        <Fees />
        <NoLockIns />
        <WholesalerAlignment />
        <Compliance />
        <OurStory />
        <Reviews />
        <FAQ />
        <FormsSection />
        <Disclaimer />
      </main>

      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur border-t border-slate-800 z-40">
        <button 
          onClick={() => document.getElementById("forms-section")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-900/20"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default App;
