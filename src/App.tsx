import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";

import { AuthenticatedTemplate } from "./components/templates/AuthenticatedTemplate";
import { UnauthenticatedTemplate } from "./components/templates/UnauthenticatedTemplate";
import { LandingPage } from "./pages/landingpage/LandingPage";
import { WatchPage } from "./pages/watchpage/WatchPage";

const firebaseConfig = {
  apiKey: "AIzaSyBNvP9lKSi6K-Mean3tkJfy65a6OfYq3oI",
  authDomain: "watchvalue-7e477.firebaseapp.com",
  projectId: "watchvalue-7e477",
  storageBucket: "watchvalue-7e477.appspot.com",
  messagingSenderId: "725957103997",
  appId: "1:725957103997:web:0f7c698e9866c3bbee7c14",
  measurementId: "G-PCHTX1FC5X",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const App = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <Router>
          <Routes>
            <Route path="/watch">
              <WatchPage />
            </Route>
          </Routes>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="*" element={<LandingPage />}></Route>
          </Routes>
        </Router>
      </UnauthenticatedTemplate>
    </>
  );
};

export { App };
