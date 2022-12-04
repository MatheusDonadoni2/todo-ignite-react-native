import { TouchableOpacityProps, View } from "react-native";
import { Container, Icon } from "./styles";

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <View>
      <Container {...rest}>
        <Icon />
      </Container>
    </View>
  );
}
