import "./App.css";
import Header from "./components/Header";
import DotGrid from "./components/DotGrid";

function App() {
  return (
    <>
      {/* <Header />
      <div className="absolute inset-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#888888"
          activeColor="#ffffff"
          proximity={100}
          shockRadius={200}
          shockStrength={6}
          resistance={700}
          returnDuration={1.2}
        />
      </div> */}
      <div className="h-screen w-full flex flex-col overflow-hidden">
        <div className="h-[130px] shrink-0">
          <Header />
        </div>

        <div className="flex-grow relative min-h-0">
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
