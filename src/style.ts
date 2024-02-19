import styled from "styled-components";

export const ContainerApp = styled.div`
  flex: 1;
  background-color: var(--gray-600);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  min-width: 70rem;
`;

export const Header = styled.div`
  background-color: var(--gray-700);
  padding: 53px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
export const RocketLogo = styled.div`
  margin-right: 0.75rem;
`;
export const TodoLogo = styled.div``;

export const Body = styled.div`
  flex: 1;
  color: var(--white);
  max-width: 70rem;
  min-height: 100vh;
`;

export const ContainerBody = styled.div``;

export const Form = styled.div`
  justify-content: center;
  display: flex;
  margin-top: -1.7rem;
  margin-bottom: 4rem;
  flex-direction: row;
`;

export const Input = styled.input`
  background-color: var(--gray-500);
  color: var(--gray-300);
  font-weight: 400;
  line-height: 22.4px;
  word-wrap: break-word;
  border: 0;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-right: 8px;
`;
export const AddTask = styled.button`
  background-color: var(--blue-dark);
  color: #fff;
  font-weight: 700;
  font-size: 14px;

  border-radius: 8px;
  border: 0;

  cursor: pointer;

  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextTask = styled.span`
  margin-right: 8px;
`;

export const ContainerCountTasks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CreatedTasks = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--blue);
  flex-direction: row;
  display: flex;
`;
export const FinishedTasks = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--purple);
  flex-direction: row;
  display: flex;
`;

export const CountCreatedTasks = styled.div`
  color: var(--white);
  background-color: var(--gray-400);
  padding: 2px 8px;
  margin-left: 8px;
  border-radius: 999px;
`;
export const CountFinishedTasks = styled.div`
  color: var(--white);
  background-color: var(--gray-400);
  padding: 2px 8px;
  margin-left: 8px;
  border-radius: 999px;
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTask = styled.div`
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  padding: 16px;
  margin-top: 24px;
  height: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }

  p {
    width: 100%;
    padding-left: 12px;
  }
`;

export const CheckTask = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const ItemTaskDone = styled.p`
  text-decoration: line-through;
  color: var(--gray-300);
`;
