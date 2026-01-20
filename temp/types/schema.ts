export interface paths {
  "/auth/login/check": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 检查登录名是否存在 */
    post: {
      parameters: {
        query?: never;
        header?: {
          /** @example Bearer {{Token}} */
          authorization?: string;
        };
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["LoginNameCheckRO"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            /**
             * @example {
             *       "code": "",
             *       "success": false,
             *       "data": false,
             *       "message": "",
             *       "tid": ""
             *     }
             */
            "application/json": components["schemas"]["ServiceResultBoolean"];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/login/sms/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 未命名接口 */
    post: {
      parameters: {
        query?: never;
        header?: {
          /** @example Bearer {{Token}} */
          authorization?: string;
        };
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "multipart/form-data": {
            /** @example 18706160555 */
            mobile?: string;
          };
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": Record<string, never>;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/login/sms/validate": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 校验手机验证码 */
    post: {
      parameters: {
        query?: never;
        header?: {
          /** @example Bearer {{Token}} */
          authorization?: string;
        };
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["MobileSmsCodeRO"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            /**
             * @example {
             *       "code": "",
             *       "success": false,
             *       "data": {
             *         "uuid": ""
             *       },
             *       "message": "",
             *       "tid": ""
             *     }
             */
            "application/json": components["schemas"]["ServiceResultValidateSmsCodeVO"];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}


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