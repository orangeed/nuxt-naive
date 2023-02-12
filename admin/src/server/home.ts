import request from "../utils/request";
import { ProjectListAnalyse } from "../types/server/index.type";

// 获取首页的项目列表
export const getHomeProjectList = (): Promise<any> => {
  return request({
    url: "/home/getProjectList",
    method: "GET",
  });
};

// 获取项目访问量数据统计
export const getProjectListAnalyse = (
  params: ProjectListAnalyse
): Promise<any> => {
  return request({
    url: "/home/projectListAnalyse",
    method: "GET",
    params,
  });
};
