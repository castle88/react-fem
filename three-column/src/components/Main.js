import Card from "./Card";
import { MainStyled } from "./styles/Main.style";

export default function Main({ content }) {
  return (
    <MainStyled>
      <ul>
        {content.map((contentItem, index) => (
          <Card key={index} contentItem={contentItem} />
        ))}
      </ul>
    </MainStyled>
  );
}
