import { Link } from "react-router-dom";
import { Section, H1, Byline } from "./Hero.styled";
export default function Hero() {
  return (
    <Section>
      <H1>Buying your motor vehicle insurance should be a breeze!</H1>
      <Byline>We're here to ensure that happens in just 3 easy steps.</Byline>
      <Link className="button" to="/form">
        Get started
      </Link>
    </Section>
  );
}
