import { reactive, toRefs } from "vue"
import { Table } from "../types/hooks/useTable.type"
/**
 * @description table 页面表格操作方法封装
 * @param {Function} api 获取表格数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * */
export const useTable = (api: (params?: any) => Promise<any>, initParam: object = {}) => {
  const state = reactive<Table.TableStateProps>({
    // 表格数据
    tableData: [],
    // 分页数据
    pagination: {
      // 当前页数
      pageNum: 1,
      // 每页显示条数
      pageSize: 10,
      // 总条数
      total: 0
    },
    // 总参数(包含分页和查询参数)
    totalParam: {}
  })

  // 获取表格数据
  const _getTableData = () => {
    return new Promise((resolve) => {
      // 合并参数
      Object.assign(state.totalParam, initParam, {
        pageNum: state.pagination.pageNum,
        pageSize: state.pagination.pageSize
      })
      api(state.totalParam).then((res) => {
        // console.log(res);
        state.tableData = res.data
        resolve(res.data)
      })
    })
  }

  // 搜索
  const _search = (val?: object) => {
    return new Promise(async (resolve) => {
      state.pagination.pageNum = 1
      Object.assign(
        state.totalParam,
        {
          pageNum: state.pagination.pageNum,
          pageSize: state.pagination.pageSize
        },
        val
      )
      const result: any = await _getTableData()
      resolve(result)
    })
  }

  // 重置
  const _reset = () => {
    return new Promise(async (resolve) => {
      state.pagination.pageNum = 1
      state.totalParam = {}
      Object.assign(state.totalParam, {
        pageNum: state.pagination.pageNum,
        pageSize: state.pagination.pageSize
      })
      const result: any = await _getTableData()
      resolve(result)
    })
  }

  // 翻页
  const _sizeChange = (val: number) => {
    return new Promise(async (resolve) => {
      state.pagination.pageSize = val
      const result: any = await _getTableData()
      resolve(result)
    })
  }

  const _currentChange = (val: number) => {
    return new Promise(async (resolve) => {
      state.pagination.pageNum = val
      const result: any = await _getTableData()
      resolve(result)
    })
  }

  return {
    ...toRefs(state),
    _getTableData,
    _search,
    _reset,
    _sizeChange,
    _currentChange
  }
}
