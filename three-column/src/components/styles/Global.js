import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html {
		background: ${({ theme }) => theme.color.alt};
		color: hsla(0, 0%, 100%, 0.75);
		font-family: 'Big Shoulders Display', cursive;
		font-size: 15px;
	}
	p {
		line-height: 1.5;
	}
	img {
		max-width: 100%;
	}
	h2{
		text-transform: uppercase;
		font-family: ${({ theme }) => theme.fonts.alt}
	}
	button {
		background: ${({ theme }) => theme.color.alt};
		font-family: ${({ theme }) => theme.fonts.alt};
		font-weight: bold;
		border-radius: 25px;
  		border: none;
		font-size: ${({ theme }) => theme.fontSize.small};
  		padding: ${({ theme }) => theme.margin.medium};
	}
	.sedans{
		background: ${({ theme }) => theme.bG.light};
		button{
			color: ${({ theme }) => theme.bG.light};
		}
	}
	.suv{
		background: ${({ theme }) => theme.bG.medium};
		button{
			color: ${({ theme }) => theme.bG.medium};
		}
	}
	.luxury{
		background: ${({ theme }) => theme.bG.dark};
		button{
			color: ${({ theme }) => theme.bG.dark};
		}
	}
`;

export default GlobalStyles;
//	font-family: 'Lexend Deca', sans-serif;
//	font-weight: 700
