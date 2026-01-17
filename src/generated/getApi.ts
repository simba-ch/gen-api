import { client } from "../core/genRequest/client";
import type { OperationParams, OperationResponse } from "../core/genRequest/types";
import type { GeneratedOperations } from "./operations";

export const getApi = {
  AttendanceStaffClockErrorlog(params: OperationParams<GeneratedOperations["get_AttendanceStaffClockErrorlog"]>): OperationResponse<GeneratedOperations["get_AttendanceStaffClockErrorlog"]> {
    return client.request("/attendance/staff/clock/errorlog", "get", params);
  },
  AttendanceStaffClockLog(params: OperationParams<GeneratedOperations["get_AttendanceStaffClockLog"]>): OperationResponse<GeneratedOperations["get_AttendanceStaffClockLog"]> {
    return client.request("/attendance/staff/clock/log", "get", params);
  },
  AttendanceStaffCalendar(params: OperationParams<GeneratedOperations["get_AttendanceStaffCalendar"]>): OperationResponse<GeneratedOperations["get_AttendanceStaffCalendar"]> {
    return client.request("/attendance/staff/calendar", "get", params);
  },
  AttendanceStaffClockInfo(params: OperationParams<GeneratedOperations["get_AttendanceStaffClockInfo"]>): OperationResponse<GeneratedOperations["get_AttendanceStaffClockInfo"]> {
    return client.request("/attendance/staff/clock/info", "get", params);
  },
  StaffbaseInit(params: OperationParams<GeneratedOperations["get_StaffbaseInit"]>): OperationResponse<GeneratedOperations["get_StaffbaseInit"]> {
    return client.request("/staffbase/init", "get", params);
  },
  CommonExportTaskDownloadTaskId(params: OperationParams<GeneratedOperations["get_CommonExportTaskDownloadTaskId"]>): OperationResponse<GeneratedOperations["get_CommonExportTaskDownloadTaskId"]> {
    return client.request("/common/export/task/download/{taskId}", "get", params);
  },
  CommonImportTaskSourceDownloadTaskId(params: OperationParams<GeneratedOperations["get_CommonImportTaskSourceDownloadTaskId"]>): OperationResponse<GeneratedOperations["get_CommonImportTaskSourceDownloadTaskId"]> {
    return client.request("/common/import/task/source/download/{taskId}", "get", params);
  },
  CommonImportTaskResultDownloadTaskId(params: OperationParams<GeneratedOperations["get_CommonImportTaskResultDownloadTaskId"]>): OperationResponse<GeneratedOperations["get_CommonImportTaskResultDownloadTaskId"]> {
    return client.request("/common/import/task/result/download/{taskId}", "get", params);
  },
  TestXxljobTrigger(params: OperationParams<GeneratedOperations["get_TestXxljobTrigger"]>): OperationResponse<GeneratedOperations["get_TestXxljobTrigger"]> {
    return client.request("/test/xxljob/trigger", "get", params);
  },
  ResourceCaptchaImage(params: OperationParams<GeneratedOperations["get_ResourceCaptchaImage"]>): OperationResponse<GeneratedOperations["get_ResourceCaptchaImage"]> {
    return client.request("/resource/captchaImage", "get", params);
  }
};
