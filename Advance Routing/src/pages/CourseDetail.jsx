import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {

    const params = useParams()

  return (
    <div>
        <h1>{params.id} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail