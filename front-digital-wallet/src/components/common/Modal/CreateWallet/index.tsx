import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default ({ show, handleClose, getInformationForm }: { show: boolean, handleClose: () => void, getInformationForm: (walletAddress: string) => void }) => {
    const walletRef = useRef<any>(null)

    const getInformation = () =>{
        if (walletRef) {
            const walletAddress = walletRef.current.value
            getInformationForm(walletAddress)
        }
        handleClose()
    } 

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Wallet address</Form.Label>
                            <Form.Control type="text" placeholder="Enter wallet address" ref={walletRef}/>
                            <Form.Text className="text-muted">
                                We'll never share your wallet address with anyone else.
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={getInformation}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

