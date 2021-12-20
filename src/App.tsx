import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/landingpage/LandingPage";
import { WatchPage } from "./pages/watchpage/WatchPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProfilePage } from "./pages/profilepage/ProfilePage";

import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "firebase/auth";

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
  const [user] = useAuthState(getAuth());

  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="*" element={<Navigate to="/watch" />}></Route> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
        </Routes>
      )}
    </BrowserRouter>
  );
};

export { App };
