/*
 * @Author: orange
 * @Date: 2022-11-25 13:35:22
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 13:39:23
 * @FilePath: \nuxt-naive\admin\src\server\interface.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
export interface Login {
  username: string
  password: string
}

export interface ProjectListAnalyse {
  time: string
}

export interface ArticleList {
  current: number
  pageSize: number
  articleName: string
  beginTime: string
  endTime: string
}

export interface CreateActicle {
  title: string
  author: string
  tags: string[]
  content: string
  img: string
}
