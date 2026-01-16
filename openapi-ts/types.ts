export interface paths {
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** AppController_getHello */
        get: operations["AppController_getHello"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取所有 Todo 列表 */
        get: operations["TodoController_findAll"];
        put?: never;
        /** 创建新的 Todo */
        post: operations["TodoController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 根据 ID 获取单个 Todo */
        get: operations["TodoController_findOne"];
        put?: never;
        post?: never;
        /** 删除 Todo */
        delete: operations["TodoController_remove"];
        options?: never;
        head?: never;
        /** 更新 Todo */
        patch: operations["TodoController_update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateTodoDto: {
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
        };
        UpdateTodoDto: {
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
        };
        Todo: {
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
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AppController_getHello: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TodoController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 返回所有 Todo 列表 */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"][];
                };
            };
        };
    };
    TodoController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTodoDto"];
            };
        };
        responses: {
            /** @description Todo 创建成功 */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
        };
    };
    TodoController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Todo ID
                 * @example 0
                 */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 返回指定的 Todo */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Todo 不存在 */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TodoController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Todo ID
                 * @example 0
                 */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Todo 删除成功 */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Todo 不存在 */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TodoController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Todo ID
                 * @example 0
                 */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTodoDto"];
            };
        };
        responses: {
            /** @description Todo 更新成功 */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Todo 不存在 */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}