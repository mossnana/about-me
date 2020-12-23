import * as React from "react";
import AppRouter from "./Router";
import Player from "./components/bgsound.component";
import "./styles/main.scss";
import "./styles/ness.scss";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Player url="./intro.mp3" />
      <AppRouter />
    </>
  );
};

export default App;
