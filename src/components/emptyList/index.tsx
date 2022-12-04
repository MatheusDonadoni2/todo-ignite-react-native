import { Text } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function EmptyList() {
  const theme = useTheme();

  return (
    <Container>
      <Text
        style={{
          color: theme.COLORS.GRAY_300,
          fontSize: theme.FONT_SIZE.MD,
          alignItems: "center",
        }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text
        style={{
          color: theme.COLORS.GRAY_300,
          fontSize: theme.FONT_SIZE.MD,
          alignItems: "center",
        }}
      >
        Crie tarefas e organize seus itens a fazer
      </Text>
    </Container>
  );
}
