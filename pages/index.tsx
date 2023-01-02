import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "../styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Mihir Desai</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={styles.main}>
				<h1 className={inter.className}>Mihir Desai</h1>
			</main>
		</>
	);
}
