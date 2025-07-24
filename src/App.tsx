import "./App.css";
import Header from "./components/Header";
import DotGrid from "./components/DotGrid";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col overflow-hidden">
        <div className="h-[140px] shrink-0">
          <Header />
        </div>

        <div className="flex-grow relative min-h-0 p-6">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#888888"
            activeColor="#ffffff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>
    </>
  );
}

export default App;
