/*
 * @Author: orange
 * @Date: 2022-11-29 20:58:02
 * @LastEditors: orange
 * @LastEditTime: 2022-11-29 22:09:24
 * @FilePath: \nuxt-naive\admin\src\views\dashboard\interface.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
export interface TimeArr {
  label: string
  range: number
}

export interface Weather {
  updateTime: string // 更新时间
  temp: string // 温度
  feelsLike: string //体感温度
  icon: string // 天气图标
  text: string // 天气状况
  humidity: string // 相对湿度
  vis: string // 能见度
}

export interface ProjectList {
  projectName: string
  projectId: string
}

export interface Dashboard {
  weather: Weather
}

export interface TodoList {
  label: string
  status: number // 1todo, 2doing, 3done
  deleteRight: number
}
