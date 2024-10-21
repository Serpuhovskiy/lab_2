import styled from 'styled-components';

export const Slide = ({ title, img, text, idx }) => {
  return (
    <StyledSlideWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent reverse={idx % 2 !== 0}>
        <StyledText>{text}</StyledText>
        <StyledImg src={img} />
      </StyledContent>
    </StyledSlideWrapper>
  );
};

const StyledImg = styled.img`
  width: 600px !important;
`;

const StyledSlideWrapper = styled.div``;

const StyledTitle = styled.div`
  text-align: left;
  margin: 140px 20px 0 280px;
  font-size: 45px;
`;
const StyledText = styled.div`
  text-align: left;
  font-size: 26px;
  width: 570px;
`;

const StyledContent = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ reverse }) => reverse && 'flex-direction: row-reverse;'}
`;
