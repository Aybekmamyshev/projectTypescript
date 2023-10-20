import React from 'react';
import LeftBanner from "./ui/LeftBanner/LeftBanner";
import RightBanner from "./ui/RightBanner/RightBanner";
import styles from "./sectionBanner.module.sass"
export const SectionBanner = () => {
    return (
        <div className={styles.wrapper}>
            <LeftBanner/>
            <RightBanner/>
        </div>
    );
};

