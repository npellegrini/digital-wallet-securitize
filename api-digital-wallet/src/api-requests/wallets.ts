import { Axios, AxiosResponse } from "axios";
import config from 'config';

export interface IEtherscanApi {
	getFirstTrasaction: ({ address } : {address: string}) => Promise<AxiosResponse>;
	getBalance: (address : string) => Promise<any>;
}

export const buildEtherscanApi = ({
	issueHttpRequest,
}: {
	issueHttpRequest: Axios;
}): IEtherscanApi => {
	const apiKey = config.get('etherscamApiKey');
	const getFirstTrasaction = async ({ address } : {address: string}) => {
		let url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&apikey=${apiKey}`;
		return issueHttpRequest.get(url);
	};

	const getBalance = async (address: string) => {
		const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
		return issueHttpRequest.get(url);
	};

	return {
		getFirstTrasaction,
		getBalance
	};
};
