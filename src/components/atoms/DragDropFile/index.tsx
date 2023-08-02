import { useRef } from 'react'
import * as style from './style'

const DragDropFile = () => {
  const ref = useRef<any>()

  const handleDropHandler = (e:any) => {
    e.preventDefault();

    console.log("File(s) dropped");

    const fileContent = e.dataTransfer.files[0]
    console.log('handleDropHandler - fileContent', fileContent)
  }

  const handleDragOverHandler = (ev:any) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  const handleChangeInput = (e:any) => {
    const file = e.target.files[0]
    console.log('handleChangeInput', {file})
  }
  return (
    <style.Content
      onDrop={handleDropHandler}
      onDragOver={handleDragOverHandler}
    >
      <input
        id="input-file"
        type="file"
        ref={ref}
        onChange={handleChangeInput}
        hidden
      />
      <style.Container
        htmlFor="input-file"
        onChange={(e) => console.log(e, 'label')}
      >
        <p>Upload Image</p>
      </style.Container>
    </style.Content>
  )
}
export default DragDropFile