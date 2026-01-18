export interface components {
    schemas: {
        : {
            allPermissionFlag?: boolean;
            userIdList?: number[];
            deptIdList?: number[];
        };
        : {
            code?: string;
            success?: boolean;
            data?: null;
            message?: string;
            tid?: string;
        };
        StaffBaseInfo: {
            staffNo?: number;
            staffNumber?: string;
            staffName?: string;
            deptName?: string;
            positionName?: string;
            groupId?: number;
            groupName?: string;
            groupType?: never;
        };
        ServiceResult: {
            code?: string;
            success?: boolean;
            data?: Record<string, never>;
            message?: string;
            tid?: string;
        };
        OrgDept: {
            autoNo?: number;
            name?: string;
            code?: string;
            sortOrder?: number;
            parentDeptId?: number;
            orgId?: number;
            deptType?: number;
            responsibleId?: number;
            costId?: number;
            enterpriseSubjectId?: number;
            workplaceId?: number;
            isSchedual?: number;
            attendanceRuleId?: number;
            schedualResponsibleId?: number;
            schedualAuditId?: number;
            deptAuthorized?: number;
            isHr?: number;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            thirdPId?: string;
            thirdId?: string;
            third?: string;
            parentDeptName?: string;
        };
        OrgDeptStaff: {
            unionKey?: string;
            autoNo?: number;
            pid?: number;
            userId?: number;
            name?: string;
            pic?: string;
            userSex?: number;
            trial?: number;
            deptName?: string;
            positionName?: string;
            type: number;
        };
        SimpleStaffInfoVO: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            staffStatus?: number;
            userId?: number;
        };
        OrgDeptTreeDeptStaffVO: {
            id?: string;
            childrenDept?: components[][][];
            autoNo?: number;
            name?: string;
            code?: string;
            parentDeptId?: number;
            responsibleId?: number;
            responsibleName?: string;
            responsiblePic?: string;
            postName?: string;
            staffNums?: number;
            sumStaffNums?: number;
            deptAuthorized?: number;
            isHr?: number;
            coNo?: number;
            costId?: number;
            costName?: string;
            enterpriseSubjectId?: number;
            subjectName?: string;
            workplaceId?: number;
            workplaceName?: string;
            workplaceAddress?: string;
            orgId?: number;
            orgName?: string;
        };
        OrgDeptsLess: {
            unionKey?: string;
            childrenDept?: components[][][];
            autoNo?: number;
            pid?: number;
            name?: string;
            type: number;
        };
        Area: {
            code?: string;
            name?: string;
            province?: string;
            city?: string;
            area?: string;
            town?: number;
        };
        SysPost: {
            postId?: number;
            deptId?: number;
            sequenceId?: number;
            tagIds?: string;
            postCode?: string;
            postName?: string;
            postSort?: number;
            status?: string;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
            postNums?: number;
            postYears?: number;
            postResp?: string;
            postEdu?: string;
            postIndustry?: string;
            postLang?: string;
            postOther?: string;
            postFee?: string;
            levelId?: number;
            postLevelName?: string;
            sequenceName?: string;
            postTagsName?: string;
            deptName?: string;
            isFull: number;
            staffCount?: number;
        };
        CompanyThirdPartyConfig: {
            id?: number;
            coNo?: number;
            thirdPartyType?: number;
            appKey?: string;
            appSecret?: string;
            status?: number;
            createTime?: string;
            updateTime?: string;
        };
        SysLoginDevice: {
            id?: number;
            coNo?: number;
            staffId?: number;
            deviceName?: string;
            deviceType?: string;
            os?: string;
            loginIp?: string;
            sessionToken?: string;
            status?: number;
            loginTime?: string;
            tokenExpireTime?: string;
            logoutTime?: string;
            isCurrent?: number;
            createdTime?: string;
            updatedTime?: string;
        };
        DynamicMatchFieldMetaData: {
            fieldName?: string;
            displayName?: string;
            aliases?: string[];
            options?: string[];
            required?: boolean;
            matchedColumn?: components[][];
            score?: number;
            autoMatch?: boolean;
            displayValueConverter?: components[][];
            emptyValueSetHandler?: components[][];
        };
        FieldConfigVO: {
            groupName?: string;
            fields?: components[][][];
        };
        UploadResponse: {
            fileName?: string;
            url?: string;
        };
        ExcelTaskInfo: {
            taskId?: string;
            type?: string;
        };
        AppMenuGroupVo: {
            groupName?: string;
            groupId?: number;
            counts?: number;
        };
        FieldInfo: {
            fieldName?: string;
            fieldGroup?: string;
        };
        ContactVO: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            deptNo?: number;
            deptName?: string;
            deptFullName?: string;
            positionNo?: number;
            positionName?: string;
            staffStatus?: number;
            userId?: number;
            positionLevelName?: string;
            orgName?: string;
        };
        HrOperLog: {
            operId?: number;
            title?: string;
            businessType?: number;
            method?: string;
            requestMethod?: string;
            operatorType?: number;
            operName?: string;
            deptName?: string;
            operUrl?: string;
            operIp?: string;
            operLocation?: string;
            operParam?: string;
            jsonResult?: string;
            status?: number;
            errorMsg?: string;
            operTime?: string;
            costTime?: number;
            coNo?: number;
            keysType?: string;
            description?: string;
            ext1?: string;
            ext2?: string;
            ext3?: string;
        };
        FieldConfig: {
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            itemConfigs?: components[][][];
            options?: string[];
            namespace?: string;
        };
        AppraiseItem: {
            id?: number;
            coNo?: number;
            createUser?: number;
            itemName?: string;
            description?: string;
            groupId?: number;
            appraiseProperty?: string;
            methodId?: number;
            standardTypeId?: number;
            scoreExp?: string;
            resultRep?: string;
            isEnabled?: number;
            createTime?: string;
            updateTime?: string;
            ruleType?: number;
            ruleConfig?: string;
            createUserName?: string;
            createUserDept?: string;
        };
        AppraiseConfig: {
            id?: number;
            coNo?: number;
            showScore?: number;
            showGrade?: number;
            showCoefficient?: number;
            showPercentile?: number;
            cycleConfig?: string;
            ratingConfig?: string;
            scoreConfig?: string;
            kpiConfig?: string;
            createdAt?: string;
            showType?: number;
            okrLimit?: number;
            okrScore?: number;
            okrConfig?: string;
            orkConfigList?: components[][][];
            updatedAt?: string;
            cycleConfigList?: components[][][];
            ratingConfigList?: components[][][];
            scoreConfigList?: components[][][];
            kpiConfigList?: components[][][];
        };
        FieldDetail: {
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            order?: number;
            selectRequired?: boolean;
            selected?: boolean;
            exportEnabled?: boolean;
            options?: string[];
            namespace?: string;
        };
        CycleConfig: {
            name?: string;
            checked: boolean;
            from?: string;
            to?: string;
            type?: number;
        };
        CustomFieldConfigItem: {
            item?: string;
            enabled?: boolean;
        };
        FieldItemConfig: {
            item?: string;
            configurable?: boolean;
            enabled?: boolean;
        };
        ServiceResultList: {
            code?: string;
            success?: boolean;
            data?: Record<string, never>;
            message?: string;
            tid?: string;
        };
        ServiceResultListString: {
            code?: string;
            success?: boolean;
            data?: string[];
            message?: string;
            tid?: string;
        };
        FieldValue: {
            fieldName?: string;
            value?: string;
        };
        AppraiseTableVO: {
            id?: number;
            coNo?: number;
            type?: number;
            year?: number;
            month?: number;
            endMonth?: number;
            endYear?: number;
            expirDate?: string;
            examTime?: string;
            name?: string;
            staffNums?: number;
            createTime?: string;
            createUser?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
            userName?: string;
            deptName?: string;
            doneUsers?: number;
        };
        DocFile: {
            id?: number;
            parentId?: number;
            staffNo?: number;
            dirId?: number;
            type?: number;
            fileName?: string;
            fileSize?: number;
            fileType?: number;
            ossProvider?: string;
            url?: string;
            ossDeleted?: number;
            info?: string;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            powers?: string;
        };
        AppraiseStaffValue: {
            id?: number;
            targetId?: number;
            coNo?: number;
            staffId?: number;
            postId?: number;
            itemId?: number;
            month?: number;
            leaderId?: number;
            year?: number;
            target?: number;
            unit?: string;
            remark?: string;
            createTime?: string;
            completeValue?: number;
            completeUser?: number;
        };
        PositionVO: {
            positionName?: string;
            positionId?: number;
            postLevels?: components[][][];
            sequenceId?: number;
            sequenceName?: string;
        };
        StaffDashboardReportVO: {
            inService?: number;
            fullTimeCount?: number;
            internCount?: number;
            otherCount?: number;
            probationCount?: number;
            conversionCount?: number;
            resignation?: number;
            contractToBeSigned?: number;
            contractExpired?: number;
        };
        ReturnTString: {
            code?: number;
            msg?: string;
            content?: string;
        };
        : {
            code?: number;
            msg?: string;
            content?: null;
        };
        DocNoticeType: {
            id?: number;
            parentId?: number;
            level?: number;
            name?: string;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            waitReadCnt?: number;
            allCnt?: number;
        };
        AppraiseProjectStaffVO: {
            projectId?: number;
            staffId?: number;
            title?: string;
            status?: number;
        };
        WorkPlanVO: {
            id?: number;
            parentId?: number;
            classifyId?: number;
            classifyName?: number;
            title?: string;
            source?: string;
            progress?: number;
            startDate?: string;
            endDate?: string;
            priority?: number;
            status?: number;
            createBy?: number;
            updateBy?: number;
            createTime?: string;
            updateTime?: string;
            tenantId?: number;
        };
        DailyMonthlyReportAnnotationVO: {
            id?: string;
            reportId?: string;
            content?: string;
            createBy?: string;
            createName?: string;
            createDept?: string;
            createTime?: string;
        };
        TaskClassifyVO: {
            id?: string;
            parentId?: string;
            name?: string;
            description?: string;
            type?: number;
            createBy?: string;
            createTime?: string;
            children?: components[][][];
        };
        SmsCodeVO: {
            code?: string;
        };
        CompanySummaryVO: {
            id?: number;
            name?: string;
            aliasName?: string;
            creditCode?: string;
            isDefault?: boolean;
            isAdmin?: boolean;
            lastLoginTime?: string;
            softVersionId?: number;
            enabled?: boolean;
        };
        UserGroupTreeVO: {
            id?: string;
            parentId?: string;
            name?: string;
            num?: number;
            children?: components[][][];
        };
        DataPermissionVO: {
            id?: string;
            name?: string;
            userSelectionId?: string;
            viewedUserSelectionId?: string;
            type?: number[];
        };
        AppraiseGradeDistribution: {
            gradeCode?: string;
            staffCount?: number;
            percentage?: string;
            diff?: string;
        };
        AppraiseStaffProjectCycle: {
            id?: number;
            staffId?: number;
            coNo?: number;
            tableId?: number;
            projectId?: number;
            groupId?: number;
            type?: number;
            year?: number;
            name?: string;
            status?: number;
            createTime?: string;
        };
        SysPostLevelBindData: {
            positionId?: number;
            positionLevelId?: number;
            levelName?: string;
            defaultLevel?: boolean;
        };
        TitleNode: {
            id?: number;
            level?: number;
            content?: string;
            anchorId?: string;
        };
        UserGroupVO: {
            id?: string;
            selectionId?: string;
            name?: string;
            description?: string;
            defaultCreateFlag?: boolean;
        };
        DocumentInfoES: {
            id?: number;
            coNo?: number;
            documentName?: string;
            richText?: string;
            status?: number;
            catId?: number;
            highlightedName?: string;
            highlightedContent?: string;
            modifyTime?: string;
            catName?: string;
            staffNameIdPicVO?: components[][];
        };
        ClockWayVO: {
            id?: number;
            name?: string;
            clockWay?: number;
            province?: string;
            city?: string;
            district?: string;
            address?: string;
            scope?: number;
            enabled?: boolean;
            macAddress?: string;
            lat?: number;
            lng?: number;
            creator?: string;
            updater?: string;
            staffCount?: number;
        };
        ProjectListVO: {
            id?: string;
            directorId?: string;
            directorName?: string;
            directorPosition?: string;
            directorDeptName?: string;
            name?: string;
            desc?: string;
            status?: number;
            process?: number;
            startTime?: string;
            endTime?: string;
            finishTime?: string;
            createBy?: string;
            createByName?: string;
            createByPosition?: string;
            createByDeptName?: string;
            createTime?: string;
        };
        CompanyTargetValue: {
            id?: number;
            targetId?: number;
            coNo?: number;
            staffId?: number;
            postId?: number;
            month?: number;
            leaderId?: number;
            year?: number;
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
            unit?: string;
            remark?: string;
            createTime?: string;
            completeValue?: number;
            completeUser?: number;
            rule?: number;
            children?: components[][][];
            disassembledTotal?: number;
            staff?: components[][];
            diff?: number;
            old?: components[][];
            logList?: components[][][];
        };
        TeamEmployeeVO: {
            staffNo?: string;
            personName?: string;
            boardDate?: string;
            deptNo?: string;
            joinCompanyDays?: string;
            positionNo?: string;
            staffAttribute?: string;
            staffLeader?: string;
            staffStatus?: string;
            personalPhoto?: string;
        };
        MapString: {
            key?: string;
        };
        ShiftBaseInfoVO: {
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
            beginTime?: string;
            endTime?: string;
        };
        ServiceResultListOrgDeptTreeDeptStaffVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListHrmStaffBaseInfo: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        BngRoleDelDTO: {
            userId?: number;
            roleId?: number;
        };
        AddRoleUserDTO: {
            userId?: number;
            autoNo?: number;
        };
        ServiceResultListOrgDeptsLess: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListArea: {
            code?: string;
            success?: boolean;
            errorCode?: number;
            message?: string;
            data?: components[][][];
        };
        HrmStaffInfoDTO: {
            current: number;
            size: number;
            search?: string;
            deptNo?: number;
        };
        CompanySyncRecord: {
            id?: number;
            coNo?: number;
            configId?: number;
            syncType?: number;
            dataType?: number;
            syncStatus?: number;
            syncStartTime?: string;
            syncEndTime?: string;
            syncCount?: number;
            costTime?: number;
            errorMsg?: string;
            operator?: string;
            qrst?: string;
            rst?: string;
            syncStatusStr?: string;
        };
        BatchUpdateDeptDTO: {
            deptIds?: number[];
            enabled?: number;
        };
        QueryExportLogRequest: {
            type: string;
            taskId: string;
        };
        ServiceResultString: {
            code?: string;
            success?: boolean;
            data?: string;
            message?: string;
            tid?: string;
        };
        ServiceResultListFieldConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultUploadResponse: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultExcelTaskInfo: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListAppMenuGroupVo: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffOnOffDTO: {
            menuId?: number;
            type?: number;
        };
        DrawDeptDTO: {
            currentId?: number;
            targetId?: number;
            type?: number;
        };
        StaffFieldConfigVO: {
            groupIdentity?: string;
            configId?: number;
            fieldId?: number;
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            configItems?: components[][][];
            namespace?: string;
        };
        CompanyOnOffDTO: {
            appId?: number;
            type?: number;
        };
        ServiceResultListHrOperLog: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AppraiseConfigForcedRule: {
            id?: number;
            coNo?: number;
            leaderId?: number;
            groupName?: string;
            distribution?: string;
            roundingRule?: string;
            refId?: string;
            refIdSelected?: string;
            sortRule?: string;
            staffNums?: number;
            staffList?: components[][][];
            refIdDetail?: components[][];
            leader?: components[][];
            skiped?: number;
            versionId?: number;
            totalCount?: number;
            distributionDetailItemList?: components[][][];
        };
        StaffFieldVO: {
            groupName?: string;
            allowMultiple?: boolean;
            fields?: components[][][];
        };
        StaffRosterDataVO: {
            staffNo?: number;
            fields?: components[][];
        };
        AppraisePostVO: {
            unionKey?: string;
            autoNo?: number;
            isAssess?: number;
            deptName?: string;
            appraiseTableVOList?: components[][][];
            name?: string;
            staffCount?: number;
            staffList?: components[][][];
            type: number;
            used?: string;
        };
        FieldValueCreate: {
            fieldName: string;
            value?: string;
        };
        AppraisePostTableItem: {
            id?: number;
            itemName?: string;
            description?: string;
            groupId?: number;
            appraisePrope?: string;
            isEnabled?: number;
            createTime?: string;
            updateTime?: string;
            coNo?: number;
            createUser?: number;
            ruleType?: number;
            ruleConfig?: string;
            scoreType?: number;
            scoreRule?: number;
            formulaExpres?: string;
            fe?: string;
            tableId?: number;
            weight?: number;
        };
        AppriasePostTableItemVO: {
            id?: number;
            coNo?: number;
            createUser?: number;
            itemName?: string;
            description?: string;
            groupId?: number;
            appraiseProperty?: string;
            scoreType?: number;
            scoreRule?: number;
            formulaExpression?: string;
            fe?: string;
            unit?: string;
            isEnabled?: number;
            createTime?: string;
            updateTime?: string;
            ruleType?: number;
            ruleConfig?: string;
            isCommon?: number;
            weight?: number;
            groupItemId?: number;
            ratingConfig?: components[][];
            percentageRangeConfig?: components[][];
            targetBasedConfig?: components[][];
            completionCoefficientConfig?: components[][];
            addDeductConfig?: components[][];
            targetValue?: number;
            selfValue?: number;
            leaderValue?: number;
            complateValue?: number;
            selfComplateValue?: number;
            leaderComplateValue?: number;
            valueUnit?: string;
            selfScore?: number;
            cycleScore?: number;
            cycleScoreLevel?: string;
            leaderScore?: number;
            score?: number;
            scoreFe?: string;
            scoreLevel?: string;
            displayScore?: string;
            selfRemark?: string;
            cycleRemark?: string;
            leaderRemark?: string;
            selfSelect?: string;
            cycleSelect?: string;
            leaderSelect?: string;
            hrSelect?: string;
            selfScoreFe?: string;
            selfScoreRemark?: string;
            leaderScoreFe?: string;
            completeUser?: string;
            completeUserList?: components[][][];
        };
        AppraiseYearStaffTargetVO: {
            id?: number;
            coNo?: number;
            staffId?: number;
            postId?: number;
            itemId?: number;
            leaderId?: number;
            year?: number;
            remark?: string;
            createTime?: string;
            unit?: string;
            type?: number;
            targetId?: number;
            itemName?: string;
            staffName?: string;
            personalPhoto?: string;
            children?: components[][][];
            monthTargetList?: components[][][];
        };
        ServiceResultListPositionVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultStaffDashboardReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppriaseItemUpdateDTO: {
            id?: number;
            isCommon?: number;
        };
        TeamCalendarTaskCreateModifyDTOCreate: {
            id?: number;
            title: string;
            description?: string;
            isCrossDay: boolean;
            isDuplicate: boolean;
            startDate: string;
            endDate: string;
            type: number;
            noticeType: number;
            customNoticeUserIds?: number[];
        };
        TeamCalendarTaskCreateDTOCreate: {
            title: string;
            description?: string;
            isCrossDay: boolean;
            isDuplicate: boolean;
            startDate: string;
            endDate: string;
            type: number;
            noticeType: number;
            repeatFrequency?: number;
            isSyncToTaskPlan?: boolean;
            customNoticeUserIds?: number[];
            tempAttachmentUrls?: string[];
        };
        XxlJobInfo: {
            id?: number;
            jobGroup?: number;
            jobDesc?: string;
            addTime?: string;
            updateTime?: string;
            author?: string;
            alarmEmail?: string;
            scheduleType?: string;
            scheduleConf?: string;
            misfireStrategy?: string;
            executorRouteStrategy?: string;
            executorHandler?: string;
            executorParam?: string;
            executorBlockStrategy?: string;
            executorTimeout?: number;
            executorFailRetryCount?: number;
            glueType?: string;
            glueSource?: string;
            glueRemark?: string;
            glueUpdatetime?: string;
            childJobId?: string;
            triggerStatus?: number;
            triggerLastTime?: number;
            triggerNextTime?: number;
        };
        ServiceResultListDocNoticeType: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffSelectionMeta: {
            type?: number;
            operators?: number[];
            options?: components[][][];
        };
        StaffSelectionMetaItem: {
            type?: number;
            name?: string;
            operators?: number[];
            options?: components[][][];
            unit?: string;
        };
        ServiceResultListAppraiseProjectStaffVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        DailyMonthlyReportRecordsAttachmentDTO: {
            id?: string;
            attachmentName?: string;
            attachmentUrl?: string;
        };
        DailyMonthlyReportRecordsAttachmentVO: {
            attachmentName?: string;
            attachmentUrl?: string;
            createTime?: string;
        };
        ServiceResultListTaskClassifyVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultSmsCodeVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrLoginVO: {
            accessToken?: string;
            errorTimes?: number;
            passwordState?: number;
            coNo?: number;
            realName?: string;
            personalPhoto?: string;
            companyTenure?: number;
            companyList?: components[][][];
            currentCompany?: components[][];
        };
        ServiceResultListUserGroupTreeVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListDataPermissionVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        LoginNameCheckRO: {
            loginName: string;
        };
        CompanyRegisterCheckRO: {
            mobile?: string;
            companyName?: string;
            checkCompanyName?: boolean;
            checkCompanyCount?: boolean;
        };
        MobileQuickRegisterRO: {
            mobile: string;
            realName?: string;
        };
        ServiceResultListCompanySummaryVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AppraiseCycleTableVO: {
            id?: number;
            coNo?: number;
            type?: number;
            year?: number;
            month?: number;
            endMonth?: number;
            endYear?: number;
            expirDate?: string;
            examTime?: string;
            name?: string;
            staffNums?: number;
            createTime?: string;
            createUser?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
            cycleList?: components[][][];
            status?: number;
            groupMap?: components[][];
        };
        ServiceResultListHrCompanySummaryVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListTitleNode: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        RichTextParseVO: {
            titleNodes?: components[][][];
            anchoredRichText?: string;
        };
        ServiceResultMapInteger: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListUserGroupVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultCompanyTargetValue: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AvatarModifyRO: {
            id?: number;
            tmpUrl: string;
        };
        BaseQueryDTO: {
            coNo?: number;
            columns?: string;
            orderBy?: string;
            limit?: number;
            start?: number;
            page: number;
            rows: number;
            search?: string;
            sidx?: string;
            scidx?: string;
            sord?: string;
            sorter?: string;
            warehouseNo?: number;
            warehouseNos?: string;
            warehouseNoList?: number[];
            userId?: number;
            forceIndexMap?: components[][];
            updateUser?: string;
            extraType?: number;
            companyId?: number;
            ts?: string;
            creator?: string;
            updater?: string;
            created?: string;
            updated?: string;
            extraMap?: components[][];
        };
        StaffShiftScheduleInfo: {
            date?: string;
            isDayOff?: boolean;
            shiftInfo?: components[][];
            staffBaseInfo?: components[][];
        };
        TimePeriod: {
            beginTime: string;
            endTime: string;
        };
        PageOrgDept: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        OrgDeptTreeDeptStaffDTO: {
            enabled?: number;
            deptName?: string;
            responsibleName?: string;
            sortResponsibleId?: number;
        };
        UserRoleDTO: {
            roleId?: number;
            roleUsers?: components[][][];
        };
        PageSysPost: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultCompanySyncRecord: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PageCompanyThirdPartyConfig: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PageSysLoginDevice: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        FieldConfigQueryROQuery: {
            ownerType: string;
        };
        ServiceResultObject: {
            code?: string;
            success?: boolean;
            data?: Record<string, never>;
            message?: string;
            tid?: string;
        };
        StaffImportParam: {
            createDept?: boolean;
            override?: boolean;
        };
        StaffAppVo: {
            id?: number;
            appName?: string;
            descs?: string;
            appType?: string;
            isFee?: number;
            cssStyle?: string;
            menuIds?: string;
            pic?: string;
            isDefault?: number;
            menuList?: components[][][];
            groupList?: string[];
            isSelect?: number;
        };
        PageContactVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultListStaffFieldConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ExportField: {
            groupName?: string;
            fieldName: string;
            displayName: string;
            order: number;
        };
        PageAppraiseItem: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        AppraiseConfigScoreMapping: {
            id?: number;
            coNo?: number;
            scoreFrom?: number;
            optFrom?: string;
            scoreTo?: number;
            optTo?: string;
            displayGrade?: string;
            description?: string;
            coefficient?: number;
            sortOrder?: number;
        };
        ServiceResultListStaffFieldVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffFieldBusinessPointConfigVO: {
            groupName?: string;
            groupIdentity?: string;
            allowMultiple?: boolean;
            fields?: components[][][];
            fieldValues?: components[][][][];
        };
        AppraiseDeptVO: {
            unionKey?: string;
            autoNo?: number;
            pid?: number;
            name?: string;
            type: number;
            childrenDept?: components[][][];
            postList?: components[][][];
        };
        GroupFieldsCreate: {
            groupIdentity: string;
            fields?: components[][][][];
        };
        AppriasePostTableGroupVO: {
            dictCode?: number;
            dictTypeId?: number;
            dictSort?: number;
            dictLabel?: string;
            dictValue?: string;
            dictType?: string;
            cssClass?: string;
            listClass?: string;
            isDefault?: string;
            status?: string;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
            dictTypeName?: string;
            itemList?: components[][][];
            weight?: number;
            selfGroupScore?: number;
            selfGroupScoreFe?: string;
            leaderGroupScore?: number;
            leaderGroupScoreFe?: string;
            score?: number;
            scoreFe?: string;
            cycleScore?: number;
            cycleScoreLevel?: string;
            selfScoreLevel?: string;
            leaderScoreLevel?: string;
            scoreLevel?: string;
        };
        PageDocFile: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultListAppraiseYearStaffTargetVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        TeamCalendarTaskCreateModifyDTOModify: {
            id: number;
            title: string;
            description?: string;
            isCrossDay: boolean;
            isDuplicate: boolean;
            startDate: string;
            endDate: string;
            type: number;
            noticeType: number;
            customNoticeUserIds?: number[];
        };
        BaseBatchDeleteDTO: {
            ids: number[];
        };
        TeamCalendarTaskModifyDTOModify: {
            title: string;
            description?: string;
            isCrossDay: boolean;
            isDuplicate: boolean;
            startDate: string;
            endDate: string;
            type: number;
            noticeType: number;
            repeatFrequency?: number;
            isSyncToTaskPlan?: boolean;
            customNoticeUserIds?: number[];
            tempAttachmentUrls?: string[];
            id: number;
            oldAttachmentIds?: number[];
        };
        AppriaseStaffValueUpdateDTO: {
            id?: number;
            complateValue?: number;
        };
        ServiceResultListStaffSelectionMeta: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffSelectionMetaVO: {
            quickCondition?: components[][][];
            conditions?: components[][][];
        };
        PageWorkPlanVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        DailyMonthlyReportRecordsVO: {
            content?: string;
            longitude?: number;
            latitude?: number;
            address?: string;
            attachments?: components[][][];
            createTime?: string;
        };
        ServiceResultDocFilePresignedVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TaskClassifyDTO: {
            type?: number;
            name?: string;
        };
        MobileRO: {
            mobile: string;
        };
        LoginSuccessVO: {
            accessToken?: string;
            accessTokenExpireTime?: string;
            refreshToken?: string;
            refreshTokenExpireTime?: string;
            userId?: number;
            mobile?: string;
            realName?: string;
            errorTimes?: number;
            passwordState?: number;
        };
        RefreshTokenRO: {
            refreshToken: string;
        };
        ServiceResultHrLoginVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngMenuVO: {
            autoNo?: number;
            code?: string;
            name?: string;
            icon?: string;
            sortIndex?: number;
            parentNo?: number;
            url?: string;
            showInMenu?: number;
            groupName?: string;
            groupSort?: number;
            childNoList?: string;
        };
        UserGroupDTO: {
            name?: string;
        };
        DataPermissionRelationDetailVO: {
            organizeId?: string;
            userId?: string[];
        };
        ServiceResultListAppraiseCycleTableVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        GroupVO: {
            groupId?: number;
            groupName?: string;
            scoreLevel?: string;
            staff?: components[][];
            projectId?: number;
            tableId?: number;
        };
        RichTextDTO: {
            name?: string;
        };
        ServiceResultRichTextParseVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocumentInfo: {
            id?: number;
            coNo?: number;
            documentName?: string;
            author?: string;
            remark?: string;
            modifyTime?: string;
            richText?: string;
            chapterJson?: string;
            createTime?: string;
            status?: number;
            catId?: number;
            staffNameIdPicVO?: components[][];
            titleNodes?: components[][][];
            origin?: components[][];
            catName?: string;
            pre?: number;
            next?: number;
        };
        IPageDocumentInfoES: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
            pages?: number;
        };
        PageClockWayVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PageProjectListVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PayrollDetail: {
            id?: number;
            payrollId?: number;
            staffId?: number;
            coNo?: number;
            year?: number;
            month?: number;
            status?: number;
            sendDate?: string;
            baseSalary?: number;
            performanceSalary?: number;
            jobSalary?: number;
            overtimePay?: number;
            socialSecurityDeduct?: number;
            providentFundDeduct?: number;
            incomeTaxDeduct?: number;
            companySocialSecurityCost?: number;
            companyProvidentFundCost?: number;
            actualSalary?: number;
            deptId?: number;
            deptName?: string;
            msg?: string;
        };
        ExcelHeaderItem: {
            column?: number;
            title?: string;
            required?: boolean;
            width: number;
            show: boolean;
            data_type?: number;
            fixed?: boolean;
            type?: string;
        };
        TargetValueDTO: {
            id?: number;
            key?: string;
        };
        PageTeamEmployeeVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        BaseGetDTO: {
            id?: number;
        };
        ShiftAccountGeneralSituation: {
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
            beginTime?: string;
            endTime?: string;
            isRestDayOvertime?: boolean;
            scheduleStatus?: number;
            changeShiftInfo?: components[][];
            requiredAttHours?: number;
            actualAttHours?: number;
            earliestClockTime?: string;
            latestClockTime?: string;
        };
        TieredTime: {
            workMinutes?: number;
            deductMinutes?: number;
        };
        ServiceResultPageOrgDept: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffCustomMenuSort: {
            id?: number;
            cono?: string;
            staffId?: string;
            menuSortJson?: string;
            created?: string;
            updated?: string;
            remark?: string;
            menuDTOList?: components[][][];
        };
        PowerDTO: {
            powerId?: number;
            menuId?: number;
            key?: string;
            powerName?: string;
            pCode?: string;
            routeUrl?: string;
        };
        ServiceResultPageSysPost: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageCompanyThirdPartyConfig: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        : {
            records?: Record<string, never>[];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ExportBaseRequest: {
            type: string;
            param?: components[];
            exportFields?: string[];
        };
        ServiceResultPageSysLoginDevice: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        FieldMatchResponse: {
            fileName?: string;
            url?: string;
            identityCode?: string;
            dataFields?: components[][][];
            columns?: components[][][];
            excelRows?: components[][][];
        };
        QueryTaskRequest: {
            taskId: string;
            type?: string;
        };
        ExcelHandleRequestStaffImportParam: {
            type: string;
            taskParam?: components[][];
            excelFileUrl: string;
            fileName: string;
        };
        : Record<string, never>;
        ServiceResultListStaffAppVo: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageContactVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        MapInteger: {
            key?: number;
        };
        ServiceResultPageAppraiseItem: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseConfigVO: {
            cycleConfigList?: components[][][];
            showStyleDTO?: components[][];
            scoreMappingList?: components[][][];
            ratingConfigList?: components[][][];
            showType?: number;
            okrLimit?: number;
            okrScore?: number;
            orkConfigList?: components[][][];
            scoreConfigList?: components[][][];
            kpiConfigList?: components[][][];
        };
        ServiceResultListStaffFieldBusinessPointConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        PageStaffRosterDataVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultListAppraiseDeptVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AdminStaffCreateROCreate: {
            id?: number;
            groups: components[][][];
        };
        AppraisePostTableConfig: {
            id?: number;
            tableId?: number;
            coNo?: number;
            groupId?: number;
            groupName?: string;
            type?: number;
            leaderId?: string;
            selfAp?: number;
            leaderAp?: number;
            cycleAp?: number;
            selfWeight?: number;
            leaderWeight?: number;
            cycleWeight?: number;
            createTime?: string;
            cycleSub?: number;
            cycleCross?: number;
            subIds?: string;
            crossIds?: string;
            subList?: components[][][];
            crossList?: components[][][];
            leaderList?: components[][][];
        };
        ServiceResultPageDocFile: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppriaseYearStaffDTO: {
            itemId?: number;
            year?: number;
        };
        TeamCalendarDisplaySettingVO: {
            id?: number;
            noticeAdvanceDays?: number;
            isDisplayAll?: boolean;
            isHumanisticConcern?: boolean;
            createTime?: string;
            updateTime?: string;
        };
        TeamCalendarDisplaySettingCreateModifyDTOCreate: {
            noticeAdvanceDays: number;
            isDisplayAll: boolean;
            isHumanisticConcern: boolean;
        };
        FieldMatchResult: {
            fieldName: string;
            displayName: string;
            aliases?: string[];
            options?: string[];
            required: boolean;
            matchedColumn?: components[][];
            score?: number;
        };
        DocNoticeTypeEditDTO: {
            id?: number;
            name: string;
        };
        SelectionCondition: {
            type?:  |  |  |  |  |  |  |  | ;
            operator?:  |  |  |  | ;
            data?: components[][][];
        };
        ServiceResultStaffSelectionMetaVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageWorkPlanVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DailyMonthlyReportVO: {
            userId?: string;
            reports?: components[][][];
        };
        DailyMonthlyReportListVO: {
            userId?: string;
            reports?: components[][][];
        };
        DailyMonthlyReportDetailVO: {
            id?: string;
            type?: number;
            reportDate?: string;
            monthWeek?: string;
            yearWeek?: string;
            createTime?: string;
            annotations?: components[][][];
            records?: components[][][];
            workPlanIdList?: string[];
        };
        ServiceResultTaskClassifyVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        LoginResultVO: {
            accessToken?: string;
            errorTimes?: number;
            passwordState?: number;
        };
        ServiceResultLoginSuccessVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrCompanyRegisterRO: {
            companyName: string;
            mobile: string;
            smsCode: string;
        };
        UserGroupRelationVO: {
            organizeId?: string;
            userId?: string[];
        };
        DataPermissionRelationVO: {
            type?: number;
            userByDept?: components[][][];
            userByGroup?: components[][][];
            userIdList?: string[];
            viewedByDept?: components[][][];
            viewedByGroup?: components[][][];
            viewedUserIdList?: string[];
            viewedUserPermissionType?: number;
        };
        CompanyUserStatusStatisticsVO: {
            activated?: number;
            unactivated?: number;
        };
        ServiceResultListDocumentInfo: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        DocumentCatVO: {
            dictCode?: number;
            dictTypeId?: number;
            dictSort?: number;
            dictLabel?: string;
            dictValue?: string;
            dictType?: string;
            cssClass?: string;
            listClass?: string;
            isDefault?: string;
            status?: string;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
            dictTypeName?: string;
            documentInfoList?: components[][][];
        };
        ServiceResultIPageDocumentInfoES: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ClockROCreate: {
            staffNo?: number;
            latitude?: number;
            longitude?: number;
            address?: string;
            device?: string;
            clockWay: number;
            faceBase64Img?: string;
            photoBase64Img?: string;
            isForceClock: boolean;
            isSpecifyClock: boolean;
            date?: string;
            shiftId?: number;
        };
        ServiceResultPageClockWayVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageProjectListVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PayrollFileInitRst: {
            token?: string;
            payrollList?: components[][][];
        };
        PayrollExcelDynamicDataVO: {
            detail?: components[][][];
            headers?: components[][][];
            parseSuccess?: boolean;
            parseMsg?: string;
        };
        ServiceResultPageTeamEmployeeVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrmStaffExtInfo: {
            id?: number;
            baseStaffId?: number;
            enName?: string;
            nativePlace?: string;
            registeredFlag?: string;
            registeredAddress?: string;
            healthCertExpiry?: string;
            nation?: string;
            marriageStatus?: number;
            politicCountenance?: string;
            personalPhoto?: string;
            idPhoto?: string;
            probationSalary?: number;
            regularSalary?: number;
            probationTime?: number;
            planRegularDate?: string;
            probationDelayFlag?: number;
            highSchool?: string;
            firstEducation?: number;
            socialSeniority?: string;
            workingYears?: number;
            firstWorkingTime?: string;
            employAttribute?: number;
            inviteCompany?: string;
            archivesLink?: string;
            attachment?: string;
            salaryGradingStatus?: number;
            nickName?: string;
            userDesc?: string;
            isSetProbation?: number;
            isOpenAccount?: number;
            sysRoleNo?: number;
            qywechatId?: string;
            dingdingId?: string;
            feishuId?: string;
            recruitmentChannel?: number;
            idExpiryDate?: string;
            email?: string;
            wechatNumber?: string;
            addressInfo?: string;
            weixinOpenId?: string;
            weixinUnionId?: string;
            isSubscribe?: number;
            sortIndex?: number;
            adminFlag?: number;
            needFlow?: number;
            needFlowWithSalary?: number;
            needFlowWithFormal?: number;
            needNotice?: number;
            staffNumberMode?: number;
            marriage?: string;
            importBatchNo?: string;
            updated?: string;
            updater?: string;
            isDeleted?: number;
            ts?: string;
        };
        AttendanceAbnormalStatistics: {
            abnormalCount: number;
            lateCount: number;
            lateMinutes: number;
            earlyCount: number;
            earlyMinutes: number;
            absenceCount: number;
            absenceMinutes: number;
            missClockCount: number;
        };
        OvertimeCalculateRule: {
            isDeductBreakTime: boolean;
            deductType: number;
            breakTimePeriods?: components[][][];
            deductRules?: components[][][];
            beginOvertimeAfterWork: number;
            minOvertime: number;
            maxOvertime: number;
        };
        MenuDTO: {
            id?: number;
            name?: string;
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
            childNoList?: string;
            powerList?: string;
            pNo?: number;
            title?: string;
            pCode?: string;
            routeUrl?: string;
            powerMapList?: components[][][];
            roleNo?: number;
            descs?: string;
            children?: components[][][];
            groupName?: string;
            groupSort?: number;
        };
        PostQueryDTO: {
            current: number;
            size: number;
            search?: string;
            postName?: string;
            postLevel?: string;
            postTags?: string[];
            status?: string;
            sequenceIds?: number[];
        };
        PageSysDictData: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        DeptWithConflictOrgDept: {
            dept?: components[][];
            exists?: boolean;
            msg?: string;
        };
        : {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultFieldMatchResponse: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        : Record<string, never>;
        DeptExportRO: {
            exportFields?: components[][][];
            mergeByGroup?: boolean;
            isDynamic?: boolean;
            name?: string;
        };
        ServiceResultListAppraiseConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ScoringRuleConfig: Record<string, never>;
        RatingLevel: {
            id?: number;
            label?: string;
            value?: string;
            weight?: number;
            description?: string;
        };
        keyCreate: {
            item?: string;
            enabled?: boolean;
        };
        BusinessPointFieldsQueryROCreate: {
            point?: string;
        };
        ServiceResultPageStaffRosterDataVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AdminStaffGroupUpdateROCreate: {
            staffNo?: number;
            groupIdentity?: string;
            fields?: components[][][][];
        };
        AppraiseTableDetailVO: {
            id?: number;
            name?: string;
            type?: number;
            createUser?: number;
            createTime?: string;
            pubTime?: string;
            updateTime?: string;
            status?: number;
            maxScore?: number;
            maxDscore?: number;
            allowApply?: number;
            allowLeaderApply?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
            coNo?: number;
            postId?: number;
            leaderId?: string;
            createName?: string;
            personalPhoto?: string;
            detailList?: components[][][];
            kpiList?: components[][][];
            reviseList?: components[][][];
            configList?: components[][][];
        };
        DocFileDTO: {
            current: number;
            size: number;
            search?: string;
            vt: string;
            vids?: number[];
            type: number;
        };
        ServiceResultTeamCalendarDisplaySettingVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        FieldMatchInfo: {
            fieldName: string;
            displayName: string;
            aliases?: string[];
            options?: string[];
            required: boolean;
            matchedColumn: components[][];
        };
        StaffExportParam: {
            exportFields?: components[][][];
            mergeByGroup: boolean;
            isDynamic: boolean;
            staffNumber?: string;
            personName?: string;
            deptNo?: number;
            staffStatus?: number;
            staffAttribute?: number;
            excludeStaffAttribute?: number[];
            conversionStatus?: number;
            contractStatus?: number;
            order?: components[][][];
        };
        StaffSelectionDetailVO: {
            id?: number;
            conditions?: components[][][];
            all?: boolean;
            ownerDept?: boolean;
            ownerDeptWithChild?: boolean;
        };
        WorkPlanDTO: {
            current: number;
            size: number;
            search?: string;
            id?: string;
            startDate?: string;
            endDate?: string;
            subscribeUserIds?: string[];
            status?: number[];
            importantFlag?: boolean;
            showMyCreate?: boolean;
            myFollow?: boolean;
            showOKR?: boolean;
        };
        ServiceResultListDailyMonthlyReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultLoginResultVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        MobileSmsCodeRegisterRO: {
            mobile: string;
            smsCode: string;
        };
        UserGroupDetailVO: {
            id?: string;
            selectionId?: string;
            name?: string;
            description?: string;
            defaultCreateFlag?: boolean;
            defaultCreateType?: number;
            selectionDetailVO?: components[][];
        };
        DataPermissionDetailVO: {
            id?: string;
            name?: string;
            permissionRelation?: components[][][];
        };
        ServiceResultCompanyUserStatusStatisticsVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PositionLevelVO: {
            levelName?: string;
            levelId?: number;
            isDefault?: boolean;
        };
        ServiceResultListDocumentCatVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ProjectListDTO: {
            current: number;
            size: number;
            search?: string;
            startTime?: string;
            endTime?: string;
            myCreate?: boolean;
            status?: number;
        };
        Payroll: {
            id?: number;
            itemName?: string;
            sendType?: string;
            sendTime?: string;
            sendMonth?: number;
            sendYear?: number;
            coNo?: number;
            staffId?: number;
            operateTime?: string;
            deptIds?: string;
            status?: number;
            headerJson?: string;
            showJson?: string;
            statusStr?: string;
            deptList?: components[][][];
            detailList?: components[][][];
            detailDynamicList?: components[][][];
            payrollFileInitRst?: components[][];
            payrollExcelDynamicDataVO?: components[][];
        };
        HelpES: {
            id?: number;
            coNo?: number;
            documentName?: string;
            richText?: string;
            status?: number;
            catId?: number;
            highlightedName?: string;
            highlightedContent?: string;
            modifyTime?: string;
            catName?: string;
            staffNameIdPicVO?: components[][];
        };
        ServiceResultPayrollExcelDynamicDataVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BaseDeleteDTO: {
            id?: number;
        };
        AttendanceReport: {
            generalSituation?: components[][];
            abnormalStatistics?: components[][];
        };
        OvertimeAccountingRule: {
            accountingMethod: number;
            ratio?: number;
            effectiveMethod?: number;
            delayDays?: number;
            validDays: number;
        };
        ServiceResultListBngRole: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListBngCompany: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultSysPost: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageSysDictData: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultCompanyThirdPartyConfig: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ListExportLogRequest: {
            current?: number;
            size?: number;
            search?: string;
            order?: components[][][];
            type?: string[];
            beginTime?: string;
            endTime?: string;
        };
        ServiceResultSysLoginDevice: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ExportBaseRequestDeptExportRO: {
            type: string;
            param?: components[][];
        };
        CustomFieldCreateROCreate: {
            id?: number;
            currentUser?: components[][];
            ownerType: string;
            fieldGroup: string;
            displayName: string;
            fieldType: number;
            options?: string[];
        };
        BngUserCreate: {
            userId?: number;
            departmentNo?: number;
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
            coNo?: number;
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
        };
        ServiceResultAppraiseItem: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseGroupVO: {
            dictCode?: number;
            dictTypeId?: number;
            dictSort?: number;
            dictLabel?: string;
            dictValue?: string;
            dictType?: string;
            cssClass?: string;
            listClass?: string;
            isDefault?: string;
            status?: string;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
            dictTypeName?: string;
            itemList?: components[][][];
            counts?: number;
        };
        HrEditROModify: {
            id: number;
        };
        RatingConfig: {
            ratings?: components[][][];
            allowManualAdjustment: boolean;
            maxLevels: number;
            currentLevelCount?: number;
            type?: number;
        };
        MapListCustomFieldConfigItemCreate: {
            key?: components[][][];
        };
        OrderConditionQuery: {
            orderBy?: string;
            sorter?: string;
        };
        ServiceResultAppraiseTableDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListLong: {
            code?: string;
            success?: boolean;
            data?: number[];
            message?: string;
            tid?: string;
        };
        MapListAppraiseItemPostNumsVO: {
            key?: components[][][];
        };
        OrderCondition: {
            orderBy?: string;
            sorter?: string;
        };
        TaskItemVO: {
            id?: number;
            title?: string;
            isCrossDay?: boolean;
            isDuplicate?: boolean;
            startDate?: string;
            endDate?: string;
            type?: number;
            creatorId?: number;
            creator?: string;
            created?: string;
        };
        ExportBaseRequestStaffExportParam: {
            type: string;
            param?: components[][];
        };
        DocFilePresignedVO: {
            id?: number;
            name?: string;
            url?: string;
            fileSize?: number;
        };
        TeamCalendarTaskVO: {
            id?: number;
            coNo?: number;
            title?: string;
            description?: string;
            isCrossDay?: boolean;
            isDuplicate?: boolean;
            startDate?: string;
            endDate?: string;
            type?: number;
            noticeType?: number;
            created?: string;
            updated?: string;
            creatorId?: number;
            updaterId?: number;
            creator?: string;
        };
        TeamCalendarSettingCreateModifyDTOCreate: {
            type?: string;
            key?: string;
            value?: string;
            valueDatatype?: string;
        };
        TaskTypeDisplayItem: {
            taskType?: string;
            isDisplay?: boolean;
        };
        TaskKeyDisplayItem: {
            taskKey?: string;
            isDisplay?: boolean;
        };
        ServiceResultStaffSelectionDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanAnnotationVO: {
            id?: number;
            content?: string;
            createBy?: number;
            createName?: number;
            createDept?: number;
            createTime?: string;
        };
        DailyMonthlyReportDTO: {
            startDate?: string;
            endDate?: string;
            subscribeUserIds?: string[];
            type?: number;
        };
        ServiceResultListDailyMonthlyReportListVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        TaskClassifyCreateDTO: {
            parentId?: string;
            name?: string;
            description?: string;
            type?: number;
            relationUserIdList?: string[];
        };
        LoginRO: {
            username?: string;
            password?: string;
            mobile?: string;
            smsCode?: string;
            captcha?: string;
            rememberExpireAt?: number;
            vk?: string;
            wxUnionId?: string;
            scanLoginCode?: string;
            jsCode?: string;
            deviceId?: string;
            loginType?: number;
        };
        ServiceResultUserGroupDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultDataPermissionDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ForceGroup: {
            key?: string;
            display?: string;
            score?: number;
        };
        ValidateSmsCodeVO: {
            uuid?: string;
        };
        JSONArray: Record<string, never>;
        CompanyAccountVO: {
            userId?: number;
            nickName?: string;
            username?: string;
            email?: string;
            mobile?: string;
            roleName?: string;
            activated?: boolean;
            lastLoginTime?: string;
            staffName?: string;
            staffMobile?: string;
        };
        ServiceResultListPositionLevelVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultDocumentInfo: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ClockWayQueryROQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
            clockWay?: never;
        };
        ProjectDetailVO: {
            id?: string;
            type?: number;
            participantSelectionId?: string;
            directorId?: string;
            directorName?: string;
            directorPosition?: string;
            directorDeptName?: string;
            name?: string;
            desc?: string;
            status?: number;
            process?: number;
            startTime?: string;
            endTime?: string;
            finishTime?: string;
            sorted?: number;
            createBy?: string;
            createByName?: string;
            createByPosition?: string;
            createByDeptName?: string;
            createTime?: string;
            children?: components[][][];
            conditions?: components[][][];
            attachmentList?: components[][][];
            participantList?: components[][][];
        };
        ServiceResultPayrollFileInitRst: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrmStaffBaseInfo: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            gender?: number;
            avatar?: string;
            birthday?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            boardDate?: string;
            departureDate?: string;
            staffStatus?: number;
            positionLevel?: number;
            staffLeader?: number;
            sequence?: number;
            staffAttribute?: number;
            conversionDate?: string;
            staffEmail?: string;
            staffTelephone?: string;
            conversionStatus?: number;
            workCountry?: string;
            staffCompany?: number;
            staffLocation?: number;
            probationMonths?: number;
            userId?: number;
            isAdmin?: boolean;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            isDeleted?: number;
            thirdDeptId?: string;
            thirdId?: string;
            third?: string;
            currentCompany?: components[][];
            companyList?: components[][][];
            softVersionId?: number;
            orderNo?: number;
        };
        OvertimeStatisticsDetail: {
            status?: number;
            hours?: number;
            workdayVacationHours: number;
            workdaySalaryHours: number;
            restDayVacationHours: number;
            restDaySalaryHours: number;
            holidayVacationHours: number;
            holidaySalaryHours: number;
        };
        OvertimeDuration: {
            timeUnit?: number;
            roundingMode: never;
            scale: number;
            cardinal: number;
            dayConvert2Hours: number;
        };
        key: Record<string, never>;
        ServiceResultOrgDept: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ExportTaskInfo: {
            type?: string;
            taskId?: string;
        };
        DynamicExcelHandleRequestStaffImportParam: {
            type: string;
            taskParam?: components[][];
            excelFileUrl: string;
            fileName: string;
            identityCode: string;
            dataFields: components[][][];
        };
        FieldOption: {
            option?: string;
            enabled?: boolean;
        };
        BngVersionPackageCreate: {
            id?: number;
            coNo?: number;
            softId?: number;
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
            adminUser?: components[][][];
        };
        FileUrlQueryVO: {
            fileUrl?: string;
        };
        ServiceResultListAppraiseGroupVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultAppraiseConfig: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TargetBasedConfig: {
            increaseUnit?: number;
            unit?: string;
            increaseScore?: number;
            increaseScoreUpperLimit?: number;
            decimalHandleRule?: string;
            decreaseUnit?: number;
            unitD?: string;
            decreaseScore?: number;
            decreaseScoreLowerLimit?: number;
            decimalHandleRuleD?: string;
            weight: number;
        };
        StaffRosterQueryROQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
            staffNumber?: string;
            personName?: string;
            deptNo?: number;
            staffStatus?: number;
            staffAttribute?: number;
            excludeStaffAttribute?: number[];
            conversionStatus?: number;
            contractStatus?: number;
            fields?: string[];
        };
        AppriasePostTableDTO: {
            postId?: number;
            toPostId?: number;
            type: number;
        };
        ServiceResultMapListAppraiseItemPostNumsVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TeamCalendarTaskQueryItemVO: {
            startDate?: string;
            taskList?: components[][][];
        };
        DeptExportParam: {
            exportFields?: components[][][];
            mergeByGroup: boolean;
            isDynamic: boolean;
            name?: string;
        };
        DocFileUploadSummary: {
            id?: number;
            staffNo?: number;
            dirId?: number;
            fileType?: number;
            uploadDate?: string;
            fileCnt?: number;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            files?: components[][][];
            staffName?: string;
            photo?: string;
        };
        ServiceResultListTeamCalendarTaskVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        DocNoticeTypeCntVO: {
            id?: number;
            cnt?: number;
        };
        TeamCalendarSettingVO: {
            id?: number;
            type?: string;
            key?: string;
            value?: string;
            valueDatatype?: string;
            createTime?: string;
            updateTime?: string;
        };
        TeamCalendarSettingCreateModifyDTO: {
            noticeAdvanceDays: number;
            taskKeyDisplayItems: components[][][];
        };
        WorkPlanDetailVO: {
            recordId?: string;
            workPlanId?: string;
            parentId?: string;
            classifyId?: string;
            directorId?: string;
            directorName?: string;
            executorSelectionId?: string;
            executorCondition?: components[][][];
            executorTime?: string;
            title?: string;
            description?: string;
            source?: string;
            progress?: number;
            type?: number;
            executionTimeType?: number;
            startDate?: string;
            endDate?: string;
            finishDate?: string;
            executionTimeRepeatType?: number;
            executionTimeRepeatContent?: string;
            urgentFlag?: boolean;
            importantFlag?: boolean;
            reminderFlag?: boolean;
            clockEndDateFlag?: boolean;
            reminderType?: number;
            reminderContent?: string;
            yearPriority?: boolean;
            status?: number;
            taskType?: number;
            allShowFlag?: boolean;
            createBy?: string;
            updateBy?: string;
            createTime?: string;
            updateTime?: string;
            tenantId?: string;
            attachmentList?: components[][][];
            executorList?: components[][][];
            processRecordList?: components[][][];
        };
        ServiceResultDailyMonthlyReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TaskClassifyEditDTO: {
            id?: string;
            parentId?: string;
            name?: string;
            description?: string;
            type?: number;
            relationUserIdList?: string[];
        };
        ForceStaffProject: {
            uniKey?: string;
            staff?: components[][];
            autoNo?: number;
            staffId?: number;
            type: number;
            status?: number;
            display?: string;
            score?: number;
            groupList?: components[][][];
        };
        ServiceResultValidateSmsCodeVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultJSONArray: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        BaseDetailQueryROQuery: {
            id?: number;
        };
        ServiceResultListPayroll: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        IPageHelpES: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
            pages?: number;
        };
        LoginDTO: {
            username?: string;
            password?: string;
            userId?: number;
            coNo?: number;
            mobile?: string;
            captcha?: string;
            mi?: string;
            rememberExpireAt?: number;
            vk?: string;
            code?: string;
            loginType?: string;
            packageId?: number;
            token?: string;
            loginFrom?: string;
        };
        OvertimeStatistics: {
            overtimeHours?: number;
            details?: components[][][];
        };
        BngUser: {
            userId?: number;
            departmentNo?: number;
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
            coNo?: number;
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
        };
        OvertimeRuleVO: {
            id?: number;
            name?: string;
            overtimeType?: number;
            effectiveTimeRule?: number;
            calculationRule?: components[][];
            accountingRule?: components[][];
            durationRule?: components[][];
            beforeWorkEnabled?: boolean;
            breakTimeEnabled?: boolean;
            afterWorkEnabled?: boolean;
        };
        MapObject: {
            key?: components[][];
        };
        : {
            code?: string;
            success?: boolean;
            data?: null;
            message?: string;
            tid?: string;
        };
        SysDictData: {
            dictCode?: number;
            dictTypeId?: number;
            dictSort?: number;
            dictLabel?: string;
            dictValue?: string;
            dictType?: string;
            cssClass?: string;
            listClass?: string;
            isDefault?: string;
            status?: string;
            deleted?: boolean;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
            dictTypeName?: string;
        };
        ServiceResultExportTaskInfo: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TaskListRequest: {
            current?: number;
            size?: number;
            search?: string;
            order?: components[][][];
            type?: string[];
            beginTime?: string;
            endTime?: string;
        };
        CustomFieldVO: {
            id?: number;
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            options?: components[][][];
        };
        OrderLogCreate: {
            id?: number;
            orderNo?: string;
            productName?: string;
            quantity?: string;
            unitPrice?: number;
            totalPrice?: number;
            operateTime?: string;
            remark?: string;
            coNo?: number;
            softId?: number;
            softName?: string;
            versionName?: string;
            softVersion?: number;
        };
        ServiceResultFileUrlQueryVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        RangeItem: {
            from?: number;
            to?: number;
            optTo?: string;
            optFrom?: string;
            score?: number;
            description?: string;
        };
        AppraiseItemPostNumsVO: {
            id?: number;
            itemName?: string;
            unit?: string;
            groupName?: string;
            groupId?: number;
            isCommon?: number;
            postNums?: number;
            staffNums?: number;
        };
        ServiceResultListTeamCalendarTaskQueryItemVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ExportBaseRequestDeptExportParam: {
            type: string;
            param?: components[][];
        };
        PageDocFileUploadSummary: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        TeamCalendarTaskQueryListVO: {
            id?: string;
            coNo?: number;
            title?: string;
            description?: string;
            isCrossDay?: boolean;
            isDuplicate?: boolean;
            startDate?: string;
            endDate?: string;
            type?: number;
            noticeType?: number;
            repeatFrequency?: number;
            createTime?: string;
            updateTime?: string;
            creatorId?: number;
            updaterId?: number;
            isSystemCreate?: boolean;
            creator?: string;
            timeDescription?: string;
            firstTaskId?: number;
            taskProgressPercent?: string;
            taskDelayDays?: number;
        };
        ServiceResultListDocNoticeTypeCntVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListTeamCalendarSettingVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        TaskTypeDisplayItem4: {
            taskType?: string;
            label?: string;
            isDisplay?: boolean;
        };
        TaskKeyDisplayItem5: {
            taskKey?: string;
            label?: string;
            isDisplay?: boolean;
        };
        ServiceResultWorkPlanDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultDailyMonthlyReportDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ChangeCompanyRO: {
            coNo: number;
        };
        UserGroupRelationDTO: {
            organizeId?: string;
            userId?: string[];
        };
        DataPermissionRelationDTO: {
            organizeType?: number;
            organizeId?: string;
            userId?: string;
        };
        ForceDept: {
            uniKey?: string;
            finishCount?: number;
            needCount?: number;
            readyCount?: number;
            optStatus: number;
            ifResetStatus: number;
            autoNo?: number;
            name?: string;
            leader?: components[][];
            type: number;
            staffNums?: number;
            summary?: components[][][];
            children?: components[][][];
            staffProjectList?: components[][][];
        };
        PageCompanyAccountVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        SearchVO: {
            staffs?: components[][][];
            depts?: components[][][];
        };
        ClockWaySaveROCreate: {
            id?: number;
            name: string;
            clockWay: number;
            province?: string;
            city?: string;
            district?: string;
            address?: string;
            scope?: number;
            macAddress?: string;
            lat?: number;
            lng?: number;
        };
        ServiceResultIPageHelpES: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AttendanceFlowStatistics: {
            missClockCount?: number;
            makeClockCount?: number;
            outworkClockCount?: number;
            travelHours?: number;
            vacationHours?: number;
        };
        BngVersionPackage: {
            id?: number;
            coNo?: number;
            softId?: number;
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
            adminUser?: components[][][];
        };
        ServiceResultMapObject: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListSysDictData: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffExportRO: {
            exportFields?: components[][][];
            mergeByGroup?: boolean;
            isDynamic?: boolean;
            staffNumber?: string;
            staffName?: string;
            deptNo?: number;
        };
        ExcelColumnInfo: {
            columnIndex?: number;
            columnName?: string;
        };
        SyncPreviewResult: {
            deptsToSave?: components[][][];
            deptsToUpdate?: components[][][];
            conflictDepts?: components[][][];
            staffsToSave?: components[][][];
            conflictStaffs?: components[][][];
            message?: string;
        };
        DeptImportParam: {
            override?: boolean;
        };
        ServiceResultCustomFieldVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngCompanyCreate: {
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
            registerSoftId?: number;
            bngVersionPackage?: components[][][];
            logs?: components[][][];
            versionId?: number;
            softId?: number;
            defaultCo?: number;
        };
        MapFieldValueVO: {
            key?: components[][];
        };
        FileUrlQueryROQuery: {
            taskId: string;
        };
        PercentageRangeConfig: {
            ranges?: components[][][];
            weight: number;
        };
        ServiceResultListAppraiseItemPostNumsVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffDetailVO: {
            id?: number;
            fieldGroups?: components[][][];
        };
        DocFolderSaveDTO: {
            id?: number;
            name: string;
            parentId?: number;
            dirId: number;
        };
        TeamCalendarTaskQueryDTOQuery: {
            startDate: string;
            endDate: string;
            calendarTaskTypes?: number[];
        };
        ServiceResultPageDocFileUploadSummary: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListTeamCalendarTaskQueryListVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        DocNoticeFile: {
            id?: number;
            nid?: number;
            staffNo?: number;
            fileSaveDirId?: number;
            fileSaveId?: number;
            fileName?: string;
            fileSize?: number;
            fileType?: number;
            ossProvider?: string;
            url?: string;
            ossDeleted?: number;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
        };
        TeamCalendarSettingQueryVO: {
            noticeAdvanceDays?: number;
            taskKeyDisplayItems?: components[][][];
        };
        ServiceResultListSelectionCondition: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        NoticeDExportParam: {
            exportFields?: components[][][];
            mergeByGroup: boolean;
            isDynamic: boolean;
            nid?: number;
        };
        DailyMonthlyReportRecordsDTO: {
            id?: string;
            content?: string;
            longitude?: number;
            latitude?: number;
            address?: string;
            attachments?: components[][][];
        };
        BngRoleVO: {
            autoNo?: number;
            name?: string;
            title?: string;
            dataRangeNo?: number;
            dataRangeName?: string;
            customDeptIds?: string;
            customUserIds?: string;
            fixedFlag?: number;
        };
        UserGroupCreateDTO: {
            name?: string;
            description?: string;
            selectionId?: string;
        };
        DataPermissionCreateDTO: {
            userSelectionId?: string;
            viewedUserSelectionId?: string;
            typeList?: number[];
        };
        AppraiseForceRuleVO: {
            id?: number;
            coNo?: number;
            leaderId?: number;
            groupName?: string;
            distribution?: string;
            roundingRule?: string;
            refId?: string;
            refIdSelected?: string;
            sortRule?: string;
            staffNums?: number;
            staffList?: components[][][];
            refIdDetail?: components[][];
            leader?: components[][];
            skiped?: number;
            versionId?: number;
            distributionDetailItemList?: components[][][];
            historyId?: number;
            summary?: components[][][];
            finishCount?: number;
            needCount?: number;
            readyCount?: number;
            optStatus?: number;
            ifResetStatus?: number;
            deptList?: components[][][];
            scoreList?: components[][];
        };
        PasswordSetRO: {
            password: string;
        };
        ServiceResultPageCompanyAccountVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultSearchVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ClockWaySaveROModify: {
            id: number;
            name: string;
            clockWay: number;
            province?: string;
            city?: string;
            district?: string;
            address?: string;
            scope?: number;
            macAddress?: string;
            lat?: number;
            lng?: number;
        };
        DailyReportVO: {
            attendanceDate?: string;
            dayType?: number;
            staffInfo?: components[][];
            shiftReport?: components[][];
            overtimeStatistics?: components[][];
            flowStatistics?: components[][];
        };
        OrderLog: {
            id?: number;
            orderNo?: string;
            productName?: string;
            quantity?: string;
            unitPrice?: number;
            totalPrice?: number;
            operateTime?: string;
            remark?: string;
            coNo?: number;
            softId?: number;
            softName?: string;
            versionName?: string;
            softVersion?: number;
        };
        PageOvertimeRuleVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultSysDictData: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ExportBaseRequestStaffExportRO: {
            type: string;
            param?: components[][];
        };
        ServiceResultSyncPreviewResult: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DynamicExcelHandleRequestDeptImportParam: {
            type: string;
            taskParam?: components[][];
            excelFileUrl: string;
            fileName: string;
            identityCode: string;
            dataFields: components[][][];
        };
        LoginCacheCreate: {
            errorTimes?: number;
            userId?: number;
            token?: string;
            bngUser?: components[][];
            lastLoginTime?: string;
            companyList?: components[][][];
            currentBngCompany?: components[][];
            currentSoftId?: number;
            currentSoftVersionId?: number;
            coNo?: number;
            isAdmin?: number;
            showCompanyList?: number;
        };
        StaffRoster: {
            id?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            identityType?: number;
            identityCard?: string;
            gender?: number;
            birthday?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            boardDate?: string;
            staffStatus?: number;
            userId?: number;
            enName?: string;
            nativePlace?: string;
            registeredFlag?: string;
            registeredAddress?: string;
            healthCertExpiry?: string;
            nation?: string;
            marriageStatus?: number;
            politicCountenance?: string;
            personalPhoto?: string;
            idPhoto?: string;
            probationSalary?: number;
            regularSalary?: number;
            probationTime?: number;
            planRegularDate?: string;
            probationDelayFlag?: number;
            highSchool?: string;
            firstEducation?: number;
            socialSeniority?: string;
            workingYears?: number;
            firstWorkingTime?: string;
            employAttribute?: number;
            inviteCompany?: string;
            archivesLink?: string;
            attachment?: string;
            salaryGradingStatus?: number;
            nickName?: string;
            userDesc?: string;
            isSetProbation?: number;
            isOpenAccount?: number;
            sysRoleNo?: number;
            qywechatId?: string;
            dingdingId?: string;
            feishuId?: string;
            recruitmentChannel?: number;
            idExpiryDate?: string;
            email?: string;
            wechatNumber?: string;
            addressInfo?: string;
            weixinOpenId?: string;
            weixinUnionId?: string;
            isSubscribe?: number;
            sortIndex?: number;
            adminFlag?: number;
            needFlow?: number;
            needFlowWithSalary?: number;
            needFlowWithFormal?: number;
            needNotice?: number;
            staffNumberMode?: number;
            marriage?: string;
            customFields?: components[][];
        };
        StaffFieldGroupVO: {
            id?: number;
            groupIdentity?: string;
            groupName?: string;
            allowMultiply?: boolean;
            namespace?: string;
        };
        CoefficientRange: {
            from?: number;
            to?: number;
            coefficient?: number;
            description?: string;
        };
        MapListFieldConfigItem: {
            key?: components[][][];
        };
        FieldItemConfigCreate: {
            item: string;
            configurable?: boolean;
            enabled: boolean;
        };
        CompletionCoefficientConfig: {
            weight: number;
            coefficientUpperLimit?: number;
            coefficientLowerLimit?: number;
            lowerLimitThreshold?: number;
            decimalHandleRule?: string;
        };
        AppraiseStaffCreateDTO: {
            id?: number;
            coNo?: number;
            type?: number;
            year?: number;
            month?: number;
            endMonth?: number;
            endYear?: number;
            expirDate?: string;
            examTime?: string;
            name?: string;
            staffNums?: number;
            createTime?: string;
            createUser?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
        };
        ServiceResultStaffDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TeamCalendarTaskQuerySelfCreateVO: {
            id?: number;
            coNo?: number;
            title?: string;
            description?: string;
            isCrossDay?: boolean;
            isDuplicate?: boolean;
            startDate?: string;
            endDate?: string;
            type?: number;
            noticeType?: number;
            repeatFrequency?: number;
            isSyncToTaskPlan?: boolean;
            createTime?: string;
            updateTime?: string;
            creatorId?: number;
            updaterId?: number;
            creator?: string;
            createDate?: string;
            timeDescription?: string;
            isSystemCreate?: boolean;
            creatorPersonalPhoto?: string;
            noticeStaffInfos?: components[][][];
            attachments?: components[][][];
        };
        DocFileUploadSummaryDTO: {
            current: number;
            size: number;
            search?: string;
            vt: string;
            vids?: number[];
        };
        DocNoticeD: {
            id?: number;
            nid?: number;
            staffNo?: number;
            isRead?: number;
            signStatus?: number;
            requireSignType?: number;
            staffSignType?: number;
            ossProvider?: string;
            signFileUrl?: string;
            signTime?: string;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            deptName?: string;
            positionName?: string;
            staffName?: string;
            staffPhoto?: string;
            staffStatusName?: string;
            staffSigns?: components[][][];
        };
        DocNoticeRange: {
            id?: number;
            nid?: number;
            channel?: number;
            rangeType?: number;
            val?: number;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
        };
        ServiceResultTeamCalendarSettingQueryVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ExportBaseRequestNoticeDExportParam: {
            type: string;
            param?: components[][];
        };
        WorkPlanCreateDTO: {
            parentId?: string;
            classifyId?: string;
            meetingResoluteId?: string;
            projectId?: string;
            directorId?: string;
            executorSelectionId?: string;
            title?: string;
            description?: string;
            source?: string;
            type?: number;
            executionTimeType?: number;
            startDate?: string;
            endDate?: string;
            executionTimeRepeatType?: number;
            executionTimeRepeatContent?: string;
            urgentFlag?: boolean;
            importantFlag?: boolean;
            reminderFlag?: boolean;
            allShowFlag?: boolean;
            clockEndDateFlag?: boolean;
            reminderType?: number;
            reminderContent?: string;
            yearPriority?: boolean;
            taskType?: number;
            executeUserIds?: string[];
            attachments?: components[][][];
            children?: components[][][];
        };
        DailyMonthlyReportCreateDTO: {
            type?: number;
            userReportDate?: string;
            records?: components[][][];
            workPlanIdList?: string[];
            workPlanCreateDTOList?: components[][][];
        };
        ServiceResultListBngRoleVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        UserGroupEditDTO: {
            id?: string;
            name?: string;
            description?: string;
            selectionId?: string;
        };
        DataPermissionEditDTO: {
            id?: string;
            userSelectionId?: string;
            viewedUserSelectionId?: string;
            typeList?: number[];
        };
        AppraiseRestVO: {
            summary?: components[][][];
            keyList?: string[];
            ruleList?: components[][][];
        };
        PasswordUpdateRO: {
            password: string;
            oldPassword: string;
        };
        ServiceResultListMapObject: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        HrmStaffSign: {
            id?: number;
            staffNo?: number;
            ossProvider?: string;
            signFileUrl?: string;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
        };
        StaffSignLessVO: {
            id?: number;
            staffNo?: number;
            ossProvider?: string;
            signFileUrl?: string;
        };
        ProjectAttachmentListVO: {
            attachmentUrl?: string;
            attachmentName?: string;
        };
        OrderItem: {
            column?: string;
            asc: boolean;
        };
        BngCompanySoft: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            versionName?: string;
            type?: number;
            coNo?: number;
            enabled?: number;
            trialFlag?: number;
            trialDays?: number;
            trialVerOverLimit?: number;
            authorizedTime?: string;
            softExpense?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            url?: string;
            ts?: string;
            remaining?: number;
            companyName?: string;
            contactTel?: string;
            contactEmail?: string;
            name?: string;
            expireDays?: number;
            feeType?: string;
            isFirstBuy?: number;
            feeStrategyId?: number;
            feeStrategyList?: Record<string, never>[];
            salePrice?: number;
        };
        ServiceResultPageOvertimeRuleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OrgDeptAttribute: {
            autoNo?: number;
            name?: string;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
        };
        SysDictType: {
            dictId?: number;
            dictName?: string;
            dictType?: string;
            status?: string;
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            remark?: string;
            coNo?: number;
        };
        StaffCustomFieldCreateROCreate: {
            id?: number;
            groupIdentity: string;
            displayName: string;
            fieldType: number;
            options?: string[];
            configItems?: components[][][];
        };
        ServiceResultListStaffFieldGroupVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        CompletionRatioConfig: {
            inputType: string;
            targetRatio?: number;
            coefficientRanges?: components[][][];
            defaultCoefficient: number;
            useNearestMatch: boolean;
            formulaExpression?: string;
            showTrendChart: boolean;
        };
        CustomFieldConfigCreate: {
            point: string;
            configs: components[][][];
        };
        AppraiseImportResult: {
            success?: boolean;
            message?: string;
            successCount?: number;
            failCount?: number;
            errorDetails: string[];
        };
        DocDirRange: {
            id?: number;
            dirId?: number;
            channel?: number;
            rangeType?: number;
            val?: number;
            concatPowers?: string;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            name?: string;
            photo?: string;
        };
        ServiceResultListTeamCalendarTaskQuerySelfCreateVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        MapLong: {
            key?: number;
        };
        DocNotice: {
            id?: number;
            typeId?: number;
            title?: string;
            theCode?: string;
            version?: string;
            fileUploadType?: number;
            issuingBody?: string;
            theSummary?: string;
            staffSelectionId?: number;
            needAppSign?: number;
            requireSignDays?: number;
            needReadTime?: number;
            needFace?: number;
            signOfNew?: number;
            mustRead?: number;
            ownerNo?: number;
            ownerName?: string;
            pubStaffNo?: number;
            pubStaffName?: string;
            remark?: string;
            lastSyncTime?: string;
            pubStatus?: number;
            pubTime?: string;
            fileSaveDirId?: number;
            wikiFlag?: number;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            fileList?: components[][][];
            dList?: components[][][];
            readFiles?: components[][][];
            qrcodeUrl?: string;
            pubStaffDeptName?: string;
            pubStaffPostName?: string;
            ownerStaffDeptName?: string;
            ownerPostName?: string;
            userReadOrSignDetail?: components[][];
            staffSum?: number;
            hasReadStaffSum?: number;
            hasSignStaffSum?: number;
            typeName?: string;
            staffSelectionDetail?: components[][];
        };
        SelectionConditionCreate: {
            type?:  |  |  |  |  |  |  |  | ;
            operator?:  |  |  |  | ;
            data?: components[][][];
        };
        WorkPlanEditDTO: {
            id?: string;
            parentId?: string;
            classifyId?: string;
            projectId?: string;
            directorId?: string;
            executorSelectionId?: string;
            title?: string;
            description?: string;
            source?: string;
            type?: number;
            executionTimeType?: number;
            startDate?: string;
            endDate?: string;
            executionTimeRepeatType?: number;
            executionTimeRepeatContent?: string;
            urgentFlag?: boolean;
            importantFlag?: boolean;
            reminderFlag?: boolean;
            reminderType?: number;
            reminderContent?: string;
            yearPriority?: boolean;
            sorted?: number;
            allShowFlag?: boolean;
            clockEndDateFlag?: boolean;
            taskType?: number;
            attachments?: components[][][];
        };
        DailyMonthlyReportEditDTO: {
            id?: string;
            records?: components[][][];
            workPlanIdList?: string[];
            workPlanCreateDTOList?: components[][][];
        };
        ServiceResultAppraiseRestVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        MobileSmsCodeRO: {
            mobile: string;
            smsCode: string;
        };
        CompanyUserQueryRO: {
            current?: number;
            size?: number;
            search?: string;
            order?: components[][][];
            activated?: boolean;
        };
        ProjectParticipantListVO: {
            participantId?: string;
            participantName?: string;
            participantDeptName?: string;
            participantPositionName?: string;
        };
        ServiceResultPayrollDetail: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PageDailyReportVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        BngCompany: {
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
            registerSoftId?: number;
            bngVersionPackage?: components[][][];
            logs?: components[][][];
            versionId?: number;
            softId?: number;
            defaultCo?: number;
        };
        OvertimeRuleQueryROQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
            overtimeType: number;
        };
        SaveRolePowerDTO: {
            roleNo?: number;
            roleName?: string;
            menuPower?: string[];
            encryptField?: number[];
            dataRange?: number;
            customUserIds?: string;
            softId?: number;
            versionId?: number;
        };
        PageOrgDeptAttribute: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PageSysDictType: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        StaffWithConflictHrmStaffBaseInfo: {
            staff?: components[][];
            exists?: boolean;
            nameexists?: boolean;
            msg?: string;
        };
        PageStaffRoster: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        AddDeductConfig: {
            max?: string;
            min?: string;
        };
        BaseNosDTO: {
            id?: number;
            ids: number[];
        };
        ServiceResultAppraiseImportResult: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        FieldValueModify: {
            fieldName: string;
            value?: string;
        };
        TeamCalendarTaskNoticeUserVO: {
            userId?: number;
            userName?: string;
        };
        DocFileSpaceVO: {
            coNo?: number;
            staffNo?: number;
            usedFileSizeSum?: number;
            boughtFileSizeSum?: number;
            userUsedFileTypeSizeSum?: components[][];
            userUsedFileSizeSum?: number;
        };
        TeamCalendarTaskNoticeStaffInoVO: {
            staffNo?: number;
            staffName?: string;
            personalPhoto?: string;
        };
        StaffSelectionConditionDataCreate: {
            id?: number;
            conditions?: components[][][];
        };
        WorkPlanUpdateStatusDTO: {
            workPlanId?: string;
            recordId?: string;
            status?: number;
        };
        DailyMonthlyReportAnnotationCreateDTO: {
            reportId?: string;
            content?: string;
        };
        ServiceResultProjectDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageDailyReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        LoginCache: {
            errorTimes?: number;
            userId?: number;
            token?: string;
            bngUser?: components[][];
            lastLoginTime?: string;
            companyList?: components[][][];
            currentBngCompany?: components[][];
            currentSoftId?: number;
            currentSoftVersionId?: number;
            coNo?: number;
            isAdmin?: number;
            currentSoftRoleList?: components[][][];
            showCompanyList?: number;
        };
        ServiceResultOvertimeRuleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageOrgDeptAttribute: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TimePeriodCreate: {
            beginTime?: string;
            endTime?: string;
        };
        ServiceResultPageSysDictType: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        SyncResult: {
            deptResults?: components[][][];
            staffResults?: components[][][];
            checkMsg?: string;
            companySyncRecord?: components[][];
        };
        StaffCustomFieldVO: {
            id?: number;
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            configItems?: components[][][];
            optionItems?: components[][][];
        };
        ServiceResultPageStaffRoster: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffFieldGroupSaveROCreate: {
            id?: number;
            groupName: string;
        };
        ServiceResultDocFile: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AdminStaffGroupUpdateROModify: {
            id: number;
            groupIdentity: string;
            fields?: components[][][][];
        };
        ServiceResultListTeamCalendarTaskNoticeUserVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AppraiseStaffTarget: {
            id?: number;
            coNo?: number;
            staffId?: number;
            postId?: number;
            itemId?: number;
            leaderId?: number;
            year?: number;
            remark?: string;
            createTime?: string;
            unit?: string;
            type?: number;
        };
        ServiceResultDocFileSpaceVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PageTeamCalendarTaskQuerySelfCreateVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PageDocNotice: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        WorkPlanUpdateProgressDTO: {
            workPlanId?: string;
            recordId?: string;
            progress?: number;
        };
        DailyMonthlyReportAnnotationEditDTO: {
            id?: string;
            reportId?: string;
            content?: string;
        };
        ServiceResultListMenuDTO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        CompanyUserRO: {
            userIds: number[];
        };
        HrmStaffBaseInfoQuery: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            identityType?: number;
            identityCard?: string;
            gender?: number;
            birthday?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            boardDate?: string;
            staffStatus?: number;
            userId?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            isDeleted?: number;
            ts?: string;
            personalPhoto?: string;
            planRegularDate?: string;
            currentCompany?: components[][];
            loginCache?: components[][];
        };
        ServiceResultLoginCache: {
            code?: string;
            success?: boolean;
            errorCode?: number;
            message?: string;
            data?: components[][];
        };
        BaseDetailQueryRODetail: {
            id: number;
        };
        ServiceResultOrgDeptAttribute: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TieredTimeCreate: {
            workMinutes?: number;
            deductMinutes?: number;
        };
        ServiceResultSysDictType: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultSyncResult: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultStaffCustomFieldVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        FieldOptionItem: {
            optionId?: number;
            optionName?: string;
            optionValue?: Record<string, never>;
            enabled?: boolean;
        };
        StaffFieldGroupSaveROModify: {
            id: number;
            groupName: string;
        };
        CustomFieldConfig: {
            point?: string;
            configs?: components[][][];
        };
        ServiceResultPageTeamCalendarTaskQuerySelfCreateVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageDocNotice: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffSelectionResult: {
            id?: number;
            staffName?: string;
            deptName?: string;
            positionName?: string;
            personalPhoto?: string;
        };
        WorkPlanUpdateAssignDTO: {
            id?: string;
            executorSelectionId?: string;
            type?: number;
        };
        TaskViewFollowConfigVO: {
            followUserId?: string;
        };
        ServiceResultBngRoleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseForceResetListQueryDTO: {
            id?: number;
            key?: string;
            totalCount?: number;
            rule?: components[][];
        };
        PasswordResetRO: {
            uuid?: string;
            password?: string;
        };
        CompanyUserAccountCreateRO: {
            staffId: number;
            roleId?: number;
        };
        ProjectCreateDTO: {
            parentId?: string;
            directorId?: string;
            name?: string;
            desc?: string;
            visibleRange?: number;
            startTime?: string;
            endTime?: string;
            participantSelectionId?: string;
            attachmentList?: components[][][];
        };
        ProjectAttachmentDTO: {
            attachmentName?: string;
            attachmentUrl?: string;
        };
        DateRangeReportROQuery: {
            coNo?: number;
            currentStaff?: components[][];
            deptNos?: number[];
            staffNos?: number[];
            groupId?: number;
            beginDate: string;
            endDate: string;
        };
        BngUserEdit: {
            userId?: number;
            departmentNo?: number;
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
            coNo?: number;
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
        };
        OrgEnterpriseSubject: {
            autoNo?: number;
            enterpriseName?: string;
            enterpriseShortName?: string;
            enterpriseTaxNumber?: string;
            enterpriseAddress?: string;
            enterprisePhone?: string;
            enterpriseBankAddress?: string;
            enterpriseBankAccount?: string;
            corporateName?: string;
            corporateMobile?: string;
            financeManager?: string;
            financeManagerMobile?: string;
            provinceCode?: string;
            provinceName?: string;
            cityCode?: string;
            cityName?: string;
            distinctCode?: string;
            distinctName?: string;
            longitude?: string;
            latitude?: string;
            registrationDate?: string;
            businessLicense?: string;
            employeeNumber?: string;
            remark?: string;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
        };
        OvertimeCalculateRuleCreate: {
            isDeductBreakTime?: boolean;
            deductType?: number;
            breakTimePeriods?: components[][][];
            deductRules?: components[][][];
            beginOvertimeAfterWork: number;
            minOvertime: number;
            maxOvertime: number;
        };
        ExcelImportRO: {
            file?: string;
            type: string;
        };
        StaffRosterQueryRO: {
            current?: number;
            size?: number;
            search?: string;
            sorter?: string;
            orderBy?: string;
            staffNumber?: string;
            personName?: string;
            deptNo?: number;
            staffAttribute?: number;
            conversionStatus?: number;
            fields?: string[];
        };
        StaffFieldConfigDetailVO: {
            groupIdentity?: string;
            configId?: number;
            fieldId?: number;
            fieldName?: string;
            displayName?: string;
            fieldType?: number;
            configItems?: components[][][];
            namespace?: string;
            optionItems?: components[][][];
        };
        BaseDetailQueryROModify: {
            id?: number;
        };
        DocDir: {
            id?: number;
            type?: number;
            parentId?: number;
            level?: number;
            name?: string;
            ownerStaffNo?: number;
            powerType?: number;
            sortNo?: number;
            isDeleted?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            ts?: string;
            concatPowers?:  |  |  |  |  |  |  |  |  | ;
            ownerStaffName?: string;
            ownerStaffPhoto?: string;
            rangePowers?: components[][][];
        };
        BaseQuerySimpleDTOQuery: {
            current: number;
            size: number;
            search?: string;
        };
        DocNoticeForUserReadDTO: {
            current: number;
            size: number;
            search?: string;
            typeId?: number;
            mustRead?: number;
            userReadFlag?: number;
            userSignStatuses?: ( |  |  |  |  | )[];
            orderBy?: string;
        };
        PageWorkPlanAnnotationVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultTaskViewFollowConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TaskViewConfigVO: {
            id?: string;
            type?: number;
            viewType?: number;
            dateType?: number;
            followUsers?: string[];
        };
        RoleSaveRO: {
            roleId?: number;
            name: string;
            remark?: string;
        };
        CompanyUserAccountChangeRO: {
            staffId: number;
            mobile: string;
            smsCode: string;
        };
        TeamCalendarTaskAttachmentVo: {
            id?: number;
            taskId?: number;
            name?: string;
            url?: string;
        };
        ProjectEditDTO: {
            id?: string;
            parentId?: string;
            directorId?: string;
            name?: string;
            desc?: string;
            visibleRange?: number;
            startTime?: string;
            endTime?: string;
            participantSelectionId?: string;
            atachmentList?: components[][][];
        };
        MonthlyGeneralSituation: {
            requiredAttDays?: number;
            actualAttDays?: number;
            requiredAttHours?: number;
            actualAttHours?: number;
            restDays?: number;
            normalAttDays?: number;
            abnormalAttDays?: number;
        };
        BngVersionPackageEdit: {
            id?: number;
            coNo?: number;
            softId?: number;
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
            adminUser?: components[][][];
        };
        PageOrgEnterpriseSubject: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        BaseEditDTO: {
            id?: number;
        };
        OvertimeAccountingRuleCreate: {
            accountingMethod?: number;
            ratio?: number;
            effectiveMethod?: number;
            delayDays?: number;
            validDays?: number;
        };
        PageCompanySyncRecord: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultStaffFieldConfigDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseItemVO: {
            id?: number;
            createUser?: number;
            itemName?: string;
            description?: string;
            groupId?: number;
            appraiseProperty?: string;
            scoreType?: number;
            unit?: string;
            scoreRule?: number;
            ruleType?: number;
            ruleConfig?: string;
            createTime?: string;
            ratingConfig?: components[][];
            percentageRangeConfig?: components[][];
            targetBasedConfig?: components[][];
            completionCoefficientConfig?: components[][];
            addDeductConfig?: components[][];
            createUserName?: string;
            createUserDept?: string;
            formulaExpression?: string;
            fe?: string;
            used: number;
        };
        PageDocDir: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        PageMapString: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultDocNotice: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocNoticeForManageDTO: {
            current: number;
            size: number;
            search?: string;
            typeIds?: number[];
            orderBy?: string;
            statuses?: ( |  |  | )[];
        };
        PageStaffSelectionResult: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        AppriaseStaffValueImportDTO: {
            itemId?: number;
            staffId?: number;
            deptId?: number;
            staffName?: string;
            deptName?: string;
            itemName?: string;
            year?: number;
            month?: number;
            complateValue?: number;
        };
        ServiceResultPageWorkPlanAnnotationVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TaskViewConfigDTO: {
            type?: number;
            dateType?: number;
        };
        ServiceResultTaskViewConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ProjectEditStatusDTO: {
            id?: string;
            status?: number;
        };
        WxMaGetPhoneNumberVO: {
            phone?: string;
            code?: string;
        };
        MonthlyReportVO: {
            staffInfo?: components[][];
            generalSituation?: components[][];
            abnormalStatistics?: components[][];
            overtimeStatistics?: components[][];
            flowStatistics?: components[][];
        };
        OrderLogEdit: {
            id?: number;
            orderNo?: string;
            productName?: string;
            quantity?: string;
            unitPrice?: number;
            totalPrice?: number;
            operateTime?: string;
            remark?: string;
            coNo?: number;
            softId?: number;
            softName?: string;
            versionName?: string;
            softVersion?: number;
        };
        ServiceResultPageOrgEnterpriseSubject: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OvertimeDurationCreate: {
            timeUnit?: number;
            roundingMode: never;
            scale: number;
            cardinal: number;
            dayConvert2Hours: number;
        };
        ServiceResultPageCompanySyncRecord: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffCreateRO: {
            gender?: number;
            birthday?: string;
            deptNo?: number;
            positionNo?: number;
            boardDate?: string;
            staffStatus?: number;
        };
        StaffCreateROCreate: {
            phoneNumber: string;
            staffName: string;
            identityCard: string;
            gender?: number;
            birthday?: string;
            deptNo: number;
            positionNo: number;
            boardDate: string;
            staffStatus: number;
        };
        StaffFieldConfigDetailQueryROQuery: {
            fieldName: string;
            namespace: string;
        };
        ServiceResultPageDocDir: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageMapString: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageStaffSelectionResult: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanAnnotationCreateDTO: {
            workPlanRecordsId?: string;
            content?: string;
            createBy?: string;
            createTime?: string;
        };
        TaskViewFollowConfigDTO: {
            followUserId?: string;
        };
        BreakTimePeriodROCreate: {
            beginTime: string;
            endTime: string;
        };
        ProjectMoveDTO: {
            currentId?: string;
            parentId?: string;
            sortIdList?: string[];
        };
        ServiceResultWxMaGetPhoneNumberVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PayrollDetailDynamic: {
            id?: number;
            payrollId?: number;
            staffId?: number;
            coNo?: number;
            year?: number;
            month?: number;
            status?: number;
            staffName?: string;
            statusStr?: string;
            sendDate?: string;
            deptId?: number;
            deptName?: string;
            headerJson?: string;
            dataJson?: string;
            originDetailId?: number;
            createTime?: string;
            updateTime?: string;
            msg?: string;
        };
        PageMonthlyReportVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        BngCompanySoftEdit: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            versionName?: string;
            type?: number;
            coNo?: number;
            enabled?: number;
            trialFlag?: number;
            trialDays?: number;
            trialVerOverLimit?: number;
            authorizedTime?: string;
            softExpense?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            url?: string;
            ts?: string;
            remaining?: number;
            companyName?: string;
            contactTel?: string;
            contactEmail?: string;
            name?: string;
            expireDays?: number;
            feeType?: string;
            isFirstBuy?: number;
            feeStrategyId?: number;
            feeStrategyList?: Record<string, never>[];
            salePrice?: number;
        };
        ServiceResultOrgEnterpriseSubject: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OvertimeRuleSaveROCreate: {
            id?: number;
            name?: string;
            overtimeType?: number;
            effectiveTimeRule?: number;
            calculationRule?: components[][];
            accountingRule?: components[][];
            durationRule?: components[][];
            beforeWorkEnabled: boolean;
            breakTimeEnabled: boolean;
            afterWorkEnabled: boolean;
        };
        OptionItemModify: {
            optionId?: number;
            optionValue?: string;
            enabled?: boolean;
            deleted?: boolean;
        };
        PageAppraiseItemVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        DocDirDTO: {
            current: number;
            size: number;
            search?: string;
            type?: number;
        };
        TaskViewConfigCreateDTO: {
            type?: number;
            viewType?: number;
            dateType?: number;
            followUserIds?: string[];
        };
        ShiftTimePeriodROCreate: {
            groupNo?: number;
            clockInRequired: boolean;
            clockOutRequired: boolean;
            periodBeginTime: string;
            clockInBeginTime?: string;
            clockInEndTime?: string;
            periodEndTime: string;
            clockOutBeginTime?: string;
            clockOutEndTime?: string;
            breakTimePeriods?: components[][][];
        };
        SysDictDataROCreate: {
            id?: number;
            dictSort?: number;
            dictValue: string;
            remark?: string;
        };
        WxMaGetPhoneNumberRO: {
            tempCodeForMobile: string;
        };
        ServiceResultPayrollDetailDynamic: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageMonthlyReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngCompanyEdit: {
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
            registerSoftId?: number;
            bngVersionPackage?: components[][][];
            logs?: components[][][];
            versionId?: number;
            softId?: number;
            defaultCo?: number;
        };
        OrgEnterpriseWorkplace: {
            autoNo?: number;
            workplaceName?: string;
            workplaceAttribute?: number;
            rentStartTime?: string;
            rentEndTime?: string;
            managerName?: string;
            stationNumber?: number;
            workplaceArea?: number;
            remark?: string;
            lng?: number;
            lat?: number;
            syncClockLocation?: boolean;
            scope?: number;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            managerMobile?: string;
            workCity?: string;
            workAddress?: string;
        };
        StaffDimensionData: {
            name?: string;
            value?: string;
        };
        StaffFieldConfigSaveROModify: {
            id?: number;
            fieldName: string;
            fieldType: number;
            namespace: string;
            options?: components[][][];
            configItems?: components[][][];
        };
        ServiceResultPageAppraiseItemVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffGroupFieldConfigQueryRODetail: {
            groupIdentity?: string;
        };
        ServiceResultLong: {
            code?: string;
            success?: boolean;
            data?: number;
            message?: string;
            tid?: string;
        };
        StaffDimensionDataQuery: {
            name?: string;
            value?: string;
        };
        ShiftTimePeriodSeasonCreate: {
            season?: number;
            timePeriods?: components[][][];
        };
        MonthlyReportROQuery: {
            coNo?: number;
            currentStaff?: components[][];
            deptNos?: number[];
            staffNos?: number[];
            groupId?: number;
            beginDate: string;
            endDate: string;
            year: number;
            month: number;
        };
        LoginCacheEdit: {
            errorTimes?: number;
            userId?: number;
            token?: string;
            bngUser?: components[][];
            lastLoginTime?: string;
            companyList?: components[][][];
            currentBngCompany?: components[][];
            currentSoftId?: number;
            currentSoftVersionId?: number;
            coNo?: number;
            isAdmin?: number;
            showCompanyList?: number;
        };
        PageOrgEnterpriseWorkplace: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        StaffSelectionCondition: {
            type?:  |  |  | ;
            operator?:  | ;
            data?: components[][][];
        };
        ServiceResultAppraiseItemVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        key2: Record<string, never>;
        SelectionConditionQuery: {
            type?:  |  |  |  |  |  |  |  | ;
            operator?:  |  |  |  | ;
            data?: components[][][];
        };
        ServiceResultListDocNotice: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        SysDictDataROModify: {
            id: number;
            dictSort?: number;
            dictValue: string;
            remark?: string;
        };
        ClockDetailData: {
            time?: string;
            status?: number;
            clockTime?: string;
        };
        TimePeriodEdit: {
            beginTime?: string;
            endTime?: string;
        };
        ServiceResultPageOrgEnterpriseWorkplace: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrAttendanceGroupDetailVO: {
            id?: number;
            coNo?: number;
            name?: string;
            groupType?: number;
            lastVersion?: number;
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            monthCycleSetting?: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
            selectionForm?: components[][];
        };
        DocDirChangeOwnerDTO: {
            id?: number;
            toStaffNo: number;
        };
        StaffSelectionBoundQueryROQuery: {
            current?: number;
            size?: number;
            search?: string;
            order?: components[][][];
            conditions?: components[][][];
        };
        PageDocNoticeD: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        WorkPlanListDetailVO: {
            workPlanId?: string;
            recordId?: string;
            parentId?: string;
            projectId?: string;
            executorSelectionId?: string;
            executorCondition?: components[][][];
            projectName?: string;
            directorId?: string;
            directorName?: string;
            directorDeptName?: string;
            directorPositionName?: string;
            directorPhoto?: string;
            classifyId?: string;
            title?: string;
            source?: string;
            progress?: number;
            startDate?: string;
            endDate?: string;
            finishDate?: string;
            executorId?: string;
            executorName?: string;
            status?: number;
            taskType?: number;
            executionTimeType?: number;
            executionTimeRepeatType?: number;
            executionTimeRepeatContent?: string;
            urgentFlag?: boolean;
            importantFlag?: boolean;
            followFlag?: boolean;
            yearPriority?: boolean;
            dataType?: number;
            topFlag?: boolean;
            sorted?: number;
            createBy?: string;
            createByName?: string;
            createByDeptName?: string;
            createByPositionName?: string;
            createByPhoto?: string;
            createTime?: string;
            crossDayFlag?: boolean;
            duplicateFlag?: boolean;
            children?: components[][][];
            attachmentList?: components[][][];
            executorList?: components[][][];
        };
        HalfDayWorkTimeSettingCreate: {
            am?: components[][];
            pm?: components[][];
        };
        ShiftTimePeriodClockDetailInfo: {
            clockIn?: components[][];
            clockOut?: components[][];
        };
        TieredTimeEdit: {
            workMinutes?: number;
            deductMinutes?: number;
        };
        ServiceResultOrgEnterpriseWorkplace: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultHrAttendanceGroupDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        Item: {
            channel: number;
            val: number;
            concatPowers: string;
        };
        ServiceResultDocDir: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AdminStaffSingleFieldUpdateROModify: {
            id: number;
            fieldValue: components[][];
        };
        DocNoticeFullEditDTO: {
            id?: number;
            typeId: number;
            title: string;
            theCode?: string;
            needAppSign: number;
            needReadTime?: number;
            signOfNew?: number;
            fileSaveDirId?: number;
            staffSelectionId: number;
            wikiFlag?: number;
            mustRead?: number;
            files: components[][][];
            applyPublishOnSaved?: number;
            requireSignDays?: number;
        };
        ServiceResultPageDocNoticeD: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanListVO: {
            userId?: string;
            userName?: string;
            userPhoto?: string;
            userDept?: string;
            userPosition?: string;
            workPlanList?: components[][][];
        };
        StaffSelectionConditionData: {
            id?: number;
            conditions?: components[][][];
        };
        FlexibleTimeSettingCreate: {
            advanceMinutes?: number;
            lateMinutes?: number;
        };
        ShiftClockDetailInfo: {
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
            beginTime?: string;
            endTime?: string;
            timePeriodClockDetails?: components[][][];
        };
        OvertimeCalculateRuleEdit: {
            isDeductBreakTime?: boolean;
            deductType?: never;
            breakTimePeriods?: components[][][];
            deductRules?: components[][][];
            beginOvertimeAfterWork: number;
            minOvertime: number;
            progressiveOvertime: number;
        };
        OrgEnterpriseCostCenter: {
            autoNo?: number;
            costCenterName?: string;
            staffNos?: string;
            remark?: string;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
        };
        AppraiseItemDTO: {
            id?: number;
            itemName?: string;
            description?: string;
            groupId?: number;
            appraiseProperty?: string;
            scoreType?: number;
            scoreRule?: number;
            ruleType?: number;
            ruleConfig?: string;
            formulaExpression?: string;
            fe?: string;
            unit?: string;
            weight: number;
            ratingConfig?: components[][];
            percentageRangeConfig?: components[][];
            targetBasedConfig?: components[][];
            completionCoefficientConfig?: components[][];
            addDeductConfig?: components[][];
            isCommon?: number;
        };
        DocDirAddShareTargetDTO: {
            id?: number;
            from?: string;
            targets: components[][][];
        };
        ServiceResultCollectionLong: {
            code?: string;
            success?: boolean;
            data?: number[];
            message?: string;
            tid?: string;
        };
        DocNoticeDPageDTO: {
            current: number;
            size: number;
            search?: string;
            nid: number;
            signStatus?: number;
            deptIds?: number[];
            orderBy?: string;
        };
        ServiceResultListWorkPlanListVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        StaffOrderRO: {
            staffId?: number;
            order?: number;
        };
        FlexibleClockSettingCreate: {
            version: number;
            flexibleMode: number;
            flexibleTimeSetting?: components[][];
            leaveLateArriveLateEnabled?: boolean;
            leaveLateArriveLateTimeSetting?: components[][][];
            modeOfAction?: number;
        };
        ClockLogDetail: {
            clockLogId?: number;
            clockTime?: string;
            clockType?: number;
            clockMode?: number;
            clockWay?: number;
            address?: string;
            isMatched?: boolean;
            errorCode?: string;
            status?: number;
            processStatus?: number;
        };
        OvertimeAccountingRuleEdit: {
            accountingMethod?: never;
            ratio?: number;
            effectiveMethod?: never;
            delayDays?: number;
            validDays?: number;
        };
        PageOrgEnterpriseCostCenter: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        DocDirRemoveShareTargetDTO: {
            id?: number;
            targetIds: number[];
        };
        AppraiseStaffDetailVO: {
            staffName?: string;
            personalPhoto?: string;
            deptId?: number;
            postId?: number;
            department?: string;
            position?: string;
        };
        DocNoticeSignDTO: {
            nid: number;
            origin: number;
            signB64?: string;
            saveSign?: number;
            relativeId?: number;
        };
        ServiceResultCollectionString: {
            code?: string;
            success?: boolean;
            data?: string[];
            message?: string;
            tid?: string;
        };
        RoleUserBindRO: {
            roleId: number;
            userIds?: number[];
        };
        ShiftSaveROCreate: {
            id?: number;
            name: string;
            timePeriodSeasons: components[][][];
            workHours?: number;
            hoursToDay: number;
            absentLateMinutes?: number;
            halfDayWorkTimeSetting: components[][];
            color?: string;
            isDivisiveSeason: boolean;
            summerMonth?: number[];
            winterMonth?: number[];
            flexibleClockSetting: components[][];
        };
        BatchReplaceRO: {
            sourceId: number;
            descId: number;
        };
        WeixinBindMobileRO: {
            mobile: string;
            smsCode: string;
            unionId: string;
        };
        ClockDetailReportVO: {
            attendanceDate?: string;
            dayType?: number;
            staffInfo?: components[][];
            shiftClockDetail?: components[][];
            clockLogs?: components[][][];
        };
        OvertimeDurationEdit: {
            timeUnit?: number;
            roundingMode: never;
            scale: number;
            cardinal: number;
            dayConvert2Hours: number;
        };
        ServiceResultPageOrgEnterpriseCostCenter: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocDirFullEditDTO: {
            id?: number;
            type: number;
            name: string;
            parentId?: number;
            targets?: components[][][];
        };
        ServiceResultListAppraiseTableVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AppraiseStatusCountVO: {
            statusName?: string;
            count?: number;
            unit?: string;
            staffDetails?: components[][][];
        };
        DocNoticeResignDTO: {
            id?: number;
            ids: number[];
            nid: number;
        };
        WorkPlanAttachmentVO: {
            id?: string;
            attachmentName?: string;
            attachmentUrl?: string;
        };
        WeixinMaBindMobileRO: {
            mobile: string;
            smsCode: string;
            jsCode: string;
        };
        PageClockDetailReportVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        OvertimeRuleSaveROEdit: {
            coNo?: number;
            id?: number;
            name?: string;
            overtimeType?: never;
            isApprove?: boolean;
            effectiveTimeRule?: never;
            calculationRule?: components[][];
            accountingRule?: components[][];
            durationRule?: components[][];
            allowableTimePeriod?: never;
        };
        ServiceResultOrgEnterpriseCostCenter: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseStaffOverviewBaseVO: {
            name?: string;
            staffName?: string;
            personalPhoto?: string;
            createTime?: string;
            statusCounts?: components[][][];
        };
        WorkOrderClassifyVO: {
            id?: string;
            handlerId?: string;
            handlerName?: string;
            handlerPersonPhoto?: string;
            deptId?: string;
            deptName?: string;
            deptDirectorId?: string;
            deptDirectorName?: string;
            deptDirectorPersonPhoto?: string;
            name?: string;
            urgencyRule?: number;
            defaultProcessTime?: number;
            defaultProcessTimeUnit?: number;
            modifyPriorityFlag?: boolean;
            status?: number;
            createBy?: string;
            createName?: string;
            createTime?: string;
        };
        ServiceResultPageClockDetailReportVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngUserModify: {
            userId?: number;
            departmentNo?: number;
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
            coNo?: number;
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
        };
        ServiceResultAppraiseStaffOverviewBaseVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocNoticeStaffSelectionEditDTO: {
            id?: number;
            staffSelectionId: number;
        };
        ServiceResultListWorkOrderClassifyVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        HrStaffGroupChangeVO: {
            groupId?: number;
            groupName?: string;
            staffList?: components[][][];
        };
        BngVersionPackageModify: {
            id?: number;
            coNo?: number;
            softId?: number;
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
            adminUser?: components[][][];
        };
        keyModify: {
            item?: string;
            enabled?: boolean;
        };
        ServiceResultAppraiseConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        AppraiseStaffOverviewVO: {
            statusCounts?: components[][][];
        };
        WorkPlanDetailDTO: {
            workPlanId?: string;
            workPlanRecordId?: string;
            executorId?: string;
            date?: string;
        };
        WorkOrderClassifyCreateDTO: {
            deptId?: string;
            deptDirectorId?: string;
            handlerId?: string;
            name?: string;
            urgencyRule?: number;
        };
        WorkOrderClassifySimpleDetailVO: {
            id?: string;
            name?: string;
            num?: number;
            handlerId?: string;
            handlerName?: string;
            handlerPhoto?: string;
            handlerDept?: string;
            handlerPosition?: string;
            status?: number;
        };
        AppraiseForceResetDTO: {
            ids?: number[];
            type?: number;
            historyId?: number;
        };
        PageWorkOrderClassifyVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        MapListGroupVO: {
            key?: components[][][];
        };
        CurrentDeptStaffDetailVO: {
            id?: string;
            realName?: string;
            staffNumber?: string;
            personPhoto?: string;
            positionName?: string;
            deptName?: string;
            deptId?: string;
            followFlag?: boolean;
        };
        AttGroupPreCheckResultVO: {
            groupChangeList?: components[][][];
            unblockStaffs?: components[][][];
        };
        OrderLogModify: {
            id?: number;
            orderNo?: string;
            productName?: string;
            quantity?: string;
            unitPrice?: number;
            totalPrice?: number;
            operateTime?: string;
            remark?: string;
            coNo?: number;
            softId?: number;
            softName?: string;
            versionName?: string;
            softVersion?: number;
        };
        MapListCustomFieldConfigItemModify: {
            key?: components[][][];
        };
        ServiceResultAppraiseStaffOverviewVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocNoticeReadRangeDTO: {
            id?: number;
            coNo?: number;
            targets: components[][][];
        };
        WorkPlanAttachmentDTO: {
            workPlanRecordId?: string;
            attachmentName?: string;
            attachmentUrl?: string;
        };
        WorkOrderClassifyEditDTO: {
            id?: string;
            deptId?: string;
            deptDirectorId?: string;
            handlerId?: string;
            name?: string;
            urgencyRule?: number;
            status?: number;
        };
        DocNoticeRollbackDTO: {
            id?: number;
            ids: number[];
            rollUserReadSign?: number;
        };
        ServiceResultWorkOrderClassifyVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkOrderClassifySimpleVO: {
            totalNum?: number;
            classifyList?: components[][][];
        };
        ServiceResultPageWorkOrderClassifyVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListCurrentDeptStaffDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultAttGroupPreCheckResultVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngCompanySoftModify: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            versionName?: string;
            type?: number;
            coNo?: number;
            enabled?: number;
            trialFlag?: number;
            trialDays?: number;
            trialVerOverLimit?: number;
            authorizedTime?: string;
            softExpense?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            url?: string;
            ts?: string;
            remaining?: number;
            companyName?: string;
            contactTel?: string;
            contactEmail?: string;
            name?: string;
            expireDays?: number;
            feeType?: string;
            isFirstBuy?: number;
            feeStrategyId?: number;
            feeStrategyList?: Record<string, never>[];
            salePrice?: number;
        };
        AttDimensionDataEdit: {
            dimensionType?: number;
            dimensionValue?: number;
        };
        StaffDimensionDataCreate: {
            name?: string;
            value?: string;
        };
        ShowStyleDTO: {
            showScore?: number;
            showGrade?: number;
            showCoefficient?: number;
            showPercentile?: number;
        };
        WorkOrderVO: {
            id?: string;
            handlerId?: string;
            handlerName?: string;
            classifyId?: string;
            classifyName?: string;
            title?: string;
            content?: string;
            urgencyLevel?: number;
            expediteNum?: number;
            launchTime?: string;
            finishTime?: string;
            status?: number;
            createBy?: string;
            createByName?: string;
            createByDept?: string;
            remark?: string;
            createTime?: string;
            expediteTime?: string;
            urgencyRule?: number;
        };
        ServiceResultWorkOrderClassifySimpleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkOrderClassifyDTO: {
            current: number;
            size: number;
            search?: string;
            status?: number;
        };
        CurrentDeptDetailVO: {
            currentDeptId?: string;
            currentDeptName?: string;
            expandFlag?: boolean;
            children?: components[][][];
            staffList?: components[][][];
        };
        BngCompanyModify: {
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
            registerSoftId?: number;
            bngVersionPackage?: components[][][];
            logs?: components[][][];
            versionId?: number;
            softId?: number;
            defaultCo?: number;
        };
        AttStaffDimensionDataEdit: {
            staffNo?: number;
            dimensionDataList?: components[][][];
        };
        StaffSelectionConditionCreate: {
            type?:  |  |  | ;
            operator?:  | ;
            data?: components[][][];
        };
        FieldItemConfigModify: {
            item: string;
            configurable?: boolean;
            enabled: boolean;
        };
        AppraiseDeptConfigVO: {
            id?: number;
            postId?: number;
            deptId?: number;
            isAssess?: number;
            leaderId?: string;
            hrId?: number;
            cycleConfig?: string;
            createdAt?: string;
            updatedAt?: string;
            cycleConfigList?: components[][][];
            deptName?: string;
            postName?: string;
            postLevelName?: string;
            staffCount?: number;
            leaderName?: string[];
            hrName?: string;
        };
        FieldOrderCreate: {
            fieldName: string;
            order: number;
        };
        DocNoticeMatchStaffEntryDTO: {
            startBoardDate: string;
        };
        WorkOrderClassifySimpleDTO: {
            type?: number;
            status?: number[];
        };
        WorkOrderClassifyStatisticsVO: {
            total?: number;
            detailList?: components[][][];
        };
        WorkOrderClassifyStatisticsDetailVO: {
            status?: number;
            count?: number;
        };
        ServiceResultGetCurrentDeptStaffVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        LoginCacheModify: {
            errorTimes?: number;
            userId?: number;
            token?: string;
            bngUser?: components[][];
            lastLoginTime?: string;
            companyList?: components[][][];
            currentBngCompany?: components[][];
            currentSoftId?: number;
            currentSoftVersionId?: number;
            coNo?: number;
            isAdmin?: number;
            showCompanyList?: number;
        };
        ReissueClockRuleSaveROCreate: {
            id?: number;
            version?: number;
            name?: string;
            enabled?: boolean;
            countPerPeriod?: number;
            daysLimit?: number;
            expDays?: number;
            attendanceStatus?: number[];
            remindEnabled?: boolean;
            remindDayOfMonth?: string;
        };
        HrAttendanceGroupValidateROCreate: {
            id?: number;
            staffNos?: number[];
            selectionConditionData: components[][];
        };
        CustomFieldConfigModify: {
            point: string;
            configs: components[][][];
        };
        ServiceResultListAppraiseDeptConfigVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultListAppraiseConfigForcedRule: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        FieldTemplateSaveROCreate: {
            fieldOrder: components[][][];
        };
        PageWorkOrderVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultListWorkOrderClassifyStatisticsVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        DocNoticeRemindDTO: {
            ids: number[];
            msgTypes: number[];
        };
        TimePeriodModify: {
            beginTime?: string;
            endTime?: string;
        };
        WorkdayShiftSettingCreate: {
            dayOfWeek?: number;
            shiftId?: number;
        };
        AppriasePostDTO: {
            deptId?: number;
            postId?: number;
        };
        AppraiseStaffPubDTO: {
            ids?: number[];
        };
        GetCurrentDeptStaffVO: {
            haveDataPermissionFlag?: boolean;
            companyId?: string;
            companyName?: string;
            deptTree?: components[][][];
        };
        ServiceResultPageWorkOrderVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultWorkOrderClassifyStatisticsVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        TieredTimeModify: {
            workMinutes?: number;
            deductMinutes?: number;
        };
        : Record<string, never>;
        ShiftScheduleSettingCreate: {
            changeShiftEnabled?: boolean;
            shiftChooseEnabled?: boolean;
            autoAlignShiftEnabled?: boolean;
            customScheduleEnabled?: boolean;
        };
        StaffFieldSingleConfigSaveROModify: {
            configId?: number;
            fieldName: string;
            namespace: string;
            point: string;
            configs: components[][][];
        };
        AppraiseDeptConfig: {
            id?: number;
            postId?: number;
            deptId?: number;
            isAssess?: number;
            leaderId?: string;
            hrId?: number;
            createTime?: string;
            coNo?: number;
            cycleConfig?: string;
            cycleConfigList?: components[][][];
        };
        AppraiseDeptSummaryVO: {
            totalStaffCount?: number;
            assessStaffCount?: number;
            coverage?: number;
            appraiseDeptConfigVOList?: components[][][];
        };
        AppraiseStaffProject: {
            id?: number;
            staffId?: number;
            coNo?: number;
            postId?: number;
            postTableId?: number;
            staffTableId?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
            staffName?: string;
            headPic?: string;
            postName?: string;
            deptId?: number;
            deptName?: string;
            status?: number;
            createTime?: string;
            leaderId?: string;
            leaderName?: string;
            hrId?: number;
            hrName?: string;
            type?: number;
            year?: number;
            endYear?: number;
            month?: number;
            endMonth?: number;
            expirDate?: string;
            examTime?: string;
            maxScore?: number;
            maxDscore?: number;
            allowApply?: number;
            allowLeaderApply?: number;
            selfScore?: number;
            cycleScore?: number;
            leaderScore?: number;
            selfRemark?: string;
            leaderRemark?: string;
            remark?: string;
            score?: number;
            scoreDisplay?: string;
            selfScoreDisplay?: string;
            cycleScoreDisplay?: string;
            leaderScoreDisplay?: string;
            tableName?: string;
            selfApplyTime?: string;
            leaderFirstApplyTime?: string;
            leaderApplyTime?: string;
            pubTime?: string;
            selfScoreTime?: string;
            leaderScoreTime?: string;
            hrConfirmTime?: string;
            faceTime?: string;
            doneTime?: string;
            needStaff?: number;
            needCycle?: number;
            cycleFinish?: number;
            cycleFinishType?: number;
            postConfigDetail?: string;
            coefficient?: number;
            postTableConfigList?: components[][][];
        };
        ServiceResultListGetCurrentDeptStaffVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        WorkOrderDTO: {
            current: number;
            size: number;
            search?: string;
            type?: number;
            classifyName?: string;
            submitName?: string;
            urgentFlag?: number[];
            handlerName?: string;
            completeFlag?: boolean[];
            status?: number[];
            classifyId?: string[];
        };
        HrmSearchDTO: {
            typeCode: string;
            search?: string;
        };
        OvertimeCalculateRuleModify: {
            isDeductBreakTime?: boolean;
            deductType?: number;
            breakTimePeriods?: components[][][];
            deductRules?: components[][][];
            beginOvertimeAfterWork: number;
            minOvertime: number;
            maxOvertime: number;
        };
        DayOffClockSettingCreate: {
            version?: number;
            alternateMode?: number;
            minClockIntervalMinutes?: number;
        };
        ServiceResultAppraiseDeptConfig: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultAppraiseDeptSummaryVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListAppraiseStaffProject: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        WorkOrderCreateDTO: {
            classifyId?: string;
            content?: string;
            urgencyLevel?: number;
            expectedCompletionTime?: string;
            attachments?: components[][][];
        };
        WorkOrderRecordsVO: {
            recordContent?: string;
            paramName?: string;
            oldValue?: string;
            newValue?: string;
            remark?: string;
            status?: number;
            createBy?: string;
            createByName?: string;
            createByPhoto?: string;
            createByDept?: string;
            handlerId?: string;
            handlerName?: string;
            handlerPhoto?: string;
            handlerDept?: string;
            createTime?: string;
        };
        WorkOrderCollaboratorVO: {
            collaboratorId?: string;
            collaboratorName?: string;
            collaboratorDept?: string;
            collaboratorPhoto?: string;
        };
        MapDatePermissionRelationDetailVO: {
            ?: components[][];
        };
        OvertimeAccountingRuleModify: {
            accountingMethod?: number;
            ratio?: number;
            effectiveMethod?: number;
            delayDays?: number;
            validDays?: number;
        };
        SpecialClockDateSettingCreate: {
            mode?: number;
            date?: string;
            repetitiveMode?: number;
            expirationDate?: string;
            beginDate?: string;
            endDate?: string;
            shiftIds?: number[];
            remark?: string;
        };
        WorkOrderEditDTO: {
            id?: string;
            classifyId?: string;
            content?: string;
            urgencyLevel?: number;
            expectedCompletionTime?: string;
            resubmitFlag?: boolean;
            attachments?: components[][][];
        };
        WorkOrderDetailVO: {
            id?: string;
            content?: string;
            handlerId?: string;
            handlerName?: string;
            classifyId?: string;
            classifyName?: string;
            urgencyLevel?: number;
            expectedCompletionTime?: string;
            launchTime?: string;
            finishTime?: string;
            expediteTime?: string;
            urgencyRule?: number;
            status?: number;
            createBy?: string;
            createByName?: string;
            createByDept?: string;
            createTime?: string;
            recordList?: components[][][];
            attachments?: components[][][];
            processProgress?: components[][][];
        };
        WorkOrderAttachmentVO: {
            attachmentName?: string;
            attachmentUrl?: string;
        };
        GetCurrentStaffAllDataPermissionVO: {
            haveDataPermissionFlag?: boolean;
            enterpriseDirectorFlag?: boolean;
            dataPermission?: components[][];
        };
        OvertimeDurationModify: {
            timeUnit?: number;
            roundingMode: never;
            scale: number;
            cardinal: number;
            dayConvert2Hours: number;
        };
        ClockWaySettingCreate: {
            version: number;
            wifiEnabled: boolean;
            wifiConfigNos?: number[];
            wifiAll?: boolean;
            positionEnabled: boolean;
            positionConfigNos?: number[];
            positionAll?: boolean;
            attendanceDeviceEnabled: boolean;
            attDeviceNos?: number[];
            deviceAll?: boolean;
        };
        ServiceResultWorkOrderDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultGetCurrentStaffAllDataPermissionVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OvertimeRuleSaveROModify: {
            id: number;
            name?: string;
            overtimeType?: number;
            effectiveTimeRule?: number;
            calculationRule?: components[][];
            accountingRule?: components[][];
            durationRule?: components[][];
            beforeWorkEnabled: boolean;
            breakTimeEnabled: boolean;
            afterWorkEnabled: boolean;
        };
        LeaveClockSettingCreate: {
            version?: number;
            clockRequired?: boolean;
            leaveAdvancedMinutes?: number;
            returnDelayMinutes?: number;
        };
        DocNoticeDownloadWithSignDTO: {
            fileId: number;
            staffNo: number;
        };
        GetAllStaffByDataPermissionVO: {
            haveDataPermissionFlag?: boolean;
            modelList?: number[];
            staffList?: components[][][];
        };
        ServiceResultBoolean: {
            code?: string;
            success?: boolean;
            data?: boolean;
            message?: string;
            tid?: string;
        };
        OutworkClockSettingCreate: {
            version?: number;
            clockEnabled?: boolean;
            approvalRequired?: boolean;
            remarkRequired?: boolean;
            takePhotoRequired?: boolean;
            faceRecognitionRequired?: boolean;
            realPersonVerifyRequired?: boolean;
        };
        AppriasePostSaveDTO: {
            postId: number;
            isAssess?: number;
            leaderId?: string;
            hrId?: number;
        };
        WorkOrderAttachmentDTO: {
            attachmentName?: string;
            attachmentUrl?: string;
        };
        WorkOrderStatisticsVO: {
            total?: number;
            initiatedByMe?: number;
            myPendingHandle?: number;
            myProcessed?: number;
            myWaitConfirmComplete?: number;
        };
        DocNoticeMini: {
            id?: number;
            title?: string;
            pubTime?: string;
            deadline?: string;
        };
        ServiceResultGetAllStaffByDataPermissionVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BaseEditROModify: {
            id: number;
        };
        OvertimeRuleSettingCreate: {
            workdayEnabled?: boolean;
            workdayRuleId?: number;
            restDayEnabled?: boolean;
            restDayRuleId?: number;
            holidayEnabled?: boolean;
            holidayRuleId?: number;
        };
        AppriasePostSaveCycleDTO: {
            postId?: number;
            deptId?: number;
            cycleConfigList?: components[][][];
        };
        MeetingVO: {
            id?: string;
            classifyId?: string;
            classifyName?: string;
            hostId?: string;
            hostName?: string;
            hostPersonPhoto?: string;
            title?: string;
            localType?: number;
            specificLocal?: string;
            deptName?: string;
            status?: number;
            resolutionStatus?: number;
            meetingDate?: string;
            reminderTime?: string[];
            createBy?: string;
            createByName?: string;
            createTime?: string;
        };
        ServiceResultWorkOrderStatisticsVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DocNoticeTimeoutUnSignVO: {
            cntSum?: number;
            cntList?: components[][][];
            notices?: components[][][];
        };
        ReissueClockRuleVO: {
            id?: number;
            name?: string;
            enabled?: boolean;
            countPerPeriod?: number;
            daysLimit?: number;
            expDays?: number;
            attendanceStatus?: number[];
            remindEnabled?: boolean;
            remindDayOfMonth?: string;
        };
        MonthCycleSettingCreate: {
            monthCycle?: number;
            monthBase?: number;
            beginDayOfMonth?: number;
            endDayOfMonth?: number;
        };
        AppraiseStaffConfirmOKRDTO: {
            id?: number;
            name?: string;
            weight?: number;
        };
        AppraiseStaffTableDetailVO: {
            id?: number;
            name?: string;
            type?: number;
            createUser?: number;
            createTime?: string;
            pubTime?: string;
            updateTime?: string;
            status?: number;
            maxScore?: number;
            maxDscore?: number;
            allowApply?: number;
            allowLeaderApply?: number;
            okr?: number;
            okrWeight?: number;
            kpi?: number;
            kpiWeight?: number;
            coNo?: number;
            postId?: number;
            leaderId?: string;
            createName?: string;
            personalPhoto?: string;
            detailList?: components[][][];
            kpiList?: components[][][];
            reviseList?: components[][][];
            configList?: components[][][];
            projectId?: number;
            staffId?: number;
            staffName?: string;
            leaderStaffName?: string;
            leaderPersonalPhoto?: string;
            hrId?: number;
            hrStaffName?: string;
            hrPersonalPhoto?: string;
            tableName?: string;
            needSync?: number;
            okrList?: components[][][];
            selfScore?: number;
            cycleScore?: number;
            leaderScore?: number;
            selfRemark?: string;
            leaderRemark?: string;
            remark?: string;
            score?: number;
            scoreDisplay?: string;
            coefficient?: number;
            selfScoreDisplay?: string;
            leaderScoreDisplay?: string;
            cycleScoreDisplay?: string;
            leaderFirstApplyTime?: string;
            selfApplyTime?: string;
            leaderApplyTime?: string;
            selfScoreTime?: string;
            leaderScoreTime?: string;
            hrConfirmTime?: string;
            faceTime?: string;
            doneTime?: string;
            needStaff?: number;
            needCycle?: number;
            cycleTotalCounts?: number;
            cycleFinishCounts?: number;
            cycleFinish?: number;
            selfOkrScore?: number;
            cycleOkrScore?: number;
            selfOkrDisplay?: string;
            selfRevScore?: number;
            selfRevDisplay?: string;
            selfKpiScore?: number;
            selfKpiDisplay?: string;
            leaderRevScore?: number;
            revScore?: number;
            leaderRevDisplay?: string;
            leaderOkrScore?: number;
            leaderOkrDisplay?: string;
            leaderKpiScore?: number;
            leaderKpiDisplay?: string;
            kpiScore?: number;
            okrScore?: number;
            kpiDisplay?: string;
            okrDisplay?: string;
            revDisplay?: string;
            selfOkrScoreLevel?: string;
            cycleOkrScoreLevel?: string;
            selfKpiScoreLevel?: string;
            leaderOkrScoreLevel?: string;
            leaderKpiScoreLevel?: string;
            okrScoreLevel?: string;
            kpiScoreLevel?: string;
        };
        PageMeetingVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        WorkOrderUpdateUrgencyLevelDTO: {
            id?: string;
            urgencyLevel?: number;
        };
        WorkOrderProcessProgressVO: {
            status?: number;
            date?: string;
            userId?: string;
            userName?: string;
            userPhoto?: string;
        };
        ServiceResultDocNoticeTimeoutUnSignVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        PageReissueClockRuleVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        VerificationRuleCreate: {
            version?: number;
            takePhotoRequired: boolean;
            faceRecognitionRequired: boolean;
            realPersonVerifyRequired: boolean;
        };
        AppraiseStaffConfirmCheckDTO: {
            id?: number;
            name?: string;
            weight?: number;
            target?: number;
            selfConfirm?: number;
            leaderConfirm?: number;
        };
        ServiceResultAppraiseStaffTableDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultPageMeetingVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkOrderUpdateStatusDTO: {
            id?: string;
            status?: number;
            remark?: string;
        };
        WorkOrderStatisticsByStatusVO: {
            total?: number;
            pending?: number;
            progressing?: number;
            finish?: number;
            completed?: number;
            close?: number;
        };
        ServiceResultPageReissueClockRuleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OutOfScopeClockSettingCreate: {
            version?: number;
            outOfScopeEnabled: boolean;
            clockStatus?: number;
        };
        AppraiseStaffConfirmDTO: {
            id?: number;
            orkItemList?: components[][][];
            checkItemList?: components[][][];
        };
        MeetingDTO: {
            current: number;
            size: number;
            search?: string;
            startTime?: string;
            endTime?: string;
            status?: number;
            myCreate?: boolean;
            classifyId?: string;
        };
        WorkOrderForwardDTO: {
            id?: string;
            newHandlerId?: string;
            remark?: string;
        };
        ServiceResultWorkOrderStatisticsByStatusVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BasePageQueryRO: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
        };
        StaffSelectionConditionEdit: {
            type?: number;
            operator?:  | ;
            data?: components[][][];
        };
        HrAttendanceGroupSaveROCreate: {
            id?: number;
            name: string;
            groupType: number;
            restDayRule?: number;
            firstBiWeeklyDayOff?: string;
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
            effectiveDate: string;
            conflictStrategy?: never;
            selectionForm: components[][];
        };
        MeetingAttachmentVO: {
            id?: string;
            attachmentName?: string;
            attachmentUrl?: string;
        };
        HrCompanySummaryVO: {
            id?: number;
            name?: string;
            aliasName?: string;
            creditCode?: string;
            isDefault?: boolean;
            isAdmin?: boolean;
            lastLoginTime?: string;
            softVersionId?: number;
            logo?: string;
            enabled?: boolean;
            deptName?: string;
            positionName?: string;
        };
        ServiceResultReissueClockRuleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrAttendanceGroupSaveROEdit: {
            id?: number;
            name?: string;
            groupType?: number;
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            monthCycleSetting?: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
            staffSelectionRules: components[][][];
        };
        StaffNameIdPicVO: {
            id?: number;
            coNo?: number;
            staffName?: string;
            personalPhoto?: string;
            deptName?: string;
            postName?: string;
        };
        MeetingParticipantVO: {
            deptName?: string[];
            participantList?: components[][][];
        };
        ReissueClockRuleSaveROEdit: {
            coNo?: number;
            id?: number;
            version?: number;
            name?: string;
            type?: number;
            enabled?: boolean;
            countPerPeriod?: number;
            daysLimit?: number;
            expDays?: number;
            attendanceStatus?: number[];
            remindEnabled?: boolean;
            remindDayOfMonth?: string;
        };
        AttDimensionDataModify: {
            dimensionType?: number;
            dimensionValue?: number;
        };
        MeetingResolutionVO: {
            id?: string;
            resoluteContent?: string;
        };
        ReissueClockRuleSaveROModify: {
            id: number;
            version?: number;
            name?: string;
            enabled?: boolean;
            countPerPeriod?: number;
            daysLimit?: number;
            expDays?: number;
            attendanceStatus?: number[];
            remindEnabled?: boolean;
            remindDayOfMonth?: string;
        };
        AttStaffDimensionDataModify: {
            staffNo?: number;
            dimensionDataList?: components[][][];
        };
        MeetingDetailVO: {
            id?: string;
            classifyId?: string;
            hostId?: string;
            classifyName?: string;
            title?: string;
            content?: string;
            localType?: number;
            specificLocal?: string;
            meetingDate?: string;
            showTipFlag?: boolean;
            status?: number;
            resolutionStatus?: number;
            resolutionApprovalStatus?: number;
            reminderTime?: string[];
            createBy?: string;
            createTime?: string;
            attachmentList?: components[][][];
            participant?: components[][];
            cc?: components[][];
            summary?: components[][];
            resolutionApprover?: components[][];
            resolutionList?: components[][][];
        };
        ClockErrorLogVO: {
            id?: number;
            clockTime?: string;
            clockWay?: number;
            address?: string;
            errorType?: number;
            remark?: string;
            status?: number;
            processStatus?: number;
        };
        ServiceResultMeetingDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListClockErrorLogVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        MeetingAttachmentDTO: {
            attachmentName?: string;
            attachmentUrl?: string;
        };
        ClockLogVO: {
            clockInTime?: string;
        };
        MeetingParticipantDTO: {
            meetingId?: string;
            participantId?: string;
            type?: number;
        };
        WorkOrderConfirmDTO: {
            id?: string;
            confirmFlag?: boolean;
            remark?: string;
            attachments?: components[][][];
        };
        ServiceResultListClockLogVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        MeetingResolutionDTO: {
            meetingId?: string;
            resoluteContent?: string;
            resoluteContentText?: string;
        };
        MeetingCreateDTO: {
            classifyId?: string;
            title?: string;
            content?: string;
            localType?: number;
            specificLocal?: string;
            meetingDate?: string;
            status?: number;
            reminderTime?: string[];
            createTeamCalendarFlag?: boolean;
            attachmentList?: components[][][];
            participantList?: string[];
            ccList?: string[];
            summaryList?: string[];
            resolutionApprover?: string[];
        };
        ClockLogQueryROQuery: {
            coNo?: number;
            currentStaff?: components[][];
            date?: string;
        };
        MeetingEditDTO: {
            id?: string;
            classifyId?: string;
            title?: string;
            content?: string;
            localType?: number;
            specificLocal?: string;
            meetingDate?: string;
            status?: number;
            createTeamCalendarFlag?: boolean;
            reminderTime?: string[];
            attachmentList?: components[][][];
            participantList?: string[];
            ccList?: string[];
            summaryList?: string[];
            resolutionApprover?: string[];
        };
        VacationMissClockInfo: {
            flowId?: string;
            missClockType?: number[];
        };
        MeetingAttachmentEditDTO: {
            meetingId?: string;
            attachmentList?: components[][][];
        };
        AttendanceTimePeriodVO: {
            groupNo?: number;
            beginTime?: string;
            endTime?: string;
            requiredAttHours?: number;
            clockAttMinutes?: number;
            actualAttMinutes?: number;
            isAbsence?: boolean;
            isLate?: boolean;
            isLeaveEarly?: boolean;
            isVacation?: boolean;
            isTravel?: boolean;
            isMissClockIn?: boolean;
            isMissClockOut?: boolean;
            lateMinutes?: number;
            leaveEarlyMinutes?: number;
            vacationAttendanceMinutes?: number;
            absenceMinutes?: number;
            vacationMinutes?: number;
            travelMinutes?: number;
            clockInDetailId?: number;
            clockInMode?: number;
            clockInTime?: string;
            clockOutDetailId?: number;
            clockOutMode?: number;
            clockOutTime?: string;
        };
        MeetingResolutionEditDTO: {
            id?: string;
            resolute?: string;
            resoluteText?: string;
        };
        ShiftAccountVO: {
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
            beginTime?: string;
            endTime?: string;
            scheduleStatus?: number;
            requiredAttHours?: number;
            requiredAttDays?: number;
            clockAttHours?: number;
            actualAttHours?: number;
            actualAttDays?: number;
            isAbsence?: boolean;
            isLate?: boolean;
            isLeaveEarly?: boolean;
            isVacation?: boolean;
            isTravel?: boolean;
            isMissClock?: boolean;
            isMissClockVacation?: boolean;
            vacationMissClockInfo?: components[][][];
            lateMinutes?: number;
            leaveEarlyMinutes?: number;
            vacationAttendanceMinutes?: number;
            absenceMinutes?: number;
            vacationHours?: number;
            earliestClockTime?: string;
            latestClockTime?: string;
            timePeriods?: components[][][];
        };
        MeetingParticipantEditDTO: {
            meetingId?: string;
            participantList?: string[];
            ccList?: string[];
            summaryList?: string[];
            resolutionApprover?: string[];
        };
        DeptPositionItem: {
            type?: number;
            autoNo?: number;
        };
        OKRShowStyleDTO: {
            showType?: number;
            okrLimit?: number;
            okrScore?: number;
            orkConfigList?: components[][][];
        };
        AttendanceDayVO: {
            date?: string;
            dayType?: number;
            groupType?: number;
            isAccount?: boolean;
            dailyShifts?: components[][][];
        };
        RefIdDetail: {
            deptPositions?: components[][][];
        };
        WorkPlanGroupVO: {
            id?: string;
            parentId?: string;
            name?: string;
            dataType?: number;
            workPlanList?: components[][][];
            children?: components[][][];
        };
        SelectionConditionModify: {
            type?:  |  |  |  |  |  |  |  | ;
            operator?:  |  |  |  | ;
            data?: components[][][];
        };
        StaffMonthCalendarVO: {
            requiredAttDays?: number;
            actualAttDays?: number;
            missClockCount?: number;
            travelCount?: number;
            vacationHours?: number;
            year?: number;
            month?: number;
            beginDate?: string;
            endDate?: string;
            overtimeHours?: number;
            days?: components[][][];
        };
        AppraiseTableVO1: {
            name?: string;
            type?: number;
            status?: number;
        };
        MapBigDecimal: {
            key?: number;
        };
        DistributionDetailItem: {
            id?: string;
            value?: number;
        };
        WorkPlanListGroupVO: {
            userId?: string;
            userName?: string;
            userPhoto?: string;
            userDept?: string;
            userPosition?: string;
            workPlanGroupList?: components[][][];
        };
        StaffSelectionConditionDataModify: {
            id?: number;
            conditions?: components[][][];
        };
        ServiceResultStaffMonthCalendarVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        DistributionDetail: {
            gradeRatio?: components[][];
        };
        ServiceResultListWorkPlanListGroupVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        TimeSlot: {
            start?: string;
            end?: string;
        };
        StaffSelectionConditionModify: {
            type?:  |  |  | ;
            operator?:  | ;
            data?: components[][][];
        };
        MeetingParticipantDetailVO: {
            id?: string;
            participantId?: string;
            participantName?: string;
            photo?: string;
            deptId?: string;
            deptName?: string;
            positionId?: string;
            positionName?: string;
            type?: number;
        };
        RealTimePeriodClockInfoVO: {
            groupNo?: number;
            beginTime?: string;
            endTime?: string;
            isVacation?: boolean;
            isTravel?: boolean;
            clockInStatus?: never;
            clockOutStatus?: never;
        };
        HrAttendanceGroupSaveROModify: {
            id: number;
            name: string;
            groupType: number;
            restDayRule?: number;
            firstBiWeeklyDayOff?: string;
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
            effectiveDate: string;
            conflictStrategy?: never;
            selectionForm: components[][];
        };
        ServiceResultAppraiseConfigForcedRule: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanExecutorVO: {
            id?: string;
            name?: string;
        };
        ShiftClockInfoVO: {
            shiftName?: string;
            shiftColor?: string;
            beginTime?: string;
            endTime?: string;
            isVacation?: boolean;
            isTravel?: boolean;
            timePeriods?: components[][][];
        };
        MeetingCalendarStatusVO: {
            date?: string;
            haveMeeting?: boolean;
        };
        RealTimeClockInfoVO: {
            date?: string;
            dayType?: number;
            groupType?: number;
            isFullTime?: boolean;
            isDayOff?: boolean;
            clockDetails?: components[][][];
            shiftClockInfo?: components[][];
        };
        AttEditROModify: {
            id: number;
        };
        ServiceResultListMeetingCalendarStatusVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultRealTimeClockInfoVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        GroupMigrationROCreate: {
            id?: number;
            sourceGroupIds: number[];
            targetGroupId: number;
        };
        PageWorkPlanListDetailVO: {
            records: components[][][];
            total: number;
            size: number;
            current: number;
            orders: components[][][];
            optimizeCountSql: boolean;
            searchCount: boolean;
            optimizeJoinOfCountSql: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultPageWorkPlanListDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        MapListForceStaffProject: {
            key?: components[][][];
        };
        DimensionValue: {
            dimensionValue?: number;
            dimensionValueName?: string;
        };
        GroupCalendarDateModifyROModify: {
            groupId: number;
            date: string;
            dayType: never;
        };
        Dimension: {
            dimensionName?: string;
            oldDimensionValues?: components[][][];
            newDimensionValues?: components[][][];
        };
        WorkPlanDeleteDTO: {
            id?: string;
            executorIdList?: string[];
        };
        StaffGroupChangeVO: {
            groupName?: string;
            changeDimensions?: components[][][];
            staffList?: components[][][];
        };
        StaffFollowDTO: {
            followUserId?: string;
            followFlag?: boolean;
            type?: number;
        };
        GroupPreSaveVO: {
            groupChangeList?: components[][][];
            unblockStaffs?: components[][][];
        };
        WorkPlanProcessRecordVO: {
            content?: string;
            createTime?: string;
        };
        ServiceResultGroupPreSaveVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffDimensionDataEdit: {
            name?: string;
            value?: number;
        };
        ScopeDimensionFormLineEdit: {
            type?: number;
            operator?:  | ;
            data?: components[][][];
        };
        MeetingUpdateStatusDTO: {
            id?: string;
            status?: number;
        };
        ServiceResultWorkPlanListDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanUpdateExecuteTimeDTO: {
            workPlanId?: string;
            recordId?: string;
            startDate?: string;
            endDate?: string;
        };
        AppraiseForceDeptVO: {
            versionId?: number;
            deptVOList?: components[][][];
        };
        ServiceResultAppraiseForceDeptVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        WorkPlanFollowDTO: {
            workPlanId?: string;
            followFlag?: boolean;
        };
        WorkPlanMoveDTO: {
            recordIdList?: string[];
        };
        MeetingResolutionApprovalDTO: {
            meetingId?: string;
            status?: number;
        };
        MeetingResolutionSubmitApprovalDTO: {
            meetingId?: string;
            resolutionApprover?: string[];
        };
        MeetingStatisticsVO: {
            date?: string;
            count?: number;
        };
        ServiceResultListMeetingStatisticsVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        WorkPlanEditDirectorDTO: {
            id?: string;
            directorId?: string;
        };
        ShiftInfoVO: {
            created?: string;
            updated?: string;
            creator?: string;
            updater?: string;
            id?: number;
            name?: string;
            color?: string;
            beginTime?: string;
            endTime?: string;
        };
        WorkPlanTopProjectDTO: {
            workPlanId?: string;
            topFlag?: boolean;
        };
        GroupWorkDayShift: {
            dayOfWeek?: number;
            shift?: components[][];
        };
        AttendanceGroupSummaryInfoVO: {
            id?: number;
            name?: string;
            groupType?: number;
            workDays?: components[][][];
            staffCount?: number;
        };
        PageAttendanceGroupSummaryInfoVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        AppraiseStaffTargetListVO: {
            staff?: components[][];
            year?: number;
            itemId?: number;
            itemName?: string;
            unit?: string;
            monthTargetList?: components[][][];
        };
        ServiceResultPageAttendanceGroupSummaryInfoVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultListAppraiseStaffTargetListVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        AttendanceGroupQueryQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
            groupType?: number;
            name?: string;
        };
        StaffDimensionDataModify: {
            name?: string;
            value?: string;
        };
        WorkdayShiftSetting: {
            dayOfWeek?: number;
            shiftId?: number;
        };
        ScopeDimensionFormLineModify: {
            type?: number;
            operator?:  | ;
            data?: components[][][];
        };
        ShiftScheduleSetting: {
            changeShiftEnabled?: boolean;
            shiftChooseEnabled?: boolean;
            autoAlignShiftEnabled?: boolean;
            customScheduleEnabled?: boolean;
        };
        DayOffClockSetting: {
            version?: number;
            alternateMode?: number;
            minClockIntervalMinutes?: number;
        };
        SpecialClockDateSetting: {
            mode?: number;
            date?: string;
            repetitiveMode?: number;
            expirationDate?: string;
            beginDate?: string;
            endDate?: string;
            shiftIds?: number[];
            remark?: string;
        };
        ClockWaySetting: {
            version?: number;
            wifiEnabled?: boolean;
            wifiConfigNos?: number[];
            wifiAll?: boolean;
            positionEnabled?: boolean;
            positionConfigNos?: number[];
            positionAll?: boolean;
            attendanceDeviceEnabled?: boolean;
            attDeviceNos?: number[];
            deviceAll?: boolean;
        };
        LeaveClockSetting: {
            version?: number;
            clockRequired?: boolean;
            leaveAdvancedMinutes?: number;
            returnDelayMinutes?: number;
        };
        OutworkClockSetting: {
            version?: number;
            clockEnabled?: boolean;
            approvalRequired?: boolean;
            remarkRequired?: boolean;
            takePhotoRequired?: boolean;
            faceRecognitionRequired?: boolean;
            realPersonVerifyRequired?: boolean;
        };
        OvertimeRuleSetting: {
            workdayEnabled?: boolean;
            workdayRuleId?: number;
            restDayEnabled?: boolean;
            restDayRuleId?: number;
            holidayEnabled?: boolean;
            holidayRuleId?: number;
        };
        MonthCycleSetting: {
            monthCycle?: number;
            monthBase?: number;
            beginDayOfMonth?: number;
            endDayOfMonth?: number;
        };
        VerificationRule: {
            version?: number;
            takePhotoRequired: boolean;
            faceRecognitionRequired: boolean;
            realPersonVerifyRequired: boolean;
        };
        OutOfScopeClockSetting: {
            version?: number;
            outOfScopeEnabled: boolean;
            clockStatus?: number;
        };
        BngUserQuery: {
            userId?: number;
            departmentNo?: number;
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
            coNo?: number;
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
        };
        AttendanceGroupDetailVO: {
            id?: number;
            coNo?: number;
            name?: string;
            groupType?: number;
            deptNos?: number[];
            staffNos?: number[];
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            monthCycleSetting?: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
        };
        BngVersionPackageQuery: {
            id?: number;
            coNo?: number;
            softId?: number;
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
            adminUser?: components[][][];
        };
        ServiceResultAttendanceGroupDetailVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OrderLogQuery: {
            id?: number;
            orderNo?: string;
            productName?: string;
            quantity?: string;
            unitPrice?: number;
            totalPrice?: number;
            operateTime?: string;
            remark?: string;
            coNo?: number;
            softId?: number;
            softName?: string;
            versionName?: string;
            softVersion?: number;
        };
        WorkdayShiftSettingEdit: {
            dayOfWeek?: number;
            shiftId?: number;
        };
        BngCompanySoftQuery: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            versionName?: string;
            type?: number;
            coNo?: number;
            enabled?: number;
            trialFlag?: number;
            trialDays?: number;
            trialVerOverLimit?: number;
            authorizedTime?: string;
            softExpense?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            url?: string;
            ts?: string;
            remaining?: number;
            companyName?: string;
            contactTel?: string;
            contactEmail?: string;
            name?: string;
            expireDays?: number;
            feeType?: string;
            isFirstBuy?: number;
            feeStrategyId?: number;
            feeStrategyList?: Record<string, never>[];
            salePrice?: number;
        };
        ShiftScheduleSettingEdit: {
            changeShiftEnabled?: boolean;
            shiftChooseEnabled?: boolean;
            autoAlignShiftEnabled?: boolean;
            customScheduleEnabled?: boolean;
        };
        BngCompanyQuery: {
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
            registerSoftId?: number;
            bngVersionPackage?: components[][][];
            logs?: components[][][];
            versionId?: number;
            softId?: number;
            defaultCo?: number;
        };
        DayOffClockSettingEdit: {
            version?: number;
            alternateMode?: number;
            minClockIntervalMinutes?: number;
        };
        LoginCacheQuery: {
            errorTimes?: number;
            userId?: number;
            token?: string;
            bngUser?: components[][];
            lastLoginTime?: string;
            companyList?: components[][][];
            currentBngCompany?: components[][];
            currentSoftId?: number;
            currentSoftVersionId?: number;
            coNo?: number;
            isAdmin?: number;
            showCompanyList?: number;
        };
        SpecialClockDateSettingEdit: {
            mode?: number;
            date?: string;
            repetitiveMode?: number;
            expirationDate?: string;
            beginDate?: string;
            endDate?: string;
            shiftIds?: number[];
            remark?: string;
        };
        ClockWaySettingEdit: {
            version?: number;
            wifiEnabled?: boolean;
            wifiConfigNos?: number[];
            positionEnabled?: boolean;
            positionConfigNos?: number[];
            attendanceDeviceEnabled?: boolean;
        };
        LeaveClockSettingEdit: {
            version?: number;
            clockRequired?: boolean;
            leaveAdvancedMinutes?: number;
            returnDelayMinutes?: number;
        };
        OutworkClockSettingEdit: {
            version?: number;
            clockEnabled?: boolean;
            approvalRequired?: boolean;
            remarkRequired?: boolean;
            takePhotoRequired?: boolean;
            faceRecognitionRequired?: boolean;
            realPersonVerifyRequired?: boolean;
        };
        OvertimeRuleSettingEdit: {
            workdayEnabled?: boolean;
            workdayRuleId?: number;
            restDayEnabled?: boolean;
            restDayRuleId?: number;
            holidayEnabled?: boolean;
            holidayRuleId?: number;
        };
        MonthCycleSettingEdit: {
            monthCycle?: number;
            monthBase?: number;
            beginDayOfMonth?: number;
            endDayOfMonth?: number;
        };
        VerificationRuleEdit: {
            version?: number;
            takePhotoRequired: boolean;
            faceRecognitionRequired: boolean;
            realPersonVerifyRequired: boolean;
        };
        OutOfScopeClockSettingEdit: {
            version?: number;
            outOfScopeEnabled: boolean;
            clockStatus?: number;
        };
        AttendanceGroupSaveROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            name: string;
            groupType: number;
            staffDimension: components[][][];
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            monthCycleSetting: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
        };
        WorkdayShiftSettingModify: {
            dayOfWeek?: number;
            shiftId?: number;
        };
        ShiftScheduleSettingModify: {
            changeShiftEnabled?: boolean;
            shiftChooseEnabled?: boolean;
            autoAlignShiftEnabled?: boolean;
            customScheduleEnabled?: boolean;
        };
        DayOffClockSettingModify: {
            version?: number;
            alternateMode?: number;
            minClockIntervalMinutes?: number;
        };
        SpecialClockDateSettingModify: {
            mode?: number;
            date?: string;
            repetitiveMode?: number;
            expirationDate?: string;
            beginDate?: string;
            endDate?: string;
            shiftIds?: number[];
            remark?: string;
        };
        ClockWaySettingModify: {
            version: number;
            wifiEnabled: boolean;
            wifiConfigNos?: number[];
            wifiAll?: boolean;
            positionEnabled: boolean;
            positionConfigNos?: number[];
            positionAll?: boolean;
            attendanceDeviceEnabled: boolean;
            attDeviceNos?: number[];
            deviceAll?: boolean;
        };
        LeaveClockSettingModify: {
            version?: number;
            clockRequired?: boolean;
            leaveAdvancedMinutes?: number;
            returnDelayMinutes?: number;
        };
        OutworkClockSettingModify: {
            version?: number;
            clockEnabled?: boolean;
            approvalRequired?: boolean;
            remarkRequired?: boolean;
            takePhotoRequired?: boolean;
            faceRecognitionRequired?: boolean;
            realPersonVerifyRequired?: boolean;
        };
        OvertimeRuleSettingModify: {
            workdayEnabled?: boolean;
            workdayRuleId?: number;
            restDayEnabled?: boolean;
            restDayRuleId?: number;
            holidayEnabled?: boolean;
            holidayRuleId?: number;
        };
        MonthCycleSettingModify: {
            monthCycle?: number;
            monthBase?: number;
            beginDayOfMonth?: number;
            endDayOfMonth?: number;
        };
        VerificationRuleModify: {
            version?: number;
            takePhotoRequired: boolean;
            faceRecognitionRequired: boolean;
            realPersonVerifyRequired: boolean;
        };
        OutOfScopeClockSettingModify: {
            version?: number;
            outOfScopeEnabled: boolean;
            clockStatus?: number;
        };
        AttendanceGroupSaveROModify: {
            coNo?: number;
            id: number;
            currentUser?: components[][];
            name: string;
            groupType: number;
            staffDimension: components[][][];
            workdaySetting?: components[][][];
            shiftNos?: number[];
            shiftScheduleSetting?: components[][];
            restOnHolidays: boolean;
            dayOffClockSetting?: components[][];
            mustClockSettings?: components[][][];
            undesiredClockSettings?: components[][][];
            clockWaySetting?: components[][];
            reissueClockRuleId?: number;
            leaveClockSetting?: components[][];
            outworkClockSetting?: components[][];
            overtimeRuleSetting?: components[][];
            monthCycleSetting: components[][];
            verificationRule?: components[][];
            outOfScopeClockSetting?: components[][];
        };
        StaffInfoVO: {
            staffNo?: number;
            staffName?: string;
            deptName?: string;
            staffNumber?: string;
        };
        PageStaffInfoVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultPageStaffInfoVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ServiceResultInteger: {
            code?: string;
            success?: boolean;
            data?: number;
            message?: string;
            tid?: string;
        };
        GroupMigrationROEdit: {
            id?: number;
            sourceGroupIds?: number[];
            targetGroupId?: number;
        };
        OptionalShift: {
            date?: string;
            dayType?: number;
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
            shiftBeginTime?: string;
            shiftEndTime?: string;
            optional?: boolean;
        };
        ClockVO: {
            isNeedConfirm?: boolean;
            optionalShifts?: components[][][];
        };
        ServiceResultClockVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        HrmStaffBaseInfoEdit: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            identityType?: number;
            identityCard?: string;
            gender?: number;
            birthday?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            boardDate?: string;
            staffStatus?: number;
            userId?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            isDeleted?: number;
            ts?: string;
            personalPhoto?: string;
            planRegularDate?: string;
            currentCompany?: components[][];
            loginCache?: components[][];
        };
        ClockROEdit: {
            coNo?: number;
            currentStaff?: components[][];
            latitude?: number;
            longitude?: number;
            address?: string;
            device?: string;
            clockWay: number;
            faceBase64Img?: string;
            photoBase64Img?: string;
            isForceClock: boolean;
            isSpecifyClock: boolean;
            date?: string;
            shiftId?: number;
        };
        ServiceResultVoid: {
            code?: string;
            success?: boolean;
            data?: null;
            message?: string;
            tid?: string;
        };
        AttendanceMachineClockROEdit: {
            coNo?: number;
            staffNumber?: string;
            sn?: string;
            clockTime?: string;
        };
        PageShiftInfoVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultPageShiftInfoVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ShiftQueryROQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
            name?: string;
        };
        BreakTimePeriodRO: {
            beginTime?: string;
            endTime?: string;
        };
        ShiftTimePeriodRO: {
            groupNo?: number;
            clockInRequired?: boolean;
            clockOutRequired?: boolean;
            periodBeginTime?: string;
            clockInBeginTime?: string;
            clockInEndTime?: string;
            periodEndTime?: string;
            clockOutBeginTime?: string;
            clockOutEndTime?: string;
            breakTimePeriods?: components[][][];
        };
        ShiftTimePeriodSeason: {
            season?: number;
            timePeriods?: components[][][];
        };
        HalfDayWorkTimeSetting: {
            am?: components[][];
            pm?: components[][];
        };
        FlexibleTimeSetting: {
            advanceMinutes?: number;
            lateMinutes?: number;
        };
        FlexibleClockSetting: {
            version: number;
            flexibleMode: number;
            flexibleTimeSetting?: components[][];
            leaveLateArriveLateEnabled?: boolean;
            leaveLateArriveLateTimeSetting?: components[][][];
            modeOfAction?: number;
        };
        ShiftVO: {
            id?: number;
            name?: string;
            timePeriodSeasons?: components[][][];
            workHours?: number;
            hoursToDay?: number;
            absentLateMinutes?: number;
            halfDayWorkTimeSetting?: components[][];
            color?: string;
            isDivisiveSeason?: boolean;
            summerMonth?: number[];
            winterMonth?: number[];
            flexibleClockSetting?: components[][];
        };
        ServiceResultShiftVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BreakTimePeriodROEdit: {
            beginTime: string;
            endTime: string;
        };
        ShiftTimePeriodROEdit: {
            groupNo?: number;
            clockInRequired: boolean;
            clockOutRequired: boolean;
            periodBeginTime: string;
            clockInBeginTime?: string;
            clockInEndTime?: string;
            periodEndTime: string;
            clockOutBeginTime?: string;
            clockOutEndTime?: string;
            breakTimePeriods?: components[][][];
        };
        ShiftTimePeriodSeasonEdit: {
            season?: number;
            timePeriods?: components[][][];
        };
        HalfDayWorkTimeSettingEdit: {
            am?: components[][];
            pm?: components[][];
        };
        FlexibleTimeSettingEdit: {
            advanceMinutes?: number;
            lateMinutes?: number;
        };
        FlexibleClockSettingEdit: {
            version: number;
            flexibleMode: number;
            flexibleTimeSetting?: components[][];
            leaveLateArriveLateEnabled?: boolean;
            leaveLateArriveLateTimeSetting?: components[][][];
            modeOfAction?: number;
        };
        ShiftSaveROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            name: string;
            timePeriodSeasons: components[][][];
            workHours?: number;
            hoursToDay: number;
            absentLateMinutes?: number;
            halfDayWorkTimeSetting: components[][];
            color?: string;
            isDivisiveSeason: boolean;
            summerMonth?: number[];
            winterMonth?: number[];
            flexibleClockSetting: components[][];
        };
        BreakTimePeriodROModify: {
            beginTime: string;
            endTime: string;
        };
        ShiftTimePeriodROModify: {
            groupNo?: number;
            clockInRequired: boolean;
            clockOutRequired: boolean;
            periodBeginTime: string;
            clockInBeginTime?: string;
            clockInEndTime?: string;
            periodEndTime: string;
            clockOutBeginTime?: string;
            clockOutEndTime?: string;
            breakTimePeriods?: components[][][];
        };
        ShiftTimePeriodSeasonModify: {
            season?: number;
            timePeriods?: components[][][];
        };
        HalfDayWorkTimeSettingModify: {
            am?: components[][];
            pm?: components[][];
        };
        FlexibleTimeSettingModify: {
            advanceMinutes?: number;
            lateMinutes?: number;
        };
        FlexibleClockSettingModify: {
            version: number;
            flexibleMode: number;
            flexibleTimeSetting?: components[][];
            leaveLateArriveLateEnabled?: boolean;
            leaveLateArriveLateTimeSetting?: components[][][];
            modeOfAction?: number;
        };
        ShiftSaveROModify: {
            id: number;
            name: string;
            timePeriodSeasons: components[][][];
            workHours?: number;
            hoursToDay: number;
            absentLateMinutes?: number;
            halfDayWorkTimeSetting: components[][];
            color?: string;
            isDivisiveSeason: boolean;
            summerMonth?: number[];
            winterMonth?: number[];
            flexibleClockSetting: components[][];
        };
        GroupBaseInfo: {
            id?: number;
            name?: string;
            groupType?: number;
        };
        ServiceResultListGroupBaseInfo: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ShiftSummaryInfoVO: {
            shiftId?: number;
            shiftName?: string;
            shiftColor?: string;
        };
        ShiftCycleVO: {
            id?: number;
            name?: string;
            daysNum?: number;
            cycle?: components[][][];
        };
        ServiceResultListShiftCycleVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ShiftCycleQueryROQuery: {
            coNo?: number;
            groupId?: number;
        };
        ServiceResultShiftCycleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        ShiftCycleSaveROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            groupId: number;
            name: string;
            cycle: number[];
        };
        ShiftCycleSaveROModify: {
            coNo?: number;
            id: number;
            currentUser?: components[][];
            groupId?: number;
            name?: string;
            cycle?: number[];
        };
        ScheduleCalendar: {
            dayOfMonth?: number;
            dayOfWeek?: number;
            date?: string;
            dayType?: never;
            isDayOff?: boolean;
            scheduleShift?: components[][];
            changeShiftInfo?: components[][];
        };
        StaffShiftScheduleVO: {
            staffNo?: number;
            staffName?: string;
            scheduleCalendars?: components[][][];
        };
        PageStaffShiftScheduleVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultPageStaffShiftScheduleVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffScheduleCalendarQueryROQuery: {
            coNo?: number;
            current: number;
            size: number;
            sorter?: string;
            orderBy?: string;
            queryType?: number;
            year?: number;
            month?: number;
            beginDate?: string;
            endDate?: string;
            deptNo?: number;
            staffNos?: number[];
        };
        BasePageQueryROQuery: {
            current: number;
            size: number;
            search?: string;
            order?: components[][][];
        };
        ShiftScheduleFailedMessage: {
            staffNo?: number;
            staffName?: string;
            date?: string;
            errorMsg?: string;
        };
        ShiftScheduleResultVO: {
            failedList?: components[][][];
            staffSchedules?: components[][][];
        };
        ServiceResultShiftScheduleResultVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        StaffScheduleDataEdit: {
            staffNo: number;
            dateList: string[];
        };
        ManualScheduleROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            scheduleData: components[][][];
            shiftId: number;
        };
        CycleShiftScheduleROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            staffNo: number;
            year: number;
            month: number;
            beginDate: string;
            shiftCycleId: number;
        };
        CopyShiftScheduleROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            year: number;
            month: number;
            staffNos: number[];
        };
        CustomScheduleROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            staffNo: number;
            shiftId: number;
            date: string;
            periods: components[][][];
        };
        ShiftScheduleCleanROEdit: {
            coNo?: number;
            id?: number;
            currentUser?: components[][];
            staffNo: number;
            date: string;
        };
        AttendanceDay: {
            date?: string;
            dayType?: never;
            remark?: string;
        };
        MonthCalendar: {
            month?: number;
            workdaysNum?: number;
            beginDate?: string;
            endDate?: string;
            days?: components[][][];
        };
        GroupCalendarVO: {
            year?: number;
            monthCalendarList?: components[][][];
        };
        ServiceResultGroupCalendarVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        GroupCalendarQueryROQuery: {
            groupId: number;
            year?: number;
        };
        BaseQuerySimpleDTO: {
            current: number;
            size: number;
            search?: string;
        };
        BngRole: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            name?: string;
            title?: string;
            type?: number;
            decryptFieldIds?: string;
            dataRangeNo?: number;
            dataRangeName?: string;
            customDeptIds?: string;
            customUserIds?: string;
            remark?: string;
            enabled?: number;
            defaultFlag?: number;
            fixedFlag?: number;
            coNo?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            ts?: string;
        };
        ServiceResultHrmStaffBaseInfo: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        BngPower: {
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
            coNo?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            ts?: string;
            isChecked?: number;
        };
        BngMenu: {
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
            descs?: string;
            isDefault?: number;
            isApp?: number;
            isChecked?: number;
            children?: components[][][];
            powerList?: components[][][];
            appNames?: string[];
        };
        UserRoleMenusDTO: {
            bngRoles?: components[][][];
            bngPowers?: components[][][];
            bngMenus?: components[][][];
        };
        RoleDateRangeVO: {
            unionKey?: string;
            title?: string;
            type?: number;
            pic?: string;
            autoNo?: number;
        };
        ServiceResultUserRoleMenusDTO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        RoleDeptStaffVO: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            name?: string;
            title?: string;
            type?: number;
            decryptFieldIds?: string;
            dataRangeNo?: number;
            dataRangeName?: string;
            customDeptIds?: string;
            customUserIds?: string;
            remark?: string;
            enabled?: number;
            defaultFlag?: number;
            fixedFlag?: number;
            coNo?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            ts?: string;
            dateRangeList?: components[][][];
        };
        ServiceResultListRoleDeptStaffVO: {
            code?: string;
            success?: boolean;
            errorCode?: number;
            message?: string;
            data?: components[][][];
        };
        ExchangeCompanyDTO: {
            mobile?: string;
            updateUser?: string;
            coNo?: number;
        };
        RoleDeptStaff: {
            roleId?: number;
            deptId?: number;
            coNo?: number;
            staffId?: number;
        };
        BngRoleDTO: {
            autoNo?: number;
            softId?: number;
            versionId?: number;
            name?: string;
            title?: string;
            type?: number;
            decryptFieldIds?: string;
            dataRangeNo?: number;
            dataRangeName?: string;
            customDeptIds?: string;
            customUserIds?: string;
            remark?: string;
            enabled?: number;
            defaultFlag?: number;
            fixedFlag?: number;
            coNo?: number;
            creator?: string;
            created?: string;
            updater?: string;
            updated?: string;
            ts?: string;
            roleDeptStaffList?: components[][][];
        };
        RoleDeptStaffDTO: {
            autoNo?: number;
            type?: number;
        };
        OrgDeptTree: {
            unionKey?: string;
            childrenDept?: components[][][];
            staffList?: components[][][];
            autoNo?: number;
            pid?: number;
            name?: string;
            type: number;
            leader?: components[][];
            staffNums?: number;
            sumStaffNums?: number;
        };
        RoleStaffVO: {
            id?: number;
            coNo?: number;
            phoneNumber?: string;
            staffName?: string;
            staffNumber?: string;
            identityType?: number;
            identityCard?: string;
            gender?: number;
            birthday?: string;
            deptNo?: number;
            deptName?: string;
            positionNo?: number;
            positionName?: string;
            boardDate?: string;
            staffStatus?: number;
            userId?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            isDeleted?: number;
            ts?: string;
            personalPhoto?: string;
            planRegularDate?: string;
            unionKey?: string;
            title?: string;
        };
        OrgDeptTreeVO: {
            deptTrees?: components[][][];
        };
        ServiceResultListRoleStaffVO: {
            code?: string;
            success?: boolean;
            data?: components[][][];
            message?: string;
            tid?: string;
        };
        ServiceResultOrgDeptTreeVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
        OrgDeptTreeDTO: Record<string, never>;
        OrgEnterpriseCostCenterVO: {
            autoNo?: number;
            costCenterName?: string;
            staffNos?: string;
            remark?: string;
            isDeleted?: number;
            enabled?: number;
            coNo?: number;
            created?: string;
            creator?: string;
            updated?: string;
            updater?: string;
            staffNums?: number;
            staffBaseInfoList?: components[][][];
        };
        PageOrgEnterpriseCostCenterVO: {
            records?: components[][][];
            total?: number;
            size?: number;
            current?: number;
            orders?: components[][][];
            optimizeCountSql?: boolean;
            searchCount?: boolean;
            optimizeJoinOfCountSql?: boolean;
            maxLimit?: number;
            countId?: string;
        };
        ServiceResultPageOrgEnterpriseCostCenterVO: {
            code?: string;
            success?: boolean;
            data?: components[][];
            message?: string;
            tid?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}