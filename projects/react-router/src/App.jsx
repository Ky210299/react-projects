import { Suspense, lazy } from 'react';
import { Route } from "./components/Route";
import { Router } from "./components/Router";

const LazyContact = lazy(() => import('./components/Contact'));

export function App() {
  return (
    <main>
      <Suspense >
        <Router >
          <Route path={'/contact'} component={LazyContact} />
        </Router>
      </Suspense>
    </main >
  )
}
