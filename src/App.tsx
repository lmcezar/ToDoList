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

import { useState } from "react";

interface ITask {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputText, setInputText] = useState("");

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: inputText,
        isDone: false,
      },
    ]);
    setInputText("");
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return { ...task };
    });

    setTasks(updatedTasks);
  };

  const countDone = tasks.filter((task) => task.isDone).length;

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
              <Input
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setInputText(ev.target.value)
                }
                value={inputText}
                placeholder="Adicione uma nova tarefa"
              />
              <AddTask onClick={handleAddTask}>
                <TextTask>Criar</TextTask> <PlusCircle size={16} />
              </AddTask>
            </Form>

            <ContainerCountTasks>
              <CreatedTasks>
                Tarefas criadas{" "}
                <CountCreatedTasks>{tasks.length}</CountCreatedTasks>
              </CreatedTasks>
              <FinishedTasks>
                Tarefas Concluídas{" "}
                <CountFinishedTasks>
                  {countDone} de {tasks.length}
                </CountFinishedTasks>
              </FinishedTasks>
            </ContainerCountTasks>

            <ContainerTasks>
              {tasks.map((item) =>
                item.isDone ? (
                  <ItemTask>
                    <li key={item.id}>
                      <CheckTask onClick={() => handleCheckTask(item.id)}>
                        <CheckCircle weight="fill" color="#5E60CE" size={24} />
                      </CheckTask>
                      <ItemTaskDone>{item.content}</ItemTaskDone>
                      <ItemTaskDone>{item.id}</ItemTaskDone>
                      <CheckTask onClick={() => handleDeleteTask(item.id)}>
                        <Trash color="#FFFFFF" />
                      </CheckTask>
                    </li>
                  </ItemTask>
                ) : (
                  <ItemTask>
                    <li key={item.id}>
                      <CheckTask onClick={() => handleCheckTask(item.id)}>
                        <Circle color="#4EA8DE" size={24} />
                      </CheckTask>

                      <p> {item.content}</p>
                      <CheckTask onClick={() => handleDeleteTask(item.id)}>
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
