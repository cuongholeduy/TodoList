import { useState } from "react"
import styles from "./taskInput.module.scss"
import { Todo } from "../../@types/todo.type"

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

export default function TaskInput({ addTodo, currentTodo, editTodo, finishEditTodo }: TaskInputProps) {
  const [name, setName] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName("")
    } else {
      addTodo(name)
      setName("")
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTodo) {
      editTodo(event.target.value)
    } else {
      setName(event.target.value)
    }
  }

  return (
    <div className="mb-2">
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="caption goes here"
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type="submit">{currentTodo ? "✔️" : "➕"}</button>
      </form>
    </div>
  )
}
