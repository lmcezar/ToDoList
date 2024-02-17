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
} from "./style";
import "./global.css";
import rocketLogo from "./assets/rocketlogo.png";
import todoLogo from "./assets/todologo.png";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

interface IItemProps {
  id: number;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<IItemProps[]>([]);
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
                Tarefas Concluídas <CountFinishedTasks>0</CountFinishedTasks>
              </FinishedTasks>
            </ContainerCountTasks>

            <ContainerTasks>
              {/* <FlatList></FlatList> */}
              <ItemTask />
            </ContainerTasks>
          </ContainerBody>
        </Body>
      </ContainerApp>
    </>
  );
}

export default App;
