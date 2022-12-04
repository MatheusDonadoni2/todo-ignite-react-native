import styled from "styled-components/native";

import { SafeAreaView } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 173px;
`;

export const Logo = styled.Image`
  width: 110.34px;
  height: 32px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding-left: 24px;
  padding-right: 24px;
`;

export const NewTask = styled.View`
  width: 100%;
  height: 54px;

  margin-top: -27px;

  align-items: center;
`;

export const NewTaskContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;
  height: 54px;
`;

export const TaskList = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const HeaderTaskList = styled.View`
  height: 19px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CountHeaderTaskList = styled.TouchableOpacity`
  height: 100%;
  width: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
