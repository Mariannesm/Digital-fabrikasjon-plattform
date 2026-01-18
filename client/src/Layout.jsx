import React from "react";
import "./Layout.css";

// Layout-komponenten tar imot `children` som en prop
function Layout({ children }) {
  return (
    <>
      {children}
      <footer>
        <p className="text-black font-mono">© 2025 Høgskolen I Østfold</p>
      </footer>
    </>
  );
}

export default Layout;
