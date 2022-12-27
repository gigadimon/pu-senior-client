import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const AgentProfile = lazy(() =>
  import("./components/AgentProfile/AgentProfile")
);
const General = lazy(() => import("./components/AgentProfile/General/General"));
const Localize = lazy(() =>
  import("./components/AgentProfile/Localize/Localize")
);
const Activity = lazy(() =>
  import("./components/AgentProfile/Activity/Activity")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/agent/:agentId" element={<AgentProfile />}>
              <Route path="general" element={<General />} />
              <Route path="localize" element={<Localize />} />
              <Route path="activity" element={<Activity />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
