import { PlusCircle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 6px;
`;

export const Icon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: "bold",
}))``;
