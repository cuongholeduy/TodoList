import { Todo } from "../../@types/todo.type"
import styles from "./taskList.module.scss"

interface TaskListProps {
  doneTaskList: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}

export default function TaskList({ doneTaskList, todos, handleDoneTodo, startEditTodo }: TaskListProps) {
  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    handleDoneTodo(id, event.target.checked)
  }

  return (
    <div className="mb-2">
      <h2 className={styles.title}>{doneTaskList ? "Completed" : "Not Completed"}</h2>
      {todos.map((todo) => {
        return (
          <div className={styles.task} key={todo.id}>
            <input
              type="checkbox"
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={(event) => onChangeCheckbox(event, todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ""}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                🖌️
              </button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
