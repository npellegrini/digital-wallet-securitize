import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface IWalletModelAttributes {
	idWallet?: number;
	address: string;
	firstTransaction: Date;
	isFavourite: boolean;
	dateCreated?: Date;
}

@Entity()
export class Wallets {

	@PrimaryGeneratedColumn()
	idWallet: number;

	@Column({ type: "varchar", length: 42 })
	address: string;

	@Column({ type: "date" })
	firstTransaction: Date;

	@Column({ type: "boolean" })
	isFavourite: boolean;

	@Column({ type: "timestamp" })
	dateCreated: Date;

}


