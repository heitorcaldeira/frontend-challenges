import styled from 'styled-components';

interface Props {
  size: number;
}

const VerticalSpacing = styled.div<Props>`
  margin: ${(props) => props.size}px 0;
`;

export default VerticalSpacing;
