import KarbanBoard from "./board/KarbanBoard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <Header />
        <KarbanBoard />
      </main>
    </div>
  );
}

export default App;
