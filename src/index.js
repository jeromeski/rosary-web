import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import PlayerProvider from "./contexts/player.ctx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </StrictMode>
);
