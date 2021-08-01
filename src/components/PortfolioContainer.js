import React, { useState } from "react";

import Nav from "./Nav";

import Webdev from "./pages/Webdev";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";

import { createTheme, ThemeProvider } from "@material-ui/core";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const theme = createTheme({
    palette: {
       primary: {
          main: "#37474f"
                 },
       secondary: {
          main: "#76ff03"
                  }
             },
        })

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Web Development") {
      return <Webdev />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ThemeProvider theme={theme}>
    <div className="portfolioContainer">
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}

        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
}
