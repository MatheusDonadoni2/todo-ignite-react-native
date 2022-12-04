import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { useTheme } from "styled-components";
import { FlatList, Text, View } from "react-native";

import {
  Container,
  Content,
  CountHeaderTaskList,
  Header,
  HeaderTaskList,
  Logo,
  NewTask,
  NewTaskContent,
  TaskList,
} from "./styles";

import logo from "../../assets/Logo.png";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { CardTask } from "../../components/cardTask";
import { EmptyList } from "../../components/emptyList";

import { TaskStorageDTO } from "../../storage/TaskStorageDTO";

export function Main() {
  const theme = useTheme();
  const [task, setTask] = useState("");
  const [taskFinished, setTaskFinished] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  const [data, setData] = useState<TaskStorageDTO[]>([] as TaskStorageDTO[]);

  function handleFinishTask(id: string) {
    const indexTask = data.findIndex((item) => {
      return item.id === id;
    });
    const tempTask = [...data];
    tempTask[indexTask].isFinished = !tempTask[indexTask].isFinished;
    setData(tempTask);
  }

  function handleRemoveTask(id: string) {
    const task = data.filter((item) => item.id !== id);
    setData(task);
  }

  function loadInfoTasks() {
    const taskIsFinished = data.filter((item) => item.isFinished);
    setTaskFinished(taskIsFinished.length);
    setTaskCount(data.length);
  }

  function handleAddNewTask(description: string) {
    if (!description) {
      return;
    }

    const newTask = {
      id: uuid.v4().toString(),
      description,
      isFinished: false,
    };
    setData([...data, newTask]);
    setTask("");
  }

  useEffect(() => loadInfoTasks(), [data]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Content>
        <NewTask>
          <NewTaskContent>
            <Input value={task} onChangeText={(text) => setTask(text)} />
            <Button onPress={() => handleAddNewTask(task)} />
          </NewTaskContent>
        </NewTask>
        <TaskList>
          <HeaderTaskList>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: 87,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.BLUE,
                  fontSize: theme.FONT_SIZE.SM,
                }}
              >
                Criadas
              </Text>
              <CountHeaderTaskList>
                <Text
                  style={{
                    color: theme.COLORS.WHITE,
                    fontSize: theme.FONT_SIZE.SS,
                  }}
                >
                  {taskCount}
                </Text>
              </CountHeaderTaskList>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: 111,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.PURPLE,
                  fontSize: theme.FONT_SIZE.SM,
                }}
              >
                Concluídas
              </Text>
              <CountHeaderTaskList>
                <Text
                  style={{
                    color: theme.COLORS.WHITE,
                    fontSize: theme.FONT_SIZE.SS,
                  }}
                >
                  {taskFinished}
                </Text>
              </CountHeaderTaskList>
            </View>
          </HeaderTaskList>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardTask
                id={item.id}
                description={item.description}
                isFinished={item.isFinished}
                handleFinishTask={() => handleFinishTask(item.id)}
                handleRemoveTask={() => handleRemoveTask(item.id)}
              />
            )}
            ListEmptyComponent={<EmptyList />}
            style={{
              marginTop: 20,
            }}
          />
        </TaskList>
      </Content>
    </Container>
  );
}
