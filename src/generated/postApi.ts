import { client } from "../core/genRequest/client";
import type { OperationParams, OperationResponse } from "../core/genRequest/types";
import type { GeneratedOperations } from "./operations";

export const postApi = {
  AuthLoginCheck(params: OperationParams<GeneratedOperations["post_AuthLoginCheck"]>): OperationResponse<GeneratedOperations["post_AuthLoginCheck"]> {
    return client.request("/auth/login/check", "post", params);
  },
  AuthLoginSmsCode(params: OperationParams<GeneratedOperations["post_AuthLoginSmsCode"]>): OperationResponse<GeneratedOperations["post_AuthLoginSmsCode"]> {
    return client.request("/auth/login/sms/code", "post", params);
  },
  AuthLoginSmsValidate(params: OperationParams<GeneratedOperations["post_AuthLoginSmsValidate"]>): OperationResponse<GeneratedOperations["post_AuthLoginSmsValidate"]> {
    return client.request("/auth/login/sms/validate", "post", params);
  },
  AuthLogin(params: OperationParams<GeneratedOperations["post_AuthLogin"]>): OperationResponse<GeneratedOperations["post_AuthLogin"]> {
    return client.request("/auth/login", "post", params);
  },
  AuthPasswordSet(params: OperationParams<GeneratedOperations["post_AuthPasswordSet"]>): OperationResponse<GeneratedOperations["post_AuthPasswordSet"]> {
    return client.request("/auth/password/set", "post", params);
  },
  AuthPasswordUpdate(params: OperationParams<GeneratedOperations["post_AuthPasswordUpdate"]>): OperationResponse<GeneratedOperations["post_AuthPasswordUpdate"]> {
    return client.request("/auth/password/update", "post", params);
  },
  AuthPasswordReset(params: OperationParams<GeneratedOperations["post_AuthPasswordReset"]>): OperationResponse<GeneratedOperations["post_AuthPasswordReset"]> {
    return client.request("/auth/password/reset", "post", params);
  },
  AuthPasswordResetNew(params: OperationParams<GeneratedOperations["post_AuthPasswordResetNew"]>): OperationResponse<GeneratedOperations["post_AuthPasswordResetNew"]> {
    return client.request("/auth/password/reset/new", "post", params);
  },
  AuthLogout(params: OperationParams<GeneratedOperations["post_AuthLogout"]>): OperationResponse<GeneratedOperations["post_AuthLogout"]> {
    return client.request("/auth/logout", "post", params);
  },
  AuthChangeCompany(params: OperationParams<GeneratedOperations["post_AuthChangeCompany"]>): OperationResponse<GeneratedOperations["post_AuthChangeCompany"]> {
    return client.request("/auth/changeCompany", "post", params);
  },
  AuthWxMaGetPhoneNumber(params: OperationParams<GeneratedOperations["post_AuthWxMaGetPhoneNumber"]>): OperationResponse<GeneratedOperations["post_AuthWxMaGetPhoneNumber"]> {
    return client.request("/auth/wx/ma/getPhoneNumber", "post", params);
  },
  AuthTokenRefresh(params: OperationParams<GeneratedOperations["post_AuthTokenRefresh"]>): OperationResponse<GeneratedOperations["post_AuthTokenRefresh"]> {
    return client.request("/auth/token/refresh", "post", params);
  },
  AuthPhoneRegister(params: OperationParams<GeneratedOperations["post_AuthPhoneRegister"]>): OperationResponse<GeneratedOperations["post_AuthPhoneRegister"]> {
    return client.request("/auth/phone/register", "post", params);
  },
  AuthPhoneSmsRegister(params: OperationParams<GeneratedOperations["post_AuthPhoneSmsRegister"]>): OperationResponse<GeneratedOperations["post_AuthPhoneSmsRegister"]> {
    return client.request("/auth/phone/sms/register", "post", params);
  },
  AuthWeixinBindPhone(params: OperationParams<GeneratedOperations["post_AuthWeixinBindPhone"]>): OperationResponse<GeneratedOperations["post_AuthWeixinBindPhone"]> {
    return client.request("/auth/weixinBindPhone", "post", params);
  },
  AuthWeixinMaBindPhone(params: OperationParams<GeneratedOperations["post_AuthWeixinMaBindPhone"]>): OperationResponse<GeneratedOperations["post_AuthWeixinMaBindPhone"]> {
    return client.request("/auth/weixinMaBindPhone", "post", params);
  },
  CompanyRegisterPrecheck(params: OperationParams<GeneratedOperations["post_CompanyRegisterPrecheck"]>): OperationResponse<GeneratedOperations["post_CompanyRegisterPrecheck"]> {
    return client.request("/company/register/precheck", "post", params);
  },
  CompanyRegisterSoft(params: OperationParams<GeneratedOperations["post_CompanyRegisterSoft"]>): OperationResponse<GeneratedOperations["post_CompanyRegisterSoft"]> {
    return client.request("/company/register/soft", "post", params);
  },
  AttendanceReportDaily(params: OperationParams<GeneratedOperations["post_AttendanceReportDaily"]>): OperationResponse<GeneratedOperations["post_AttendanceReportDaily"]> {
    return client.request("/attendance/report/daily", "post", params);
  },
  AttendanceReportMonthly(params: OperationParams<GeneratedOperations["post_AttendanceReportMonthly"]>): OperationResponse<GeneratedOperations["post_AttendanceReportMonthly"]> {
    return client.request("/attendance/report/monthly", "post", params);
  },
  AttendanceReportClock(params: OperationParams<GeneratedOperations["post_AttendanceReportClock"]>): OperationResponse<GeneratedOperations["post_AttendanceReportClock"]> {
    return client.request("/attendance/report/clock", "post", params);
  },
  AttendanceCalendarShow(params: OperationParams<GeneratedOperations["post_AttendanceCalendarShow"]>): OperationResponse<GeneratedOperations["post_AttendanceCalendarShow"]> {
    return client.request("/attendance/calendar/show", "post", params);
  },
  AttendanceDeviceClock(params: OperationParams<GeneratedOperations["post_AttendanceDeviceClock"]>): OperationResponse<GeneratedOperations["post_AttendanceDeviceClock"]> {
    return client.request("/attendance/device/clock", "post", params);
  },
  AttendanceShiftCycleList(params: OperationParams<GeneratedOperations["post_AttendanceShiftCycleList"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCycleList"]> {
    return client.request("/attendance/shift/cycle/list", "post", params);
  },
  AttendanceShiftCycleDetail(params: OperationParams<GeneratedOperations["post_AttendanceShiftCycleDetail"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCycleDetail"]> {
    return client.request("/attendance/shift/cycle/detail", "post", params);
  },
  AttendanceShiftCycleSaveA(params: OperationParams<GeneratedOperations["post_AttendanceShiftCycleSaveA"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCycleSaveA"]> {
    return client.request("/attendance/shift/cycle/saveA", "post", params);
  },
  AttendanceShiftCycleSaveE(params: OperationParams<GeneratedOperations["post_AttendanceShiftCycleSaveE"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCycleSaveE"]> {
    return client.request("/attendance/shift/cycle/saveE", "post", params);
  },
  AttendanceShiftCycleDel(params: OperationParams<GeneratedOperations["post_AttendanceShiftCycleDel"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCycleDel"]> {
    return client.request("/attendance/shift/cycle/del", "post", params);
  },
  AttendanceShiftScheduleCalendar(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleCalendar"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleCalendar"]> {
    return client.request("/attendance/shift/schedule/calendar", "post", params);
  },
  AttendanceShiftScheduleUnderlingCalendar(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleUnderlingCalendar"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleUnderlingCalendar"]> {
    return client.request("/attendance/shift/schedule/underling/calendar", "post", params);
  },
  AttendanceShiftScheduleManual(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleManual"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleManual"]> {
    return client.request("/attendance/shift/schedule/manual", "post", params);
  },
  AttendanceShiftScheduleCycle(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleCycle"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleCycle"]> {
    return client.request("/attendance/shift/schedule/cycle", "post", params);
  },
  AttendanceShiftScheduleCopy(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleCopy"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleCopy"]> {
    return client.request("/attendance/shift/schedule/copy", "post", params);
  },
  AttendanceShiftScheduleCustom(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleCustom"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleCustom"]> {
    return client.request("/attendance/shift/schedule/custom", "post", params);
  },
  AttendanceShiftScheduleClean(params: OperationParams<GeneratedOperations["post_AttendanceShiftScheduleClean"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftScheduleClean"]> {
    return client.request("/attendance/shift/schedule/clean", "post", params);
  },
  CommonImportDynamicUpload(params: OperationParams<GeneratedOperations["post_CommonImportDynamicUpload"]>): OperationResponse<GeneratedOperations["post_CommonImportDynamicUpload"]> {
    return client.request("/common/import/dynamic/upload", "post", params);
  },
  AttendanceGroupList(params: OperationParams<GeneratedOperations["post_AttendanceGroupList"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupList"]> {
    return client.request("/attendance/group/list", "post", params);
  },
  AttendanceGroupDetail(params: OperationParams<GeneratedOperations["post_AttendanceGroupDetail"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupDetail"]> {
    return client.request("/attendance/group/detail", "post", params);
  },
  AttendanceGroupValidate(params: OperationParams<GeneratedOperations["post_AttendanceGroupValidate"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupValidate"]> {
    return client.request("/attendance/group/validate", "post", params);
  },
  AttendanceGroupCreate(params: OperationParams<GeneratedOperations["post_AttendanceGroupCreate"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupCreate"]> {
    return client.request("/attendance/group/create", "post", params);
  },
  AttendanceGroupUpdate(params: OperationParams<GeneratedOperations["post_AttendanceGroupUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupUpdate"]> {
    return client.request("/attendance/group/update", "post", params);
  },
  AttendanceGroupDel(params: OperationParams<GeneratedOperations["post_AttendanceGroupDel"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupDel"]> {
    return client.request("/attendance/group/del", "post", params);
  },
  AttendanceGroupStaff(params: OperationParams<GeneratedOperations["post_AttendanceGroupStaff"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupStaff"]> {
    return client.request("/attendance/group/staff", "post", params);
  },
  AttendanceGroupMigrate(params: OperationParams<GeneratedOperations["post_AttendanceGroupMigrate"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupMigrate"]> {
    return client.request("/attendance/group/migrate", "post", params);
  },
  AttendanceGroupCalendar(params: OperationParams<GeneratedOperations["post_AttendanceGroupCalendar"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupCalendar"]> {
    return client.request("/attendance/group/calendar", "post", params);
  },
  AttendanceGroupCalendarDateTypeUpdate(params: OperationParams<GeneratedOperations["post_AttendanceGroupCalendarDateTypeUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceGroupCalendarDateTypeUpdate"]> {
    return client.request("/attendance/group/calendar/date/type/update", "post", params);
  },
  AttendanceRuleOvertimeList(params: OperationParams<GeneratedOperations["post_AttendanceRuleOvertimeList"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleOvertimeList"]> {
    return client.request("/attendance/rule/overtime/list", "post", params);
  },
  AttendanceRuleOvertimeDetail(params: OperationParams<GeneratedOperations["post_AttendanceRuleOvertimeDetail"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleOvertimeDetail"]> {
    return client.request("/attendance/rule/overtime/detail", "post", params);
  },
  AttendanceRuleOvertimeCreate(params: OperationParams<GeneratedOperations["post_AttendanceRuleOvertimeCreate"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleOvertimeCreate"]> {
    return client.request("/attendance/rule/overtime/create", "post", params);
  },
  AttendanceRuleOvertimeUpdate(params: OperationParams<GeneratedOperations["post_AttendanceRuleOvertimeUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleOvertimeUpdate"]> {
    return client.request("/attendance/rule/overtime/update", "post", params);
  },
  AttendanceRuleOvertimeDel(params: OperationParams<GeneratedOperations["post_AttendanceRuleOvertimeDel"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleOvertimeDel"]> {
    return client.request("/attendance/rule/overtime/del", "post", params);
  },
  AttendanceRuleReissue-clockList(params: OperationParams<GeneratedOperations["post_AttendanceRuleReissue-clockList"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleReissue-clockList"]> {
    return client.request("/attendance/rule/reissue-clock/list", "post", params);
  },
  AttendanceRuleReissue-clockDetail(params: OperationParams<GeneratedOperations["post_AttendanceRuleReissue-clockDetail"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleReissue-clockDetail"]> {
    return client.request("/attendance/rule/reissue-clock/detail", "post", params);
  },
  AttendanceRuleReissue-clockCreate(params: OperationParams<GeneratedOperations["post_AttendanceRuleReissue-clockCreate"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleReissue-clockCreate"]> {
    return client.request("/attendance/rule/reissue-clock/create", "post", params);
  },
  AttendanceRuleReissue-clockUpdate(params: OperationParams<GeneratedOperations["post_AttendanceRuleReissue-clockUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleReissue-clockUpdate"]> {
    return client.request("/attendance/rule/reissue-clock/update", "post", params);
  },
  AttendanceRuleReissue-clockDel(params: OperationParams<GeneratedOperations["post_AttendanceRuleReissue-clockDel"]>): OperationResponse<GeneratedOperations["post_AttendanceRuleReissue-clockDel"]> {
    return client.request("/attendance/rule/reissue-clock/del", "post", params);
  },
  AttendanceClock(params: OperationParams<GeneratedOperations["post_AttendanceClock"]>): OperationResponse<GeneratedOperations["post_AttendanceClock"]> {
    return client.request("/attendance/clock", "post", params);
  },
  AttendanceClockWayList(params: OperationParams<GeneratedOperations["post_AttendanceClockWayList"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayList"]> {
    return client.request("/attendance/clock/way/list", "post", params);
  },
  AttendanceClockWayCreate(params: OperationParams<GeneratedOperations["post_AttendanceClockWayCreate"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayCreate"]> {
    return client.request("/attendance/clock/way/create", "post", params);
  },
  AttendanceClockWayUpdate(params: OperationParams<GeneratedOperations["post_AttendanceClockWayUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayUpdate"]> {
    return client.request("/attendance/clock/way/update", "post", params);
  },
  AttendanceClockWayEnable(params: OperationParams<GeneratedOperations["post_AttendanceClockWayEnable"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayEnable"]> {
    return client.request("/attendance/clock/way/enable", "post", params);
  },
  AttendanceClockWayDisable(params: OperationParams<GeneratedOperations["post_AttendanceClockWayDisable"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayDisable"]> {
    return client.request("/attendance/clock/way/disable", "post", params);
  },
  AttendanceClockWayDelete(params: OperationParams<GeneratedOperations["post_AttendanceClockWayDelete"]>): OperationResponse<GeneratedOperations["post_AttendanceClockWayDelete"]> {
    return client.request("/attendance/clock/way/delete", "post", params);
  },
  AttendanceShiftList(params: OperationParams<GeneratedOperations["post_AttendanceShiftList"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftList"]> {
    return client.request("/attendance/shift/list", "post", params);
  },
  AttendanceShiftDetail(params: OperationParams<GeneratedOperations["post_AttendanceShiftDetail"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftDetail"]> {
    return client.request("/attendance/shift/detail", "post", params);
  },
  AttendanceShiftCreate(params: OperationParams<GeneratedOperations["post_AttendanceShiftCreate"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftCreate"]> {
    return client.request("/attendance/shift/create", "post", params);
  },
  AttendanceShiftUpdate(params: OperationParams<GeneratedOperations["post_AttendanceShiftUpdate"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftUpdate"]> {
    return client.request("/attendance/shift/update", "post", params);
  },
  AttendanceShiftDel(params: OperationParams<GeneratedOperations["post_AttendanceShiftDel"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftDel"]> {
    return client.request("/attendance/shift/del", "post", params);
  },
  AttendanceShiftGroups(params: OperationParams<GeneratedOperations["post_AttendanceShiftGroups"]>): OperationResponse<GeneratedOperations["post_AttendanceShiftGroups"]> {
    return client.request("/attendance/shift/groups", "post", params);
  },
  StaffbaseGetStaffCompanyList(params: OperationParams<GeneratedOperations["post_StaffbaseGetStaffCompanyList"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetStaffCompanyList"]> {
    return client.request("/staffbase/getStaffCompanyList", "post", params);
  },
  StaffbaseGetStaff(params: OperationParams<GeneratedOperations["post_StaffbaseGetStaff"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetStaff"]> {
    return client.request("/staffbase/getStaff", "post", params);
  },
  StaffbaseGetCurrentDeptStaff(params: OperationParams<GeneratedOperations["post_StaffbaseGetCurrentDeptStaff"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetCurrentDeptStaff"]> {
    return client.request("/staffbase/get/current/dept/staff", "post", params);
  },
  StaffbaseGetStaffByDataPermission(params: OperationParams<GeneratedOperations["post_StaffbaseGetStaffByDataPermission"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetStaffByDataPermission"]> {
    return client.request("/staffbase/getStaffByDataPermission", "post", params);
  },
  StaffbaseGetStaffDataPermissionByType(params: OperationParams<GeneratedOperations["post_StaffbaseGetStaffDataPermissionByType"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetStaffDataPermissionByType"]> {
    return client.request("/staffbase/getStaffDataPermissionByType", "post", params);
  },
  StaffbaseSearch(params: OperationParams<GeneratedOperations["post_StaffbaseSearch"]>): OperationResponse<GeneratedOperations["post_StaffbaseSearch"]> {
    return client.request("/staffbase/search", "post", params);
  },
  StaffbaseContactQuery(params: OperationParams<GeneratedOperations["post_StaffbaseContactQuery"]>): OperationResponse<GeneratedOperations["post_StaffbaseContactQuery"]> {
    return client.request("/staffbase/contactQuery", "post", params);
  },
  StaffbaseGetById(params: OperationParams<GeneratedOperations["post_StaffbaseGetById"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetById"]> {
    return client.request("/staffbase/getById", "post", params);
  },
  StaffbaseSave(params: OperationParams<GeneratedOperations["post_StaffbaseSave"]>): OperationResponse<GeneratedOperations["post_StaffbaseSave"]> {
    return client.request("/staffbase/save", "post", params);
  },
  StaffbaseUpdateById(params: OperationParams<GeneratedOperations["post_StaffbaseUpdateById"]>): OperationResponse<GeneratedOperations["post_StaffbaseUpdateById"]> {
    return client.request("/staffbase/updateById", "post", params);
  },
  StaffbaseRemoveById(params: OperationParams<GeneratedOperations["post_StaffbaseRemoveById"]>): OperationResponse<GeneratedOperations["post_StaffbaseRemoveById"]> {
    return client.request("/staffbase/removeById", "post", params);
  },
  StaffbaseGetAllStaffByDataPermission(params: OperationParams<GeneratedOperations["post_StaffbaseGetAllStaffByDataPermission"]>): OperationResponse<GeneratedOperations["post_StaffbaseGetAllStaffByDataPermission"]> {
    return client.request("/staffbase/getAllStaffByDataPermission", "post", params);
  },
  OrgDeptAttPage(params: OperationParams<GeneratedOperations["post_OrgDeptAttPage"]>): OperationResponse<GeneratedOperations["post_OrgDeptAttPage"]> {
    return client.request("/orgDeptAtt/page", "post", params);
  },
  OrgDeptAttGetById(params: OperationParams<GeneratedOperations["post_OrgDeptAttGetById"]>): OperationResponse<GeneratedOperations["post_OrgDeptAttGetById"]> {
    return client.request("/orgDeptAtt/getById", "post", params);
  },
  OrgDeptAttSave(params: OperationParams<GeneratedOperations["post_OrgDeptAttSave"]>): OperationResponse<GeneratedOperations["post_OrgDeptAttSave"]> {
    return client.request("/orgDeptAtt/save", "post", params);
  },
  OrgDeptAttUpdateById(params: OperationParams<GeneratedOperations["post_OrgDeptAttUpdateById"]>): OperationResponse<GeneratedOperations["post_OrgDeptAttUpdateById"]> {
    return client.request("/orgDeptAtt/updateById", "post", params);
  },
  OrgDeptAttRemoveById(params: OperationParams<GeneratedOperations["post_OrgDeptAttRemoveById"]>): OperationResponse<GeneratedOperations["post_OrgDeptAttRemoveById"]> {
    return client.request("/orgDeptAtt/removeById", "post", params);
  },
  OrgSubjectPage(params: OperationParams<GeneratedOperations["post_OrgSubjectPage"]>): OperationResponse<GeneratedOperations["post_OrgSubjectPage"]> {
    return client.request("/orgSubject/page", "post", params);
  },
  OrgSubjectGetById(params: OperationParams<GeneratedOperations["post_OrgSubjectGetById"]>): OperationResponse<GeneratedOperations["post_OrgSubjectGetById"]> {
    return client.request("/orgSubject/getById", "post", params);
  },
  OrgSubjectSave(params: OperationParams<GeneratedOperations["post_OrgSubjectSave"]>): OperationResponse<GeneratedOperations["post_OrgSubjectSave"]> {
    return client.request("/orgSubject/save", "post", params);
  },
  OrgSubjectUpdateById(params: OperationParams<GeneratedOperations["post_OrgSubjectUpdateById"]>): OperationResponse<GeneratedOperations["post_OrgSubjectUpdateById"]> {
    return client.request("/orgSubject/updateById", "post", params);
  },
  OrgSubjectRemoveById(params: OperationParams<GeneratedOperations["post_OrgSubjectRemoveById"]>): OperationResponse<GeneratedOperations["post_OrgSubjectRemoveById"]> {
    return client.request("/orgSubject/removeById", "post", params);
  },
  OrgWorkplacePage(params: OperationParams<GeneratedOperations["post_OrgWorkplacePage"]>): OperationResponse<GeneratedOperations["post_OrgWorkplacePage"]> {
    return client.request("/orgWorkplace/page", "post", params);
  },
  OrgWorkplaceGetById(params: OperationParams<GeneratedOperations["post_OrgWorkplaceGetById"]>): OperationResponse<GeneratedOperations["post_OrgWorkplaceGetById"]> {
    return client.request("/orgWorkplace/getById", "post", params);
  },
  OrgWorkplaceSave(params: OperationParams<GeneratedOperations["post_OrgWorkplaceSave"]>): OperationResponse<GeneratedOperations["post_OrgWorkplaceSave"]> {
    return client.request("/orgWorkplace/save", "post", params);
  },
  OrgWorkplaceUpdateById(params: OperationParams<GeneratedOperations["post_OrgWorkplaceUpdateById"]>): OperationResponse<GeneratedOperations["post_OrgWorkplaceUpdateById"]> {
    return client.request("/orgWorkplace/updateById", "post", params);
  },
  OrgWorkplaceRemoveById(params: OperationParams<GeneratedOperations["post_OrgWorkplaceRemoveById"]>): OperationResponse<GeneratedOperations["post_OrgWorkplaceRemoveById"]> {
    return client.request("/orgWorkplace/removeById", "post", params);
  },
  OrgCostCenterPage(params: OperationParams<GeneratedOperations["post_OrgCostCenterPage"]>): OperationResponse<GeneratedOperations["post_OrgCostCenterPage"]> {
    return client.request("/orgCostCenter/page", "post", params);
  },
  OrgCostCenterGetById(params: OperationParams<GeneratedOperations["post_OrgCostCenterGetById"]>): OperationResponse<GeneratedOperations["post_OrgCostCenterGetById"]> {
    return client.request("/orgCostCenter/getById", "post", params);
  },
  OrgCostCenterSave(params: OperationParams<GeneratedOperations["post_OrgCostCenterSave"]>): OperationResponse<GeneratedOperations["post_OrgCostCenterSave"]> {
    return client.request("/orgCostCenter/save", "post", params);
  },
  OrgCostCenterUpdateById(params: OperationParams<GeneratedOperations["post_OrgCostCenterUpdateById"]>): OperationResponse<GeneratedOperations["post_OrgCostCenterUpdateById"]> {
    return client.request("/orgCostCenter/updateById", "post", params);
  },
  OrgCostCenterRemoveById(params: OperationParams<GeneratedOperations["post_OrgCostCenterRemoveById"]>): OperationResponse<GeneratedOperations["post_OrgCostCenterRemoveById"]> {
    return client.request("/orgCostCenter/removeById", "post", params);
  },
  CompanyGetStaffCompanyList(params: OperationParams<GeneratedOperations["post_CompanyGetStaffCompanyList"]>): OperationResponse<GeneratedOperations["post_CompanyGetStaffCompanyList"]> {
    return client.request("/company/getStaffCompanyList", "post", params);
  },
  CompanySetDefaultCompany(params: OperationParams<GeneratedOperations["post_CompanySetDefaultCompany"]>): OperationResponse<GeneratedOperations["post_CompanySetDefaultCompany"]> {
    return client.request("/company/setDefaultCompany", "post", params);
  },
  CompanyUserStatistics(params: OperationParams<GeneratedOperations["post_CompanyUserStatistics"]>): OperationResponse<GeneratedOperations["post_CompanyUserStatistics"]> {
    return client.request("/company/user/statistics", "post", params);
  },
  CompanyUserList(params: OperationParams<GeneratedOperations["post_CompanyUserList"]>): OperationResponse<GeneratedOperations["post_CompanyUserList"]> {
    return client.request("/company/user/list", "post", params);
  },
  CompanyUserEnable(params: OperationParams<GeneratedOperations["post_CompanyUserEnable"]>): OperationResponse<GeneratedOperations["post_CompanyUserEnable"]> {
    return client.request("/company/user/enable", "post", params);
  },
  CompanyFuzzyCheckCompany(params: OperationParams<GeneratedOperations["post_CompanyFuzzyCheckCompany"]>): OperationResponse<GeneratedOperations["post_CompanyFuzzyCheckCompany"]> {
    return client.request("/company/fuzzyCheckCompany", "post", params);
  },
  CompanyUserDisable(params: OperationParams<GeneratedOperations["post_CompanyUserDisable"]>): OperationResponse<GeneratedOperations["post_CompanyUserDisable"]> {
    return client.request("/company/user/disable", "post", params);
  },
  CompanyUserDelete(params: OperationParams<GeneratedOperations["post_CompanyUserDelete"]>): OperationResponse<GeneratedOperations["post_CompanyUserDelete"]> {
    return client.request("/company/user/delete", "post", params);
  },
  CompanyUserCreate(params: OperationParams<GeneratedOperations["post_CompanyUserCreate"]>): OperationResponse<GeneratedOperations["post_CompanyUserCreate"]> {
    return client.request("/company/user/create", "post", params);
  },
  CompanyGetIndustrySel(params: OperationParams<GeneratedOperations["post_CompanyGetIndustrySel"]>): OperationResponse<GeneratedOperations["post_CompanyGetIndustrySel"]> {
    return client.request("/company/getIndustrySel", "post", params);
  },
  CompanyGetEdus(params: OperationParams<GeneratedOperations["post_CompanyGetEdus"]>): OperationResponse<GeneratedOperations["post_CompanyGetEdus"]> {
    return client.request("/company/getEdus", "post", params);
  },
  CompanyUserMobileModify(params: OperationParams<GeneratedOperations["post_CompanyUserMobileModify"]>): OperationResponse<GeneratedOperations["post_CompanyUserMobileModify"]> {
    return client.request("/company/user/mobile/modify", "post", params);
  },
  StaffCustomMenuSortPage(params: OperationParams<GeneratedOperations["post_StaffCustomMenuSortPage"]>): OperationResponse<GeneratedOperations["post_StaffCustomMenuSortPage"]> {
    return client.request("/staffCustomMenuSort/page", "post", params);
  },
  StaffCustomMenuSortGetById(params: OperationParams<GeneratedOperations["post_StaffCustomMenuSortGetById"]>): OperationResponse<GeneratedOperations["post_StaffCustomMenuSortGetById"]> {
    return client.request("/staffCustomMenuSort/getById", "post", params);
  },
  StaffCustomMenuSortSave(params: OperationParams<GeneratedOperations["post_StaffCustomMenuSortSave"]>): OperationResponse<GeneratedOperations["post_StaffCustomMenuSortSave"]> {
    return client.request("/staffCustomMenuSort/save", "post", params);
  },
  StaffCustomMenuSortUpdateById(params: OperationParams<GeneratedOperations["post_StaffCustomMenuSortUpdateById"]>): OperationResponse<GeneratedOperations["post_StaffCustomMenuSortUpdateById"]> {
    return client.request("/staffCustomMenuSort/updateById", "post", params);
  },
  StaffCustomMenuSortRemoveById(params: OperationParams<GeneratedOperations["post_StaffCustomMenuSortRemoveById"]>): OperationResponse<GeneratedOperations["post_StaffCustomMenuSortRemoveById"]> {
    return client.request("/staffCustomMenuSort/removeById", "post", params);
  },
  OrgDeptDrawDept(params: OperationParams<GeneratedOperations["post_OrgDeptDrawDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptDrawDept"]> {
    return client.request("/orgDept/drawDept", "post", params);
  },
  OrgDeptExportDept(params: OperationParams<GeneratedOperations["post_OrgDeptExportDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptExportDept"]> {
    return client.request("/orgDept/exportDept", "post", params);
  },
  OrgDeptImportDept(params: OperationParams<GeneratedOperations["post_OrgDeptImportDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptImportDept"]> {
    return client.request("/orgDept/importDept", "post", params);
  },
  OrgDeptBatchEnableDept(params: OperationParams<GeneratedOperations["post_OrgDeptBatchEnableDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptBatchEnableDept"]> {
    return client.request("/orgDept/batchEnableDept", "post", params);
  },
  OrgDeptSaveDeptProps(params: OperationParams<GeneratedOperations["post_OrgDeptSaveDeptProps"]>): OperationResponse<GeneratedOperations["post_OrgDeptSaveDeptProps"]> {
    return client.request("/orgDept/saveDeptProps", "post", params);
  },
  OrgDeptAllCompanyDeptProps(params: OperationParams<GeneratedOperations["post_OrgDeptAllCompanyDeptProps"]>): OperationResponse<GeneratedOperations["post_OrgDeptAllCompanyDeptProps"]> {
    return client.request("/orgDept/allCompanyDeptProps", "post", params);
  },
  OrgDeptGetDeptTreeWithStaffDetails(params: OperationParams<GeneratedOperations["post_OrgDeptGetDeptTreeWithStaffDetails"]>): OperationResponse<GeneratedOperations["post_OrgDeptGetDeptTreeWithStaffDetails"]> {
    return client.request("/orgDept/getDeptTreeWithStaffDetails", "post", params);
  },
  OrgDeptGetDeptTreeWithStaffAndDept(params: OperationParams<GeneratedOperations["post_OrgDeptGetDeptTreeWithStaffAndDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptGetDeptTreeWithStaffAndDept"]> {
    return client.request("/orgDept/getDeptTreeWithStaffAndDept", "post", params);
  },
  OrgDeptGetDeptTreeOnlyDept(params: OperationParams<GeneratedOperations["post_OrgDeptGetDeptTreeOnlyDept"]>): OperationResponse<GeneratedOperations["post_OrgDeptGetDeptTreeOnlyDept"]> {
    return client.request("/orgDept/getDeptTreeOnlyDept", "post", params);
  },
  OrgDeptPage(params: OperationParams<GeneratedOperations["post_OrgDeptPage"]>): OperationResponse<GeneratedOperations["post_OrgDeptPage"]> {
    return client.request("/orgDept/page", "post", params);
  },
  OrgDeptGetById(params: OperationParams<GeneratedOperations["post_OrgDeptGetById"]>): OperationResponse<GeneratedOperations["post_OrgDeptGetById"]> {
    return client.request("/orgDept/getById", "post", params);
  },
  OrgDeptSave(params: OperationParams<GeneratedOperations["post_OrgDeptSave"]>): OperationResponse<GeneratedOperations["post_OrgDeptSave"]> {
    return client.request("/orgDept/save", "post", params);
  },
  OrgDeptUpdateById(params: OperationParams<GeneratedOperations["post_OrgDeptUpdateById"]>): OperationResponse<GeneratedOperations["post_OrgDeptUpdateById"]> {
    return client.request("/orgDept/updateById", "post", params);
  },
  OrgDeptRemoveById(params: OperationParams<GeneratedOperations["post_OrgDeptRemoveById"]>): OperationResponse<GeneratedOperations["post_OrgDeptRemoveById"]> {
    return client.request("/orgDept/removeById", "post", params);
  },
  OrgDeptInit(params: OperationParams<GeneratedOperations["post_OrgDeptInit"]>): OperationResponse<GeneratedOperations["post_OrgDeptInit"]> {
    return client.request("/orgDept/init", "post", params);
  },
  OrgDeptAddCompanyToDeptGen(params: OperationParams<GeneratedOperations["post_OrgDeptAddCompanyToDeptGen"]>): OperationResponse<GeneratedOperations["post_OrgDeptAddCompanyToDeptGen"]> {
    return client.request("/orgDept/addCompanyToDeptGen", "post", params);
  },
  AreaGetAllProvinces(params: OperationParams<GeneratedOperations["post_AreaGetAllProvinces"]>): OperationResponse<GeneratedOperations["post_AreaGetAllProvinces"]> {
    return client.request("/area/getAllProvinces", "post", params);
  },
  AreaGetAreasByCity(params: OperationParams<GeneratedOperations["post_AreaGetAreasByCity"]>): OperationResponse<GeneratedOperations["post_AreaGetAreasByCity"]> {
    return client.request("/area/getAreasByCity", "post", params);
  },
  AreaGetCitiesByProvince(params: OperationParams<GeneratedOperations["post_AreaGetCitiesByProvince"]>): OperationResponse<GeneratedOperations["post_AreaGetCitiesByProvince"]> {
    return client.request("/area/getCitiesByProvince", "post", params);
  },
  DictDataQueryByType(params: OperationParams<GeneratedOperations["post_DictDataQueryByType"]>): OperationResponse<GeneratedOperations["post_DictDataQueryByType"]> {
    return client.request("/dictData/queryByType", "post", params);
  },
  DictDataSave(params: OperationParams<GeneratedOperations["post_DictDataSave"]>): OperationResponse<GeneratedOperations["post_DictDataSave"]> {
    return client.request("/dictData/save", "post", params);
  },
  DictDataUpdateById(params: OperationParams<GeneratedOperations["post_DictDataUpdateById"]>): OperationResponse<GeneratedOperations["post_DictDataUpdateById"]> {
    return client.request("/dictData/updateById", "post", params);
  },
  DictDataRemoveById(params: OperationParams<GeneratedOperations["post_DictDataRemoveById"]>): OperationResponse<GeneratedOperations["post_DictDataRemoveById"]> {
    return client.request("/dictData/removeById", "post", params);
  },
  DictTypePage(params: OperationParams<GeneratedOperations["post_DictTypePage"]>): OperationResponse<GeneratedOperations["post_DictTypePage"]> {
    return client.request("/dictType/page", "post", params);
  },
  DictTypeGetById(params: OperationParams<GeneratedOperations["post_DictTypeGetById"]>): OperationResponse<GeneratedOperations["post_DictTypeGetById"]> {
    return client.request("/dictType/getById", "post", params);
  },
  DictTypeSave(params: OperationParams<GeneratedOperations["post_DictTypeSave"]>): OperationResponse<GeneratedOperations["post_DictTypeSave"]> {
    return client.request("/dictType/save", "post", params);
  },
  DictTypeUpdateById(params: OperationParams<GeneratedOperations["post_DictTypeUpdateById"]>): OperationResponse<GeneratedOperations["post_DictTypeUpdateById"]> {
    return client.request("/dictType/updateById", "post", params);
  },
  DictTypeRemoveById(params: OperationParams<GeneratedOperations["post_DictTypeRemoveById"]>): OperationResponse<GeneratedOperations["post_DictTypeRemoveById"]> {
    return client.request("/dictType/removeById", "post", params);
  },
  CompanySyncRecordTest(params: OperationParams<GeneratedOperations["post_CompanySyncRecordTest"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordTest"]> {
    return client.request("/companySyncRecord/test", "post", params);
  },
  CompanySyncRecordSaveData(params: OperationParams<GeneratedOperations["post_CompanySyncRecordSaveData"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordSaveData"]> {
    return client.request("/companySyncRecord/saveData", "post", params);
  },
  CompanySyncRecordPreviewData(params: OperationParams<GeneratedOperations["post_CompanySyncRecordPreviewData"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordPreviewData"]> {
    return client.request("/companySyncRecord/previewData", "post", params);
  },
  CompanySyncRecordSync(params: OperationParams<GeneratedOperations["post_CompanySyncRecordSync"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordSync"]> {
    return client.request("/companySyncRecord/sync", "post", params);
  },
  CompanySyncRecordCheck(params: OperationParams<GeneratedOperations["post_CompanySyncRecordCheck"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordCheck"]> {
    return client.request("/companySyncRecord/check", "post", params);
  },
  CompanySyncRecordPage(params: OperationParams<GeneratedOperations["post_CompanySyncRecordPage"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordPage"]> {
    return client.request("/companySyncRecord/page", "post", params);
  },
  CompanySyncRecordGetById(params: OperationParams<GeneratedOperations["post_CompanySyncRecordGetById"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordGetById"]> {
    return client.request("/companySyncRecord/getById", "post", params);
  },
  CompanySyncRecordSave(params: OperationParams<GeneratedOperations["post_CompanySyncRecordSave"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordSave"]> {
    return client.request("/companySyncRecord/save", "post", params);
  },
  CompanySyncRecordUpdateById(params: OperationParams<GeneratedOperations["post_CompanySyncRecordUpdateById"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordUpdateById"]> {
    return client.request("/companySyncRecord/updateById", "post", params);
  },
  CompanySyncRecordRemoveById(params: OperationParams<GeneratedOperations["post_CompanySyncRecordRemoveById"]>): OperationResponse<GeneratedOperations["post_CompanySyncRecordRemoveById"]> {
    return client.request("/companySyncRecord/removeById", "post", params);
  },
  CompanyThirdPartyConfigPage(params: OperationParams<GeneratedOperations["post_CompanyThirdPartyConfigPage"]>): OperationResponse<GeneratedOperations["post_CompanyThirdPartyConfigPage"]> {
    return client.request("/companyThirdPartyConfig/page", "post", params);
  },
  CompanyThirdPartyConfigGetById(params: OperationParams<GeneratedOperations["post_CompanyThirdPartyConfigGetById"]>): OperationResponse<GeneratedOperations["post_CompanyThirdPartyConfigGetById"]> {
    return client.request("/companyThirdPartyConfig/getById", "post", params);
  },
  CompanyThirdPartyConfigSave(params: OperationParams<GeneratedOperations["post_CompanyThirdPartyConfigSave"]>): OperationResponse<GeneratedOperations["post_CompanyThirdPartyConfigSave"]> {
    return client.request("/companyThirdPartyConfig/save", "post", params);
  },
  CompanyThirdPartyConfigUpdateById(params: OperationParams<GeneratedOperations["post_CompanyThirdPartyConfigUpdateById"]>): OperationResponse<GeneratedOperations["post_CompanyThirdPartyConfigUpdateById"]> {
    return client.request("/companyThirdPartyConfig/updateById", "post", params);
  },
  CompanyThirdPartyConfigRemoveById(params: OperationParams<GeneratedOperations["post_CompanyThirdPartyConfigRemoveById"]>): OperationResponse<GeneratedOperations["post_CompanyThirdPartyConfigRemoveById"]> {
    return client.request("/companyThirdPartyConfig/removeById", "post", params);
  },
  LoginDevicePage(params: OperationParams<GeneratedOperations["post_LoginDevicePage"]>): OperationResponse<GeneratedOperations["post_LoginDevicePage"]> {
    return client.request("/loginDevice/page", "post", params);
  },
  LoginDeviceGetById(params: OperationParams<GeneratedOperations["post_LoginDeviceGetById"]>): OperationResponse<GeneratedOperations["post_LoginDeviceGetById"]> {
    return client.request("/loginDevice/getById", "post", params);
  },
  LoginDeviceLogoutId(params: OperationParams<GeneratedOperations["post_LoginDeviceLogoutId"]>): OperationResponse<GeneratedOperations["post_LoginDeviceLogoutId"]> {
    return client.request("/loginDevice/logoutId", "post", params);
  },
  LoginDeviceSave(params: OperationParams<GeneratedOperations["post_LoginDeviceSave"]>): OperationResponse<GeneratedOperations["post_LoginDeviceSave"]> {
    return client.request("/loginDevice/save", "post", params);
  },
  LoginDeviceUpdateById(params: OperationParams<GeneratedOperations["post_LoginDeviceUpdateById"]>): OperationResponse<GeneratedOperations["post_LoginDeviceUpdateById"]> {
    return client.request("/loginDevice/updateById", "post", params);
  },
  LoginDeviceRemoveById(params: OperationParams<GeneratedOperations["post_LoginDeviceRemoveById"]>): OperationResponse<GeneratedOperations["post_LoginDeviceRemoveById"]> {
    return client.request("/loginDevice/removeById", "post", params);
  },
  CommonExportTaskDetail(params: OperationParams<GeneratedOperations["post_CommonExportTaskDetail"]>): OperationResponse<GeneratedOperations["post_CommonExportTaskDetail"]> {
    return client.request("/common/export/task/detail", "post", params);
  },
  CommonExportTaskList(params: OperationParams<GeneratedOperations["post_CommonExportTaskList"]>): OperationResponse<GeneratedOperations["post_CommonExportTaskList"]> {
    return client.request("/common/export/task/list", "post", params);
  },
  CommonExportTaskMyList(params: OperationParams<GeneratedOperations["post_CommonExportTaskMyList"]>): OperationResponse<GeneratedOperations["post_CommonExportTaskMyList"]> {
    return client.request("/common/export/task/my/list", "post", params);
  },
  CommonExportTaskDownload(params: OperationParams<GeneratedOperations["post_CommonExportTaskDownload"]>): OperationResponse<GeneratedOperations["post_CommonExportTaskDownload"]> {
    return client.request("/common/export/task/download", "post", params);
  },
  CommonImportUpload(params: OperationParams<GeneratedOperations["post_CommonImportUpload"]>): OperationResponse<GeneratedOperations["post_CommonImportUpload"]> {
    return client.request("/common/import/upload", "post", params);
  },
  CommonImportTaskDetail(params: OperationParams<GeneratedOperations["post_CommonImportTaskDetail"]>): OperationResponse<GeneratedOperations["post_CommonImportTaskDetail"]> {
    return client.request("/common/import/task/detail", "post", params);
  },
  CommonImportTaskList(params: OperationParams<GeneratedOperations["post_CommonImportTaskList"]>): OperationResponse<GeneratedOperations["post_CommonImportTaskList"]> {
    return client.request("/common/import/task/list", "post", params);
  },
  CommonImportTaskMyList(params: OperationParams<GeneratedOperations["post_CommonImportTaskMyList"]>): OperationResponse<GeneratedOperations["post_CommonImportTaskMyList"]> {
    return client.request("/common/import/task/my/list", "post", params);
  },
  CommonImportTaskSourceDownload(params: OperationParams<GeneratedOperations["post_CommonImportTaskSourceDownload"]>): OperationResponse<GeneratedOperations["post_CommonImportTaskSourceDownload"]> {
    return client.request("/common/import/task/source/download", "post", params);
  },
  CommonImportTaskResultDownload(params: OperationParams<GeneratedOperations["post_CommonImportTaskResultDownload"]>): OperationResponse<GeneratedOperations["post_CommonImportTaskResultDownload"]> {
    return client.request("/common/import/task/result/download", "post", params);
  },
  CommonImportDynamicStaffCommit(params: OperationParams<GeneratedOperations["post_CommonImportDynamicStaffCommit"]>): OperationResponse<GeneratedOperations["post_CommonImportDynamicStaffCommit"]> {
    return client.request("/common/import/dynamic/staff/commit", "post", params);
  },
  CommonImportDynamicDeptCommit(params: OperationParams<GeneratedOperations["post_CommonImportDynamicDeptCommit"]>): OperationResponse<GeneratedOperations["post_CommonImportDynamicDeptCommit"]> {
    return client.request("/common/import/dynamic/dept/commit", "post", params);
  },
  ExcelExportStaffCommit(params: OperationParams<GeneratedOperations["post_ExcelExportStaffCommit"]>): OperationResponse<GeneratedOperations["post_ExcelExportStaffCommit"]> {
    return client.request("/excel/export/staff/commit", "post", params);
  },
  ExcelExportDeptCommit(params: OperationParams<GeneratedOperations["post_ExcelExportDeptCommit"]>): OperationResponse<GeneratedOperations["post_ExcelExportDeptCommit"]> {
    return client.request("/excel/export/dept/commit", "post", params);
  },
  CommonFileUploadTemp(params: OperationParams<GeneratedOperations["post_CommonFileUploadTemp"]>): OperationResponse<GeneratedOperations["post_CommonFileUploadTemp"]> {
    return client.request("/common/file/upload/temp", "post", params);
  },
  SelectionStaffMetadata(params: OperationParams<GeneratedOperations["post_SelectionStaffMetadata"]>): OperationResponse<GeneratedOperations["post_SelectionStaffMetadata"]> {
    return client.request("/selection/staff/metadata", "post", params);
  },
  SelectionStaffDetail(params: OperationParams<GeneratedOperations["post_SelectionStaffDetail"]>): OperationResponse<GeneratedOperations["post_SelectionStaffDetail"]> {
    return client.request("/selection/staff/detail", "post", params);
  },
  SelectionStaffCommonly(params: OperationParams<GeneratedOperations["post_SelectionStaffCommonly"]>): OperationResponse<GeneratedOperations["post_SelectionStaffCommonly"]> {
    return client.request("/selection/staff/commonly", "post", params);
  },
  SelectionStaffSave(params: OperationParams<GeneratedOperations["post_SelectionStaffSave"]>): OperationResponse<GeneratedOperations["post_SelectionStaffSave"]> {
    return client.request("/selection/staff/save", "post", params);
  },
  SelectionStaffPreview(params: OperationParams<GeneratedOperations["post_SelectionStaffPreview"]>): OperationResponse<GeneratedOperations["post_SelectionStaffPreview"]> {
    return client.request("/selection/staff/preview", "post", params);
  },
  CompanyAppOffOnApp(params: OperationParams<GeneratedOperations["post_CompanyAppOffOnApp"]>): OperationResponse<GeneratedOperations["post_CompanyAppOffOnApp"]> {
    return client.request("/companyApp/offOnApp", "post", params);
  },
  CompanyAppInitAll(params: OperationParams<GeneratedOperations["post_CompanyAppInitAll"]>): OperationResponse<GeneratedOperations["post_CompanyAppInitAll"]> {
    return client.request("/companyApp/initAll", "post", params);
  },
  RoleQueryAppGroups(params: OperationParams<GeneratedOperations["post_RoleQueryAppGroups"]>): OperationResponse<GeneratedOperations["post_RoleQueryAppGroups"]> {
    return client.request("/role/queryAppGroups", "post", params);
  },
  RoleQueryAppByCoNo(params: OperationParams<GeneratedOperations["post_RoleQueryAppByCoNo"]>): OperationResponse<GeneratedOperations["post_RoleQueryAppByCoNo"]> {
    return client.request("/role/queryAppByCoNo", "post", params);
  },
  RoleGetCurrentUserRoleMenu(params: OperationParams<GeneratedOperations["post_RoleGetCurrentUserRoleMenu"]>): OperationResponse<GeneratedOperations["post_RoleGetCurrentUserRoleMenu"]> {
    return client.request("/role/getCurrentUserRoleMenu", "post", params);
  },
  RoleGetCurrentRoleList(params: OperationParams<GeneratedOperations["post_RoleGetCurrentRoleList"]>): OperationResponse<GeneratedOperations["post_RoleGetCurrentRoleList"]> {
    return client.request("/role/getCurrentRoleList", "post", params);
  },
  RoleCurrentCompanyAllMenusAndPowers(params: OperationParams<GeneratedOperations["post_RoleCurrentCompanyAllMenusAndPowers"]>): OperationResponse<GeneratedOperations["post_RoleCurrentCompanyAllMenusAndPowers"]> {
    return client.request("/role/currentCompanyAllMenusAndPowers", "post", params);
  },
  RoleGetRoleDetail(params: OperationParams<GeneratedOperations["post_RoleGetRoleDetail"]>): OperationResponse<GeneratedOperations["post_RoleGetRoleDetail"]> {
    return client.request("/role/getRoleDetail", "post", params);
  },
  RoleResetCurrentCompanyRoleMenusAndPowers(params: OperationParams<GeneratedOperations["post_RoleResetCurrentCompanyRoleMenusAndPowers"]>): OperationResponse<GeneratedOperations["post_RoleResetCurrentCompanyRoleMenusAndPowers"]> {
    return client.request("/role/resetCurrentCompanyRoleMenusAndPowers", "post", params);
  },
  RoleSaveRole(params: OperationParams<GeneratedOperations["post_RoleSaveRole"]>): OperationResponse<GeneratedOperations["post_RoleSaveRole"]> {
    return client.request("/role/saveRole", "post", params);
  },
  RoleRemoveById(params: OperationParams<GeneratedOperations["post_RoleRemoveById"]>): OperationResponse<GeneratedOperations["post_RoleRemoveById"]> {
    return client.request("/role/removeById", "post", params);
  },
  RoleGetById(params: OperationParams<GeneratedOperations["post_RoleGetById"]>): OperationResponse<GeneratedOperations["post_RoleGetById"]> {
    return client.request("/role/getById", "post", params);
  },
  RoleUpdateById(params: OperationParams<GeneratedOperations["post_RoleUpdateById"]>): OperationResponse<GeneratedOperations["post_RoleUpdateById"]> {
    return client.request("/role/updateById", "post", params);
  },
  RoleCopyRole(params: OperationParams<GeneratedOperations["post_RoleCopyRole"]>): OperationResponse<GeneratedOperations["post_RoleCopyRole"]> {
    return client.request("/role/copyRole", "post", params);
  },
  RoleGetRoleStaffInfo(params: OperationParams<GeneratedOperations["post_RoleGetRoleStaffInfo"]>): OperationResponse<GeneratedOperations["post_RoleGetRoleStaffInfo"]> {
    return client.request("/role/getRoleStaffInfo", "post", params);
  },
  RoleDelUserRole(params: OperationParams<GeneratedOperations["post_RoleDelUserRole"]>): OperationResponse<GeneratedOperations["post_RoleDelUserRole"]> {
    return client.request("/role/delUserRole", "post", params);
  },
  RoleAddRoleUserFromStaff(params: OperationParams<GeneratedOperations["post_RoleAddRoleUserFromStaff"]>): OperationResponse<GeneratedOperations["post_RoleAddRoleUserFromStaff"]> {
    return client.request("/role/addRoleUserFromStaff", "post", params);
  },
  OperLogsLast(params: OperationParams<GeneratedOperations["post_OperLogsLast"]>): OperationResponse<GeneratedOperations["post_OperLogsLast"]> {
    return client.request("/operLogs/last", "post", params);
  },
  AppraiseItemAllUnit(params: OperationParams<GeneratedOperations["post_AppraiseItemAllUnit"]>): OperationResponse<GeneratedOperations["post_AppraiseItemAllUnit"]> {
    return client.request("/appraiseItem/allUnit", "post", params);
  },
  AppraiseItemUpdateGroupById(params: OperationParams<GeneratedOperations["post_AppraiseItemUpdateGroupById"]>): OperationResponse<GeneratedOperations["post_AppraiseItemUpdateGroupById"]> {
    return client.request("/appraiseItem/updateGroupById", "post", params);
  },
  AppraiseItemRemoveGroupById(params: OperationParams<GeneratedOperations["post_AppraiseItemRemoveGroupById"]>): OperationResponse<GeneratedOperations["post_AppraiseItemRemoveGroupById"]> {
    return client.request("/appraiseItem/removeGroupById", "post", params);
  },
  AppraiseItemSaveAppraiseGroup(params: OperationParams<GeneratedOperations["post_AppraiseItemSaveAppraiseGroup"]>): OperationResponse<GeneratedOperations["post_AppraiseItemSaveAppraiseGroup"]> {
    return client.request("/appraiseItem/saveAppraiseGroup", "post", params);
  },
  AppraiseItemAllCompanyAppraiseGroup(params: OperationParams<GeneratedOperations["post_AppraiseItemAllCompanyAppraiseGroup"]>): OperationResponse<GeneratedOperations["post_AppraiseItemAllCompanyAppraiseGroup"]> {
    return client.request("/appraiseItem/allCompanyAppraiseGroup", "post", params);
  },
  AppraiseItemDraw(params: OperationParams<GeneratedOperations["post_AppraiseItemDraw"]>): OperationResponse<GeneratedOperations["post_AppraiseItemDraw"]> {
    return client.request("/appraiseItem/draw", "post", params);
  },
  AppraiseItemDrawV2(params: OperationParams<GeneratedOperations["post_AppraiseItemDrawV2"]>): OperationResponse<GeneratedOperations["post_AppraiseItemDrawV2"]> {
    return client.request("/appraiseItem/drawV2", "post", params);
  },
  AppraiseItemPage(params: OperationParams<GeneratedOperations["post_AppraiseItemPage"]>): OperationResponse<GeneratedOperations["post_AppraiseItemPage"]> {
    return client.request("/appraiseItem/page", "post", params);
  },
  AppraiseItemGetById(params: OperationParams<GeneratedOperations["post_AppraiseItemGetById"]>): OperationResponse<GeneratedOperations["post_AppraiseItemGetById"]> {
    return client.request("/appraiseItem/getById", "post", params);
  },
  AppraiseItemSave(params: OperationParams<GeneratedOperations["post_AppraiseItemSave"]>): OperationResponse<GeneratedOperations["post_AppraiseItemSave"]> {
    return client.request("/appraiseItem/save", "post", params);
  },
  AppraiseItemUpdateById(params: OperationParams<GeneratedOperations["post_AppraiseItemUpdateById"]>): OperationResponse<GeneratedOperations["post_AppraiseItemUpdateById"]> {
    return client.request("/appraiseItem/updateById", "post", params);
  },
  AppraiseItemRemoveById(params: OperationParams<GeneratedOperations["post_AppraiseItemRemoveById"]>): OperationResponse<GeneratedOperations["post_AppraiseItemRemoveById"]> {
    return client.request("/appraiseItem/removeById", "post", params);
  },
  StaffFieldPointList(params: OperationParams<GeneratedOperations["post_StaffFieldPointList"]>): OperationResponse<GeneratedOperations["post_StaffFieldPointList"]> {
    return client.request("/staff/field/point/list", "post", params);
  },
  StaffFieldList(params: OperationParams<GeneratedOperations["post_StaffFieldList"]>): OperationResponse<GeneratedOperations["post_StaffFieldList"]> {
    return client.request("/staff/field/list", "post", params);
  },
  StaffFieldCustomAdd(params: OperationParams<GeneratedOperations["post_StaffFieldCustomAdd"]>): OperationResponse<GeneratedOperations["post_StaffFieldCustomAdd"]> {
    return client.request("/staff/field/custom/add", "post", params);
  },
  StaffFieldCustomDelete(params: OperationParams<GeneratedOperations["post_StaffFieldCustomDelete"]>): OperationResponse<GeneratedOperations["post_StaffFieldCustomDelete"]> {
    return client.request("/staff/field/custom/delete", "post", params);
  },
  StaffFieldCustomDetail(params: OperationParams<GeneratedOperations["post_StaffFieldCustomDetail"]>): OperationResponse<GeneratedOperations["post_StaffFieldCustomDetail"]> {
    return client.request("/staff/field/custom/detail", "post", params);
  },
  StaffFieldGroups(params: OperationParams<GeneratedOperations["post_StaffFieldGroups"]>): OperationResponse<GeneratedOperations["post_StaffFieldGroups"]> {
    return client.request("/staff/field/groups", "post", params);
  },
  StaffFieldConfigs(params: OperationParams<GeneratedOperations["post_StaffFieldConfigs"]>): OperationResponse<GeneratedOperations["post_StaffFieldConfigs"]> {
    return client.request("/staff/field/configs", "post", params);
  },
  StaffFieldConfigDetail(params: OperationParams<GeneratedOperations["post_StaffFieldConfigDetail"]>): OperationResponse<GeneratedOperations["post_StaffFieldConfigDetail"]> {
    return client.request("/staff/field/config/detail", "post", params);
  },
  StaffFieldConfigUpdate(params: OperationParams<GeneratedOperations["post_StaffFieldConfigUpdate"]>): OperationResponse<GeneratedOperations["post_StaffFieldConfigUpdate"]> {
    return client.request("/staff/field/config/update", "post", params);
  },
  StaffFieldConfigUpdateSingle(params: OperationParams<GeneratedOperations["post_StaffFieldConfigUpdateSingle"]>): OperationResponse<GeneratedOperations["post_StaffFieldConfigUpdateSingle"]> {
    return client.request("/staff/field/config/updateSingle", "post", params);
  },
  StaffFieldTemplateSave(params: OperationParams<GeneratedOperations["post_StaffFieldTemplateSave"]>): OperationResponse<GeneratedOperations["post_StaffFieldTemplateSave"]> {
    return client.request("/staff/field/template/save", "post", params);
  },
  StaffRosterStatistics(params: OperationParams<GeneratedOperations["post_StaffRosterStatistics"]>): OperationResponse<GeneratedOperations["post_StaffRosterStatistics"]> {
    return client.request("/staff/roster/statistics", "post", params);
  },
  StaffRosterCreate(params: OperationParams<GeneratedOperations["post_StaffRosterCreate"]>): OperationResponse<GeneratedOperations["post_StaffRosterCreate"]> {
    return client.request("/staff/roster/create", "post", params);
  },
  StaffRosterDetail(params: OperationParams<GeneratedOperations["post_StaffRosterDetail"]>): OperationResponse<GeneratedOperations["post_StaffRosterDetail"]> {
    return client.request("/staff/roster/detail", "post", params);
  },
  StaffRosterUpdate(params: OperationParams<GeneratedOperations["post_StaffRosterUpdate"]>): OperationResponse<GeneratedOperations["post_StaffRosterUpdate"]> {
    return client.request("/staff/roster/update", "post", params);
  },
  StaffRosterPage(params: OperationParams<GeneratedOperations["post_StaffRosterPage"]>): OperationResponse<GeneratedOperations["post_StaffRosterPage"]> {
    return client.request("/staff/roster/page", "post", params);
  },
  StaffRosterFieldUpdate(params: OperationParams<GeneratedOperations["post_StaffRosterFieldUpdate"]>): OperationResponse<GeneratedOperations["post_StaffRosterFieldUpdate"]> {
    return client.request("/staff/roster/field/update", "post", params);
  },
  StaffRosterOrderSet(params: OperationParams<GeneratedOperations["post_StaffRosterOrderSet"]>): OperationResponse<GeneratedOperations["post_StaffRosterOrderSet"]> {
    return client.request("/staff/roster/order/set", "post", params);
  },
  AppraiseDeptConfigList(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigList"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigList"]> {
    return client.request("/appraiseDeptConfig/list", "post", params);
  },
  AppraiseDeptConfigGetById(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigGetById"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigGetById"]> {
    return client.request("/appraiseDeptConfig/getById", "post", params);
  },
  AppraiseDeptConfigSave(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigSave"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigSave"]> {
    return client.request("/appraiseDeptConfig/save", "post", params);
  },
  AppraiseDeptConfigSaveCycle(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigSaveCycle"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigSaveCycle"]> {
    return client.request("/appraiseDeptConfig/saveCycle", "post", params);
  },
  AppraiseDeptConfigUpdateById(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigUpdateById"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigUpdateById"]> {
    return client.request("/appraiseDeptConfig/updateById", "post", params);
  },
  AppraiseDeptConfigRemoveById(params: OperationParams<GeneratedOperations["post_AppraiseDeptConfigRemoveById"]>): OperationResponse<GeneratedOperations["post_AppraiseDeptConfigRemoveById"]> {
    return client.request("/appraiseDeptConfig/removeById", "post", params);
  },
  AppraiseConfigGetCurrentCompanyConfig(params: OperationParams<GeneratedOperations["post_AppraiseConfigGetCurrentCompanyConfig"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigGetCurrentCompanyConfig"]> {
    return client.request("/appraiseConfig/getCurrentCompanyConfig", "post", params);
  },
  AppraiseConfigGetById(params: OperationParams<GeneratedOperations["post_AppraiseConfigGetById"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigGetById"]> {
    return client.request("/appraiseConfig/getById", "post", params);
  },
  AppraiseConfigSaveOrUpdateCycle(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateCycle"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateCycle"]> {
    return client.request("/appraiseConfig/saveOrUpdateCycle", "post", params);
  },
  AppraiseConfigSaveOrUpdateShowStyle(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateShowStyle"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateShowStyle"]> {
    return client.request("/appraiseConfig/saveOrUpdateShowStyle", "post", params);
  },
  AppraiseConfigSaveOrUpdateShowType(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateShowType"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateShowType"]> {
    return client.request("/appraiseConfig/saveOrUpdateShowType", "post", params);
  },
  AppraiseConfigSaveOrUpdateOKRType(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateOKRType"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateOKRType"]> {
    return client.request("/appraiseConfig/saveOrUpdateOKRType", "post", params);
  },
  AppraiseConfigSaveOrUpdateScoreMapping(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateScoreMapping"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateScoreMapping"]> {
    return client.request("/appraiseConfig/saveOrUpdateScoreMapping", "post", params);
  },
  AppraiseConfigSaveOrUpdateRatingConfig(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateRatingConfig"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateRatingConfig"]> {
    return client.request("/appraiseConfig/saveOrUpdateRatingConfig", "post", params);
  },
  AppraiseConfigSaveOrUpdateScoreConfig(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateScoreConfig"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateScoreConfig"]> {
    return client.request("/appraiseConfig/saveOrUpdateScoreConfig", "post", params);
  },
  AppraiseConfigSaveOrUpdateKPIScoreConfig(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateKPIScoreConfig"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateKPIScoreConfig"]> {
    return client.request("/appraiseConfig/saveOrUpdateKPIScoreConfig", "post", params);
  },
  AppraiseConfigGetForcedRule(params: OperationParams<GeneratedOperations["post_AppraiseConfigGetForcedRule"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigGetForcedRule"]> {
    return client.request("/appraiseConfig/getForcedRule", "post", params);
  },
  AppraiseConfigSaveOrUpdateForcedRule(params: OperationParams<GeneratedOperations["post_AppraiseConfigSaveOrUpdateForcedRule"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigSaveOrUpdateForcedRule"]> {
    return client.request("/appraiseConfig/saveOrUpdateForcedRule", "post", params);
  },
  AppraiseConfigUpdateForceLeader(params: OperationParams<GeneratedOperations["post_AppraiseConfigUpdateForceLeader"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigUpdateForceLeader"]> {
    return client.request("/appraiseConfig/updateForceLeader", "post", params);
  },
  AppraiseConfigForcedRuleDetail(params: OperationParams<GeneratedOperations["post_AppraiseConfigForcedRuleDetail"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigForcedRuleDetail"]> {
    return client.request("/appraiseConfig/forcedRuleDetail", "post", params);
  },
  AppraiseConfigDeleteForcedRule(params: OperationParams<GeneratedOperations["post_AppraiseConfigDeleteForcedRule"]>): OperationResponse<GeneratedOperations["post_AppraiseConfigDeleteForcedRule"]> {
    return client.request("/appraiseConfig/deleteForcedRule", "post", params);
  },
  AppraisePostTableCopy(params: OperationParams<GeneratedOperations["post_AppraisePostTableCopy"]>): OperationResponse<GeneratedOperations["post_AppraisePostTableCopy"]> {
    return client.request("/appraisePostTable/copy", "post", params);
  },
  AppraisePostTableCreateTable(params: OperationParams<GeneratedOperations["post_AppraisePostTableCreateTable"]>): OperationResponse<GeneratedOperations["post_AppraisePostTableCreateTable"]> {
    return client.request("/appraisePostTable/createTable", "post", params);
  },
  AppraisePostTableQueryTable(params: OperationParams<GeneratedOperations["post_AppraisePostTableQueryTable"]>): OperationResponse<GeneratedOperations["post_AppraisePostTableQueryTable"]> {
    return client.request("/appraisePostTable/queryTable", "post", params);
  },
  AppraisePostTablePostTableGroupByDept(params: OperationParams<GeneratedOperations["post_AppraisePostTablePostTableGroupByDept"]>): OperationResponse<GeneratedOperations["post_AppraisePostTablePostTableGroupByDept"]> {
    return client.request("/appraisePostTable/postTableGroupByDept", "post", params);
  },
  AppraisePostTableForcedDeptPost(params: OperationParams<GeneratedOperations["post_AppraisePostTableForcedDeptPost"]>): OperationResponse<GeneratedOperations["post_AppraisePostTableForcedDeptPost"]> {
    return client.request("/appraisePostTable/forcedDeptPost", "post", params);
  },
  SCloudFilePage(params: OperationParams<GeneratedOperations["post_SCloudFilePage"]>): OperationResponse<GeneratedOperations["post_SCloudFilePage"]> {
    return client.request("/sCloud/file/page", "post", params);
  },
  SCloudFilePagePicSummary(params: OperationParams<GeneratedOperations["post_SCloudFilePagePicSummary"]>): OperationResponse<GeneratedOperations["post_SCloudFilePagePicSummary"]> {
    return client.request("/sCloud/file/pagePicSummary", "post", params);
  },
  SCloudFileSpace(params: OperationParams<GeneratedOperations["post_SCloudFileSpace"]>): OperationResponse<GeneratedOperations["post_SCloudFileSpace"]> {
    return client.request("/sCloud/file/space", "post", params);
  },
  SCloudFileDel(params: OperationParams<GeneratedOperations["post_SCloudFileDel"]>): OperationResponse<GeneratedOperations["post_SCloudFileDel"]> {
    return client.request("/sCloud/file/del", "post", params);
  },
  SCloudFileUpload(params: OperationParams<GeneratedOperations["post_SCloudFileUpload"]>): OperationResponse<GeneratedOperations["post_SCloudFileUpload"]> {
    return client.request("/sCloud/file/upload", "post", params);
  },
  SCloudFileDownload(params: OperationParams<GeneratedOperations["post_SCloudFileDownload"]>): OperationResponse<GeneratedOperations["post_SCloudFileDownload"]> {
    return client.request("/sCloud/file/download", "post", params);
  },
  SCloudFileSaveFolder(params: OperationParams<GeneratedOperations["post_SCloudFileSaveFolder"]>): OperationResponse<GeneratedOperations["post_SCloudFileSaveFolder"]> {
    return client.request("/sCloud/file/saveFolder", "post", params);
  },
  SCloudFileDownloadId(params: OperationParams<GeneratedOperations["post_SCloudFileDownloadId"]>): OperationResponse<GeneratedOperations["post_SCloudFileDownloadId"]> {
    return client.request("/sCloud/file/download/{id}", "post", params);
  },
  SCloudFileGetViewUrlId(params: OperationParams<GeneratedOperations["post_SCloudFileGetViewUrlId"]>): OperationResponse<GeneratedOperations["post_SCloudFileGetViewUrlId"]> {
    return client.request("/sCloud/file/getViewUrl/{id}", "post", params);
  },
  SCloudDirPage(params: OperationParams<GeneratedOperations["post_SCloudDirPage"]>): OperationResponse<GeneratedOperations["post_SCloudDirPage"]> {
    return client.request("/sCloud/dir/page", "post", params);
  },
  SCloudDirDel(params: OperationParams<GeneratedOperations["post_SCloudDirDel"]>): OperationResponse<GeneratedOperations["post_SCloudDirDel"]> {
    return client.request("/sCloud/dir/del", "post", params);
  },
  SCloudDirChangeOwner(params: OperationParams<GeneratedOperations["post_SCloudDirChangeOwner"]>): OperationResponse<GeneratedOperations["post_SCloudDirChangeOwner"]> {
    return client.request("/sCloud/dir/changeOwner", "post", params);
  },
  SCloudDirClosePower(params: OperationParams<GeneratedOperations["post_SCloudDirClosePower"]>): OperationResponse<GeneratedOperations["post_SCloudDirClosePower"]> {
    return client.request("/sCloud/dir/closePower", "post", params);
  },
  SCloudDirOpenShare(params: OperationParams<GeneratedOperations["post_SCloudDirOpenShare"]>): OperationResponse<GeneratedOperations["post_SCloudDirOpenShare"]> {
    return client.request("/sCloud/dir/openShare", "post", params);
  },
  SCloudDirRemoveShareTarget(params: OperationParams<GeneratedOperations["post_SCloudDirRemoveShareTarget"]>): OperationResponse<GeneratedOperations["post_SCloudDirRemoveShareTarget"]> {
    return client.request("/sCloud/dir/removeShareTarget", "post", params);
  },
  SCloudDirAddShareTarget(params: OperationParams<GeneratedOperations["post_SCloudDirAddShareTarget"]>): OperationResponse<GeneratedOperations["post_SCloudDirAddShareTarget"]> {
    return client.request("/sCloud/dir/addShareTarget", "post", params);
  },
  SCloudDirDetail(params: OperationParams<GeneratedOperations["post_SCloudDirDetail"]>): OperationResponse<GeneratedOperations["post_SCloudDirDetail"]> {
    return client.request("/sCloud/dir/detail", "post", params);
  },
  SCloudDirSaveA(params: OperationParams<GeneratedOperations["post_SCloudDirSaveA"]>): OperationResponse<GeneratedOperations["post_SCloudDirSaveA"]> {
    return client.request("/sCloud/dir/saveA", "post", params);
  },
  SCloudDirSaveE(params: OperationParams<GeneratedOperations["post_SCloudDirSaveE"]>): OperationResponse<GeneratedOperations["post_SCloudDirSaveE"]> {
    return client.request("/sCloud/dir/saveE", "post", params);
  },
  AppraiseStaffValueLike(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueLike"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueLike"]> {
    return client.request("/appraiseStaffValue/like", "post", params);
  },
  AppraiseStaffValueStaffDimension(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueStaffDimension"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueStaffDimension"]> {
    return client.request("/appraiseStaffValue/staffDimension", "post", params);
  },
  AppraiseStaffValueYearStaffTree(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueYearStaffTree"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueYearStaffTree"]> {
    return client.request("/appraiseStaffValue/yearStaffTree", "post", params);
  },
  AppraiseStaffValueNonCommonItemList(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueNonCommonItemList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueNonCommonItemList"]> {
    return client.request("/appraiseStaffValue/nonCommonItemList", "post", params);
  },
  AppraiseStaffValueCommonItemList(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueCommonItemList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueCommonItemList"]> {
    return client.request("/appraiseStaffValue/commonItemList", "post", params);
  },
  AppraiseStaffValueSaveStaff(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueSaveStaff"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueSaveStaff"]> {
    return client.request("/appraiseStaffValue/saveStaff", "post", params);
  },
  AppraiseStaffValueSave(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueSave"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueSave"]> {
    return client.request("/appraiseStaffValue/save", "post", params);
  },
  AppraiseStaffValueImport(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueImport"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueImport"]> {
    return client.request("/appraiseStaffValue/import", "post", params);
  },
  AppraiseStaffValueCopy(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueCopy"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueCopy"]> {
    return client.request("/appraiseStaffValue/copy", "post", params);
  },
  AppraiseStaffValueImportStaffComplateValue(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueImportStaffComplateValue"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueImportStaffComplateValue"]> {
    return client.request("/appraiseStaffValue/importStaffComplateValue", "post", params);
  },
  AppraiseStaffValueSaveStaffComplateValue(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueSaveStaffComplateValue"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueSaveStaffComplateValue"]> {
    return client.request("/appraiseStaffValue/saveStaffComplateValue", "post", params);
  },
  AppraiseStaffValueRefreshTarget(params: OperationParams<GeneratedOperations["post_AppraiseStaffValueRefreshTarget"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffValueRefreshTarget"]> {
    return client.request("/appraiseStaffValue/refreshTarget", "post", params);
  },
  TestXxljobGetJobGroupById(params: OperationParams<GeneratedOperations["post_TestXxljobGetJobGroupById"]>): OperationResponse<GeneratedOperations["post_TestXxljobGetJobGroupById"]> {
    return client.request("/test/xxljob/getJobGroupById", "post", params);
  },
  TestXxljobAddJobGroupAndJobInfo(params: OperationParams<GeneratedOperations["post_TestXxljobAddJobGroupAndJobInfo"]>): OperationResponse<GeneratedOperations["post_TestXxljobAddJobGroupAndJobInfo"]> {
    return client.request("/test/xxljob/addJobGroupAndJobInfo", "post", params);
  },
  TestXxljobAddJob(params: OperationParams<GeneratedOperations["post_TestXxljobAddJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobAddJob"]> {
    return client.request("/test/xxljob/addJob", "post", params);
  },
  TestXxljobAddJobInfo(params: OperationParams<GeneratedOperations["post_TestXxljobAddJobInfo"]>): OperationResponse<GeneratedOperations["post_TestXxljobAddJobInfo"]> {
    return client.request("/test/xxljob/addJobInfo", "post", params);
  },
  TestXxljobRemoveJob(params: OperationParams<GeneratedOperations["post_TestXxljobRemoveJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobRemoveJob"]> {
    return client.request("/test/xxljob/removeJob", "post", params);
  },
  TestXxljobUpdateJob(params: OperationParams<GeneratedOperations["post_TestXxljobUpdateJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobUpdateJob"]> {
    return client.request("/test/xxljob/updateJob", "post", params);
  },
  TestXxljobPageListJob(params: OperationParams<GeneratedOperations["post_TestXxljobPageListJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobPageListJob"]> {
    return client.request("/test/xxljob/pageListJob", "post", params);
  },
  TestXxljobStartJob(params: OperationParams<GeneratedOperations["post_TestXxljobStartJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobStartJob"]> {
    return client.request("/test/xxljob/startJob", "post", params);
  },
  TestXxljobStopJob(params: OperationParams<GeneratedOperations["post_TestXxljobStopJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobStopJob"]> {
    return client.request("/test/xxljob/stopJob", "post", params);
  },
  TestXxljobTestBirthdayWithoutXxlJob(params: OperationParams<GeneratedOperations["post_TestXxljobTestBirthdayWithoutXxlJob"]>): OperationResponse<GeneratedOperations["post_TestXxljobTestBirthdayWithoutXxlJob"]> {
    return client.request("/test/xxljob/testBirthdayWithoutXxlJob", "post", params);
  },
  TestXxljobTrigger(params: OperationParams<GeneratedOperations["post_TestXxljobTrigger"]>): OperationResponse<GeneratedOperations["post_TestXxljobTrigger"]> {
    return client.request("/test/xxljob/trigger", "post", params);
  },
  TestXxljobGetJobInfoById(params: OperationParams<GeneratedOperations["post_TestXxljobGetJobInfoById"]>): OperationResponse<GeneratedOperations["post_TestXxljobGetJobInfoById"]> {
    return client.request("/test/xxljob/getJobInfoById", "post", params);
  },
  TeamCalendarTaskCreate(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskCreate"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskCreate"]> {
    return client.request("/teamCalendarTask/create", "post", params);
  },
  TeamCalendarTaskModify(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskModify"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskModify"]> {
    return client.request("/teamCalendarTask/modify", "post", params);
  },
  TeamCalendarTaskDelete(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskDelete"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskDelete"]> {
    return client.request("/teamCalendarTask/delete", "post", params);
  },
  TeamCalendarTaskDetail(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskDetail"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskDetail"]> {
    return client.request("/teamCalendarTask/detail", "post", params);
  },
  TeamCalendarTaskCreateOrModifySetting(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskCreateOrModifySetting"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskCreateOrModifySetting"]> {
    return client.request("/teamCalendarTask/createOrModifySetting", "post", params);
  },
  TeamCalendarTaskQuerySetting(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskQuerySetting"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskQuerySetting"]> {
    return client.request("/teamCalendarTask/querySetting", "post", params);
  },
  TeamCalendarTaskQueryList(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskQueryList"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskQueryList"]> {
    return client.request("/teamCalendarTask/queryList", "post", params);
  },
  TeamCalendarTaskQuerySelfCreatePage(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskQuerySelfCreatePage"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskQuerySelfCreatePage"]> {
    return client.request("/teamCalendarTask/querySelfCreatePage", "post", params);
  },
  TeamCalendarTaskMaQueryList(params: OperationParams<GeneratedOperations["post_TeamCalendarTaskMaQueryList"]>): OperationResponse<GeneratedOperations["post_TeamCalendarTaskMaQueryList"]> {
    return client.request("/teamCalendarTask/ma/queryList", "post", params);
  },
  DocNoticeUserGetTypes(params: OperationParams<GeneratedOperations["post_DocNoticeUserGetTypes"]>): OperationResponse<GeneratedOperations["post_DocNoticeUserGetTypes"]> {
    return client.request("/doc/notice/userGetTypes", "post", params);
  },
  DocNoticeGetTypes(params: OperationParams<GeneratedOperations["post_DocNoticeGetTypes"]>): OperationResponse<GeneratedOperations["post_DocNoticeGetTypes"]> {
    return client.request("/doc/notice/getTypes", "post", params);
  },
  DocNoticeTypeSaveA(params: OperationParams<GeneratedOperations["post_DocNoticeTypeSaveA"]>): OperationResponse<GeneratedOperations["post_DocNoticeTypeSaveA"]> {
    return client.request("/doc/notice/type/saveA", "post", params);
  },
  DocNoticeTypeSaveE(params: OperationParams<GeneratedOperations["post_DocNoticeTypeSaveE"]>): OperationResponse<GeneratedOperations["post_DocNoticeTypeSaveE"]> {
    return client.request("/doc/notice/type/saveE", "post", params);
  },
  DocNoticeTypeDel(params: OperationParams<GeneratedOperations["post_DocNoticeTypeDel"]>): OperationResponse<GeneratedOperations["post_DocNoticeTypeDel"]> {
    return client.request("/doc/notice/type/del", "post", params);
  },
  DocNoticeTypeUnReadCntForU(params: OperationParams<GeneratedOperations["post_DocNoticeTypeUnReadCntForU"]>): OperationResponse<GeneratedOperations["post_DocNoticeTypeUnReadCntForU"]> {
    return client.request("/doc/notice/type/unReadCntForU", "post", params);
  },
  DocNoticeTypeUnSignCntForU(params: OperationParams<GeneratedOperations["post_DocNoticeTypeUnSignCntForU"]>): OperationResponse<GeneratedOperations["post_DocNoticeTypeUnSignCntForU"]> {
    return client.request("/doc/notice/type/unSignCntForU", "post", params);
  },
  DocNoticeReadPages(params: OperationParams<GeneratedOperations["post_DocNoticeReadPages"]>): OperationResponse<GeneratedOperations["post_DocNoticeReadPages"]> {
    return client.request("/doc/notice/read/pages", "post", params);
  },
  DocNoticeReadMustRead(params: OperationParams<GeneratedOperations["post_DocNoticeReadMustRead"]>): OperationResponse<GeneratedOperations["post_DocNoticeReadMustRead"]> {
    return client.request("/doc/notice/read/mustRead", "post", params);
  },
  DocNoticeManagePages(params: OperationParams<GeneratedOperations["post_DocNoticeManagePages"]>): OperationResponse<GeneratedOperations["post_DocNoticeManagePages"]> {
    return client.request("/doc/notice/manage/pages", "post", params);
  },
  DocNoticeReadId(params: OperationParams<GeneratedOperations["post_DocNoticeReadId"]>): OperationResponse<GeneratedOperations["post_DocNoticeReadId"]> {
    return client.request("/doc/notice/read/{id}", "post", params);
  },
  DocNoticeReadConfirmId(params: OperationParams<GeneratedOperations["post_DocNoticeReadConfirmId"]>): OperationResponse<GeneratedOperations["post_DocNoticeReadConfirmId"]> {
    return client.request("/doc/notice/read/confirm/{id}", "post", params);
  },
  DocNoticeFileDownloadId(params: OperationParams<GeneratedOperations["post_DocNoticeFileDownloadId"]>): OperationResponse<GeneratedOperations["post_DocNoticeFileDownloadId"]> {
    return client.request("/doc/notice/file/download/{id}", "post", params);
  },
  DocNoticeFileGetViewUrlId(params: OperationParams<GeneratedOperations["post_DocNoticeFileGetViewUrlId"]>): OperationResponse<GeneratedOperations["post_DocNoticeFileGetViewUrlId"]> {
    return client.request("/doc/notice/file/getViewUrl/{id}", "post", params);
  },
  DocNoticeDetailId(params: OperationParams<GeneratedOperations["post_DocNoticeDetailId"]>): OperationResponse<GeneratedOperations["post_DocNoticeDetailId"]> {
    return client.request("/doc/notice/detail/{id}", "post", params);
  },
  DocNoticeDPages(params: OperationParams<GeneratedOperations["post_DocNoticeDPages"]>): OperationResponse<GeneratedOperations["post_DocNoticeDPages"]> {
    return client.request("/doc/notice/d/pages", "post", params);
  },
  DocNoticeSaveA(params: OperationParams<GeneratedOperations["post_DocNoticeSaveA"]>): OperationResponse<GeneratedOperations["post_DocNoticeSaveA"]> {
    return client.request("/doc/notice/saveA", "post", params);
  },
  DocNoticeSaveE(params: OperationParams<GeneratedOperations["post_DocNoticeSaveE"]>): OperationResponse<GeneratedOperations["post_DocNoticeSaveE"]> {
    return client.request("/doc/notice/saveE", "post", params);
  },
  DocNoticeApplyPub(params: OperationParams<GeneratedOperations["post_DocNoticeApplyPub"]>): OperationResponse<GeneratedOperations["post_DocNoticeApplyPub"]> {
    return client.request("/doc/notice/applyPub", "post", params);
  },
  DocNoticePub(params: OperationParams<GeneratedOperations["post_DocNoticePub"]>): OperationResponse<GeneratedOperations["post_DocNoticePub"]> {
    return client.request("/doc/notice/pub", "post", params);
  },
  DocNoticeRollback(params: OperationParams<GeneratedOperations["post_DocNoticeRollback"]>): OperationResponse<GeneratedOperations["post_DocNoticeRollback"]> {
    return client.request("/doc/notice/rollback", "post", params);
  },
  DocNoticeRollbackApply(params: OperationParams<GeneratedOperations["post_DocNoticeRollbackApply"]>): OperationResponse<GeneratedOperations["post_DocNoticeRollbackApply"]> {
    return client.request("/doc/notice/rollbackApply", "post", params);
  },
  DocNoticeAddRange(params: OperationParams<GeneratedOperations["post_DocNoticeAddRange"]>): OperationResponse<GeneratedOperations["post_DocNoticeAddRange"]> {
    return client.request("/doc/notice/addRange", "post", params);
  },
  DocNoticeRemoveRange(params: OperationParams<GeneratedOperations["post_DocNoticeRemoveRange"]>): OperationResponse<GeneratedOperations["post_DocNoticeRemoveRange"]> {
    return client.request("/doc/notice/removeRange", "post", params);
  },
  DocNoticeDel(params: OperationParams<GeneratedOperations["post_DocNoticeDel"]>): OperationResponse<GeneratedOperations["post_DocNoticeDel"]> {
    return client.request("/doc/notice/del", "post", params);
  },
  DocNoticeRemind(params: OperationParams<GeneratedOperations["post_DocNoticeRemind"]>): OperationResponse<GeneratedOperations["post_DocNoticeRemind"]> {
    return client.request("/doc/notice/remind", "post", params);
  },
  DocNoticeSign(params: OperationParams<GeneratedOperations["post_DocNoticeSign"]>): OperationResponse<GeneratedOperations["post_DocNoticeSign"]> {
    return client.request("/doc/notice/sign", "post", params);
  },
  DocNoticeResign(params: OperationParams<GeneratedOperations["post_DocNoticeResign"]>): OperationResponse<GeneratedOperations["post_DocNoticeResign"]> {
    return client.request("/doc/notice/resign", "post", params);
  },
  DocNoticeOfflineSign(params: OperationParams<GeneratedOperations["post_DocNoticeOfflineSign"]>): OperationResponse<GeneratedOperations["post_DocNoticeOfflineSign"]> {
    return client.request("/doc/notice/offlineSign", "post", params);
  },
  DocNoticeEditRange(params: OperationParams<GeneratedOperations["post_DocNoticeEditRange"]>): OperationResponse<GeneratedOperations["post_DocNoticeEditRange"]> {
    return client.request("/doc/notice/editRange", "post", params);
  },
  DocNoticeMatchBoard(params: OperationParams<GeneratedOperations["post_DocNoticeMatchBoard"]>): OperationResponse<GeneratedOperations["post_DocNoticeMatchBoard"]> {
    return client.request("/doc/notice/matchBoard", "post", params);
  },
  DocNoticeDownloadPdfWithSign(params: OperationParams<GeneratedOperations["post_DocNoticeDownloadPdfWithSign"]>): OperationResponse<GeneratedOperations["post_DocNoticeDownloadPdfWithSign"]> {
    return client.request("/doc/notice/download/pdfWithSign", "post", params);
  },
  DocNoticeUnsignTimeout(params: OperationParams<GeneratedOperations["post_DocNoticeUnsignTimeout"]>): OperationResponse<GeneratedOperations["post_DocNoticeUnsignTimeout"]> {
    return client.request("/doc/notice/unsign/timeout", "post", params);
  },
  ExcelExportNoticeDCommit(params: OperationParams<GeneratedOperations["post_ExcelExportNoticeDCommit"]>): OperationResponse<GeneratedOperations["post_ExcelExportNoticeDCommit"]> {
    return client.request("/excel/export/noticeD/commit", "post", params);
  },
  AppraiseProjectSelfAppraise(params: OperationParams<GeneratedOperations["post_AppraiseProjectSelfAppraise"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectSelfAppraise"]> {
    return client.request("/appraiseProject/selfAppraise", "post", params);
  },
  AppraiseProjectPreviewCount(params: OperationParams<GeneratedOperations["post_AppraiseProjectPreviewCount"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectPreviewCount"]> {
    return client.request("/appraiseProject/previewCount", "post", params);
  },
  AppraiseProjectLeaderAppraise(params: OperationParams<GeneratedOperations["post_AppraiseProjectLeaderAppraise"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectLeaderAppraise"]> {
    return client.request("/appraiseProject/leaderAppraise", "post", params);
  },
  AppraiseProjectHrAppraise(params: OperationParams<GeneratedOperations["post_AppraiseProjectHrAppraise"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectHrAppraise"]> {
    return client.request("/appraiseProject/hrAppraise", "post", params);
  },
  AppraiseProjectLeaderFace(params: OperationParams<GeneratedOperations["post_AppraiseProjectLeaderFace"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectLeaderFace"]> {
    return client.request("/appraiseProject/leaderFace", "post", params);
  },
  AppraiseProjectReset(params: OperationParams<GeneratedOperations["post_AppraiseProjectReset"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectReset"]> {
    return client.request("/appraiseProject/reset", "post", params);
  },
  AppraiseProjectResetList(params: OperationParams<GeneratedOperations["post_AppraiseProjectResetList"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectResetList"]> {
    return client.request("/appraiseProject/resetList", "post", params);
  },
  AppraiseProjectResetGroup(params: OperationParams<GeneratedOperations["post_AppraiseProjectResetGroup"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectResetGroup"]> {
    return client.request("/appraiseProject/resetGroup", "post", params);
  },
  AppraiseProjectResetStaff(params: OperationParams<GeneratedOperations["post_AppraiseProjectResetStaff"]>): OperationResponse<GeneratedOperations["post_AppraiseProjectResetStaff"]> {
    return client.request("/appraiseProject/resetStaff", "post", params);
  },
  WorkPlanList(params: OperationParams<GeneratedOperations["post_WorkPlanList"]>): OperationResponse<GeneratedOperations["post_WorkPlanList"]> {
    return client.request("/work/plan/list", "post", params);
  },
  WorkPlanGetProjectListByPage(params: OperationParams<GeneratedOperations["post_WorkPlanGetProjectListByPage"]>): OperationResponse<GeneratedOperations["post_WorkPlanGetProjectListByPage"]> {
    return client.request("/work/plan/getProjectListByPage", "post", params);
  },
  WorkPlanListGroup(params: OperationParams<GeneratedOperations["post_WorkPlanListGroup"]>): OperationResponse<GeneratedOperations["post_WorkPlanListGroup"]> {
    return client.request("/work/plan/list/group", "post", params);
  },
  WorkPlanListByGroupId(params: OperationParams<GeneratedOperations["post_WorkPlanListByGroupId"]>): OperationResponse<GeneratedOperations["post_WorkPlanListByGroupId"]> {
    return client.request("/work/plan/list/by/group/id", "post", params);
  },
  WorkPlanGetDetail(params: OperationParams<GeneratedOperations["post_WorkPlanGetDetail"]>): OperationResponse<GeneratedOperations["post_WorkPlanGetDetail"]> {
    return client.request("/work/plan/get/detail", "post", params);
  },
  WorkPlanGetProjectDetail(params: OperationParams<GeneratedOperations["post_WorkPlanGetProjectDetail"]>): OperationResponse<GeneratedOperations["post_WorkPlanGetProjectDetail"]> {
    return client.request("/work/plan/getProjectDetail", "post", params);
  },
  WorkPlanCreate(params: OperationParams<GeneratedOperations["post_WorkPlanCreate"]>): OperationResponse<GeneratedOperations["post_WorkPlanCreate"]> {
    return client.request("/work/plan/create", "post", params);
  },
  WorkPlanEdit(params: OperationParams<GeneratedOperations["post_WorkPlanEdit"]>): OperationResponse<GeneratedOperations["post_WorkPlanEdit"]> {
    return client.request("/work/plan/edit", "post", params);
  },
  WorkPlanUpdateStatus(params: OperationParams<GeneratedOperations["post_WorkPlanUpdateStatus"]>): OperationResponse<GeneratedOperations["post_WorkPlanUpdateStatus"]> {
    return client.request("/work/plan/update/status", "post", params);
  },
  WorkPlanUpdateProgress(params: OperationParams<GeneratedOperations["post_WorkPlanUpdateProgress"]>): OperationResponse<GeneratedOperations["post_WorkPlanUpdateProgress"]> {
    return client.request("/work/plan/update/progress", "post", params);
  },
  WorkPlanUpdateExecuteTime(params: OperationParams<GeneratedOperations["post_WorkPlanUpdateExecuteTime"]>): OperationResponse<GeneratedOperations["post_WorkPlanUpdateExecuteTime"]> {
    return client.request("/work/plan/update/execute/time", "post", params);
  },
  WorkPlanAssignOrReassign(params: OperationParams<GeneratedOperations["post_WorkPlanAssignOrReassign"]>): OperationResponse<GeneratedOperations["post_WorkPlanAssignOrReassign"]> {
    return client.request("/work/plan/assignOrReassign", "post", params);
  },
  WorkPlanDelete(params: OperationParams<GeneratedOperations["post_WorkPlanDelete"]>): OperationResponse<GeneratedOperations["post_WorkPlanDelete"]> {
    return client.request("/work/plan/delete", "post", params);
  },
  WorkPlanSorted(params: OperationParams<GeneratedOperations["post_WorkPlanSorted"]>): OperationResponse<GeneratedOperations["post_WorkPlanSorted"]> {
    return client.request("/work/plan/sorted", "post", params);
  },
  WorkPlanFollow(params: OperationParams<GeneratedOperations["post_WorkPlanFollow"]>): OperationResponse<GeneratedOperations["post_WorkPlanFollow"]> {
    return client.request("/work/plan/follow", "post", params);
  },
  WorkPlanMove(params: OperationParams<GeneratedOperations["post_WorkPlanMove"]>): OperationResponse<GeneratedOperations["post_WorkPlanMove"]> {
    return client.request("/work/plan/move", "post", params);
  },
  WorkPlanMoveProject(params: OperationParams<GeneratedOperations["post_WorkPlanMoveProject"]>): OperationResponse<GeneratedOperations["post_WorkPlanMoveProject"]> {
    return client.request("/work/plan/moveProject", "post", params);
  },
  WorkPlanEditDirector(params: OperationParams<GeneratedOperations["post_WorkPlanEditDirector"]>): OperationResponse<GeneratedOperations["post_WorkPlanEditDirector"]> {
    return client.request("/work/plan/editDirector", "post", params);
  },
  WorkPlanTopProject(params: OperationParams<GeneratedOperations["post_WorkPlanTopProject"]>): OperationResponse<GeneratedOperations["post_WorkPlanTopProject"]> {
    return client.request("/work/plan/topProject", "post", params);
  },
  WorkPlanAnnotationGetByPage(params: OperationParams<GeneratedOperations["post_WorkPlanAnnotationGetByPage"]>): OperationResponse<GeneratedOperations["post_WorkPlanAnnotationGetByPage"]> {
    return client.request("/work/plan/annotation/get/by/page", "post", params);
  },
  WorkPlanAnnotationCreate(params: OperationParams<GeneratedOperations["post_WorkPlanAnnotationCreate"]>): OperationResponse<GeneratedOperations["post_WorkPlanAnnotationCreate"]> {
    return client.request("/work/plan/annotation/create", "post", params);
  },
  WorkPlanAnnotationDelete(params: OperationParams<GeneratedOperations["post_WorkPlanAnnotationDelete"]>): OperationResponse<GeneratedOperations["post_WorkPlanAnnotationDelete"]> {
    return client.request("/work/plan/annotation/delete", "post", params);
  },
  TaskViewConfigGetDetail(params: OperationParams<GeneratedOperations["post_TaskViewConfigGetDetail"]>): OperationResponse<GeneratedOperations["post_TaskViewConfigGetDetail"]> {
    return client.request("/task/view/config/get/detail", "post", params);
  },
  TaskViewConfigCreate(params: OperationParams<GeneratedOperations["post_TaskViewConfigCreate"]>): OperationResponse<GeneratedOperations["post_TaskViewConfigCreate"]> {
    return client.request("/task/view/config/create", "post", params);
  },
  DailyMonthlyReportList(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportList"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportList"]> {
    return client.request("/daily/monthly/report/list", "post", params);
  },
  DailyMonthlyReportDetail(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportDetail"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportDetail"]> {
    return client.request("/daily/monthly/report/detail", "post", params);
  },
  DailyMonthlyReportCreate(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportCreate"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportCreate"]> {
    return client.request("/daily/monthly/report/create", "post", params);
  },
  DailyMonthlyReportEdit(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportEdit"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportEdit"]> {
    return client.request("/daily/monthly/report/edit", "post", params);
  },
  DailyMonthlyReportAnnotationCreate(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportAnnotationCreate"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportAnnotationCreate"]> {
    return client.request("/daily/monthly/report/annotation/create", "post", params);
  },
  DailyMonthlyReportAnnotationEdit(params: OperationParams<GeneratedOperations["post_DailyMonthlyReportAnnotationEdit"]>): OperationResponse<GeneratedOperations["post_DailyMonthlyReportAnnotationEdit"]> {
    return client.request("/daily/monthly/report/annotation/edit", "post", params);
  },
  CommonFileUploadTempObj(params: OperationParams<GeneratedOperations["post_CommonFileUploadTempObj"]>): OperationResponse<GeneratedOperations["post_CommonFileUploadTempObj"]> {
    return client.request("/common/file/upload/tempObj", "post", params);
  },
  TaskClassifyList(params: OperationParams<GeneratedOperations["post_TaskClassifyList"]>): OperationResponse<GeneratedOperations["post_TaskClassifyList"]> {
    return client.request("/task/classify/list", "post", params);
  },
  TaskClassifyListByWorkPlan(params: OperationParams<GeneratedOperations["post_TaskClassifyListByWorkPlan"]>): OperationResponse<GeneratedOperations["post_TaskClassifyListByWorkPlan"]> {
    return client.request("/task/classify/list/by/work/plan", "post", params);
  },
  TaskClassifyDetail(params: OperationParams<GeneratedOperations["post_TaskClassifyDetail"]>): OperationResponse<GeneratedOperations["post_TaskClassifyDetail"]> {
    return client.request("/task/classify/detail", "post", params);
  },
  TaskClassifyCreate(params: OperationParams<GeneratedOperations["post_TaskClassifyCreate"]>): OperationResponse<GeneratedOperations["post_TaskClassifyCreate"]> {
    return client.request("/task/classify/create", "post", params);
  },
  TaskClassifyEdit(params: OperationParams<GeneratedOperations["post_TaskClassifyEdit"]>): OperationResponse<GeneratedOperations["post_TaskClassifyEdit"]> {
    return client.request("/task/classify/edit", "post", params);
  },
  TaskClassifyDelete(params: OperationParams<GeneratedOperations["post_TaskClassifyDelete"]>): OperationResponse<GeneratedOperations["post_TaskClassifyDelete"]> {
    return client.request("/task/classify/delete", "post", params);
  },
  AppraiseStaffTableStaffOverviewBase(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffOverviewBase"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffOverviewBase"]> {
    return client.request("/appraiseStaffTable/staffOverviewBase", "post", params);
  },
  AppraiseStaffTableStaffOverview(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffOverview"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffOverview"]> {
    return client.request("/appraiseStaffTable/staffOverview", "post", params);
  },
  AppraiseStaffTableGetAppriaseTableList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableGetAppriaseTableList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableGetAppriaseTableList"]> {
    return client.request("/appraiseStaffTable/getAppriaseTableList", "post", params);
  },
  AppraiseStaffTableGetStaffNums(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableGetStaffNums"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableGetStaffNums"]> {
    return client.request("/appraiseStaffTable/getStaffNums", "post", params);
  },
  AppraiseStaffTableCreate(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableCreate"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableCreate"]> {
    return client.request("/appraiseStaffTable/create", "post", params);
  },
  AppraiseStaffTableUpdateTable(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableUpdateTable"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableUpdateTable"]> {
    return client.request("/appraiseStaffTable/updateTable", "post", params);
  },
  AppraiseStaffTableDeleteTable(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableDeleteTable"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableDeleteTable"]> {
    return client.request("/appraiseStaffTable/deleteTable", "post", params);
  },
  AppraiseStaffTableCheck(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableCheck"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableCheck"]> {
    return client.request("/appraiseStaffTable/check", "post", params);
  },
  AppraiseStaffTableBatchPub(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableBatchPub"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableBatchPub"]> {
    return client.request("/appraiseStaffTable/batchPub", "post", params);
  },
  AppraiseStaffTableStaffProjectList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffProjectList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffProjectList"]> {
    return client.request("/appraiseStaffTable/staffProjectList", "post", params);
  },
  AppraiseStaffTableStaffProjectDetail(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffProjectDetail"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffProjectDetail"]> {
    return client.request("/appraiseStaffTable/staffProjectDetail", "post", params);
  },
  AppraiseStaffTableUnselfProjectDetail(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableUnselfProjectDetail"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableUnselfProjectDetail"]> {
    return client.request("/appraiseStaffTable/unselfProjectDetail", "post", params);
  },
  AppraiseStaffTableLeaderFirstConfirm(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableLeaderFirstConfirm"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableLeaderFirstConfirm"]> {
    return client.request("/appraiseStaffTable/leaderFirstConfirm", "post", params);
  },
  AppraiseStaffTableStaffConfirm(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffConfirm"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffConfirm"]> {
    return client.request("/appraiseStaffTable/staffConfirm", "post", params);
  },
  AppraiseStaffTableStaffConfirmTarget(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableStaffConfirmTarget"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableStaffConfirmTarget"]> {
    return client.request("/appraiseStaffTable/staffConfirmTarget", "post", params);
  },
  AppraiseStaffTableLeaderConfirm(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableLeaderConfirm"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableLeaderConfirm"]> {
    return client.request("/appraiseStaffTable/leaderConfirm", "post", params);
  },
  AppraiseStaffTableLeaderReject(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableLeaderReject"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableLeaderReject"]> {
    return client.request("/appraiseStaffTable/leaderReject", "post", params);
  },
  AppraiseStaffTableResetProject(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableResetProject"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableResetProject"]> {
    return client.request("/appraiseStaffTable/resetProject", "post", params);
  },
  AppraiseStaffTableGetProjectStaffList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableGetProjectStaffList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableGetProjectStaffList"]> {
    return client.request("/appraiseStaffTable/getProjectStaffList", "post", params);
  },
  AppraiseStaffTableResetStaffTargetFromList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableResetStaffTargetFromList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableResetStaffTargetFromList"]> {
    return client.request("/appraiseStaffTable/resetStaffTargetFromList", "post", params);
  },
  AppraiseStaffTableResetStaffComplateFromList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableResetStaffComplateFromList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableResetStaffComplateFromList"]> {
    return client.request("/appraiseStaffTable/resetStaffComplateFromList", "post", params);
  },
  AppraiseStaffTableEditStaffProject(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableEditStaffProject"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableEditStaffProject"]> {
    return client.request("/appraiseStaffTable/editStaffProject", "post", params);
  },
  AppraiseStaffTableOkrList(params: OperationParams<GeneratedOperations["post_AppraiseStaffTableOkrList"]>): OperationResponse<GeneratedOperations["post_AppraiseStaffTableOkrList"]> {
    return client.request("/appraiseStaffTable/okrList", "post", params);
  },
  MeetingCalendarStatus(params: OperationParams<GeneratedOperations["post_MeetingCalendarStatus"]>): OperationResponse<GeneratedOperations["post_MeetingCalendarStatus"]> {
    return client.request("/meeting/calendar/status", "post", params);
  },
  MeetingListPage(params: OperationParams<GeneratedOperations["post_MeetingListPage"]>): OperationResponse<GeneratedOperations["post_MeetingListPage"]> {
    return client.request("/meeting/list/page", "post", params);
  },
  MeetingStatistics(params: OperationParams<GeneratedOperations["post_MeetingStatistics"]>): OperationResponse<GeneratedOperations["post_MeetingStatistics"]> {
    return client.request("/meeting/statistics", "post", params);
  },
  MeetingDetail(params: OperationParams<GeneratedOperations["post_MeetingDetail"]>): OperationResponse<GeneratedOperations["post_MeetingDetail"]> {
    return client.request("/meeting/detail", "post", params);
  },
  MeetingCreate(params: OperationParams<GeneratedOperations["post_MeetingCreate"]>): OperationResponse<GeneratedOperations["post_MeetingCreate"]> {
    return client.request("/meeting/create", "post", params);
  },
  MeetingEdit(params: OperationParams<GeneratedOperations["post_MeetingEdit"]>): OperationResponse<GeneratedOperations["post_MeetingEdit"]> {
    return client.request("/meeting/edit", "post", params);
  },
  MeetingUpdateStatus(params: OperationParams<GeneratedOperations["post_MeetingUpdateStatus"]>): OperationResponse<GeneratedOperations["post_MeetingUpdateStatus"]> {
    return client.request("/meeting/update/status", "post", params);
  },
  MeetingEditAttachment(params: OperationParams<GeneratedOperations["post_MeetingEditAttachment"]>): OperationResponse<GeneratedOperations["post_MeetingEditAttachment"]> {
    return client.request("/meeting/edit/attachment", "post", params);
  },
  MeetingEditParticipant(params: OperationParams<GeneratedOperations["post_MeetingEditParticipant"]>): OperationResponse<GeneratedOperations["post_MeetingEditParticipant"]> {
    return client.request("/meeting/edit/participant", "post", params);
  },
  MeetingDelete(params: OperationParams<GeneratedOperations["post_MeetingDelete"]>): OperationResponse<GeneratedOperations["post_MeetingDelete"]> {
    return client.request("/meeting/delete", "post", params);
  },
  MeetingExportPdf(params: OperationParams<GeneratedOperations["post_MeetingExportPdf"]>): OperationResponse<GeneratedOperations["post_MeetingExportPdf"]> {
    return client.request("/meeting/export/pdf", "post", params);
  },
  MeetingCreateResolution(params: OperationParams<GeneratedOperations["post_MeetingCreateResolution"]>): OperationResponse<GeneratedOperations["post_MeetingCreateResolution"]> {
    return client.request("/meeting/create/resolution", "post", params);
  },
  MeetingEditResolution(params: OperationParams<GeneratedOperations["post_MeetingEditResolution"]>): OperationResponse<GeneratedOperations["post_MeetingEditResolution"]> {
    return client.request("/meeting/edit/resolution", "post", params);
  },
  MeetingSubmitApprovalResolution(params: OperationParams<GeneratedOperations["post_MeetingSubmitApprovalResolution"]>): OperationResponse<GeneratedOperations["post_MeetingSubmitApprovalResolution"]> {
    return client.request("/meeting/submit/approval/resolution", "post", params);
  },
  MeetingApprovalResolution(params: OperationParams<GeneratedOperations["post_MeetingApprovalResolution"]>): OperationResponse<GeneratedOperations["post_MeetingApprovalResolution"]> {
    return client.request("/meeting/approval/resolution", "post", params);
  },
  MeetingDeleteResolution(params: OperationParams<GeneratedOperations["post_MeetingDeleteResolution"]>): OperationResponse<GeneratedOperations["post_MeetingDeleteResolution"]> {
    return client.request("/meeting/delete/resolution", "post", params);
  },
  WorkOrderClassifyList(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyList"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyList"]> {
    return client.request("/workOrder/classify/list", "post", params);
  },
  WorkOrderClassifyStatisticsByStatus(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyStatisticsByStatus"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyStatisticsByStatus"]> {
    return client.request("/workOrder/classify/statistics/by/status", "post", params);
  },
  WorkOrderClassifyListSimple(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyListSimple"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyListSimple"]> {
    return client.request("/workOrder/classify/list/simple", "post", params);
  },
  WorkOrderClassifyCreate(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyCreate"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyCreate"]> {
    return client.request("/workOrder/classify/create", "post", params);
  },
  WorkOrderClassifyEdit(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyEdit"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyEdit"]> {
    return client.request("/workOrder/classify/edit", "post", params);
  },
  WorkOrderClassifyDelete(params: OperationParams<GeneratedOperations["post_WorkOrderClassifyDelete"]>): OperationResponse<GeneratedOperations["post_WorkOrderClassifyDelete"]> {
    return client.request("/workOrder/classify/delete", "post", params);
  },
  DataPermissionList(params: OperationParams<GeneratedOperations["post_DataPermissionList"]>): OperationResponse<GeneratedOperations["post_DataPermissionList"]> {
    return client.request("/data/permission/list", "post", params);
  },
  DataPermissionDetail(params: OperationParams<GeneratedOperations["post_DataPermissionDetail"]>): OperationResponse<GeneratedOperations["post_DataPermissionDetail"]> {
    return client.request("/data/permission/detail", "post", params);
  },
  DataPermissionCreate(params: OperationParams<GeneratedOperations["post_DataPermissionCreate"]>): OperationResponse<GeneratedOperations["post_DataPermissionCreate"]> {
    return client.request("/data/permission/create", "post", params);
  },
  DataPermissionEdit(params: OperationParams<GeneratedOperations["post_DataPermissionEdit"]>): OperationResponse<GeneratedOperations["post_DataPermissionEdit"]> {
    return client.request("/data/permission/edit", "post", params);
  },
  DataPermissionDelete(params: OperationParams<GeneratedOperations["post_DataPermissionDelete"]>): OperationResponse<GeneratedOperations["post_DataPermissionDelete"]> {
    return client.request("/data/permission/delete", "post", params);
  },
  WorkOrderListByPage(params: OperationParams<GeneratedOperations["post_WorkOrderListByPage"]>): OperationResponse<GeneratedOperations["post_WorkOrderListByPage"]> {
    return client.request("/workOrder/list/by/page", "post", params);
  },
  WorkOrderStatistics(params: OperationParams<GeneratedOperations["post_WorkOrderStatistics"]>): OperationResponse<GeneratedOperations["post_WorkOrderStatistics"]> {
    return client.request("/workOrder/statistics", "post", params);
  },
  WorkOrderStatisticsByStatus(params: OperationParams<GeneratedOperations["post_WorkOrderStatisticsByStatus"]>): OperationResponse<GeneratedOperations["post_WorkOrderStatisticsByStatus"]> {
    return client.request("/workOrder/statistics/by/status", "post", params);
  },
  WorkOrderDetail(params: OperationParams<GeneratedOperations["post_WorkOrderDetail"]>): OperationResponse<GeneratedOperations["post_WorkOrderDetail"]> {
    return client.request("/workOrder/detail", "post", params);
  },
  WorkOrderCreate(params: OperationParams<GeneratedOperations["post_WorkOrderCreate"]>): OperationResponse<GeneratedOperations["post_WorkOrderCreate"]> {
    return client.request("/workOrder/create", "post", params);
  },
  WorkOrderEdit(params: OperationParams<GeneratedOperations["post_WorkOrderEdit"]>): OperationResponse<GeneratedOperations["post_WorkOrderEdit"]> {
    return client.request("/workOrder/edit", "post", params);
  },
  WorkOrderUpdateUrgencyLevel(params: OperationParams<GeneratedOperations["post_WorkOrderUpdateUrgencyLevel"]>): OperationResponse<GeneratedOperations["post_WorkOrderUpdateUrgencyLevel"]> {
    return client.request("/workOrder/update/urgency/level", "post", params);
  },
  WorkOrderUpdateStatus(params: OperationParams<GeneratedOperations["post_WorkOrderUpdateStatus"]>): OperationResponse<GeneratedOperations["post_WorkOrderUpdateStatus"]> {
    return client.request("/workOrder/update/status", "post", params);
  },
  WorkOrderForward(params: OperationParams<GeneratedOperations["post_WorkOrderForward"]>): OperationResponse<GeneratedOperations["post_WorkOrderForward"]> {
    return client.request("/workOrder/forward", "post", params);
  },
  WorkOrderExpedite(params: OperationParams<GeneratedOperations["post_WorkOrderExpedite"]>): OperationResponse<GeneratedOperations["post_WorkOrderExpedite"]> {
    return client.request("/workOrder/expedite", "post", params);
  },
  WorkOrderConfirm(params: OperationParams<GeneratedOperations["post_WorkOrderConfirm"]>): OperationResponse<GeneratedOperations["post_WorkOrderConfirm"]> {
    return client.request("/workOrder/confirm", "post", params);
  },
  WorkOrderDelete(params: OperationParams<GeneratedOperations["post_WorkOrderDelete"]>): OperationResponse<GeneratedOperations["post_WorkOrderDelete"]> {
    return client.request("/workOrder/delete", "post", params);
  },
  CycleAppraiseTodoCycleList(params: OperationParams<GeneratedOperations["post_CycleAppraiseTodoCycleList"]>): OperationResponse<GeneratedOperations["post_CycleAppraiseTodoCycleList"]> {
    return client.request("/cycleAppraise/todoCycleList", "post", params);
  },
  CycleAppraiseCycleAppraise(params: OperationParams<GeneratedOperations["post_CycleAppraiseCycleAppraise"]>): OperationResponse<GeneratedOperations["post_CycleAppraiseCycleAppraise"]> {
    return client.request("/cycleAppraise/cycleAppraise", "post", params);
  },
  CycleAppraiseCycleDetail(params: OperationParams<GeneratedOperations["post_CycleAppraiseCycleDetail"]>): OperationResponse<GeneratedOperations["post_CycleAppraiseCycleDetail"]> {
    return client.request("/cycleAppraise/cycleDetail", "post", params);
  },
  CycleAppraiseCycleSubmit(params: OperationParams<GeneratedOperations["post_CycleAppraiseCycleSubmit"]>): OperationResponse<GeneratedOperations["post_CycleAppraiseCycleSubmit"]> {
    return client.request("/cycleAppraise/cycleSubmit", "post", params);
  },
  CycleAppraiseCycleFinish(params: OperationParams<GeneratedOperations["post_CycleAppraiseCycleFinish"]>): OperationResponse<GeneratedOperations["post_CycleAppraiseCycleFinish"]> {
    return client.request("/cycleAppraise/cycleFinish", "post", params);
  },
  StaffFollowRelationGetOftenWatchOrFollowUser(params: OperationParams<GeneratedOperations["post_StaffFollowRelationGetOftenWatchOrFollowUser"]>): OperationResponse<GeneratedOperations["post_StaffFollowRelationGetOftenWatchOrFollowUser"]> {
    return client.request("/staffFollowRelation/getOftenWatchOrFollowUser", "post", params);
  },
  StaffFollowRelationFollow(params: OperationParams<GeneratedOperations["post_StaffFollowRelationFollow"]>): OperationResponse<GeneratedOperations["post_StaffFollowRelationFollow"]> {
    return client.request("/staffFollowRelation/follow", "post", params);
  },
  KnowledgeQuery(params: OperationParams<GeneratedOperations["post_KnowledgeQuery"]>): OperationResponse<GeneratedOperations["post_KnowledgeQuery"]> {
    return client.request("/knowledge/query", "post", params);
  },
  KnowledgeDocList(params: OperationParams<GeneratedOperations["post_KnowledgeDocList"]>): OperationResponse<GeneratedOperations["post_KnowledgeDocList"]> {
    return client.request("/knowledge/docList", "post", params);
  },
  KnowledgeDelDoc(params: OperationParams<GeneratedOperations["post_KnowledgeDelDoc"]>): OperationResponse<GeneratedOperations["post_KnowledgeDelDoc"]> {
    return client.request("/knowledge/delDoc", "post", params);
  },
  KnowledgeCreateDocGroup(params: OperationParams<GeneratedOperations["post_KnowledgeCreateDocGroup"]>): OperationResponse<GeneratedOperations["post_KnowledgeCreateDocGroup"]> {
    return client.request("/knowledge/createDocGroup", "post", params);
  },
  KnowledgeDetail(params: OperationParams<GeneratedOperations["post_KnowledgeDetail"]>): OperationResponse<GeneratedOperations["post_KnowledgeDetail"]> {
    return client.request("/knowledge/detail", "post", params);
  },
  KnowledgeUpdateDocGroupById(params: OperationParams<GeneratedOperations["post_KnowledgeUpdateDocGroupById"]>): OperationResponse<GeneratedOperations["post_KnowledgeUpdateDocGroupById"]> {
    return client.request("/knowledge/updateDocGroupById", "post", params);
  },
  KnowledgeCreateDoc(params: OperationParams<GeneratedOperations["post_KnowledgeCreateDoc"]>): OperationResponse<GeneratedOperations["post_KnowledgeCreateDoc"]> {
    return client.request("/knowledge/createDoc", "post", params);
  },
  KnowledgeRemoveDocGroupById(params: OperationParams<GeneratedOperations["post_KnowledgeRemoveDocGroupById"]>): OperationResponse<GeneratedOperations["post_KnowledgeRemoveDocGroupById"]> {
    return client.request("/knowledge/removeDocGroupById", "post", params);
  },
  KnowledgeUpdateDoc(params: OperationParams<GeneratedOperations["post_KnowledgeUpdateDoc"]>): OperationResponse<GeneratedOperations["post_KnowledgeUpdateDoc"]> {
    return client.request("/knowledge/updateDoc", "post", params);
  },
  KnowledgeQueryLogs(params: OperationParams<GeneratedOperations["post_KnowledgeQueryLogs"]>): OperationResponse<GeneratedOperations["post_KnowledgeQueryLogs"]> {
    return client.request("/knowledge/queryLogs", "post", params);
  },
  KnowledgeShowHelp(params: OperationParams<GeneratedOperations["post_KnowledgeShowHelp"]>): OperationResponse<GeneratedOperations["post_KnowledgeShowHelp"]> {
    return client.request("/knowledge/showHelp", "post", params);
  },
  User(params: OperationParams<GeneratedOperations["post_User_groupGetList"]>): OperationResponse<GeneratedOperations["post_User_groupGetList"]> {
    return client.request("/user_group/getList", "post", params);
  },
  User(params: OperationParams<GeneratedOperations["post_User_groupDetail"]>): OperationResponse<GeneratedOperations["post_User_groupDetail"]> {
    return client.request("/user_group/detail", "post", params);
  },
  User(params: OperationParams<GeneratedOperations["post_User_groupCreate"]>): OperationResponse<GeneratedOperations["post_User_groupCreate"]> {
    return client.request("/user_group/create", "post", params);
  },
  User(params: OperationParams<GeneratedOperations["post_User_groupEdit"]>): OperationResponse<GeneratedOperations["post_User_groupEdit"]> {
    return client.request("/user_group/edit", "post", params);
  },
  User(params: OperationParams<GeneratedOperations["post_User_groupDelete"]>): OperationResponse<GeneratedOperations["post_User_groupDelete"]> {
    return client.request("/user_group/delete", "post", params);
  },
  SysPostSave(params: OperationParams<GeneratedOperations["post_SysPostSave"]>): OperationResponse<GeneratedOperations["post_SysPostSave"]> {
    return client.request("/sysPost/save", "post", params);
  },
  SysPostUpdateById(params: OperationParams<GeneratedOperations["post_SysPostUpdateById"]>): OperationResponse<GeneratedOperations["post_SysPostUpdateById"]> {
    return client.request("/sysPost/updateById", "post", params);
  },
  SysPostRemoveById(params: OperationParams<GeneratedOperations["post_SysPostRemoveById"]>): OperationResponse<GeneratedOperations["post_SysPostRemoveById"]> {
    return client.request("/sysPost/removeById", "post", params);
  },
  SysPostGetById(params: OperationParams<GeneratedOperations["post_SysPostGetById"]>): OperationResponse<GeneratedOperations["post_SysPostGetById"]> {
    return client.request("/sysPost/getById", "post", params);
  },
  SysPostPage(params: OperationParams<GeneratedOperations["post_SysPostPage"]>): OperationResponse<GeneratedOperations["post_SysPostPage"]> {
    return client.request("/sysPost/page", "post", params);
  },
  SysPostDeptPositions(params: OperationParams<GeneratedOperations["post_SysPostDeptPositions"]>): OperationResponse<GeneratedOperations["post_SysPostDeptPositions"]> {
    return client.request("/sysPost/dept/positions", "post", params);
  },
  SysPostPositionLevels(params: OperationParams<GeneratedOperations["post_SysPostPositionLevels"]>): OperationResponse<GeneratedOperations["post_SysPostPositionLevels"]> {
    return client.request("/sysPost/position/levels", "post", params);
  },
  SysPostPositionAll(params: OperationParams<GeneratedOperations["post_SysPostPositionAll"]>): OperationResponse<GeneratedOperations["post_SysPostPositionAll"]> {
    return client.request("/sysPost/position/all", "post", params);
  },
  SysPostPositionCreate(params: OperationParams<GeneratedOperations["post_SysPostPositionCreate"]>): OperationResponse<GeneratedOperations["post_SysPostPositionCreate"]> {
    return client.request("/sysPost/position/create", "post", params);
  },
  SysPostPositionUpdate(params: OperationParams<GeneratedOperations["post_SysPostPositionUpdate"]>): OperationResponse<GeneratedOperations["post_SysPostPositionUpdate"]> {
    return client.request("/sysPost/position/update", "post", params);
  },
  SysPostSequenceUpdate(params: OperationParams<GeneratedOperations["post_SysPostSequenceUpdate"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceUpdate"]> {
    return client.request("/sysPost/sequence/update", "post", params);
  },
  SysPostSequenceAll(params: OperationParams<GeneratedOperations["post_SysPostSequenceAll"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceAll"]> {
    return client.request("/sysPost/sequence/all", "post", params);
  },
  SysPostSequenceCreate(params: OperationParams<GeneratedOperations["post_SysPostSequenceCreate"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceCreate"]> {
    return client.request("/sysPost/sequence/create", "post", params);
  },
  SysPostPositionDisable(params: OperationParams<GeneratedOperations["post_SysPostPositionDisable"]>): OperationResponse<GeneratedOperations["post_SysPostPositionDisable"]> {
    return client.request("/sysPost/position/disable", "post", params);
  },
  SysPostPositionEnable(params: OperationParams<GeneratedOperations["post_SysPostPositionEnable"]>): OperationResponse<GeneratedOperations["post_SysPostPositionEnable"]> {
    return client.request("/sysPost/position/enable", "post", params);
  },
  SysPostPositionDel(params: OperationParams<GeneratedOperations["post_SysPostPositionDel"]>): OperationResponse<GeneratedOperations["post_SysPostPositionDel"]> {
    return client.request("/sysPost/position/del", "post", params);
  },
  SysPostSequenceDisable(params: OperationParams<GeneratedOperations["post_SysPostSequenceDisable"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceDisable"]> {
    return client.request("/sysPost/sequence/disable", "post", params);
  },
  SysPostSequenceEnable(params: OperationParams<GeneratedOperations["post_SysPostSequenceEnable"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceEnable"]> {
    return client.request("/sysPost/sequence/enable", "post", params);
  },
  SysPostSequenceDel(params: OperationParams<GeneratedOperations["post_SysPostSequenceDel"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceDel"]> {
    return client.request("/sysPost/sequence/del", "post", params);
  },
  SysPostAllCompanyPostTags(params: OperationParams<GeneratedOperations["post_SysPostAllCompanyPostTags"]>): OperationResponse<GeneratedOperations["post_SysPostAllCompanyPostTags"]> {
    return client.request("/sysPost/allCompanyPostTags", "post", params);
  },
  SysPostSavePostTags(params: OperationParams<GeneratedOperations["post_SysPostSavePostTags"]>): OperationResponse<GeneratedOperations["post_SysPostSavePostTags"]> {
    return client.request("/sysPost/savePostTags", "post", params);
  },
  SysPostPositionReplace(params: OperationParams<GeneratedOperations["post_SysPostPositionReplace"]>): OperationResponse<GeneratedOperations["post_SysPostPositionReplace"]> {
    return client.request("/sysPost/position/replace", "post", params);
  },
  SysPostSequenceReplace(params: OperationParams<GeneratedOperations["post_SysPostSequenceReplace"]>): OperationResponse<GeneratedOperations["post_SysPostSequenceReplace"]> {
    return client.request("/sysPost/sequence/replace", "post", params);
  },
  HelpQueryLogs(params: OperationParams<GeneratedOperations["post_HelpQueryLogs"]>): OperationResponse<GeneratedOperations["post_HelpQueryLogs"]> {
    return client.request("/help/queryLogs", "post", params);
  },
  HelpQuery(params: OperationParams<GeneratedOperations["post_HelpQuery"]>): OperationResponse<GeneratedOperations["post_HelpQuery"]> {
    return client.request("/help/query", "post", params);
  },
  HelpDocList(params: OperationParams<GeneratedOperations["post_HelpDocList"]>): OperationResponse<GeneratedOperations["post_HelpDocList"]> {
    return client.request("/help/docList", "post", params);
  },
  HelpDelDoc(params: OperationParams<GeneratedOperations["post_HelpDelDoc"]>): OperationResponse<GeneratedOperations["post_HelpDelDoc"]> {
    return client.request("/help/delDoc", "post", params);
  },
  HelpDetail(params: OperationParams<GeneratedOperations["post_HelpDetail"]>): OperationResponse<GeneratedOperations["post_HelpDetail"]> {
    return client.request("/help/detail", "post", params);
  },
  HelpCreateDoc(params: OperationParams<GeneratedOperations["post_HelpCreateDoc"]>): OperationResponse<GeneratedOperations["post_HelpCreateDoc"]> {
    return client.request("/help/createDoc", "post", params);
  },
  HelpUpdateDoc(params: OperationParams<GeneratedOperations["post_HelpUpdateDoc"]>): OperationResponse<GeneratedOperations["post_HelpUpdateDoc"]> {
    return client.request("/help/updateDoc", "post", params);
  },
  ApiV1MyArchiveAvatarModify(params: OperationParams<GeneratedOperations["post_ApiV1MyArchiveAvatarModify"]>): OperationResponse<GeneratedOperations["post_ApiV1MyArchiveAvatarModify"]> {
    return client.request("/api/v1/my/archive/avatar/modify", "post", params);
  },
  ApiV1MyArchivePhotoModify(params: OperationParams<GeneratedOperations["post_ApiV1MyArchivePhotoModify"]>): OperationResponse<GeneratedOperations["post_ApiV1MyArchivePhotoModify"]> {
    return client.request("/api/v1/my/archive/photo/modify", "post", params);
  },
  ApiV1MyArchiveDetail(params: OperationParams<GeneratedOperations["post_ApiV1MyArchiveDetail"]>): OperationResponse<GeneratedOperations["post_ApiV1MyArchiveDetail"]> {
    return client.request("/api/v1/my/archive/detail", "post", params);
  },
  ApiV1MyArchiveUpdate(params: OperationParams<GeneratedOperations["post_ApiV1MyArchiveUpdate"]>): OperationResponse<GeneratedOperations["post_ApiV1MyArchiveUpdate"]> {
    return client.request("/api/v1/my/archive/update", "post", params);
  },
  ApiV1MyArchivePhoto(params: OperationParams<GeneratedOperations["post_ApiV1MyArchivePhoto"]>): OperationResponse<GeneratedOperations["post_ApiV1MyArchivePhoto"]> {
    return client.request("/api/v1/my/archive/photo", "post", params);
  },
  ApiV1MyRegistrationFieldList(params: OperationParams<GeneratedOperations["post_ApiV1MyRegistrationFieldList"]>): OperationResponse<GeneratedOperations["post_ApiV1MyRegistrationFieldList"]> {
    return client.request("/api/v1/my/registration/field/list", "post", params);
  },
  ApiV1MyRegistrationCommit(params: OperationParams<GeneratedOperations["post_ApiV1MyRegistrationCommit"]>): OperationResponse<GeneratedOperations["post_ApiV1MyRegistrationCommit"]> {
    return client.request("/api/v1/my/registration/commit", "post", params);
  },
  ApiV1MyTeamStaffList(params: OperationParams<GeneratedOperations["post_ApiV1MyTeamStaffList"]>): OperationResponse<GeneratedOperations["post_ApiV1MyTeamStaffList"]> {
    return client.request("/api/v1/my/team/staff/list", "post", params);
  },
  CompanyValueGetMonthLogs(params: OperationParams<GeneratedOperations["post_CompanyValueGetMonthLogs"]>): OperationResponse<GeneratedOperations["post_CompanyValueGetMonthLogs"]> {
    return client.request("/companyValue/getMonthLogs", "post", params);
  },
  CompanyValueQueryYearTarget(params: OperationParams<GeneratedOperations["post_CompanyValueQueryYearTarget"]>): OperationResponse<GeneratedOperations["post_CompanyValueQueryYearTarget"]> {
    return client.request("/companyValue/queryYearTarget", "post", params);
  },
  CompanyValueUpdate(params: OperationParams<GeneratedOperations["post_CompanyValueUpdate"]>): OperationResponse<GeneratedOperations["post_CompanyValueUpdate"]> {
    return client.request("/companyValue/update", "post", params);
  },
  CompanyValueAdd(params: OperationParams<GeneratedOperations["post_CompanyValueAdd"]>): OperationResponse<GeneratedOperations["post_CompanyValueAdd"]> {
    return client.request("/companyValue/add", "post", params);
  },
  CompanyValueDelete(params: OperationParams<GeneratedOperations["post_CompanyValueDelete"]>): OperationResponse<GeneratedOperations["post_CompanyValueDelete"]> {
    return client.request("/companyValue/delete", "post", params);
  },
  CompanyValueImport(params: OperationParams<GeneratedOperations["post_CompanyValueImport"]>): OperationResponse<GeneratedOperations["post_CompanyValueImport"]> {
    return client.request("/companyValue/import", "post", params);
  },
  CompanyValueDraw(params: OperationParams<GeneratedOperations["post_CompanyValueDraw"]>): OperationResponse<GeneratedOperations["post_CompanyValueDraw"]> {
    return client.request("/companyValue/draw", "post", params);
  },
  PayrollAllSendType(params: OperationParams<GeneratedOperations["post_PayrollAllSendType"]>): OperationResponse<GeneratedOperations["post_PayrollAllSendType"]> {
    return client.request("/payroll/allSendType", "post", params);
  },
  PayrollCreatePayRollDynamic(params: OperationParams<GeneratedOperations["post_PayrollCreatePayRollDynamic"]>): OperationResponse<GeneratedOperations["post_PayrollCreatePayRollDynamic"]> {
    return client.request("/payroll/createPayRollDynamic", "post", params);
  },
  PayrollUpdatePayroll(params: OperationParams<GeneratedOperations["post_PayrollUpdatePayroll"]>): OperationResponse<GeneratedOperations["post_PayrollUpdatePayroll"]> {
    return client.request("/payroll/updatePayroll", "post", params);
  },
  PayrollListPayroll(params: OperationParams<GeneratedOperations["post_PayrollListPayroll"]>): OperationResponse<GeneratedOperations["post_PayrollListPayroll"]> {
    return client.request("/payroll/listPayroll", "post", params);
  },
  PayrollPublish(params: OperationParams<GeneratedOperations["post_PayrollPublish"]>): OperationResponse<GeneratedOperations["post_PayrollPublish"]> {
    return client.request("/payroll/publish", "post", params);
  },
  PayrollReset(params: OperationParams<GeneratedOperations["post_PayrollReset"]>): OperationResponse<GeneratedOperations["post_PayrollReset"]> {
    return client.request("/payroll/reset", "post", params);
  },
  PayrollDetail(params: OperationParams<GeneratedOperations["post_PayrollDetail"]>): OperationResponse<GeneratedOperations["post_PayrollDetail"]> {
    return client.request("/payroll/detail", "post", params);
  },
  PayrollUpdateDetail(params: OperationParams<GeneratedOperations["post_PayrollUpdateDetail"]>): OperationResponse<GeneratedOperations["post_PayrollUpdateDetail"]> {
    return client.request("/payroll/updateDetail", "post", params);
  },
  PayrollDelDetail(params: OperationParams<GeneratedOperations["post_PayrollDelDetail"]>): OperationResponse<GeneratedOperations["post_PayrollDelDetail"]> {
    return client.request("/payroll/delDetail", "post", params);
  },
  PayrollDelPayroll(params: OperationParams<GeneratedOperations["post_PayrollDelPayroll"]>): OperationResponse<GeneratedOperations["post_PayrollDelPayroll"]> {
    return client.request("/payroll/delPayroll", "post", params);
  },
  BngCompanyNameExists(params: OperationParams<GeneratedOperations["post_BngCompanyNameExists"]>): OperationResponse<GeneratedOperations["post_BngCompanyNameExists"]> {
    return client.request("/bng/company/name/exists", "post", params);
  },
  Login(params: OperationParams<GeneratedOperations["post_Login"]>): OperationResponse<GeneratedOperations["post_Login"]> {
    return client.request("/login", "post", params);
  }
};
