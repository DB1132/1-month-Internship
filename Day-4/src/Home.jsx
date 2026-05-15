import React from 'react'
import { Link } from 'react-router'         

export default function Home() {
  return (
    <div>
      <Link to={"api1"}>API - 1(jsonplaceholder)</Link>
      <Link to={"api1"}>API -2 (Weather)</Link>
    </div>
  )
}
