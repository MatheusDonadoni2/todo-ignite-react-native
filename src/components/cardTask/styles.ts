import { TouchableOpacityProps } from "react-native";
import { Circle, CheckCircle, Trash } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

type DescriptionStyleProps = {
  isFinished: boolean;
};

export const Description = styled.Text<DescriptionStyleProps>`
  width: 235px;
  color: ${({ theme, isFinished }) =>
    !isFinished ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300};
  text-decoration: ${({ theme, isFinished }) =>
    isFinished ? "line-through" : "none"};

  font-size: ${({ theme }) => theme.FONT_SIZE.SS}px;
`;

export const CheckButton = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 24px;
  height: 24px;
  padding: 3.27px;
  align-items: center;
  justify-content: center;
`;

export const TrashButton = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 32px;
  height: 32px;
  padding: 3.27px;
  align-items: center;
  justify-content: center;
`;

export const IconCircle = styled(Circle).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.BLUE,
  weight: "bold",
}))``;

export const IconCircleChecked = styled(CheckCircle).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.PURPLE_DARK,
  weight: "bold",
}))``;

export const IconTrash = styled(Trash).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300,
  weight: "bold",
}))``;
