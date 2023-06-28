/**
 * @description: 请求结果设置
 */
export enum ResultEnum {
    SUCCESS = 10000,
    FAIL = 10001,
    ERROR = 1,
    TIMEOUT = 401,
    TYPE = 'success',
}

/**
 * @description: contentType
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/jsoncharset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencodedcharset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-datacharset=UTF-8',
}
