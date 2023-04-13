import React, { useEffect, useState } from "react";

function Api() {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((midul) => {
        setTodo(midul);
        console.log(todos);
      });
  }, []);
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return <><h1 key={todo.id}>{todo.title}</h1>
          <h1 key={todo.id}>{todo.id}</h1>
          </>
        })}
    </div>
  );
}

export default Api;

