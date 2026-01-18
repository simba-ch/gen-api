/** 原始 schema 名称: "CreateTodoDto"*/
export interface CreateTodoDto {
    title: string; // Todo 标题
    description?: string; // Todo 描述
}

/** 原始 schema 名称: "UpdateTodoDto"*/
export interface UpdateTodoDto {
    title?: string; // Todo 标题
    description?: string; // Todo 描述
    completed?: boolean; // 是否完成
}

/** 原始 schema 名称: "Todo"*/
export interface Todo {
    id: number; // Todo ID
    title: string; // Todo 标题
    /**
    * Format: int64
    * @description 职位ID
    */
    description?: string;
    completed: boolean; // 是否完成
    createdAt: string; // 创建时间
    updatedAt: string; // 更新时间
}