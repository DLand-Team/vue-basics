import {http} from "@/http";


export interface TableDataParams {
    pageNum: number;
    pageSize: number;
    name: string;
}

export const fetchTableData = async (params: TableDataParams) => {
    const res: {
        date: string;
        name: string;
        address: string;
    }[] = await http.post('/getTableData', params);
    return res;
}