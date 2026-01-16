/** 原始 schema 名称: "CreateTodoDto"*/
export interface CreateTodoDto {
    /**
     * @description Todo 标题
     * @example 学习 NestJS
     */
    title: string;
    /**
     * @description Todo 描述
     * @example 完成 todolist demo 开发
     */
    description?: string;
}

/** 原始 schema 名称: "UpdateTodoDto"*/
export interface UpdateTodoDto {
    /**
     * @description Todo 标题
     * @example 学习 NestJS
     */
    title?: string;
    /**
     * @description Todo 描述
     * @example 完成 todolist demo 开发
     */
    description?: string;
    /**
     * @description 是否完成
     * @example true
     */
    completed?: boolean;
}

/** 原始 schema 名称: "Todo"*/
export interface Todo {
    /**
     * @description Todo ID
     * @example 1
     */
    id: number;
    /**
     * @description Todo 标题
     * @example 学习 NestJS
     */
    title: string;
    /**
     * @description Todo 描述
     * @example 完成 todolist demo 开发
     */
    description?: string;
    /**
     * @description 是否完成
     * @example false
     */
    completed: boolean;
    /**
     * Format: date-time
     * @description 创建时间
     * @example 2024-01-15T10:00:00.000Z
     */
    createdAt: string;
    /**
     * Format: date-time
     * @description 更新时间
     * @example 2024-01-15T10:00:00.000Z
     */
    updatedAt: string;
}