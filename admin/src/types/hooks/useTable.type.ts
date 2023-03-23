export namespace Table {
  export interface Pagination {
    pageNum: number;
    pageSize: number;
    total?: number;
  }
  export interface TableStateProps {
    tableData: any[];
    pagination: Pagination;
    totalParam: {
      [key: string]: any;
    };
    icon?: {
      [key: string]: any;
    };
  }

}
