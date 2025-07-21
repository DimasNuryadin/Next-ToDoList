"use client"

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeTodo, toggleTodo } from "@/store/todoSlice";

export default function Home() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">To-Do List</h1>
        <div className="flex justify-center mb-4">
          <Link
            href="/add"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Tambah
          </Link>
        </div>
        <ul>
          {todos.length === 0 && (
            <li className="text-gray-400 text-center py-4">Belum ada tugas</li>
          )}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 rounded px-3 py-2 mb-2"
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {todo.text}
              </span>
              <div>
                <Link
                  href={`/edit/${todo.id}`}
                  className="text-green-500 hover:text-green-700 mr-4"
                  aria-label="Edit"
                >
                  Edit
                </Link>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  aria-label="Hapus"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}