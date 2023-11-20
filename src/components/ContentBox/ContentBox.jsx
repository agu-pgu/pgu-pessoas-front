import React from 'react'
import './ContentBox.scss'

export default function ContentBox({content}) {
  return (
    <div className="content-box">
    <p>{content ? content : "Não há nada"}</p>
  </div>
  )
}
