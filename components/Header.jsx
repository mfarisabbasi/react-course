"use client";

import { headerLinks } from "@/contants";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const login = () => {
    console.log("Hello");
  };

  return (
    <header className="flex items-center justify-around h-[100px] bg-transparent">
      <h1 className="lg:text-3xl md:text-2xl text-lg font-bold">LOGO.</h1>
      <nav>
        <ul className="flex items-center gap-6">
          {headerLinks.map((link, index) => {
            return (
              <Link key={index} href={link.url}>
                <li>{link.name}</li>
              </Link>
            );
          })}
          <Link href="/login">
            <Button label="Login" bgColor="bg-yellow-500" />
          </Link>
          <Link href="/login">
            <Button label="Sign Up" bgColor="bg-black" onClick={login} />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
