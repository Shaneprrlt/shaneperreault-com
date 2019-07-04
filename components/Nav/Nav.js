import React from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
import { NavElement } from "./Styles";

const Nav = () => (
  <NavElement>
    <ul>
      <li>
        <ActiveLink activeClassName="active" prefetch href="/">
          <a>Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" prefetch href="/apps">
          <a>Apps</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" prefetch href="/work">
          <a>Past Work</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" prefetch href="/education">
          <a>Education</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" prefetch href="/contact">
          <a>Contact</a>
        </ActiveLink>
      </li>
    </ul>
  </NavElement>
);

export default Nav;
