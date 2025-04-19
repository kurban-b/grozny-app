import styles from "./page.module.css";
import React from "react";
import IndexHero from "./components/IndexHero";
import IndexApartments from "./components/IndexApartments";
import IndexBuildings from "./components/IndexBuildings";
import IndexDevelopers from "./components/IndexDevelopers";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <IndexHero />

                <IndexApartments />

                <div className={styles.bgprdx}>
                </div>

                <IndexBuildings />

                <div className={styles.bgprdx}>
                </div>

                <IndexDevelopers />
            </main>
        </div>
    );
}
