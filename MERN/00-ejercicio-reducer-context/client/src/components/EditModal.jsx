import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const EditModal = ({ show, handleCloseModal, student }) => {
    const { id, studentName, studentAge } = student;
    console.log('Student: ', ) 
    const onEdit = ( id ) => {
        console.log( 'Updating....', { id } )
    }
    

    return (
        <>
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <Form.Group>
                            <Form.control
                                className="mb-3"
                                type="text"
                                value={ studentName }
                            />
                            <Form.control
                                className="mb-3"
                                type="number "
                                value={ studentAge }
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
