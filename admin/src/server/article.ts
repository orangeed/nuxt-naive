import request from "../utils/request";
import { ArticleList, CreateActicle } from "../types/server/index.type";

// 获取文章列表
export const articleList = (params: ArticleList): Promise<any> => {
  return request({
    url: "/article/articleList",
    method: "GET",
    params,
  });
};

// 保存文章
export const createActicle = (data: CreateActicle): Promise<any> => {
  return request({
    url: "/article/createActicle",
    method: "POST",
    data,
  });
};
