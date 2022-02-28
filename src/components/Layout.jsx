import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Logo from '../content/images/face-with-hearts-emoji-black-and-white.svg';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Typography />
        <Header Logo={Logo} />
        <main className="main-body">{children}</main>
      </motion.div>
    </>
  );
}

export default Layout;
