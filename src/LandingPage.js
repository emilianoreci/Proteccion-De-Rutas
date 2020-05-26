import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Proteccion de rutas en react</h1>
        <ul>
          <li>
            <Link to="/public">Publico</Link>
          </li>
          <li>
            <Link to="/protected">Protegido</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
