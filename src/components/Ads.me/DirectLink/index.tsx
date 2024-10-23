'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for refresh
import styles from './directlink.module.scss';

const DirectLinkMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter(); // Initialize useRouter hook

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let refreshTimer: NodeJS.Timeout;

    // Reset overlay after 1 minute (60000 ms)
    if (!isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(true);
      }, 60000); // 1 minute
    }

    // Refresh the page after 2 minutes (120000 ms)
    refreshTimer = setTimeout(() => {
      router.refresh(); // Use the router.refresh method
    }, 120000); // 2 minutes

    return () => {
      clearTimeout(hideTimer); // Clear timeout when component unmounts or reset
      clearTimeout(refreshTimer); // Clear the refresh timer
    };
  }, [isVisible, router]);

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
