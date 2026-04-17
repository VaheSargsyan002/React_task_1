import "./App.css";
import Header from "./components/Header";
import PreferenceChecklist from "./components/PreferenceChecklist";
import ProfileCard from "./components/ProfileCard";
import QuoteBox from "./components/QuoteBox";
import QuickTaskCard from "./components/QuickTaskCard";
import ReactionPanel from "./components/ReactionPanel";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="app-shell">
      <Header />
      <ProfileCard firstName="Vahe" lastName="Sargsyan" role="student" />
      <QuoteBox />
      <QuickTaskCard />
      <TaskList />
      <PreferenceChecklist />
      <ReactionPanel />
    </main>
  );
}

export default App;
