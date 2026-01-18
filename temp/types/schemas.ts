export interface Safe_Type_0 {
    /** @description 是否全部权限 */
    allPermissionFlag?: boolean;
    /** @description 人ID */
    userIdList?: number[];
    /** @description 部门ID */
    deptIdList?: number[];
}

export interface ServiceResultOptional {
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
}

export interface StaffBaseInfo {
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
}

export interface ServiceResult {
    code?: string;
    success?: boolean;
    data?: Record<string, never>;
    message?: string;
    tid?: string;
}

export interface OrgDept {
    /**
     * Format: int64
     * @description 部门ID
     */
    autoNo?: number;
    /** @description 部门名称 */
    name?: string;
    /** @description 部门编码 */
    code?: string;
    /** @description 排序 */
    sortOrder?: number;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    parentDeptId?: number;
    /**
     * Format: int64
     * @description 组织属性ID
     */
    orgId?: number;
    /** @description 部门类型(1-职能部门 2-业务部门 3-生产部门 4-其他) */
    deptType?: number;
    /**
     * Format: int64
     * @description 部门负责人(员工ID)
     */
    responsibleId?: number;
    /**
     * Format: int64
     * @description 成本中心ID
     */
    costId?: number;
    /**
     * Format: int64
     * @description 法律主体ID
     */
    enterpriseSubjectId?: number;
    /**
     * Format: int64
     * @description 职场表ID
     */
    workplaceId?: number;
    /** @description 是否有排班(0-没有 1-有) */
    isSchedual?: number;
    /**
     * Format: int64
     * @description 排班制考勤规则ID
     */
    attendanceRuleId?: number;
    /**
     * Format: int64
     * @description 排班负责人ID
     */
    schedualResponsibleId?: number;
    /**
     * Format: int64
     * @description 排班审核人ID
     */
    schedualAuditId?: number;
    /** @description 部门编制 */
    deptAuthorized?: number;
    /** @description 是否人事部门标记(0-未标记 1-已标记) */
    isHr?: number;
    /** @description 是否已删除：0-未删除，1-已删除 */
    isDeleted?: number;
    /** @description 启用状态(0:不启用; 1:启用) */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /**
     * @description 推荐 Java8+ 时间类型，如需 Date 可替换
     *     创建时间
     */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /**
     * @description 推荐 Java8+ 时间类型，如需 Date 可替换
     *     修改时间
     */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
    /** @description 三方父节点 */
    thirdPId?: string;
    /** @description 三方id */
    thirdId?: string;
    /** @description 三方来源 */
    third?: string;
    /** @description 父部门名称（导入临时用，非数据库字段） */
    parentDeptName?: string;
}

export interface OrgDeptStaff {
    /** @description 唯一标识  staff+autoNo */
    unionKey?: string;
    /**
     * Format: int64
     * @description 员工的主键
     */
    autoNo?: number;
    /** Format: int64 */
    pid?: number;
    /** Format: int64 */
    userId?: number;
    /** @description 员工的姓名 */
    name?: string;
    /** @description 员工头像 */
    pic?: string;
    /** @description 0:男;1:女 */
    userSex?: number;
    /** @description 1 试用期 0 非试用期 */
    trial?: number;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 职位名称 */
    positionName?: string;
    /** @default 2 */
    type: number;
}

export interface SimpleStaffInfoVO {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
}

export interface OrgDeptTreeDeptStaffVO {
    /** @description 唯一标识  dept+autoNo */
    id?: string;
    childrenDept?: OrgDeptTreeDeptStaffVO[];
    /** Format: int64 */
    autoNo?: number;
    /** @description 部门名称 */
    name?: string;
    /** @description 部门编码 */
    code?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    parentDeptId?: number;
    /**
     * Format: int64
     * @description 部门负责人(员工ID)
     */
    responsibleId?: number;
    /** @description 部门负责人姓名 */
    responsibleName?: string;
    /** @description 部门负责人头像 */
    responsiblePic?: string;
    /** @description 负责人岗位 */
    postName?: string;
    /** @description 人数 */
    staffNums?: number;
    /** @description 部门所有成员 包括子部门的成员 */
    sumStaffNums?: number;
    /** @description 部门编制 */
    deptAuthorized?: number;
    /** @description 是否人事部门标记(0-未标记 1-已标记) */
    isHr?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 成本中心ID
     */
    costId?: number;
    /** @description 成本中心 */
    costName?: string;
    /**
     * Format: int64
     * @description 法律主体ID
     */
    enterpriseSubjectId?: number;
    /** @description 法律主体 */
    subjectName?: string;
    /**
     * Format: int64
     * @description 职场表ID
     */
    workplaceId?: number;
    /** @description 职场 */
    workplaceName?: string;
    /** @description 职场 */
    workplaceAddress?: string;
    /**
     * Format: int64
     * @description 部门属性
     */
    orgId?: number;
    /** @description 部门属性名 */
    orgName?: string;
}

export interface OrgDeptsLess {
    /** @description 唯一标识  dept+autoNo */
    unionKey?: string;
    childrenDept?: OrgDeptsLess[];
    /**
     * Format: int64
     * @description 部门的 主键
     */
    autoNo?: number;
    /** Format: int64 */
    pid?: number;
    /** @description 部门的 名称 */
    name?: string;
    /**
     * @description 1
     * @default 1
     */
    type: number;
}

export interface Area {
    code?: string;
    name?: string;
    province?: string;
    city?: string;
    area?: string;
    town?: number;
}

export interface SysPost {
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 部门id
     */
    deptId?: number;
    /**
     * Format: int64
     * @description 序列
     */
    sequenceId?: number;
    /** @description 职位标签ID */
    tagIds?: string;
    /** @description 职位编码 */
    postCode?: string;
    /** @description 职位名称 */
    postName?: string;
    /** @description 显示顺序 */
    postSort?: number;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 职位编制 */
    postNums?: number;
    /** @description 职位年限 */
    postYears?: number;
    /** @description 职责 */
    postResp?: string;
    /** @description 学历 */
    postEdu?: string;
    /** @description 行业 */
    postIndustry?: string;
    /** @description 语言 */
    postLang?: string;
    /** @description 其他要求 */
    postOther?: string;
    /** @description 薪资区间 */
    postFee?: string;
    /**
     * Format: int64
     * @description 默认职级ID
     */
    levelId?: number;
    /** @description 默认职级名称 */
    postLevelName?: string;
    /** @description 序列名称 */
    sequenceName?: string;
    /** @description 职位标签名称 */
    postTagsName?: string;
    /** @description 部门名称 */
    deptName?: string;
    /**
     * @description 是否完善说明书 0 未完善 1 已完善
     * @default 0
     */
    isFull: number;
    /** @description 职位人数 */
    staffCount?: number;
}

export interface CompanyThirdPartyConfig {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 公司ID（关联公司表主键）
     */
    coNo?: number;
    /** @description 三方软件类型：1=钉钉，2=飞书，3=企业微信 */
    thirdPartyType?: number;
    /** @description 三方软件应用Key（如钉钉的AppKey） */
    appKey?: string;
    /** @description 三方软件应用Secret（如钉钉的AppSecret） */
    appSecret?: string;
    /** @description 状态：0=禁用，1=启用 */
    status?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
}

export interface SysLoginDevice {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 租户/公司编号（与用户表一致）
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 关联用户ID
     */
    staffId?: number;
    /** @description 设备名称（如“张三的iPhone”） */
    deviceName?: string;
    /** @description 设备类型（如iPhone、WindowsPC、Chrome浏览器） */
    deviceType?: string;
    /** @description 操作系统及版本（如iOS 16.5、Windows 11） */
    os?: string;
    /** @description 登录IP地址 */
    loginIp?: string;
    /** @description 会话标识（如JWT Token） */
    sessionToken?: string;
    /** @description 登录状态（0：登录中，1：已退出，2：已过期） */
    status?: number;
    /** @description 登录时间 */
    loginTime?: string;
    /** @description Token实效时间（登录状态有效期） */
    tokenExpireTime?: string;
    /** @description 退出时间（status=1时非空） */
    logoutTime?: string;
    /** @description 是否为当前操作设备（1：是，0：否） */
    isCurrent?: number;
    /** @description 记录创建时间 */
    createdTime?: string;
    /** @description 记录更新时间 */
    updatedTime?: string;
}

export interface DynamicMatchFieldMetaData {
    fieldName?: string;
    displayName?: string;
    aliases?: string[];
    options?: string[];
    required?: boolean;
    matchedColumn?: ExcelColumnInfo;
    score?: number;
    autoMatch?: boolean;
    displayValueConverter?: DisplayValueConverterOptional;
    emptyValueSetHandler?: EmptyValueSetHandlerOptional;
}

export interface FieldConfigVO {
    /** @description 分组名称 */
    groupName?: string;
    /** @description 字段列表 */
    fields?: FieldInfo[];
}

export interface UploadResponse {
    fileName?: string;
    url?: string;
}

export interface ExcelTaskInfo {
    taskId?: string;
    type?: string;
}

export interface AppMenuGroupVo {
    groupName?: string;
    /** Format: int64 */
    groupId?: number;
    counts?: number;
}

export interface FieldInfo {
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段分组（入参不传） */
    fieldGroup?: string;
}

export interface ContactVO {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /** @description 部门全路径 */
    deptFullName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    /** @description 职位级别 */
    positionLevelName?: string;
    /** @description 序列 */
    orgName?: string;
}

export interface HrOperLog {
    /**
     * Format: int64
     * @description 日志主键
     */
    operId?: number;
    /** @description 模块标题 */
    title?: string;
    /** @description 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** @description 方法名称 */
    method?: string;
    /** @description 请求方式（GET/POST/PUT/DELETE） */
    requestMethod?: string;
    /** @description 操作类别（0其它 1后台用户 2手机端用户） */
    operatorType?: number;
    /** @description 操作人员 */
    operName?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 请求URL */
    operUrl?: string;
    /** @description 主机地址 */
    operIp?: string;
    /** @description 操作地点 */
    operLocation?: string;
    /** @description 请求参数 */
    operParam?: string;
    /** @description 返回结果 */
    jsonResult?: string;
    /** @description 操作状态（0正常 1异常） */
    status?: number;
    /** @description 错误消息 */
    errorMsg?: string;
    /** @description 操作时间 */
    operTime?: string;
    /**
     * Format: int64
     * @description 消耗时间（毫秒）
     */
    costTime?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 模块类型（ORGDEPT, USER, ROLE 等） */
    keysType?: string;
    /** @description 详细描述（已解析，支持中文变量） */
    description?: string;
    ext1?: string;
    ext2?: string;
    ext3?: string;
}

export interface FieldConfig {
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型（1：文本；2：日期；3：选项；4：枚举；5：附件） */
    fieldType?: number;
    /** @description 字段配置表 */
    itemConfigs?: FieldItemConfig[];
    /** @description 字段可选项 */
    options?: string[];
    /** @description 字段命名空间 */
    namespace?: string;
}

export interface AppraiseItem {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业id
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 考核项描述 */
    description?: string;
    /**
     * Format: int64
     * @description 分组ID
     */
    groupId?: number;
    /** @description 指标属性:量化指标 定性考评 */
    appraiseProperty?: string;
    /**
     * Format: int64
     * @description 评价方式ID
     */
    methodId?: number;
    /**
     * Format: int64
     * @description 评价标准类型ID
     */
    standardTypeId?: number;
    /** @description 得分说明 */
    scoreExp?: string;
    /** @description 结果表示 */
    resultRep?: string;
    /** @description 是否启用：1-启用，0-禁用 */
    isEnabled?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 评分规则类型：1=等级制, 2=区间映射, 3=目标增减分, 4=完成率系数 */
    ruleType?: number;
    /** @description 动态配置字段，存储具体参数 JSON */
    ruleConfig?: string;
    /** @description 创建人名称 */
    createUserName?: string;
    /** @description 创建人部门 */
    createUserDept?: string;
}

export interface AppraiseConfig {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID（对应租户或公司编号）
     */
    coNo?: number;
    /** @description 显示得分 0 不显示  1显示 */
    showScore?: number;
    /** @description 等级 0 不显示  1显示 */
    showGrade?: number;
    /** @description 系数 0 不显示  1显示 */
    showCoefficient?: number;
    /** @description 百分位 0 不显示  1显示 */
    showPercentile?: number;
    /** @description 考核周期JSON格式 */
    cycleConfig?: string;
    /** @description 定性考评 默认配置 */
    ratingConfig?: string;
    /** @description json 通用得分等级映射 */
    scoreConfig?: string;
    /** @description json kpi得分等级映射 */
    kpiConfig?: string;
    /** @description 创建时间 */
    createdAt?: string;
    /** @description 1 显示等级 2 显示描述 3 显示等级+描述 */
    showType?: number;
    /** @description * 0 评分可以超过标准分 1 不可以超过 */
    okrLimit?: number;
    /** @description 1 sabcd 2abcd 3手工打分 */
    okrScore?: number;
    /** @description ORK配置 */
    okrConfig?: string;
    orkConfigList?: RatingConfig[];
    /** @description 最后更新时间 */
    updatedAt?: string;
    cycleConfigList?: CycleConfig[];
    ratingConfigList?: RatingConfig[];
    scoreConfigList?: AppraiseConfigScoreMapping[];
    kpiConfigList?: AppraiseConfigScoreMapping[];
}

export interface FieldDetail {
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型 */
    fieldType?: number;
    /**
     * Format: int64
     * @description 字段排序
     */
    order?: number;
    /** @description 是否必选 */
    selectRequired?: boolean;
    /** @description 是否选中 */
    selected?: boolean;
    /** @description 是否允许导出 */
    exportEnabled?: boolean;
    /** @description 字段可选项 */
    options?: string[];
    /** @description 字段命名空间（system：系统内置字段；custom：自定义字段） */
    namespace?: string;
}

export interface CycleConfig {
    /** @description 名字 */
    name?: string;
    /** @default false */
    checked: boolean;
    from?: string;
    to?: string;
    /** @description 1 月度 2 季度 3 半年度 4 年度 */
    type?: number;
}

export interface CustomFieldConfigItem {
    /** @description 配置项（"SHOW": 可展示性; "EDITABLE": 可编辑性; "REQUIRED": 必填性） */
    item?: string;
    /** @description 是否启用 */
    enabled?: boolean;
}

export interface FieldItemConfig {
    /** @description 配置项（SHOW: 是否可展示; EDITABLE: 可编辑性; REQUIRED: 必填性） */
    item?: string;
    /** @description 是否可配置（入参不传） */
    configurable?: boolean;
    /** @description 指定配置项是否勾选（如：员工档案字段是否必填） */
    enabled?: boolean;
}

export interface ServiceResultList {
    code?: string;
    success?: boolean;
    data?: Record<string, never>;
    message?: string;
    tid?: string;
}

export interface ServiceResultListString {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: string[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface FieldValue {
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段值 */
    value?: string;
}

export interface AppraiseTableVO {
    /**
     * Format: int64
     * @description 主键 ID
     */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 类型（1：月度，2：季度，3：半年度，4：年度） */
    type?: number;
    /** @description 年份 */
    year?: number;
    /** @description 月份 */
    month?: number;
    /** @description 考核周期-结束月份 */
    endMonth?: number;
    /** @description 考核周期-结束年份 */
    endYear?: number;
    /** @description 考核有效期 */
    expirDate?: string;
    /** @description 可以开始考试的时间 */
    examTime?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 涉及人员数 */
    staffNums?: number;
    /** @description 创建时间 */
    createTime?: string;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
    userName?: string;
    deptName?: string;
    /** @description 完成人数 */
    doneUsers?: number;
}

export interface DocFile {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 文件的上级ID, 与Id关联;
     */
    parentId?: number;
    /**
     * Format: int64
     * @description bigint  文件上传人
     */
    staffNo?: number;
    /**
     * Format: int64
     * @description bigint  关联目录ID,  与 doc_dir.id 关联
     */
    dirId?: number;
    /** @description tinyint(1)  类型 0:文件 1:folder(文件夹) */
    type?: number;
    /** @description varchar(100)  文件名 */
    fileName?: string;
    /**
     * Format: int64
     * @description bigint  文件大小
     */
    fileSize?: number;
    /** @description varchar(50)  文件类型 */
    fileType?: number;
    /**
     * @description oss的提供商:: 0=本地自建, 1=aliOss, 2=tenantOss,....
     *     有可能不同的时间线使用不同的oss，甚至有可能同一个时间存在多种oss
     */
    ossProvider?: string;
    /** @description varchar(255)  文件路径 */
    url?: string;
    /** @description oss的删除标记 0:未删/1:已删除 */
    ossDeleted?: number;
    /** @description longtext  富文本内容 */
    info?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    powers?: string;
}

export interface AppraiseStaffValue {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** Format: int64 */
    targetId?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 指标ID
     */
    itemId?: number;
    /** @description 月份 */
    month?: number;
    /**
     * Format: int64
     * @description 上级ID 第一级就是0
     */
    leaderId?: number;
    /** @description 年份 */
    year?: number;
    /** @description 目标值（decimal 映射为 BigDecimal，避免精度丢失） */
    target?: number;
    /** @description 单位 */
    unit?: string;
    /** @description 备注 */
    remark?: string;
    createTime?: string;
    /** @description 完成值 */
    completeValue?: number;
    /** Format: int64 */
    completeUser?: number;
}

export interface PositionVO {
    /** @description 职位名称 */
    positionName?: string;
    /**
     * Format: int64
     * @description 职位ID
     */
    positionId?: number;
    /** @description 职位关联职级 */
    postLevels?: SysPostLevelBindData[];
    /**
     * Format: int64
     * @description 序列ID
     */
    sequenceId?: number;
    /** @description 序列名称 */
    sequenceName?: string;
}

export interface StaffDashboardReportVO {
    /** @description 在职人数 */
    inService?: number;
    /** @description 用工属性 - 正式 */
    fullTimeCount?: number;
    /** @description 用工属性 - 实习 */
    internCount?: number;
    /** @description 用工属性 - 其它 */
    otherCount?: number;
    /** @description 试用期 */
    probationCount?: number;
    /** @description 已转正 */
    conversionCount?: number;
    /** @description 已离职 */
    resignation?: number;
    /** @description 待签合同 */
    contractToBeSigned?: number;
    /** @description 合同到期 */
    contractExpired?: number;
}

export interface ReturnTString {
    code?: number;
    msg?: string;
    content?: string;
}

export interface ReturnTOptional {
    code?: number;
    msg?: string;
    content?: null;
}

export interface DocNoticeType {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 父ID
     */
    parentId?: number;
    /** @description 分类层级数字 */
    level?: number;
    /** @description 分类名称 */
    name?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /**
     * Format: int64
     * @description 待阅读文章数量
     */
    waitReadCnt?: number;
    /**
     * Format: int64
     * @description 文章数量(总)
     */
    allCnt?: number;
}

export interface AppraiseProjectStaffVO {
    /** Format: int64 */
    projectId?: number;
    /** Format: int64 */
    staffId?: number;
    /** @description 员工职位名称 */
    title?: string;
    /** @description 1 待发布 2 员工确认中 3 考核人确认中 4 员工自评 5 360评 6 上级评分 7 审核中 8 */
    status?: number;
}

export interface WorkPlanVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 父级工作计划ID
     */
    parentId?: number;
    /**
     * Format: int64
     * @description 分类ID
     */
    classifyId?: number;
    /**
     * Format: int64
     * @description 分类名称
     */
    classifyName?: number;
    /** @description 标题 */
    title?: string;
    /** @description 工作计划来源 */
    source?: string;
    /** @description 进度 */
    progress?: number;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 优先级：1-紧急重要；2-重要不紧急；3-紧急不重要 */
    priority?: number;
    /** @description 状态：0-未执行；1-执行中；2-已完成；3-逾期 */
    status?: number;
    /**
     * Format: int64
     * @description 创建人ID
     */
    createBy?: number;
    /**
     * Format: int64
     * @description 更新人ID
     */
    updateBy?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /**
     * Format: int64
     * @description 企业ID
     */
    tenantId?: number;
}

export interface DailyMonthlyReportAnnotationVO {
    /** @description 主键ID */
    id?: string;
    /** @description 关联日月报ID */
    reportId?: string;
    /** @description 批注内容 */
    content?: string;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人名字 */
    createName?: string;
    /** @description 创建人部门 */
    createDept?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface TaskClassifyVO {
    /** @description 主键ID */
    id?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 类型：0-工作计划；1-日月报；2-会议；3-工单； */
    type?: number;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 子集 */
    children?: TaskClassifyVO[];
}

export interface SmsCodeVO {
    code?: string;
}

export interface CompanySummaryVO {
    /**
     * Format: int64
     * @description 公司ID
     */
    id?: number;
    /** @description 公司名称 */
    name?: string;
    /** @description 公司别名 */
    aliasName?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 是否默认登录企业 */
    isDefault?: boolean;
    /** @description 是否超管 */
    isAdmin?: boolean;
    /** @description 最后登录时间 */
    lastLoginTime?: string;
    /**
     * Format: int64
     * @description 软件版本ID
     */
    softVersionId?: number;
    /** @description 是否可用 */
    enabled?: boolean;
}

export interface UserGroupTreeVO {
    /** @description 主键ID */
    id?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 子集数量 */
    num?: number;
    /** @description 子集 */
    children?: UserGroupTreeVO[];
}

export interface DataPermissionVO {
    /** @description 主键ID */
    id?: string;
    /** @description 名称 */
    name?: string;
    /** @description 查看人选择器ID */
    userSelectionId?: string;
    /** @description 被查看人选择器ID */
    viewedUserSelectionId?: string;
    /** @description 查看数据类型：0-全部；1-人事档案；2-绩效数据；3-考勤数据；4-薪酬数据；5-资产数据；6-奖惩数据；7-任务计划清单；8-日月报 */
    type?: number[];
}

export interface AppraiseGradeDistribution {
    /** @description 对应原key，如S、A等 */
    gradeCode?: string;
    /** @description 员工数量，对应原staffNums */
    staffCount?: number;
    /** @description 百分比，对应原per */
    percentage?: string;
    /** @description 差值 */
    diff?: string;
}

export interface AppraiseStaffProjectCycle {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 关联表ID
     */
    tableId?: number;
    /**
     * Format: int64
     * @description 项目ID
     */
    projectId?: number;
    /**
     * Format: int64
     * @description 分组id
     */
    groupId?: number;
    /** @description 考核类型：1=下属考核；2=横向考核 */
    type?: number;
    year?: number;
    /** @description 周期名称 */
    name?: string;
    /** @description 状态：1=处理中；2=处理完成 */
    status?: number;
    /** @description 创建时间 */
    createTime?: string;
}

export interface SysPostLevelBindData {
    /**
     * Format: int64
     * @description 职位ID
     */
    positionId?: number;
    /**
     * Format: int64
     * @description 职级ID
     */
    positionLevelId?: number;
    /** @description 职级名称 */
    levelName?: string;
    /** @description 是否默认职级 */
    defaultLevel?: boolean;
}

export interface TitleNode {
    /** @description 标题唯一ID（自增序号） */
    id?: number;
    /** @description 标题层级（1/2/3） */
    level?: number;
    /** @description 标题内容 */
    content?: string;
    /** @description 新增：标题对应的锚点ID（前端跳转用） */
    anchorId?: string;
}

export interface UserGroupVO {
    /** @description 主键ID */
    id?: string;
    /** @description 选择器ID */
    selectionId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 是否默认创建 */
    defaultCreateFlag?: boolean;
}

export interface DocumentInfoES {
    /**
     * Format: int64
     * @description 文档主键（映射ES的_id，与数据库DocumentInfo的id一致）
     */
    id?: number;
    /**
     * Format: int64
     * @description 公司编号（多租户隔离，非核心但保留）
     */
    coNo?: number;
    /**
     * @description 文档名称 - 核心存入字段（仅保留你的@Field注解支持的属性）
     *     去掉非法的fields属性，彻底解决爆红
     */
    documentName?: string;
    /** @description 富文本内容 - 核心存入字段（仅保留你的@Field注解支持的属性） */
    richText?: string;
    /** @description 辅助字段（语法正确，无爆红） */
    status?: number;
    /** Format: int64 */
    catId?: number;
    highlightedName?: string;
    highlightedContent?: string;
    modifyTime?: string;
    catName?: string;
    staffNameIdPicVO?: StaffNameIdPicVO;
}

export interface ClockWayVO {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /** @description 名称 */
    name?: string;
    /** @description 打卡方式 */
    clockWay?: number;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 区 */
    district?: string;
    /** @description 地址 */
    address?: string;
    /** @description 打卡范围 */
    scope?: number;
    /** @description 是否启用 */
    enabled?: boolean;
    /** @description mac地址 */
    macAddress?: string;
    /** @description 纬度（GCJ-02坐标系） */
    lat?: number;
    /** @description 经度（GCJ-02坐标系） */
    lng?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 最后更新人 */
    updater?: string;
    /**
     * Format: int64
     * @description 关联的员工数
     */
    staffCount?: number;
}

export interface ProjectListVO {
    /** @description 主键ID */
    id?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 负责人姓名 */
    directorName?: string;
    /** @description 负责人职位 */
    directorPosition?: string;
    /** @description 负责人部门名称 */
    directorDeptName?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 描述 */
    desc?: string;
    /** @description 状态: 0-已终止;1-已完成;2-进行中;3-未开始;4-已逾期; */
    status?: number;
    /** @description 进度 */
    process?: number;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 完成时间 */
    finishTime?: string;
    /** @description 创建人 */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建人职位 */
    createByPosition?: string;
    /** @description 创建人部门名称 */
    createByDeptName?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface CompanyTargetValue {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** Format: int64 */
    targetId?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /** @description 月份 */
    month?: number;
    /**
     * Format: int64
     * @description 上级ID 第一级就是0
     */
    leaderId?: number;
    /** @description 年份 */
    year?: number;
    /** @description 目标值（decimal 映射为 BigDecimal，避免精度丢失） */
    target?: number;
    m1?: number;
    m2?: number;
    m3?: number;
    m4?: number;
    m5?: number;
    m6?: number;
    m7?: number;
    m8?: number;
    m9?: number;
    m10?: number;
    m11?: number;
    m12?: number;
    /** @description 单位 */
    unit?: string;
    /** @description 备注 */
    remark?: string;
    createTime?: string;
    /** @description 完成值 */
    completeValue?: number;
    /** Format: int64 */
    completeUser?: number;
    /** @description 1 手工录入 2 向上计算 */
    rule?: number;
    children?: CompanyTargetValue[];
    /** @description 拆解目标合计 */
    disassembledTotal?: number;
    staff?: StaffNameIdPicVO;
    diff?: number;
    old?: CompanyTargetValue;
    logList?: HrOperLog[];
}

export interface TeamEmployeeVO {
    /** @description 员工ID */
    staffNo?: string;
    /** @description 员工姓名 */
    personName?: string;
    /** @description 入职日期 */
    boardDate?: string;
    /** @description 所属部门 */
    deptNo?: string;
    /** @description 司龄（月） */
    joinCompanyDays?: string;
    /** @description 职位 */
    positionNo?: string;
    /** @description 用工属性 */
    staffAttribute?: string;
    /** @description 直属上级 */
    staffLeader?: string;
    /** @description 员工状态 */
    staffStatus?: string;
    /** @description 员工证件照 */
    personalPhoto?: string;
}

export interface MapString {
    key?: string;
}

export interface ShiftBaseInfoVO {
    /** Format: int64 */
    shiftId?: number;
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
}

export interface ServiceResultListOrgDeptTreeDeptStaffVO {
    code?: string;
    success?: boolean;
    data?: OrgDeptTreeDeptStaffVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultListHrmStaffBaseInfo {
    code?: string;
    success?: boolean;
    data?: HrmStaffBaseInfo[];
    message?: string;
    tid?: string;
}

export interface BngRoleDelDTO {
    /**
     * Format: int64
     * @description 账号id
     */
    userId?: number;
    /**
     * Format: int64
     * @description 角色ID
     */
    roleId?: number;
}

export interface AddRoleUserDTO {
    /**
     * Format: int64
     * @description staff对象的 userId
     */
    userId?: number;
    /**
     * Format: int64
     * @description staff的 id
     */
    autoNo?: number;
}

export interface ServiceResultListOrgDeptsLess {
    code?: string;
    success?: boolean;
    data?: OrgDeptsLess[];
    message?: string;
    tid?: string;
}

export interface ServiceResultListArea {
    code?: string;
    success?: boolean;
    /** @description 错误码，0 表示成功，其他都是失败建议 弹窗提示message参数内容）建议当errorCode小于0时请弹出提示后，重新定位到登录界面 */
    errorCode?: number;
    /** @description 提示语 */
    message?: string;
    /** @description 响应内容 */
    data?: Area[];
}

export interface HrmStaffInfoDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /**
     * Format: int64
     * @description bigint(20)  所属部门ID
     */
    deptNo?: number;
}

export interface CompanySyncRecord {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业id
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 关联配置表ID（关联company_third_party_config表的id）
     */
    configId?: number;
    /** @description 同步类型：1=组织架构，2=用户信息，3=考勤数据，4=全部数据 */
    syncType?: number;
    /** @description 1:增量 2:全量覆盖 */
    dataType?: number;
    /** @description 同步状态：0初始化成功 1待数据获取 2数据获取失败 3数据获取成功 -1关闭 4数据保存成功 5 数据保存失败 */
    syncStatus?: number;
    /** @description 同步获取开始时间 */
    syncStartTime?: string;
    /** @description 同步获取结束时间 */
    syncEndTime?: string;
    /** @description 同步获取数据量（如同步100条用户） */
    syncCount?: number;
    /** @description 耗时（毫秒） */
    costTime?: number;
    /** @description 错误信息（失败时记录） */
    errorMsg?: string;
    /** @description 操作人 */
    operator?: string;
    /** @description 查询结果 */
    qrst?: string;
    /** @description 同步记录 */
    rst?: string;
    /** @description 同步状态 */
    syncStatusStr?: string;
}

export interface BatchUpdateDeptDTO {
    deptIds?: number[];
    enabled?: number;
}

export interface QueryExportLogRequest {
    type: string;
    taskId: string;
}

export interface ServiceResultString {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: string;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultListFieldConfigVO {
    code?: string;
    success?: boolean;
    data?: FieldConfigVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultUploadResponse {
    code?: string;
    success?: boolean;
    data?: UploadResponse;
    message?: string;
    tid?: string;
}

export interface ServiceResultExcelTaskInfo {
    code?: string;
    success?: boolean;
    data?: ExcelTaskInfo;
    message?: string;
    tid?: string;
}

export interface ServiceResultListAppMenuGroupVo {
    code?: string;
    success?: boolean;
    data?: AppMenuGroupVo[];
    message?: string;
    tid?: string;
}

export interface StaffOnOffDTO {
    /** Format: int64 */
    menuId?: number;
    /** @description 1 开启 2关闭 */
    type?: number;
}

export interface DrawDeptDTO {
    /**
     * Format: int64
     * @description 当前节点
     */
    currentId?: number;
    /**
     * Format: int64
     * @description 目标节点
     */
    targetId?: number;
    /** @description 1 目标节点前 2 目标节点后 3 拖进目标节点 */
    type?: number;
}

export interface StaffFieldConfigVO {
    /** @description 所属分组 */
    groupIdentity?: string;
    /**
     * Format: int64
     * @description 字段配置ID
     */
    configId?: number;
    /**
     * Format: int64
     * @description 字段ID
     */
    fieldId?: number;
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型（1：文本；2：日期；3：选项；4：枚举；5：附件） */
    fieldType?: number;
    /** @description 字段配置表 */
    configItems?: CustomFieldConfig[];
    /** @description 字段命名空间（system：系统内置字段；custom：自定义字段） */
    namespace?: string;
}

export interface CompanyOnOffDTO {
    /** Format: int64 */
    appId?: number;
    /** @description 1 开启 2关闭 */
    type?: number;
}

export interface ServiceResultListHrOperLog {
    code?: string;
    success?: boolean;
    data?: HrOperLog[];
    message?: string;
    tid?: string;
}

export interface AppraiseConfigForcedRule {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 关联 appraise_config.id，表示属于哪套规则集
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 负责人id
     */
    leaderId?: number;
    /** @description 强制分布组名称，如“销售岗强制分布”、“管理层分布规则”等 */
    groupName?: string;
    /** @description 各等级强制分布比例（JSON格式），如：{"S": 10, "A": 20, "B": 50, "C": 15, "D": 5}，单位为百分比% */
    distribution?: string;
    /** @description 四舍五入规则  1 四舍五入 2 抹0 3 进1 */
    roundingRule?: string;
    /** @description 关联部门和职位集合 json格式 */
    refId?: string;
    refIdSelected?: string;
    /** @description 排序规则 逗号隔开 */
    sortRule?: string;
    /** @description 覆盖人数 */
    staffNums?: number;
    /** @description 覆盖人员列表 */
    staffList?: StaffNameIdPicVO[];
    refIdDetail?: RefIdDetail;
    /** @description 负责人 */
    leader?: StaffNameIdPicVO;
    /** @description 是否覆盖 0 不覆盖 1 覆盖 */
    skiped?: number;
    versionId?: number;
    totalCount?: number;
    /** @description 分布比例详情实体（映射distribution的JSON结构） */
    distributionDetailItemList?: DistributionDetailItem[];
}

export interface StaffFieldVO {
    /** @description 分组名称 */
    groupName?: string;
    /** @description 是否允许添加多个 */
    allowMultiple?: boolean;
    /** @description 字段列表 */
    fields?: FieldDetail[];
}

export interface StaffRosterDataVO {
    /** Format: int64 */
    staffNo?: number;
    fields?: MapString;
}

export interface AppraisePostVO {
    /** @description 树状唯一标识 */
    unionKey?: string;
    /**
     * Format: int64
     * @description 岗位ID（与数据库post_id字段对应）
     */
    autoNo?: number;
    /** @description 是否考核（0：不考核，1：考核；与数据库is_assess字段对应） */
    isAssess?: number;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 考核表 */
    appraiseTableVOList?: AppraiseTableVO1[];
    /** @description 职位名称 */
    name?: string;
    /** @description 人数 */
    staffCount?: number;
    /** @description 涉及被考核人 */
    staffList?: StaffNameIdPicVO[];
    /** @default 2 */
    type: number;
    /** @description 空字符串就是没覆盖 非空字符串就是对应的规则名称 */
    used?: string;
}

export interface FieldValueCreate {
    /** @description 字段名 */
    fieldName: string;
    /** @description 字段值 */
    value?: string;
}

export interface AppraisePostTableItem {
    /**
     * Format: int64
     * @description 考核项ID
     */
    id?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 考核项描述 */
    description?: string;
    /**
     * Format: int64
     * @description 分组
     */
    groupId?: number;
    /** @description 指标属性 */
    appraisePrope?: string;
    /** @description 是否启用：1-启用，0-禁用 */
    isEnabled?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /**
     * Format: int64
     * @description 企业id
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 评分规则类型：1=等级制, 2=区间映射, 3=目标增减分, 4=完成率系数 */
    ruleType?: number;
    /** @description 动态配置字段，存储具体参数 */
    ruleConfig?: string;
    /** @description 1 根据结果匹配得分 2 手工输入得分 */
    scoreType?: number;
    /** @description 得分规则 1 根据结果对应系数 2 根据结果生成系数 3 参考目标值 加减分 */
    scoreRule?: number;
    /** @description 计算公式 展示 */
    formulaExpres?: string;
    /** @description 表达式 用于计算 */
    fe?: string;
    /** Format: int64 */
    tableId?: number;
    weight?: number;
}

export interface AppriasePostTableItemVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业id
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 考核项描述 */
    description?: string;
    /**
     * Format: int64
     * @description 分组ID
     */
    groupId?: number;
    /** @description 指标属性:量化指标 定性考评 */
    appraiseProperty?: string;
    /** @description 评分方式 1 根据结果匹配得分 2 手工输入得分 */
    scoreType?: number;
    /** @description 得分规则 1 根据结果对应系数 2 根据结果生成系数 3 参考目标值 加减分 */
    scoreRule?: number;
    /** @description 计算公式 显示 */
    formulaExpression?: string;
    /** @description 计算公式 计算 */
    fe?: string;
    /** @description 单位 */
    unit?: string;
    /** @description 是否启用：1-启用，0-禁用 */
    isEnabled?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 评价方式：1=定性考评, 2=量化指标 根据结果生成系数, 3=量化指标 参考目标值 加减分, 4=量化指标 根据结果对应系数 5加分项，6 减分项,7 ork */
    ruleType?: number;
    /** @description 动态配置字段，存储具体参数 JSON */
    ruleConfig?: string;
    /** @description 是否常用 0 非常用 1 常用 */
    isCommon?: number;
    /** @description 权重 */
    weight?: number;
    /**
     * Format: int64
     * @description AppraiseStaffProjectGroupItem 用于kpi进行更新 前端不需要管
     */
    groupItemId?: number;
    /** @description ruleType = 1: 等级制评分配置 */
    ratingConfig?: RatingConfig;
    /** @description ruleType = 2:区间映射评分配置 */
    percentageRangeConfig?: PercentageRangeConfig;
    /** @description ruleType = 3: 目标增减分配置 */
    targetBasedConfig?: TargetBasedConfig;
    /** @description ruleType = 4:完成率对应系数配置 */
    completionCoefficientConfig?: CompletionCoefficientConfig;
    /** @description ruleType = 5,6:加减分项 */
    addDeductConfig?: AddDeductConfig;
    /** @description 目标值 */
    targetValue?: number;
    /** @description 员工确认值 */
    selfValue?: number;
    /** @description 上级确认值 */
    leaderValue?: number;
    /** @description 企业完成值 */
    complateValue?: number;
    /** @description 员工确认完成值 */
    selfComplateValue?: number;
    /** @description 上级确认完成值 */
    leaderComplateValue?: number;
    /** @description 目标值单位 */
    valueUnit?: string;
    /** @description 自评分 */
    selfScore?: number;
    /** @description 360评分 */
    cycleScore?: number;
    /** @description 360评分等级 */
    cycleScoreLevel?: string;
    /** @description 上级评分 */
    leaderScore?: number;
    /** @description 最终得分 */
    score?: number;
    /** @description 最终得分公式 */
    scoreFe?: string;
    /** @description 最终得分公式 */
    scoreLevel?: string;
    /** @description 显示得分文本 */
    displayScore?: string;
    /** @description 自评备注 */
    selfRemark?: string;
    /** @description 360评备注 */
    cycleRemark?: string;
    /** @description 上级评备注 */
    leaderRemark?: string;
    /** @description 自评选择或者录入 */
    selfSelect?: string;
    /** @description 360选择或者录入 */
    cycleSelect?: string;
    /** @description 上级选择或者录入 */
    leaderSelect?: string;
    /** @description HR选择或者录入 */
    hrSelect?: string;
    /** @description 自评分 公式 */
    selfScoreFe?: string;
    /** @description 自评分  说明 */
    selfScoreRemark?: string;
    /** @description 上级评分 公式 */
    leaderScoreFe?: string;
    /** @description 完成值数据来源 */
    completeUser?: string;
    /** @description 完成值数据来源 */
    completeUserList?: StaffNameIdPicVO[];
}

export interface AppraiseYearStaffTargetVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 指标ID
     */
    itemId?: number;
    /**
     * Format: int64
     * @description 上级ID 第一级就是0
     */
    leaderId?: number;
    /** @description 年份 */
    year?: number;
    /** @description 备注 */
    remark?: string;
    createTime?: string;
    /** @description 单位 */
    unit?: string;
    /** @description 1 自动生成(岗位生成时自动创建  刷新按钮自动生成) 2 手动添加,导入,页面复制 */
    type?: number;
    /** Format: int64 */
    targetId?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工头像 */
    personalPhoto?: string;
    children?: AppraiseYearStaffTargetVO[];
    /** @description 1-12月 */
    monthTargetList?: AppraiseStaffValue[];
}

export interface ServiceResultListPositionVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PositionVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultStaffDashboardReportVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: StaffDashboardReportVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface AppriaseItemUpdateDTO {
    /** Format: int64 */
    id?: number;
    /** @description 是否常用 0 非常用 1 常用 */
    isCommon?: number;
}

export interface TeamCalendarTaskCreateModifyDTOCreate {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /** @description 任务标题 */
    title: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType: number;
    /** @description 自定义通知人id。说明：当通知类型是自定义时，不为空。 */
    customNoticeUserIds?: number[];
}

export interface TeamCalendarTaskCreateDTOCreate {
    /** @description 任务标题 */
    title: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType: number;
    /** @description 重复频率。0=日，1=周，2=月，3=年 */
    repeatFrequency?: number;
    /** @description 是否将事项同步至任务计划清单。0=否，1=是 */
    isSyncToTaskPlan?: boolean;
    /** @description 自定义通知的被通知人的员工id。说明：当通知类型是自定义时，不为空。 */
    customNoticeUserIds?: number[];
    /** @description 新附件的临时文件URL。说明：多个附件用英文逗号分隔 */
    tempAttachmentUrls?: string[];
}

export interface XxlJobInfo {
    /** @description 主键ID */
    id?: number;
    /** @description 执行器主键ID */
    jobGroup?: number;
    jobDesc?: string;
    addTime?: string;
    updateTime?: string;
    /** @description 负责人 */
    author?: string;
    /** @description 报警邮件 */
    alarmEmail?: string;
    /** @description 调度类型 */
    scheduleType?: string;
    /** @description 调度配置，值含义取决于调度类型 */
    scheduleConf?: string;
    /** @description 调度过期策略 */
    misfireStrategy?: string;
    /** @description 执行器路由策略 */
    executorRouteStrategy?: string;
    /** @description 执行器，任务Handler名称 */
    executorHandler?: string;
    /** @description 执行器，任务参数 */
    executorParam?: string;
    /** @description 阻塞处理策略 */
    executorBlockStrategy?: string;
    /** @description 任务执行超时时间，单位秒 */
    executorTimeout?: number;
    /** @description 失败重试次数 */
    executorFailRetryCount?: number;
    /** @description GLUE类型	#com.xxl.job.core.glue.GlueTypeEnum */
    glueType?: string;
    /** @description GLUE源代码 */
    glueSource?: string;
    /** @description GLUE备注 */
    glueRemark?: string;
    /** @description GLUE更新时间 */
    glueUpdatetime?: string;
    /** @description 子任务ID，多个逗号分隔 */
    childJobId?: string;
    /** @description 调度状态：0-停止，1-运行 */
    triggerStatus?: number;
    /**
     * Format: int64
     * @description 上次调度时间
     */
    triggerLastTime?: number;
    /**
     * Format: int64
     * @description 下次调度时间
     */
    triggerNextTime?: number;
}

export interface ServiceResultListDocNoticeType {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocNoticeType[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface StaffSelectionMeta {
    /** @description 条件维度类型（1：员工；2：部门；3：员工类型；4：性别；5：职级；6：序列；7：司龄；8：用户组） */
    type?: number;
    /** @description 比较符（1：包含；2：不包含；3：大于等于；4：小于等于） */
    operators?: number[];
    /** @description 条件可选项 */
    options?: StaffDimensionData[];
}

export interface StaffSelectionMetaItem {
    /** @description 条件维度类型（1：员工；2：部门；3：员工类型；4：性别；5：职级；6：序列；7：司龄；8：用户组；） */
    type?: number;
    /** @description 条件名称 */
    name?: string;
    /** @description 比较符（1：等于；2：不等于；3：大于等于；4：小于等于；5：向下包含） */
    operators?: number[];
    /** @description 条件可选项 */
    options?: StaffDimensionData[];
    /** @description 单位（适用于区间比较的条件项） */
    unit?: string;
}

export interface ServiceResultListAppraiseProjectStaffVO {
    code?: string;
    success?: boolean;
    data?: AppraiseProjectStaffVO[];
    message?: string;
    tid?: string;
}

export interface DailyMonthlyReportRecordsAttachmentDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface DailyMonthlyReportRecordsAttachmentVO {
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface ServiceResultListTaskClassifyVO {
    code?: string;
    success?: boolean;
    data?: TaskClassifyVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultSmsCodeVO {
    code?: string;
    success?: boolean;
    data?: SmsCodeVO;
    message?: string;
    tid?: string;
}

export interface HrLoginVO {
    /** @description 访问令牌 */
    accessToken?: string;
    /** @description 输入错误的次数，达到一定数量需要输入验证码 */
    errorTimes?: number;
    /**
     * @description 密码状态.1=没有密码, 2=有密码，但是是初始密码.
     *     说明：没有密码，走设置密码的流程.有密码，是初始密码：走修改密码的流程
     */
    passwordState?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 姓名 */
    realName?: string;
    /** @description 个人证件照 */
    personalPhoto?: string;
    /** @description 司龄（天） */
    companyTenure?: number;
    /** @description 关联企业列表 */
    companyList?: CompanySummaryVO[];
    /** @description 当前登录企业 */
    currentCompany?: CompanySummaryVO;
}

export interface ServiceResultListUserGroupTreeVO {
    code?: string;
    success?: boolean;
    data?: UserGroupTreeVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultListDataPermissionVO {
    code?: string;
    success?: boolean;
    data?: DataPermissionVO[];
    message?: string;
    tid?: string;
}

export interface LoginNameCheckRO {
    /** @description 登录名（登录名、手机号、邮箱） */
    loginName: string;
}

export interface CompanyRegisterCheckRO {
    /** @description 手机号（校验企业数量场景下不能为空） */
    mobile?: string;
    /** @description 企业名称（校验企业名称场景下不能为空） */
    companyName?: string;
    /** @description 是否校验企业名称 */
    checkCompanyName?: boolean;
    /** @description 是否校验企业数量 */
    checkCompanyCount?: boolean;
}

export interface MobileQuickRegisterRO {
    /** @description 手机号 */
    mobile: string;
    /** @description 姓名 */
    realName?: string;
}

export interface ServiceResultListCompanySummaryVO {
    code?: string;
    success?: boolean;
    data?: CompanySummaryVO[];
    message?: string;
    tid?: string;
}

export interface AppraiseCycleTableVO {
    /**
     * Format: int64
     * @description 主键 ID
     */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 类型（1：月度，2：季度，3：半年度，4：年度） */
    type?: number;
    /** @description 年份 */
    year?: number;
    /** @description 月份 */
    month?: number;
    /** @description 考核周期-结束月份 */
    endMonth?: number;
    /** @description 考核周期-结束年份 */
    endYear?: number;
    /** @description 考核有效期 */
    expirDate?: string;
    /** @description 可以开始考试的时间 */
    examTime?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 涉及人员数 */
    staffNums?: number;
    /** @description 创建时间 */
    createTime?: string;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
    cycleList?: AppraiseStaffProjectCycle[];
    /** @description 1 考评中 2 已完成 */
    status?: number;
    groupMap?: MapListGroupVO;
}

export interface ServiceResultListHrCompanySummaryVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: HrCompanySummaryVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultListTitleNode {
    code?: string;
    success?: boolean;
    data?: TitleNode[];
    message?: string;
    tid?: string;
}

export interface RichTextParseVO {
    /** @description 解析后的层级标题目录（含锚点ID） */
    titleNodes?: TitleNode[];
    /** @description 添加了锚点ID后的完整富文本HTML */
    anchoredRichText?: string;
}

export interface ServiceResultMapInteger {
    code?: string;
    success?: boolean;
    data?: MapInteger;
    message?: string;
    tid?: string;
}

export interface ServiceResultListUserGroupVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: UserGroupVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultCompanyTargetValue {
    code?: string;
    success?: boolean;
    data?: CompanyTargetValue;
    message?: string;
    tid?: string;
}

export interface AvatarModifyRO {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 临时文件URL (前置 /common/file/upload/temp 接口上传的临时文件) */
    tmpUrl: string;
}

export interface BaseQueryDTO {
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 查询的自定义字段 */
    columns?: string;
    /** @description 排序信息 */
    orderBy?: string;
    /** @description 自定义分页的-limit(Mysql) */
    limit?: number;
    /** @description 自定义分页的-start(Mysql) */
    start?: number;
    /**
     * @description 页码
     * @default 1
     */
    page: number;
    /**
     * @description 每页条数
     * @default 20
     */
    rows: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description jqGrid的排序字段 */
    sidx?: string;
    /** @description 二级用途: 在导出或处理中担任(按勾选处理的功能,用于传入已经勾选的二级ID值给后端) */
    scidx?: string;
    sord?: string;
    /** @description 排序字段 */
    sorter?: string;
    /** Format: int64 */
    warehouseNo?: number;
    /** @description modified by: wangzh 2021-04-09 13:47 增加限定仓库集合 */
    warehouseNos?: string;
    /** @description modified by: wangzh 2021-04-09 14:05 用于查询限定的仓 */
    warehouseNoList?: number[];
    /** Format: int64 */
    userId?: number;
    /**
     * @description 强制索引的map,用于在需要使用强制索引的时候,进行mapper中的sql语句处理
     *     ---------------------------------------------------
     *     日期          时间    修改人       修改说明
     *     2021-06-12   09:02   wangzh      新增此字段
     *     ---------------------------------------------------
     */
    forceIndexMap?: MapString;
    updateUser?: string;
    extraType?: number;
    /**
     * Format: int64
     * @description 租户公司编号：中台查询
     */
    companyId?: number;
    ts?: string;
    creator?: string;
    updater?: string;
    created?: string;
    updated?: string;
    /** @description modified by: LiJinYu 2024-10-29 08:53 [导出额外条件] */
    extraMap?: MapString;
}

export interface StaffShiftScheduleInfo {
    /** @description 班次考勤日期 */
    date?: string;
    /** @description 是否排休 */
    isDayOff?: boolean;
    /** @description 班次信息 */
    shiftInfo?: ShiftBaseInfoVO;
    /** @description 员工信息 */
    staffBaseInfo?: StaffBaseInfo;
}

export interface TimePeriod {
    /** @description 开始时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    beginTime: string;
    /** @description 结束时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    endTime: string;
}

export interface PageOrgDept {
    records?: OrgDept[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface OrgDeptTreeDeptStaffDTO {
    /** @description 0:不启用; 1:启用 */
    enabled?: number;
    /** @description 部门名称 筛选 */
    deptName?: string;
    /** @description 负责人 筛选 */
    responsibleName?: string;
    /** @description 负责人排序 0 正序 1倒序 */
    sortResponsibleId?: number;
}

export interface UserRoleDTO {
    /** Format: int64 */
    roleId?: number;
    /** @description 可以为空 */
    roleUsers?: AddRoleUserDTO[];
}

export interface PageSysPost {
    records?: SysPost[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultCompanySyncRecord {
    code?: string;
    success?: boolean;
    data?: CompanySyncRecord;
    message?: string;
    tid?: string;
}

export interface PageCompanyThirdPartyConfig {
    records?: CompanyThirdPartyConfig[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface PageSysLoginDevice {
    records?: SysLoginDevice[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface FieldConfigQueryROQuery {
    /** @description 字段分组（"staff": 员工） */
    ownerType: string;
}

export interface ServiceResultObject {
    code?: string;
    success?: boolean;
    data?: Record<string, never>;
    message?: string;
    tid?: string;
}

export interface StaffImportParam {
    /** @description 是否创建不存在的部门 */
    createDept?: boolean;
    /** @description 是否覆盖导入 */
    override?: boolean;
}

export interface StaffAppVo {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 应用名称 */
    appName?: string;
    /** @description 应用描述 */
    descs?: string;
    /** @description 应用分类 */
    appType?: string;
    /** @description 是否收费：0-免费，1-增值 */
    isFee?: number;
    /** @description 样式配置 */
    cssStyle?: string;
    /** @description 一级菜单ID，多值用逗号分隔 */
    menuIds?: string;
    /** @description 图标 */
    pic?: string;
    /** @description 0默认应用 1:不是 */
    isDefault?: number;
    menuList?: BngMenuVO[];
    groupList?: string[];
    /** @description 0: 未选中 1:已选中 */
    isSelect?: number;
}

export interface PageContactVO {
    /** @default Collections.emptyList() */
    records: ContactVO[];
    /**
     * Format: int64
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @default 1
     */
    current: number;
    /** @default new ArrayList<>() */
    orders: OrderItem[];
    /** @default true */
    optimizeCountSql: boolean;
    /** @default true */
    searchCount: boolean;
    /** @default true */
    optimizeJoinOfCountSql: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultListStaffFieldConfigVO {
    code?: string;
    success?: boolean;
    data?: StaffFieldConfigVO[];
    message?: string;
    tid?: string;
}

export interface ExportField {
    groupName?: string;
    fieldName: string;
    displayName: string;
    /** @default 1 */
    order: number;
}

export interface PageAppraiseItem {
    records?: AppraiseItem[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface AppraiseConfigScoreMapping {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 分数区间起始值 */
    scoreFrom?: number;
    /** @description 起始值 运算符号 >, ≥, <, ≤ */
    optFrom?: string;
    /** @description 分数区间结束值 */
    scoreTo?: number;
    /** @description 结束值 运算符号 >, ≥, <, ≤ */
    optTo?: string;
    /** @description 显示等级，如 S、A+、A、B、C 等 */
    displayGrade?: string;
    /** @description 描述 */
    description?: string;
    /** @description 对应绩效系数，用于奖金计算等 */
    coefficient?: number;
    /** @description 排序权重，数值越小越靠前，用于前端展示顺序 */
    sortOrder?: number;
}

export interface ServiceResultListStaffFieldVO {
    code?: string;
    success?: boolean;
    data?: StaffFieldVO[];
    message?: string;
    tid?: string;
}

export interface StaffFieldBusinessPointConfigVO {
    /** @description 分组名称 */
    groupName?: string;
    /** @description 分组唯一标识 */
    groupIdentity?: string;
    /** @description 是否允许添加多个 */
    allowMultiple?: boolean;
    /** @description 字段列表 */
    fields?: FieldConfig[];
    /** @description 字段值（员工详情返回） */
    fieldValues?: FieldValue[][];
}

export interface AppraiseDeptVO {
    /** @description 树状唯一标识 */
    unionKey?: string;
    /**
     * Format: int64
     * @description 部门ID（与数据库dept_id字段对应）
     */
    autoNo?: number;
    /** Format: int64 */
    pid?: number;
    /** @description 部门名称 */
    name?: string;
    /**
     * @description 1
     * @default 1
     */
    type: number;
    /** @description 子部门 */
    childrenDept?: AppraiseDeptVO[];
    /** @description 当前部门职位 */
    postList?: AppraisePostVO[];
}

export interface GroupFieldsCreate {
    /** @description 字段分组唯一标识 */
    groupIdentity: string;
    /** @description 字段列表 */
    fields?: FieldValueCreate[][];
}

export interface AppriasePostTableGroupVO {
    /**
     * Format: int64
     * @description 字典编码
     */
    dictCode?: number;
    /**
     * Format: int64
     * @description 字典类型id
     */
    dictTypeId?: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典标签 */
    dictLabel?: string;
    /** @description 字典键值 */
    dictValue?: string;
    /** @description 字典类型 */
    dictType?: string;
    /** @description 样式属性（其他样式扩展） */
    cssClass?: string;
    /** @description 表格回显样式 */
    listClass?: string;
    /** @description 是否默认（Y是 N否） */
    isDefault?: string;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 字典类型名称 */
    dictTypeName?: string;
    itemList?: AppriasePostTableItemVO[];
    /** @description 权重 */
    weight?: number;
    /** @description 自评本项得分 */
    selfGroupScore?: number;
    /** @description 自评本项得分公式 */
    selfGroupScoreFe?: string;
    /** @description 考核人本项得分 */
    leaderGroupScore?: number;
    /** @description 考核人本项得分公式 */
    leaderGroupScoreFe?: string;
    /** @description 本项得分 */
    score?: number;
    /** @description 本项得分公式 */
    scoreFe?: string;
    /** @description 本项360得分 */
    cycleScore?: number;
    /** @description 360等级 */
    cycleScoreLevel?: string;
    /** @description 自评等级 */
    selfScoreLevel?: string;
    /** @description leader等级 */
    leaderScoreLevel?: string;
    /** @description 得分等级 */
    scoreLevel?: string;
}

export interface PageDocFile {
    records?: DocFile[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultListAppraiseYearStaffTargetVO {
    code?: string;
    success?: boolean;
    data?: AppraiseYearStaffTargetVO[];
    message?: string;
    tid?: string;
}

export interface TeamCalendarTaskCreateModifyDTOModify {
    /**
     * Format: int64
     * @description ID
     */
    id: number;
    /** @description 任务标题 */
    title: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType: number;
    /** @description 自定义通知人id。说明：当通知类型是自定义时，不为空。 */
    customNoticeUserIds?: number[];
}

export interface BaseBatchDeleteDTO {
    /** @description 批量删除的id */
    ids: number[];
}

export interface TeamCalendarTaskModifyDTOModify {
    /** @description 任务标题 */
    title: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType: number;
    /** @description 重复频率。0=日，1=周，2=月，3=年 */
    repeatFrequency?: number;
    /** @description 是否将事项同步至任务计划清单。0=否，1=是 */
    isSyncToTaskPlan?: boolean;
    /** @description 自定义通知的被通知人的员工id。说明：当通知类型是自定义时，不为空。 */
    customNoticeUserIds?: number[];
    /** @description 新附件的临时文件URL。说明：多个附件用英文逗号分隔 */
    tempAttachmentUrls?: string[];
    /**
     * Format: int64
     * @description ID
     */
    id: number;
    /** @description 编辑后剩余的老附件的文件id，如果编辑时有删除，请从此字段中移除。说明：多个附件用英文逗号分隔 */
    oldAttachmentIds?: number[];
}

export interface AppriaseStaffValueUpdateDTO {
    /** Format: int64 */
    id?: number;
    /** @description 完成值必填 */
    complateValue?: number;
}

export interface ServiceResultListStaffSelectionMeta {
    code?: string;
    success?: boolean;
    data?: StaffSelectionMeta[];
    message?: string;
    tid?: string;
}

export interface StaffSelectionMetaVO {
    /** @description 快速条件项 */
    quickCondition?: StaffSelectionMetaItem[];
    /** @description 条件项 */
    conditions?: StaffSelectionMetaItem[];
}

export interface PageWorkPlanVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: WorkPlanVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface DailyMonthlyReportRecordsVO {
    /** @description 内容 */
    content?: string;
    /** @description 经度 */
    longitude?: number;
    /** @description 纬度 */
    latitude?: number;
    /** @description 详细地址 */
    address?: string;
    /** @description 附件 */
    attachments?: DailyMonthlyReportRecordsAttachmentVO[];
    /** @description 创建时间 */
    createTime?: string;
}

export interface ServiceResultDocFilePresignedVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocFilePresignedVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface TaskClassifyDTO {
    /** @description 类型：0-工作计划；1-日月报；2-会议；3-工单； */
    type?: number;
    /** @description 名称 */
    name?: string;
}

export interface MobileRO {
    /** @description 手机号 */
    mobile: string;
}

export interface LoginSuccessVO {
    accessToken?: string;
    accessTokenExpireTime?: string;
    refreshToken?: string;
    refreshTokenExpireTime?: string;
    /** Format: int64 */
    userId?: number;
    mobile?: string;
    realName?: string;
    errorTimes?: number;
    passwordState?: number;
}

export interface RefreshTokenRO {
    /** @description refreshToken */
    refreshToken: string;
}

export interface ServiceResultHrLoginVO {
    code?: string;
    success?: boolean;
    data?: HrLoginVO;
    message?: string;
    tid?: string;
}

export interface BngMenuVO {
    /** @description 自增ID */
    autoNo?: number;
    /** @description 唯一编码 */
    code?: string;
    /** @description 菜单名称 */
    name?: string;
    /** @description 图标 */
    icon?: string;
    /** @description 显示顺序 */
    sortIndex?: number;
    /** @description 父ID */
    parentNo?: number;
    /** @description 菜单路由(前端) */
    url?: string;
    /** @description 在菜单中显示: 0=隐藏,1=显示 */
    showInMenu?: number;
    /** @description 分组名称 */
    groupName?: string;
    /** @description 分组排序 */
    groupSort?: number;
    /** @description 子级菜单的软件ID集合 */
    childNoList?: string;
}

export interface UserGroupDTO {
    /** @description 名称 */
    name?: string;
}

export interface DataPermissionRelationDetailVO {
    /** @description 部门或用户组ID */
    organizeId?: string;
    /** @description 查看人ID */
    userId?: string[];
}

export interface ServiceResultListAppraiseCycleTableVO {
    code?: string;
    success?: boolean;
    data?: AppraiseCycleTableVO[];
    message?: string;
    tid?: string;
}

export interface GroupVO {
    /** Format: int64 */
    groupId?: number;
    groupName?: string;
    scoreLevel?: string;
    staff?: StaffNameIdPicVO;
    /** Format: int64 */
    projectId?: number;
    /** Format: int64 */
    tableId?: number;
}

export interface RichTextDTO {
    name?: string;
}

export interface ServiceResultRichTextParseVO {
    code?: string;
    success?: boolean;
    data?: RichTextParseVO;
    message?: string;
    tid?: string;
}

export interface DocumentInfo {
    /**
     * Format: int64
     * @description 文档主键（自增）
     */
    id?: number;
    /**
     * Format: int64
     * @description 公司编号（多租户标识）
     */
    coNo?: number;
    /** @description 文档名称 */
    documentName?: string;
    /** @description 文档作者 */
    author?: string;
    /** @description 简介 */
    remark?: string;
    /** @description 原文档最后修改时间 */
    modifyTime?: string;
    /** @description 带锚点的富文本内容（前端渲染用） */
    richText?: string;
    /** @description TitleNode列表的JSON字符串 */
    chapterJson?: string;
    /** @description 数据入库时间（默认当前时间） */
    createTime?: string;
    /** @description 文档状态（1=启用/0=禁用），默认1 */
    status?: number;
    /**
     * Format: int64
     * @description 分组id
     */
    catId?: number;
    staffNameIdPicVO?: StaffNameIdPicVO;
    titleNodes?: TitleNode[];
    /** @description 原文档 */
    origin?: DocumentInfo;
    catName?: string;
    /**
     * Format: int64
     * @description 上一个
     */
    pre?: number;
    /**
     * Format: int64
     * @description 下一个
     */
    next?: number;
}

export interface IPageDocumentInfoES {
    records?: DocumentInfoES[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
    /** Format: int64 */
    pages?: number;
}

export interface PageClockWayVO {
    records?: ClockWayVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface PageProjectListVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: ProjectListVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface PayrollDetail {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 关联薪资项目表的ID
     */
    payrollId?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 薪资所属年份 */
    year?: number;
    /** @description 薪资所属月份 */
    month?: number;
    /** @description 0 已撤回 1 已保存 2 已发送 */
    status?: number;
    /** @description 发放日期 */
    sendDate?: string;
    /** @description 基本工资 */
    baseSalary?: number;
    /** @description 绩效 */
    performanceSalary?: number;
    /** @description 岗位工资 */
    jobSalary?: number;
    /** @description 加班费 */
    overtimePay?: number;
    /** @description 社保代扣 */
    socialSecurityDeduct?: number;
    /** @description 公积金代扣 */
    providentFundDeduct?: number;
    /** @description 个税代扣 */
    incomeTaxDeduct?: number;
    /** @description 公司社保成本 */
    companySocialSecurityCost?: number;
    /** @description 公司公积金成本 */
    companyProvidentFundCost?: number;
    /** @description 实发工资 */
    actualSalary?: number;
    /** Format: int64 */
    deptId?: number;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 文件解析异常描述 */
    msg?: string;
}

export interface ExcelHeaderItem {
    /** @description 列号（从0开始） */
    column?: number;
    /** @description 表头标题 */
    title?: string;
    /** @description 是否必填 */
    required?: boolean;
    /** @default 100 */
    width: number;
    /** @default true */
    show: boolean;
    /** @description 数据类型：1-字符串 2-数值 */
    data_type?: number;
    /** @description 是否固定列 */
    fixed?: boolean;
    /** @description name */
    type?: string;
}

export interface TargetValueDTO {
    /** Format: int64 */
    id?: number;
    key?: string;
}

export interface PageTeamEmployeeVO {
    records?: TeamEmployeeVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface BaseGetDTO {
    /** Format: int64 */
    id?: number;
}

export interface ShiftAccountGeneralSituation {
    /** Format: int64 */
    shiftId?: number;
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
    /** @description 是否休息日加班 */
    isRestDayOvertime?: boolean;
    /** @description 排班状态（仅适用于排班制， 0：未排班；1：已排休；2：已排班；3：已调班；4：系统对班；5：员工选班） */
    scheduleStatus?: number;
    /** @description 调班信息（仅适用于排班制） */
    changeShiftInfo?: StaffShiftScheduleInfo;
    /** @description 应出勤小时数（标准工作时长） */
    requiredAttHours?: number;
    /** @description 实际出勤小时数 */
    actualAttHours?: number;
    /** @description 最早打卡时间 */
    earliestClockTime?: string;
    /** @description 最晚打卡时间 */
    latestClockTime?: string;
}

export interface TieredTime {
    /** @description 工作分钟数 */
    workMinutes?: number;
    /** @description 扣除分钟数 */
    deductMinutes?: number;
}

export interface ServiceResultPageOrgDept {
    code?: string;
    success?: boolean;
    data?: PageOrgDept;
    message?: string;
    tid?: string;
}

export interface StaffCustomMenuSort {
    /**
     * Format: int64
     * @description 自增主键ID
     */
    id?: number;
    /** @description 企业ID */
    cono?: string;
    /** @description 员工ID */
    staffId?: string;
    /** @description 一级菜单排序JSON（格式：[{"menu_id":"xxx","sort":1},...]） */
    menuSortJson?: string;
    /** @description 创建日期 */
    created?: string;
    /** @description 更新日期 */
    updated?: string;
    /** @description 备注 */
    remark?: string;
    menuDTOList?: MenuDTO[];
}

export interface PowerDTO {
    /** Format: int64 */
    powerId?: number;
    /** Format: int64 */
    menuId?: number;
    key?: string;
    powerName?: string;
    pCode?: string;
    routeUrl?: string;
}

export interface ServiceResultPageSysPost {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageSysPost;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageCompanyThirdPartyConfig {
    code?: string;
    success?: boolean;
    data?: PageCompanyThirdPartyConfig;
    message?: string;
    tid?: string;
}

export interface PageOptional {
    records?: Record<string, never>[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ExportBaseRequest {
    type: string;
    param?: components["schemas"];
    exportFields?: string[];
}

export interface ServiceResultPageSysLoginDevice {
    code?: string;
    success?: boolean;
    data?: PageSysLoginDevice;
    message?: string;
    tid?: string;
}

export interface FieldMatchResponse {
    fileName?: string;
    url?: string;
    identityCode?: string;
    dataFields?: FieldMatchResult[];
    columns?: ExcelColumnInfo[];
    excelRows?: MapObject[];
}

export interface QueryTaskRequest {
    taskId: string;
    type?: string;
}

export interface ExcelHandleRequestStaffImportParam {
    type: string;
    taskParam?: StaffImportParam;
    excelFileUrl: string;
    fileName: string;
}

export type DisplayValueConverterOptional = Record<string, never>;

export interface ServiceResultListStaffAppVo {
    code?: string;
    success?: boolean;
    data?: StaffAppVo[];
    message?: string;
    tid?: string;
}

export interface ServiceResultPageContactVO {
    code?: string;
    success?: boolean;
    data?: PageContactVO;
    message?: string;
    tid?: string;
}

export interface MapInteger {
    key?: number;
}

export interface ServiceResultPageAppraiseItem {
    code?: string;
    success?: boolean;
    data?: PageAppraiseItem;
    message?: string;
    tid?: string;
}

export interface AppraiseConfigVO {
    cycleConfigList?: CycleConfig[];
    showStyleDTO?: ShowStyleDTO;
    /** @description List<AppraiseConfigForcedRule> forcedRuleList;//绩效强制分布 */
    scoreMappingList?: AppraiseConfigScoreMapping[];
    /** @description 定性考评 */
    ratingConfigList?: RatingConfig[];
    /** @description 1 显示等级 2 显示描述 3 显示等级+描述 */
    showType?: number;
    /** @description * 0 评分可以超过标准分 1 不可以超过 */
    okrLimit?: number;
    /** @description 1 sabcd 2abcd 3手工打分 */
    okrScore?: number;
    /** @description OKR考核配置 */
    orkConfigList?: RatingConfig[];
    scoreConfigList?: AppraiseConfigScoreMapping[];
    kpiConfigList?: AppraiseConfigScoreMapping[];
}

export interface ServiceResultListStaffFieldBusinessPointConfigVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: StaffFieldBusinessPointConfigVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface PageStaffRosterDataVO {
    records?: StaffRosterDataVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultListAppraiseDeptVO {
    code?: string;
    success?: boolean;
    data?: AppraiseDeptVO[];
    message?: string;
    tid?: string;
}

export interface AdminStaffCreateROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 字段分组列表 */
    groups: GroupFieldsCreate[];
}

export interface AppraisePostTableConfig {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 表单ID
     */
    tableId?: number;
    /** Format: int64 */
    coNo?: number;
    /**
     * Format: int64
     * @description groupId
     */
    groupId?: number;
    /** @description groupId */
    groupName?: string;
    /** @description 1:主观评价 2:KPI 3:奖惩项 4:Okr */
    type?: number;
    /** @description 考核人 */
    leaderId?: string;
    /** @description 自评价（0=不需要，1=需要） */
    selfAp?: number;
    /** @description 上级评价（0=不需要，1=需要） */
    leaderAp?: number;
    /** @description 360评价（0=不需要，1=需要） */
    cycleAp?: number;
    /** @description 自评权重 */
    selfWeight?: number;
    /** @description 上级评价权重 */
    leaderWeight?: number;
    /** @description 360评价权重 */
    cycleWeight?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 360下属评价0 不需要 1 需要 */
    cycleSub?: number;
    /** @description 360横向评价0 不需要 1 需要 */
    cycleCross?: number;
    /** @description 360下属评价 人员id */
    subIds?: string;
    /** @description 360横向评价 人员id */
    crossIds?: string;
    /** @description 360下属评价 */
    subList?: StaffNameIdPicVO[];
    /** @description 360横向评价 */
    crossList?: StaffNameIdPicVO[];
    /** @description 考核人名字 */
    leaderList?: StaffNameIdPicVO[];
}

export interface ServiceResultPageDocFile {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageDocFile;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface AppriaseYearStaffDTO {
    /** Format: int64 */
    itemId?: number;
    year?: number;
}

export interface TeamCalendarDisplaySettingVO {
    /**
     * Format: int64
     * @description 主键
     */
    id?: number;
    /** @description 提前通知天数 */
    noticeAdvanceDays?: number;
    /** @description 是否全部显示。0=否，1=是 */
    isDisplayAll?: boolean;
    /** @description 是否显示人文关怀。0=否，1=是 */
    isHumanisticConcern?: boolean;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
}

export interface TeamCalendarDisplaySettingCreateModifyDTOCreate {
    /** @description 提前通知天数 */
    noticeAdvanceDays: number;
    /** @description 是否全部显示。0=否，1=是 */
    isDisplayAll: boolean;
    /** @description 是否显示人文关怀。0=否，1=是 */
    isHumanisticConcern: boolean;
}

export interface FieldMatchResult {
    /** @description 字段名（必填） */
    fieldName: string;
    /** @description 字段显示名称（必填） */
    displayName: string;
    /** @description 字段别名 */
    aliases?: string[];
    /** @description 字段可选值 */
    options?: string[];
    /** @description 是否必填 */
    required: boolean;
    matchedColumn?: ExcelColumnInfo;
    score?: number;
}

export interface DocNoticeTypeEditDTO {
    /** Format: int64 */
    id?: number;
    name: string;
}

export interface SelectionCondition {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别；5:职级；6:序列；7:司龄；8:用户组；100：全公司)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 100;
    /**
     * @description 比较运算符（1：包含；2：不包含；3：大于等于；4：小于等于）
     * @enum {integer}
     */
    operator?: 1 | 2 | 3 | 4 | 5;
    /** @description 维度数据 */
    data?: StaffDimensionData[];
}

export interface ServiceResultStaffSelectionMetaVO {
    code?: string;
    success?: boolean;
    data?: StaffSelectionMetaVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultPageWorkPlanVO {
    code?: string;
    success?: boolean;
    data?: PageWorkPlanVO;
    message?: string;
    tid?: string;
}

export interface DailyMonthlyReportVO {
    /** @description 用户ID */
    userId?: string;
    /** @description 日月报记录 */
    reports?: DailyMonthlyReportListVO[];
}

export interface DailyMonthlyReportListVO {
    /** @description 用户ID */
    userId?: string;
    /** @description 日月报记录 */
    reports?: DailyMonthlyReportDetailVO[];
}

export interface DailyMonthlyReportDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 类型：0-日报 1-周报 2-月报 */
    type?: number;
    /** @description 填写日期 */
    reportDate?: string;
    /** @description 月份第几周 */
    monthWeek?: string;
    /** @description 年份第几周 */
    yearWeek?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 批注列表 */
    annotations?: DailyMonthlyReportAnnotationVO[];
    /** @description 内容 */
    records?: DailyMonthlyReportRecordsVO[];
    /** @description 关联任务ID列表 */
    workPlanIdList?: string[];
}

export interface ServiceResultTaskClassifyVO {
    code?: string;
    success?: boolean;
    data?: TaskClassifyVO;
    message?: string;
    tid?: string;
}

export interface LoginResultVO {
    /** @description 访问令牌 */
    accessToken?: string;
    /** @description 输入错误的次数，达到一定数量需要输入验证码 */
    errorTimes?: number;
    /**
     * @description 密码状态.1=没有密码, 2=有密码，但是是初始密码.
     *     说明：没有密码，走设置密码的流程.有密码，是初始密码：走修改密码的流程
     */
    passwordState?: number;
}

export interface ServiceResultLoginSuccessVO {
    code?: string;
    success?: boolean;
    data?: LoginSuccessVO;
    message?: string;
    tid?: string;
}

export interface HrCompanyRegisterRO {
    /** @description 公司名称 */
    companyName: string;
    /** @description 手机号 */
    mobile: string;
    /** @description 短信验证码 */
    smsCode: string;
}

export interface UserGroupRelationVO {
    /** @description 部门或用户组ID */
    organizeId?: string;
    /** @description 用户ID */
    userId?: string[];
}

export interface DataPermissionRelationVO {
    /** @description 查看数据类型：0-全部；1-人事档案；2-绩效数据；3-考勤数据；4-薪酬数据；5-资产数据；6-奖惩数据；7-任务计划清单；8-日月报 */
    type?: number;
    /** @description 通过部门选择的查看人 */
    userByDept?: DataPermissionRelationDetailVO[];
    /** @description 通过用户组选择的查看人 */
    userByGroup?: DataPermissionRelationDetailVO[];
    /** @description 直接选择人的查看人 */
    userIdList?: string[];
    /** @description 通过部门选择的被查看人 */
    viewedByDept?: DataPermissionRelationDetailVO[];
    /** @description 通过用户组选择的被查看人 */
    viewedByGroup?: DataPermissionRelationDetailVO[];
    /** @description 直接选择人的被查看人 */
    viewedUserIdList?: string[];
    /** @description 被查看人权限类型:0-全部;1-本部门;2本部门及子部门;3-用户组;4-人 */
    viewedUserPermissionType?: number;
}

export interface CompanyUserStatusStatisticsVO {
    /** @description 已激活数量 */
    activated?: number;
    /** @description 未激活数量 */
    unactivated?: number;
}

export interface ServiceResultListDocumentInfo {
    code?: string;
    success?: boolean;
    data?: DocumentInfo[];
    message?: string;
    tid?: string;
}

export interface DocumentCatVO {
    /**
     * Format: int64
     * @description 字典编码
     */
    dictCode?: number;
    /**
     * Format: int64
     * @description 字典类型id
     */
    dictTypeId?: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典标签 */
    dictLabel?: string;
    /** @description 字典键值 */
    dictValue?: string;
    /** @description 字典类型 */
    dictType?: string;
    /** @description 样式属性（其他样式扩展） */
    cssClass?: string;
    /** @description 表格回显样式 */
    listClass?: string;
    /** @description 是否默认（Y是 N否） */
    isDefault?: string;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 字典类型名称 */
    dictTypeName?: string;
    documentInfoList?: DocumentInfo[];
}

export interface ServiceResultIPageDocumentInfoES {
    code?: string;
    success?: boolean;
    data?: IPageDocumentInfoES;
    message?: string;
    tid?: string;
}

export interface ClockROCreate {
    /**
     * Format: int64
     * @description 当前登录员工
     */
    staffNo?: number;
    /** @description 纬度 */
    latitude?: number;
    /** @description 经度 */
    longitude?: number;
    /** @description 详细地址 */
    address?: string;
    /** @description 打卡设备 */
    device?: string;
    /** @description 考勤方式：1:WIFI打卡 2:GPS打卡 */
    clockWay: number;
    /** @description 人脸数据 */
    faceBase64Img?: string;
    /** @description 照片数据 */
    photoBase64Img?: string;
    /**
     * @description 是否强制打卡（系统无法自动匹配班次的情况下，员工可选择忽略异常强制打卡，系统会记录为异常打卡，后续可通过工作流程确认本次打卡）
     * @default false
     */
    isForceClock: boolean;
    /**
     * @description 是否指定班次打卡（一般发生在休息日，打卡时间处于上一工作日打卡范围内，系统无法确定是上一工作日的下班卡还是休息日加班打卡）
     * @default false
     */
    isSpecifyClock: boolean;
    /** @description 指定考勤日期（yyyy-MM-dd） */
    date?: string;
    /**
     * Format: int64
     * @description 指定考勤班次
     */
    shiftId?: number;
}

export interface ServiceResultPageClockWayVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageClockWayVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageProjectListVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageProjectListVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface PayrollFileInitRst {
    token?: string;
    payrollList?: PayrollDetail[];
}

export interface PayrollExcelDynamicDataVO {
    detail?: MapObject[];
    headers?: ExcelHeaderItem[];
    /** @description true=解析过程成功，false=解析过程失败（如文件损坏、格式错误等） */
    parseSuccess?: boolean;
    /** @description 全局解析提示（如“解析成功”“文件为空，解析失败”） */
    parseMsg?: string;
}

export interface ServiceResultPageTeamEmployeeVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageTeamEmployeeVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface HrmStaffExtInfo {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 关联员工基础表的 id
     */
    baseStaffId?: number;
    /** @description 英文名 */
    enName?: string;
    /** @description 籍贯 */
    nativePlace?: string;
    /** @description 户口性质 */
    registeredFlag?: string;
    /** @description 户籍地址 */
    registeredAddress?: string;
    /** @description 健康证有效期 */
    healthCertExpiry?: string;
    /** @description 民族 */
    nation?: string;
    /** @description 婚姻状态(0:未婚/1:已婚/2:离异/3:丧偶) */
    marriageStatus?: number;
    /** @description 政治面貌(0:群众;1:团员;2:党员;3:民主党派) */
    politicCountenance?: string;
    /** @description 个人照片 */
    personalPhoto?: string;
    /** @description 证件照 */
    idPhoto?: string;
    /** @description 试用期薪资 */
    probationSalary?: number;
    /** @description 转正薪资 */
    regularSalary?: number;
    /** @description 试用期时长 */
    probationTime?: number;
    /** @description 计划转正时间 */
    planRegularDate?: string;
    /** @description 试用期延期(0:未延期;1:已延期) */
    probationDelayFlag?: number;
    /** @description 毕业学校 */
    highSchool?: string;
    /** @description 第一学历(博士7，硕士6，本科5，专科4，高中/职高3，初中2，小学1，无0) */
    firstEducation?: number;
    /** @description 社会工龄 */
    socialSeniority?: string;
    /** @description 工作年限 */
    workingYears?: number;
    /** @description 首次工作时间 */
    firstWorkingTime?: string;
    /** @description 用工属性(0:正式;1:临时工;2:实习生;3:外包) */
    employAttribute?: number;
    /** @description 邀请公司 */
    inviteCompany?: string;
    /** @description 档案链接 */
    archivesLink?: string;
    /** @description 附件 */
    attachment?: string;
    /** @description 定薪定级状态(0:未定薪定级;1:定级中;2:已完成) */
    salaryGradingStatus?: number;
    /** @description 昵称 */
    nickName?: string;
    /** @description 描述 */
    userDesc?: string;
    /** @description 是否试用(0:否;1:是) */
    isSetProbation?: number;
    /** @description 是否开通账户(0:否;1:是) */
    isOpenAccount?: number;
    /**
     * Format: int64
     * @description 系统角色编号
     */
    sysRoleNo?: number;
    /** @description 企业微信ID */
    qywechatId?: string;
    /** @description 钉钉ID */
    dingdingId?: string;
    /** @description 飞书ID */
    feishuId?: string;
    /** @description 招聘渠道(1:校招;2:社招) */
    recruitmentChannel?: number;
    /** @description 身份证有效期 */
    idExpiryDate?: string;
    /** @description 邮箱 */
    email?: string;
    /** @description 微信号 */
    wechatNumber?: string;
    /** @description 现居地 */
    addressInfo?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 微信公众号的UnionId */
    weixinUnionId?: string;
    /** @description 是否订阅公众号(0:是;1:否) */
    isSubscribe?: number;
    /** @description 排序 */
    sortIndex?: number;
    /** @description 超管标记(1:超管;0:普通) */
    adminFlag?: number;
    /** @description 是否需要审批流(0:否;1:是) */
    needFlow?: number;
    /** @description 转正薪资需要审批流程(0:否;1:是) */
    needFlowWithSalary?: number;
    /** @description 是否需要转正流程(0:否;1:是) */
    needFlowWithFormal?: number;
    /** @description 通知员工完善档案(0:否;1:是) */
    needNotice?: number;
    /** @description 员工工号生成方式(0:自动;1:手动) */
    staffNumberMode?: number;
    /** @description 婚育状况 */
    marriage?: string;
    /** @description 导入批次号 */
    importBatchNo?: string;
    /** @description 修改时间 */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
    /** @description 是否已删除(0:未删除;1:已删除) */
    isDeleted?: number;
    /** @description 时间戳 */
    ts?: string;
}

export interface AttendanceAbnormalStatistics {
    /**
     * @description 异常合计次数
     * @default 0
     */
    abnormalCount: number;
    /**
     * @description 迟到次数
     * @default 0
     */
    lateCount: number;
    /**
     * @description 迟到分钟数
     * @default 0
     */
    lateMinutes: number;
    /**
     * @description 早退次数
     * @default 0
     */
    earlyCount: number;
    /**
     * @description 早退分钟数
     * @default 0
     */
    earlyMinutes: number;
    /**
     * @description 旷工次数
     * @default 0
     */
    absenceCount: number;
    /**
     * @description 旷工分钟数
     * @default 0
     */
    absenceMinutes: number;
    /**
     * @description 缺卡次数
     * @default 0
     */
    missClockCount: number;
}

export interface OvertimeCalculateRule {
    /** @description 是否需要扣除休息时间 */
    isDeductBreakTime: boolean;
    /** @description 休息时间扣除方式（1：按休息时间扣除；2：按加班时长扣除） */
    deductType: number;
    /** @description 休息时段 */
    breakTimePeriods?: TimePeriod[];
    /** @description 时长扣除规则 */
    deductRules?: TieredTime[];
    /**
     * @description 下班后多久开始计算加班（单位：分钟）
     * @default 0
     */
    beginOvertimeAfterWork: number;
    /**
     * @description 最短加班时间（单位：分钟）
     * @default 0
     */
    minOvertime: number;
    /**
     * @description 最长加班时间（单位：分钟，最长不能超过24小时）
     * @default 0
     */
    maxOvertime: number;
}

export interface MenuDTO {
    /**
     * Format: int64
     * @description 菜单字段 ↓
     */
    id?: number;
    name?: string;
    /** Format: int64 */
    pid?: number;
    device?: number;
    icon?: string;
    path?: string;
    locale?: string;
    level?: number;
    apiRoute?: string;
    authority?: string;
    specialProps?: string;
    hideInMenu?: boolean;
    forwardPath?: string;
    sortIndex?: number;
    /** @description 子级菜单的软件ID集合 */
    childNoList?: string;
    /** @description 权限字段 ↓ */
    powerList?: string;
    /** Format: int64 */
    pNo?: number;
    title?: string;
    pCode?: string;
    routeUrl?: string;
    powerMapList?: PowerDTO[];
    /** Format: int64 */
    roleNo?: number;
    /** @description 日志标识 */
    descs?: string;
    /** @description 子集 */
    children?: MenuDTO[];
    /** @description modified by: LiJinYu 2025-06-18 15:51 [分组名称、分组排序] */
    groupName?: string;
    groupSort?: number;
}

export interface PostQueryDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    postName?: string;
    postLevel?: string;
    postTags?: string[];
    status?: string;
    sequenceIds?: number[];
}

export interface PageSysDictData {
    records?: SysDictData[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface DeptWithConflictOrgDept {
    /** @description 部门信息 */
    dept?: OrgDept;
    /** @description 是否存在冲突 */
    exists?: boolean;
    /** @description 冲突描述 可能有多个 */
    msg?: string;
}

export interface ServiceResultPageOptional {
    code?: string;
    success?: boolean;
    data?: PageOptional;
    message?: string;
    tid?: string;
}

export interface ServiceResultFieldMatchResponse {
    code?: string;
    success?: boolean;
    data?: FieldMatchResponse;
    message?: string;
    tid?: string;
}

export type EmptyValueSetHandlerOptional = Record<string, never>;

export interface DeptExportRO {
    exportFields?: ExportField[];
    mergeByGroup?: boolean;
    isDynamic?: boolean;
    name?: string;
}

export interface ServiceResultListAppraiseConfigVO {
    code?: string;
    success?: boolean;
    data?: AppraiseConfigVO[];
    message?: string;
    tid?: string;
}

export type ScoringRuleConfig = Record<string, never>;

export interface RatingLevel {
    id?: number;
    /** @description 描述，如"卓越: 远超预期" */
    label?: string;
    /** @description 等级值，如"S", "A" */
    value?: string;
    /** @description 权重，如80 */
    weight?: number;
    /** @description 说明文字 */
    description?: string;
}

export interface keyCreate {
    /** @description 配置项（"SHOW": 可展示性; "EDITABLE": 可编辑性; "REQUIRED": 必填性） */
    item?: string;
    /** @description 是否启用 */
    enabled?: boolean;
}

export interface BusinessPointFieldsQueryROCreate {
    /** @description 业务端点（"STAFF_DETAIL": 员工端 - 员工档案；"STAFF_ENTRY_REGISTRATION": 员工端 - 入职登记表; "ADMIN_ADD_STAFF": 管理端 - 添加人员） */
    point?: string;
}

export interface ServiceResultPageStaffRosterDataVO {
    code?: string;
    success?: boolean;
    data?: PageStaffRosterDataVO;
    message?: string;
    tid?: string;
}

export interface AdminStaffGroupUpdateROCreate {
    /** Format: int64 */
    staffNo?: number;
    /** @description 字段分组唯一标识 */
    groupIdentity?: string;
    /** @description 字段列表 */
    fields?: FieldValueCreate[][];
}

export interface AppraiseTableDetailVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 名称 */
    name?: string;
    /** @description 考核类型（1 月度 2 季度 3 半年度 4 年度） */
    type?: number;
    /**
     * Format: int64
     * @description 创建人（关联用户表主键）
     */
    createUser?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 发布时间 */
    pubTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 状态（1=待发布，2=已发布） */
    status?: number;
    /** @description 加分上限 */
    maxScore?: number;
    /** @description 减分上限 */
    maxDscore?: number;
    /** @description 1 允许被考核人手工申请 0 不允许 */
    allowApply?: number;
    /** @description 1 允许考核人手工申请 0 不允许 */
    allowLeaderApply?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 岗位ID（关联岗位表主键）
     */
    postId?: number;
    /** @description 考核人 */
    leaderId?: string;
    createName?: string;
    personalPhoto?: string;
    /** @description 考核内容 */
    detailList?: AppriasePostTableGroupVO[];
    /** @description KPI */
    kpiList?: AppriasePostTableItemVO[];
    /** @description 考核修正 */
    reviseList?: AppriasePostTableGroupVO[];
    /** @description 考核管理 */
    configList?: AppraisePostTableConfig[];
}

export interface DocFileDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /**
     * @description 查看类型: viewType的缩写;
     *     my_publish = 我发不得
     */
    vt: string;
    /**
     * @description 查看的值ID集合,
     *     条件必传: 当 vt = dir or vt = folder 时 必传
     *     当vt = dir时 , 传递 目录ID: [1,2]
     *     当vt = folder时, 传递 文件夹ID: [101,102]
     */
    vids?: number[];
    /** @description 类型 0文件 1相册 */
    type: number;
}

export interface ServiceResultTeamCalendarDisplaySettingVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarDisplaySettingVO;
    message?: string;
    tid?: string;
}

export interface FieldMatchInfo {
    /** @description 字段名（必填） */
    fieldName: string;
    /** @description 字段显示名称（必填） */
    displayName: string;
    /** @description 字段别名 */
    aliases?: string[];
    /** @description 字段可选值 */
    options?: string[];
    /** @description 是否必填 */
    required: boolean;
    /** @description 匹配到的列（不能为空，未成功匹配的字段剔除） */
    matchedColumn: ExcelColumnInfo;
}

export interface StaffExportParam {
    exportFields?: ExportField[];
    /** @default false */
    mergeByGroup: boolean;
    /** @default false */
    isDynamic: boolean;
    /** @description 工号 */
    staffNumber?: string;
    /** @description 姓名 */
    personName?: string;
    /**
     * Format: int64
     * @description 部门
     */
    deptNo?: number;
    /** @description 员工状态 */
    staffStatus?: number;
    /** @description 员工类型（0：全职；1：兼职；2：劳务；3：临时；4：实习；7：外包；20：顾问） */
    staffAttribute?: number;
    /** @description 排除的员工类型 */
    excludeStaffAttribute?: number[];
    /** @description 转正状态（0：待转正；1：已转正；） */
    conversionStatus?: number;
    /** @description 合同状态（1：待签；2：到期） */
    contractStatus?: number;
    /** @description 排序规则 */
    order?: OrderCondition[];
}

export interface StaffSelectionDetailVO {
    /**
     * Format: int64
     * @description 选择器ID
     */
    id?: number;
    /** @description 选中的条件 */
    conditions?: SelectionCondition[];
    /** @description 是否全公司 */
    all?: boolean;
    /** @description 是否本部门 */
    ownerDept?: boolean;
    /** @description 是否本部门及下属部门 */
    ownerDeptWithChild?: boolean;
}

export interface WorkPlanDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description ID */
    id?: string;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 查看被订阅人ID列表 */
    subscribeUserIds?: string[];
    /** @description 状态：0-未执行；1-执行中；2-已完成；3-逾期 */
    status?: number[];
    /** @description 显示重要的 */
    importantFlag?: boolean;
    /** @description 显示我安排的 */
    showMyCreate?: boolean;
    /** @description 我关注的 */
    myFollow?: boolean;
    /** @description 是否展示OKR */
    showOKR?: boolean;
}

export interface ServiceResultListDailyMonthlyReportVO {
    code?: string;
    success?: boolean;
    data?: DailyMonthlyReportVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultLoginResultVO {
    code?: string;
    success?: boolean;
    data?: LoginResultVO;
    message?: string;
    tid?: string;
}

export interface MobileSmsCodeRegisterRO {
    /** @description 手机号 */
    mobile: string;
    /** @description 短信验证码 */
    smsCode: string;
}

export interface UserGroupDetailVO {
    /** @description ID */
    id?: string;
    /** @description 选择器ID */
    selectionId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 是否默认创建 */
    defaultCreateFlag?: boolean;
    /** @description 默认创建类型:0-部门负责人 */
    defaultCreateType?: number;
    /** @description 选择器数据 */
    selectionDetailVO?: StaffSelectionDetailVO;
}

export interface DataPermissionDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 名称 */
    name?: string;
    /** @description 数据权限关联关系 */
    permissionRelation?: DataPermissionRelationVO[];
}

export interface ServiceResultCompanyUserStatusStatisticsVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: CompanyUserStatusStatisticsVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface PositionLevelVO {
    /** @description 职级名称 */
    levelName?: string;
    /**
     * Format: int64
     * @description 职级ID
     */
    levelId?: number;
    /** @description 是否默认职级 */
    isDefault?: boolean;
}

export interface ServiceResultListDocumentCatVO {
    code?: string;
    success?: boolean;
    data?: DocumentCatVO[];
    message?: string;
    tid?: string;
}

export interface ProjectListDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 是否我创建的 */
    myCreate?: boolean;
    /** @description 状态: 0-已终止;1-已完成;2-进行中;3-未开始;4-已逾期; */
    status?: number;
}

export interface Payroll {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 项目名称 */
    itemName?: string;
    /** @description 发放类型 */
    sendType?: string;
    /** @description 发放时间 */
    sendTime?: string;
    /** @description 发放月份 */
    sendMonth?: number;
    /** @description 年份 */
    sendYear?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 操作人（员工ID）
     */
    staffId?: number;
    /** @description 操作时间 */
    operateTime?: string;
    /** @description 发放部门ids */
    deptIds?: string;
    /** @description 0 数据解析失败 1 数据解析成功 2 提交审核 3 审核通过 4 审核驳回  5 待发放  6 已发放 7 已查看 */
    status?: number;
    headerJson?: string;
    showJson?: string;
    statusStr?: string;
    /** @description 发放部门 */
    deptList?: OrgDept[];
    detailList?: PayrollDetail[];
    detailDynamicList?: PayrollDetailDynamic[];
    payrollFileInitRst?: PayrollFileInitRst;
    payrollExcelDynamicDataVO?: PayrollExcelDynamicDataVO;
}

export interface HelpES {
    /**
     * Format: int64
     * @description 文档主键（映射ES的_id，与数据库DocumentInfo的id一致）
     */
    id?: number;
    /**
     * Format: int64
     * @description 公司编号（多租户隔离，非核心但保留）
     */
    coNo?: number;
    /**
     * @description 文档名称 - 核心存入字段（仅保留你的@Field注解支持的属性）
     *     去掉非法的fields属性，彻底解决爆红
     */
    documentName?: string;
    /** @description 富文本内容 - 核心存入字段（仅保留你的@Field注解支持的属性） */
    richText?: string;
    /** @description 辅助字段（语法正确，无爆红） */
    status?: number;
    /** Format: int64 */
    catId?: number;
    highlightedName?: string;
    highlightedContent?: string;
    modifyTime?: string;
    catName?: string;
    staffNameIdPicVO?: StaffNameIdPicVO;
}

export interface ServiceResultPayrollExcelDynamicDataVO {
    code?: string;
    success?: boolean;
    data?: PayrollExcelDynamicDataVO;
    message?: string;
    tid?: string;
}

export interface BaseDeleteDTO {
    /** Format: int64 */
    id?: number;
}

export interface AttendanceReport {
    /** @description 考勤概况 */
    generalSituation?: ShiftAccountGeneralSituation;
    /** @description 异常统计 */
    abnormalStatistics?: AttendanceAbnormalStatistics;
}

export interface OvertimeAccountingRule {
    /** @description 核算方式 (1：计为调休；2：计算加班费；3：员工自选) */
    accountingMethod: number;
    /** @description 调休换算比例 */
    ratio?: number;
    /** @description 调休假生效方式（1：即时生效；2：下月生效；3：延迟生效） */
    effectiveMethod?: number;
    /** @description 延迟天数 */
    delayDays?: number;
    /** @description 假期有效天数 */
    validDays: number;
}

export interface ServiceResultListBngRole {
    code?: string;
    success?: boolean;
    data?: BngRole[];
    message?: string;
    tid?: string;
}

export interface ServiceResultListBngCompany {
    code?: string;
    success?: boolean;
    data?: BngCompany[];
    message?: string;
    tid?: string;
}

export interface ServiceResultSysPost {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: SysPost;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageSysDictData {
    code?: string;
    success?: boolean;
    data?: PageSysDictData;
    message?: string;
    tid?: string;
}

export interface ServiceResultCompanyThirdPartyConfig {
    code?: string;
    success?: boolean;
    data?: CompanyThirdPartyConfig;
    message?: string;
    tid?: string;
}

export interface ListExportLogRequest {
    current?: number;
    size?: number;
    search?: string;
    order?: OrderCondition[];
    type?: string[];
    beginTime?: string;
    endTime?: string;
}

export interface ServiceResultSysLoginDevice {
    code?: string;
    success?: boolean;
    data?: SysLoginDevice;
    message?: string;
    tid?: string;
}

export interface ExportBaseRequestDeptExportRO {
    type: string;
    param?: DeptExportRO;
}

export interface CustomFieldCreateROCreate {
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheCreate;
    /** @description 字段所属业务分类 （"staff": 员工） */
    ownerType: string;
    /** @description 字段所属分组 （"staff": ["employee": 员工信息；"person": 个人信息]） */
    fieldGroup: string;
    /** @description 字段显示名 */
    displayName: string;
    /** @description 字段类型（1：文本；2：日期；3：选项） */
    fieldType: number;
    /** @description 字段值可选项（fieldType=3时必填） */
    options?: string[];
}

export interface BngUserCreate {
    /**
     * Format: int64
     * @description 用户ID
     */
    userId?: number;
    /**
     * Format: int64
     * @description 部门ID,关联:sm_department.id
     */
    departmentNo?: number;
    /**
     * Format: int64
     * @description 家庭ID: login_type=3时是销售商ID , login_type=1时是门店ID
     */
    familyId?: number;
    /** @description 用户名 */
    userName?: string;
    /** @description 登录类型: 1=店铺员工登录,2=公司员工登录,3=销售商登录 */
    loginType?: number;
    /** @description 密码 */
    password?: string;
    /** @description 姓名 */
    nickName?: string;
    /** @description 简称,最多4位，用于箱号 */
    shortName?: string;
    /** @description 角色名称集合(多个用英文逗号分隔) */
    roleList?: string;
    /** @description 特殊身份标记,可多个,用英文逗号分隔 */
    specialFlags?: string;
    /** @description 手机号,单个公司内部必须是唯一的 */
    mobile?: string;
    /** @description 邮件 */
    email?: string;
    /** @description 真实姓名 */
    realName?: string;
    /** @description 可解密密匙,手机号验证码方式的时候用 */
    reversiblePassword?: string;
    /** @description 密码修改时间 */
    passwordModifyTime?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 超管标记 */
    adminFlag?: number;
    /** @description 性别,0:保密;1=男;2=女 */
    gender?: number;
    /** @description 来源: 1=后台创建,2=后台导入,3=前台注册 */
    refer?: number;
    /** @description 手机认证标记: 0=未认证,1=已认证 */
    mobileValidFlag?: number;
    /** @description 邮箱认证标记: 0=未认证,1=已认证 */
    emailValidFlag?: number;
    /** @description 头像 */
    headerImage?: string;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 授权仓库编号 */
    warehouseList?: string;
    /** @description 授权仓库名称 */
    warehouseName?: string;
    /** @description 标记,0=禁用,1=启用 */
    enabled?: number;
    /** @description 登录状态：0登录，1登出 */
    loginStatus?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 默认登录企业
     */
    defaultCono?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 重置密码：0=未重置，1=已重置 */
    resetPassword?: number;
    /** @description 上一次登录时间 */
    lastLoginTime?: string;
    /** @description 微信unionid */
    wxUnionId?: string;
    /** @description 微信公众号openid */
    wppOpenId?: string;
    /** @description 是否订阅公众号： 1-是 0-否 */
    isSubscribe?: number;
}

export interface ServiceResultAppraiseItem {
    code?: string;
    success?: boolean;
    data?: AppraiseItem;
    message?: string;
    tid?: string;
}

export interface AppraiseGroupVO {
    /**
     * Format: int64
     * @description 字典编码
     */
    dictCode?: number;
    /**
     * Format: int64
     * @description 字典类型id
     */
    dictTypeId?: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典标签 */
    dictLabel?: string;
    /** @description 字典键值 */
    dictValue?: string;
    /** @description 字典类型 */
    dictType?: string;
    /** @description 样式属性（其他样式扩展） */
    cssClass?: string;
    /** @description 表格回显样式 */
    listClass?: string;
    /** @description 是否默认（Y是 N否） */
    isDefault?: string;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 字典类型名称 */
    dictTypeName?: string;
    /** @description 指标 */
    itemList?: AppraiseItemVO[];
    /** @description 包含指标数量 */
    counts?: number;
}

export interface HrEditROModify {
    /** Format: int64 */
    id: number;
}

export interface RatingConfig {
    ratings?: RatingLevel[];
    /**
     * @description 是否支持手动判分
     * @default false
     */
    allowManualAdjustment: boolean;
    /** @default 5 */
    maxLevels: number;
    currentLevelCount?: number;
    /** @description 1 SABCD 2 ABCD 3 自定义 */
    type?: number;
}

export interface MapListCustomFieldConfigItemCreate {
    key?: keyCreate[];
}

export interface OrderConditionQuery {
    /** @description 排序字段 */
    orderBy?: string;
    /** @description 排序规则（ASC，DESC） */
    sorter?: string;
}

export interface ServiceResultAppraiseTableDetailVO {
    code?: string;
    success?: boolean;
    data?: AppraiseTableDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultListLong {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: number[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface MapListAppraiseItemPostNumsVO {
    key?: key[];
}

export interface OrderCondition {
    /** @description 排序字段 */
    orderBy?: string;
    /** @description 排序规则（ASC，DESC） */
    sorter?: string;
}

export interface TaskItemVO {
    /**
     * Format: int64
     * @description 任务ID
     */
    id?: number;
    /** @description 任务标题 */
    title?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay?: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate?: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate?: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate?: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type?: number;
    /**
     * Format: int64
     * @description 创建人id
     */
    creatorId?: number;
    /** @description 创建人名称 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
}

export interface ExportBaseRequestStaffExportParam {
    type: string;
    param?: StaffExportParam;
}

export interface DocFilePresignedVO {
    /**
     * Format: int64
     * @description 文件ID
     */
    id?: number;
    /** @description 文件名称 */
    name?: string;
    /** @description 时效网址 */
    url?: string;
    /**
     * Format: int64
     * @description 文件大小
     */
    fileSize?: number;
}

export interface TeamCalendarTaskVO {
    /** Format: int64 */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /** @description 任务标题 */
    title?: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay?: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate?: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate?: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate?: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type?: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType?: number;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新时间 */
    updated?: string;
    /**
     * Format: int64
     * @description 创建人id
     */
    creatorId?: number;
    /**
     * Format: int64
     * @description 更新人id
     */
    updaterId?: number;
    /** @description 创建人名称 */
    creator?: string;
}

export interface TeamCalendarSettingCreateModifyDTOCreate {
    /** @description 设置项类型。0=通知相关，1=任务类型显示相关。详见字典类型为TEAM_CALENDAR_SETTING_TYPE的字典数据。 */
    type?: string;
    /** @description 设置项key */
    key?: string;
    /** @description 设置项value */
    value?: string;
    /** @description 值数据类型。设置项value的数据类型，String=字符串，Boolean=布尔值,Integer=32位有符号整形,Long=64位有符号整形,Double=64位浮点数,Float=32位浮点数等等 */
    valueDatatype?: string;
}

export interface TaskTypeDisplayItem {
    /** @description 任务类型。meeting=会议安排，onBusiness=外部活动/差旅信息，milestone=任务里程碑，interview=面试安排，birthday=成员生日提醒。 */
    taskType?: string;
    /** @description 是否显示 */
    isDisplay?: boolean;
}

export interface TaskKeyDisplayItem {
    /** @description 任务类型。meeting=会议安排，onBusiness=外部活动/差旅信息，milestone=任务里程碑，interview=面试安排，birthday=成员生日提醒。 */
    taskKey?: string;
    /** @description 是否显示 */
    isDisplay?: boolean;
}

export interface ServiceResultStaffSelectionDetailVO {
    code?: string;
    success?: boolean;
    data?: StaffSelectionDetailVO;
    message?: string;
    tid?: string;
}

export interface WorkPlanAnnotationVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 批注内容 */
    content?: string;
    /**
     * Format: int64
     * @description 创建人ID
     */
    createBy?: number;
    /**
     * Format: int64
     * @description 创建人名字
     */
    createName?: number;
    /**
     * Format: int64
     * @description 创建人部门
     */
    createDept?: number;
    /** @description 创建时间 */
    createTime?: string;
}

export interface DailyMonthlyReportDTO {
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 查看被订阅人ID列表 */
    subscribeUserIds?: string[];
    /** @description 类型：0-日报 1-周报 2-月报 */
    type?: number;
}

export interface ServiceResultListDailyMonthlyReportListVO {
    code?: string;
    success?: boolean;
    data?: DailyMonthlyReportListVO[];
    message?: string;
    tid?: string;
}

export interface TaskClassifyCreateDTO {
    /** @description 父级ID */
    parentId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 类型：0-工作计划；1-日月报；2-会议；3-工单； */
    type?: number;
    /** @description 关联用户ID列表 */
    relationUserIdList?: string[];
}

export interface LoginRO {
    /** @description 用户名 */
    username?: string;
    /** @description 密码 */
    password?: string;
    /** @description 手机号 */
    mobile?: string;
    /** @description 手机验证码 */
    smsCode?: string;
    /** @description 验证码 */
    captcha?: string;
    /** Format: int64 */
    rememberExpireAt?: number;
    /** @description 验证码的key值 */
    vk?: string;
    /** @description 微信扫码登录 */
    wxUnionId?: string;
    /** @description 微信扫码登录的临时凭证 */
    scanLoginCode?: string;
    /** @description 微信小程序jsCode登录 */
    jsCode?: string;
    /** @description 微信小程序静默登录时需要用到 */
    deviceId?: string;
    /**
     * @description 登录类型
     *     1：账号密码登录； 2：手机验证码登录； 3：微信扫码登录；4：微信小程序静默登录（jsCode）； 5：微信小程序手机号一键登录； 6：微信小程序其他手机号登录
     */
    loginType?: number;
}

export interface ServiceResultUserGroupDetailVO {
    code?: string;
    success?: boolean;
    data?: UserGroupDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultDataPermissionDetailVO {
    code?: string;
    success?: boolean;
    data?: DataPermissionDetailVO;
    message?: string;
    tid?: string;
}

export interface ForceGroup {
    /** @description ex okr kpi 工作能力 */
    key?: string;
    /** @description 等级 */
    display?: string;
    /** @description 分数 */
    score?: number;
}

export interface ValidateSmsCodeVO {
    uuid?: string;
}

export type JSONArray = Record<string, never>;

export interface CompanyAccountVO {
    /**
     * Format: int64
     * @description 用户ID
     */
    userId?: number;
    /** @description 昵称 */
    nickName?: string;
    /** @description 账户名 */
    username?: string;
    /** @description 邮箱 */
    email?: string;
    /** @description 手机号 */
    mobile?: string;
    /** @description 角色 */
    roleName?: string;
    /** @description 是否激活 */
    activated?: boolean;
    /** @description 最后登录时间 */
    lastLoginTime?: string;
    /** @description 账户使用人 */
    staffName?: string;
    /** @description 员工手机号 */
    staffMobile?: string;
}

export interface ServiceResultListPositionLevelVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PositionLevelVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultDocumentInfo {
    code?: string;
    success?: boolean;
    data?: DocumentInfo;
    message?: string;
    tid?: string;
}

export interface ClockWayQueryROQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
    /**
     * @description 参考
     *     打卡方式
     * @enum {integer}
     */
    clockWay?: never;
}

export interface ProjectDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 类型: 0-任务组;1-任务 */
    type?: number;
    /** @description 参与人选择器ID */
    participantSelectionId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 负责人姓名 */
    directorName?: string;
    /** @description 负责人职位 */
    directorPosition?: string;
    /** @description 负责人部门名称 */
    directorDeptName?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 描述 */
    desc?: string;
    /** @description 状态: 0-已终止;1-已完成;2-进行中;3-未开始;4-已逾期; */
    status?: number;
    /** @description 进度 */
    process?: number;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 完成时间 */
    finishTime?: string;
    /** @description 排序 */
    sorted?: number;
    /** @description 创建人 */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建人职位 */
    createByPosition?: string;
    /** @description 创建人部门名称 */
    createByDeptName?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 任务组 */
    children?: ProjectDetailVO[];
    /** @description 参与人选择器条件 */
    conditions?: SelectionCondition[];
    /** @description 项目附件列表 */
    attachmentList?: ProjectAttachmentListVO[];
    /** @description 项目参与人列表 */
    participantList?: ProjectParticipantListVO[];
}

export interface ServiceResultPayrollFileInitRst {
    code?: string;
    success?: boolean;
    data?: PayrollFileInitRst;
    message?: string;
    tid?: string;
}

export interface HrmStaffBaseInfo {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 头像 */
    avatar?: string;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 职位
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 离职日期（日期格式：yyyy-MM-dd） */
    departureDate?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 职级
     */
    positionLevel?: number;
    /**
     * Format: int64
     * @description 直属上级
     */
    staffLeader?: number;
    /**
     * Format: int64
     * @description 序列
     */
    sequence?: number;
    /** @description 人员类型 */
    staffAttribute?: number;
    /** @description 转正日期 */
    conversionDate?: string;
    /** @description 工作邮箱 */
    staffEmail?: string;
    /** @description 分机号 */
    staffTelephone?: string;
    /** @description 转正状态 */
    conversionStatus?: number;
    /** @description 工作地国家/地区 */
    workCountry?: string;
    /**
     * Format: int64
     * @description 法律主体
     */
    staffCompany?: number;
    /**
     * Format: int64
     * @description 职场
     */
    staffLocation?: number;
    /** @description 试用期 */
    probationMonths?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    isAdmin?: boolean;
    /** @description 创建时间（默认当前时间） */
    created?: string;
    /** @description 创建人 */
    creator?: string;
    /** @description 修改时间（更新时自动刷新） */
    updated?: string;
    /** @description 修改人 */
    updater?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /** @description 三方 部门id */
    thirdDeptId?: string;
    /** @description 三方 id */
    thirdId?: string;
    /** @description 三方 */
    third?: string;
    currentCompany?: HrCompanySummaryVO;
    companyList?: HrCompanySummaryVO[];
    /** Format: int64 */
    softVersionId?: number;
    orderNo?: number;
}

export interface OvertimeStatisticsDetail {
    /** @description 加班状态（1：正常；2：缺卡；3：时长不足） */
    status?: number;
    /** @description 加班时长 */
    hours?: number;
    /**
     * @description 工作日计为调休加班时长
     * @default public static final BigDecimal ZERO;
     */
    workdayVacationHours: number;
    /**
     * @description 工作日计为结薪加班时长
     * @default public static final BigDecimal ZERO;
     */
    workdaySalaryHours: number;
    /**
     * @description 休息日计为调休加班时长
     * @default public static final BigDecimal ZERO;
     */
    restDayVacationHours: number;
    /**
     * @description 休息日计为结薪加班时长
     * @default public static final BigDecimal ZERO;
     */
    restDaySalaryHours: number;
    /**
     * @description 节假日计为调休加班时长
     * @default public static final BigDecimal ZERO;
     */
    holidayVacationHours: number;
    /**
     * @description 节假日计为结薪加班时长
     * @default public static final BigDecimal ZERO;
     */
    holidaySalaryHours: number;
}

export interface OvertimeDuration {
    /** @description 时长单位（1：小时；2：天） */
    timeUnit?: number;
    /**
     * @description 取整模式（0: 向上取整，3: 向下取整，4: 四舍五入）
     * @default 4
     * @enum {integer}
     */
    roundingMode: never;
    /**
     * @description 保留小数位数（仅适用于四舍五入）
     * @default 1
     */
    scale: number;
    /**
     * @description 基数（适用于向上/向下取整）
     * @default BigDecimal.valueOf(0.5f)
     */
    cardinal: number;
    /**
     * @description 日折算小时数
     * @default BigDecimal.valueOf(8)
     */
    dayConvert2Hours: number;
}

export type key = Record<string, never>;

export interface ServiceResultOrgDept {
    code?: string;
    success?: boolean;
    data?: OrgDept;
    message?: string;
    tid?: string;
}

export interface ExportTaskInfo {
    type?: string;
    taskId?: string;
}

export interface DynamicExcelHandleRequestStaffImportParam {
    type: string;
    taskParam?: StaffImportParam;
    /** @description 源文件url */
    excelFileUrl: string;
    /** @description 原文件名 */
    fileName: string;
    /** @description 任务识别码 */
    identityCode: string;
    /** @description 实体字段与Excel表头字段映射关系 */
    dataFields: FieldMatchInfo[];
}

export interface FieldOption {
    /** @description 选项值 */
    option?: string;
    /** @description 是否启用 */
    enabled?: boolean;
}

export interface BngVersionPackageCreate {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 版本ID
     */
    versionId?: number;
    /** @description 最大用户数限制 */
    maxUsers?: number;
    /** @description 存储空间，格式如10GB */
    storage?: string;
    /** @description 有效期天数 */
    validityDays?: number;
    /** @description 短信条数配额 */
    smsQuota?: number;
    /** @description 电子合同条数配额 */
    contractQuota?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    version?: string;
    softName?: string;
    domain?: string;
    adminUser?: BngUserCreate[];
}

export interface FileUrlQueryVO {
    /** @description 文件下载链接 */
    fileUrl?: string;
}

export interface ServiceResultListAppraiseGroupVO {
    code?: string;
    success?: boolean;
    data?: AppraiseGroupVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultAppraiseConfig {
    code?: string;
    success?: boolean;
    data?: AppraiseConfig;
    message?: string;
    tid?: string;
}

export interface TargetBasedConfig {
    /** @description 每增加 */
    increaseUnit?: number;
    /** @description 每增加单位 .00, %, 个 , 次, 人, 分 */
    unit?: string;
    /** @description 加 */
    increaseScore?: number;
    /** @description 加分上限 */
    increaseScoreUpperLimit?: number;
    /** @description 加小数处理规则 1 四舍五入 2 抹0 3 进1 */
    decimalHandleRule?: string;
    /** @description 每减分 */
    decreaseUnit?: number;
    /** @description 每减分单位 .00, %, 个 , 次, 人, 分 */
    unitD?: string;
    /** @description 减 */
    decreaseScore?: number;
    /** @description 减分上限 */
    decreaseScoreLowerLimit?: number;
    /** @description 减小数处理规则 1 四舍五入 2 抹0 3 进1 */
    decimalHandleRuleD?: string;
    /**
     * @description 权重
     * @default 100
     */
    weight: number;
}

export interface StaffRosterQueryROQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
    /** @description 工号 */
    staffNumber?: string;
    /** @description 姓名 */
    personName?: string;
    /**
     * Format: int64
     * @description 部门
     */
    deptNo?: number;
    /** @description 员工状态 */
    staffStatus?: number;
    /** @description 员工类型（0：全职；1：兼职；2：劳务；3：临时；4：实习；7：外包；20：顾问） */
    staffAttribute?: number;
    /** @description 排除的员工类型 */
    excludeStaffAttribute?: number[];
    /** @description 转正状态（0：待转正；1：已转正；） */
    conversionStatus?: number;
    /** @description 合同状态（1：待签；2：到期） */
    contractStatus?: number;
    /** @description 查询字段 */
    fields?: string[];
}

export interface AppriasePostTableDTO {
    /** Format: int64 */
    postId?: number;
    /** Format: int64 */
    toPostId?: number;
    /**
     * @description 考核类型（1 月度 2 季度 3 半年度 4 年度）
     * @default 1
     */
    type: number;
}

export interface ServiceResultMapListAppraiseItemPostNumsVO {
    code?: string;
    success?: boolean;
    data?: MapListAppraiseItemPostNumsVO;
    message?: string;
    tid?: string;
}

export interface TeamCalendarTaskQueryItemVO {
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate?: string;
    /** @description 开始日期相同的任务列表 */
    taskList?: TaskItemVO[];
}

export interface DeptExportParam {
    exportFields?: ExportField[];
    /** @default false */
    mergeByGroup: boolean;
    /** @default false */
    isDynamic: boolean;
    name?: string;
}

export interface DocFileUploadSummary {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description bigint  文件上传人
     */
    staffNo?: number;
    /**
     * Format: int64
     * @description bigint  关联目录ID,  与 doc_dir.id 关联
     */
    dirId?: number;
    /** @description int  文件类型 0文件,1相册, 关联: doc_dir.type */
    fileType?: number;
    /** @description 上传日期 格式(yyyy-MM-dd) */
    uploadDate?: string;
    /** @description int 文件计数器 */
    fileCnt?: number;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    files?: DocFilePresignedVO[];
    staffName?: string;
    photo?: string;
}

export interface ServiceResultListTeamCalendarTaskVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarTaskVO[];
    message?: string;
    tid?: string;
}

export interface DocNoticeTypeCntVO {
    /**
     * Format: int64
     * @description 分类ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 分类下的公文计数器
     */
    cnt?: number;
}

export interface TeamCalendarSettingVO {
    /**
     * Format: int64
     * @description 主键
     */
    id?: number;
    /** @description 设置项类型。0=通知相关，1=任务类型显示相关。详见字典类型为TEAM_CALENDAR_SETTING_TYPE的字典数据。 */
    type?: string;
    /** @description 设置项key */
    key?: string;
    /** @description 设置项value */
    value?: string;
    /** @description 值数据类型。设置项value的数据类型，String=字符串，Boolean=布尔值,Integer=32位有符号整形,Long=64位有符号整形,Double=64位浮点数,Float=32位浮点数等等 */
    valueDatatype?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
}

export interface TeamCalendarSettingCreateModifyDTO {
    /** @description 提前多少天提醒 */
    noticeAdvanceDays: number;
    /** @description 任务类型显示设置项集合 */
    taskKeyDisplayItems: TaskKeyDisplayItem[];
}

export interface WorkPlanDetailVO {
    /** @description 记录ID */
    recordId?: string;
    /** @description 关联工作计划ID */
    workPlanId?: string;
    /** @description 父级工作计划ID */
    parentId?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 负责人姓名 */
    directorName?: string;
    /** @description 执行人选择器ID */
    executorSelectionId?: string;
    /** @description 执行人选择器数据 */
    executorCondition?: SelectionCondition[];
    /** @description 执行时间 */
    executorTime?: string;
    /** @description 标题 */
    title?: string;
    /** @description 工作计划描述 */
    description?: string;
    /** @description 工作计划来源 */
    source?: string;
    /** @description 进度 */
    progress?: number;
    /** @description 工作计划类型：1-协同；2-分别执行 */
    type?: number;
    /** @description 执行时间类型：1-当天；2-跨天；3-重复；4-到时间 */
    executionTimeType?: number;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 完成日期 */
    finishDate?: string;
    /** @description 执行时间重复类型：1-天；2-周；3-月 */
    executionTimeRepeatType?: number;
    /** @description 执行时间重复内容 */
    executionTimeRepeatContent?: string;
    /** @description 是否紧急 */
    urgentFlag?: boolean;
    /** @description 是否重要 */
    importantFlag?: boolean;
    /** @description 是否提醒 */
    reminderFlag?: boolean;
    /** @description 是否锁定结束时间 */
    clockEndDateFlag?: boolean;
    /** @description 提醒类型：1-提前xx分钟提醒；2-提前一天xx:xx提醒；3-当天xx:xx提醒 */
    reminderType?: number;
    /** @description 提醒具体时间 */
    reminderContent?: string;
    /** @description 是否年度重点 */
    yearPriority?: boolean;
    /** @description 状态：0-未执行；1-执行中；2-已完成；3-逾期 */
    status?: number;
    /** @description 任务类型:0-工作计划(任务);1-任务组;2-项目 */
    taskType?: number;
    /** @description 是否全部可见 */
    allShowFlag?: boolean;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 更新人ID */
    updateBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 企业ID */
    tenantId?: string;
    /** @description 附件列表 */
    attachmentList?: WorkPlanAttachmentVO[];
    /** @description 执行人信息 */
    executorList?: WorkPlanExecutorVO[];
    processRecordList?: WorkPlanProcessRecordVO[];
}

export interface ServiceResultDailyMonthlyReportVO {
    code?: string;
    success?: boolean;
    data?: DailyMonthlyReportVO;
    message?: string;
    tid?: string;
}

export interface TaskClassifyEditDTO {
    /** @description ID */
    id?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 类型：0-工作计划；1-日月报；2-会议；3-工单； */
    type?: number;
    /** @description 关联用户ID列表 */
    relationUserIdList?: string[];
}

export interface ForceStaffProject {
    /** @description STAFF_autoNo */
    uniKey?: string;
    staff?: StaffNameIdPicVO;
    /**
     * Format: int64
     * @description 考核表id
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description 员工id
     */
    staffId?: number;
    /** @default 2 */
    type: number;
    /** @description 考核状态 */
    status?: number;
    /** @description 等级 */
    display?: string;
    /** @description 分数 */
    score?: number;
    groupList?: ForceGroup[];
}

export interface ServiceResultValidateSmsCodeVO {
    code?: string;
    success?: boolean;
    data?: ValidateSmsCodeVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultJSONArray {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: JSONArray[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface BaseDetailQueryROQuery {
    /**
     * Format: int64
     * @description 资源ID
     */
    id?: number;
}

export interface ServiceResultListPayroll {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: Payroll[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface IPageHelpES {
    records?: HelpES[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
    /** Format: int64 */
    pages?: number;
}

export interface LoginDTO {
    username?: string;
    password?: string;
    /** Format: int64 */
    userId?: number;
    /** Format: int64 */
    coNo?: number;
    mobile?: string;
    /** @description 滑块验证码 */
    captcha?: string;
    mi?: string;
    /** Format: int64 */
    rememberExpireAt?: number;
    /** @description 验证码的key值 */
    vk?: string;
    code?: string;
    /** @description 1 账号密码 2手机验证码 3扫码 4快捷登录 */
    loginType?: string;
    /** Format: int64 */
    packageId?: number;
    token?: string;
    loginFrom?: string;
}

export interface OvertimeStatistics {
    /** @description 加班总时长 */
    overtimeHours?: number;
    /** @description 加班明细 */
    details?: OvertimeStatisticsDetail[];
}

export interface BngUser {
    /**
     * Format: int64
     * @description 用户ID
     */
    userId?: number;
    /**
     * Format: int64
     * @description 部门ID,关联:sm_department.id
     */
    departmentNo?: number;
    /**
     * Format: int64
     * @description 家庭ID: login_type=3时是销售商ID , login_type=1时是门店ID
     */
    familyId?: number;
    /** @description 用户名 */
    userName?: string;
    /** @description 登录类型: 1=店铺员工登录,2=公司员工登录,3=销售商登录 */
    loginType?: number;
    /** @description 密码 */
    password?: string;
    /** @description 姓名 */
    nickName?: string;
    /** @description 简称,最多4位，用于箱号 */
    shortName?: string;
    /** @description 角色名称集合(多个用英文逗号分隔) */
    roleList?: string;
    /** @description 特殊身份标记,可多个,用英文逗号分隔 */
    specialFlags?: string;
    /** @description 手机号,单个公司内部必须是唯一的 */
    mobile?: string;
    /** @description 邮件 */
    email?: string;
    /** @description 真实姓名 */
    realName?: string;
    /** @description 可解密密匙,手机号验证码方式的时候用 */
    reversiblePassword?: string;
    /** @description 密码修改时间 */
    passwordModifyTime?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 超管标记 */
    adminFlag?: number;
    /** @description 性别,0:保密;1=男;2=女 */
    gender?: number;
    /** @description 来源: 1=后台创建,2=后台导入,3=前台注册 */
    refer?: number;
    /** @description 手机认证标记: 0=未认证,1=已认证 */
    mobileValidFlag?: number;
    /** @description 邮箱认证标记: 0=未认证,1=已认证 */
    emailValidFlag?: number;
    /** @description 头像 */
    headerImage?: string;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 授权仓库编号 */
    warehouseList?: string;
    /** @description 授权仓库名称 */
    warehouseName?: string;
    /** @description 标记,0=禁用,1=启用 */
    enabled?: number;
    /** @description 登录状态：0登录，1登出 */
    loginStatus?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 默认登录企业
     */
    defaultCono?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 重置密码：0=未重置，1=已重置 */
    resetPassword?: number;
    /** @description 上一次登录时间 */
    lastLoginTime?: string;
    /** @description 微信unionid */
    wxUnionId?: string;
    /** @description 微信公众号openid */
    wppOpenId?: string;
    /** @description 是否订阅公众号： 1-是 0-否 */
    isSubscribe?: number;
}

export interface OvertimeRuleVO {
    /** Format: int64 */
    id?: number;
    name?: string;
    /** @description 加班类型（1：工作日加班；2：休息日加班；3：法定节假日加班） */
    overtimeType?: number;
    /** @description 加班有效时间规则（1：按审批时间；2：按打卡时长；3：在审批时间段内按打卡时长计算） */
    effectiveTimeRule?: number;
    /** @description 加班计算规则 */
    calculationRule?: OvertimeCalculateRule;
    /** @description 加班核算规则 */
    accountingRule?: OvertimeAccountingRule;
    /** @description 加班时长规则 */
    durationRule?: OvertimeDuration;
    /** @description 上班前是否允许加班 */
    beforeWorkEnabled?: boolean;
    /** @description 班次内休息时段是否允许加班 */
    breakTimeEnabled?: boolean;
    /** @description 下班后是否允许加班 */
    afterWorkEnabled?: boolean;
}

export interface MapObject {
    key?: key2;
}

export interface ServiceResult_3 {
    code?: string;
    success?: boolean;
    data?: null;
    message?: string;
    tid?: string;
}

export interface SysDictData {
    /**
     * Format: int64
     * @description 字典编码
     */
    dictCode?: number;
    /**
     * Format: int64
     * @description 字典类型id
     */
    dictTypeId?: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典标签 */
    dictLabel?: string;
    /** @description 字典键值 */
    dictValue?: string;
    /** @description 字典类型 */
    dictType?: string;
    /** @description 样式属性（其他样式扩展） */
    cssClass?: string;
    /** @description 表格回显样式 */
    listClass?: string;
    /** @description 是否默认（Y是 N否） */
    isDefault?: string;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 是否删除标志 */
    deleted?: boolean;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /** @description 字典类型名称 */
    dictTypeName?: string;
}

export interface ServiceResultExportTaskInfo {
    code?: string;
    success?: boolean;
    data?: ExportTaskInfo;
    message?: string;
    tid?: string;
}

export interface TaskListRequest {
    current?: number;
    size?: number;
    search?: string;
    order?: OrderCondition[];
    type?: string[];
    beginTime?: string;
    endTime?: string;
}

export interface CustomFieldVO {
    /**
     * Format: int64
     * @description 字段ID
     */
    id?: number;
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型（1：文本；2：日期；3：选项） */
    fieldType?: number;
    /** @description 字段可选项 */
    options?: FieldOption[];
}

export interface OrderLogCreate {
    /**
     * Format: int64
     * @description 自增ID
     */
    id?: number;
    /** @description 订单编号 */
    orderNo?: string;
    /** @description 商品名称 */
    productName?: string;
    /** @description 数量 */
    quantity?: string;
    /** @description 单价 */
    unitPrice?: number;
    /** @description 总价 */
    totalPrice?: number;
    /** @description 时间 */
    operateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件编号
     */
    softId?: number;
    /** @description 软件 */
    softName?: string;
    /** @description 软件编号 */
    versionName?: string;
    /**
     * Format: int64
     * @description 软件版本
     */
    softVersion?: number;
}

export interface ServiceResultFileUrlQueryVO {
    code?: string;
    success?: boolean;
    data?: FileUrlQueryVO;
    message?: string;
    tid?: string;
}

export interface RangeItem {
    /** @description 评价规则区间 */
    from?: number;
    /** @description 评价规则区间 null 表示无穷大 */
    to?: number;
    /** @description 结束值 运算符号 >, ≥, <, ≤ */
    optTo?: string;
    /** @description 起始值 运算符号 >, ≥, <, ≤ */
    optFrom?: string;
    /** @description 对应系数 */
    score?: number;
    /** @description 显示标识 */
    description?: string;
}

export interface AppraiseItemPostNumsVO {
    /**
     * Format: int64
     * @description 考核项id
     */
    id?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 单位 */
    unit?: string;
    /** @description 分组名称 */
    groupName?: string;
    /**
     * Format: int64
     * @description 分组id
     */
    groupId?: number;
    /** @description 是否常用 0 非常用 1 常用 */
    isCommon?: number;
    /** @description 涉及职位 */
    postNums?: number;
    /** @description 涉及员工 */
    staffNums?: number;
}

export interface ServiceResultListTeamCalendarTaskQueryItemVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarTaskQueryItemVO[];
    message?: string;
    tid?: string;
}

export interface ExportBaseRequestDeptExportParam {
    type: string;
    param?: DeptExportParam;
}

export interface PageDocFileUploadSummary {
    records?: DocFileUploadSummary[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface TeamCalendarTaskQueryListVO {
    /** @description 日历项id */
    id?: string;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /** @description 任务标题 */
    title?: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay?: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate?: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate?: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate?: string;
    /** @description 任务类型。参考{@link CalendarTaskType } */
    type?: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType?: number;
    /** @description 重复频率。0=日，1=周，2=月，3=年 */
    repeatFrequency?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /**
     * Format: int64
     * @description 创建人id
     */
    creatorId?: number;
    /**
     * Format: int64
     * @description 更新人id
     */
    updaterId?: number;
    /** @description 是否系统创建。false=不是，true=是 */
    isSystemCreate?: boolean;
    /** @description 创建人姓名 */
    creator?: string;
    /** @description 任务时间描述 */
    timeDescription?: string;
    /**
     * Format: int64
     * @description 任务id。不是日历项id。如果是默认行事历日历项，同一个重复任务的日历项，则id相同，只是日期范围不同而已。
     *     说明：后续可能根据这个来查询任务的详情
     */
    firstTaskId?: number;
    /** @description 任务进度百分比，不保留小数点。示例：50% */
    taskProgressPercent?: string;
    /** @description 任务延期天数。如果不延期，则为null */
    taskDelayDays?: number;
}

export interface ServiceResultListDocNoticeTypeCntVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocNoticeTypeCntVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultListTeamCalendarSettingVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarSettingVO[];
    message?: string;
    tid?: string;
}

export interface TaskTypeDisplayItem4 {
    /** @description 任务类型key。meeting=会议安排，onBusiness=外部活动/差旅信息，milestone=任务里程碑，interview=面试安排，birthday=成员生日提醒。 */
    taskType?: string;
    /** @description 任务类型标签 */
    label?: string;
    /** @description 是否显示 */
    isDisplay?: boolean;
}

export interface TaskKeyDisplayItem5 {
    /** @description 任务类型key。meeting=会议安排，onBusiness=外部活动/差旅信息，milestone=任务里程碑，interview=面试安排，birthday=成员生日提醒。 */
    taskKey?: string;
    /** @description 任务类型标签 */
    label?: string;
    /** @description 是否显示 */
    isDisplay?: boolean;
}

export interface ServiceResultWorkPlanDetailVO {
    code?: string;
    success?: boolean;
    data?: WorkPlanDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultDailyMonthlyReportDetailVO {
    code?: string;
    success?: boolean;
    data?: DailyMonthlyReportDetailVO;
    message?: string;
    tid?: string;
}

export interface ChangeCompanyRO {
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo: number;
}

export interface UserGroupRelationDTO {
    /** @description 部门或用户组ID */
    organizeId?: string;
    /** @description 用户ID */
    userId?: string[];
}

export interface DataPermissionRelationDTO {
    /** @description 组织类型: 0-部门; 1-用户组; 2-人 */
    organizeType?: number;
    /** @description 部门或用户组ID */
    organizeId?: string;
    /** @description 用户ID */
    userId?: string;
}

export interface ForceDept {
    /** @description DEPT_autoNo */
    uniKey?: string;
    /** @description 完成人数 */
    finishCount?: number;
    /** @description 需要校准人数 */
    needCount?: number;
    /**
     * Format: int64
     * @description 可以校准的人数
     */
    readyCount?: number;
    /**
     * @description 可不可以校准 0 不可以校准 1 可以校准
     * @default 0
     */
    optStatus: number;
    /**
     * @description 是否已校准 0 未校准 1 已校准
     * @default 0
     */
    ifResetStatus: number;
    /**
     * Format: int64
     * @description 部门id
     */
    autoNo?: number;
    /** @description 部门名字 */
    name?: string;
    /** @description 部门负责人 */
    leader?: StaffNameIdPicVO;
    /** @default 1 */
    type: number;
    /** @description 人数 */
    staffNums?: number;
    /** @description 统计 */
    summary?: AppraiseGradeDistribution[];
    /** @description 子部门 */
    children?: ForceDept[];
    staffProjectList?: ForceStaffProject[];
}

export interface PageCompanyAccountVO {
    records?: CompanyAccountVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface SearchVO {
    staffs?: OrgDeptStaff[];
    depts?: OrgDeptsLess[];
}

export interface ClockWaySaveROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 名称 */
    name: string;
    /** @description 打卡方式（1：wifi打卡；2：位置打卡；3：考勤机打卡） */
    clockWay: number;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 区 */
    district?: string;
    /** @description 地址 */
    address?: string;
    /** @description 打卡范围 */
    scope?: number;
    /** @description mac地址 */
    macAddress?: string;
    /** @description 纬度（GCJ-02坐标系） */
    lat?: number;
    /** @description 经度（GCJ-02坐标系） */
    lng?: number;
}

export interface ServiceResultIPageHelpES {
    code?: string;
    success?: boolean;
    data?: IPageHelpES;
    message?: string;
    tid?: string;
}

export interface AttendanceFlowStatistics {
    /** @description 缺卡次数 */
    missClockCount?: number;
    /** @description 补卡次数 */
    makeClockCount?: number;
    /** @description 外勤打卡次数 */
    outworkClockCount?: number;
    /** @description 出差时长 */
    travelHours?: number;
    /** @description 休假时长 */
    vacationHours?: number;
}

export interface BngVersionPackage {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 版本ID
     */
    versionId?: number;
    /** @description 最大用户数限制 */
    maxUsers?: number;
    /** @description 存储空间，格式如10GB */
    storage?: string;
    /** @description 有效期天数 */
    validityDays?: number;
    /** @description 短信条数配额 */
    smsQuota?: number;
    /** @description 电子合同条数配额 */
    contractQuota?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    version?: string;
    softName?: string;
    domain?: string;
    adminUser?: BngUser[];
}

export interface ServiceResultMapObject {
    code?: string;
    success?: boolean;
    data?: MapObject;
    message?: string;
    tid?: string;
}

export interface ServiceResultListSysDictData {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: SysDictData[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface StaffExportRO {
    exportFields?: ExportField[];
    mergeByGroup?: boolean;
    isDynamic?: boolean;
    /** @description 工号 */
    staffNumber?: string;
    /** @description 姓名 */
    staffName?: string;
    /**
     * Format: int64
     * @description 部门
     */
    deptNo?: number;
}

export interface ExcelColumnInfo {
    columnIndex?: number;
    columnName?: string;
}

export interface SyncPreviewResult {
    /** @description 待保存的部门列表 */
    deptsToSave?: OrgDept[];
    /** @description 待更新父部门ID的部门列表 */
    deptsToUpdate?: OrgDept[];
    /** @description 冲突的部门列表（已存在） */
    conflictDepts?: OrgDept[];
    /** @description 待保存的员工列表 */
    staffsToSave?: HrmStaffBaseInfo[];
    /** @description 冲突的员工列表（已存在或姓名重复） */
    conflictStaffs?: HrmStaffBaseInfo[];
    /** @description 预览说明信息 */
    message?: string;
}

export interface DeptImportParam {
    /** @description 是否覆盖导入 */
    override?: boolean;
}

export interface ServiceResultCustomFieldVO {
    code?: string;
    success?: boolean;
    data?: CustomFieldVO;
    message?: string;
    tid?: string;
}

export interface BngCompanyCreate {
    /**
     * Format: int64
     * @description 自增ID
     */
    autoNo?: number;
    /** @description 公司唯一编码 */
    uniCode?: string;
    /** @description 公司名称 */
    name?: string;
    /** @description 别名 */
    aliasName?: string;
    /** @description 说明 */
    note?: string;
    /** @description 数据状态,0=禁用;1=启用; */
    enabled?: number;
    /** @description 业务员 */
    salesPerson?: string;
    /** @description 注册人角色 中台添加：管理员 企业入驻:企业负责人 */
    registerRole?: string;
    /** @description 试用标记: 0=非试用,1=试用中,2=试用转正式 */
    trialFlag?: number;
    /** @description 试用结束限制: 1=不可登录,2=可登录但限制功能 */
    trialVerOverLimit?: number;
    /** @description 联系人 */
    contactUser?: string;
    /** @description 联系电话 */
    contactTel?: string;
    /** @description 电话校验标记,0=未校验,1=通过,2=校验失败 */
    telFlag?: number;
    /** @description 联系人邮箱 */
    contactEmail?: string;
    /** @description 邮箱校验标记,0=未校验,1=通过,2=校验失败 */
    emailFlag?: number;
    /** @description 是否开启水印 0 否 1是 */
    isWatermark?: boolean;
    /** @description 授权店铺个数 */
    authorizeShopNum?: number;
    /** @description 授权门店个数 */
    authorizeStoreNum?: number;
    /** @description 授权仓库个数 */
    authorizeWarehouseNum?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 省 */
    province?: string;
    /** @description 省编码 */
    provinceNo?: string;
    /** @description 市 */
    city?: string;
    /** @description 市编码 */
    cityNo?: string;
    /** @description 区 */
    area?: string;
    /** @description 区编码 */
    areaNo?: string;
    /** @description 公司详细地址 */
    address?: string;
    /** @description 行业 */
    industry?: string;
    /** @description 所属渠道 */
    channelName?: string;
    /**
     * Format: int64
     * @description 所属渠道
     */
    channelId?: number;
    /** @description 税号 */
    taxIdNum?: string;
    /** @description 认证状态(0=未认证，1=已认证) */
    approveStatus?: number;
    /** @description 授权到期时间 */
    authorizedTime?: string;
    /** @description logo */
    logo?: string;
    /** @description 行业ID */
    industryId?: number;
    /** @description 建库状态 [0:已作废 1:未建 10:新建 20:同步表 30:同步数据 40:完成] */
    copyTaskStatus?: number;
    /** @description 公司规模 */
    scale?: string;
    /** @description 创建人在企业中的职位 */
    registerPosition?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 入驻时选择的公司规模 */
    chooseScale?: number;
    code?: string;
    userName?: string;
    versionName?: string;
    password?: string;
    confirmPassword?: string;
    /** Format: int64 */
    registerSoftId?: number;
    bngVersionPackage?: BngVersionPackageCreate[];
    logs?: OrderLogCreate[];
    /** Format: int64 */
    versionId?: number;
    /** Format: int64 */
    softId?: number;
    defaultCo?: number;
}

export interface MapFieldValueVO {
    key?: key;
}

export interface FileUrlQueryROQuery {
    /** @description 任务ID */
    taskId: string;
}

export interface PercentageRangeConfig {
    ranges?: RangeItem[];
    /**
     * @description 权重
     * @default 100
     */
    weight: number;
}

export interface ServiceResultListAppraiseItemPostNumsVO {
    code?: string;
    success?: boolean;
    data?: AppraiseItemPostNumsVO[];
    message?: string;
    tid?: string;
}

export interface StaffDetailVO {
    /**
     * Format: int64
     * @description 员工ID
     */
    id?: number;
    /** @description 字段分组 */
    fieldGroups?: StaffFieldBusinessPointConfigVO[];
}

export interface DocFolderSaveDTO {
    /**
     * Format: int64
     * @description id,编辑的时候需要传递
     */
    id?: number;
    /** @description 文件夹名称,必填 */
    name: string;
    /**
     * Format: int64
     * @description 父ID, 没有上级的时候,传0,如:不传,则给0
     */
    parentId?: number;
    /**
     * Format: int64
     * @description 目录ID,必填
     */
    dirId: number;
}

export interface TeamCalendarTaskQueryDTOQuery {
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate: string;
    /**
     * @description 任务类型。默认为null,查询所有， 0=默认，不属于其他类型的都归属到这一类，1=会议安排，2=外部活动/差旅信息，3=任务里程碑，4=面试安排，5=成员生日提醒，6=工单。
     *     详见下面的枚举类
     */
    calendarTaskTypes?: number[];
}

export interface ServiceResultPageDocFileUploadSummary {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageDocFileUploadSummary;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultListTeamCalendarTaskQueryListVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: TeamCalendarTaskQueryListVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface DocNoticeFile {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 公文ID,关联doc_notice.id
     */
    nid?: number;
    /**
     * Format: int64
     * @description 员工ID,关联: hrm_staff_info.id
     */
    staffNo?: number;
    /**
     * Format: int64
     * @description 文件库目录ID,关联:doc_dir.id
     */
    fileSaveDirId?: number;
    /**
     * Format: int64
     * @description 文件库的文件ID,关联:doc_file.id
     */
    fileSaveId?: number;
    /** @description 文件名称 */
    fileName?: string;
    /**
     * Format: int64
     * @description 文件大小
     */
    fileSize?: number;
    /** @description 文件类型 */
    fileType?: number;
    /** @description oss的提供商,具体类别见StorageProvider.name的小写 */
    ossProvider?: string;
    /** @description oss网址/文件路径 */
    url?: string;
    /** @description oss的删除标记 0:未删/1:已删除 */
    ossDeleted?: number;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
}

export interface TeamCalendarSettingQueryVO {
    /** @description 提前多少天提醒 */
    noticeAdvanceDays?: number;
    /** @description 任务类型显示项集合 */
    taskKeyDisplayItems?: TaskKeyDisplayItem5[];
}

export interface ServiceResultListSelectionCondition {
    code?: string;
    success?: boolean;
    data?: SelectionCondition[];
    message?: string;
    tid?: string;
}

export interface NoticeDExportParam {
    /** @description 需要导出的列（isDynamic = true时，后端无对应模板类，表头列的顺序取决于表单提交的字段顺序，建议前端按一定规则给字段排序，指定字段order） */
    exportFields?: ExportField[];
    /**
     * @description 是否按字段分组汇总（双层表头）
     * @default false
     */
    mergeByGroup: boolean;
    /**
     * @description 是否无模板类动态导出
     * @default false
     */
    isDynamic: boolean;
    /**
     * Format: int64
     * @description 公文ID doc_notice.id
     */
    nid?: number;
}

export interface DailyMonthlyReportRecordsDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 内容 */
    content?: string;
    /** @description 经度 */
    longitude?: number;
    /** @description 纬度 */
    latitude?: number;
    /** @description 详细地址 */
    address?: string;
    /** @description 附件 */
    attachments?: DailyMonthlyReportRecordsAttachmentDTO[];
}

export interface BngRoleVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /** @description 角色名称 */
    name?: string;
    /** @description 标题 */
    title?: string;
    /** @description 数据范围编号 */
    dataRangeNo?: number;
    /** @description 数据范围名称 */
    dataRangeName?: string;
    /** @description 自定义数据范围-部门id集合,逗号分隔 */
    customDeptIds?: string;
    /** @description 自定义数据范围-用户id集合,逗号分隔 */
    customUserIds?: string;
    /** @description 固定角色: 0=No,1=Yes */
    fixedFlag?: number;
}

export interface UserGroupCreateDTO {
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 选择器ID */
    selectionId?: string;
}

export interface DataPermissionCreateDTO {
    /** @description 查看人选择器ID */
    userSelectionId?: string;
    /** @description 被查看人选择器ID */
    viewedUserSelectionId?: string;
    /** @description 权限数据类型： 0-全部；1-人事档案；2-绩效数据；3-考勤数据；4-薪酬数据；5-资产数据；6-奖惩数据；7-任务计划清单；8日月报； */
    typeList?: number[];
}

export interface AppraiseForceRuleVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 关联 appraise_config.id，表示属于哪套规则集
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 负责人id
     */
    leaderId?: number;
    /** @description 强制分布组名称，如“销售岗强制分布”、“管理层分布规则”等 */
    groupName?: string;
    /** @description 各等级强制分布比例（JSON格式），如：{"S": 10, "A": 20, "B": 50, "C": 15, "D": 5}，单位为百分比% */
    distribution?: string;
    /** @description 四舍五入规则  1 四舍五入 2 抹0 3 进1 */
    roundingRule?: string;
    /** @description 关联部门和职位集合 json格式 */
    refId?: string;
    refIdSelected?: string;
    /** @description 排序规则 逗号隔开 */
    sortRule?: string;
    /** @description 覆盖人数 */
    staffNums?: number;
    /** @description 覆盖人员列表 */
    staffList?: StaffNameIdPicVO[];
    refIdDetail?: RefIdDetail;
    /** @description 负责人 */
    leader?: StaffNameIdPicVO;
    /** @description 是否覆盖 0 不覆盖 1 覆盖 */
    skiped?: number;
    versionId?: number;
    /** @description 分布比例详情实体（映射distribution的JSON结构） */
    distributionDetailItemList?: DistributionDetailItem[];
    /** Format: int64 */
    historyId?: number;
    /** @description 统计 */
    summary?: AppraiseGradeDistribution[];
    /** @description 完成人数 */
    finishCount?: number;
    /** @description 需要校准人数 */
    needCount?: number;
    /**
     * Format: int64
     * @description 可以校准的人数
     */
    readyCount?: number;
    /** @description 可不可以校准 0 不可以校准 1 可以校准 */
    optStatus?: number;
    /** @description 是否已校准 0 未校准 1 已校准 */
    ifResetStatus?: number;
    deptList?: ForceDept[];
    /** @description key 是 sabcd value 是对应的员工考核表 */
    scoreList?: MapListForceStaffProject;
}

export interface PasswordSetRO {
    /** @description 新密码（RSA加密串） */
    password: string;
}

export interface ServiceResultPageCompanyAccountVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageCompanyAccountVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultSearchVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: SearchVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ClockWaySaveROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 名称 */
    name: string;
    /** @description 打卡方式（1：wifi打卡；2：位置打卡；3：考勤机打卡） */
    clockWay: number;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 区 */
    district?: string;
    /** @description 地址 */
    address?: string;
    /** @description 打卡范围 */
    scope?: number;
    /** @description mac地址 */
    macAddress?: string;
    /** @description 纬度（GCJ-02坐标系） */
    lat?: number;
    /** @description 经度（GCJ-02坐标系） */
    lng?: number;
}

export interface DailyReportVO {
    /** @description 考勤日期 */
    attendanceDate?: string;
    /** @description 考勤日类型（0：普通工作日；1：休息日；2：需要补班的工作日；3：法定节假日；4：免打卡） */
    dayType?: number;
    /** @description 员工基础信息 */
    staffInfo?: StaffBaseInfo;
    /** @description 考勤班次报表 */
    shiftReport?: AttendanceReport;
    /** @description 加班统计 */
    overtimeStatistics?: OvertimeStatistics;
    /** @description 假勤统计 */
    flowStatistics?: AttendanceFlowStatistics;
}

export interface OrderLog {
    /**
     * Format: int64
     * @description 自增ID
     */
    id?: number;
    /** @description 订单编号 */
    orderNo?: string;
    /** @description 商品名称 */
    productName?: string;
    /** @description 数量 */
    quantity?: string;
    /** @description 单价 */
    unitPrice?: number;
    /** @description 总价 */
    totalPrice?: number;
    /** @description 时间 */
    operateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件编号
     */
    softId?: number;
    /** @description 软件 */
    softName?: string;
    /** @description 软件编号 */
    versionName?: string;
    /**
     * Format: int64
     * @description 软件版本
     */
    softVersion?: number;
}

export interface PageOvertimeRuleVO {
    records?: OvertimeRuleVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultSysDictData {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: SysDictData;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ExportBaseRequestStaffExportRO {
    type: string;
    param?: StaffExportRO;
}

export interface ServiceResultSyncPreviewResult {
    code?: string;
    success?: boolean;
    data?: SyncPreviewResult;
    message?: string;
    tid?: string;
}

export interface DynamicExcelHandleRequestDeptImportParam {
    type: string;
    taskParam?: DeptImportParam;
    /** @description 源文件url */
    excelFileUrl: string;
    /** @description 原文件名 */
    fileName: string;
    /** @description 任务识别码 */
    identityCode: string;
    /** @description 实体字段与Excel表头字段映射关系 */
    dataFields: FieldMatchInfo[];
}

export interface LoginCacheCreate {
    errorTimes?: number;
    /** Format: int64 */
    userId?: number;
    token?: string;
    bngUser?: BngUserCreate;
    lastLoginTime?: string;
    companyList?: BngCompanyCreate[];
    currentBngCompany?: BngCompanyCreate;
    /** Format: int64 */
    currentSoftId?: number;
    /** Format: int64 */
    currentSoftVersionId?: number;
    /** Format: int64 */
    coNo?: number;
    isAdmin?: number;
    showCompanyList?: number;
}

export interface StaffRoster {
    /** Format: int64 */
    id?: number;
    /** @description 手机号 */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 证件类型（0 身份证/1 港澳通行证...） */
    identityType?: number;
    /** @description 身份证号 */
    identityCard?: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    /** @description 英文名 */
    enName?: string;
    /** @description 籍贯 */
    nativePlace?: string;
    /** @description 户口性质 */
    registeredFlag?: string;
    /** @description 户籍地址 */
    registeredAddress?: string;
    /** @description 健康证有效期 */
    healthCertExpiry?: string;
    /** @description 民族 */
    nation?: string;
    /** @description 婚姻状态(0:未婚/1:已婚/2:离异/3:丧偶) */
    marriageStatus?: number;
    /** @description 政治面貌(0:群众;1:团员;2:党员;3:民主党派) */
    politicCountenance?: string;
    /** @description 个人照片 */
    personalPhoto?: string;
    /** @description 证件照 */
    idPhoto?: string;
    /** @description 试用期薪资 */
    probationSalary?: number;
    /** @description 转正薪资 */
    regularSalary?: number;
    /** @description 试用期时长 */
    probationTime?: number;
    /** @description 计划转正时间 */
    planRegularDate?: string;
    /** @description 试用期延期(0:未延期;1:已延期) */
    probationDelayFlag?: number;
    /** @description 毕业学校 */
    highSchool?: string;
    /** @description 第一学历(博士7，硕士6，本科5，专科4，高中/职高3，初中2，小学1，无0) */
    firstEducation?: number;
    /** @description 社会工龄 */
    socialSeniority?: string;
    /** @description 工作年限 */
    workingYears?: number;
    /** @description 首次工作时间 */
    firstWorkingTime?: string;
    /** @description 用工属性(0:正式;1:临时工;2:实习生;3:外包) */
    employAttribute?: number;
    /** @description 邀请公司 */
    inviteCompany?: string;
    /** @description 档案链接 */
    archivesLink?: string;
    /** @description 附件 */
    attachment?: string;
    /** @description 定薪定级状态(0:未定薪定级;1:定级中;2:已完成) */
    salaryGradingStatus?: number;
    /** @description 昵称 */
    nickName?: string;
    /** @description 描述 */
    userDesc?: string;
    /** @description 是否试用(0:否;1:是) */
    isSetProbation?: number;
    /** @description 是否开通账户(0:否;1:是) */
    isOpenAccount?: number;
    /**
     * Format: int64
     * @description 系统角色编号
     */
    sysRoleNo?: number;
    /** @description 企业微信ID */
    qywechatId?: string;
    /** @description 钉钉ID */
    dingdingId?: string;
    /** @description 飞书ID */
    feishuId?: string;
    /** @description 招聘渠道(1:校招;2:社招) */
    recruitmentChannel?: number;
    /** @description 身份证有效期 */
    idExpiryDate?: string;
    /** @description 邮箱 */
    email?: string;
    /** @description 微信号 */
    wechatNumber?: string;
    /** @description 现居地 */
    addressInfo?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 微信公众号的UnionId */
    weixinUnionId?: string;
    /** @description 是否订阅公众号(0:是;1:否) */
    isSubscribe?: number;
    /** @description 排序 */
    sortIndex?: number;
    /** @description 超管标记(1:超管;0:普通) */
    adminFlag?: number;
    /** @description 是否需要审批流(0:否;1:是) */
    needFlow?: number;
    /** @description 转正薪资需要审批流程(0:否;1:是) */
    needFlowWithSalary?: number;
    /** @description 是否需要转正流程(0:否;1:是) */
    needFlowWithFormal?: number;
    /** @description 通知员工完善档案(0:否;1:是) */
    needNotice?: number;
    /** @description 员工工号生成方式(0:自动;1:手动) */
    staffNumberMode?: number;
    /** @description 婚育状况 */
    marriage?: string;
    /** @description 自定义字段 */
    customFields?: MapFieldValueVO;
}

export interface StaffFieldGroupVO {
    /**
     * Format: int64
     * @description 自定义分组ID（内置分组为空）
     */
    id?: number;
    /** @description 分组唯一标识 */
    groupIdentity?: string;
    /** @description 分组名称 */
    groupName?: string;
    /** @description 是否允许多值 */
    allowMultiply?: boolean;
    /** @description 命名空间 */
    namespace?: string;
}

export interface CoefficientRange {
    /** @description 起始完成率（含），如 100.0 表示 100% */
    from?: number;
    /** @description 结束完成率（不含），null 表示无穷大 */
    to?: number;
    /** @description 对应系数，如 1.5 */
    coefficient?: number;
    /** @description 描述，如“超额完成，激励发放” */
    description?: string;
}

export interface MapListFieldConfigItem {
    key?: key[];
}

export interface FieldItemConfigCreate {
    /** @description 配置项（SHOW: 是否可展示; EDITABLE: 可编辑性; REQUIRED: 必填性） */
    item: string;
    /** @description 是否可配置（入参不传） */
    configurable?: boolean;
    /** @description 指定配置项是否勾选（如：员工档案字段是否必填） */
    enabled: boolean;
}

export interface CompletionCoefficientConfig {
    /**
     * @description 权重
     * @default 100
     */
    weight: number;
    /** @description 系数/最终得分的上限（如“得分上限1.5分”） */
    coefficientUpperLimit?: number;
    /** @description 系数/最终得分的下限（如“完成率<80%时得0分”）存的是80 */
    coefficientLowerLimit?: number;
    /** @description 触发下限的阈值（如“完成率<80%”中的80%） */
    lowerLimitThreshold?: number;
    /** @description 小数处理规则 1 四舍五入 2 抹0 3 进1 */
    decimalHandleRule?: string;
}

export interface AppraiseStaffCreateDTO {
    /**
     * Format: int64
     * @description 主键 ID
     */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 类型（1：月度，2：季度，3：半年度，4：年度） */
    type?: number;
    /** @description 年份 */
    year?: number;
    /** @description 月份 */
    month?: number;
    /** @description 考核周期-结束月份 */
    endMonth?: number;
    /** @description 考核周期-结束年份 */
    endYear?: number;
    /** @description 考核有效期 */
    expirDate?: string;
    /** @description 可以开始考试的时间 */
    examTime?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 涉及人员数 */
    staffNums?: number;
    /** @description 创建时间 */
    createTime?: string;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
}

export interface ServiceResultStaffDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: StaffDetailVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface TeamCalendarTaskQuerySelfCreateVO {
    /**
     * Format: int64
     * @description 任务ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /** @description 任务标题 */
    title?: string;
    /** @description 任务描述 */
    description?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    isCrossDay?: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    isDuplicate?: boolean;
    /** @description 任务开始日期。格式：yyyy-MM-dd */
    startDate?: string;
    /** @description 任务结束日期。格式：yyyy-MM-dd */
    endDate?: string;
    /** @description 任务类型。0=手动创建类型，1=员工关怀类型 */
    type?: number;
    /** @description 通知类型。0=全公司，1=本部门，2=本部门及以下部门，3=自定义部门人员 */
    noticeType?: number;
    /** @description 重复频率。0=日，1=周，2=月，3=年 */
    repeatFrequency?: number;
    /** @description 是否将事项同步至任务计划清单。0=否，1=是 */
    isSyncToTaskPlan?: boolean;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /**
     * Format: int64
     * @description 创建人id
     */
    creatorId?: number;
    /**
     * Format: int64
     * @description 更新人id
     */
    updaterId?: number;
    /** @description 创建人名称 */
    creator?: string;
    /** @description 创建日期 */
    createDate?: string;
    /** @description 任务时间描述 */
    timeDescription?: string;
    /** @description 是否系统创建。false=不是，true=是 */
    isSystemCreate?: boolean;
    /** @description 创建者头像 */
    creatorPersonalPhoto?: string;
    /** @description 要通知的员工的信息 */
    noticeStaffInfos?: TeamCalendarTaskNoticeStaffInoVO[];
    /** @description 附件信息 */
    attachments?: TeamCalendarTaskAttachmentVo[];
}

export interface DocFileUploadSummaryDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /**
     * @description 查看类型: viewType的缩写;
     *     my_publish = 我发布的
     *     必传
     */
    vt: string;
    /** @description 当vt=dir时 必传 */
    vids?: number[];
}

export interface DocNoticeD {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 公文ID,关联doc_notice.id
     */
    nid?: number;
    /**
     * Format: int64
     * @description 员工ID,关联: hrm_staff_info.id
     */
    staffNo?: number;
    /** @description 是否阅读, 0:未读 1:已读 */
    isRead?: number;
    /** @description 签阅状态 0:未签 1:待重签,10:已签, */
    signStatus?: number;
    /** @description 要求签阅方式 0:未知,1:电子手写签 2:线下签 3:电子证书签 */
    requireSignType?: number;
    /** @description 员工实际签阅方式 0:未知,1:电子手写签 2:线下签 3:电子证书签 */
    staffSignType?: number;
    /** @description oss的提供商,具体类别见StorageProvider.name的小写 */
    ossProvider?: string;
    /** @description 签阅/附件的oss-url */
    signFileUrl?: string;
    /** @description 签阅时间 */
    signTime?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /** @description 员工部门名称 */
    deptName?: string;
    /** @description 员工职位名称 */
    positionName?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工照片 */
    staffPhoto?: string;
    /** @description 员工状态名称 */
    staffStatusName?: string;
    /** @description 员工线上签名集合 */
    staffSigns?: StaffSignLessVO[];
}

export interface DocNoticeRange {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 公文ID
     */
    nid?: number;
    /** @description 权限渠道:  0员工 1部门 */
    channel?: number;
    /** @description 视角类型: 1=仅可以, -1=排除的 */
    rangeType?: number;
    /**
     * Format: int64
     * @description 值:: 员工ID/部门ID
     */
    val?: number;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
}

export interface ServiceResultTeamCalendarSettingQueryVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: TeamCalendarSettingQueryVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ExportBaseRequestNoticeDExportParam {
    /** @description 导出任务类型 */
    type: string;
    /** @description 导出任务自定义参数 */
    param?: NoticeDExportParam;
}

export interface WorkPlanCreateDTO {
    /** @description 父级工作计划ID */
    parentId?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 会议决议ID */
    meetingResoluteId?: string;
    /** @description 项目ID */
    projectId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 执行人选择器ID */
    executorSelectionId?: string;
    /** @description 标题 */
    title?: string;
    /** @description 工作计划描述 */
    description?: string;
    /** @description 工作计划来源 */
    source?: string;
    /** @description 工作计划类型：1-协同；2-分别执行 */
    type?: number;
    /** @description 执行时间类型：1-当天；2-跨天；3-重复；4-到时间 */
    executionTimeType?: number;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 执行时间重复类型：1-天；2-周；3-月 */
    executionTimeRepeatType?: number;
    /** @description 执行时间重复内容 */
    executionTimeRepeatContent?: string;
    /** @description 是否紧急 */
    urgentFlag?: boolean;
    /** @description 是否重要 */
    importantFlag?: boolean;
    /** @description 是否提醒 */
    reminderFlag?: boolean;
    /** @description 是否全部可见 */
    allShowFlag?: boolean;
    /** @description 是否锁定结束时间 */
    clockEndDateFlag?: boolean;
    /** @description 提醒类型：1-提前xx分钟提醒；2-提前一天xx:xx提醒；3-当天xx:xx提醒 */
    reminderType?: number;
    /** @description 提醒具体时间 */
    reminderContent?: string;
    /** @description 是否年度重点 */
    yearPriority?: boolean;
    /** @description 任务类型:0-工作计划(任务);1-任务组;2-项目 */
    taskType?: number;
    /** @description 执行人ID列表 */
    executeUserIds?: string[];
    /** @description 附件列表 */
    attachments?: WorkPlanAttachmentDTO[];
    /** @description 子任务 */
    children?: WorkPlanCreateDTO[];
}

export interface DailyMonthlyReportCreateDTO {
    /** @description 类型：0-日报 1-周报 2-月报 */
    type?: number;
    /** @description 用户填报日期 */
    userReportDate?: string;
    /** @description 日报内容 */
    records?: DailyMonthlyReportRecordsDTO[];
    /** @description 关联任务ID列表 */
    workPlanIdList?: string[];
    /** @description 创建任务请求参数 */
    workPlanCreateDTOList?: WorkPlanCreateDTO[];
}

export interface ServiceResultListBngRoleVO {
    code?: string;
    success?: boolean;
    data?: BngRoleVO[];
    message?: string;
    tid?: string;
}

export interface UserGroupEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 名称 */
    name?: string;
    /** @description 描述 */
    description?: string;
    /** @description 选择器ID */
    selectionId?: string;
}

export interface DataPermissionEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 查看人选择器ID */
    userSelectionId?: string;
    /** @description 被查看人选择器ID */
    viewedUserSelectionId?: string;
    /** @description 权限数据类型： 0-全部；1-人事档案；2-绩效数据；3-考勤数据；4-薪酬数据；5-资产数据；6-奖惩数据；7-任务计划清单；8日月报； */
    typeList?: number[];
}

export interface AppraiseRestVO {
    /** @description 最外层 统计 */
    summary?: AppraiseGradeDistribution[];
    /** @description 最外层 统计 所有的分组名字 */
    keyList?: string[];
    /** @description 当前考核项目 所有强制分布组 包括 无强制分布组 */
    ruleList?: AppraiseForceRuleVO[];
}

export interface PasswordUpdateRO {
    /** @description 新密码（RSA加密串） */
    password: string;
    /** @description 旧密码（RSA加密串） */
    oldPassword: string;
}

export interface ServiceResultListMapObject {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: MapObject[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface HrmStaffSign {
    /**
     * Format: int64
     * @description 签名ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description oss的提供商,具体类别见StorageProvider.name的小写 */
    ossProvider?: string;
    /** @description 签阅/附件的oss-url */
    signFileUrl?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
}

export interface StaffSignLessVO {
    /**
     * Format: int64
     * @description 签名ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description oss的提供商,具体类别见StorageProvider.name的小写 */
    ossProvider?: string;
    /** @description 签阅/附件的oss-url */
    signFileUrl?: string;
}

export interface ProjectAttachmentListVO {
    /** @description 附件地址 */
    attachmentUrl?: string;
    /** @description 附件名称 */
    attachmentName?: string;
}

export interface OrderItem {
    /** @description 需要进行排序的字段 */
    column?: string;
    /**
     * @description 是否正序排列，默认 true
     * @default true
     */
    asc: boolean;
}

export interface BngCompanySoft {
    /**
     * Format: int64
     * @description bigint(20)
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description bigint(11)  软件/工具ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description bigint(11)  版本ID
     */
    versionId?: number;
    versionName?: string;
    /** @description bigint(11)  类型：0应用，1工具 */
    type?: number;
    /**
     * Format: int64
     * @description bigint(11)  公司编号,租户标记
     */
    coNo?: number;
    /** @description tinyint(22)  启用 */
    enabled?: number;
    /** @description tinyint(4)  试用标记 */
    trialFlag?: number;
    /** @description int(8)  试用天数 */
    trialDays?: number;
    /** @description tinyint(4)  试用结束限制 */
    trialVerOverLimit?: number;
    /** @description datetime  授权到期时间 */
    authorizedTime?: string;
    /** @description decimal(12, 2)  购买的软件金额 */
    softExpense?: number;
    /** @description varchar(25) */
    creator?: string;
    /** @description datetime */
    created?: string;
    /** @description varchar(25) */
    updater?: string;
    /** @description datetime */
    updated?: string;
    /** @description varchar(255)  地址 */
    url?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /**
     * Format: int64
     * @description int(8)  余量
     */
    remaining?: number;
    /** @description 公司名称 */
    companyName?: string;
    contactTel?: string;
    contactEmail?: string;
    /** @description 软件名称 */
    name?: string;
    /**
     * Format: int64
     * @description 软件过期时间
     */
    expireDays?: number;
    /** @description 收费方式 [ACCOUNT=账号,SYSTEM=系统] */
    feeType?: string;
    /** @description 是否首购 0是 1否 */
    isFirstBuy?: number;
    /**
     * Format: int64
     * @description 策略ID
     */
    feeStrategyId?: number;
    /** @description 策略列表 */
    feeStrategyList?: Record<string, never>[];
    /** @description 单价 */
    salePrice?: number;
}

export interface ServiceResultPageOvertimeRuleVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageOvertimeRuleVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface OrgDeptAttribute {
    /**
     * Format: int64
     * @description 组织ID
     */
    autoNo?: number;
    /** @description 组织名称 */
    name?: string;
    /**
     * @description 是否已删除：0-未删除，1-已删除
     *     是否已删除
     *     0-未删除，1-已删除
     */
    isDeleted?: number;
    /**
     * @description 启用状态(0:不启用; 1:启用)
     *     启用状态
     *     0:不启用; 1:启用
     */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 创建时间 */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /** @description 修改时间 */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
}

export interface SysDictType {
    /**
     * Format: int64
     * @description 字典主键
     */
    dictId?: number;
    /** @description 字典名称 */
    dictName?: string;
    /** @description 字典类型 */
    dictType?: string;
    /** @description 状态（0正常 1停用） */
    status?: string;
    /** @description 创建者 */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新者 */
    updateBy?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
}

export interface StaffCustomFieldCreateROCreate {
    /** Format: int64 */
    id?: number;
    /** @description 字段所属分组唯一标识 */
    groupIdentity: string;
    /** @description 字段显示名 */
    displayName: string;
    /** @description 字段类型（1：文本；2：日期；3：选项） */
    fieldType: number;
    /** @description 字段值可选项（fieldType=3时必填） */
    options?: string[];
    /** @description 字段配置表 */
    configItems?: CustomFieldConfigCreate[];
}

export interface ServiceResultListStaffFieldGroupVO {
    code?: string;
    success?: boolean;
    data?: StaffFieldGroupVO[];
    message?: string;
    tid?: string;
}

export interface CompletionRatioConfig {
    /**
     * @description 输入类型: percentage, amount (金额/数量)
     * @default percentage
     */
    inputType: string;
    /** @description 新增：目标完成率（如 100.0 表示 100%） */
    targetRatio?: number;
    coefficientRanges?: CoefficientRange[];
    /**
     * @description 默认系数（未匹配时使用）
     * @default 0
     */
    defaultCoefficient: number;
    /**
     * @description 是否启用“最近匹配”（如 85% 匹配到 75%-90% 段）
     * @default false
     */
    useNearestMatch: boolean;
    /** @description 可选：自定义表达式，如 "min(1.5, actual/target * 1.5)" */
    formulaExpression?: string;
    /**
     * @description 是否在前端展示系数趋势图
     * @default true
     */
    showTrendChart: boolean;
}

export interface CustomFieldConfigCreate {
    /** @description 业务端点（STAFF_DETAIL: 员工端员工档案, STAFF_ENTRY_REGISTRATION: 员工端入职登记表, ADMIN_ADD_STAFF: 管理端添加人员） */
    point: string;
    configs: FieldItemConfigCreate[];
}

export interface AppraiseImportResult {
    success?: boolean;
    message?: string;
    /** @description 成功条数 */
    successCount?: number;
    /** @description 失败条数 */
    failCount?: number;
    /**
     * @description 错误详情
     * @default new ArrayList<>()
     */
    errorDetails: string[];
}

export interface DocDirRange {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description bigint  关联ID  外键: doc_dir.id
     */
    dirId?: number;
    /** @description int  权限类型 0员工 1部门 */
    channel?: number;
    /** @description 视角类型: 1=仅可以, -1=排除的 */
    rangeType?: number;
    /**
     * Format: int64
     * @description bigint  员工ID/部门ID
     */
    val?: number;
    /**
     * @description 权限字符串: 默认拥有可读权限,
     *     1=查看,
     *     2=下载,
     *     3=上传,
     *     4=创建目录
     */
    concatPowers?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    name?: string;
    photo?: string;
}

export interface ServiceResultListTeamCalendarTaskQuerySelfCreateVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarTaskQuerySelfCreateVO[];
    message?: string;
    tid?: string;
}

export interface MapLong {
    key?: number;
}

export interface DocNotice {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /**
     * Format: int64
     * @description 分类ID,关联:doc_notice_type.id
     */
    typeId?: number;
    /** @description 标题 */
    title?: string;
    /** @description 文件编号 */
    theCode?: string;
    /** @description 版本 */
    version?: string;
    /** @description 附件上传方式:  1 文件上传 2 文件库选择 */
    fileUploadType?: number;
    /** @description 文件主体 */
    issuingBody?: string;
    /** @description 发文概要 */
    theSummary?: string;
    /**
     * Format: int64
     * @description 人员选择器ID
     */
    staffSelectionId?: number;
    /** @description 需要移动端签名 0:不需要 1:需要 */
    needAppSign?: number;
    /** @description 限定签阅的天数, 0=不限制, 大于0的值表示限制 */
    requireSignDays?: number;
    /** @description 需要阅读时间 0:不需要 1:需要 */
    needReadTime?: number;
    /** @description 需要扫脸 0:不需要 1:需要 */
    needFace?: number;
    /** @description 新人签阅要求 0:不要求签阅 1:要求签阅 */
    signOfNew?: number;
    /** @description 必读 0否 1是 */
    mustRead?: number;
    /**
     * Format: int64
     * @description 文章所属人id,关联:hrm_staff_no.id
     */
    ownerNo?: number;
    /** @description 文章所属人 */
    ownerName?: string;
    /**
     * Format: int64
     * @description 发文人id,关联:hrm_staff_no.id
     */
    pubStaffNo?: number;
    /** @description 发文人 */
    pubStaffName?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 最近同步通知新人时间 */
    lastSyncTime?: string;
    /** @description 发布状态,0=等待发布,1=已撤回发布,10=已发布 */
    pubStatus?: number;
    /** @description 发布时间 */
    pubTime?: string;
    /**
     * Format: int64
     * @description 公文附件存储的文件库目录ID,关联:doc_dir.id
     */
    fileSaveDirId?: number;
    /** @description 知识库要求(0:不存储/1:存储) */
    wikiFlag?: number;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /** @description 公文下的附件集合(编辑) */
    fileList?: DocNoticeFile[];
    /** @description 公文下的阅读集合 */
    dList?: DocNoticeD[];
    /** @description 公文下的附件集合(阅读) */
    readFiles?: DocFilePresignedVO[];
    /** @description 小程序端查看的二维码的网址 */
    qrcodeUrl?: string;
    /** @description 发文人部门名称 */
    pubStaffDeptName?: string;
    /** @description 发文人职位名称 */
    pubStaffPostName?: string;
    /** @description 编辑人部门名称 */
    ownerStaffDeptName?: string;
    /** @description 编辑人职位名称 */
    ownerPostName?: string;
    userReadOrSignDetail?: DocNoticeD;
    /**
     * Format: int64
     * @description 要求的员工总数
     */
    staffSum?: number;
    /**
     * Format: int64
     * @description 已读的员工总数
     */
    hasReadStaffSum?: number;
    /**
     * Format: int64
     * @description 已签的员工总数
     */
    hasSignStaffSum?: number;
    /** @description 公文类型名称, 来自: doc_notice_type.name */
    typeName?: string;
    /** @description 公文人员选择范围解析类 */
    staffSelectionDetail?: StaffSelectionDetailVO;
}

export interface SelectionConditionCreate {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别；5:职级；6:序列；7:司龄；8:用户组；100：全公司)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 100;
    /**
     * @description 比较运算符（1：包含；2：不包含；3：大于等于；4：小于等于）
     * @enum {integer}
     */
    operator?: 1 | 2 | 3 | 4 | 5;
    /** @description 维度数据 */
    data?: StaffDimensionDataCreate[];
}

export interface WorkPlanEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 父级工作计划ID */
    parentId?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 项目ID */
    projectId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 执行人选择器ID */
    executorSelectionId?: string;
    /** @description 标题 */
    title?: string;
    /** @description 工作计划描述 */
    description?: string;
    /** @description 工作计划来源 */
    source?: string;
    /** @description 工作计划类型：1-协同；2-分别执行 */
    type?: number;
    /** @description 执行时间类型：1-当天；2-跨天；3-重复；4-到时间 */
    executionTimeType?: number;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 执行时间重复类型：1-天；2-周；3-月 */
    executionTimeRepeatType?: number;
    /** @description 执行时间重复内容 */
    executionTimeRepeatContent?: string;
    /** @description 是否紧急 */
    urgentFlag?: boolean;
    /** @description 是否重要 */
    importantFlag?: boolean;
    /** @description 是否提醒 */
    reminderFlag?: boolean;
    /** @description 提醒类型：1-提前xx分钟提醒；2-提前一天xx:xx提醒；3-当天xx:xx提醒 */
    reminderType?: number;
    /** @description 提醒具体时间 */
    reminderContent?: string;
    /** @description 是否年度重点 */
    yearPriority?: boolean;
    /** @description 排序 */
    sorted?: number;
    /** @description 是否全部可见 */
    allShowFlag?: boolean;
    /** @description 是否锁定结束时间 */
    clockEndDateFlag?: boolean;
    /** @description 任务类型:0-工作计划(任务);1-任务组;2-项目 */
    taskType?: number;
    /** @description 附件列表 */
    attachments?: WorkPlanAttachmentDTO[];
}

export interface DailyMonthlyReportEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 日报内容 */
    records?: DailyMonthlyReportRecordsDTO[];
    /** @description 关联任务ID列表 */
    workPlanIdList?: string[];
    /** @description 创建任务请求参数 */
    workPlanCreateDTOList?: WorkPlanCreateDTO[];
}

export interface ServiceResultAppraiseRestVO {
    code?: string;
    success?: boolean;
    data?: AppraiseRestVO;
    message?: string;
    tid?: string;
}

export interface MobileSmsCodeRO {
    /** @description 手机号 */
    mobile: string;
    /** @description 短信验证码 */
    smsCode: string;
}

export interface CompanyUserQueryRO {
    current?: number;
    size?: number;
    search?: string;
    order?: OrderCondition[];
    /** @description 是否激活 */
    activated?: boolean;
}

export interface ProjectParticipantListVO {
    /** @description 参与人ID */
    participantId?: string;
    /** @description 参与人姓名 */
    participantName?: string;
    /** @description 参与人部门名称 */
    participantDeptName?: string;
    /** @description 参与人职位名称 */
    participantPositionName?: string;
}

export interface ServiceResultPayrollDetail {
    code?: string;
    success?: boolean;
    data?: PayrollDetail;
    message?: string;
    tid?: string;
}

export interface PageDailyReportVO {
    records?: DailyReportVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface BngCompany {
    /**
     * Format: int64
     * @description 自增ID
     */
    autoNo?: number;
    /** @description 公司唯一编码 */
    uniCode?: string;
    /** @description 公司名称 */
    name?: string;
    /** @description 别名 */
    aliasName?: string;
    /** @description 说明 */
    note?: string;
    /** @description 数据状态,0=禁用;1=启用; */
    enabled?: number;
    /** @description 业务员 */
    salesPerson?: string;
    /** @description 注册人角色 中台添加：管理员 企业入驻:企业负责人 */
    registerRole?: string;
    /** @description 试用标记: 0=非试用,1=试用中,2=试用转正式 */
    trialFlag?: number;
    /** @description 试用结束限制: 1=不可登录,2=可登录但限制功能 */
    trialVerOverLimit?: number;
    /** @description 联系人 */
    contactUser?: string;
    /** @description 联系电话 */
    contactTel?: string;
    /** @description 电话校验标记,0=未校验,1=通过,2=校验失败 */
    telFlag?: number;
    /** @description 联系人邮箱 */
    contactEmail?: string;
    /** @description 邮箱校验标记,0=未校验,1=通过,2=校验失败 */
    emailFlag?: number;
    /** @description 是否开启水印 0 否 1是 */
    isWatermark?: boolean;
    /** @description 授权店铺个数 */
    authorizeShopNum?: number;
    /** @description 授权门店个数 */
    authorizeStoreNum?: number;
    /** @description 授权仓库个数 */
    authorizeWarehouseNum?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 省 */
    province?: string;
    /** @description 省编码 */
    provinceNo?: string;
    /** @description 市 */
    city?: string;
    /** @description 市编码 */
    cityNo?: string;
    /** @description 区 */
    area?: string;
    /** @description 区编码 */
    areaNo?: string;
    /** @description 公司详细地址 */
    address?: string;
    /** @description 行业 */
    industry?: string;
    /** @description 所属渠道 */
    channelName?: string;
    /**
     * Format: int64
     * @description 所属渠道
     */
    channelId?: number;
    /** @description 税号 */
    taxIdNum?: string;
    /** @description 认证状态(0=未认证，1=已认证) */
    approveStatus?: number;
    /** @description 授权到期时间 */
    authorizedTime?: string;
    /** @description logo */
    logo?: string;
    /** @description 行业ID */
    industryId?: number;
    /** @description 建库状态 [0:已作废 1:未建 10:新建 20:同步表 30:同步数据 40:完成] */
    copyTaskStatus?: number;
    /** @description 公司规模 */
    scale?: string;
    /** @description 创建人在企业中的职位 */
    registerPosition?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 入驻时选择的公司规模 */
    chooseScale?: number;
    code?: string;
    userName?: string;
    versionName?: string;
    password?: string;
    confirmPassword?: string;
    /** Format: int64 */
    registerSoftId?: number;
    bngVersionPackage?: BngVersionPackage[];
    logs?: OrderLog[];
    /** Format: int64 */
    versionId?: number;
    /** Format: int64 */
    softId?: number;
    defaultCo?: number;
}

export interface OvertimeRuleQueryROQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
    /** @description 加班类型（1：工作日加班；2：休息日加班；3：法定节假日加班） */
    overtimeType: number;
}

export interface SaveRolePowerDTO {
    /** @description 角色ID */
    roleNo?: number;
    /** @description 角色名称 */
    roleName?: string;
    /** @description 菜单与操作权限 */
    menuPower?: string[];
    /** @description 敏感字段 */
    encryptField?: number[];
    /** @description 数据范围 */
    dataRange?: number;
    /** @description 自定义人员编号,必须在dataRange=3的时候必传 */
    customUserIds?: string;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 版本ID
     */
    versionId?: number;
}

export interface PageOrgDeptAttribute {
    records?: OrgDeptAttribute[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface PageSysDictType {
    records?: SysDictType[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface StaffWithConflictHrmStaffBaseInfo {
    /** @description 用户信息 */
    staff?: HrmStaffBaseInfo;
    /** @description 是否存在冲突 */
    exists?: boolean;
    /** @description 是否存在冲突 */
    nameexists?: boolean;
    /** @description 冲突描述 */
    msg?: string;
}

export interface PageStaffRoster {
    records?: StaffRoster[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface AddDeductConfig {
    max?: string;
    min?: string;
}

export interface BaseNosDTO {
    /** Format: int64 */
    id?: number;
    /** @description 指定要删除的ID集合 */
    ids: number[];
}

export interface ServiceResultAppraiseImportResult {
    code?: string;
    success?: boolean;
    data?: AppraiseImportResult;
    message?: string;
    tid?: string;
}

export interface FieldValueModify {
    /** @description 字段名 */
    fieldName: string;
    /** @description 字段值 */
    value?: string;
}

export interface TeamCalendarTaskNoticeUserVO {
    /**
     * Format: int64
     * @description 通知人id
     */
    userId?: number;
    /** @description 通知人名称 */
    userName?: string;
}

export interface DocFileSpaceVO {
    /**
     * Format: int64
     * @description 租户ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /**
     * Format: int64
     * @description 已使用空间总计
     */
    usedFileSizeSum?: number;
    /**
     * Format: int64
     * @description 已购入空间总计
     */
    boughtFileSizeSum?: number;
    /** @description 用户使用的按目录类型统计 */
    userUsedFileTypeSizeSum?: MapLong;
    /**
     * Format: int64
     * @description 用户使用的总计
     */
    userUsedFileSizeSum?: number;
}

export interface TeamCalendarTaskNoticeStaffInoVO {
    /**
     * Format: int64
     * @description 被通知员工的员工id
     */
    staffNo?: number;
    /** @description 被通知员工的姓名 */
    staffName?: string;
    /** @description 被通知员工的头像 */
    personalPhoto?: string;
}

export interface StaffSelectionConditionDataCreate {
    /** Format: int64 */
    id?: number;
    /** @description 条件列表 */
    conditions?: SelectionConditionCreate[];
}

export interface WorkPlanUpdateStatusDTO {
    /** @description 主键ID */
    workPlanId?: string;
    /** @description 记录ID */
    recordId?: string;
    /** @description 状态：0-未执行；1-执行中；2-已完成；3-逾期 */
    status?: number;
}

export interface DailyMonthlyReportAnnotationCreateDTO {
    /** @description 关联日月报ID */
    reportId?: string;
    /** @description 批注内容 */
    content?: string;
}

export interface ServiceResultProjectDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: ProjectDetailVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageDailyReportVO {
    code?: string;
    success?: boolean;
    data?: PageDailyReportVO;
    message?: string;
    tid?: string;
}

export interface LoginCache {
    errorTimes?: number;
    /** Format: int64 */
    userId?: number;
    token?: string;
    bngUser?: BngUser;
    lastLoginTime?: string;
    companyList?: BngCompany[];
    currentBngCompany?: BngCompany;
    /** Format: int64 */
    currentSoftId?: number;
    /** Format: int64 */
    currentSoftVersionId?: number;
    /** Format: int64 */
    coNo?: number;
    isAdmin?: number;
    currentSoftRoleList?: BngRole[];
    showCompanyList?: number;
}

export interface ServiceResultOvertimeRuleVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: OvertimeRuleVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageOrgDeptAttribute {
    code?: string;
    success?: boolean;
    data?: PageOrgDeptAttribute;
    message?: string;
    tid?: string;
}

export interface TimePeriodCreate {
    /** @description 开始时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    beginTime?: string;
    /** @description 结束时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    endTime?: string;
}

export interface ServiceResultPageSysDictType {
    code?: string;
    success?: boolean;
    data?: PageSysDictType;
    message?: string;
    tid?: string;
}

export interface SyncResult {
    deptResults?: DeptWithConflictOrgDept[];
    staffResults?: StaffWithConflictHrmStaffBaseInfo[];
    checkMsg?: string;
    companySyncRecord?: CompanySyncRecord;
}

export interface StaffCustomFieldVO {
    /**
     * Format: int64
     * @description 字段ID
     */
    id?: number;
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型（1：文本；2：日期；3：选项） */
    fieldType?: number;
    /** @description 字段配置表 */
    configItems?: CustomFieldConfig[];
    /** @description 字段值选项（仅选项类型字段有值） */
    optionItems?: FieldOptionItem[];
}

export interface ServiceResultPageStaffRoster {
    code?: string;
    success?: boolean;
    data?: PageStaffRoster;
    message?: string;
    tid?: string;
}

export interface StaffFieldGroupSaveROCreate {
    /** Format: int64 */
    id?: number;
    /** @description 分组名称 */
    groupName: string;
}

export interface ServiceResultDocFile {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocFile;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface AdminStaffGroupUpdateROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 字段分组唯一标识 */
    groupIdentity: string;
    /** @description 字段列表 */
    fields?: FieldValueModify[][];
}

export interface ServiceResultListTeamCalendarTaskNoticeUserVO {
    code?: string;
    success?: boolean;
    data?: TeamCalendarTaskNoticeUserVO[];
    message?: string;
    tid?: string;
}

export interface AppraiseStaffTarget {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 指标ID
     */
    itemId?: number;
    /**
     * Format: int64
     * @description 上级ID 第一级就是0
     */
    leaderId?: number;
    /** @description 年份 */
    year?: number;
    /** @description 备注 */
    remark?: string;
    createTime?: string;
    /** @description 单位 */
    unit?: string;
    /** @description 1 自动生成(岗位生成时自动创建  刷新按钮自动生成) 2 手动添加,导入,页面复制 */
    type?: number;
}

export interface ServiceResultDocFileSpaceVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocFileSpaceVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface PageTeamCalendarTaskQuerySelfCreateVO {
    records?: TeamCalendarTaskQuerySelfCreateVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface PageDocNotice {
    records?: DocNotice[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface WorkPlanUpdateProgressDTO {
    /** @description 主键ID */
    workPlanId?: string;
    /** @description 记录ID */
    recordId?: string;
    /** @description 进度 */
    progress?: number;
}

export interface DailyMonthlyReportAnnotationEditDTO {
    /** @description ID */
    id?: string;
    /** @description 关联日月报ID */
    reportId?: string;
    /** @description 批注内容 */
    content?: string;
}

export interface ServiceResultListMenuDTO {
    code?: string;
    success?: boolean;
    data?: MenuDTO[];
    message?: string;
    tid?: string;
}

export interface CompanyUserRO {
    /** @description 用户ID列表 */
    userIds: number[];
}

export interface HrmStaffBaseInfoQuery {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 证件类型（0 身份证/1 港澳通行证...） */
    identityType?: number;
    /** @description 身份证号 */
    identityCard?: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 在职状态(0:试用/1:在职/2:离职...) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    /** @description 创建时间（默认当前时间） */
    created?: string;
    /** @description 创建人 */
    creator?: string;
    /** @description 修改时间（更新时自动刷新） */
    updated?: string;
    /** @description 修改人 */
    updater?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /** @description 时间戳（冗余字段，兼容历史逻辑） */
    ts?: string;
    /** @description 照片 */
    personalPhoto?: string;
    planRegularDate?: string;
    currentCompany?: BngCompanyQuery;
    loginCache?: LoginCacheQuery;
}

export interface ServiceResultLoginCache {
    code?: string;
    success?: boolean;
    /** @description 错误码，0 表示成功，其他都是失败建议 弹窗提示message参数内容）建议当errorCode小于0时请弹出提示后，重新定位到登录界面 */
    errorCode?: number;
    message?: string;
    data?: LoginCache;
}

export interface BaseDetailQueryRODetail {
    /**
     * Format: int64
     * @description 资源ID
     */
    id: number;
}

export interface ServiceResultOrgDeptAttribute {
    code?: string;
    success?: boolean;
    data?: OrgDeptAttribute;
    message?: string;
    tid?: string;
}

export interface TieredTimeCreate {
    /** @description 工作分钟数 */
    workMinutes?: number;
    /** @description 扣除分钟数 */
    deductMinutes?: number;
}

export interface ServiceResultSysDictType {
    code?: string;
    success?: boolean;
    data?: SysDictType;
    message?: string;
    tid?: string;
}

export interface ServiceResultSyncResult {
    code?: string;
    success?: boolean;
    data?: SyncResult;
    message?: string;
    tid?: string;
}

export interface ServiceResultStaffCustomFieldVO {
    code?: string;
    success?: boolean;
    data?: StaffCustomFieldVO;
    message?: string;
    tid?: string;
}

export interface FieldOptionItem {
    /**
     * Format: int64
     * @description 选项ID（仅自定义字段有值）
     */
    optionId?: number;
    /** @description 选项名 */
    optionName?: string;
    /** @description 选项值 */
    optionValue?: Record<string, never>;
    /** @description 是否可用 */
    enabled?: boolean;
}

export interface StaffFieldGroupSaveROModify {
    /** Format: int64 */
    id: number;
    /** @description 分组名称 */
    groupName: string;
}

export interface CustomFieldConfig {
    /** @description 业务端点（STAFF_DETAIL: 员工端员工档案, STAFF_ENTRY_REGISTRATION: 员工端入职登记表, ADMIN_ADD_STAFF: 管理端添加人员） */
    point?: string;
    configs?: FieldItemConfig[];
}

export interface ServiceResultPageTeamCalendarTaskQuerySelfCreateVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageTeamCalendarTaskQuerySelfCreateVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageDocNotice {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageDocNotice;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface StaffSelectionResult {
    /** Format: int64 */
    id?: number;
    /** @description 姓名 */
    staffName?: string;
    /** @description 部门 */
    deptName?: string;
    /** @description 职位 */
    positionName?: string;
    /** @description 个人照片 */
    personalPhoto?: string;
}

export interface WorkPlanUpdateAssignDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 执行人选择器ID */
    executorSelectionId?: string;
    /** @description 类型：0-指派；1-转派 */
    type?: number;
}

export interface TaskViewFollowConfigVO {
    /** @description 关注人员ID */
    followUserId?: string;
}

export interface ServiceResultBngRoleVO {
    code?: string;
    success?: boolean;
    data?: BngRoleVO;
    message?: string;
    tid?: string;
}

export interface AppraiseForceResetListQueryDTO {
    /**
     * Format: int64
     * @description 考核表对应的id
     */
    id?: number;
    /** @description 区间视图 全部考核项 的时候 该值为空 */
    key?: string;
    totalCount?: number;
    rule?: AppraiseConfigForcedRule;
}

export interface PasswordResetRO {
    uuid?: string;
    password?: string;
}

export interface CompanyUserAccountCreateRO {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId: number;
    /**
     * Format: int64
     * @description 角色ID，为空时绑定默认角色
     */
    roleId?: number;
}

export interface ProjectCreateDTO {
    /** @description 父级ID */
    parentId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 描述 */
    desc?: string;
    /** @description 可见范围: 0-仅项目成员可见;1-所有人可见 */
    visibleRange?: number;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 参与人选择器ID */
    participantSelectionId?: string;
    /** @description 附件列表 */
    attachmentList?: ProjectAttachmentDTO[];
}

export interface ProjectAttachmentDTO {
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface DateRangeReportROQuery {
    /** Format: int64 */
    coNo?: number;
    currentStaff?: HrmStaffBaseInfoQuery;
    /** @description 部门ID列表 */
    deptNos?: number[];
    /** @description 员工ID列表 */
    staffNos?: number[];
    /**
     * Format: int64
     * @description 考勤组ID
     */
    groupId?: number;
    /** @description 开始日期 */
    beginDate: string;
    /** @description 结束日期 */
    endDate: string;
}

export interface BngUserEdit {
    /**
     * Format: int64
     * @description 用户ID
     */
    userId?: number;
    /**
     * Format: int64
     * @description 部门ID,关联:sm_department.id
     */
    departmentNo?: number;
    /**
     * Format: int64
     * @description 家庭ID: login_type=3时是销售商ID , login_type=1时是门店ID
     */
    familyId?: number;
    /** @description 用户名 */
    userName?: string;
    /** @description 登录类型: 1=店铺员工登录,2=公司员工登录,3=销售商登录 */
    loginType?: number;
    /** @description 密码 */
    password?: string;
    /** @description 姓名 */
    nickName?: string;
    /** @description 简称,最多4位，用于箱号 */
    shortName?: string;
    /** @description 角色名称集合(多个用英文逗号分隔) */
    roleList?: string;
    /** @description 特殊身份标记,可多个,用英文逗号分隔 */
    specialFlags?: string;
    /** @description 手机号,单个公司内部必须是唯一的 */
    mobile?: string;
    /** @description 邮件 */
    email?: string;
    /** @description 真实姓名 */
    realName?: string;
    /** @description 可解密密匙,手机号验证码方式的时候用 */
    reversiblePassword?: string;
    /** @description 密码修改时间 */
    passwordModifyTime?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 超管标记 */
    adminFlag?: number;
    /** @description 性别,0:保密;1=男;2=女 */
    gender?: number;
    /** @description 来源: 1=后台创建,2=后台导入,3=前台注册 */
    refer?: number;
    /** @description 手机认证标记: 0=未认证,1=已认证 */
    mobileValidFlag?: number;
    /** @description 邮箱认证标记: 0=未认证,1=已认证 */
    emailValidFlag?: number;
    /** @description 头像 */
    headerImage?: string;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 授权仓库编号 */
    warehouseList?: string;
    /** @description 授权仓库名称 */
    warehouseName?: string;
    /** @description 标记,0=禁用,1=启用 */
    enabled?: number;
    /** @description 登录状态：0登录，1登出 */
    loginStatus?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 默认登录企业
     */
    defaultCono?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 重置密码：0=未重置，1=已重置 */
    resetPassword?: number;
    /** @description 上一次登录时间 */
    lastLoginTime?: string;
    /** @description 微信unionid */
    wxUnionId?: string;
    /** @description 微信公众号openid */
    wppOpenId?: string;
    /** @description 是否订阅公众号： 1-是 0-否 */
    isSubscribe?: number;
}

export interface OrgEnterpriseSubject {
    /**
     * Format: int64
     * @description 法律主体ID（自增主键）
     *     法律主体ID
     */
    autoNo?: number;
    /** @description 企业名称 */
    enterpriseName?: string;
    /** @description 企业简称 */
    enterpriseShortName?: string;
    /** @description 税号 */
    enterpriseTaxNumber?: string;
    /**
     * @description 地址
     *     企业地址
     */
    enterpriseAddress?: string;
    /**
     * @description 电话
     *     企业电话
     */
    enterprisePhone?: string;
    /** @description 开户行地址 */
    enterpriseBankAddress?: string;
    /** @description 银行账号 */
    enterpriseBankAccount?: string;
    /** @description 法人姓名 */
    corporateName?: string;
    /** @description 法人电话 */
    corporateMobile?: string;
    /** @description 财务负责人 */
    financeManager?: string;
    /** @description 财务负责人电话 */
    financeManagerMobile?: string;
    /**
     * @description 所属省份code
     *     所属省份编码
     */
    provinceCode?: string;
    /** @description 所属省份名称 */
    provinceName?: string;
    /**
     * @description 所属城市code
     *     所属城市编码
     */
    cityCode?: string;
    /**
     * @description 所属城市name
     *     所属城市名称
     */
    cityName?: string;
    /**
     * @description 所属区域code
     *     所属区域编码
     */
    distinctCode?: string;
    /**
     * @description 所属区域name
     *     所属区域名称
     */
    distinctName?: string;
    /** @description 经度 */
    longitude?: string;
    /** @description 纬度 */
    latitude?: string;
    /** @description 注册时间 */
    registrationDate?: string;
    /**
     * @description 营业执照
     *     营业执照路径
     */
    businessLicense?: string;
    /** @description 企业自有员工数 */
    employeeNumber?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * @description 是否已删除：0=未删除，1=已删除
     *     删除状态
     *     0=未删除，1=已删除
     */
    isDeleted?: number;
    /**
     * @description 启用状态：0=已禁用,1=启用中
     *     启用状态
     *     0=已禁用,1=启用中
     */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /**
     * @description 创建时间（自动生成）
     *     创建时间
     */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /**
     * @description 修改时间（自动更新）
     *     修改时间
     */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
    /** @description 时间戳 */
    ts?: string;
}

export interface OvertimeCalculateRuleCreate {
    /** @description 是否需要扣除休息时间 */
    isDeductBreakTime?: boolean;
    /** @description 休息时间扣除方式（1：按休息时间扣除；2：按加班时长扣除） */
    deductType?: number;
    /** @description 休息时段 */
    breakTimePeriods?: TimePeriodCreate[];
    /** @description 时长扣除规则 */
    deductRules?: TieredTimeCreate[];
    /**
     * @description 下班后多久开始计算加班（单位：分钟）
     * @default 0
     */
    beginOvertimeAfterWork: number;
    /**
     * @description 最短加班时间（单位：分钟）
     * @default 0
     */
    minOvertime: number;
    /**
     * @description 最长加班时间（单位：分钟，最长不能超过24小时）
     * @default 0
     */
    maxOvertime: number;
}

export interface ExcelImportRO {
    /** @description 上传文件 */
    file?: string;
    /** @description 任务类型（"staff_roster":员工花名册；） */
    type: string;
}

export interface StaffRosterQueryRO {
    current?: number;
    size?: number;
    search?: string;
    sorter?: string;
    orderBy?: string;
    /** @description 工号 */
    staffNumber?: string;
    /** @description 姓名 */
    personName?: string;
    /**
     * Format: int64
     * @description 部门
     */
    deptNo?: number;
    /** @description 员工类型（0：正式；1：兼职；2：劳务；3：临时；4：实习；7：外包；20：顾问） */
    staffAttribute?: number;
    /** @description 转正状态（0：待转正；1：已转正；2：延期转正） */
    conversionStatus?: number;
    /** @description 查询字段 */
    fields?: string[];
}

export interface StaffFieldConfigDetailVO {
    /** @description 所属分组 */
    groupIdentity?: string;
    /**
     * Format: int64
     * @description 字段配置ID
     */
    configId?: number;
    /**
     * Format: int64
     * @description 字段ID
     */
    fieldId?: number;
    /** @description 字段名 */
    fieldName?: string;
    /** @description 字段显示名 */
    displayName?: string;
    /** @description 字段类型（1：文本；2：日期；3：选项；4：枚举；5：附件） */
    fieldType?: number;
    /** @description 字段配置表 */
    configItems?: CustomFieldConfig[];
    /** @description 字段命名空间（system：系统内置字段；custom：自定义字段） */
    namespace?: string;
    /** @description 字段可选项（仅类型为选项的字段有值） */
    optionItems?: FieldOptionItem[];
}

export interface BaseDetailQueryROModify {
    /** Format: int64 */
    id?: number;
}

export interface DocDir {
    /**
     * Format: int64
     * @description bigint  自增编号
     */
    id?: number;
    /** @description tinyint  类型 0文件 1相册 */
    type?: number;
    /**
     * Format: int64
     * @description bigint  父级编号 与  id 对应
     */
    parentId?: number;
    /** @description tinyint  层级数 */
    level?: number;
    /** @description varchar(100)  名称 */
    name?: string;
    /**
     * Format: int64
     * @description 拥有者
     */
    ownerStaffNo?: number;
    /** @description 1=私有,2=公开,3=指定共享 */
    powerType?: number;
    /** @description 显示排序数字 */
    sortNo?: number;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /**
     * Format: int64
     * @description bigint  公司编号
     */
    coNo?: number;
    /** @description datetime  创建时间 */
    created?: string;
    /** @description varchar(50)  创建人员 */
    creator?: string;
    /** @description datetime  修改时间 */
    updated?: string;
    /** @description varchar(50)  修改人员 */
    updater?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /** @enum {string} */
    concatPowers?: "VIEW" | "DOWNLOAD" | "UPLOAD" | "CREATE_FOLDER" | "MOVE" | "CHANGE_OWNER" | "DEL" | "EDIT" | "DIR_EDIT" | "DIR_DEL";
    /** @description 目录所有者的姓名 */
    ownerStaffName?: string;
    /** @description 目录所有者的照片 */
    ownerStaffPhoto?: string;
    /** @description 权限集合 */
    rangePowers?: DocDirRange[];
}

export interface BaseQuerySimpleDTOQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
}

export interface DocNoticeForUserReadDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /**
     * Format: int64
     * @description 分类ID
     */
    typeId?: number;
    /** @description 必读标记: 0=不必读,1=必读 */
    mustRead?: number;
    /** @description 用户阅读标记,0=未读,1=已读 */
    userReadFlag?: number;
    /** @description 员工签阅状态集合 */
    userSignStatuses?: ("WAIT_SIGN" | "RE_SIGN" | "ONLY_READ_NO_SIGN" | "OVER_WITH_ROLLBACK" | "OVER_WITH_DIMISSION" | "SIGNED")[];
    /** @description 排序 */
    orderBy?: string;
}

export interface PageWorkPlanAnnotationVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: WorkPlanAnnotationVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface ServiceResultTaskViewFollowConfigVO {
    code?: string;
    success?: boolean;
    data?: TaskViewFollowConfigVO;
    message?: string;
    tid?: string;
}

export interface TaskViewConfigVO {
    /** @description 主键ID */
    id?: string;
    /** @description 配置类型：0-工作计划；1-日月报 */
    type?: number;
    /** @description 页面样式：0-面板；1-甘特 */
    viewType?: number;
    /** @description 数据类型：1-周视图; 2-月视图 */
    dateType?: number;
    /** @description 关注人列表 */
    followUsers?: string[];
}

export interface RoleSaveRO {
    /**
     * Format: int64
     * @description 角色ID，更新时必传
     */
    roleId?: number;
    /** @description 角色名称 */
    name: string;
    /** @description 角色说明 */
    remark?: string;
}

export interface CompanyUserAccountChangeRO {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId: number;
    /** @description 员工手机号 */
    mobile: string;
    /** @description 手机验证码 */
    smsCode: string;
}

export interface TeamCalendarTaskAttachmentVo {
    /**
     * Format: int64
     * @description 附件ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 任务ID
     */
    taskId?: number;
    /** @description 附件名称 */
    name?: string;
    /** @description 附件路径 */
    url?: string;
}

export interface ProjectEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 项目名称 */
    name?: string;
    /** @description 描述 */
    desc?: string;
    /** @description 可见范围: 0-仅项目成员可见;1-所有人可见 */
    visibleRange?: number;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 参与人选择器ID */
    participantSelectionId?: string;
    /** @description 附件列表 */
    atachmentList?: ProjectAttachmentDTO[];
}

export interface MonthlyGeneralSituation {
    /** @description 应出勤天数（标准工作时长） */
    requiredAttDays?: number;
    /** @description 实际出勤天数 */
    actualAttDays?: number;
    /** @description 应出勤小时数（标准工作时长） */
    requiredAttHours?: number;
    /** @description 实际出勤小时数 */
    actualAttHours?: number;
    /** @description 休息天数 */
    restDays?: number;
    /** @description 考勤正常天数 */
    normalAttDays?: number;
    /** @description 异常考勤天数 */
    abnormalAttDays?: number;
}

export interface BngVersionPackageEdit {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 版本ID
     */
    versionId?: number;
    /** @description 最大用户数限制 */
    maxUsers?: number;
    /** @description 存储空间，格式如10GB */
    storage?: string;
    /** @description 有效期天数 */
    validityDays?: number;
    /** @description 短信条数配额 */
    smsQuota?: number;
    /** @description 电子合同条数配额 */
    contractQuota?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    version?: string;
    softName?: string;
    domain?: string;
    adminUser?: BngUserEdit[];
}

export interface PageOrgEnterpriseSubject {
    records?: OrgEnterpriseSubject[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface BaseEditDTO {
    /** Format: int64 */
    id?: number;
}

export interface OvertimeAccountingRuleCreate {
    /** @description 核算方式 (1：计为调休；2：计算加班费；3：员工自选) */
    accountingMethod?: number;
    /** @description 调休换算比例 */
    ratio?: number;
    /** @description 调休假生效方式（1：即时生效；2：下月生效；3：延迟生效） */
    effectiveMethod?: number;
    /** @description 延迟天数 */
    delayDays?: number;
    /** @description 假期有效天数 */
    validDays?: number;
}

export interface PageCompanySyncRecord {
    records?: CompanySyncRecord[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultStaffFieldConfigDetailVO {
    code?: string;
    success?: boolean;
    data?: StaffFieldConfigDetailVO;
    message?: string;
    tid?: string;
}

export interface AppraiseItemVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 创建人
     */
    createUser?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 考核项描述 */
    description?: string;
    /**
     * Format: int64
     * @description 分组ID
     */
    groupId?: number;
    /** @description 指标属性:量化指标 定性考评 */
    appraiseProperty?: string;
    /** @description 评分方式 1 根据结果匹配得分 2 手工输入得分 */
    scoreType?: number;
    /** @description 单位 */
    unit?: string;
    /** @description 得分规则 1 根据结果对应系数 2 根据结果生成系数 3 参考目标值 加减分 */
    scoreRule?: number;
    /** @description 评价方式：1=定性考评, 2=量化指标 根据结果生成系数, 3=量化指标 参考目标值 加减分, 4=量化指标 根据结果对应系数 5加分项，6 减分项 */
    ruleType?: number;
    /** @description 动态配置字段，存储具体参数 JSON */
    ruleConfig?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description ruleType = 1: 等级制评分配置 */
    ratingConfig?: RatingConfig;
    /** @description ruleType = 2:区间映射评分配置 */
    percentageRangeConfig?: PercentageRangeConfig;
    /** @description ruleType = 3: 目标增减分配置 */
    targetBasedConfig?: TargetBasedConfig;
    /** @description ruleType = 4:完成率对应系数配置 */
    completionCoefficientConfig?: CompletionCoefficientConfig;
    /** @description ruleType = 5,6:加减分项 */
    addDeductConfig?: AddDeductConfig;
    /** @description 创建人名称 */
    createUserName?: string;
    /** @description 创建人部门 */
    createUserDept?: string;
    /** @description 计算公式 显示 */
    formulaExpression?: string;
    /** @description 计算公式 显示 */
    fe?: string;
    /**
     * @description 0 未使用 1 已使用
     * @default 0
     */
    used: number;
}

export interface PageDocDir {
    records?: DocDir[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface PageMapString {
    /** @default Collections.emptyList() */
    records: MapString[];
    /**
     * Format: int64
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @default 1
     */
    current: number;
    /** @default new ArrayList<>() */
    orders: OrderItem[];
    /** @default true */
    optimizeCountSql: boolean;
    /** @default true */
    searchCount: boolean;
    /** @default true */
    optimizeJoinOfCountSql: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultDocNotice {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocNotice;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface DocNoticeForManageDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /**
     * @description 分类ID 集合
     *     20251124 由 typeId 改为 typeIds
     */
    typeIds?: number[];
    /** @description 排序 */
    orderBy?: string;
    /**
     * @description 公文状态
     *     具体状态值详见
     */
    statuses?: ("WAIT" | "ROLLBACK_PUBLISH" | "APPLY_PUBLISHING" | "PUBLISHED")[];
}

export interface PageStaffSelectionResult {
    records?: StaffSelectionResult[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface AppriaseStaffValueImportDTO {
    /** Format: int64 */
    itemId?: number;
    /** Format: int64 */
    staffId?: number;
    /** Format: int64 */
    deptId?: number;
    /** @description 员工姓名 必填 */
    staffName?: string;
    /** @description 部门名称 必填 */
    deptName?: string;
    /** @description 考核项名称 必填 */
    itemName?: string;
    /** @description 必填 */
    year?: number;
    /** @description 必填 */
    month?: number;
    /** @description 完成值必填 */
    complateValue?: number;
}

export interface ServiceResultPageWorkPlanAnnotationVO {
    code?: string;
    success?: boolean;
    data?: PageWorkPlanAnnotationVO;
    message?: string;
    tid?: string;
}

export interface TaskViewConfigDTO {
    /** @description 配置类型：0-工作计划；1-日月报 */
    type?: number;
    /** @description 数据类型：1-周视图; 2-月视图 */
    dateType?: number;
}

export interface ServiceResultTaskViewConfigVO {
    code?: string;
    success?: boolean;
    data?: TaskViewConfigVO;
    message?: string;
    tid?: string;
}

export interface ProjectEditStatusDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 状态: 0-已终止;1-已完成;2-进行中;3-未开始;4-已逾期; */
    status?: number;
}

export interface WxMaGetPhoneNumberVO {
    phone?: string;
    code?: string;
}

export interface MonthlyReportVO {
    /** @description 员工信息 */
    staffInfo?: StaffBaseInfo;
    /** @description 月考勤概况 */
    generalSituation?: MonthlyGeneralSituation;
    /** @description 异常统计 */
    abnormalStatistics?: AttendanceAbnormalStatistics;
    /** @description 加班统计 */
    overtimeStatistics?: OvertimeStatistics;
    /** @description 假勤统计 */
    flowStatistics?: AttendanceFlowStatistics;
}

export interface OrderLogEdit {
    /**
     * Format: int64
     * @description 自增ID
     */
    id?: number;
    /** @description 订单编号 */
    orderNo?: string;
    /** @description 商品名称 */
    productName?: string;
    /** @description 数量 */
    quantity?: string;
    /** @description 单价 */
    unitPrice?: number;
    /** @description 总价 */
    totalPrice?: number;
    /** @description 时间 */
    operateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件编号
     */
    softId?: number;
    /** @description 软件 */
    softName?: string;
    /** @description 软件编号 */
    versionName?: string;
    /**
     * Format: int64
     * @description 软件版本
     */
    softVersion?: number;
}

export interface ServiceResultPageOrgEnterpriseSubject {
    code?: string;
    success?: boolean;
    data?: PageOrgEnterpriseSubject;
    message?: string;
    tid?: string;
}

export interface OvertimeDurationCreate {
    /** @description 时长单位（1：小时；2：天） */
    timeUnit?: number;
    /**
     * @description 取整模式（0: 向上取整，3: 向下取整，4: 四舍五入）
     * @default 4
     * @enum {integer}
     */
    roundingMode: never;
    /**
     * @description 保留小数位数（仅适用于四舍五入）
     * @default 1
     */
    scale: number;
    /**
     * @description 基数（适用于向上/向下取整）
     * @default BigDecimal.valueOf(0.5f)
     */
    cardinal: number;
    /**
     * @description 日折算小时数
     * @default BigDecimal.valueOf(8)
     */
    dayConvert2Hours: number;
}

export interface ServiceResultPageCompanySyncRecord {
    code?: string;
    success?: boolean;
    data?: PageCompanySyncRecord;
    message?: string;
    tid?: string;
}

export interface StaffCreateRO {
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
}

export interface StaffCreateROCreate {
    /** @description 手机号 */
    phoneNumber: string;
    /** @description 员工姓名 */
    staffName: string;
    /** @description 身份证号 */
    identityCard: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo: number;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo: number;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus: number;
}

export interface StaffFieldConfigDetailQueryROQuery {
    /** @description 字段名 */
    fieldName: string;
    /** @description 命名空间（'system':系统内置字段; 'custom':自定义字段） */
    namespace: string;
}

export interface ServiceResultPageDocDir {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageDocDir;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageMapString {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageMapString;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageStaffSelectionResult {
    code?: string;
    success?: boolean;
    data?: PageStaffSelectionResult;
    message?: string;
    tid?: string;
}

export interface WorkPlanAnnotationCreateDTO {
    /** @description 关联工作计划记录ID */
    workPlanRecordsId?: string;
    /** @description 批注内容 */
    content?: string;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface TaskViewFollowConfigDTO {
    /** @description 关注人员ID */
    followUserId?: string;
}

export interface BreakTimePeriodROCreate {
    /** @description 休息开始时间 */
    beginTime: string;
    /** @description 休息结束时间 */
    endTime: string;
}

export interface ProjectMoveDTO {
    /** @description 当前数据ID */
    currentId?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 排序数据ID列表 */
    sortIdList?: string[];
}

export interface ServiceResultWxMaGetPhoneNumberVO {
    code?: string;
    success?: boolean;
    data?: WxMaGetPhoneNumberVO;
    message?: string;
    tid?: string;
}

export interface PayrollDetailDynamic {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 关联薪资项目表的ID
     */
    payrollId?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 企业编号（与原表类型保持一致：Long）
     */
    coNo?: number;
    /** @description 薪资所属年份 */
    year?: number;
    /** @description 薪资所属月份 */
    month?: number;
    /** @description 状态： 0 数据解析失败 1 数据解析成功 2 提交审核 3 审核通过 4 审核驳回  5 待发放  6 已发放  7 已查看 */
    status?: number;
    staffName?: string;
    statusStr?: string;
    /** @description 发放日期（注：原表为LocalDateTime，新表SQL为date，此处保持与原表类型兼容，入库时自动截断时分秒） */
    sendDate?: string;
    /**
     * Format: int64
     * @description 部门ID
     */
    deptId?: number;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 动态薪资表头元信息（JSON字符串，对应ExcelHeaderItem列表） */
    headerJson?: string;
    /** @description 动态薪资数据（JSON字符串，对应该行的列号-值键值对） */
    dataJson?: string;
    /**
     * Format: int64
     * @description 关联原payroll_detail表的ID（数据迁移/对比用，可选）
     */
    originDetailId?: number;
    /** @description 创建时间（自动填充） */
    createTime?: string;
    /** @description 更新时间（自动填充） */
    updateTime?: string;
    /** @description 文件解析异常描述（非数据库字段，与原表一致） */
    msg?: string;
}

export interface PageMonthlyReportVO {
    records?: MonthlyReportVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface BngCompanySoftEdit {
    /**
     * Format: int64
     * @description bigint(20)
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description bigint(11)  软件/工具ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description bigint(11)  版本ID
     */
    versionId?: number;
    versionName?: string;
    /** @description bigint(11)  类型：0应用，1工具 */
    type?: number;
    /**
     * Format: int64
     * @description bigint(11)  公司编号,租户标记
     */
    coNo?: number;
    /** @description tinyint(22)  启用 */
    enabled?: number;
    /** @description tinyint(4)  试用标记 */
    trialFlag?: number;
    /** @description int(8)  试用天数 */
    trialDays?: number;
    /** @description tinyint(4)  试用结束限制 */
    trialVerOverLimit?: number;
    /** @description datetime  授权到期时间 */
    authorizedTime?: string;
    /** @description decimal(12, 2)  购买的软件金额 */
    softExpense?: number;
    /** @description varchar(25) */
    creator?: string;
    /** @description datetime */
    created?: string;
    /** @description varchar(25) */
    updater?: string;
    /** @description datetime */
    updated?: string;
    /** @description varchar(255)  地址 */
    url?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /**
     * Format: int64
     * @description int(8)  余量
     */
    remaining?: number;
    /** @description 公司名称 */
    companyName?: string;
    contactTel?: string;
    contactEmail?: string;
    /** @description 软件名称 */
    name?: string;
    /**
     * Format: int64
     * @description 软件过期时间
     */
    expireDays?: number;
    /** @description 收费方式 [ACCOUNT=账号,SYSTEM=系统] */
    feeType?: string;
    /** @description 是否首购 0是 1否 */
    isFirstBuy?: number;
    /**
     * Format: int64
     * @description 策略ID
     */
    feeStrategyId?: number;
    /** @description 策略列表 */
    feeStrategyList?: Record<string, never>[];
    /** @description 单价 */
    salePrice?: number;
}

export interface ServiceResultOrgEnterpriseSubject {
    code?: string;
    success?: boolean;
    data?: OrgEnterpriseSubject;
    message?: string;
    tid?: string;
}

export interface OvertimeRuleSaveROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    name?: string;
    /** @description 加班类型（1：工作日加班；2：休息日加班；3：法定节假日加班） */
    overtimeType?: number;
    /** @description 加班有效时间规则（1：按审批时间；2：按打卡时长；3：在审批时间段内按打卡时长计算） */
    effectiveTimeRule?: number;
    /** @description 加班计算规则 */
    calculationRule?: OvertimeCalculateRuleCreate;
    /** @description 加班核算规则 */
    accountingRule?: OvertimeAccountingRuleCreate;
    /** @description 加班时长规则 */
    durationRule?: OvertimeDurationCreate;
    /**
     * @description 上班前是否允许加班
     * @default true
     */
    beforeWorkEnabled: boolean;
    /**
     * @description 班次内休息时段是否允许加班
     * @default true
     */
    breakTimeEnabled: boolean;
    /**
     * @description 下班后是否允许加班
     * @default true
     */
    afterWorkEnabled: boolean;
}

export interface OptionItemModify {
    /**
     * Format: int64
     * @description 选项值ID
     */
    optionId?: number;
    /** @description 选项值 */
    optionValue?: string;
    /** @description 是否可用 */
    enabled?: boolean;
    /** @description 是否删除 */
    deleted?: boolean;
}

export interface PageAppraiseItemVO {
    records?: AppraiseItemVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface DocDirDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 类型 0文件 1相册 */
    type?: number;
}

export interface TaskViewConfigCreateDTO {
    /** @description 配置类型：0-工作计划；1-日月报 */
    type?: number;
    /** @description 页面样式：0-面板；1-甘特 */
    viewType?: number;
    /** @description 数据类型：1-周视图; 2-月视图 */
    dateType?: number;
    /** @description 关注人员列表 */
    followUserIds?: string[];
}

export interface ShiftTimePeriodROCreate {
    /** @description 时段序号 */
    groupNo?: number;
    /** @description 上班是否需要打卡 */
    clockInRequired: boolean;
    /** @description 下班是否需要打卡 */
    clockOutRequired: boolean;
    /** @description 上班时间 */
    periodBeginTime: string;
    /** @description 上班打卡开始时间 */
    clockInBeginTime?: string;
    /** @description 上班打卡结束时间 */
    clockInEndTime?: string;
    /** @description 下班时间 */
    periodEndTime: string;
    /** @description 下班打卡开始时间 */
    clockOutBeginTime?: string;
    /** @description 下班打卡结束时间 */
    clockOutEndTime?: string;
    /** @description 休息时段 */
    breakTimePeriods?: BreakTimePeriodROCreate[];
}

export interface SysDictDataROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典键值 */
    dictValue: string;
    /** @description 描述 */
    remark?: string;
}

export interface WxMaGetPhoneNumberRO {
    /** @description 微信小程序获取手机号的临时凭证 */
    tempCodeForMobile: string;
}

export interface ServiceResultPayrollDetailDynamic {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PayrollDetailDynamic;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultPageMonthlyReportVO {
    code?: string;
    success?: boolean;
    data?: PageMonthlyReportVO;
    message?: string;
    tid?: string;
}

export interface BngCompanyEdit {
    /**
     * Format: int64
     * @description 自增ID
     */
    autoNo?: number;
    /** @description 公司唯一编码 */
    uniCode?: string;
    /** @description 公司名称 */
    name?: string;
    /** @description 别名 */
    aliasName?: string;
    /** @description 说明 */
    note?: string;
    /** @description 数据状态,0=禁用;1=启用; */
    enabled?: number;
    /** @description 业务员 */
    salesPerson?: string;
    /** @description 注册人角色 中台添加：管理员 企业入驻:企业负责人 */
    registerRole?: string;
    /** @description 试用标记: 0=非试用,1=试用中,2=试用转正式 */
    trialFlag?: number;
    /** @description 试用结束限制: 1=不可登录,2=可登录但限制功能 */
    trialVerOverLimit?: number;
    /** @description 联系人 */
    contactUser?: string;
    /** @description 联系电话 */
    contactTel?: string;
    /** @description 电话校验标记,0=未校验,1=通过,2=校验失败 */
    telFlag?: number;
    /** @description 联系人邮箱 */
    contactEmail?: string;
    /** @description 邮箱校验标记,0=未校验,1=通过,2=校验失败 */
    emailFlag?: number;
    /** @description 是否开启水印 0 否 1是 */
    isWatermark?: boolean;
    /** @description 授权店铺个数 */
    authorizeShopNum?: number;
    /** @description 授权门店个数 */
    authorizeStoreNum?: number;
    /** @description 授权仓库个数 */
    authorizeWarehouseNum?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 省 */
    province?: string;
    /** @description 省编码 */
    provinceNo?: string;
    /** @description 市 */
    city?: string;
    /** @description 市编码 */
    cityNo?: string;
    /** @description 区 */
    area?: string;
    /** @description 区编码 */
    areaNo?: string;
    /** @description 公司详细地址 */
    address?: string;
    /** @description 行业 */
    industry?: string;
    /** @description 所属渠道 */
    channelName?: string;
    /**
     * Format: int64
     * @description 所属渠道
     */
    channelId?: number;
    /** @description 税号 */
    taxIdNum?: string;
    /** @description 认证状态(0=未认证，1=已认证) */
    approveStatus?: number;
    /** @description 授权到期时间 */
    authorizedTime?: string;
    /** @description logo */
    logo?: string;
    /** @description 行业ID */
    industryId?: number;
    /** @description 建库状态 [0:已作废 1:未建 10:新建 20:同步表 30:同步数据 40:完成] */
    copyTaskStatus?: number;
    /** @description 公司规模 */
    scale?: string;
    /** @description 创建人在企业中的职位 */
    registerPosition?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 入驻时选择的公司规模 */
    chooseScale?: number;
    code?: string;
    userName?: string;
    versionName?: string;
    password?: string;
    confirmPassword?: string;
    /** Format: int64 */
    registerSoftId?: number;
    bngVersionPackage?: BngVersionPackageEdit[];
    logs?: OrderLogEdit[];
    /** Format: int64 */
    versionId?: number;
    /** Format: int64 */
    softId?: number;
    defaultCo?: number;
}

export interface OrgEnterpriseWorkplace {
    /**
     * Format: int64
     * @description 职场ID
     */
    autoNo?: number;
    /** @description 职场名称 */
    workplaceName?: string;
    /**
     * @description 职场属性(0-租赁 1-自持)
     *     职场属性
     *     0-租赁 1-自持
     */
    workplaceAttribute?: number;
    /** @description 租赁开始时间 */
    rentStartTime?: string;
    /** @description 租赁结束时间 */
    rentEndTime?: string;
    /** @description 负责人 */
    managerName?: string;
    /** @description 工位数量 */
    stationNumber?: number;
    /**
     * @description 职场面积 单位㎡
     *     职场面积
     *     单位：㎡
     */
    workplaceArea?: number;
    /** @description 备注 */
    remark?: string;
    /** @description 经度 */
    lng?: number;
    /** @description 纬度 */
    lat?: number;
    /** @description 是否同步为打卡地点 */
    syncClockLocation?: boolean;
    /** @description 打卡范围（单位：米） */
    scope?: number;
    /**
     * @description 是否已删除：0=未删除，1=已删除
     *     删除状态
     *     0=未删除，1=已删除
     */
    isDeleted?: number;
    /**
     * @description 启用否: 0=已禁用,1=启用中
     *     启用状态
     *     0=已禁用,1=启用中
     */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 创建时间 */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /** @description 修改时间 */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
    /** @description 联系方式 */
    managerMobile?: string;
    /** @description 城市 */
    workCity?: string;
    /** @description 地址 */
    workAddress?: string;
}

export interface StaffDimensionData {
    /** @description 名称 */
    name?: string;
    /** @description 值 */
    value?: string;
}

export interface StaffFieldConfigSaveROModify {
    /** Format: int64 */
    id?: number;
    /** @description 字段名 */
    fieldName: string;
    /** @description 字段类型 */
    fieldType: number;
    /** @description 命名空间（'SYSTEM':系统内置字段；'CUSTOM':自定义字段） */
    namespace: string;
    /** @description 字段可选项（fieldType==3时必传） */
    options?: OptionItemModify[];
    /** @description 字段配置表 */
    configItems?: CustomFieldConfigModify[];
}

export interface ServiceResultPageAppraiseItemVO {
    code?: string;
    success?: boolean;
    data?: PageAppraiseItemVO;
    message?: string;
    tid?: string;
}

export interface StaffGroupFieldConfigQueryRODetail {
    /** @description 字段分组唯一标识 */
    groupIdentity?: string;
}

export interface ServiceResultLong {
    code?: string;
    success?: boolean;
    /** Format: int64 */
    data?: number;
    message?: string;
    tid?: string;
}

export interface StaffDimensionDataQuery {
    /** @description 名称 */
    name?: string;
    /** @description 值 */
    value?: string;
}

export interface ShiftTimePeriodSeasonCreate {
    /** @description 令时（0：不区分令时；1：夏令时；2：冬令时） */
    season?: number;
    /** @description 令时对应时段配置 */
    timePeriods?: ShiftTimePeriodROCreate[];
}

export interface MonthlyReportROQuery {
    /** Format: int64 */
    coNo?: number;
    currentStaff?: HrmStaffBaseInfoQuery;
    /** @description 部门ID列表 */
    deptNos?: number[];
    /** @description 员工ID列表 */
    staffNos?: number[];
    /**
     * Format: int64
     * @description 考勤组ID
     */
    groupId?: number;
    /** @description 开始日期 */
    beginDate: string;
    /** @description 结束日期 */
    endDate: string;
    /** @description 考勤年度 */
    year: number;
    /** @description 考勤月度 */
    month: number;
}

export interface LoginCacheEdit {
    errorTimes?: number;
    /** Format: int64 */
    userId?: number;
    token?: string;
    bngUser?: BngUserEdit;
    lastLoginTime?: string;
    companyList?: BngCompanyEdit[];
    currentBngCompany?: BngCompanyEdit;
    /** Format: int64 */
    currentSoftId?: number;
    /** Format: int64 */
    currentSoftVersionId?: number;
    /** Format: int64 */
    coNo?: number;
    isAdmin?: number;
    showCompanyList?: number;
}

export interface PageOrgEnterpriseWorkplace {
    records?: OrgEnterpriseWorkplace[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface StaffSelectionCondition {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionData[];
}

export interface ServiceResultAppraiseItemVO {
    code?: string;
    success?: boolean;
    data?: AppraiseItemVO;
    message?: string;
    tid?: string;
}

export type key2 = Record<string, never>;

export interface SelectionConditionQuery {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别；5:职级；6:序列；7:司龄；8:用户组；100：全公司)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 100;
    /**
     * @description 比较运算符（1：包含；2：不包含；3：大于等于；4：小于等于）
     * @enum {integer}
     */
    operator?: 1 | 2 | 3 | 4 | 5;
    /** @description 维度数据 */
    data?: StaffDimensionDataQuery[];
}

export interface ServiceResultListDocNotice {
    code?: string;
    success?: boolean;
    data?: DocNotice[];
    message?: string;
    tid?: string;
}

export interface SysDictDataROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 字典排序 */
    dictSort?: number;
    /** @description 字典键值 */
    dictValue: string;
    /** @description 描述 */
    remark?: string;
}

export interface ClockDetailData {
    /** @description 上/下班时间点 */
    time?: string;
    /** @description 状态 */
    status?: number;
    /** @description 打卡时间 */
    clockTime?: string;
}

export interface TimePeriodEdit {
    /** @description 开始时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    beginTime?: string;
    /** @description 结束时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    endTime?: string;
}

export interface ServiceResultPageOrgEnterpriseWorkplace {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageOrgEnterpriseWorkplace;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface HrAttendanceGroupDetailVO {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 考勤组名称 */
    name?: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType?: number;
    /**
     * Format: int64
     * @description 考勤组版本
     */
    lastVersion?: number;
    /** @description 工作日设置 */
    workdaySetting?: WorkdayShiftSetting[];
    /** @description 适用班次 */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSetting;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSetting;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSetting[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSetting[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySetting;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSetting;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSetting;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSetting;
    /** @description 考勤月度周期设置 */
    monthCycleSetting?: MonthCycleSetting;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRule;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSetting;
    selectionForm?: StaffSelectionConditionData;
}

export interface DocDirChangeOwnerDTO {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    toStaffNo: number;
}

export interface StaffSelectionBoundQueryROQuery {
    current?: number;
    size?: number;
    search?: string;
    order?: OrderConditionQuery[];
    /** @description 条件列表 */
    conditions?: SelectionConditionQuery[];
}

export interface PageDocNoticeD {
    records?: DocNoticeD[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface WorkPlanListDetailVO {
    /** @description 工作计划ID */
    workPlanId?: string;
    /** @description 工作计划记录ID */
    recordId?: string;
    /** @description 父级工作计划ID */
    parentId?: string;
    /** @description 项目ID */
    projectId?: string;
    /** @description 执行人选择器ID */
    executorSelectionId?: string;
    /** @description 执行人选择器数据 */
    executorCondition?: SelectionCondition[];
    /** @description 项目名称 */
    projectName?: string;
    /** @description 负责人ID */
    directorId?: string;
    /** @description 负责人姓名 */
    directorName?: string;
    /** @description 负责人部门名称 */
    directorDeptName?: string;
    /** @description 负责人职位名称 */
    directorPositionName?: string;
    /** @description 负责人头像 */
    directorPhoto?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 标题 */
    title?: string;
    /** @description 工作计划来源 */
    source?: string;
    /** @description 进度 */
    progress?: number;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 完成日期 */
    finishDate?: string;
    /** @description 执行人ID */
    executorId?: string;
    /** @description 执行人姓名 */
    executorName?: string;
    /** @description 状态：0-未执行；1-执行中；2-已完成；3-逾期 */
    status?: number;
    /** @description 任务类型:0-工作计划(任务);1-任务组;2-项目 */
    taskType?: number;
    /** @description 执行时间类型：1-当天；2-跨天；3-重复；4-到时间 */
    executionTimeType?: number;
    /** @description 执行时间重复类型：1-天；2-周；3-月 */
    executionTimeRepeatType?: number;
    /** @description 执行时间重复内容 */
    executionTimeRepeatContent?: string;
    /** @description 是否紧急 */
    urgentFlag?: boolean;
    /** @description 是否重要 */
    importantFlag?: boolean;
    /** @description 是否关注 */
    followFlag?: boolean;
    /** @description 是否年度重点 */
    yearPriority?: boolean;
    /** @description 数据类型: 0-分组;1-工作计划 */
    dataType?: number;
    /** @description 是否置顶 */
    topFlag?: boolean;
    /** @description 排序 */
    sorted?: number;
    /** @description 创建人 */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建人部门名称 */
    createByDeptName?: string;
    /** @description 创建人职位名称 */
    createByPositionName?: string;
    /** @description 创建人头像 */
    createByPhoto?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 是否跨天任务。0=不跨天，1=跨天 */
    crossDayFlag?: boolean;
    /** @description 是否重复任务。0=不是，1=是 */
    duplicateFlag?: boolean;
    /** @description 子集 */
    children?: WorkPlanListDetailVO[];
    /** @description 附件 */
    attachmentList?: WorkPlanAttachmentVO[];
    /** @description 执行人 */
    executorList?: WorkPlanExecutorVO[];
}

export interface HalfDayWorkTimeSettingCreate {
    /** @description 上午时段 */
    am?: TimePeriodCreate;
    /** @description 下午时段 */
    pm?: TimePeriodCreate;
}

export interface ShiftTimePeriodClockDetailInfo {
    /** @description 上班卡 */
    clockIn?: ClockDetailData;
    /** @description 下班卡 */
    clockOut?: ClockDetailData;
}

export interface TieredTimeEdit {
    /** @description 工作分钟数 */
    workMinutes?: number;
    /** @description 扣除分钟数 */
    deductMinutes?: number;
}

export interface ServiceResultOrgEnterpriseWorkplace {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: OrgEnterpriseWorkplace;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultHrAttendanceGroupDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: HrAttendanceGroupDetailVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface Item {
    /** @description int  权限类型 0员工 1部门 */
    channel: number;
    /**
     * Format: int64
     * @description bigint  员工ID/部门ID
     */
    val: number;
    /**
     * @description 权限字符串: 默认拥有可读权限,
     *     1=查看,
     *     2=下载,
     *     3=上传,
     *     4=创建目录
     */
    concatPowers: string;
}

export interface ServiceResultDocDir {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocDir;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface AdminStaffSingleFieldUpdateROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 字段值 */
    fieldValue: FieldValueModify;
}

export interface DocNoticeFullEditDTO {
    /** Format: int64 */
    id?: number;
    /**
     * Format: int64
     * @description 分类ID,关联:doc_notice_type.id
     */
    typeId: number;
    /** @description 标题 */
    title: string;
    /** @description 文件编号 */
    theCode?: string;
    needAppSign: number;
    /** @description 需要阅读时间 0:不需要 1:需要 */
    needReadTime?: number;
    /** @description 新人签阅要求 0:不要求签阅 1:要求签阅 */
    signOfNew?: number;
    /**
     * Format: int64
     * @description 公文附件存储的文件库目录ID,关联:doc_dir.id
     */
    fileSaveDirId?: number;
    /** Format: int64 */
    staffSelectionId: number;
    /** @description 知识库要求(0:不存储/1:存储) */
    wikiFlag?: number;
    /** @description 必读 0:不需要 1:需要 */
    mustRead?: number;
    files: DocFilePresignedVO[];
    /** @description 保存后申请发布 0:不发布 1:发布 */
    applyPublishOnSaved?: number;
    /** @description 要求按签阅天数内完成, 0=不限制(不传则默认0), 传了之后,按传的值进行 */
    requireSignDays?: number;
}

export interface ServiceResultPageDocNoticeD {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageDocNoticeD;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface WorkPlanListVO {
    /** @description 用户ID */
    userId?: string;
    /** @description 用户姓名 */
    userName?: string;
    /** @description 用户头像 */
    userPhoto?: string;
    /** @description 用户部门名称 */
    userDept?: string;
    /** @description 用户岗位名称 */
    userPosition?: string;
    /** @description 工作计划 */
    workPlanList?: WorkPlanListDetailVO[];
}

export interface StaffSelectionConditionData {
    /** Format: int64 */
    id?: number;
    /** @description 条件列表 */
    conditions?: SelectionCondition[];
}

export interface FlexibleTimeSettingCreate {
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示下班可早走的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许早到早走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示下班晚走分钟数；</li>
     *     </ul>
     */
    advanceMinutes?: number;
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示上班可晚到的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许晚到晚走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示次日可晚到的分钟数；</li>
     *     </ul>
     */
    lateMinutes?: number;
}

export interface ShiftClockDetailInfo {
    /** Format: int64 */
    shiftId?: number;
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
    /** @description 班次时段打卡明细 */
    timePeriodClockDetails?: ShiftTimePeriodClockDetailInfo[];
}

export interface OvertimeCalculateRuleEdit {
    /** @description 是否需要扣除休息时间 */
    isDeductBreakTime?: boolean;
    /**
     * @description 休息时间扣除方式
     * @enum {integer}
     */
    deductType?: never;
    /** @description 休息时段 */
    breakTimePeriods?: TimePeriodEdit[];
    /** @description 时长扣除规则 */
    deductRules?: TieredTimeEdit[];
    /**
     * @description 下班后多久开始计算加班（单位：分钟）
     * @default 0
     */
    beginOvertimeAfterWork: number;
    /**
     * @description 最小加班时间（单位：分钟）
     * @default 0
     */
    minOvertime: number;
    /**
     * @description 累进加班时间（单位：分钟）
     * @default 0
     */
    progressiveOvertime: number;
}

export interface OrgEnterpriseCostCenter {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /** @description 成本中心名称 */
    costCenterName?: string;
    /**
     * @description 适用于人员ID集合
     *     适用于人员ID集合
     *     存储人员ID的文本集合
     */
    staffNos?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * @description 是否已删除：0=未删除，1=已删除
     *     是否已删除
     *     0=未删除，1=已删除
     */
    isDeleted?: number;
    /**
     * @description 启用否: 0=已禁用,1=启用中
     *     启用状态
     *     0=已禁用,1=启用中
     */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 创建时间 */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /** @description 修改时间 */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
}

export interface AppraiseItemDTO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 考核项描述 */
    description?: string;
    /**
     * Format: int64
     * @description 分组ID
     */
    groupId?: number;
    /** @description 指标属性:量化指标 定性考评 */
    appraiseProperty?: string;
    /** @description 评分方式 1 根据结果匹配得分 2 手工输入得分 */
    scoreType?: number;
    /** @description 得分规则 1 根据结果对应系数 2 根据结果生成系数 3 参考目标值 加减分 */
    scoreRule?: number;
    /** @description 评价方式：1=定性考评, 2=量化指标 根据结果生成系数, 3=量化指标 参考目标值 加减分, 4=量化指标 根据结果对应系数 5加分项，6 减分项 */
    ruleType?: number;
    /** @description 动态配置字段，存储具体参数 JSON */
    ruleConfig?: string;
    /** @description 计算公式 JSON */
    formulaExpression?: string;
    fe?: string;
    /** @description 单位 */
    unit?: string;
    /**
     * @description 权重
     * @default 100
     */
    weight: number;
    /** @description : 定性考评 等级制评分配置 */
    ratingConfig?: RatingConfig;
    /** @description : 量化指标 根据结果 对应系数 */
    percentageRangeConfig?: PercentageRangeConfig;
    /** @description : 量化指标 参考目标值 加减分 */
    targetBasedConfig?: TargetBasedConfig;
    /** @description : 量化指标 根据结果生成系数 */
    completionCoefficientConfig?: CompletionCoefficientConfig;
    /** @description ：加分项,:减分项 */
    addDeductConfig?: AddDeductConfig;
    /** @description 是否常用 0 非常用 1 常用 */
    isCommon?: number;
}

export interface DocDirAddShareTargetDTO {
    /** Format: int64 */
    id?: number;
    from?: string;
    targets: Item[];
}

export interface ServiceResultCollectionLong {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: number[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface DocNoticeDPageDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** Format: int64 */
    nid: number;
    /** @description 签阅状态 */
    signStatus?: number;
    /** @description 部门ID集合 */
    deptIds?: number[];
    /** @description 排序 */
    orderBy?: string;
}

export interface ServiceResultListWorkPlanListVO {
    code?: string;
    success?: boolean;
    data?: WorkPlanListVO[];
    message?: string;
    tid?: string;
}

export interface StaffOrderRO {
    /**
     * Format: int64
     * @description 排序的员工ID
     */
    staffId?: number;
    /** @description 排序号，升序，值越大优先级越低 */
    order?: number;
}

export interface FlexibleClockSettingCreate {
    /** @default 1 */
    version: number;
    /**
     * @description 弹性打卡模式（0：禁止；1：允许晚到早走；2：允许晚到晚走、早到早走；）
     * @default 0
     */
    flexibleMode: number;
    /** @description 弹性打卡模式 - 弹性时间设置 */
    flexibleTimeSetting?: FlexibleTimeSettingCreate;
    /** @description 是否开启下班晚走，次日晚到 */
    leaveLateArriveLateEnabled?: boolean;
    /** @description 下班晚走次日晚到时间设置 */
    leaveLateArriveLateTimeSetting?: FlexibleTimeSettingCreate[];
    /** @description 作用方式（1：作用于整个班次；2：作用于每个时段） */
    modeOfAction?: number;
}

export interface ClockLogDetail {
    /**
     * Format: int64
     * @description 打卡流水ID
     */
    clockLogId?: number;
    /** @description 打卡时间 */
    clockTime?: string;
    /** @description 打卡类型（1：上班打卡；2：下班打卡；3：离岗打卡；4：返岗打卡） */
    clockType?: number;
    /** @description 打卡方式（1：正常打卡；2：外出打卡；3：补卡打卡；4：系统打卡） */
    clockMode?: number;
    /** @description 打卡渠道（1:WIFI打卡 2:GPS打卡 3:考勤机） */
    clockWay?: number;
    /** @description 打卡地点 */
    address?: string;
    /** @description 是否匹配班次 */
    isMatched?: boolean;
    /** @description 错误码 */
    errorCode?: string;
    /** @description 打卡流水处理状态（0：待处理；1：已处理） */
    status?: number;
    /** @description 错误处理结果（0：已忽略；1：待审核；5：处理完结） */
    processStatus?: number;
}

export interface OvertimeAccountingRuleEdit {
    /**
     * @description 核算方式 (1：计为调休；2：计算加班费；3：员工自选)
     * @enum {integer}
     */
    accountingMethod?: never;
    /** @description 调休换算比例 */
    ratio?: number;
    /**
     * @description 调休假生效方式（1：即时生效；2：下月生效；3：延迟生效）
     * @enum {integer}
     */
    effectiveMethod?: never;
    /** @description 延迟天数 */
    delayDays?: number;
    /** @description 假期有效天数 */
    validDays?: number;
}

export interface PageOrgEnterpriseCostCenter {
    records?: OrgEnterpriseCostCenter[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface DocDirRemoveShareTargetDTO {
    /** Format: int64 */
    id?: number;
    targetIds: number[];
}

export interface AppraiseStaffDetailVO {
    /** @description 人员姓名 */
    staffName?: string;
    /** @description 头像 */
    personalPhoto?: string;
    /** Format: int64 */
    deptId?: number;
    /** Format: int64 */
    postId?: number;
    /** @description 所属部门 */
    department?: string;
    /** @description 岗位名称 */
    position?: string;
}

export interface DocNoticeSignDTO {
    /** Format: int64 */
    nid: number;
    /** @description 签名来源: 1=新签名,2=复用签名 */
    origin: number;
    /**
     * @description 签名图的base64字符串.
     *     当签名来源 = 1时,此值必填
     */
    signB64?: string;
    /**
     * @description 保存此签名, 0=不保存,1=保存
     *     当签名来源 = 1时,有效
     */
    saveSign?: number;
    /**
     * Format: int64
     * @description 复用签名的ID, 数字型
     *     当签名来源 = 2时,此值必填, 由签名接口获取得到
     */
    relativeId?: number;
}

export interface ServiceResultCollectionString {
    code?: string;
    success?: boolean;
    data?: string[];
    message?: string;
    tid?: string;
}

export interface RoleUserBindRO {
    /**
     * Format: int64
     * @description 角色ID
     */
    roleId: number;
    /** @description 用户ID列表 */
    userIds?: number[];
}

export interface ShiftSaveROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 班次名称 */
    name: string;
    /** @description 班次时段令时配置 */
    timePeriodSeasons: ShiftTimePeriodSeasonCreate[];
    /** @description 班次工时（自由工时制不能为空） */
    workHours?: number;
    /** @description 班次工时对应出勤天数 */
    hoursToDay: number;
    /** @description 迟到多少分钟算旷工 */
    absentLateMinutes?: number;
    /** @description 半天工作时间设置 */
    halfDayWorkTimeSetting: HalfDayWorkTimeSettingCreate;
    /** @description 班次颜色 */
    color?: string;
    /** @description 是否区分令时 */
    isDivisiveSeason: boolean;
    /** @description 夏令时月份 */
    summerMonth?: number[];
    /** @description 冬令时月份 */
    winterMonth?: number[];
    /** @description 弹性打卡设置 */
    flexibleClockSetting: FlexibleClockSettingCreate;
}

export interface BatchReplaceRO {
    /**
     * Format: int64
     * @description 原职级/序列ID
     */
    sourceId: number;
    /**
     * Format: int64
     * @description 目标职级/序列ID
     */
    descId: number;
}

export interface WeixinBindMobileRO {
    /** @description 手机号 */
    mobile: string;
    /** @description 短信验证码 */
    smsCode: string;
    /** @description 微信unionId */
    unionId: string;
}

export interface ClockDetailReportVO {
    /** @description 考勤日期 */
    attendanceDate?: string;
    /** @description 考勤日类型（0：普通工作日；1：休息日；2：需要补班的工作日；3：法定节假日；4：免打卡） */
    dayType?: number;
    /** @description 员工基础信息 */
    staffInfo?: StaffBaseInfo;
    /** @description 班次打卡明细 */
    shiftClockDetail?: ShiftClockDetailInfo;
    /** @description 打卡流水 */
    clockLogs?: ClockLogDetail[];
}

export interface OvertimeDurationEdit {
    /** @description 时长单位（1：小时；2：天） */
    timeUnit?: number;
    /**
     * @description 取整模式（0: 向上取整，1: 向下取整，4: 四舍五入）
     * @default 1
     * @enum {integer}
     */
    roundingMode: never;
    /**
     * @description 保留小数位数（仅适用于四舍五入）
     * @default 1
     */
    scale: number;
    /**
     * @description 基数（单位：小时，适用于向上/向下取整）
     * @default new BigDecimal(0.5)
     */
    cardinal: number;
    /**
     * @description 日折算小时数
     * @default new BigDecimal(8)
     */
    dayConvert2Hours: number;
}

export interface ServiceResultPageOrgEnterpriseCostCenter {
    code?: string;
    success?: boolean;
    data?: PageOrgEnterpriseCostCenter;
    message?: string;
    tid?: string;
}

export interface DocDirFullEditDTO {
    /** Format: int64 */
    id?: number;
    type: number;
    name: string;
    /**
     * Format: int64
     * @description 上级ID
     */
    parentId?: number;
    targets?: Item[];
}

export interface ServiceResultListAppraiseTableVO {
    code?: string;
    success?: boolean;
    data?: AppraiseTableVO[];
    message?: string;
    tid?: string;
}

export interface AppraiseStatusCountVO {
    /** @description 状态名称 */
    statusName?: string;
    /** @description 对应状态的人数 */
    count?: number;
    /** @description 显示单位 */
    unit?: string;
    /** @description 人员明细列表 */
    staffDetails?: AppraiseStaffDetailVO[];
}

export interface DocNoticeResignDTO {
    /** Format: int64 */
    id?: number;
    /** @description 指定要处理的ID集合 */
    ids: number[];
    /** Format: int64 */
    nid: number;
}

export interface WorkPlanAttachmentVO {
    /** @description 主键ID */
    id?: string;
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface WeixinMaBindMobileRO {
    /** @description 手机号 */
    mobile: string;
    /** @description 短信验证码 */
    smsCode: string;
    /** @description 微信小程序登录临时凭证 */
    jsCode: string;
}

export interface PageClockDetailReportVO {
    records?: ClockDetailReportVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface OvertimeRuleSaveROEdit {
    /** Format: int64 */
    coNo?: number;
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    name?: string;
    /**
     * @description 加班类型（1：工作日加班；2：休息日加班；3：法定节假日加班）
     * @enum {integer}
     */
    overtimeType?: never;
    /** @description 是否需要申请流程 */
    isApprove?: boolean;
    /**
     * @description 加班有效时间规则（1：按审批时间；2：按打卡时长；3：在审批时间段内按打卡时长计算）
     * @enum {integer}
     */
    effectiveTimeRule?: never;
    /** @description 加班计算规则 */
    calculationRule?: OvertimeCalculateRuleEdit;
    /** @description 加班核算规则 */
    accountingRule?: OvertimeAccountingRuleEdit;
    /** @description 加班时长规则 */
    durationRule?: OvertimeDurationEdit;
    /**
     * @description 加班允许的时间段 （1：仅允许上班前；2：仅允许下班后；3：全天均可）
     * @enum {integer}
     */
    allowableTimePeriod?: never;
}

export interface ServiceResultOrgEnterpriseCostCenter {
    code?: string;
    success?: boolean;
    data?: OrgEnterpriseCostCenter;
    message?: string;
    tid?: string;
}

export interface AppraiseStaffOverviewBaseVO {
    /** @description 项目名称 */
    name?: string;
    /** @description 创建人 */
    staffName?: string;
    personalPhoto?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 各考核状态的统计列表 */
    statusCounts?: AppraiseStatusCountVO[];
}

export interface WorkOrderClassifyVO {
    /** @description 主键ID */
    id?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 处理人姓名 */
    handlerName?: string;
    /** @description 处理人头像 */
    handlerPersonPhoto?: string;
    /** @description 部门ID */
    deptId?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 部门负责人ID */
    deptDirectorId?: string;
    /** @description 部门负责人姓名 */
    deptDirectorName?: string;
    /** @description 部门负责人头像 */
    deptDirectorPersonPhoto?: string;
    /** @description 名称 */
    name?: string;
    /** @description 催办规则 */
    urgencyRule?: number;
    /** @description 默认处理时长 */
    defaultProcessTime?: number;
    /** @description 默认处理时长单位：0-分钟；1-小时；2-天； */
    defaultProcessTimeUnit?: number;
    /** @description 处理人是否可修改优先级 */
    modifyPriorityFlag?: boolean;
    /** @description 状态： 0-停用； 1-启用； */
    status?: number;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人姓名 */
    createName?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface ServiceResultPageClockDetailReportVO {
    code?: string;
    success?: boolean;
    data?: PageClockDetailReportVO;
    message?: string;
    tid?: string;
}

export interface BngUserModify {
    /**
     * Format: int64
     * @description 用户ID
     */
    userId?: number;
    /**
     * Format: int64
     * @description 部门ID,关联:sm_department.id
     */
    departmentNo?: number;
    /**
     * Format: int64
     * @description 家庭ID: login_type=3时是销售商ID , login_type=1时是门店ID
     */
    familyId?: number;
    /** @description 用户名 */
    userName?: string;
    /** @description 登录类型: 1=店铺员工登录,2=公司员工登录,3=销售商登录 */
    loginType?: number;
    /** @description 密码 */
    password?: string;
    /** @description 姓名 */
    nickName?: string;
    /** @description 简称,最多4位，用于箱号 */
    shortName?: string;
    /** @description 角色名称集合(多个用英文逗号分隔) */
    roleList?: string;
    /** @description 特殊身份标记,可多个,用英文逗号分隔 */
    specialFlags?: string;
    /** @description 手机号,单个公司内部必须是唯一的 */
    mobile?: string;
    /** @description 邮件 */
    email?: string;
    /** @description 真实姓名 */
    realName?: string;
    /** @description 可解密密匙,手机号验证码方式的时候用 */
    reversiblePassword?: string;
    /** @description 密码修改时间 */
    passwordModifyTime?: string;
    /** @description 微信公众号的OPENID */
    weixinOpenId?: string;
    /** @description 超管标记 */
    adminFlag?: number;
    /** @description 性别,0:保密;1=男;2=女 */
    gender?: number;
    /** @description 来源: 1=后台创建,2=后台导入,3=前台注册 */
    refer?: number;
    /** @description 手机认证标记: 0=未认证,1=已认证 */
    mobileValidFlag?: number;
    /** @description 邮箱认证标记: 0=未认证,1=已认证 */
    emailValidFlag?: number;
    /** @description 头像 */
    headerImage?: string;
    /** @description 省 */
    province?: string;
    /** @description 市 */
    city?: string;
    /** @description 授权仓库编号 */
    warehouseList?: string;
    /** @description 授权仓库名称 */
    warehouseName?: string;
    /** @description 标记,0=禁用,1=启用 */
    enabled?: number;
    /** @description 登录状态：0登录，1登出 */
    loginStatus?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 默认登录企业
     */
    defaultCono?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 重置密码：0=未重置，1=已重置 */
    resetPassword?: number;
    /** @description 上一次登录时间 */
    lastLoginTime?: string;
    /** @description 微信unionid */
    wxUnionId?: string;
    /** @description 微信公众号openid */
    wppOpenId?: string;
    /** @description 是否订阅公众号： 1-是 0-否 */
    isSubscribe?: number;
}

export interface ServiceResultAppraiseStaffOverviewBaseVO {
    code?: string;
    success?: boolean;
    data?: AppraiseStaffOverviewBaseVO;
    message?: string;
    tid?: string;
}

export interface DocNoticeStaffSelectionEditDTO {
    /** Format: int64 */
    id?: number;
    /**
     * Format: int64
     * @description 人员选择器快照ID
     */
    staffSelectionId: number;
}

export interface ServiceResultListWorkOrderClassifyVO {
    code?: string;
    success?: boolean;
    data?: WorkOrderClassifyVO[];
    message?: string;
    tid?: string;
}

export interface HrStaffGroupChangeVO {
    /** Format: int64 */
    groupId?: number;
    /** @description 考勤组名称 */
    groupName?: string;
    /** @description 涉及变更的员工列表 */
    staffList?: StaffInfoVO[];
}

export interface BngVersionPackageModify {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 版本ID
     */
    versionId?: number;
    /** @description 最大用户数限制 */
    maxUsers?: number;
    /** @description 存储空间，格式如10GB */
    storage?: string;
    /** @description 有效期天数 */
    validityDays?: number;
    /** @description 短信条数配额 */
    smsQuota?: number;
    /** @description 电子合同条数配额 */
    contractQuota?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    version?: string;
    softName?: string;
    domain?: string;
    adminUser?: BngUserModify[];
}

export interface keyModify {
    /** @description 配置项（"SHOW": 可展示性; "EDITABLE": 可编辑性; "REQUIRED": 必填性） */
    item?: string;
    /** @description 是否启用 */
    enabled?: boolean;
}

export interface ServiceResultAppraiseConfigVO {
    code?: string;
    success?: boolean;
    data?: AppraiseConfigVO;
    message?: string;
    tid?: string;
}

export interface AppraiseStaffOverviewVO {
    /** @description 各考核状态的统计列表 */
    statusCounts?: AppraiseStatusCountVO[];
}

export interface WorkPlanDetailDTO {
    /** @description 工作计划ID */
    workPlanId?: string;
    /** @description 工作计划记录ID */
    workPlanRecordId?: string;
    /** @description 执行人 */
    executorId?: string;
    /** @description 查询时间 */
    date?: string;
}

export interface WorkOrderClassifyCreateDTO {
    /** @description 部门ID */
    deptId?: string;
    /** @description 部门负责人ID */
    deptDirectorId?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 催办规则 */
    urgencyRule?: number;
}

export interface WorkOrderClassifySimpleDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 名称 */
    name?: string;
    /** @description 工单数量 */
    num?: number;
    /** @description 默认处理人ID */
    handlerId?: string;
    /** @description 默认处理人姓名 */
    handlerName?: string;
    /** @description 默认处理人头像 */
    handlerPhoto?: string;
    /** @description 默认处理人部门 */
    handlerDept?: string;
    /** @description 默认处理人职位 */
    handlerPosition?: string;
    /** @description 状态： 0-停用； 1-启用； */
    status?: number;
}

export interface AppraiseForceResetDTO {
    ids?: number[];
    /** @description 1 有强制分布组 0 没有强制分布组 */
    type?: number;
    /**
     * Format: int64
     * @description 强制分布组的id  type 0 的时候可以不传 也可以传 -1
     */
    historyId?: number;
}

export interface PageWorkOrderClassifyVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: WorkOrderClassifyVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface MapListGroupVO {
    key?: key[];
}

export interface CurrentDeptStaffDetailVO {
    /** @description ID */
    id?: string;
    /** @description 员工姓名 */
    realName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 证件照 */
    personPhoto?: string;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 部门ID */
    deptId?: string;
    /** @description 是否关注 */
    followFlag?: boolean;
}

export interface AttGroupPreCheckResultVO {
    /** @description 考勤组冲突数据 */
    groupChangeList?: HrStaffGroupChangeVO[];
    /** @description 移出当前考勤组的员工列表 */
    unblockStaffs?: StaffInfoVO[];
}

export interface OrderLogModify {
    /**
     * Format: int64
     * @description 自增ID
     */
    id?: number;
    /** @description 订单编号 */
    orderNo?: string;
    /** @description 商品名称 */
    productName?: string;
    /** @description 数量 */
    quantity?: string;
    /** @description 单价 */
    unitPrice?: number;
    /** @description 总价 */
    totalPrice?: number;
    /** @description 时间 */
    operateTime?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * Format: int64
     * @description 企业编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 软件编号
     */
    softId?: number;
    /** @description 软件 */
    softName?: string;
    /** @description 软件编号 */
    versionName?: string;
    /**
     * Format: int64
     * @description 软件版本
     */
    softVersion?: number;
}

export interface MapListCustomFieldConfigItemModify {
    key?: keyModify[];
}

export interface ServiceResultAppraiseStaffOverviewVO {
    code?: string;
    success?: boolean;
    data?: AppraiseStaffOverviewVO;
    message?: string;
    tid?: string;
}

export interface DocNoticeReadRangeDTO {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    targets: Item[];
}

export interface WorkPlanAttachmentDTO {
    /** @description 记录ID */
    workPlanRecordId?: string;
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface WorkOrderClassifyEditDTO {
    /** @description ID */
    id?: string;
    /** @description 部门ID */
    deptId?: string;
    /** @description 部门负责人ID */
    deptDirectorId?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 催办规则 */
    urgencyRule?: number;
    /** @description 状态： 0-停用； 1-启用； */
    status?: number;
}

export interface DocNoticeRollbackDTO {
    /** Format: int64 */
    id?: number;
    /** @description 指定要处理的ID集合 */
    ids: number[];
    /**
     * @description 用户 读、签标记回写；
     *     0=不回滚，保持原有（不传则默认:0），1=回滚
     */
    rollUserReadSign?: number;
}

export interface ServiceResultWorkOrderClassifyVO {
    code?: string;
    success?: boolean;
    data?: WorkOrderClassifyVO;
    message?: string;
    tid?: string;
}

export interface WorkOrderClassifySimpleVO {
    /** @description 工单总数量 */
    totalNum?: number;
    /** @description 类型 */
    classifyList?: WorkOrderClassifySimpleDetailVO[];
}

export interface ServiceResultPageWorkOrderClassifyVO {
    code?: string;
    success?: boolean;
    data?: PageWorkOrderClassifyVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultListCurrentDeptStaffDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: CurrentDeptStaffDetailVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultAttGroupPreCheckResultVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: AttGroupPreCheckResultVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface BngCompanySoftModify {
    /**
     * Format: int64
     * @description bigint(20)
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description bigint(11)  软件/工具ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description bigint(11)  版本ID
     */
    versionId?: number;
    versionName?: string;
    /** @description bigint(11)  类型：0应用，1工具 */
    type?: number;
    /**
     * Format: int64
     * @description bigint(11)  公司编号,租户标记
     */
    coNo?: number;
    /** @description tinyint(22)  启用 */
    enabled?: number;
    /** @description tinyint(4)  试用标记 */
    trialFlag?: number;
    /** @description int(8)  试用天数 */
    trialDays?: number;
    /** @description tinyint(4)  试用结束限制 */
    trialVerOverLimit?: number;
    /** @description datetime  授权到期时间 */
    authorizedTime?: string;
    /** @description decimal(12, 2)  购买的软件金额 */
    softExpense?: number;
    /** @description varchar(25) */
    creator?: string;
    /** @description datetime */
    created?: string;
    /** @description varchar(25) */
    updater?: string;
    /** @description datetime */
    updated?: string;
    /** @description varchar(255)  地址 */
    url?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /**
     * Format: int64
     * @description int(8)  余量
     */
    remaining?: number;
    /** @description 公司名称 */
    companyName?: string;
    contactTel?: string;
    contactEmail?: string;
    /** @description 软件名称 */
    name?: string;
    /**
     * Format: int64
     * @description 软件过期时间
     */
    expireDays?: number;
    /** @description 收费方式 [ACCOUNT=账号,SYSTEM=系统] */
    feeType?: string;
    /** @description 是否首购 0是 1否 */
    isFirstBuy?: number;
    /**
     * Format: int64
     * @description 策略ID
     */
    feeStrategyId?: number;
    /** @description 策略列表 */
    feeStrategyList?: Record<string, never>[];
    /** @description 单价 */
    salePrice?: number;
}

export interface AttDimensionDataEdit {
    /** @description 维度类型 */
    dimensionType?: number;
    /**
     * Format: int64
     * @description 维度值
     */
    dimensionValue?: number;
}

export interface StaffDimensionDataCreate {
    /** @description 名称 */
    name?: string;
    /** @description 值 */
    value?: string;
}

export interface ShowStyleDTO {
    /** @description 显示得分 0 不显示  1显示 */
    showScore?: number;
    /** @description 等级 0 不显示  1显示 */
    showGrade?: number;
    /** @description 系数 0 不显示  1显示 */
    showCoefficient?: number;
    /** @description 百分位 0 不显示  1显示 */
    showPercentile?: number;
}

export interface WorkOrderVO {
    /** @description 主键ID */
    id?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 处理人名字 */
    handlerName?: string;
    /** @description 类型ID */
    classifyId?: string;
    /** @description 类型名称 */
    classifyName?: string;
    /** @description 标题 */
    title?: string;
    /** @description 内容 */
    content?: string;
    /** @description 紧急程度：0-紧急；1-高；2-一般；3-低； */
    urgencyLevel?: number;
    /** @description 催办次数 */
    expediteNum?: number;
    /** @description 发起时间 */
    launchTime?: string;
    /** @description 完成时间 */
    finishTime?: string;
    /** @description 状态： 0-待处理； 1-进行中； 2-已完成； */
    status?: number;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建人部门 */
    createByDept?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 催办时间 */
    expediteTime?: string;
    /** @description 催办规则 */
    urgencyRule?: number;
}

export interface ServiceResultWorkOrderClassifySimpleVO {
    code?: string;
    success?: boolean;
    data?: WorkOrderClassifySimpleVO;
    message?: string;
    tid?: string;
}

export interface WorkOrderClassifyDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 状态： 0-停用； 1-启用； */
    status?: number;
}

export interface CurrentDeptDetailVO {
    /** @description 部门ID */
    currentDeptId?: string;
    /** @description 部门名称 */
    currentDeptName?: string;
    /** @description 是否默认展开 */
    expandFlag?: boolean;
    /** @description 子集部门 */
    children?: CurrentDeptDetailVO[];
    /** @description 员工数据 */
    staffList?: CurrentDeptStaffDetailVO[];
}

export interface BngCompanyModify {
    /**
     * Format: int64
     * @description 自增ID
     */
    autoNo?: number;
    /** @description 公司唯一编码 */
    uniCode?: string;
    /** @description 公司名称 */
    name?: string;
    /** @description 别名 */
    aliasName?: string;
    /** @description 说明 */
    note?: string;
    /** @description 数据状态,0=禁用;1=启用; */
    enabled?: number;
    /** @description 业务员 */
    salesPerson?: string;
    /** @description 注册人角色 中台添加：管理员 企业入驻:企业负责人 */
    registerRole?: string;
    /** @description 试用标记: 0=非试用,1=试用中,2=试用转正式 */
    trialFlag?: number;
    /** @description 试用结束限制: 1=不可登录,2=可登录但限制功能 */
    trialVerOverLimit?: number;
    /** @description 联系人 */
    contactUser?: string;
    /** @description 联系电话 */
    contactTel?: string;
    /** @description 电话校验标记,0=未校验,1=通过,2=校验失败 */
    telFlag?: number;
    /** @description 联系人邮箱 */
    contactEmail?: string;
    /** @description 邮箱校验标记,0=未校验,1=通过,2=校验失败 */
    emailFlag?: number;
    /** @description 是否开启水印 0 否 1是 */
    isWatermark?: boolean;
    /** @description 授权店铺个数 */
    authorizeShopNum?: number;
    /** @description 授权门店个数 */
    authorizeStoreNum?: number;
    /** @description 授权仓库个数 */
    authorizeWarehouseNum?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 省 */
    province?: string;
    /** @description 省编码 */
    provinceNo?: string;
    /** @description 市 */
    city?: string;
    /** @description 市编码 */
    cityNo?: string;
    /** @description 区 */
    area?: string;
    /** @description 区编码 */
    areaNo?: string;
    /** @description 公司详细地址 */
    address?: string;
    /** @description 行业 */
    industry?: string;
    /** @description 所属渠道 */
    channelName?: string;
    /**
     * Format: int64
     * @description 所属渠道
     */
    channelId?: number;
    /** @description 税号 */
    taxIdNum?: string;
    /** @description 认证状态(0=未认证，1=已认证) */
    approveStatus?: number;
    /** @description 授权到期时间 */
    authorizedTime?: string;
    /** @description logo */
    logo?: string;
    /** @description 行业ID */
    industryId?: number;
    /** @description 建库状态 [0:已作废 1:未建 10:新建 20:同步表 30:同步数据 40:完成] */
    copyTaskStatus?: number;
    /** @description 公司规模 */
    scale?: string;
    /** @description 创建人在企业中的职位 */
    registerPosition?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 入驻时选择的公司规模 */
    chooseScale?: number;
    code?: string;
    userName?: string;
    versionName?: string;
    password?: string;
    confirmPassword?: string;
    /** Format: int64 */
    registerSoftId?: number;
    bngVersionPackage?: BngVersionPackageModify[];
    logs?: OrderLogModify[];
    /** Format: int64 */
    versionId?: number;
    /** Format: int64 */
    softId?: number;
    defaultCo?: number;
}

export interface AttStaffDimensionDataEdit {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description 员工关联维度与维度值 */
    dimensionDataList?: AttDimensionDataEdit[];
}

export interface StaffSelectionConditionCreate {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionDataCreate[];
}

export interface FieldItemConfigModify {
    /** @description 配置项（SHOW: 是否可展示; EDITABLE: 可编辑性; REQUIRED: 必填性） */
    item: string;
    /** @description 是否可配置（入参不传） */
    configurable?: boolean;
    /** @description 指定配置项是否勾选（如：员工档案字段是否必填） */
    enabled: boolean;
}

export interface AppraiseDeptConfigVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 岗位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 部门ID
     */
    deptId?: number;
    /** @description 是否考核（0：不考核，1：考核；） */
    isAssess?: number;
    /** @description 考核人ID */
    leaderId?: string;
    /**
     * Format: int64
     * @description 审批人
     */
    hrId?: number;
    /** @description 考核周期JSON格式 */
    cycleConfig?: string;
    /** @description 创建时间 */
    createdAt?: string;
    /** @description 最后更新时间 */
    updatedAt?: string;
    cycleConfigList?: CycleConfig[];
    /** @description 部门名称 */
    deptName?: string;
    /** @description 职位名称 */
    postName?: string;
    /** @description 职级名称 */
    postLevelName?: string;
    /** @description 人数 */
    staffCount?: number;
    /** @description 考核人 */
    leaderName?: string[];
    /** @description 考核人 */
    hrName?: string;
}

export interface FieldOrderCreate {
    /** @description 字段名 */
    fieldName: string;
    /**
     * Format: int64
     * @description 排序号
     */
    order: number;
}

export interface DocNoticeMatchStaffEntryDTO {
    /** @description 入职日期（开始） */
    startBoardDate: string;
}

export interface WorkOrderClassifySimpleDTO {
    /** @description 0-我发起的；1-我处理的 */
    type?: number;
    /** @description 状态： 0-待接收； 1-进行中； 2-已完成；3-已驳回；4-已确认；5-关闭； */
    status?: number[];
}

export interface WorkOrderClassifyStatisticsVO {
    /** @description 总数 */
    total?: number;
    /** @description 状态统计 */
    detailList?: WorkOrderClassifyStatisticsDetailVO[];
}

export interface WorkOrderClassifyStatisticsDetailVO {
    /** @description 状态： 0-停用； 1-启用； */
    status?: number;
    /** @description 统计数 */
    count?: number;
}

export interface ServiceResultGetCurrentDeptStaffVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: GetCurrentDeptStaffVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface LoginCacheModify {
    errorTimes?: number;
    /** Format: int64 */
    userId?: number;
    token?: string;
    bngUser?: BngUserModify;
    lastLoginTime?: string;
    companyList?: BngCompanyModify[];
    currentBngCompany?: BngCompanyModify;
    /** Format: int64 */
    currentSoftId?: number;
    /** Format: int64 */
    currentSoftVersionId?: number;
    /** Format: int64 */
    coNo?: number;
    isAdmin?: number;
    showCompanyList?: number;
}

export interface ReissueClockRuleSaveROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 规则版本 */
    version?: number;
    /** @description 规则名称 */
    name?: string;
    /** @description 是否允许补卡 */
    enabled?: boolean;
    /** @description 每个考勤周期可补卡次数 */
    countPerPeriod?: number;
    /** @description 补卡时间限制（单位：天，0 表示无限制） */
    daysLimit?: number;
    /** @description 补卡截止天数（单位：天，考勤周期结束后几日内可补卡） */
    expDays?: number;
    /** @description 适用考勤状态（1：正常；2：迟到；3：早退；4：旷工；5：缺卡） */
    attendanceStatus?: number[];
    /** @description 补卡提醒 */
    remindEnabled?: boolean;
    /** @description 提醒日期（前缀+号表示次月） */
    remindDayOfMonth?: string;
}

export interface HrAttendanceGroupValidateROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    staffNos?: number[];
    /** @description 员工选择条件 */
    selectionConditionData: StaffSelectionConditionDataCreate;
}

export interface CustomFieldConfigModify {
    /** @description 业务端点（STAFF_DETAIL: 员工端员工档案, STAFF_ENTRY_REGISTRATION: 员工端入职登记表, ADMIN_ADD_STAFF: 管理端添加人员） */
    point: string;
    configs: FieldItemConfigModify[];
}

export interface ServiceResultListAppraiseDeptConfigVO {
    code?: string;
    success?: boolean;
    data?: AppraiseDeptConfigVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultListAppraiseConfigForcedRule {
    code?: string;
    success?: boolean;
    data?: AppraiseConfigForcedRule[];
    message?: string;
    tid?: string;
}

export interface FieldTemplateSaveROCreate {
    /** @description 字段及排序 */
    fieldOrder: FieldOrderCreate[];
}

export interface PageWorkOrderVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: WorkOrderVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface ServiceResultListWorkOrderClassifyStatisticsVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: WorkOrderClassifyStatisticsVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface DocNoticeRemindDTO {
    /** @description 指定要处理的ID集合 */
    ids: number[];
    /** @description 提醒类型集合 */
    msgTypes: number[];
}

export interface TimePeriodModify {
    /** @description 开始时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    beginTime?: string;
    /** @description 结束时间 （HH:mm 格式，前缀“-”号表示昨日，前缀“+”号表示次日，如 "+2:00"） */
    endTime?: string;
}

export interface WorkdayShiftSettingCreate {
    /** @description 星期 */
    dayOfWeek?: number;
    /**
     * Format: int64
     * @description 班次
     */
    shiftId?: number;
}

export interface AppriasePostDTO {
    /** Format: int64 */
    deptId?: number;
    /** Format: int64 */
    postId?: number;
}

export interface AppraiseStaffPubDTO {
    ids?: number[];
}

export interface GetCurrentDeptStaffVO {
    /** @description 是否有数据权限 */
    haveDataPermissionFlag?: boolean;
    /** @description 企业ID */
    companyId?: string;
    /** @description 企业名称 */
    companyName?: string;
    /** @description 组织架构树 */
    deptTree?: CurrentDeptDetailVO[];
}

export interface ServiceResultPageWorkOrderVO {
    code?: string;
    success?: boolean;
    data?: PageWorkOrderVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultWorkOrderClassifyStatisticsVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: WorkOrderClassifyStatisticsVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface TieredTimeModify {
    /** @description 工作分钟数 */
    workMinutes?: number;
    /** @description 扣除分钟数 */
    deductMinutes?: number;
}

export interface ShiftScheduleSettingCreate {
    /** @description 是否允许员工调班 */
    changeShiftEnabled?: boolean;
    /** @description 是否允许员工自己选择班次打卡 */
    shiftChooseEnabled?: boolean;
    /** @description 是否允许自动对班 */
    autoAlignShiftEnabled?: boolean;
    /** @description 是否允许自定义排班 */
    customScheduleEnabled?: boolean;
}

export interface StaffFieldSingleConfigSaveROModify {
    /**
     * Format: int64
     * @description 配置ID
     */
    configId?: number;
    /** @description 字段名 */
    fieldName: string;
    /** @description 命名空间（'SYSTEM':系统内置字段；'CUSTOM':自定义字段） */
    namespace: string;
    /** @description 业务端点（STAFF_DETAIL: 员工端员工档案, STAFF_ENTRY_REGISTRATION: 员工端入职登记表, ADMIN_ADD_STAFF: 管理端添加人员） */
    point: string;
    configs: FieldItemConfigModify[];
}

export interface AppraiseDeptConfig {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 岗位ID（与数据库post_id字段对应）
     */
    postId?: number;
    /**
     * Format: int64
     * @description 部门ID（与数据库dept_id字段对应）
     */
    deptId?: number;
    /** @description 是否考核（0：不考核，1：考核；与数据库is_assess字段对应） */
    isAssess?: number;
    /** @description @TableField(updateStrategy = FieldStrategy.IGNORED) */
    leaderId?: string;
    /**
     * Format: int64
     * @description hr校准人
     */
    hrId?: number;
    /** @description 创建时间 */
    createTime?: string;
    /**
     * Format: int64
     * @description 企业ID（与数据库co_no字段对应）
     */
    coNo?: number;
    /** @description 考核周期 JSON */
    cycleConfig?: string;
    cycleConfigList?: CycleConfig[];
}

export interface AppraiseDeptSummaryVO {
    /** @description 企业总员工数（所有人） */
    totalStaffCount?: number;
    /** @description 参加考核的员工数 */
    assessStaffCount?: number;
    /** @description 考核覆盖率（百分比，如 98） */
    coverage?: number;
    appraiseDeptConfigVOList?: AppraiseDeptConfigVO[];
}

export interface AppraiseStaffProject {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 职位ID
     */
    postId?: number;
    /**
     * Format: int64
     * @description 关联岗位考核表id
     */
    postTableId?: number;
    /**
     * Format: int64
     * @description 关联员工考核项目id
     */
    staffTableId?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 头像 */
    headPic?: string;
    /** @description 职位名称 */
    postName?: string;
    /**
     * Format: int64
     * @description 部门ID
     */
    deptId?: number;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 状态（-1待完善 1待员工确认 2 已发布 3 员工已确认 4 考核人已确认 5自评结束 6 考核人评分结束 7审核通过 8 校准完成 9 面谈结束 10 完成考核） */
    status?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 考核人ID */
    leaderId?: string;
    /** @description 考核人姓名 */
    leaderName?: string;
    /**
     * Format: int64
     * @description 审批人ID
     */
    hrId?: number;
    /** @description 审批人姓名 */
    hrName?: string;
    /** @description 类型（1月度 2 季度 3 半年度 4 年度） */
    type?: number;
    /** @description 年份 */
    year?: number;
    /** @description 年份 */
    endYear?: number;
    /** @description 考核周期-开始月份 */
    month?: number;
    /** @description 考核周期-结束月份 */
    endMonth?: number;
    /** @description 考核有效期 */
    expirDate?: string;
    /** @description 考试开始时间 */
    examTime?: string;
    /** @description 加分上限 */
    maxScore?: number;
    /** @description 减分上限 */
    maxDscore?: number;
    /** @description 允许手工申请 1 允许被考核人手工申请 0 不允许 */
    allowApply?: number;
    /** @description 1 允许被考核人手工申请 0 不允许 */
    allowLeaderApply?: number;
    /** @description 自评分 */
    selfScore?: number;
    /** @description 360评分 */
    cycleScore?: number;
    /** @description 上级评分 */
    leaderScore?: number;
    /** @description 自评备注 */
    selfRemark?: string;
    /** @description 领导备注 */
    leaderRemark?: string;
    /** @description 绩效面谈备注 */
    remark?: string;
    /** @description 最终得分 */
    score?: number;
    /** @description 绩效显示文本 */
    scoreDisplay?: string;
    selfScoreDisplay?: string;
    /** @description 自评分显示等级 */
    cycleScoreDisplay?: string;
    /** @description 360显示等级 */
    leaderScoreDisplay?: string;
    /** @description 考核表名称 */
    tableName?: string;
    /** @description 员工确认时间（对应数据库字段 self_apply_time） */
    selfApplyTime?: string;
    /** @description 考核人首次确认考核人目标值时间 */
    leaderFirstApplyTime?: string;
    /** @description 负责人确认时间（对应数据库字段 leader_apply_time） */
    leaderApplyTime?: string;
    /** @description 发布时间（对应数据库字段 pub_time） */
    pubTime?: string;
    /** @description 自评时间（对应数据库字段 self_score_time） */
    selfScoreTime?: string;
    /** @description 考核人打分时间（对应数据库字段 leader_score_time） */
    leaderScoreTime?: string;
    /** @description HR确认时间（对应数据库字段 hr_confirm_time） */
    hrConfirmTime?: string;
    /** @description 面谈时间（对应数据库字段 face_time） */
    faceTime?: string;
    /** @description 完成时间（对应数据库字段 done_time） */
    doneTime?: string;
    /** @description 0不需要员工考核 1 需要员工考核 */
    needStaff?: number;
    /** @description 0不需要员工360考核 1 需要员工360考核 */
    needCycle?: number;
    /** @description 0 未完成 1 已完成 */
    cycleFinish?: number;
    /** @description 1 考核人结束 2 360 自动结束 */
    cycleFinishType?: number;
    /** @description 岗位考核表 配置 json */
    postConfigDetail?: string;
    /** @description 对应绩效系数，用于奖金计算等 */
    coefficient?: number;
    /** @description 基于 postConfigDetail */
    postTableConfigList?: AppraisePostTableConfig[];
}

export interface ServiceResultListGetCurrentDeptStaffVO {
    code?: string;
    success?: boolean;
    data?: GetCurrentDeptStaffVO[];
    message?: string;
    tid?: string;
}

export interface WorkOrderDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 0-我发起的；1-我处理的 */
    type?: number;
    /** @description 类型名称 */
    classifyName?: string;
    /** @description 提交人姓名 */
    submitName?: string;
    /** @description 是否紧急: 0-紧急;3-不紧急 */
    urgentFlag?: number[];
    /** @description 受理人姓名 */
    handlerName?: string;
    /** @description 是否解决 */
    completeFlag?: boolean[];
    /** @description 状态： 0-待处理； 1-进行中； 2-已完成； 3-关闭； */
    status?: number[];
    /** @description 类型ID */
    classifyId?: string[];
}

export interface HrmSearchDTO {
    /** @description 搜索类型 */
    typeCode: string;
    /** @description 搜索关键字 */
    search?: string;
}

export interface OvertimeCalculateRuleModify {
    /** @description 是否需要扣除休息时间 */
    isDeductBreakTime?: boolean;
    /** @description 休息时间扣除方式（1：按休息时间扣除；2：按加班时长扣除） */
    deductType?: number;
    /** @description 休息时段 */
    breakTimePeriods?: TimePeriodModify[];
    /** @description 时长扣除规则 */
    deductRules?: TieredTimeModify[];
    /**
     * @description 下班后多久开始计算加班（单位：分钟）
     * @default 0
     */
    beginOvertimeAfterWork: number;
    /**
     * @description 最短加班时间（单位：分钟）
     * @default 0
     */
    minOvertime: number;
    /**
     * @description 最长加班时间（单位：分钟，最长不能超过24小时）
     * @default 0
     */
    maxOvertime: number;
}

export interface DayOffClockSettingCreate {
    version?: number;
    /** @description 打卡交替方式（1：覆盖模式；2：交替模式） */
    alternateMode?: number;
    /** @description 最小打卡间隔分钟数（0表示不限） */
    minClockIntervalMinutes?: number;
}

export interface ServiceResultAppraiseDeptConfig {
    code?: string;
    success?: boolean;
    data?: AppraiseDeptConfig;
    message?: string;
    tid?: string;
}

export interface ServiceResultAppraiseDeptSummaryVO {
    code?: string;
    success?: boolean;
    data?: AppraiseDeptSummaryVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultListAppraiseStaffProject {
    code?: string;
    success?: boolean;
    data?: AppraiseStaffProject[];
    message?: string;
    tid?: string;
}

export interface WorkOrderCreateDTO {
    /** @description 类型ID */
    classifyId?: string;
    /** @description 内容 */
    content?: string;
    /** @description 紧急程度：0-紧急；1-高；2-一般；3-低； */
    urgencyLevel?: number;
    /** @description 期望完成时间 */
    expectedCompletionTime?: string;
    /** @description 附件 */
    attachments?: WorkOrderAttachmentDTO[];
}

export interface WorkOrderRecordsVO {
    /** @description 内容 */
    recordContent?: string;
    /** @description 修改字段名 */
    paramName?: string;
    /** @description 修改前数据 */
    oldValue?: string;
    /** @description 修改后数据 */
    newValue?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 状态： 0-发起； 1-已接收； 2-已转交； 3-已完成； 4-已完结； 5-已关闭； */
    status?: number;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人名字 */
    createByName?: string;
    /** @description 创建人头像 */
    createByPhoto?: string;
    /** @description 创建人部门 */
    createByDept?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 处理人名字 */
    handlerName?: string;
    /** @description 处理人头像 */
    handlerPhoto?: string;
    /** @description 处理人部门 */
    handlerDept?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface WorkOrderCollaboratorVO {
    /** @description 工单协作人ID */
    collaboratorId?: string;
    /** @description 工单协作人姓名 */
    collaboratorName?: string;
    /** @description 工单协作人部门 */
    collaboratorDept?: string;
    /** @description 工单协作人头像 */
    collaboratorPhoto?: string;
}

export interface MapDatePermissionRelationDetailVO {
    0?: Safe_Type_0;
}

export interface OvertimeAccountingRuleModify {
    /** @description 核算方式 (1：计为调休；2：计算加班费；3：员工自选) */
    accountingMethod?: number;
    /** @description 调休换算比例 */
    ratio?: number;
    /** @description 调休假生效方式（1：即时生效；2：下月生效；3：延迟生效） */
    effectiveMethod?: number;
    /** @description 延迟天数 */
    delayDays?: number;
    /** @description 假期有效天数 */
    validDays?: number;
}

export interface SpecialClockDateSettingCreate {
    /** @description 方式 （1：单个日期；2：时间段） */
    mode?: number;
    /** @description 日期 */
    date?: string;
    /** @description 重复方式（0：不重复；1：每两周重复；2：每月重复；3：每年重复） */
    repetitiveMode?: number;
    /** @description 截止日期 */
    expirationDate?: string;
    /** @description 开始日期 */
    beginDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 班次id（为空表示跟随考勤组） */
    shiftIds?: number[];
    /** @description 备注 */
    remark?: string;
}

export interface WorkOrderEditDTO {
    /** @description ID */
    id?: string;
    /** @description 类型ID */
    classifyId?: string;
    /** @description 内容 */
    content?: string;
    /** @description 紧急程度：0-紧急；1-高；2-一般；3-低； */
    urgencyLevel?: number;
    /** @description 期望完成时间 */
    expectedCompletionTime?: string;
    /** @description 是否重新发起 */
    resubmitFlag?: boolean;
    /** @description 附件 */
    attachments?: WorkOrderAttachmentDTO[];
}

export interface WorkOrderDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 内容 */
    content?: string;
    /** @description 处理人ID */
    handlerId?: string;
    /** @description 处理人名字 */
    handlerName?: string;
    /** @description 类型ID */
    classifyId?: string;
    /** @description 类型名称 */
    classifyName?: string;
    /** @description 紧急程度：0-紧急；1-高；2-一般；3-低； */
    urgencyLevel?: number;
    /** @description 期望完成时间 */
    expectedCompletionTime?: string;
    /** @description 发起时间 */
    launchTime?: string;
    /** @description 完成时间 */
    finishTime?: string;
    /** @description 催办时间 */
    expediteTime?: string;
    /** @description 催办规则 */
    urgencyRule?: number;
    /** @description 状态： 0-待处理； 1-进行中； 2-已完成； */
    status?: number;
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建人部门 */
    createByDept?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 工单操作记录 */
    recordList?: WorkOrderRecordsVO[];
    /** @description 附件 */
    attachments?: WorkOrderAttachmentVO[];
    /** @description 流程进度 */
    processProgress?: WorkOrderProcessProgressVO[];
}

export interface WorkOrderAttachmentVO {
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface GetCurrentStaffAllDataPermissionVO {
    /** @description 是否有数据权限 */
    haveDataPermissionFlag?: boolean;
    /** @description 是否企业负责人 */
    enterpriseDirectorFlag?: boolean;
    /** @description 拥有的数据权限 */
    dataPermission?: MapDatePermissionRelationDetailVO;
}

export interface OvertimeDurationModify {
    /** @description 时长单位（1：小时；2：天） */
    timeUnit?: number;
    /**
     * @description 取整模式（0: 向上取整，3: 向下取整，4: 四舍五入）
     * @default 4
     * @enum {integer}
     */
    roundingMode: never;
    /**
     * @description 保留小数位数（仅适用于四舍五入）
     * @default 1
     */
    scale: number;
    /**
     * @description 基数（适用于向上/向下取整）
     * @default BigDecimal.valueOf(0.5f)
     */
    cardinal: number;
    /**
     * @description 日折算小时数
     * @default BigDecimal.valueOf(8)
     */
    dayConvert2Hours: number;
}

export interface ClockWaySettingCreate {
    /** @description 版本号（固定为 1） */
    version: number;
    /** @description 是否允许wifi打卡 */
    wifiEnabled: boolean;
    /** @description 允许的wifi列表 */
    wifiConfigNos?: number[];
    /** @description 是否公司内wifi都可打卡 */
    wifiAll?: boolean;
    /** @description 是否允许位置打卡 */
    positionEnabled: boolean;
    /** @description 允许打卡的位置 */
    positionConfigNos?: number[];
    /** @description 是否公司内位置都可打卡 */
    positionAll?: boolean;
    /** @description 是否允许考勤机打卡 */
    attendanceDeviceEnabled: boolean;
    /** @description 允许打卡的考勤机 */
    attDeviceNos?: number[];
    /** @description 是否公司内考勤机都可打卡 */
    deviceAll?: boolean;
}

export interface ServiceResultWorkOrderDetailVO {
    code?: string;
    success?: boolean;
    data?: WorkOrderDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultGetCurrentStaffAllDataPermissionVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: GetCurrentStaffAllDataPermissionVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface OvertimeRuleSaveROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    name?: string;
    /** @description 加班类型（1：工作日加班；2：休息日加班；3：法定节假日加班） */
    overtimeType?: number;
    /** @description 加班有效时间规则（1：按审批时间；2：按打卡时长；3：在审批时间段内按打卡时长计算） */
    effectiveTimeRule?: number;
    /** @description 加班计算规则 */
    calculationRule?: OvertimeCalculateRuleModify;
    /** @description 加班核算规则 */
    accountingRule?: OvertimeAccountingRuleModify;
    /** @description 加班时长规则 */
    durationRule?: OvertimeDurationModify;
    /**
     * @description 上班前是否允许加班
     * @default true
     */
    beforeWorkEnabled: boolean;
    /**
     * @description 班次内休息时段是否允许加班
     * @default true
     */
    breakTimeEnabled: boolean;
    /**
     * @description 下班后是否允许加班
     * @default true
     */
    afterWorkEnabled: boolean;
}

export interface LeaveClockSettingCreate {
    version?: number;
    /** @description 离岗/返岗是否需要打卡 */
    clockRequired?: boolean;
    /** @description 离岗允许提前分钟数 */
    leaveAdvancedMinutes?: number;
    /** @description 返岗允许延迟分钟数 */
    returnDelayMinutes?: number;
}

export interface DocNoticeDownloadWithSignDTO {
    /**
     * Format: int64
     * @description 公文附件ID doc_notice_file.id
     */
    fileId: number;
    /**
     * Format: int64
     * @description 签阅人 员工ID, doc_notice_d.staff_no
     */
    staffNo: number;
}

export interface GetAllStaffByDataPermissionVO {
    /** @description 是否有数据权限 */
    haveDataPermissionFlag?: boolean;
    /** @description 数据权限模块 */
    modelList?: number[];
    /** @description 员工信息 */
    staffList?: HrmStaffBaseInfo[];
}

export interface ServiceResultBoolean {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: boolean;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface OutworkClockSettingCreate {
    version?: number;
    /** @description 是否允许外勤打卡 */
    clockEnabled?: boolean;
    /** @description 是否需要审批 */
    approvalRequired?: boolean;
    /** @description 是否需要备注 */
    remarkRequired?: boolean;
    /** @description 是否需要拍照 */
    takePhotoRequired?: boolean;
    /** @description 是否需要人脸识别 */
    faceRecognitionRequired?: boolean;
    /** @description 人脸识别是否需要真人验证 */
    realPersonVerifyRequired?: boolean;
}

export interface AppriasePostSaveDTO {
    /** Format: int64 */
    postId: number;
    /** @description 是否考核（0：不考核，1：考核；与数据库is_assess字段对应） */
    isAssess?: number;
    /** @description 考核人ID */
    leaderId?: string;
    /**
     * Format: int64
     * @description hr校准人
     */
    hrId?: number;
}

export interface WorkOrderAttachmentDTO {
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface WorkOrderStatisticsVO {
    /**
     * Format: int64
     * @description 总数
     */
    total?: number;
    /**
     * Format: int64
     * @description 我发起的
     */
    initiatedByMe?: number;
    /**
     * Format: int64
     * @description 待我处理的
     */
    myPendingHandle?: number;
    /**
     * Format: int64
     * @description 我已处理的
     */
    myProcessed?: number;
    /**
     * Format: int64
     * @description 待我确认完成
     */
    myWaitConfirmComplete?: number;
}

export interface DocNoticeMini {
    /**
     * Format: int64
     * @description 公文ID
     */
    id?: number;
    /** @description 标题 */
    title?: string;
    /** @description 发布时间 */
    pubTime?: string;
    /** @description 截止时间 */
    deadline?: string;
}

export interface ServiceResultGetAllStaffByDataPermissionVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: GetAllStaffByDataPermissionVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface BaseEditROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
}

export interface OvertimeRuleSettingCreate {
    /** @description 工作日是否允许加班 */
    workdayEnabled?: boolean;
    /**
     * Format: int64
     * @description 工作日加班规则ID
     */
    workdayRuleId?: number;
    /** @description 休息日是否允许加班 */
    restDayEnabled?: boolean;
    /**
     * Format: int64
     * @description 休息日加班规则ID
     */
    restDayRuleId?: number;
    /** @description 节假日是否允许加班 */
    holidayEnabled?: boolean;
    /**
     * Format: int64
     * @description 节假日加班规则ID
     */
    holidayRuleId?: number;
}

export interface AppriasePostSaveCycleDTO {
    /** Format: int64 */
    postId?: number;
    /** Format: int64 */
    deptId?: number;
    cycleConfigList?: CycleConfig[];
}

export interface MeetingVO {
    /** @description 主键ID */
    id?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 分类名称 */
    classifyName?: string;
    /** @description 主持人ID */
    hostId?: string;
    /** @description 主持人名称 */
    hostName?: string;
    /** @description 主持人头像 */
    hostPersonPhoto?: string;
    /** @description 会议标题 */
    title?: string;
    /** @description 地点类型：0-线上；1-线下 */
    localType?: number;
    /** @description 具体地点 */
    specificLocal?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
    /** @description 会议决议状态： 0-没有； 1-有； */
    resolutionStatus?: number;
    /** @description 会议时间 */
    meetingDate?: string;
    /** @description 提醒时间:0-5分钟前; 1-15分钟前; 2-小时前; 3-1天前 */
    reminderTime?: string[];
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建人姓名 */
    createByName?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface ServiceResultWorkOrderStatisticsVO {
    code?: string;
    success?: boolean;
    data?: WorkOrderStatisticsVO;
    message?: string;
    tid?: string;
}

export interface DocNoticeTimeoutUnSignVO {
    /**
     * Format: int64
     * @description 未签阅总数
     */
    cntSum?: number;
    /** @description 未签阅的分类计数器 集合 */
    cntList?: DocNoticeTypeCntVO[];
    /** @description 未签阅的公文简化信息 集合 */
    notices?: DocNoticeMini[];
}

export interface ReissueClockRuleVO {
    /** Format: int64 */
    id?: number;
    name?: string;
    /** @description 是否允许补卡 */
    enabled?: boolean;
    /** @description 每个考勤周期可补卡次数 */
    countPerPeriod?: number;
    /** @description 时间限制（单位：天，0 表示无限制） */
    daysLimit?: number;
    /** @description 补卡截止天数（单位：天，考勤周期结束后几日内可补卡） */
    expDays?: number;
    /** @description 适用考勤状态 */
    attendanceStatus?: number[];
    /** @description 补卡提醒 */
    remindEnabled?: boolean;
    /** @description 提醒日期（前缀+号表示次月） */
    remindDayOfMonth?: string;
}

export interface MonthCycleSettingCreate {
    /** @description 月度考勤周期模式（1：自然月；2：跨月） */
    monthCycle?: number;
    /** @description 考勤月基准（1：以月度开始日期所在日期确定；2：以月度结束日期所在日期确定） */
    monthBase?: number;
    /** @description 考勤月开始日 */
    beginDayOfMonth?: number;
    /** @description 考勤月结束日 */
    endDayOfMonth?: number;
}

export interface AppraiseStaffConfirmOKRDTO {
    /** Format: int64 */
    id?: number;
    /** @description ORK 名称 */
    name?: string;
    weight?: number;
}

export interface AppraiseStaffTableDetailVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    id?: number;
    /** @description 名称 */
    name?: string;
    /** @description 考核类型（1 月度 2 季度 3 半年度 4 年度） */
    type?: number;
    /**
     * Format: int64
     * @description 创建人（关联用户表主键）
     */
    createUser?: number;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 发布时间（对应数据库字段 pub_time） */
    pubTime?: string;
    /** @description 更新时间 */
    updateTime?: string;
    /** @description 状态（1=待发布，2=已发布） */
    status?: number;
    /** @description 加分上限 */
    maxScore?: number;
    /** @description 减分上限 */
    maxDscore?: number;
    /** @description 1 允许被考核人手工申请 0 不允许 */
    allowApply?: number;
    /** @description 1 允许考核人手工申请 0 不允许 */
    allowLeaderApply?: number;
    /** @description 0 无okr 1 有 */
    okr?: number;
    /** @description okr权重 */
    okrWeight?: number;
    /** @description 0 无kpi 1 有 */
    kpi?: number;
    /** @description kpi权重 */
    kpiWeight?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 岗位ID（关联岗位表主键）
     */
    postId?: number;
    /** @description 考核人 */
    leaderId?: string;
    createName?: string;
    personalPhoto?: string;
    /** @description 考核内容 */
    detailList?: AppriasePostTableGroupVO[];
    /** @description KPI */
    kpiList?: AppriasePostTableItemVO[];
    /** @description 考核修正 */
    reviseList?: AppriasePostTableGroupVO[];
    /** @description 考核管理 */
    configList?: AppraisePostTableConfig[];
    /** Format: int64 */
    projectId?: number;
    /** Format: int64 */
    staffId?: number;
    /** @description 考核人名字 */
    staffName?: string;
    /** @description 考核人名字 */
    leaderStaffName?: string;
    leaderPersonalPhoto?: string;
    /** Format: int64 */
    hrId?: number;
    /** @description hr名字 */
    hrStaffName?: string;
    hrPersonalPhoto?: string;
    /** @description 考核表名字 */
    tableName?: string;
    /** @description 0 不需要同步到目标管理  1 需要同步到 目标管理 */
    needSync?: number;
    /** @description ORK */
    okrList?: AppriasePostTableItemVO[];
    /** @description 自评分 */
    selfScore?: number;
    /** @description 360评分 */
    cycleScore?: number;
    /** @description 上级评分 */
    leaderScore?: number;
    /** @description 自评备注 */
    selfRemark?: string;
    /** @description 领导备注 */
    leaderRemark?: string;
    /** @description 绩效面谈备注 */
    remark?: string;
    /** @description 最终得分 */
    score?: number;
    /** @description 绩效显示文本 */
    scoreDisplay?: string;
    /** @description 对应绩效系数，用于奖金计算等 */
    coefficient?: number;
    /** @description 自评分显示等级 */
    selfScoreDisplay?: string;
    /** @description 上级评分显示等级 */
    leaderScoreDisplay?: string;
    /** @description 360显示等级 */
    cycleScoreDisplay?: string;
    /** @description 考核人首次确认考核人目标值时间 */
    leaderFirstApplyTime?: string;
    /** @description 员工确认时间（对应数据库字段 self_apply_time） */
    selfApplyTime?: string;
    /** @description 负责人确认时间（对应数据库字段 leader_apply_time） */
    leaderApplyTime?: string;
    /** @description 自评时间（对应数据库字段 self_score_time） */
    selfScoreTime?: string;
    /** @description 考核人打分时间（对应数据库字段 leader_score_time） */
    leaderScoreTime?: string;
    /** @description HR确认时间（对应数据库字段 hr_confirm_time） */
    hrConfirmTime?: string;
    /** @description 面谈时间（对应数据库字段 face_time） */
    faceTime?: string;
    /** @description 完成时间（对应数据库字段 done_time） */
    doneTime?: string;
    /** @description 0不需要员工考核 1 需要员工考核 */
    needStaff?: number;
    /** @description 0不需要员工360考核 1 需要员工360考核 */
    needCycle?: number;
    /** @description 需要360评价的数量 */
    cycleTotalCounts?: number;
    /** @description 已完成的360评价的数量 */
    cycleFinishCounts?: number;
    /** @description 是否已完成 360考核 0 未完成 1 已完成 */
    cycleFinish?: number;
    /** @description 自评OKR分 */
    selfOkrScore?: number;
    /** @description 360OKR分 */
    cycleOkrScore?: number;
    /** @description 自评OKR公式 */
    selfOkrDisplay?: string;
    /** @description 自评加减分 */
    selfRevScore?: number;
    /** @description 自评加减分公式 */
    selfRevDisplay?: string;
    /** @description 自评kpi分 */
    selfKpiScore?: number;
    /** @description 自评kpi公式 */
    selfKpiDisplay?: string;
    /** @description 上级加减分 */
    leaderRevScore?: number;
    /** @description 加减分 */
    revScore?: number;
    /** @description 上级加减分公式 */
    leaderRevDisplay?: string;
    /** @description 上级ORK评分 */
    leaderOkrScore?: number;
    /** @description 上级OKR评分公式 */
    leaderOkrDisplay?: string;
    /** @description 上级KPI评分 */
    leaderKpiScore?: number;
    /** @description 上级KPI评分公式 */
    leaderKpiDisplay?: string;
    kpiScore?: number;
    okrScore?: number;
    /** @description kpi得分公式 */
    kpiDisplay?: string;
    /** @description okr得分公式 */
    okrDisplay?: string;
    /** @description 加减分得分公式 */
    revDisplay?: string;
    /** @description 自评OKR等级 */
    selfOkrScoreLevel?: string;
    /** @description 360OKR等级 */
    cycleOkrScoreLevel?: string;
    /** @description 自评Kpi等级 */
    selfKpiScoreLevel?: string;
    /** @description leaderOKR等级 */
    leaderOkrScoreLevel?: string;
    /** @description leaderKpi等级 */
    leaderKpiScoreLevel?: string;
    /** @description final OKR等级 */
    okrScoreLevel?: string;
    /** @description final Kpi等级 */
    kpiScoreLevel?: string;
}

export interface PageMeetingVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: MeetingVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface WorkOrderUpdateUrgencyLevelDTO {
    /** @description ID */
    id?: string;
    /** @description 紧急程度：0-紧急；1-高；2-一般；3-低； */
    urgencyLevel?: number;
}

export interface WorkOrderProcessProgressVO {
    /** @description 状态:  0-待接收； 1-进行中； 2-已完成；4-已确认； */
    status?: number;
    /** @description 时间 */
    date?: string;
    /** @description 用户ID */
    userId?: string;
    /** @description 用户姓名 */
    userName?: string;
    /** @description 用户头像 */
    userPhoto?: string;
}

export interface ServiceResultDocNoticeTimeoutUnSignVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: DocNoticeTimeoutUnSignVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface PageReissueClockRuleVO {
    records?: ReissueClockRuleVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface VerificationRuleCreate {
    version?: number;
    /**
     * @description 是否需要拍照
     * @default false
     */
    takePhotoRequired: boolean;
    /**
     * @description 是否需要人脸验证
     * @default false
     */
    faceRecognitionRequired: boolean;
    /**
     * @description 是否需要真人验证
     * @default false
     */
    realPersonVerifyRequired: boolean;
}

export interface AppraiseStaffConfirmCheckDTO {
    /** Format: int64 */
    id?: number;
    name?: string;
    weight?: number;
    /** @description 目标值 */
    target?: number;
    /** @description 员工确认值 */
    selfConfirm?: number;
    /** @description 上级确认值 */
    leaderConfirm?: number;
}

export interface ServiceResultAppraiseStaffTableDetailVO {
    code?: string;
    success?: boolean;
    data?: AppraiseStaffTableDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultPageMeetingVO {
    code?: string;
    success?: boolean;
    data?: PageMeetingVO;
    message?: string;
    tid?: string;
}

export interface WorkOrderUpdateStatusDTO {
    /** @description ID */
    id?: string;
    /** @description 状态： 0-待处理； 1-进行中； 2-已完成； 3-已完结； 4-关闭； */
    status?: number;
    /** @description 备注 */
    remark?: string;
}

export interface WorkOrderStatisticsByStatusVO {
    /**
     * Format: int64
     * @description 总数
     */
    total?: number;
    /**
     * Format: int64
     * @description 待处理
     */
    pending?: number;
    /**
     * Format: int64
     * @description 进行中
     */
    progressing?: number;
    /**
     * Format: int64
     * @description 已处理待确认
     */
    finish?: number;
    /**
     * Format: int64
     * @description 已完成
     */
    completed?: number;
    /**
     * Format: int64
     * @description 已关闭
     */
    close?: number;
}

export interface ServiceResultPageReissueClockRuleVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageReissueClockRuleVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface OutOfScopeClockSettingCreate {
    version?: number;
    /**
     * @description 是否允许范围外打卡
     * @default false
     */
    outOfScopeEnabled: boolean;
    /** @description 范围外打卡记录状态 (0: 记录为地点异常； 1： 记录为正常外勤打卡) */
    clockStatus?: number;
}

export interface AppraiseStaffConfirmDTO {
    /** Format: int64 */
    id?: number;
    /** @description ork Item */
    orkItemList?: AppraiseStaffConfirmOKRDTO[];
    /** @description 考核 Item */
    checkItemList?: AppraiseStaffConfirmCheckDTO[];
}

export interface MeetingDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 开始时间 */
    startTime?: string;
    /** @description 结束时间 */
    endTime?: string;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
    /** @description 我创建的 */
    myCreate?: boolean;
    /** @description 分类ID */
    classifyId?: string;
}

export interface WorkOrderForwardDTO {
    /** @description ID */
    id?: string;
    /** @description 新处理人ID */
    newHandlerId?: string;
    /** @description 备注 */
    remark?: string;
}

export interface ServiceResultWorkOrderStatisticsByStatusVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: WorkOrderStatisticsByStatusVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface BasePageQueryRO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderCondition[];
}

export interface StaffSelectionConditionEdit {
    /** @description 维度类型 */
    type?: number;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionDataEdit[];
}

export interface HrAttendanceGroupSaveROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 考勤组名称 */
    name: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType: number;
    /** @description 休息日规则（0：无固定休息日；1：双休；2：单休：3：单双休） */
    restDayRule?: number;
    /** @description 首次双休日期（单双休必填，精确到周即可，无需精确到天） */
    firstBiWeeklyDayOff?: string;
    /** @description 工作日设置（固定班制必填） */
    workdaySetting?: WorkdayShiftSettingCreate[];
    /** @description 适用班次（排班制必填） */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSettingCreate;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSettingCreate;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSettingCreate[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSettingCreate[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySettingCreate;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSettingCreate;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSettingCreate;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSettingCreate;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRuleCreate;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSettingCreate;
    /**
     * @description 规则生效日期（默认明日生效）
     * @default LocalDate.now().plusDays(1)
     */
    effectiveDate: string;
    /**
     * @description 冲突策略（1：覆盖；2：丢弃，默认是覆盖策略）
     * @enum {integer}
     */
    conflictStrategy?: never;
    /** @description 员工选择条件 */
    selectionForm: StaffSelectionConditionDataCreate;
}

export interface MeetingAttachmentVO {
    /** @description 主键ID */
    id?: string;
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface HrCompanySummaryVO {
    /**
     * Format: int64
     * @description 公司ID
     */
    id?: number;
    /** @description 公司名称 */
    name?: string;
    /** @description 公司别名 */
    aliasName?: string;
    /** @description 社会统一信用代码 */
    creditCode?: string;
    /** @description 是否默认登录企业 */
    isDefault?: boolean;
    /** @description 是否超管 */
    isAdmin?: boolean;
    /** @description 最后登录时间 */
    lastLoginTime?: string;
    /**
     * Format: int64
     * @description 软件版本ID
     */
    softVersionId?: number;
    /** @description 企业logo */
    logo?: string;
    /** @description 是否可用 */
    enabled?: boolean;
    /** @description 职位 */
    deptName?: string;
    /** @description 职级 */
    positionName?: string;
}

export interface ServiceResultReissueClockRuleVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: ReissueClockRuleVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface HrAttendanceGroupSaveROEdit {
    /** Format: int64 */
    id?: number;
    /** @description 考勤组名称 */
    name?: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType?: number;
    /** @description 工作日设置 */
    workdaySetting?: WorkdayShiftSettingEdit[];
    /** @description 适用班次 */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSettingEdit;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSettingEdit;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSettingEdit[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSettingEdit[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySettingEdit;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSettingEdit;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSettingEdit;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSettingEdit;
    /** @description 考勤月度周期设置 */
    monthCycleSetting?: MonthCycleSettingEdit;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRuleEdit;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSettingEdit;
    /** @description 员工选择条件 */
    staffSelectionRules: StaffSelectionConditionEdit[];
}

export interface StaffNameIdPicVO {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 员工姓名 */
    staffName?: string;
    personalPhoto?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 职位名称 */
    postName?: string;
}

export interface MeetingParticipantVO {
    /** @description 部门名称 */
    deptName?: string[];
    /** @description 人员信息 */
    participantList?: MeetingParticipantDetailVO[];
}

export interface ReissueClockRuleSaveROEdit {
    /** Format: int64 */
    coNo?: number;
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    /** @description 规则版本 */
    version?: number;
    /** @description 规则名称 */
    name?: string;
    /** @description 规则类型 */
    type?: number;
    /** @description 是否允许补卡 */
    enabled?: boolean;
    /** @description 每个考勤周期可补卡次数 */
    countPerPeriod?: number;
    /** @description 补卡时间限制（单位：天，0 表示无限制） */
    daysLimit?: number;
    /** @description 补卡截止天数（单位：天，考勤周期结束后几日内可补卡） */
    expDays?: number;
    /** @description 适用考勤状态 */
    attendanceStatus?: number[];
    /** @description 补卡提醒 */
    remindEnabled?: boolean;
    /** @description 提醒日期（前缀+号表示次月） */
    remindDayOfMonth?: string;
}

export interface AttDimensionDataModify {
    /** @description 维度类型 */
    dimensionType?: number;
    /**
     * Format: int64
     * @description 维度值
     */
    dimensionValue?: number;
}

export interface MeetingResolutionVO {
    /** @description 主键ID */
    id?: string;
    /** @description 决议内容 */
    resoluteContent?: string;
}

export interface ReissueClockRuleSaveROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 规则版本 */
    version?: number;
    /** @description 规则名称 */
    name?: string;
    /** @description 是否允许补卡 */
    enabled?: boolean;
    /** @description 每个考勤周期可补卡次数 */
    countPerPeriod?: number;
    /** @description 补卡时间限制（单位：天，0 表示无限制） */
    daysLimit?: number;
    /** @description 补卡截止天数（单位：天，考勤周期结束后几日内可补卡） */
    expDays?: number;
    /** @description 适用考勤状态（1：正常；2：迟到；3：早退；4：旷工；5：缺卡） */
    attendanceStatus?: number[];
    /** @description 补卡提醒 */
    remindEnabled?: boolean;
    /** @description 提醒日期（前缀+号表示次月） */
    remindDayOfMonth?: string;
}

export interface AttStaffDimensionDataModify {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description 员工关联维度与维度值 */
    dimensionDataList?: AttDimensionDataModify[];
}

export interface MeetingDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 主持人ID */
    hostId?: string;
    /** @description 分类名称 */
    classifyName?: string;
    /** @description 会议标题 */
    title?: string;
    /** @description 会议内容 */
    content?: string;
    /** @description 地点类型：0-线上；1-线下 */
    localType?: number;
    /** @description 具体地点 */
    specificLocal?: string;
    /** @description 会议时间 */
    meetingDate?: string;
    /** @description 是否展示tip */
    showTipFlag?: boolean;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
    /** @description 会议决议状态： 0-没有； 1-有； */
    resolutionStatus?: number;
    /** @description 会议决议审核状态： 0-待审批； 1-已通过； */
    resolutionApprovalStatus?: number;
    /** @description 提醒时间:0-5分钟前; 1-15分钟前; 2-小时前; 3-1天前 */
    reminderTime?: string[];
    /** @description 创建人ID */
    createBy?: string;
    /** @description 创建时间 */
    createTime?: string;
    /** @description 会议附件 */
    attachmentList?: MeetingAttachmentVO[];
    /** @description 会议参会人 */
    participant?: MeetingParticipantVO;
    /** @description 会议抄送人 */
    cc?: MeetingParticipantVO;
    /** @description 会议纪要人 */
    summary?: MeetingParticipantVO;
    /** @description 决议审批人 */
    resolutionApprover?: MeetingParticipantVO;
    /** @description 会议相关决议 */
    resolutionList?: MeetingResolutionVO[];
}

export interface ClockErrorLogVO {
    /** Format: int64 */
    id?: number;
    /** @description 打卡时间 */
    clockTime?: string;
    /** @description 打卡渠道（1：wifi打卡；2：位置打卡；3：考勤机打卡） */
    clockWay?: number;
    /** @description 打卡地址 */
    address?: string;
    /** @description 异常类型 */
    errorType?: number;
    /** @description 异常信息 */
    remark?: string;
    /** @description 状态（0：待处理；1：已处理） */
    status?: number;
    /** @description 处理状态（0：已忽略；1：待审核；5：处理完结） */
    processStatus?: number;
}

export interface ServiceResultMeetingDetailVO {
    code?: string;
    success?: boolean;
    data?: MeetingDetailVO;
    message?: string;
    tid?: string;
}

export interface ServiceResultListClockErrorLogVO {
    code?: string;
    success?: boolean;
    data?: ClockErrorLogVO[];
    message?: string;
    tid?: string;
}

export interface MeetingAttachmentDTO {
    /** @description 附件名称 */
    attachmentName?: string;
    /** @description 附件地址 */
    attachmentUrl?: string;
}

export interface ClockLogVO {
    clockInTime?: string;
}

export interface MeetingParticipantDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 参会人ID */
    participantId?: string;
    /** @description 类型：0-参会人；1-抄送人 */
    type?: number;
}

export interface WorkOrderConfirmDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 是否确认完成 */
    confirmFlag?: boolean;
    /** @description 备注 */
    remark?: string;
    /** @description 附件 */
    attachments?: WorkOrderAttachmentDTO[];
}

export interface ServiceResultListClockLogVO {
    code?: string;
    success?: boolean;
    data?: ClockLogVO[];
    message?: string;
    tid?: string;
}

export interface MeetingResolutionDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 决议内容 */
    resoluteContent?: string;
    /** @description 决议内容纯文本 */
    resoluteContentText?: string;
}

export interface MeetingCreateDTO {
    /** @description 分类ID */
    classifyId?: string;
    /** @description 会议标题 */
    title?: string;
    /** @description 会议内容 */
    content?: string;
    /** @description 地点类型：0-线上；1-线下 */
    localType?: number;
    /** @description 具体地点 */
    specificLocal?: string;
    /** @description 会议时间 */
    meetingDate?: string;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
    /** @description 提醒时间:0-5分钟前; 1-15分钟前; 2-小时前; 3-1天前 */
    reminderTime?: string[];
    /** @description 是否创建行事历:null或者true创建, false不创建 */
    createTeamCalendarFlag?: boolean;
    /** @description 会议附件 */
    attachmentList?: MeetingAttachmentDTO[];
    /** @description 会议参会人及抄送人 */
    participantList?: string[];
    /** @description 会议抄送人 */
    ccList?: string[];
    /** @description 会议纪要人 */
    summaryList?: string[];
    /** @description 决议审批人 */
    resolutionApprover?: string[];
}

export interface ClockLogQueryROQuery {
    /** Format: int64 */
    coNo?: number;
    currentStaff?: HrmStaffBaseInfoQuery;
    date?: string;
}

export interface MeetingEditDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 分类ID */
    classifyId?: string;
    /** @description 会议标题 */
    title?: string;
    /** @description 会议内容 */
    content?: string;
    /** @description 地点类型：0-线上；1-线下 */
    localType?: number;
    /** @description 具体地点 */
    specificLocal?: string;
    /** @description 会议时间 */
    meetingDate?: string;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
    /** @description 是否创建行事历:null或者true创建, false不创建 */
    createTeamCalendarFlag?: boolean;
    /** @description 提醒时间:0-5分钟前; 1-15分钟前; 2-小时前; 3-1天前 */
    reminderTime?: string[];
    /** @description 会议附件 */
    attachmentList?: MeetingAttachmentDTO[];
    /** @description 会议参会人及抄送人 */
    participantList?: string[];
    /** @description 会议抄送人 */
    ccList?: string[];
    /** @description 会议纪要人 */
    summaryList?: string[];
    /** @description 决议审批人 */
    resolutionApprover?: string[];
}

export interface VacationMissClockInfo {
    /** @description 请假流程ID */
    flowId?: string;
    /** @description 缺卡类型（3：离岗卡；4：返岗卡） */
    missClockType?: number[];
}

export interface MeetingAttachmentEditDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 附件列表 */
    attachmentList?: MeetingAttachmentDTO[];
}

export interface AttendanceTimePeriodVO {
    /** @description 工作时段序号 */
    groupNo?: number;
    /** @description 时段上班时间 */
    beginTime?: string;
    /** @description 时段下班时间 */
    endTime?: string;
    /** @description 应出勤小时数 */
    requiredAttHours?: number;
    /** @description 打卡出勤分钟数 */
    clockAttMinutes?: number;
    /** @description 实际出勤小时数 */
    actualAttMinutes?: number;
    /** @description 是否旷工 */
    isAbsence?: boolean;
    /** @description 是否迟到 */
    isLate?: boolean;
    /** @description 是否早退 */
    isLeaveEarly?: boolean;
    /** @description 是否休假 */
    isVacation?: boolean;
    /** @description 是否出差 */
    isTravel?: boolean;
    /** @description 上班是否缺卡 */
    isMissClockIn?: boolean;
    /** @description 下班是否缺卡 */
    isMissClockOut?: boolean;
    /** @description 迟到分钟数 */
    lateMinutes?: number;
    /** @description 早退分钟数 */
    leaveEarlyMinutes?: number;
    /** @description 请假出勤分钟数 */
    vacationAttendanceMinutes?: number;
    /** @description 旷工小时数 */
    absenceMinutes?: number;
    /** @description 休假分钟数 */
    vacationMinutes?: number;
    /** @description 出差分钟数 */
    travelMinutes?: number;
    /**
     * Format: int64
     * @description 上班打卡明细ID
     */
    clockInDetailId?: number;
    /** @description 上班打卡方式 */
    clockInMode?: number;
    /** @description 上班打卡时间 */
    clockInTime?: string;
    /**
     * Format: int64
     * @description 上班打卡明细ID
     */
    clockOutDetailId?: number;
    /** @description 下班打卡方式 */
    clockOutMode?: number;
    /** @description 下班打卡时间 */
    clockOutTime?: string;
}

export interface MeetingResolutionEditDTO {
    /** @description ID */
    id?: string;
    /** @description 决议内容 */
    resolute?: string;
    /** @description 决议内容-纯文本 */
    resoluteText?: string;
}

export interface ShiftAccountVO {
    /** Format: int64 */
    shiftId?: number;
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
    /** @description 排班状态（0：未排班；1：已排休；2：已排班；3：已调班；4：系统对班；5：员工选班） */
    scheduleStatus?: number;
    /** @description 应出勤小时数 */
    requiredAttHours?: number;
    /** @description 应出勤天数 */
    requiredAttDays?: number;
    /** @description 打卡出勤小时数 */
    clockAttHours?: number;
    /** @description 实际出勤小时数 */
    actualAttHours?: number;
    /** @description 实际出勤天数 */
    actualAttDays?: number;
    /** @description 是否旷工 */
    isAbsence?: boolean;
    /** @description 是否迟到 */
    isLate?: boolean;
    /** @description 是否早退 */
    isLeaveEarly?: boolean;
    /** @description 是否休假 */
    isVacation?: boolean;
    /** @description 是否出差 */
    isTravel?: boolean;
    /** @description 是否缺卡 */
    isMissClock?: boolean;
    /** @description 是否请假缺卡 */
    isMissClockVacation?: boolean;
    /** @description 请假缺卡类型 */
    vacationMissClockInfo?: VacationMissClockInfo[];
    /** @description 迟到分钟数 */
    lateMinutes?: number;
    /** @description 早退分钟数 */
    leaveEarlyMinutes?: number;
    /** @description 请假出勤分钟数 */
    vacationAttendanceMinutes?: number;
    /** @description 旷工分钟数 */
    absenceMinutes?: number;
    /** @description 休假小时数 */
    vacationHours?: number;
    /** @description 最早打卡时间 */
    earliestClockTime?: string;
    /** @description 最晚打卡时间 */
    latestClockTime?: string;
    /** @description 考勤时段明细 */
    timePeriods?: AttendanceTimePeriodVO[];
}

export interface MeetingParticipantEditDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 参会人及抄送人列表 */
    participantList?: string[];
    /** @description 抄送人列表 */
    ccList?: string[];
    /** @description 抄送人列表 */
    summaryList?: string[];
    /** @description 决议审批人 */
    resolutionApprover?: string[];
}

export interface DeptPositionItem {
    /** @description 1=部门, 2=职位 */
    type?: number;
    /** Format: int64 */
    autoNo?: number;
}

export interface OKRShowStyleDTO {
    /** @description 1 显示等级 2 显示描述 3 显示等级+描述 */
    showType?: number;
    /** @description 0 评分可以超过标准分 1 不可以超过 */
    okrLimit?: number;
    /** @description 1 sabcd 2abcd 3手工打分 */
    okrScore?: number;
    orkConfigList?: RatingConfig[];
}

export interface AttendanceDayVO {
    /** @description 考勤日期 */
    date?: string;
    /** @description 工作日类型（0：工作日；1：休息日；2：补班日；3：法定节假日；4：免考勤工作日） */
    dayType?: number;
    /** @description 考勤组类型（0：免考勤组；1：固定班制；2：排班制；3：自由工时制） */
    groupType?: number;
    /** @description 是否已核算考勤 */
    isAccount?: boolean;
    /** @description 班次信息（固定班制、自由工时制最多一个，排班制可能有多个） */
    dailyShifts?: ShiftAccountVO[];
}

export interface RefIdDetail {
    deptPositions?: DeptPositionItem[];
}

export interface WorkPlanGroupVO {
    /** @description 主键ID */
    id?: string;
    /** @description 父级ID */
    parentId?: string;
    /** @description 名称 */
    name?: string;
    /** @description 数据类型: 0-分组;1-工作计划 */
    dataType?: number;
    /** @description 工作计划 */
    workPlanList?: WorkPlanListDetailVO[];
    /** @description 子集 */
    children?: WorkPlanGroupVO[];
}

export interface SelectionConditionModify {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别；5:职级；6:序列；7:司龄；8:用户组；100：全公司)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 100;
    /**
     * @description 比较运算符（1：包含；2：不包含；3：大于等于；4：小于等于）
     * @enum {integer}
     */
    operator?: 1 | 2 | 3 | 4 | 5;
    /** @description 维度数据 */
    data?: StaffDimensionDataModify[];
}

export interface StaffMonthCalendarVO {
    /** @description 月度应出勤天数 */
    requiredAttDays?: number;
    /** @description 月度实出勤天数 */
    actualAttDays?: number;
    /** @description 月度缺卡次数 */
    missClockCount?: number;
    /** @description 月度出差次数 */
    travelCount?: number;
    /** @description 月度请假小时数 */
    vacationHours?: number;
    /** @description 考勤年度 */
    year?: number;
    /** @description 考勤月度 */
    month?: number;
    /** @description 考勤月度开始日期 */
    beginDate?: string;
    /** @description 考勤月度结束日期 */
    endDate?: string;
    /** @description 月度加班小时数 */
    overtimeHours?: number;
    /** @description 考勤日明细 */
    days?: AttendanceDayVO[];
}

export interface AppraiseTableVO1 {
    /** @description 考核表名字 */
    name?: string;
    /** @description 1 月度 2 季度 3 半年度 4 年度 */
    type?: number;
    /** @description 1=待发布，2=已发布 */
    status?: number;
}

export interface MapBigDecimal {
    key?: number;
}

export interface DistributionDetailItem {
    id?: string;
    value?: number;
}

export interface WorkPlanListGroupVO {
    /** @description 用户ID */
    userId?: string;
    /** @description 用户姓名 */
    userName?: string;
    /** @description 用户头像 */
    userPhoto?: string;
    /** @description 用户部门名称 */
    userDept?: string;
    /** @description 用户岗位名称 */
    userPosition?: string;
    /** @description 工作计划分组 */
    workPlanGroupList?: WorkPlanGroupVO[];
}

export interface StaffSelectionConditionDataModify {
    /** Format: int64 */
    id?: number;
    /** @description 条件列表 */
    conditions?: SelectionConditionModify[];
}

export interface ServiceResultStaffMonthCalendarVO {
    code?: string;
    success?: boolean;
    data?: StaffMonthCalendarVO;
    message?: string;
    tid?: string;
}

export interface DistributionDetail {
    /** @description 键：等级标识（如"S"、"A"、"B"），值：百分比（如10表示10%） */
    gradeRatio?: MapBigDecimal;
}

export interface ServiceResultListWorkPlanListGroupVO {
    code?: string;
    success?: boolean;
    data?: WorkPlanListGroupVO[];
    message?: string;
    tid?: string;
}

export interface TimeSlot {
    start?: string;
    end?: string;
}

export interface StaffSelectionConditionModify {
    /**
     * @description 维度类型 (1:员工; 2:部门; 3:员工类型：4:性别)
     * @enum {integer}
     */
    type?: 1 | 2 | 3 | 4;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionDataModify[];
}

export interface MeetingParticipantDetailVO {
    /** @description 主键ID */
    id?: string;
    /** @description 参会人ID */
    participantId?: string;
    /** @description 参会人姓名 */
    participantName?: string;
    /** @description 照片 */
    photo?: string;
    /** @description 部门ID */
    deptId?: string;
    /** @description 部门名称 */
    deptName?: string;
    /** @description 职位ID */
    positionId?: string;
    /** @description 职位名称 */
    positionName?: string;
    /** @description 类型：0-参会人；1-抄送人 */
    type?: number;
}

export interface RealTimePeriodClockInfoVO {
    /** @description 时段序号 */
    groupNo?: number;
    /** @description 时段上班时间 */
    beginTime?: string;
    /** @description 时段下班时间 */
    endTime?: string;
    /** @description 是否休假 */
    isVacation?: boolean;
    /** @description 是否出差 */
    isTravel?: boolean;
    /**
     * @description 上班卡状态
     * @enum {integer}
     */
    clockInStatus?: never;
    /**
     * @description 下班卡状态
     * @enum {integer}
     */
    clockOutStatus?: never;
}

export interface HrAttendanceGroupSaveROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 考勤组名称 */
    name: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType: number;
    /** @description 休息日规则（0：无固定休息日；1：双休；2：单休：3：单双休） */
    restDayRule?: number;
    /** @description 首次双休日期（单双休必填，精确到周即可，无需精确到天） */
    firstBiWeeklyDayOff?: string;
    /** @description 工作日设置（固定班制必填） */
    workdaySetting?: WorkdayShiftSettingModify[];
    /** @description 适用班次（排班制必填） */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSettingModify;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSettingModify;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSettingModify[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSettingModify[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySettingModify;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSettingModify;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSettingModify;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSettingModify;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRuleModify;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSettingModify;
    /**
     * @description 规则生效日期（默认明日生效）
     * @default LocalDate.now().plusDays(1)
     */
    effectiveDate: string;
    /**
     * @description 冲突策略（1：覆盖；2：丢弃，默认是覆盖策略）
     * @enum {integer}
     */
    conflictStrategy?: never;
    /** @description 员工选择条件 */
    selectionForm: StaffSelectionConditionDataModify;
}

export interface ServiceResultAppraiseConfigForcedRule {
    code?: string;
    success?: boolean;
    data?: AppraiseConfigForcedRule;
    message?: string;
    tid?: string;
}

export interface WorkPlanExecutorVO {
    /** @description 执行人ID */
    id?: string;
    /** @description 执行人姓名 */
    name?: string;
}

export interface ShiftClockInfoVO {
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
    /** @description 是否休假中（仅当整个班次时段都请假时才返回 true） */
    isVacation?: boolean;
    /** @description 是否出差中（仅当整个班次时段都包含在出差时段时才返回 true） */
    isTravel?: boolean;
    /** @description 班次时段打卡信息 */
    timePeriods?: RealTimePeriodClockInfoVO[];
}

export interface MeetingCalendarStatusVO {
    /** @description 日期 */
    date?: string;
    /** @description 是否有会议 */
    haveMeeting?: boolean;
}

export interface RealTimeClockInfoVO {
    /** @description 考勤日期 */
    date?: string;
    /** @description 工作日类型（0：工作日；1：休息日；2：补班日；3：法定节假日；4：免考勤工作日） */
    dayType?: number;
    /** @description 考勤组类型（0：免考勤组；1：固定班制；2：排班制；3：自由工时制） */
    groupType?: number;
    /** @description 自由工时制 - 是否全工时 */
    isFullTime?: boolean;
    /** @description 排班制 - 是否排休 */
    isDayOff?: boolean;
    /** @description 自由工时制 - 打卡明细 */
    clockDetails?: TimeSlot[];
    /** @description 班次打卡信息 */
    shiftClockInfo?: ShiftClockInfoVO;
}

export interface AttEditROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
}

export interface ServiceResultListMeetingCalendarStatusVO {
    code?: string;
    success?: boolean;
    data?: MeetingCalendarStatusVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultRealTimeClockInfoVO {
    code?: string;
    success?: boolean;
    data?: RealTimeClockInfoVO;
    message?: string;
    tid?: string;
}

export interface GroupMigrationROCreate {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id?: number;
    sourceGroupIds: number[];
    /** Format: int64 */
    targetGroupId: number;
}

export interface PageWorkPlanListDetailVO {
    /**
     * @description 查询数据列表
     * @default Collections.emptyList()
     */
    records: WorkPlanListDetailVO[];
    /**
     * Format: int64
     * @description 总数
     * @default 0
     */
    total: number;
    /**
     * Format: int64
     * @description 每页显示条数，默认 10
     * @default 10
     */
    size: number;
    /**
     * Format: int64
     * @description 当前页
     * @default 1
     */
    current: number;
    /**
     * @description 排序字段信息
     * @default new ArrayList<>()
     */
    orders: OrderItem[];
    /**
     * @description 自动优化 COUNT SQL
     * @default true
     */
    optimizeCountSql: boolean;
    /**
     * @description 是否进行 count 查询
     * @default true
     */
    searchCount: boolean;
    /**
     * @description {@link #optimizeJoinOfCountSql()}
     * @default true
     */
    optimizeJoinOfCountSql: boolean;
    /**
     * Format: int64
     * @description 单页分页条数限制
     */
    maxLimit?: number;
    /** @description countId */
    countId?: string;
}

export interface ServiceResultPageWorkPlanListDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageWorkPlanListDetailVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface MapListForceStaffProject {
    key?: key2[];
}

export interface DimensionValue {
    /**
     * Format: int64
     * @description 维度值（示例：部门ID）
     */
    dimensionValue?: number;
    /** @description 维度值名称（示例：部门名称） */
    dimensionValueName?: string;
}

export interface GroupCalendarDateModifyROModify {
    /**
     * Format: int64
     * @description 考勤组ID
     */
    groupId: number;
    /** @description 日期（yyyy-MM-dd） */
    date: string;
    /**
     * @description 考勤日类型（0：工作日；1：休息日；2：补班日；3：节假日；4：自定义休息日；5：自定义工作日）
     * @enum {integer}
     */
    dayType: never;
}

export interface Dimension {
    /** @description 维度名称（示例：部门 员工类型） */
    dimensionName?: string;
    /** @description 变更前的维度值 */
    oldDimensionValues?: DimensionValue[];
    /** @description 变更后的维度值 */
    newDimensionValues?: DimensionValue[];
}

export interface WorkPlanDeleteDTO {
    /** @description 工作计划ID */
    id?: string;
    /** @description 执行人ID */
    executorIdList?: string[];
}

export interface StaffGroupChangeVO {
    /** @description 考勤组名称 */
    groupName?: string;
    /** @description 涉及变更的维度 */
    changeDimensions?: Dimension[];
    /** @description 涉及变更的员工列表 */
    staffList?: StaffInfoVO[];
}

export interface StaffFollowDTO {
    /** @description 关注用户ID */
    followUserId?: string;
    /** @description 是否关注 */
    followFlag?: boolean;
    /** @description 类型: 0-日月报;1-任务 */
    type?: number;
}

export interface GroupPreSaveVO {
    /** @description 考勤组冲突数据 */
    groupChangeList?: StaffGroupChangeVO[];
    /** @description 移出当前考勤组的员工列表 */
    unblockStaffs?: StaffInfoVO[];
}

export interface WorkPlanProcessRecordVO {
    /** @description 内容 */
    content?: string;
    /** @description 创建时间 */
    createTime?: string;
}

export interface ServiceResultGroupPreSaveVO {
    code?: string;
    success?: boolean;
    data?: GroupPreSaveVO;
    message?: string;
    tid?: string;
}

export interface StaffDimensionDataEdit {
    /** @description 名称 */
    name?: string;
    /**
     * Format: int64
     * @description 值
     */
    value?: number;
}

export interface ScopeDimensionFormLineEdit {
    /** @description 维度类型 */
    type?: number;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionDataEdit[];
}

export interface MeetingUpdateStatusDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 状态： 0-暂存； 1-发布； */
    status?: number;
}

export interface ServiceResultWorkPlanListDetailVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: WorkPlanListDetailVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface WorkPlanUpdateExecuteTimeDTO {
    /** @description 主键ID */
    workPlanId?: string;
    /** @description 记录ID */
    recordId?: string;
    /** @description 开始日期 */
    startDate?: string;
    /** @description 结束日期 */
    endDate?: string;
}

export interface AppraiseForceDeptVO {
    versionId?: number;
    deptVOList?: AppraiseDeptVO[];
}

export interface ServiceResultAppraiseForceDeptVO {
    code?: string;
    success?: boolean;
    data?: AppraiseForceDeptVO;
    message?: string;
    tid?: string;
}

export interface WorkPlanFollowDTO {
    /** @description 工作计划ID */
    workPlanId?: string;
    /** @description 是否关注 */
    followFlag?: boolean;
}

export interface WorkPlanMoveDTO {
    /** @description 记录ID列表 */
    recordIdList?: string[];
}

export interface MeetingResolutionApprovalDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 状态： 0-待审批； 1-已通过； */
    status?: number;
}

export interface MeetingResolutionSubmitApprovalDTO {
    /** @description 会议ID */
    meetingId?: string;
    /** @description 决议审批人 */
    resolutionApprover?: string[];
}

export interface MeetingStatisticsVO {
    /** @description 日期 */
    date?: string;
    /**
     * Format: int64
     * @description 数量
     */
    count?: number;
}

export interface ServiceResultListMeetingStatisticsVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: MeetingStatisticsVO[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface WorkPlanEditDirectorDTO {
    /** @description 主键ID */
    id?: string;
    /** @description 负责人ID */
    directorId?: string;
}

export interface ShiftInfoVO {
    /** @description 创建时间 */
    created?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 创建人 */
    creator?: string;
    /** @description 更新人 */
    updater?: string;
    /** Format: int64 */
    id?: number;
    /** @description 班次名称 */
    name?: string;
    /** @description 班次颜色 */
    color?: string;
    /** @description 班次上班时间 */
    beginTime?: string;
    /** @description 班次下班时间 */
    endTime?: string;
}

export interface WorkPlanTopProjectDTO {
    /** @description 工作计划ID */
    workPlanId?: string;
    /** @description 是否置顶/取消置顶 */
    topFlag?: boolean;
}

export interface GroupWorkDayShift {
    /** @description 星期 */
    dayOfWeek?: number;
    /** @description 班次概要 */
    shift?: ShiftInfoVO;
}

export interface AttendanceGroupSummaryInfoVO {
    /** Format: int64 */
    id?: number;
    /** @description 考勤组名称 */
    name?: string;
    /** @description 考勤组类型 */
    groupType?: number;
    /** @description 工作日设置 */
    workDays?: GroupWorkDayShift[];
    /** @description 关联员工数 */
    staffCount?: number;
}

export interface PageAttendanceGroupSummaryInfoVO {
    records?: AttendanceGroupSummaryInfoVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface AppraiseStaffTargetListVO {
    staff?: StaffNameIdPicVO;
    /** @description 年份 */
    year?: number;
    /**
     * Format: int64
     * @description 指标ID
     */
    itemId?: number;
    /** @description 考核项名称 */
    itemName?: string;
    /** @description 单位 */
    unit?: string;
    /** @description 1-12月 */
    monthTargetList?: AppraiseStaffValue[];
}

export interface ServiceResultPageAttendanceGroupSummaryInfoVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageAttendanceGroupSummaryInfoVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultListAppraiseStaffTargetListVO {
    code?: string;
    success?: boolean;
    data?: AppraiseStaffTargetListVO[];
    message?: string;
    tid?: string;
}

export interface AttendanceGroupQueryQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
    /** @description 考勤组类型 */
    groupType?: number;
    /** @description 考勤组名称 */
    name?: string;
}

export interface StaffDimensionDataModify {
    /** @description 名称 */
    name?: string;
    /** @description 值 */
    value?: string;
}

export interface WorkdayShiftSetting {
    /** @description 星期 */
    dayOfWeek?: number;
    /**
     * Format: int64
     * @description 班次
     */
    shiftId?: number;
}

export interface ScopeDimensionFormLineModify {
    /** @description 维度类型 */
    type?: number;
    /**
     * @description 条件匹配选项（对应 ScopeConditionOperator 的 operator）
     * @enum {integer}
     */
    operator?: 1 | 2;
    /** @description 维度数据 */
    data?: StaffDimensionDataModify[];
}

export interface ShiftScheduleSetting {
    /** @description 是否允许员工调班 */
    changeShiftEnabled?: boolean;
    /** @description 是否允许员工自己选择班次打卡 */
    shiftChooseEnabled?: boolean;
    /** @description 是否允许自动对班 */
    autoAlignShiftEnabled?: boolean;
    /** @description 是否允许自定义排班 */
    customScheduleEnabled?: boolean;
}

export interface DayOffClockSetting {
    version?: number;
    /** @description 打卡交替方式（1：覆盖模式；2：交替模式） */
    alternateMode?: number;
    /** @description 最小打卡间隔分钟数（0表示不限） */
    minClockIntervalMinutes?: number;
}

export interface SpecialClockDateSetting {
    /** @description 方式 （1：单个日期；2：时间段） */
    mode?: number;
    /** @description 日期 */
    date?: string;
    /** @description 重复方式（0：不重复；1：每两周重复；2：每月重复；3：每年重复） */
    repetitiveMode?: number;
    /** @description 截止日期 */
    expirationDate?: string;
    /** @description 开始日期 */
    beginDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 班次id（为空表示跟随考勤组） */
    shiftIds?: number[];
    /** @description 备注 */
    remark?: string;
}

export interface ClockWaySetting {
    /** @description 版本号（固定为 1） */
    version?: number;
    /** @description 是否允许wifi打卡 */
    wifiEnabled?: boolean;
    /** @description 允许的wifi列表 */
    wifiConfigNos?: number[];
    /** @description 是否公司内wifi都可打卡 */
    wifiAll?: boolean;
    /** @description 是否允许位置打卡 */
    positionEnabled?: boolean;
    /** @description 允许打卡的位置 */
    positionConfigNos?: number[];
    /** @description 是否公司内位置都可打卡 */
    positionAll?: boolean;
    /** @description 是否允许考勤机打卡 */
    attendanceDeviceEnabled?: boolean;
    /** @description 允许打卡的考勤机 */
    attDeviceNos?: number[];
    /** @description 是否公司内考勤机都可打卡 */
    deviceAll?: boolean;
}

export interface LeaveClockSetting {
    version?: number;
    /** @description 离岗/返岗是否需要打卡 */
    clockRequired?: boolean;
    /** @description 离岗允许提前分钟数 */
    leaveAdvancedMinutes?: number;
    /** @description 返岗允许延迟分钟数 */
    returnDelayMinutes?: number;
}

export interface OutworkClockSetting {
    version?: number;
    /** @description 是否允许外勤打卡 */
    clockEnabled?: boolean;
    /** @description 是否需要审批 */
    approvalRequired?: boolean;
    /** @description 是否需要备注 */
    remarkRequired?: boolean;
    /** @description 是否需要拍照 */
    takePhotoRequired?: boolean;
    /** @description 是否需要人脸识别 */
    faceRecognitionRequired?: boolean;
    /** @description 人脸识别是否需要真人验证 */
    realPersonVerifyRequired?: boolean;
}

export interface OvertimeRuleSetting {
    /** @description 工作日是否允许加班 */
    workdayEnabled?: boolean;
    /**
     * Format: int64
     * @description 工作日加班规则ID
     */
    workdayRuleId?: number;
    /** @description 休息日是否允许加班 */
    restDayEnabled?: boolean;
    /**
     * Format: int64
     * @description 休息日加班规则ID
     */
    restDayRuleId?: number;
    /** @description 节假日是否允许加班 */
    holidayEnabled?: boolean;
    /**
     * Format: int64
     * @description 节假日加班规则ID
     */
    holidayRuleId?: number;
}

export interface MonthCycleSetting {
    /** @description 月度考勤周期模式（1：自然月；2：跨月） */
    monthCycle?: number;
    /** @description 考勤月基准（1：以月度开始日期所在日期确定；2：以月度结束日期所在日期确定） */
    monthBase?: number;
    /** @description 考勤月开始日 */
    beginDayOfMonth?: number;
    /** @description 考勤月结束日 */
    endDayOfMonth?: number;
}

export interface VerificationRule {
    version?: number;
    /**
     * @description 是否需要拍照
     * @default false
     */
    takePhotoRequired: boolean;
    /**
     * @description 是否需要人脸验证
     * @default false
     */
    faceRecognitionRequired: boolean;
    /**
     * @description 是否需要真人验证
     * @default false
     */
    realPersonVerifyRequired: boolean;
}

export interface OutOfScopeClockSetting {
    version?: number;
    /**
     * @description 是否允许范围外打卡
     * @default false
     */
    outOfScopeEnabled: boolean;
    /** @description 范围外打卡记录状态 (0: 记录为地点异常； 1： 记录为正常外勤打卡) */
    clockStatus?: number;
}

export interface BngUserQuery {
    /** Format: int64 */
    userId?: number;
    /** Format: int64 */
    departmentNo?: number;
    /** Format: int64 */
    familyId?: number;
    userName?: string;
    loginType?: number;
    password?: string;
    nickName?: string;
    shortName?: string;
    roleList?: string;
    specialFlags?: string;
    mobile?: string;
    email?: string;
    realName?: string;
    reversiblePassword?: string;
    passwordModifyTime?: string;
    weixinOpenId?: string;
    adminFlag?: number;
    gender?: number;
    refer?: number;
    mobileValidFlag?: number;
    emailValidFlag?: number;
    headerImage?: string;
    province?: string;
    city?: string;
    warehouseList?: string;
    warehouseName?: string;
    enabled?: number;
    loginStatus?: number;
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    defaultCono?: number;
    creator?: string;
    created?: string;
    updater?: string;
    updated?: string;
    ts?: string;
    resetPassword?: number;
    lastLoginTime?: string;
    wxUnionId?: string;
    wppOpenId?: string;
    isSubscribe?: number;
}

export interface AttendanceGroupDetailVO {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 考勤组名称 */
    name?: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType?: number;
    /** @description 适用部门 */
    deptNos?: number[];
    /** @description 适用员工 */
    staffNos?: number[];
    /** @description 工作日设置 */
    workdaySetting?: WorkdayShiftSetting[];
    /** @description 适用班次 */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSetting;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSetting;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSetting[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSetting[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySetting;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSetting;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSetting;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSetting;
    /** @description 考勤月度周期设置 */
    monthCycleSetting?: MonthCycleSetting;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRule;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSetting;
}

export interface BngVersionPackageQuery {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    softId?: number;
    /** Format: int64 */
    versionId?: number;
    maxUsers?: number;
    storage?: string;
    validityDays?: number;
    smsQuota?: number;
    contractQuota?: number;
    createTime?: string;
    updateTime?: string;
    version?: string;
    softName?: string;
    domain?: string;
    /** @description 超管账号 */
    adminUser?: BngUserQuery[];
}

export interface ServiceResultAttendanceGroupDetailVO {
    code?: string;
    success?: boolean;
    data?: AttendanceGroupDetailVO;
    message?: string;
    tid?: string;
}

export interface OrderLogQuery {
    /** Format: int64 */
    id?: number;
    orderNo?: string;
    productName?: string;
    quantity?: string;
    unitPrice?: number;
    totalPrice?: number;
    operateTime?: string;
    remark?: string;
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    softId?: number;
    softName?: string;
    versionName?: string;
    /** Format: int64 */
    softVersion?: number;
}

export interface WorkdayShiftSettingEdit {
    /** @description 星期 */
    dayOfWeek?: number;
    /**
     * Format: int64
     * @description 班次
     */
    shiftId?: number;
}

export interface BngCompanySoftQuery {
    /**
     * Format: int64
     * @description bigint(20)
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description bigint(11)  软件/工具ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description bigint(11)  版本ID
     */
    versionId?: number;
    versionName?: string;
    /** @description bigint(11)  类型：0应用，1工具 */
    type?: number;
    /**
     * Format: int64
     * @description bigint(11)  公司编号,租户标记
     */
    coNo?: number;
    /** @description tinyint(22)  启用 */
    enabled?: number;
    /** @description tinyint(4)  试用标记 */
    trialFlag?: number;
    /** @description int(8)  试用天数 */
    trialDays?: number;
    /** @description tinyint(4)  试用结束限制 */
    trialVerOverLimit?: number;
    /** @description datetime  授权到期时间 */
    authorizedTime?: string;
    /** @description decimal(12, 2)  购买的软件金额 */
    softExpense?: number;
    /** @description varchar(25) */
    creator?: string;
    /** @description datetime */
    created?: string;
    /** @description varchar(25) */
    updater?: string;
    /** @description datetime */
    updated?: string;
    /** @description varchar(255)  地址 */
    url?: string;
    /** @description timestamp  时间戳 */
    ts?: string;
    /**
     * Format: int64
     * @description int(8)  余量
     */
    remaining?: number;
    /** @description 公司名称 */
    companyName?: string;
    contactTel?: string;
    contactEmail?: string;
    /** @description 软件名称 */
    name?: string;
    /**
     * Format: int64
     * @description 软件过期时间
     */
    expireDays?: number;
    /** @description 收费方式 [ACCOUNT=账号,SYSTEM=系统] */
    feeType?: string;
    /** @description 是否首购 0是 1否 */
    isFirstBuy?: number;
    /**
     * Format: int64
     * @description 策略ID
     */
    feeStrategyId?: number;
    /** @description 策略列表 */
    feeStrategyList?: Record<string, never>[];
    /** @description 单价 */
    salePrice?: number;
}

export interface ShiftScheduleSettingEdit {
    /** @description 是否允许员工调班 */
    changeShiftEnabled?: boolean;
    /** @description 是否允许员工自己选择班次打卡 */
    shiftChooseEnabled?: boolean;
    /** @description 是否允许自动对班 */
    autoAlignShiftEnabled?: boolean;
    /** @description 是否允许自定义排班 */
    customScheduleEnabled?: boolean;
}

export interface BngCompanyQuery {
    /** Format: int64 */
    autoNo?: number;
    uniCode?: string;
    name?: string;
    aliasName?: string;
    note?: string;
    enabled?: number;
    salesPerson?: string;
    registerRole?: string;
    trialFlag?: number;
    trialVerOverLimit?: number;
    contactUser?: string;
    contactTel?: string;
    telFlag?: number;
    contactEmail?: string;
    emailFlag?: number;
    /** @description 未开启  1：已开启 */
    isWatermark?: boolean;
    authorizeShopNum?: number;
    authorizeStoreNum?: number;
    authorizeWarehouseNum?: number;
    creator?: string;
    created?: string;
    updater?: string;
    updated?: string;
    ts?: string;
    province?: string;
    provinceNo?: string;
    city?: string;
    cityNo?: string;
    area?: string;
    areaNo?: string;
    address?: string;
    industry?: string;
    channelName?: string;
    /** Format: int64 */
    channelId?: number;
    taxIdNum?: string;
    approveStatus?: number;
    authorizedTime?: string;
    logo?: string;
    industryId?: number;
    copyTaskStatus?: number;
    scale?: string;
    registerPosition?: string;
    creditCode?: string;
    chooseScale?: number;
    code?: string;
    userName?: string;
    versionName?: string;
    password?: string;
    confirmPassword?: string;
    /**
     * Format: int64
     * @description 企业入驻的软件id 如果没有赋值就是 hr
     */
    registerSoftId?: number;
    bngVersionPackage?: BngVersionPackageQuery[];
    logs?: OrderLogQuery[];
    /** Format: int64 */
    versionId?: number;
    /** Format: int64 */
    softId?: number;
    /** @description 1 默认 0非默认 */
    defaultCo?: number;
}

export interface DayOffClockSettingEdit {
    version?: number;
    /** @description 打卡交替方式（1：覆盖模式；2：交替模式） */
    alternateMode?: number;
    /** @description 最小打卡间隔分钟数（0表示不限） */
    minClockIntervalMinutes?: number;
}

export interface LoginCacheQuery {
    errorTimes?: number;
    /** Format: int64 */
    userId?: number;
    token?: string;
    bngUser?: BngUserQuery;
    lastLoginTime?: string;
    companyList?: BngCompanyQuery[];
    currentBngCompany?: BngCompanyQuery;
    /** Format: int64 */
    currentSoftId?: number;
    /** Format: int64 */
    currentSoftVersionId?: number;
    /** Format: int64 */
    coNo?: number;
    /** @description 当前用户是否是当前企业对应软件的管理员 有且只有一个 */
    isAdmin?: number;
    /** @description 1 需要弹框选择企业 0 不需要 */
    showCompanyList?: number;
}

export interface SpecialClockDateSettingEdit {
    /** @description 方式 （1：单个日期；2：时间段） */
    mode?: number;
    /** @description 日期 */
    date?: string;
    /** @description 重复方式（0：不重复；1：每两周重复；2：每月重复；3：每年重复） */
    repetitiveMode?: number;
    /** @description 截止日期 */
    expirationDate?: string;
    /** @description 开始日期 */
    beginDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 班次id（为空表示跟随考勤组） */
    shiftIds?: number[];
    /** @description 备注 */
    remark?: string;
}

export interface ClockWaySettingEdit {
    version?: number;
    /** @description 是否允许wifi打卡 */
    wifiEnabled?: boolean;
    /** @description 允许的wifi列表 */
    wifiConfigNos?: number[];
    /** @description 是否允许位置打卡 */
    positionEnabled?: boolean;
    /** @description 允许打卡的位置 */
    positionConfigNos?: number[];
    /** @description 是否允许考勤机打卡 */
    attendanceDeviceEnabled?: boolean;
}

export interface LeaveClockSettingEdit {
    version?: number;
    /** @description 离岗/返岗是否需要打卡 */
    clockRequired?: boolean;
    /** @description 离岗允许提前分钟数 */
    leaveAdvancedMinutes?: number;
    /** @description 返岗允许延迟分钟数 */
    returnDelayMinutes?: number;
}

export interface OutworkClockSettingEdit {
    version?: number;
    /** @description 是否允许外勤打卡 */
    clockEnabled?: boolean;
    /** @description 是否需要审批 */
    approvalRequired?: boolean;
    /** @description 是否需要备注 */
    remarkRequired?: boolean;
    /** @description 是否需要拍照 */
    takePhotoRequired?: boolean;
    /** @description 是否需要人脸识别 */
    faceRecognitionRequired?: boolean;
    /** @description 人脸识别是否需要真人验证 */
    realPersonVerifyRequired?: boolean;
}

export interface OvertimeRuleSettingEdit {
    /** @description 工作日是否允许加班 */
    workdayEnabled?: boolean;
    /**
     * Format: int64
     * @description 工作日加班规则ID
     */
    workdayRuleId?: number;
    /** @description 休息日是否允许加班 */
    restDayEnabled?: boolean;
    /**
     * Format: int64
     * @description 休息日加班规则ID
     */
    restDayRuleId?: number;
    /** @description 节假日是否允许加班 */
    holidayEnabled?: boolean;
    /**
     * Format: int64
     * @description 节假日加班规则ID
     */
    holidayRuleId?: number;
}

export interface MonthCycleSettingEdit {
    /** @description 月度考勤周期模式（1：自然月；2：跨月） */
    monthCycle?: number;
    /** @description 考勤月基准（1：以月度开始日期所在日期确定；2：以月度结束日期所在日期确定） */
    monthBase?: number;
    /** @description 考勤月开始日 */
    beginDayOfMonth?: number;
    /** @description 考勤月结束日 */
    endDayOfMonth?: number;
}

export interface VerificationRuleEdit {
    version?: number;
    /**
     * @description 是否需要拍照
     * @default false
     */
    takePhotoRequired: boolean;
    /**
     * @description 是否需要人脸识别
     * @default false
     */
    faceRecognitionRequired: boolean;
    /**
     * @description 是否需要真人验证
     * @default false
     */
    realPersonVerifyRequired: boolean;
}

export interface OutOfScopeClockSettingEdit {
    version?: number;
    /**
     * @description 是否允许范围外打卡
     * @default false
     */
    outOfScopeEnabled: boolean;
    /** @description 范围外打卡记录状态 (0: 记录为地点异常； 1： 记录为正常外勤打卡) */
    clockStatus?: number;
}

export interface AttendanceGroupSaveROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /** @description 考勤组名称 */
    name: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType: number;
    /** @description 适用员工范围 */
    staffDimension: ScopeDimensionFormLineEdit[];
    /** @description 工作日设置 */
    workdaySetting?: WorkdayShiftSettingEdit[];
    /** @description 适用班次 */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSettingEdit;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSettingEdit;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSettingEdit[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSettingEdit[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySettingEdit;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSettingEdit;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSettingEdit;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSettingEdit;
    /** @description 考勤月度周期设置 */
    monthCycleSetting: MonthCycleSettingEdit;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRuleEdit;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSettingEdit;
}

export interface WorkdayShiftSettingModify {
    /** @description 星期 */
    dayOfWeek?: number;
    /**
     * Format: int64
     * @description 班次
     */
    shiftId?: number;
}

export interface ShiftScheduleSettingModify {
    /** @description 是否允许员工调班 */
    changeShiftEnabled?: boolean;
    /** @description 是否允许员工自己选择班次打卡 */
    shiftChooseEnabled?: boolean;
    /** @description 是否允许自动对班 */
    autoAlignShiftEnabled?: boolean;
    /** @description 是否允许自定义排班 */
    customScheduleEnabled?: boolean;
}

export interface DayOffClockSettingModify {
    version?: number;
    /** @description 打卡交替方式（1：覆盖模式；2：交替模式） */
    alternateMode?: number;
    /** @description 最小打卡间隔分钟数（0表示不限） */
    minClockIntervalMinutes?: number;
}

export interface SpecialClockDateSettingModify {
    /** @description 方式 （1：单个日期；2：时间段） */
    mode?: number;
    /** @description 日期 */
    date?: string;
    /** @description 重复方式（0：不重复；1：每两周重复；2：每月重复；3：每年重复） */
    repetitiveMode?: number;
    /** @description 截止日期 */
    expirationDate?: string;
    /** @description 开始日期 */
    beginDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /** @description 班次id（为空表示跟随考勤组） */
    shiftIds?: number[];
    /** @description 备注 */
    remark?: string;
}

export interface ClockWaySettingModify {
    /** @description 版本号（固定为 1） */
    version: number;
    /** @description 是否允许wifi打卡 */
    wifiEnabled: boolean;
    /** @description 允许的wifi列表 */
    wifiConfigNos?: number[];
    /** @description 是否公司内wifi都可打卡 */
    wifiAll?: boolean;
    /** @description 是否允许位置打卡 */
    positionEnabled: boolean;
    /** @description 允许打卡的位置 */
    positionConfigNos?: number[];
    /** @description 是否公司内位置都可打卡 */
    positionAll?: boolean;
    /** @description 是否允许考勤机打卡 */
    attendanceDeviceEnabled: boolean;
    /** @description 允许打卡的考勤机 */
    attDeviceNos?: number[];
    /** @description 是否公司内考勤机都可打卡 */
    deviceAll?: boolean;
}

export interface LeaveClockSettingModify {
    version?: number;
    /** @description 离岗/返岗是否需要打卡 */
    clockRequired?: boolean;
    /** @description 离岗允许提前分钟数 */
    leaveAdvancedMinutes?: number;
    /** @description 返岗允许延迟分钟数 */
    returnDelayMinutes?: number;
}

export interface OutworkClockSettingModify {
    version?: number;
    /** @description 是否允许外勤打卡 */
    clockEnabled?: boolean;
    /** @description 是否需要审批 */
    approvalRequired?: boolean;
    /** @description 是否需要备注 */
    remarkRequired?: boolean;
    /** @description 是否需要拍照 */
    takePhotoRequired?: boolean;
    /** @description 是否需要人脸识别 */
    faceRecognitionRequired?: boolean;
    /** @description 人脸识别是否需要真人验证 */
    realPersonVerifyRequired?: boolean;
}

export interface OvertimeRuleSettingModify {
    /** @description 工作日是否允许加班 */
    workdayEnabled?: boolean;
    /**
     * Format: int64
     * @description 工作日加班规则ID
     */
    workdayRuleId?: number;
    /** @description 休息日是否允许加班 */
    restDayEnabled?: boolean;
    /**
     * Format: int64
     * @description 休息日加班规则ID
     */
    restDayRuleId?: number;
    /** @description 节假日是否允许加班 */
    holidayEnabled?: boolean;
    /**
     * Format: int64
     * @description 节假日加班规则ID
     */
    holidayRuleId?: number;
}

export interface MonthCycleSettingModify {
    /** @description 月度考勤周期模式（1：自然月；2：跨月） */
    monthCycle?: number;
    /** @description 考勤月基准（1：以月度开始日期所在日期确定；2：以月度结束日期所在日期确定） */
    monthBase?: number;
    /** @description 考勤月开始日 */
    beginDayOfMonth?: number;
    /** @description 考勤月结束日 */
    endDayOfMonth?: number;
}

export interface VerificationRuleModify {
    version?: number;
    /**
     * @description 是否需要拍照
     * @default false
     */
    takePhotoRequired: boolean;
    /**
     * @description 是否需要人脸验证
     * @default false
     */
    faceRecognitionRequired: boolean;
    /**
     * @description 是否需要真人验证
     * @default false
     */
    realPersonVerifyRequired: boolean;
}

export interface OutOfScopeClockSettingModify {
    version?: number;
    /**
     * @description 是否允许范围外打卡
     * @default false
     */
    outOfScopeEnabled: boolean;
    /** @description 范围外打卡记录状态 (0: 记录为地点异常； 1： 记录为正常外勤打卡) */
    clockStatus?: number;
}

export interface AttendanceGroupSaveROModify {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id: number;
    currentUser?: LoginCacheModify;
    /** @description 考勤组名称 */
    name: string;
    /** @description 考勤组类型（0：免考勤；1：固定制；2：排班制；3：自由工时制） */
    groupType: number;
    /** @description 适用员工范围 */
    staffDimension: ScopeDimensionFormLineModify[];
    /** @description 工作日设置 */
    workdaySetting?: WorkdayShiftSettingModify[];
    /** @description 适用班次 */
    shiftNos?: number[];
    /** @description 排班制排班扩展设置 */
    shiftScheduleSetting?: ShiftScheduleSettingModify;
    /**
     * @description 法定节假日是否排休
     * @default false
     */
    restOnHolidays: boolean;
    /** @description 休息日打卡设置 */
    dayOffClockSetting?: DayOffClockSettingModify;
    /** @description 必须打卡的日期设置 */
    mustClockSettings?: SpecialClockDateSettingModify[];
    /** @description 无需打卡的日期设置 */
    undesiredClockSettings?: SpecialClockDateSettingModify[];
    /** @description 打卡方式设置 */
    clockWaySetting?: ClockWaySettingModify;
    /**
     * Format: int64
     * @description 补卡设置
     */
    reissueClockRuleId?: number;
    /** @description 请假打卡设置 */
    leaveClockSetting?: LeaveClockSettingModify;
    /** @description 外勤打卡设置 */
    outworkClockSetting?: OutworkClockSettingModify;
    /** @description 加班规则设置 */
    overtimeRuleSetting?: OvertimeRuleSettingModify;
    /** @description 考勤月度周期设置 */
    monthCycleSetting: MonthCycleSettingModify;
    /** @description 拍照/人脸识别设置 */
    verificationRule?: VerificationRuleModify;
    /** @description 范围外打卡设置 */
    outOfScopeClockSetting?: OutOfScopeClockSettingModify;
}

export interface StaffInfoVO {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 所属部门 */
    deptName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
}

export interface PageStaffInfoVO {
    records?: StaffInfoVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultPageStaffInfoVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageStaffInfoVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ServiceResultInteger {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: number;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface GroupMigrationROEdit {
    /** Format: int64 */
    id?: number;
    sourceGroupIds?: number[];
    /** Format: int64 */
    targetGroupId?: number;
}

export interface OptionalShift {
    /** @description 班次日期 */
    date?: string;
    /** @description 考勤日类型 */
    dayType?: number;
    /**
     * Format: int64
     * @description 班次ID
     */
    shiftId?: number;
    /** @description 班次名称 */
    shiftName?: string;
    /** @description 班次颜色 */
    shiftColor?: string;
    /** @description 上班时间 */
    shiftBeginTime?: string;
    /** @description 下班时间 */
    shiftEndTime?: string;
    /** @description 是否可选 */
    optional?: boolean;
}

export interface ClockVO {
    /** @description 是否需要二次确认打卡 */
    isNeedConfirm?: boolean;
    /** @description 可选班次 */
    optionalShifts?: OptionalShift[];
}

export interface ServiceResultClockVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: ClockVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface HrmStaffBaseInfoEdit {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 证件类型（0 身份证/1 港澳通行证...） */
    identityType?: number;
    /** @description 身份证号 */
    identityCard?: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 在职状态(0:试用/1:在职/2:离职...) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    /** @description 创建时间（默认当前时间） */
    created?: string;
    /** @description 创建人 */
    creator?: string;
    /** @description 修改时间（更新时自动刷新） */
    updated?: string;
    /** @description 修改人 */
    updater?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /** @description 时间戳（冗余字段，兼容历史逻辑） */
    ts?: string;
    /** @description 照片 */
    personalPhoto?: string;
    planRegularDate?: string;
    currentCompany?: BngCompanyEdit;
    loginCache?: LoginCacheEdit;
}

export interface ClockROEdit {
    /** Format: int64 */
    coNo?: number;
    /** @description 当前登录员工 */
    currentStaff?: HrmStaffBaseInfoEdit;
    /** @description 纬度 */
    latitude?: number;
    /** @description 经度 */
    longitude?: number;
    /** @description 详细地址 */
    address?: string;
    /** @description 打卡设备 */
    device?: string;
    /** @description 考勤方式：1:WIFI打卡 2:GPS打卡 */
    clockWay: number;
    /** @description 人脸数据 */
    faceBase64Img?: string;
    /** @description 照片数据 */
    photoBase64Img?: string;
    /**
     * @description 是否强制打卡（系统无法自动匹配班次的情况下，员工可选择忽略异常强制打卡，系统会记录为异常打卡，后续可通过工作流程确认本次打卡）
     * @default false
     */
    isForceClock: boolean;
    /**
     * @description 是否指定班次打卡（一般发生在休息日，打卡时间处于上一工作日打卡范围内，系统无法确定是上一工作日的下班卡还是休息日加班打卡）
     * @default false
     */
    isSpecifyClock: boolean;
    /** @description 指定考勤日期（yyyy-MM-dd） */
    date?: string;
    /**
     * Format: int64
     * @description 指定考勤班次
     */
    shiftId?: number;
}

export interface ServiceResultVoid {
    code?: string;
    success?: boolean;
    data?: null;
    message?: string;
    tid?: string;
}

export interface AttendanceMachineClockROEdit {
    /**
     * Format: int64
     * @description 租户ID
     */
    coNo?: number;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 考勤机设备号 */
    sn?: string;
    /** @description 打卡时间 */
    clockTime?: string;
}

export interface PageShiftInfoVO {
    records?: ShiftInfoVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultPageShiftInfoVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: PageShiftInfoVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ShiftQueryROQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
    name?: string;
}

export interface BreakTimePeriodRO {
    /** @description 休息开始时间 */
    beginTime?: string;
    /** @description 休息结束时间 */
    endTime?: string;
}

export interface ShiftTimePeriodRO {
    /** @description 时段序号 */
    groupNo?: number;
    /** @description 上班是否需要打卡 */
    clockInRequired?: boolean;
    /** @description 下班是否需要打卡 */
    clockOutRequired?: boolean;
    /** @description 上班时间 */
    periodBeginTime?: string;
    /** @description 上班打卡开始时间 */
    clockInBeginTime?: string;
    /** @description 上班打卡结束时间 */
    clockInEndTime?: string;
    /** @description 下班时间 */
    periodEndTime?: string;
    /** @description 下班打卡开始时间 */
    clockOutBeginTime?: string;
    /** @description 下班打卡结束时间 */
    clockOutEndTime?: string;
    /** @description 休息时段 */
    breakTimePeriods?: BreakTimePeriodRO[];
}

export interface ShiftTimePeriodSeason {
    /** @description 令时（0：不区分令时；1：夏令时；2：冬令时） */
    season?: number;
    /** @description 令时对应时段配置 */
    timePeriods?: ShiftTimePeriodRO[];
}

export interface HalfDayWorkTimeSetting {
    /** @description 上午时段 */
    am?: TimePeriod;
    /** @description 下午时段 */
    pm?: TimePeriod;
}

export interface FlexibleTimeSetting {
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示下班可早走的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许早到早走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示下班晚走分钟数；</li>
     *     </ul>
     */
    advanceMinutes?: number;
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示上班可晚到的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许晚到晚走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示次日可晚到的分钟数；</li>
     *     </ul>
     */
    lateMinutes?: number;
}

export interface FlexibleClockSetting {
    /** @default 1 */
    version: number;
    /**
     * @description 弹性打卡模式（0：禁止；1：允许晚到早走；2：允许晚到晚走、早到早走；）
     * @default 0
     */
    flexibleMode: number;
    /** @description 弹性打卡模式 - 弹性时间设置 */
    flexibleTimeSetting?: FlexibleTimeSetting;
    /** @description 是否开启下班晚走，次日晚到 */
    leaveLateArriveLateEnabled?: boolean;
    /** @description 下班晚走次日晚到时间设置 */
    leaveLateArriveLateTimeSetting?: FlexibleTimeSetting[];
    /** @description 作用方式（1：作用于整个班次；2：作用于每个时段） */
    modeOfAction?: number;
}

export interface ShiftVO {
    /** Format: int64 */
    id?: number;
    /** @description 班次名称 */
    name?: string;
    /** @description 班次时段令时配置 */
    timePeriodSeasons?: ShiftTimePeriodSeason[];
    /** @description 班次工时（自由工时制不能为空） */
    workHours?: number;
    /** @description 班次工时对应出勤天数 */
    hoursToDay?: number;
    /** @description 迟到多少分钟算旷工 */
    absentLateMinutes?: number;
    /** @description 半天工作时间设置 */
    halfDayWorkTimeSetting?: HalfDayWorkTimeSetting;
    /** @description 班次颜色 */
    color?: string;
    /** @description 是否区分令时（0：不区分；1：区分） */
    isDivisiveSeason?: boolean;
    /** @description 夏令时月份 */
    summerMonth?: number[];
    /** @description 冬令时月份 */
    winterMonth?: number[];
    /** @description 弹性打卡设置 */
    flexibleClockSetting?: FlexibleClockSetting;
}

export interface ServiceResultShiftVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: ShiftVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface BreakTimePeriodROEdit {
    /** @description 休息开始时间 */
    beginTime: string;
    /** @description 休息结束时间 */
    endTime: string;
}

export interface ShiftTimePeriodROEdit {
    /** @description 时段序号 */
    groupNo?: number;
    /** @description 上班是否需要打卡 */
    clockInRequired: boolean;
    /** @description 上班是否需要打卡 */
    clockOutRequired: boolean;
    /** @description 上班时间 */
    periodBeginTime: string;
    /** @description 上班打卡开始时间 */
    clockInBeginTime?: string;
    /** @description 上班打卡结束时间 */
    clockInEndTime?: string;
    /** @description 下班时间 */
    periodEndTime: string;
    /** @description 下班打卡开始时间 */
    clockOutBeginTime?: string;
    /** @description 下班打卡结束时间 */
    clockOutEndTime?: string;
    /** @description 休息时段 */
    breakTimePeriods?: BreakTimePeriodROEdit[];
}

export interface ShiftTimePeriodSeasonEdit {
    /** @description 令时（1：夏令时；2：冬令时，不区分令时时可为空） */
    season?: number;
    /** @description 令时对应时段配置 */
    timePeriods?: ShiftTimePeriodROEdit[];
}

export interface HalfDayWorkTimeSettingEdit {
    /** @description 上午时段 */
    am?: TimePeriodEdit;
    /** @description 下午时段 */
    pm?: TimePeriodEdit;
}

export interface FlexibleTimeSettingEdit {
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示下班可早走的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许早到早走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示下班晚走分钟数；</li>
     *     </ul>
     */
    advanceMinutes?: number;
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示上班可晚到的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许晚到晚走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示次日可晚到的分钟数；</li>
     *     </ul>
     */
    lateMinutes?: number;
}

export interface FlexibleClockSettingEdit {
    /** @default 1 */
    version: number;
    /**
     * @description 弹性打卡模式（0：禁止；1：允许晚到早走；2：允许晚到晚走、早到早走；）
     * @default 0
     */
    flexibleMode: number;
    /** @description 弹性打卡模式 - 弹性时间设置 */
    flexibleTimeSetting?: FlexibleTimeSettingEdit;
    /** @description 是否开启下班晚走，次日晚到 */
    leaveLateArriveLateEnabled?: boolean;
    /** @description 下班晚走次日晚到时间设置 */
    leaveLateArriveLateTimeSetting?: FlexibleTimeSettingEdit[];
    /** @description 作用方式（1：作用于整个班次；2：作用于每个时段） */
    modeOfAction?: number;
}

export interface ShiftSaveROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /** @description 班次名称 */
    name: string;
    /** @description 班次时段令时配置 */
    timePeriodSeasons: ShiftTimePeriodSeasonEdit[];
    /** @description 班次工时（自由工时制不能为空） */
    workHours?: number;
    /** @description 班次工时对应出勤天数 */
    hoursToDay: number;
    /** @description 迟到多少分钟算旷工 */
    absentLateMinutes?: number;
    /** @description 半天工作时间设置 */
    halfDayWorkTimeSetting: HalfDayWorkTimeSettingEdit;
    /** @description 班次颜色 */
    color?: string;
    /** @description 是否区分令时（0：不区分；1：区分） */
    isDivisiveSeason: boolean;
    /** @description 夏令时月份 */
    summerMonth?: number[];
    /** @description 冬令时月份 */
    winterMonth?: number[];
    /** @description 弹性打卡设置 */
    flexibleClockSetting: FlexibleClockSettingEdit;
}

export interface BreakTimePeriodROModify {
    /** @description 休息开始时间 */
    beginTime: string;
    /** @description 休息结束时间 */
    endTime: string;
}

export interface ShiftTimePeriodROModify {
    /** @description 时段序号 */
    groupNo?: number;
    /** @description 上班是否需要打卡 */
    clockInRequired: boolean;
    /** @description 下班是否需要打卡 */
    clockOutRequired: boolean;
    /** @description 上班时间 */
    periodBeginTime: string;
    /** @description 上班打卡开始时间 */
    clockInBeginTime?: string;
    /** @description 上班打卡结束时间 */
    clockInEndTime?: string;
    /** @description 下班时间 */
    periodEndTime: string;
    /** @description 下班打卡开始时间 */
    clockOutBeginTime?: string;
    /** @description 下班打卡结束时间 */
    clockOutEndTime?: string;
    /** @description 休息时段 */
    breakTimePeriods?: BreakTimePeriodROModify[];
}

export interface ShiftTimePeriodSeasonModify {
    /** @description 令时（0：不区分令时；1：夏令时；2：冬令时） */
    season?: number;
    /** @description 令时对应时段配置 */
    timePeriods?: ShiftTimePeriodROModify[];
}

export interface HalfDayWorkTimeSettingModify {
    /** @description 上午时段 */
    am?: TimePeriodModify;
    /** @description 下午时段 */
    pm?: TimePeriodModify;
}

export interface FlexibleTimeSettingModify {
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示下班可早走的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许早到早走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示下班晚走分钟数；</li>
     *     </ul>
     */
    advanceMinutes?: number;
    /**
     * @description <ul>
     *         <li>允许晚到早走模式：表示上班可晚到的分钟数；</li>
     *         <li>允许早到早走晚到晚走模式：表示允许晚到晚走的分钟数；</li>
     *         <li>下班晚走次日可晚到模式：表示次日可晚到的分钟数；</li>
     *     </ul>
     */
    lateMinutes?: number;
}

export interface FlexibleClockSettingModify {
    /** @default 1 */
    version: number;
    /**
     * @description 弹性打卡模式（0：禁止；1：允许晚到早走；2：允许晚到晚走、早到早走；）
     * @default 0
     */
    flexibleMode: number;
    /** @description 弹性打卡模式 - 弹性时间设置 */
    flexibleTimeSetting?: FlexibleTimeSettingModify;
    /** @description 是否开启下班晚走，次日晚到 */
    leaveLateArriveLateEnabled?: boolean;
    /** @description 下班晚走次日晚到时间设置 */
    leaveLateArriveLateTimeSetting?: FlexibleTimeSettingModify[];
    /** @description 作用方式（1：作用于整个班次；2：作用于每个时段） */
    modeOfAction?: number;
}

export interface ShiftSaveROModify {
    /**
     * Format: int64
     * @description ID（更新时不能为空）
     */
    id: number;
    /** @description 班次名称 */
    name: string;
    /** @description 班次时段令时配置 */
    timePeriodSeasons: ShiftTimePeriodSeasonModify[];
    /** @description 班次工时（自由工时制不能为空） */
    workHours?: number;
    /** @description 班次工时对应出勤天数 */
    hoursToDay: number;
    /** @description 迟到多少分钟算旷工 */
    absentLateMinutes?: number;
    /** @description 半天工作时间设置 */
    halfDayWorkTimeSetting: HalfDayWorkTimeSettingModify;
    /** @description 班次颜色 */
    color?: string;
    /** @description 是否区分令时 */
    isDivisiveSeason: boolean;
    /** @description 夏令时月份 */
    summerMonth?: number[];
    /** @description 冬令时月份 */
    winterMonth?: number[];
    /** @description 弹性打卡设置 */
    flexibleClockSetting: FlexibleClockSettingModify;
}

export interface GroupBaseInfo {
    /** Format: int64 */
    id?: number;
    /** @description 考勤组名称 */
    name?: string;
    /** @description 考勤组类型 */
    groupType?: number;
}

export interface ServiceResultListGroupBaseInfo {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: GroupBaseInfo[];
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface ShiftSummaryInfoVO {
    /** Format: int64 */
    shiftId?: number;
    shiftName?: string;
    shiftColor?: string;
}

export interface ShiftCycleVO {
    /** Format: int64 */
    id?: number;
    name?: string;
    daysNum?: number;
    cycle?: ShiftSummaryInfoVO[];
}

export interface ServiceResultListShiftCycleVO {
    code?: string;
    success?: boolean;
    data?: ShiftCycleVO[];
    message?: string;
    tid?: string;
}

export interface ShiftCycleQueryROQuery {
    /** Format: int64 */
    coNo?: number;
    /**
     * Format: int64
     * @description 考勤组ID
     */
    groupId?: number;
}

export interface ServiceResultShiftCycleVO {
    code?: string;
    success?: boolean;
    data?: ShiftCycleVO;
    message?: string;
    tid?: string;
}

export interface ShiftCycleSaveROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /**
     * Format: int64
     * @description 所属考勤组
     */
    groupId: number;
    /** @description 周期名称 */
    name: string;
    /** @description 周期班次 */
    cycle: number[];
}

export interface ShiftCycleSaveROModify {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id: number;
    currentUser?: LoginCacheModify;
    /**
     * Format: int64
     * @description 所属考勤组
     */
    groupId?: number;
    /** @description 周期名称 */
    name?: string;
    /** @description 周期班次 */
    cycle?: number[];
}

export interface ScheduleCalendar {
    dayOfMonth?: number;
    dayOfWeek?: number;
    /** @description 日期 */
    date?: string;
    /**
     * @description 考勤日类型
     * @enum {integer}
     */
    dayType?: never;
    /** @description 是否排休 */
    isDayOff?: boolean;
    /** @description 排班班次 */
    scheduleShift?: ShiftBaseInfoVO;
    /** @description 调班信息 */
    changeShiftInfo?: StaffShiftScheduleInfo;
}

export interface StaffShiftScheduleVO {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 日历与排班信息 */
    scheduleCalendars?: ScheduleCalendar[];
}

export interface PageStaffShiftScheduleVO {
    records?: StaffShiftScheduleVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultPageStaffShiftScheduleVO {
    code?: string;
    success?: boolean;
    data?: PageStaffShiftScheduleVO;
    message?: string;
    tid?: string;
}

export interface StaffScheduleCalendarQueryROQuery {
    /** Format: int64 */
    coNo?: number;
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 排序字段 */
    sorter?: string;
    /** @description 排序信息 */
    orderBy?: string;
    /** @description 查询方式（1：按时间区段；2：按考勤月） */
    queryType?: number;
    /** @description 年 */
    year?: number;
    /** @description 月 */
    month?: number;
    /** @description 开始日期 */
    beginDate?: string;
    /** @description 结束日期 */
    endDate?: string;
    /**
     * Format: int64
     * @description 部门ID
     */
    deptNo?: number;
    /** @description 员工ID列表 */
    staffNos?: number[];
}

export interface BasePageQueryROQuery {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
    /** @description 排序规则 */
    order?: OrderConditionQuery[];
}

export interface ShiftScheduleFailedMessage {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo?: number;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 日期 */
    date?: string;
    /** @description 错误信息 */
    errorMsg?: string;
}

export interface ShiftScheduleResultVO {
    /** @description 校验失败 list */
    failedList?: ShiftScheduleFailedMessage[];
    /** @description 员工排班数据 */
    staffSchedules?: StaffShiftScheduleVO[];
}

export interface ServiceResultShiftScheduleResultVO {
    code?: string;
    success?: boolean;
    data?: ShiftScheduleResultVO;
    message?: string;
    tid?: string;
}

export interface StaffScheduleDataEdit {
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo: number;
    /** @description 日历与排班信息 */
    dateList: string[];
}

export interface ManualScheduleROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    scheduleData: StaffScheduleDataEdit[];
    /** Format: int64 */
    shiftId: number;
}

export interface CycleShiftScheduleROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo: number;
    /**
     * Format: int64
     * @description 考勤年度
     */
    year: number;
    /** @description 考勤月度 */
    month: number;
    /** @description 起始排班日期 */
    beginDate: string;
    /**
     * Format: int64
     * @description 排班周期ID
     */
    shiftCycleId: number;
}

export interface CopyShiftScheduleROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /** @description 考勤年度 */
    year: number;
    /** @description 月份 */
    month: number;
    /** @description 员工ID集合 */
    staffNos: number[];
}

export interface CustomScheduleROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo: number;
    /**
     * Format: int64
     * @description 排班班次
     */
    shiftId: number;
    /** @description 排班日期 */
    date: string;
    /** @description 排班时段 */
    periods: TimePeriodEdit[];
}

export interface ShiftScheduleCleanROEdit {
    /** Format: int64 */
    coNo?: number;
    /** Format: int64 */
    id?: number;
    currentUser?: LoginCacheEdit;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffNo: number;
    /** @description 日期 */
    date: string;
}

export interface AttendanceDay {
    /** @description 日期 */
    date?: string;
    /**
     * @description 考勤日类型
     * @enum {integer}
     */
    dayType?: never;
    /** @description 考勤日备注 */
    remark?: string;
}

export interface MonthCalendar {
    /** @description 考勤月份 */
    month?: number;
    /** @description 月度工作日天数 */
    workdaysNum?: number;
    /** @description 考勤月开始日期 */
    beginDate?: string;
    /** @description 考勤月结束日期 */
    endDate?: string;
    /** @description 考勤日列表 */
    days?: AttendanceDay[];
}

export interface GroupCalendarVO {
    /** @description 考勤年份 */
    year?: number;
    /** @description 考勤月日历列表 */
    monthCalendarList?: MonthCalendar[];
}

export interface ServiceResultGroupCalendarVO {
    /** @description 业务状态码 */
    code?: string;
    /** @description 业务成功标记 */
    success?: boolean;
    /** @description 主数据 */
    data?: GroupCalendarVO;
    /** @description 业务状态消息 */
    message?: string;
    /** @description trace id */
    tid?: string;
}

export interface GroupCalendarQueryROQuery {
    /**
     * Format: int64
     * @description 考勤组ID
     */
    groupId: number;
    /** @description 考勤年度 */
    year?: number;
}

export interface BaseQuerySimpleDTO {
    /**
     * @description 页码
     * @default 1
     */
    current: number;
    /**
     * @description 每页条数
     * @default 20
     */
    size: number;
    /** @description 搜索关键字 */
    search?: string;
}

export interface BngRole {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    versionId?: number;
    /** @description 角色名称 */
    name?: string;
    /** @description 标题 */
    title?: string;
    /** @description 角色类型：1:公司；2:店铺 */
    type?: number;
    /** @description 解密的敏感字段ID集合,逗号分隔,20191129加 */
    decryptFieldIds?: string;
    /** @description 数据范围编号 */
    dataRangeNo?: number;
    /** @description 数据范围名称 */
    dataRangeName?: string;
    /** @description 自定义数据范围-部门id集合,逗号分隔 */
    customDeptIds?: string;
    /** @description 自定义数据范围-用户id集合,逗号分隔 */
    customUserIds?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 启用禁用: 0=禁用,1=启用 */
    enabled?: number;
    /** @description 标记: 1=租户默认角色只能有一个,0=普通角色 */
    defaultFlag?: number;
    /** @description 固定角色: 0=No,1=Yes */
    fixedFlag?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
}

export interface ServiceResultHrmStaffBaseInfo {
    code?: string;
    success?: boolean;
    data?: HrmStaffBaseInfo;
    message?: string;
    tid?: string;
}

export interface BngPower {
    autoNo?: number;
    menuNo?: number;
    name?: string;
    groupName?: string;
    title?: string;
    routeUrl?: string;
    jsMethod?: string;
    icon?: string;
    btnType?: string;
    showInBar?: number;
    remark?: string;
    enabled?: number;
    canShare?: number;
    betaCoNos?: string;
    sortIndex?: number;
    softId?: number;
    /** Format: int64 */
    coNo?: number;
    creator?: string;
    created?: string;
    updater?: string;
    updated?: string;
    ts?: string;
    isChecked?: number;
}

export interface BngMenu {
    autoNo?: number;
    parentNo?: number;
    code?: string;
    name?: string;
    icon?: string;
    url?: string;
    remark?: string;
    sortIndex?: number;
    viewJsObj?: string;
    device?: number;
    forwardPath?: string;
    backwordPath?: string;
    apiRoute?: string;
    showInMenu?: number;
    colFlag?: number;
    enabled?: number;
    /** Format: int64 */
    coNo?: number;
    creator?: string;
    created?: string;
    updater?: string;
    updated?: string;
    ts?: string;
    canShare?: number;
    specialProps?: string;
    betaCoNos?: string;
    softId?: number;
    childNoList?: string;
    groupName?: string;
    groupId?: number;
    groupSort?: number;
    /** @description 描述 */
    descs?: string;
    /** @description 0:不是默认1:默认 */
    isDefault?: number;
    /** @description 0:不是 1:是 */
    isApp?: number;
    isChecked?: number;
    children?: BngMenu[];
    powerList?: BngPower[];
    /** @description 应用名称 */
    appNames?: string[];
}

export interface UserRoleMenusDTO {
    bngRoles?: BngRole[];
    bngPowers?: BngPower[];
    bngMenus?: BngMenu[];
}

export interface RoleDateRangeVO {
    /** @description 唯一标识  STAFF+autoNo 或者 DEPT+autoNo */
    unionKey?: string;
    /** @description 部门或者员工 名字 */
    title?: string;
    /** @description 1部门 2 员工 */
    type?: number;
    pic?: string;
    /** Format: int64 */
    autoNo?: number;
}

export interface ServiceResultUserRoleMenusDTO {
    code?: string;
    success?: boolean;
    data?: UserRoleMenusDTO;
    message?: string;
    tid?: string;
}

export interface RoleDeptStaffVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    versionId?: number;
    /** @description 角色名称 */
    name?: string;
    /** @description 标题 */
    title?: string;
    /** @description 角色类型：1:公司；2:店铺 */
    type?: number;
    /** @description 解密的敏感字段ID集合,逗号分隔,20191129加 */
    decryptFieldIds?: string;
    /** @description 数据范围编号 */
    dataRangeNo?: number;
    /** @description 数据范围名称 */
    dataRangeName?: string;
    /** @description 自定义数据范围-部门id集合,逗号分隔 */
    customDeptIds?: string;
    /** @description 自定义数据范围-用户id集合,逗号分隔 */
    customUserIds?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 启用禁用: 0=禁用,1=启用 */
    enabled?: number;
    /** @description 标记: 1=租户默认角色只能有一个,0=普通角色 */
    defaultFlag?: number;
    /** @description 固定角色: 0=No,1=Yes */
    fixedFlag?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    dateRangeList?: RoleDateRangeVO[];
}

export interface ServiceResultListRoleDeptStaffVO {
    code?: string;
    success?: boolean;
    /** @description 错误码，0 表示成功，其他都是失败建议 弹窗提示message参数内容）建议当errorCode小于0时请弹出提示后，重新定位到登录界面 */
    errorCode?: number;
    message?: string;
    data?: RoleDeptStaffVO[];
}

export interface ExchangeCompanyDTO {
    /** @description 手机号 */
    mobile?: string;
    /** @description 更新人 */
    updateUser?: string;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
}

export interface RoleDeptStaff {
    /**
     * Format: int64
     * @description 角色ID
     */
    roleId?: number;
    /**
     * Format: int64
     * @description 部门ID
     */
    deptId?: number;
    /**
     * Format: int64
     * @description 企业ID
     */
    coNo?: number;
    /**
     * Format: int64
     * @description 员工ID
     */
    staffId?: number;
}

export interface BngRoleDTO {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    softId?: number;
    /**
     * Format: int64
     * @description 软件ID
     */
    versionId?: number;
    /** @description 角色名称 */
    name?: string;
    /** @description 标题 */
    title?: string;
    /** @description 角色类型：1:公司；2:店铺 */
    type?: number;
    /** @description 解密的敏感字段ID集合,逗号分隔,20191129加 */
    decryptFieldIds?: string;
    /** @description 数据范围编号 */
    dataRangeNo?: number;
    /** @description 数据范围名称 */
    dataRangeName?: string;
    /** @description 自定义数据范围-部门id集合,逗号分隔 */
    customDeptIds?: string;
    /** @description 自定义数据范围-用户id集合,逗号分隔 */
    customUserIds?: string;
    /** @description 备注 */
    remark?: string;
    /** @description 启用禁用: 0=禁用,1=启用 */
    enabled?: number;
    /** @description 标记: 1=租户默认角色只能有一个,0=普通角色 */
    defaultFlag?: number;
    /** @description 固定角色: 0=No,1=Yes */
    fixedFlag?: number;
    /**
     * Format: int64
     * @description 公司编号,租户标记
     */
    coNo?: number;
    /** @description 创建人 */
    creator?: string;
    /** @description 创建时间 */
    created?: string;
    /** @description 更新人 */
    updater?: string;
    /** @description 更新时间 */
    updated?: string;
    /** @description 时间戳 */
    ts?: string;
    /** @description 数据权限入参 */
    roleDeptStaffList?: RoleDeptStaffDTO[];
}

export interface RoleDeptStaffDTO {
    /**
     * Format: int64
     * @description 部门或员工ID
     */
    autoNo?: number;
    /** @description 部门1  员工2 */
    type?: number;
}

export interface OrgDeptTree {
    /** @description 唯一标识  dept+autoNo */
    unionKey?: string;
    childrenDept?: OrgDeptTree[];
    staffList?: OrgDeptStaff[];
    /**
     * Format: int64
     * @description 如果选择的是部门 则是部门的 主键 如果选择的员工 则是员工的主键
     */
    autoNo?: number;
    /** Format: int64 */
    pid?: number;
    /** @description 如果选择的是部门 则是部门的 名称 如果选择的员工 则是员工的姓名 */
    name?: string;
    /**
     * @description 1 部门 2 人员
     * @default 1
     */
    type: number;
    leader?: OrgDeptStaff;
    staffNums?: number;
    /** @description 部门所有成员 包括子部门的成员 */
    sumStaffNums?: number;
}

export interface RoleStaffVO {
    /**
     * Format: int64
     * @description ID
     */
    id?: number;
    /**
     * Format: int64
     * @description 联合主键字段：公司编号（关联 BngCompany.coNo）
     *     公司编号
     */
    coNo?: number;
    /**
     * @description 联合主键字段：手机号（公司内唯一）
     *     手机号
     */
    phoneNumber?: string;
    /** @description 员工姓名 */
    staffName?: string;
    /** @description 员工工号 */
    staffNumber?: string;
    /** @description 证件类型（0 身份证/1 港澳通行证...） */
    identityType?: number;
    /** @description 身份证号 */
    identityCard?: string;
    /** @description 性别(0:男;1:女) */
    gender?: number;
    /** @description 出生年月（日期格式：yyyy-MM-dd） */
    birthday?: string;
    /**
     * Format: int64
     * @description 所属部门ID
     */
    deptNo?: number;
    /** @description 所属部门名称 */
    deptName?: string;
    /**
     * Format: int64
     * @description 所属岗位ID
     */
    positionNo?: number;
    /** @description 所属岗位名称 */
    positionName?: string;
    /** @description 入职日期（日期格式：yyyy-MM-dd） */
    boardDate?: string;
    /** @description 在职状态(0:在职试用;1:在职;2:离职,3:转正中,4转正未通过,5试用到期,6:录用中) */
    staffStatus?: number;
    /**
     * Format: int64
     * @description 系统用户ID（关联 sys_user 表）
     */
    userId?: number;
    /** @description 创建时间（默认当前时间） */
    created?: string;
    /** @description 创建人 */
    creator?: string;
    /** @description 修改时间（更新时自动刷新） */
    updated?: string;
    /** @description 修改人 */
    updater?: string;
    /** @description 是否删除(0:未删/1:已删) */
    isDeleted?: number;
    /** @description 时间戳（冗余字段，兼容历史逻辑） */
    ts?: string;
    /** @description 照片 */
    personalPhoto?: string;
    planRegularDate?: string;
    /** @description tree唯一标识 */
    unionKey?: string;
    title?: string;
}

export interface OrgDeptTreeVO {
    deptTrees?: OrgDeptTree[];
}

export interface ServiceResultListRoleStaffVO {
    code?: string;
    success?: boolean;
    data?: RoleStaffVO[];
    message?: string;
    tid?: string;
}

export interface ServiceResultOrgDeptTreeVO {
    code?: string;
    success?: boolean;
    data?: OrgDeptTreeVO;
    message?: string;
    tid?: string;
}

export type OrgDeptTreeDTO = Record<string, never>;

export interface OrgEnterpriseCostCenterVO {
    /**
     * Format: int64
     * @description 主键ID
     */
    autoNo?: number;
    /** @description 成本中心名称 */
    costCenterName?: string;
    /**
     * @description 适用于人员ID集合
     *     适用于人员ID集合
     *     存储人员ID的文本集合
     */
    staffNos?: string;
    /** @description 备注 */
    remark?: string;
    /**
     * @description 是否已删除：0=未删除，1=已删除
     *     是否已删除
     *     0=未删除，1=已删除
     */
    isDeleted?: number;
    /**
     * @description 启用否: 0=已禁用,1=启用中
     *     启用状态
     *     0=已禁用,1=启用中
     */
    enabled?: number;
    /**
     * Format: int64
     * @description 公司编号
     */
    coNo?: number;
    /** @description 创建时间 */
    created?: string;
    /** @description 创建人员 */
    creator?: string;
    /** @description 修改时间 */
    updated?: string;
    /** @description 修改人员 */
    updater?: string;
    /** @description 员工数 */
    staffNums?: number;
    staffBaseInfoList?: SimpleStaffInfoVO[];
}

export interface PageOrgEnterpriseCostCenterVO {
    records?: OrgEnterpriseCostCenterVO[];
    /** Format: int64 */
    total?: number;
    /** Format: int64 */
    size?: number;
    /** Format: int64 */
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /** Format: int64 */
    maxLimit?: number;
    countId?: string;
}

export interface ServiceResultPageOrgEnterpriseCostCenterVO {
    code?: string;
    success?: boolean;
    data?: PageOrgEnterpriseCostCenterVO;
    message?: string;
    tid?: string;
}

