import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CharityVerification from './components/CharityVerification';
import ObservationExplorer from './components/ObservationExplorer';
import FieldRecorder from './components/FieldRecorder';
import ConservationProjects from './components/ConservationProjects';
import VolunteerDonateModal from './components/VolunteerDonateModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('donate');
  const [userObservations, setUserObservations] = useState([]);

  const handleOpenDonate = () => {
    setModalMode('donate');
    setModalOpen(true);
  };

  const handleOpenVolunteer = () => {
    setModalMode('volunteer');
    setModalOpen(true);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddObservation = (newObs) => {
    setUserObservations((prev) => [newObs, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#03150d] text-slate-100 flex flex-col font-sans">
      
      {/* Header Bar */}
      <Header 
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        <Hero 
          onScrollTo={handleScrollTo}
          onOpenVolunteer={handleOpenVolunteer}
        />

        <CharityVerification />

        <ObservationExplorer 
          customObservations={userObservations}
        />

        <FieldRecorder 
          onAddObservation={handleAddObservation}
        />

        <ConservationProjects 
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
        />
      </main>

      {/* Footer */}
      <Footer 
        onScrollTo={handleScrollTo}
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Volunteer & Donate Modal */}
      <VolunteerDonateModal 
        isOpen={modalOpen}
        mode={modalMode}
        onClose={() => setModalOpen(false)}
      />

    </div>
  );
}
