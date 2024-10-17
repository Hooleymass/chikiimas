'use client'
import React, { useState, useEffect } from 'react';
import styles from './directlink.module.scss';

const DirectLinkMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Reset overlay after 5 minutes (300000 ms)
    if (!isVisible) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 60000); // 5 minutes
    }

    return () => {
      clearTimeout(timer); // Clear timeout when component unmounts or reset
    };
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(false); // Hide overlay on click
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={handleClick}>
      {/* Entire overlay is clickable, no need for visible button */}
      <a
        href="https://wipehumorousbeen.com/ctqwbgw4?key=45c618c1ca1aa74a3bfbf046ea7b5535"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.overlay__invisibleLink}
      >
      </a>
    </div>
  );
};

export default DirectLinkMe;
