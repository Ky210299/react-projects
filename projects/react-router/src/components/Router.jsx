import { Children } from 'react';
import { match } from 'path-to-regexp';
import { ROUTES } from '../utils/constants';
import { useNavigate } from '../customHooks/useNavegate';
import LazyDefaultPage from '../pages/defaultPage';

// const LazyDefaultPage = lazy(() => import('../pages/defaultPage'));

export function Router({ children }) {
  const { currentPath } = useNavigate();

  let routeParams = {};

  const routesFromChildrens = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route';
    return isRoute ? props : null
  })

  const allRoutes = ROUTES.concat(routesFromChildrens).filter(Boolean);

  const Page = allRoutes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false
    routeParams = matched.params
    return true
  })?.component

  return Page ? <Page routeParams={routeParams} /> : <LazyDefaultPage />
}
