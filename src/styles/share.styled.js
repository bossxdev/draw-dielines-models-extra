import styled from "styled-components";


export const Text = styled.p`
  margin: 0;
  font-size: ${ props => props.size ? `font-size: ${props.size}px;`: '14px'};
  color: ${ props => props.color ? `${props.color};`: '#000000'};
  font-weight: ${ props => props.weight ? `${props.weight};`: '100'}
`;

export const DieLineContainer = styled.div`
    width: 100%;
    height: 87vh;
    margin-top: 2rem;
`

export const LaysContainer = styled.div`
    width: 100%;
    height: 55vh;
`

export const ResultContainer = styled.div`
    width: 100%;
    height: 30vh;
`