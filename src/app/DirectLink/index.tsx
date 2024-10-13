'use client'
import React, { useState, useEffect } from 'react';
import styles from './directlink.module.scss';

const DirectLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Reset overlay after 5 minutes (300000 ms)
    if (!isVisible) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000); // 5 minutes
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
        href="https://wipehumorousbeen.com/rzsc4svc91?key=c9fd82f5ad2fe0ff9f357f08c9aedcb0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.overlay__invisibleLink}
      >
        {/* Empty anchor, entire div is clickable */}
      </a>
    </div>
  );
};

export default DirectLink;
