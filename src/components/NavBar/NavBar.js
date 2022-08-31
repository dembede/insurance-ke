import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Section, Logo } from "./NavBar.styled";

export default function NavBar() {
  const CustomLink = ({ to, children, ...props }) => {
    const resolved = useResolvedPath(to);
    const isActive = useMatch({ path: resolved.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <Section>
      <Logo>
        <Link to="/" title="Home">
          insurance/ke
        </Link>
      </Logo>
      <ul>
        <CustomLink to="/form" title="Apply">
          Apply
        </CustomLink>
        <CustomLink to="/help" title="Need help?">
          Need help?
        </CustomLink>
      </ul>
    </Section>
  );
}
