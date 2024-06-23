import { Button, Form, Modal, Alert, Row, Col, Select } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const nombre = useRef();
  const marca = useRef();
  const startPrice = useRef();
   const itemImage = useRef(); 
  const para = useRef();
  const talla = useRef();
  const color = useRef();
  const tela = useRef();
  const piezas = useRef();

  const { currentUser } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

     if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError("por favor use una imagen valida (png, jpeg, jpg)");
    } 

    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: currentUser.email,
      nombre: nombre.current.value,
      marca: marca.current.value,
      curPrice: startPrice.current.value,
      duration: dueDate,
      talla: talla.current.value,
      color: color.current.value,
      itemImage: itemImage.current.files[0], 
      para: para.current.value,
      tela: tela.current.value,
      piezas: piezas.current.value,
      completed: false
    };

    setAuction(newAuction);
    closeForm();
  };

  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">
        <div onClick={openForm} className="btn btn-primary mx-5                 ">
          + Añadir a Inventario
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm} style={{width: '96%', marginLeft: '1%'}} >
        <form onSubmit={submitForm} style={{backgroundColor:'rgb(222,222,222)'}}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
            <Col className="border mb-5 btn bg-primary mx-2 p-2 text-center text-white">
                
                  {currentUser.email} 
               
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" required ref={nombre} />
                </Form.Group>
              </Col>

              </Row>
              <Row>
            <Col>
                <Form.Label>Para</Form.Label>
                <Form.Control as="select" multiple={false} ref={para}>
                  <option value="hombre">hombre</option>
                  <option value="mujer">mujer</option>
                </Form.Control >
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" required ref={startPrice} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Marca</Form.Label>
                  <Form.Control type="text" required ref={marca} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Talla</Form.Label>
                  <Form.Control type="text" required ref={talla} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Color</Form.Label>
                  <Form.Control type="text" required ref={color} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Tela</Form.Label>
                  <Form.Control type="text" required ref={tela} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Piezas</Form.Label>
                  <Form.Control type="number" required ref={piezas} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
              <Form.Label>IMG</Form.Label>
                <Form.Group >
                  <Form.File
                    label="Cargar Foto"
                    custom
                    required
                    ref={itemImage}
                  />
                </Form.Group>
              </Col> 
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
