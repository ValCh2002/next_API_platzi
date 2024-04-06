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
        Products
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addProduct" ? styles.active : ""
        }`}
        href="/addProduct"
      >
        Add Product
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/categories" ? styles.active : ""
        }`}
        href="/categories"
      >
        Categories
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addCategory" ? styles.active : ""
        }`}
        href="/addCategory"
      >
        Add Category
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/users" ? styles.active : ""
        }`}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addUser" ? styles.active : ""
        }`}
        href="/addUser"
      >
        Add User
      </Link>
    </nav>
  );
};
