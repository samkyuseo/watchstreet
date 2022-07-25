import { Navigate, useRoutes } from 'react-router-dom'

import { WaitlistPage } from './pages/waitlistpage/WaitlistPage'
import { WatchPage } from './pages/watchpage/WatchPage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ProfilePage } from './pages/profilepage/ProfilePage'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { LoadingPage } from './pages/loadingpage/LoadingPage'
import { WatchListPage } from './pages/watchlistpage/WatchListPage'

const firebaseConfig = {
  apiKey: 'AIzaSyBNvP9lKSi6K-Mean3tkJfy65a6OfYq3oI',
  authDomain: 'watchvalue-7e477.firebaseapp.com',
  projectId: 'watchvalue-7e477',
  storageBucket: 'watchvalue-7e477.appspot.com',
  messagingSenderId: '725957103997',
  appId: '1:725957103997:web:0f7c698e9866c3bbee7c14',
  measurementId: 'G-PCHTX1FC5X',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
getAnalytics(app)

const App = () => {
  const [user, loading, error] = useAuthState(getAuth())
  const authRoutes = useRoutes([
    { path: '/lists/:id', element: <WatchListPage /> },
    { path: '/watch/:id', element: <WatchPage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '*', element: <Navigate to='/profile' /> },
  ])
  const unAuthRoutes = useRoutes([
    { path: '/', element: <WaitlistPage /> },
    { path: '*', element: <Navigate to='/' /> },
  ])
  const loadingRoutes = useRoutes([{ path: '*', element: <LoadingPage /> }])

  if (loading || error) {
    return loadingRoutes
  }

  if (user) {
    return authRoutes
  } else {
    return unAuthRoutes
  }
}

export { App, db }
