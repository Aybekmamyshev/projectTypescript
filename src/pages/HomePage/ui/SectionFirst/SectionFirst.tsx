import React from 'react';
import styles from "./sectionFirst.module.sass"
import BlockRight from "./ui/BlockRight/BlockRight";
import Aside from "./ui/Aside/Aside";
export const SectionFirst = () => {
    return (
        <div className={styles.wrapper}>
            <Aside/>
            <BlockRight/>
        </div>
    );
};
