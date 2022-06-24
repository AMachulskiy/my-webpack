import React from "react"

interface IseProps {
  color: string
}

const Se: React.FC<IseProps> = ({color}) => {
  return (
    <div id="root" className="first" style={{color}}>Мой первый РЕАКТ tsx компонент!</div>
  )
}

export default Se