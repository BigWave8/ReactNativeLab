import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import { RootStackParamList } from "../types/types";
import EditIcon from "../../assets/Edit.svg";
import TodoItem from "../components/TodoItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppSelector } from "../redux/hooks";
import { withAddButton } from "../hocs/withAddButton";

type CategoryNavProps = NativeStackScreenProps<RootStackParamList, "Category">;

interface IProps extends CategoryNavProps {
  isAddButtonPressed: boolean;
}

const Category = ({ route, isAddButtonPressed }: IProps) => {
  const { listId } = route.params;

  const todos = useAppSelector((state) => state.todos);
  const lists = useAppSelector((state) => state.lists);

  const chosenList = lists.find((list) => list.id === listId);
  const todosInList = todos.filter((todo) => todo.categoryId === listId);

  if (chosenList === undefined) return <View />;
  return (
    <View style={[styles.container, { backgroundColor: chosenList.color }]}>
      <Header
        backgroundColor={chosenList.color}
        text={chosenList.name}
        taskCount={chosenList.taskCount}
        RightIcon={EditIcon}
      />
      <ScrollView style={styles.todosContainer}>
        {todosInList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todoText={todo.todoText}
            isCompleted={todo.isCompleted}
            dayTimeStamp={todo.dayTimeStamp}
            hourTimeStamp={todo.hourTimeStamp}
            categoryId={todo.categoryId}
            backgroundColor={chosenList.color}
            isAddButtonPressed={isAddButtonPressed}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default withAddButton(Category);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  todosContainer: { paddingLeft: 10, marginBottom: 20 },
});
