import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardInputEditable from "./RateWallet";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { IWallet } from "../../types/wallet.type";
import { useAppDispatch, useAppSelector } from '../../hooks/useStateManagment';
import { getWalletBalance, updateWalletBalance } from "../../store/wallets/wallet.action";
import { moreThan1Year } from '../../helpers/dates';

export const Wallet = ({ wallet }: { wallet: IWallet }) => {
    const dispatch = useAppDispatch();
    const { rates } = useAppSelector(state => state.rate)

    useEffect(() => {

        dispatch(getWalletBalance(wallet.address))

        return () => {

        }
    }, [dispatch])
    const handleFavourite = (address:string, isFavourite: boolean) => {
        dispatch(updateWalletBalance(address, isFavourite))
    }
    const isOld = moreThan1Year(wallet.firstTransaction)
    const isOldBackground = cn({ "danger": isOld }, { "success": !isOld })
    const titleWallet = isOld ? "Wallet is old": "Wallet is new"

    const favouriteWallet = wallet.isFavourite ? <span className={"is-favourite"} onClick={() => handleFavourite(wallet.address, !wallet.isFavourite)} ><FontAwesomeIcon icon={faStar}/></span>: <span onClick={() => handleFavourite(wallet.address, !wallet.isFavourite)} className={"is-favourite"}><FontAwesomeIcon icon={faStarHalfStroke}/></span>
    
    return (
        <Row>
            <Card className='p-1 mb-3'>
                <Row>
                    <Col>
                        <Alert key={isOldBackground} variant={isOldBackground}>{titleWallet}</Alert>
                        <div className='favourite-container'>
                            {favouriteWallet}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <CardInputEditable
                        balance={wallet.balanceWei}
                        rates={rates}
                    />
                </Row>
            </Card>
        </Row>
    )
}




