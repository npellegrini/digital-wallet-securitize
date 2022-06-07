
import { Wallet } from "../Wallet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useStateManagment";
import { addWallet } from "../../store/wallets/wallet.action";
import { useState } from "react";
import Modal from "../common/Modal/CreateWallet/index";

export default () => {
    const dispatch = useAppDispatch();
    const { wallets } = useAppSelector(state => state.wallet)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getInformationForm = (walletAddress : string) => {
        dispatch(addWallet(walletAddress))
    }

    return (<>
        <Container>
            <Row>
                <Col>
                    <Row className="mb-3">
                        <div className="p-0 d-flex justify-content-end">
                            <Button variant="primary" onClick={handleShow} >Add new wallet</Button>
                        </div>
                    </Row>
                    {wallets.map(wallet => <Wallet wallet={wallet} key={wallet.address} />)}
                    <Modal 
                        show={show}
                        handleClose={handleClose}
                        getInformationForm={getInformationForm}
                    />
                </Col>
            </Row>
        </Container>
    </>)
}