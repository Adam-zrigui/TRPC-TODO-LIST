"use client"
import React, { Key, useState } from 'react'
import { trpc } from '../_trpc/client'



export default function List() {
  const getTodo = trpc.getTodo.useQuery()
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => getTodo.refetch()
  })
  const [Content, setContent] = useState("")
  return (
    <div>
    <label htmlFor="content">Content</label>
<input type="text" id="content" className="text-black" onChange={(e) => setContent(e.target.value)} />
 <button onClick={async () => {
  if (Content.length) {
    addTodo.mutate(Content)
    setContent("")
  }
 }}>add todo</button>
 
 <ul>
  {getTodo.data?.map((todo) => {return <li key={todo.id}>{todo.content}</li>} )}
 </ul>
    </div>
  )
}