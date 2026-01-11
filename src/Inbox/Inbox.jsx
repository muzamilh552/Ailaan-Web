import React from 'react';
import InboxSidebar from './InboxSidebar';
import InboxSection from './InboxSection';
import './Inbox.css'
const Inbox = () => {
  return (
    <>
      <div>

        <InboxSidebar />

      </div>
      <div className="section">
        <InboxSection />

      </div>
    </>
  );
}

export default Inbox;
