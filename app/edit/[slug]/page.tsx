"use client"

import { editTodo } from "@/store/todoSlice";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { useDispatch } from "react-redux";

export default function Edit({ params }: Readonly<{ params: Promise<{ slug: number }> }>) {
  const { slug } = use(params);

  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleEdit = () => {
    if (input.trim()) {
      dispatch(editTodo({ id: slug, newText: input }));
      router.push("/")
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Tambah tugas..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}