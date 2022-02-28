import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { MenuProvider } from './src/components/MenuContext';

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const TRANSITION_DELAY = 0.5 * 1000 * 2;

  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];

    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY);
  }

  return false;
};
