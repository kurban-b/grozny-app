import styles from "./page.module.css";
import Header from "@frontend/src/components/Header";
import React from "react";
import Footer from "@frontend/src/components/Footer";
import IndexHero from "@frontend/src/app/components/IndexHero";
import IndexApartments from "@frontend/src/app/components/IndexApartments";
import IndexBuildings from "@frontend/src/app/components/IndexBuildings";
import IndexDevelopers from "@frontend/src/app/components/IndexDevelopers";

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
