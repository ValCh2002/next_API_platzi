"use client";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Teams
      </Link>
      <Link
        className={`${styles.link} ${pathname === "/stadiums" ? styles.active : ""}`}
        href="/stadiums"
      >
        Stadiums
      </Link>
      <Link
        className={`${styles.link} ${pathname === "/tvChannels" ? styles.active : ""}`}
        href="/tvChannels"
      >
        Tv Channels
      </Link>
    </nav>
  );
};
