import { Input } from 'antd';
import React, { useState } from 'react';
import{Button,Modal} from 'react-bootstrap'
function AddNewMovie({add}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setrate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const handleAdd=()=>{
    let newMovie={title,description,posterUrl,rate};
    add(newMovie);
    setTitle("");
    setDescription("");
    setrate("");
    setPosterUrl("");
    handleClose();


  }
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",padding:20}}>
      <Button  variant="primary" onClick={handleShow}>
       Add New Movie
      </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <div>
            <label>Title</label>
            <Input type="text" placeholder='Enter the title here' onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
            <label>Description</label>
            <Input type="text" placeholder='Enter description here' onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
            <label>Rate</label>
            <Input type="text" placeholder='Enter the rate here' onChange={(e)=>setrate(e.target.value)}/>
            </div>
            <div>
            <label>PosterUrl</label>
            <Input type="text" placeholder='Enter the PosterUrl here' onChange={(e)=>setPosterUrl(e.target.value)}/>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddNewMovie;
