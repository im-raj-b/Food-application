import Link from "next/link";
import React from "react";
import logoIcon from "@/assets/logo.png";
import headerStyle from "@/app/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={headerStyle.header}>
        <Link className={headerStyle.logo} href="/">
          <Image src={logoIcon} alt="logo" priority /> Next Level Food
        </Link>

        <nav className={headerStyle.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
