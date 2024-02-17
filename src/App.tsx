import {
  AddTask,
  Body,
  ContainerApp,
  ContainerBody,
  Form,
  Header,
  Input,
  RocketLogo,
  TodoLogo,
  TextTask,
  ContainerCountTasks,
  CreatedTasks,
  FinishedTasks,
  CountCreatedTasks,
  CountFinishedTasks,
  ContainerTasks,
  ItemTask,
  CheckTask,
  ItemTaskDone,
} from "./style";
import "./global.css";
import rocketLogo from "./assets/rocketlogo.png";
import todoLogo from "./assets/todologo.png";
import { PlusCircle, Circle, Trash, CheckCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";

interface IItemProps {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<IItemProps[]>([]);

  useEffect(() => {
    setTasks([
      {
        id: uuidv4(),
        content: "Tarefa 1",
        isDone: false,
      },
      {
        id: uuidv4(),
        content: "Tarefa 2",
        isDone: false,
      },
      {
        id: uuidv4(),
        content: "Tarefa 3",
        isDone: false,
      },
      {
        id: uuidv4(),
        content: "Tarefa 4",
        isDone: false,
      },
      {
        id: uuidv4(),
        content: "Tarefa 5",
        isDone: true,
      },
    ]);
  }, []);

  return (
    <>
      <Header>
        <RocketLogo>
          <img src={rocketLogo} />
        </RocketLogo>
        <TodoLogo>
          <img src={todoLogo} />
        </TodoLogo>
      </Header>
      <ContainerApp>
        <Body>
          <ContainerBody>
            <Form>
              <Input placeholder="Adicione uma nova tarefa" />
              <AddTask>
                <TextTask>Criar</TextTask> <PlusCircle size={16} />
              </AddTask>
            </Form>

            <ContainerCountTasks>
              <CreatedTasks>
                Tarefas criadas <CountCreatedTasks>0</CountCreatedTasks>
              </CreatedTasks>
              <FinishedTasks>
                Tarefas Concluídas{" "}
                <CountFinishedTasks>0 de {tasks.length}</CountFinishedTasks>
              </FinishedTasks>
            </ContainerCountTasks>

            <ContainerTasks>
              {/* <FlatList></FlatList> */}
              {tasks.map((item) =>
                item.isDone ? (
                  <ItemTask>
                    <li key={item.id}>
                      <CheckTask>
                        <CheckCircle weight="fill" color="#5E60CE" size={24} />
                      </CheckTask>
                      <ItemTaskDone>{item.content}</ItemTaskDone>
                      <CheckTask>
                        <Trash color="#FFFFFF" />
                      </CheckTask>
                    </li>
                  </ItemTask>
                ) : (
                  <ItemTask>
                    <li key={item.id}>
                      <CheckTask>
                        <Circle color="#4EA8DE" size={24} />
                      </CheckTask>

                      <p> {item.content}</p>
                      <CheckTask>
                        <Trash color="#FFFFFF" />
                      </CheckTask>
                    </li>
                  </ItemTask>
                )
              )}
            </ContainerTasks>
          </ContainerBody>
        </Body>
      </ContainerApp>
    </>
  );
}

export default App;
