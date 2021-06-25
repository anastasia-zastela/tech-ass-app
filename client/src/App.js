import React from "react";
import * as styles from "./App.module.scss";
import ShiftsScreen from "./screens/ShiftsScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <ShiftsScreen />
      </div>
    </Router>
  );
}

export default App;
