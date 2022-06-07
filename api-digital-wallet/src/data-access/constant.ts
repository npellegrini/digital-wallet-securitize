import { FindOptionsOrderValue } from "typeorm";

type IOrderBy = {
    [key:string] : FindOptionsOrderValue;
}
export const ORDER_BY:IOrderBy = {
    ASC: "ASC",
    DESC: "DESC",

}