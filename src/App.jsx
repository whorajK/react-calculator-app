import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="w-screen h-screen bg-blue-300 p-4 relative flex  justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white absolute top-[15%] drop-shadow-[0_1px_2px_black]">
        Calculator App
      </h1>
      <Calculator />
    </div>
  );
}

export default App;
