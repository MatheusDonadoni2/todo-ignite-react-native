import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 271px;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  placeholdertextcolor: ${({ theme }) => theme.COLORS.GRAY_300};
`;
