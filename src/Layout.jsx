import { useState } from 'react'
import React from 'react';

// Layout-komponenten tar imot `children` som en prop
function Layout({ children }) {
  return (
    <div>
      {/* Eksempel på en enkel layout-struktur */}
      <header>
        <h1>Digital fabrikasjon</h1>
      </header>
      <main>
        {/* Her rendres den komponenten eller siden som sendes inn */}
        {children}
      </main>
      <footer>
        <p>© 2025 Høgskolen I Østfold</p>
      </footer>
    </div>
  );
}

export default Layout;
