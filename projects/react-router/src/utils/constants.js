import { lazy } from 'react'
const LazySearchPage = lazy(() => import('../components/Searcher.jsx'));
const LazyHomePage = lazy(() => import('../pages/home'));
const LazyAboutPage = lazy(() => import('../pages/about'));

export const EVENT = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}
export const ROUTES = [
  {
    path: '/',
    component: LazyHomePage
  },
  {
    path: '/about',
    component: LazyAboutPage
  },
  {
    path: '/search/:query',
    component: LazySearchPage
  }
]
