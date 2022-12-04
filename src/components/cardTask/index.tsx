import {
  CheckButton,
  Container,
  Description,
  TrashButton,
  IconTrash,
} from "./styles";

import check from "../../assets/check.png";
import noCheck from "../../assets/noCheck.png";
import { Image } from "react-native";

type CadTaskProps = {
  id: string;
  description: string;
  isFinished: boolean;
  handleFinishTask: (id: string) => void;
  handleRemoveTask: (id: string) => void;
};

export function CardTask({
  id,
  description,
  isFinished,
  handleFinishTask,
  handleRemoveTask,
}: CadTaskProps) {
  return (
    <Container>
      <CheckButton onPress={() => handleFinishTask(id)}>
        {isFinished ? <Image source={check} /> : <Image source={noCheck} />}
      </CheckButton>
      <Description isFinished={isFinished}>{description}</Description>
      <TrashButton onPress={() => handleRemoveTask(id)}>
        <IconTrash />
      </TrashButton>
    </Container>
  );
}
