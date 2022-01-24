import { StyledButton } from "./styles/button.style";
import { StyledCard } from "./styles/Card.style";

export default function Card({ contentItem }) {
  return (
    <StyledCard className={contentItem.heading.toLowerCase()}>
      <img src={contentItem.icon} />
      <h2>{contentItem.heading}</h2>
      <p>{contentItem.para}</p>
      <StyledButton>Learn More</StyledButton>
    </StyledCard>
  );
}
