import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormSelect from 'react-bootstrap/FormSelect';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IRate } from "../../types/rate.type";
import { getCurrencyFormat, weiToEth } from "../../helpers/currency";

export interface IWalletBalance {
    balance: string;
    rates: IRate
}
const RateWallet: React.FC<IWalletBalance> = ({ balance, rates }) => {
    const inputFormRef = useRef<any>(null)
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [rateSelected, setRateSelected] = useState<number>(0);
    const [myOwnRate, setMyOwnRate] = useState<number>(0);
    const editMenuRef = useRef(null);

    const listener = useCallback(
        (event: MouseEvent) => {
            const element: any = editMenuRef.current;

            if (element && element.contains(event.target)) {
                return;
            }
            setIsEditMode(false);
        }, [])
    const balanceConverted = useMemo(() => {
        const ethValue = weiToEth(balance)
        return parseFloat((ethValue * rateSelected).toFixed(2));
    }, [rateSelected, balance])

    useEffect(() => {
        if (balance) {
            setRateSelected(parseFloat(rates.USD))
        }
    }, [balance]);
    useEffect(() => {
        if (isEditMode) {
            inputFormRef.current.focus();
        }
    }, [isEditMode]);
    useEffect(() => {
        document.addEventListener('click', listener);

        return () => document.removeEventListener('click', listener);
    }, [listener]);

    const setEditMode = () => {
        setIsEditMode(currState => !currState)
        setMyOwnRate(rateSelected)
    }
    const cancelEditMode = () => {
        setIsEditMode(currState => !currState)
    }
    const saveEditMode = () => {
        setIsEditMode(currState => !currState)
        setRateSelected(inputFormRef.current.value)
    }

    const onChangeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyOwnRate(parseFloat(e.target.value))
    }

    const handleRates = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRateSelected(parseFloat(e.target.value))
    }

    const showEditOption = isEditMode ? 
        (<><span className="icon-cancel pr-1" onClick={() => cancelEditMode()}><FontAwesomeIcon icon={faXmark} /></span><span className="icon-save" onClick={() => saveEditMode()}><FontAwesomeIcon icon={faCheck}/></span></>) 
        : (<span className="icon-edit" onClick={() => setEditMode()}><FontAwesomeIcon icon={faEdit} /></span>);

    return (
        <>
            <Col>
                <div ref={editMenuRef} className='edit-confirm-state-container'>
                    <Card className='card-container'>
                        <div className='header-option-container'>
                            {showEditOption}
                        </div>
                        <div className='main-option-container'>
                            {(!isEditMode) ? <span className="rate-selected">{getCurrencyFormat(rateSelected)}</span> :
                                <Form.Control
                                    ref={inputFormRef}
                                    type="number"
                                    id="inputPassword5"
                                    value={myOwnRate}
                                    onChange={(e) => onChangeRate(e as React.ChangeEvent<HTMLInputElement>)}
                                    disabled={!isEditMode}
                                />}
                        </div>
                    </Card>
                </div>
            </Col>
            <Col>
                <Card >
                    <Card.Body>
                        <FormSelect onChange={(e) => handleRates(e)}>
                            {Object.entries(rates).map(([value, key]) => <option value={key} key={value}>{value}</option>)}
                        </FormSelect>
                        <Card.Title> {(isNaN(balanceConverted)) ? "-" : `${getCurrencyFormat(balanceConverted)}`} </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )
}
export default RateWallet
// export default EditConfirmState(RateWallet)