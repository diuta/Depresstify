import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MiniGames() {
  return (
    <div>
      <h2>Mini-Games</h2>
      <ul>
        <li>
          <Link to="pvt">PVT (Reaction Time)</Link>
        </li>
        <li>
          <Link to="#">Stroop Test (Coming Soon)</Link>
        </li>
        <li>
          <Link to="#">N-Back Test (Coming Soon)</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
