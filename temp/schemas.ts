export interface paths {
   "/auth/changeCompany": {
          parameters: {
              query?: never;
              header?: never;
              path?: never;
              cookie?: never;
          };
          get?: never;
          put?: never;
          /** 切换企业 */
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
                      "application/json": components["schemas"]["ChangeCompanyRO"];
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
                           *         "accessToken": "",
                           *         "errorTimes": 0,
                           *         "passwordState": 0
                           *       },
                           *       "message": "",
                           *       "tid": ""
                           *     }
                           */
                          "application/json": components["schemas"]["ServiceResultLoginResultVO"];
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
