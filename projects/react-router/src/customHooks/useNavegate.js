import { useState, useEffect } from 'react';
import { EVENT } from '../utils/constants';
import { getCurrentPath } from '../utils/utils';

export function useNavigate() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENT.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
  }

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    }
    window.addEventListener(EVENT.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENT.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENT.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENT.POPSTATE, onLocationChange);
    }
  }, [])

  return { currentPath, navigate }
}
