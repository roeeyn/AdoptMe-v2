import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading page...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
