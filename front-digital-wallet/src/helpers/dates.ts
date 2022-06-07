import moment from "moment"
export const moreThan1Year = (date:Date) => { 
    let today = moment();
    let firstTransaction = moment(date);

    let diffDias = (today.diff(firstTransaction, 'days'))
    
    return diffDias > 365
}