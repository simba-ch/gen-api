export interface components {
    schemas: {
        0: {
            /** @description 是否全部权限 */
            allPermissionFlag?: boolean;
            /** @description 人ID */
            userIdList?: number[];
            /** @description 部门ID */
            deptIdList?: number[];
        };
        "ServiceResult?": {
            /** @description 业务状态码 */
            code?: string;
            /** @description 业务成功标记 */
            success?: boolean;
            /** @description 主数据 */
            data?: null;
            /** @description 业务状态消息 */
            message?: string;
            /** @description trace id */
            tid?: string;
        };
        StaffBaseInfo: {
            /**
             * Format: int64
             * @description 员工ID
             */
            staffNo?: number;
            /** @description 员工工号 */
            staffNumber?: string;
            /** @description 员工姓名 */
            staffName?: string;
            /** @description 所属部门 */
            deptName?: string;
            /** @description 所属岗位 */
            positionName?: string;
            /**
             * Format: int64
             * @description 考勤组ID
             */
            groupId?: number;
            /** @description 考勤组名称 */
            groupName?: string;
            /**
             * @description 考勤组类型
             * @enum {integer}
             */
            groupType?: never;
        };

    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}