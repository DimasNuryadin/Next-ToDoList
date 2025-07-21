"use client"

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/store/todoSlice";
import { RootState } from "@/store/store";

export default function Home() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

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
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gray-50 rounded px-3 py-2 mb-2"
            >
              {/* <span>{todo}</span>
              <div>
                <button
                  className="text-green-500 hover:text-green-700 mr-4"
                  aria-label="Edit"
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeTodo(idx)}
                  aria-label="Hapus"
                >
                  Hapus
                </button>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}