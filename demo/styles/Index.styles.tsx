import styled from "styled-components";

interface IContainerProps {
    flex?: boolean,
}
export const Container = styled.div<IContainerProps>`
    display: block;
    ${(props) => (props.flex && `display: flex`)};
    margin: 3.4rem 1rem;
`;

export const FlexContainerRow = styled.div`
    margin: 0 2rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;
  
export const P = styled.p`
    text-decoration: underline;
    font-size: 2.4rem;
    font-weight: 400;
    margin: 1rem
`;
  
interface ISpanProps {
    underline?: boolean, 
    textColor?: string,
    cursor?: string
};
export const Span = styled.span<ISpanProps>`
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    color: ${(props) => (props.textColor ? props.textColor : "black")};
    cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
`;
  
export const Footer = styled.footer`
    background-color: lightgray;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
`;


export const DateString = styled.p`
    text-decoration: underline;
    margin: 1.5rem 0;
    font-style: italic;
`;

interface IHrProps {
    lineColor?: string,
};
export const ColoredLine = styled.hr<IHrProps>`
    color: ${(props) => (props.lineColor ? props.lineColor : "black")};
    background-color: ${(props) => (props.lineColor ? props.lineColor : "black")};
    margin: 1.5rem;
    padding: 0.03rem;
`;

export const Ul = styled.ul`

`;

export const Li = styled.li`
    display: inline;
    padding: 0.2rem;
`;