/**
 * @api {post} account/login 登录
 * @apiName login
 * @apiGroup account
 *
 * @apiParam {string} username 管理员名称(需要AES加密)
 * @apiParam {string} password 密码(需要AES加密)
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.access_token  接口凭证
 * @apiSuccess {int} data.expire  有效时间（秒）
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "access_token": "MjM1RDBEMzMxNkIwMDNCMDMyNkU5MzdCNzNCMUYyRDEwQUU5OTcwNTZERUJGOTg0NjFFNDdDOThGMUM5RTVDQQ==",
        "expire": 3600
    }
}
 */

/**
 * @api {post} account/logout 登出
 * @apiName logout
 * @apiGroup account
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "登出成功"
}
 */

/**
 * @api {post} admin/lists 系统管理-账号管理-获取账号列表
 * @apiName lists
 * @apiGroup admin
 *
 * @apiParam {int} page 页码
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.total  总数
 * @apiSuccess {string} data.size 每页显示数
 * @apiSuccess {array} data.list 列表数据
 * @apiSuccess {string} data.list.id  id
 * @apiSuccess {string} data.list.username   用户名
 * @apiSuccess {string} data.list.role_name  角色名称
 * @apiSuccess {string} data.list.job        职位
 * @apiSuccess {string} data.list.remark     备注信息
 * @apiSuccess {string} data.list.ctime      添加时间
 * @apiSuccess {string} data.list.utime      修改时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": "1",
        "size": 10,
        "list": [
            {
                "id": "10002",
                "username": "15706668888",
                "job": "ceo",
                "remark": "ddd",
                "ctime": "1496804004",
                "role_name": "超级管理员"
            }
        ]
    }
}
*/

/**
 * @api {post} admin/get_admin_menu_list 获取登录账户菜单列表
 * @apiName get_admin_menu_list
 * @apiGroup admin
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id  菜单数据id
 * @apiSuccess {string} data.name  菜单名称
 * @apiSuccess {string} data.url  菜单url
 * @apiSuccess {array} data.data  子菜单
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "id": "1",
            "name": "概述",
            "url": "general",
            "data": [
                
            ]
        },
        {
            "id": "2",
            "name": "用户管理",
            "url": "tenement",
            "data": [
                {
                    "id": "3",
                    "name": "用户列表",
                    "url": "userList",
                    "data": [
                        
                    ]
                },
                {
                    "id": "4",
                    "name": "下属账号",
                    "url": "subAccount",
                    "data": [
                        
                    ]
                },
                {
                    "id": "5",
                    "name": "角色管理",
                    "url": "userManagement",
                    "data": [
                        
                    ]
                },
                {
                    "id": "6",
                    "name": "用户统计",
                    "url": "userStatistics",
                    "data": [
                        
                    ]
                }
            ]
        }
    ]
}
*/

/**
 * @api {post} admin/add 系统管理-账号管理-创建管理员账号
 * @apiName add
 * @apiGroup admin
 *
 * @apiParam {string} username 账号名，需AES加密
 * @apiParam {string} password 密码，  需AES加密
 * @apiParam {string} [job]      职位
 * @apiParam {string} [remark]      备注信息
 * @apiParam {string} role_id  角色id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "创建成功"
}
 */

/**
 * @api {post} admin/edit 系统管理-账号管理-编辑管理员账号
 * @apiName edit
 * @apiGroup admin
 *
 * @apiParam {int} id 管理员账号ID
 * @apiParam {string} [password] 密码，  需AES加密
 * @apiParam {string} [job]      职位
 * @apiParam {string} [remark]   备注信息
 * @apiParam {string} role_id    角色id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "编辑成功"
}
 */

/**
 * @api {post} admin/del 系统管理-账号管理-删除管理员账号
 * @apiName del
 * @apiGroup admin
 *
 * @apiParam {int} id 管理员账号id,多个id用逗号隔开
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "删除成功"
}
 */

/**
 * @api {post} admin/get_basic_info 系统管理-账号管理-获取账号基本信息
 * @apiName get_basic_info
 * @apiGroup admin
 *
 * @apiParam {int} id 管理员账号id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id         管理员id
 * @apiSuccess {string} data.username   用户名
 * @apiSuccess {string} data.job        职位
 * @apiSuccess {string} data.role_id    角色id
 * @apiSuccess {string} data.role_name  角色名称
 * @apiSuccess {string} data.remark     备注信息
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "2",
        "username": "hh",
        "role_id": "1",
        "job" : "CEO",
        "role_name": 'jhhh',
        "remark" : ""
    }
}
*/

/**
 * @api {post} admin/get_all_role 系统管理-账号管理-获取全部角色
 * @apiName get_all_role
 * @apiGroup admin
 *
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id  id
 * @apiSuccess {string} data.role_name  角色名称
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "id": "1",
            "role_name": "超级管理员"
        }
        {
            "id": "2",
            "role_name": "超级管理员"
        }
    ]
}
*/

/**
 * @api {post} role/get_admin_menu_list 系统管理-角色管理-获取全部菜单列表
 * @apiName get_admin_menu_list
 * @apiGroup role
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id  菜单数据id
 * @apiSuccess {string} data.name  菜单名称
 * @apiSuccess {string} data.url  菜单url
 * @apiSuccess {array} data.data  子菜单
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "id": "1",
            "name": "概述",
            "url": "general",
            "data": [
                
            ]
        },
        {
            "id": "2",
            "name": "用户管理",
            "url": "tenement",
            "data": [
                {
                    "id": "3",
                    "name": "用户列表",
                    "url": "userList",
                    "data": [
                        
                    ]
                },
                {
                    "id": "4",
                    "name": "下属账号",
                    "url": "subAccount",
                    "data": [
                        
                    ]
                },
                {
                    "id": "5",
                    "name": "角色管理",
                    "url": "userManagement",
                    "data": [
                        
                    ]
                },
                {
                    "id": "6",
                    "name": "用户统计",
                    "url": "userStatistics",
                    "data": [
                        
                    ]
                }
            ]
        }
    ]
}
*/

/**
 * @api {post} role/save 系统管理-角色管理-保存角色
 * @apiName save
 * @apiGroup role
 *
 * @apiParam {int} id 角色数据id，新增时给0
 * @apiParam {string} role_name 角色名称
 * @apiParam {string} url_ids 角色权限，id拼接字符串，如：1,2,3
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "保存成功"
}
 */

/**
 * @api {post} role/del 系统管理-角色管理-删除角色
 * @apiName del
 * @apiGroup role
 *
 * @apiParam {int} id 角色数据id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "删除成功"
}
 */

/**
 * @api {post} role/lists 系统管理-角色管理-获取角色列表
 * @apiName lists
 * @apiGroup role
 *
 * @apiParam {int} page 页码
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.total  总数
 * @apiSuccess {string} data.size 每页显示数
 * @apiSuccess {array} data.list 列表数据
 * @apiSuccess {string} data.list.id  角色id
 * @apiSuccess {string} data.list.role_name  角色名称
 * @apiSuccess {string} data.list.url_ids  权限
 * @apiSuccess {string} data.list.ctime  添加时间
 * @apiSuccess {string} data.list.utime  修改时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": "2",
        "size": 10,
        "list": [
            {
                "id": "1",
                "role_name": "超级管理员",
                "url_ids": "概述,用户管理,用户列表,下属账号,角色管理,用户统计,设备管理,设备类型,设备列表,固件管理,故障管理,区域管理,区域管理,信息管理,互动信息",
                "ctime": "1499510649",
                "utime": "1499510649"
            },
            {
                "id": "2",
                "role_name": "运维人员",
                "url_ids": "设备管理,固件管理,故障管理",
                "ctime": "1499510649",
                "utime": "1499510649"
            }
        ]
    }
}
*/

/**
 * @api {post} role/get_basic_info 系统管理-角色管理-获取角色详情
 * @apiName get_basic_info
 * @apiGroup role
 *
 * @apiParam {int} id 角色数据id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id  角色id
 * @apiSuccess {string} data.role_name  角色名称
 * @apiSuccess {array} data.menu_data  菜单权限数据
 * @apiSuccess {string} data.menu_data.id  菜单id
 * @apiSuccess {string} data.menu_data.name  菜单名称
 * @apiSuccess {array} data.menu_data.data  子菜单数据
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "2",
        "role_name": "运维人员",
        "menu_data": [
            {
                "id": "7",
                "name": "设备管理",
                "data": [
                    {
                        "id": "10",
                        "name": "固件管理",
                        "data": [
                            
                        ]
                    },
                    {
                        "id": "11",
                        "name": "故障管理",
                        "data": [
                            
                        ]
                    }
                ]
            }
        ]
    }
}
*/

/**
 * @api {post} company/lists 系统管理-商户管理-获取商户列表
 * @apiName lists
 * @apiGroup company
 *
 * @apiParam {int} page 页码
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.total  总数
 * @apiSuccess {string} data.size 每页显示数
 * @apiSuccess {array} data.list 列表数据
 * @apiSuccess {string} data.list.id  id
 * @apiSuccess {string} data.list.username   用户名
 * @apiSuccess {string} data.list.company    公司名称
 * @apiSuccess {string} data.list.contact    联系人
 * @apiSuccess {string} data.list.phone      手机号
 * @apiSuccess {string} data.list.ctime      添加时间
 * @apiSuccess {string} data.list.utime      修改时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 2,
        "size": 10,
        "list": [
            {
                "id": "4",
                "username": "",
                "company": "ww",
                "contact": "",
                "phone": "",
                "ctime": "0",
                "utime": "1519903380"
            },
            {
                "id": "5",
                "username": "ad",
                "company": "wa",
                "contact": "",
                "phone": "",
                "ctime": "0",
                "utime": "1519903380"
            }
        ]
    }
}
*/

/**
 * @api {post} company/add 系统管理-商户管理-创建商户
 * @apiName add
 * @apiGroup company
 *
 * @apiParam {string} company    公司名称
 * @apiParam {string} username   账号名，需AES加密
 * @apiParam {string} password   密码，  需AES加密
 * @apiParam {string} contact    联系人
 * @apiParam {string} phone      手机号
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "创建成功"
}
 */

/**
 * @api {post} company/edit 系统管理-商户管理-编辑商户
 * @apiName edit
 * @apiGroup company
 *
 * @apiParam {int} id 管理员账号ID
 * @apiParam {string} [password] 密码，  需AES加密
 * @apiParam {string} company    公司名称
 * @apiParam {string} contact    联系人
 * @apiParam {string} phone      手机号
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "编辑成功"
}
 */

/**
 * @api {post} company/del 系统管理-商户管理-删除商户
 * @apiName del
 * @apiGroup company
 *
 * @apiParam {int} id 管理员账号id,多个id用逗号隔开
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "删除成功"
}
 */

/**
 * @api {post} company/get_basic_info 系统管理-商户管理-获取商户基本信息
 * @apiName get_basic_info
 * @apiGroup company
 *
 * @apiParam {int} id 管理员账号id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id         管理员id
 * @apiSuccess {string} data.username   用户名
 * @apiSuccess {string} data.company    公司名称
 * @apiSuccess {string} data.contact    联系人
 * @apiSuccess {string} data.phone      手机号码
 * @apiSuccess {string} data.remark     备注信息
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "6",
        "username": "admin12",
        "company": "hhh",
        "contact": "doo",
        "phone": "13128856784"
    }
}
*/

/**
 * @api {post} device/lists 设备管理-获取设备列表
 * @apiName lists
 * @apiGroup device
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} page 页面，第1页开始
 * @apiParam {string} [stime] 查询（开始时间）
 * @apiParam {string} [etime] 查询（结束时间）
 * @apiParam {string} [imei]  设备IMEI号
 * @apiParam {string} [company] 商户名称
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {string} data.list.id           设备ID
 * @apiSuccess {string} data.list.imei         设备IMEI号
 * @apiSuccess {string} data.list.company      商户名
 * @apiSuccess {string} data.list.is_admin     0-是商户、1-是管理员
 * @apiSuccess {string} data.list.ctime        添加时间
 * @apiSuccess {string} data.list.utime        修改时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "2",
                "imei": "2222",
                "company": "wa",
                "is_admin": "0",
                "ctime": "0",
                "utime": "0"
            },
        ]
    }
}
 */

/**
 * @api {post} device/get_all_company 设备管理-获取全部商户
 * @apiName get_all_company
 * @apiGroup device
 *
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.company_id  商户ID
 * @apiSuccess {string} data.company     商户名称
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "company_id": "4",
            "company": "ww"
        },
        {
            "company_id": "5",
            "company": "wa"
        }
    ]
}
*/

/**
 * @api {post} device/get_basic_info 设备管理-获取设备基本信息
 * @apiName get_basic_info
 * @apiGroup device
 *
 * @apiParam {int} id 设备id
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id          管理员id
 * @apiSuccess {string} data.company_id  商户ID
 * @apiSuccess {string} data.imei        设备IMEI
 * @apiSuccess {string} data.company     商户名称
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "1",
        "company_id": "4",
        "imei": "4eeee",
        "company": "ww"
    }
}
*/

/**
 * @api {post} device/change_company 设备管理-变更商户
 * @apiName change_company
 * @apiGroup device
 *
 * @apiParam {int} id 设备ID
 * @apiParam {int} [company_id]  商户ID
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "编辑成功"
}
 */

/**
 * @api {post} device/del 设备管理-删除设备(未绑定用户)
 * @apiName del
 * @apiGroup device
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} id 设备ID，多个设备用(,)隔开
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "删除成功"
}
 */
 
/**
 * @api {post} device/export 设备管理-导出设备信息
 * @apiName export
 * @apiGroup device
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {string} [stime] 查询（开始时间）
 * @apiParam {string} [etime] 查询（结束时间）
 * @apiParam {string} [imei]  设备IMEI号
 * @apiParam {string} [company] 商户名称
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.file  文件地址
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "file": "http://testfiles.ourslinks.com/upload/tmp/20171107/export_201711071913279559.xls"
    }
}
 */

/**
 * @api {post} device/import 设备管理-导入设备
 * @apiName import
 * @apiGroup device
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} company_id 商户ID
 * @apiParam {string} data IMEI数据，多个IMEI用逗号(,)分割，如（ACCF234F19B0）或者（ACCF234F19B0,ACCF2350A084）
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "导入成功"
}
 */

/**
 * @api {post} message/lists 消息管理-获取推送消息列表
 * @apiName lists
 * @apiGroup message
 *
 * @apiParam {int} page  页码
 * @apiParam {int} [send_way]    渠道 1-app 2-短信
 * @apiParam {int} [send_range]  发送方式 1-全部 2-精准推送
 * @apiParam {string} [title]    消息标题
 * @apiParam {int} [stime]       查询(开始时间)
 * @apiParam {int} [etime]       查询(结束时间)
 * 
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id        消息id
 * @apiSuccess {string} data.list.title     消息标题
 * @apiSuccess {string} data.list.username  发送人
 * @apiSuccess {string} data.list.content   消息内容
 * @apiSuccess {int} data.list.send_way   渠道 1 app推送 2 短信
 * @apiSuccess {int} data.list.send_range 发送范围 1 全部用户  2 指定用户
 * @apiSuccess {string} data.list.nickname   接收用户昵称
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
     "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "1",
                "title": "1",
                "username": "admin",
                "content": "11",
                "send_way": "1",
                "send_range": "1",
                "ctime": "0",
                "nickname": "全部"
            },
        ]
    }
}
*/

/**
 * @api {post} message/get_basic_info 消息管理-获取消息详情
 * @apiName get_basic_info
 * @apiGroup message
 *
 * @apiParam {int} id  消息ID
 * 
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.id        消息id
 * @apiSuccess {string} data.title     消息标题
 * @apiSuccess {string} data.username  发送人
 * @apiSuccess {string} data.content   消息内容
 * @apiSuccess {string} data.send_way   渠道 1 app推送 2 短信
 * @apiSuccess {string} data.send_range 发送范围 1 全部用户  2 指定用户
 * @apiSuccess {string} data.nickname   接收用户昵称
 * @apiSuccess {string} data.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "1",
        "title": "1",
        "username": "admin",
        "content": "11",
        "send_way": "1",
        "send_range": "1",
        "ctime": "0",
        "nickname": "全部"
    }
}
*/

/**
 * @api {post} message/add 消息管理-新增消息(未完成)
 * @apiName add
 * @apiGroup message
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {string} title       消息标题
 * @apiParam {string} content     消息内容
 * @apiParam {string} send_way    渠道 1 app推送 2 短信 (商户没有短信推送)
 * @apiParam {string} send_range  发送方式 1 全部  2 精准推送
 * @apiParam {string} uid         推送用户UID（send_range为2）
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "新增成功"
}
 */

/**
 * @api {post} message/del 消息管理-删除推送消息
 * @apiName del
 * @apiGroup message
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} message_id 消息ID,多个ID的话用(,)隔开
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "删除成功"
}
 */

/**
 * @api {post} message/get_user_lists 获取用户列表
 * @apiName get_user_lists
 * @apiGroup message
 *
 * @apiParam {int} [mobile]  手机号
 * @apiParam {int} [nickname]  用户昵称
 * @apiParam {int} send_way  发送方式 1-app 2-短信
 * @apiParam {int} [company]  公司名称
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} page  页数 
 * 
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.uid        用户uid
 * @apiSuccess {string} data.list.nickname     用户昵称
 * @apiSuccess {string} data.list.mobile  手机号
 * @apiSuccess {string} data.list.email   邮箱
 * @apiSuccess {int} data.list.company   公司名
 * @apiSuccess {int} data.list.sex 性别 1：男、2：女 
 * @apiSuccess {string} data.list.birth   生日
 * @apiSuccess {string} data.list.height   身高
 * @apiSuccess {string} data.list.weight   体重
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "uid": "1",
                "nickname": "fff",
                "mobile": "",
                "email": "",
                "company": "ww",
                "sex": "1",
                "birth": "1990-01-01",
                "height": "0",
                "weight": "0",
                "ctime": "0"
            }
        ]
    }
}
*/

/**
 * @api {post} user/lists 用户管理-获取用户列表
 * @apiName lists
 * @apiGroup user
 *
 * @apiParam {int} [mobile]  手机号
 * @apiParam {int} [nickname]  用户昵称
 * @apiParam {int} [company]  公司名称
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.uid        用户uid
 * @apiSuccess {string} data.list.nickname     用户昵称
 * @apiSuccess {string} data.list.mobile  手机号
 * @apiSuccess {string} data.list.email   邮箱
 * @apiSuccess {int} data.list.company   公司名
 * @apiSuccess {int} data.list.sex 性别 1：男、2：女 
 * @apiSuccess {string} data.list.birth   生日
 * @apiSuccess {string} data.list.height   身高
 * @apiSuccess {string} data.list.weight   体重
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "uid": "1",
                "nickname": "fff",
                "mobile": "",
                "email": "",
                "company": "ww",
                "sex": "1",
                "birth": "1990-01-01",
                "height": "0",
                "weight": "0",
                "ctime": "0"
            }
        ]
    }
}
*/

/**
 * @api {post} user/get_basic_info 用户管理-用户信息-获取用户详情
 * @apiName get_basic_info
 * @apiGroup user
 *
 * @apiParam {int} uid 用户uid
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.uid         管理员id
 * @apiSuccess {string} data.nickname   用户昵称
 * @apiSuccess {string} data.mobile       手机号
 * @apiSuccess {string} data.email    邮箱
 * @apiSuccess {string} data.company  所属公司
 * @apiSuccess {string} data.birth   生日
 * @apiSuccess {string} data.height  身高
 * @apiSuccess {string} data.weight  体重
 * @apiSuccess {string} data.sex     性别 1-男 2-女
 * @apiSuccess {string} data.ctime     创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "uid": "2",
        "nickname": "eee",
        "mobile": "",
        "email": "",
        "company": null,
        "sex": "1",
        "birth": "1990-01-01",
        "height": "0",
        "weight": "0",
        "ctime": "0"
    }
}
*/

/**
 * @api {post} user/get_user_activity_data 用户管理-用户信息-获取用户运动数据
 * @apiName get_user_activity_data
 * @apiGroup user
 *
 * @apiParam {int} uid      用户UID
 * @apiParam {int} type_id  运动类型 1步行 2跑步 3骑行 4健身 5挑战 6徒步 7攀岩 8滑雪 9划船 10轮滑
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(开始时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id         id
 * @apiSuccess {int} data.list.uid        用户uid
 * @apiSuccess {string} data.list.activity_id     运动id
 * @apiSuccess {string} data.list.device_id  设备id
 * @apiSuccess {string} data.list.start_time  开始时间
 * @apiSuccess {int} data.list.end_time   结束时间
 * @apiSuccess {int} data.list.duration 持续时间
 * @apiSuccess {string} data.list.distances  距离
 * @apiSuccess {string} data.list.steps   步数
 * @apiSuccess {string} data.list.height   上升高度
 * @apiSuccess {string} data.list.calories   消耗热量
 * @apiSuccess {string} data.list.avg_speed   平均速度
 * @apiSuccess {string} data.list.avg_heart_rate  平均心率
 * @apiSuccess {string} data.list.water_intake  水摄入量
 * @apiSuccess {string} data.list.type_id   类型id
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "1",
                "uid": "1",
                "activity_id": "1",
                "device_id": "1",
                "start_time": "1",
                "end_time": "1",
                "duration": "1",
                "distances": "1.0",
                "steps": "1",
                "height": "1.0",
                "calories": "1",
                "avg_speed": "1.0",
                "avg_heart_rate": "1",
                "water_intake": "1.0",
                "ctime": "1",
                "type_id": "1"
            }
        ]
    }
}
*/

/**
 * @api {post} user/get_user_track_data 用户管理-用户信息-查看轨迹
 * @apiName get_user_track_data
 * @apiGroup user
 *
 * @apiParam {int} uid 用户uid
 * @apiParam {int} type_id 运动类型id
 * @apiParam {int} activity_id 运动id
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(开始时间)
 * 
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.lng        经度
 * @apiSuccess {string} data.lat   纬度
 * @apiSuccess {string} data.altitude    海拔
 * @apiSuccess {string} data.intensity  信号强度
 * @apiSuccess {string} data.ctime  时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "lng": "1.0000000",
            "lat": "1.0000000",
            "altitude": "1",
            "intensity": "1",
            "ctime": "1"
        },
        {
            "lng": "2.0000000",
            "lat": "2.0000000",
            "altitude": "2",
            "intensity": "2",
            "ctime": "2"
        }
    ]
}
*/

/**
 * @api {post} user/get_user_sleep_data 用户管理-用户信息-获取用户睡眠数据
 * @apiName get_user_sleep_data
 * @apiGroup user
 *
 * @apiParam {int} uid      用户UID
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(开始时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id         id
 * @apiSuccess {int} data.list.uid        用户uid
 * @apiSuccess {string} data.list.activity_id     运动id
 * @apiSuccess {string} data.list.sleep_time  睡觉总时间
 * @apiSuccess {string} data.list.deep_sleep  深睡时间
 * @apiSuccess {int} data.list.end_time   结束时间
 * @apiSuccess {int} data.list.light_sleep 浅睡时间
 * @apiSuccess {string} data.list.awake  清醒时间
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "1",
                "uid": "1",
                "sleep_time": "1",
                "deep_sleep": "2",
                "light_sleep": "3",
                "awake": "4",
                "ctime": "3"
            }
        ]
    }
}
*/

/**
 * @api {post} user/get_user_heart_rate_data 用户管理-用户信息-获取用户睡眠数据
 * @apiName get_user_heart_rate_data
 * @apiGroup user
 *
 * @apiParam {int} uid      用户UID
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(开始时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id         id
 * @apiSuccess {int} data.list.uid        用户uid
 * @apiSuccess {string} data.list.activity_id     运动id
 * @apiSuccess {string} data.list.sleep_time  睡觉总时间
 * @apiSuccess {string} data.list.deep_sleep  深睡时间
 * @apiSuccess {int} data.list.end_time   结束时间
 * @apiSuccess {int} data.list.light_sleep 浅睡时间
 * @apiSuccess {string} data.list.awake  清醒时间
 * @apiSuccess {int} data.list.ctime  创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "1",
                "uid": "1",
                "sleep_time": "1",
                "deep_sleep": "2",
                "light_sleep": "3",
                "awake": "4",
                "ctime": "3"
            }
        ]
    }
}
*/

/**
 * @api {post} statistics/active_user/overview 数据统计-活跃用户-数据概览
 * @apiName active_user/overview
 * @apiGroup statistics
 * 
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {string} data.active    昨日活跃
 * @apiSuccess {string} data.active7   7日活跃
 * @apiSuccess {string} data.active30  30日活跃
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "active": "0",
        "active7": "0",
        "active30": "0"
    }
}
*/

/**
 * @api {post} statistics/active_user/trends 数据统计-活跃用户-数据趋势
 * @apiName active_user/trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.added  新增用户
 * @apiSuccess {string} data.total_added  用户总数
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "active": "1",
            "date": "20170212"
        },
        {
            "active": "2",
            "date": "20170213"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/walk_trends 数据统计-步行数据-数据趋势
 * @apiName activity/walk_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.steps  人均步数
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "steps": "3333",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "steps": "4000",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/running_trends 数据统计-跑步数据-数据趋势
 * @apiName activity/running_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/ride_trends 数据统计-骑行数据-数据趋势
 * @apiName activity/ride_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/exercise_trends 数据统计-健身数据-数据趋势
 * @apiName activity/exercise_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/challenge_trends 数据统计-挑战数据-数据趋势
 * @apiName activity/challenge_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433"
        }
    ]
}
 */
吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无
/**
 * @api {post} statistics/activity/hike_trends 数据统计-徒步数据-数据趋势
 * @apiName activity/hike_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/climbing_trends 数据统计-攀岩数据-数据趋势
 * @apiName activity/climbing_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/skiing_trends 数据统计-滑雪数据-数据趋势
 * @apiName activity/skiing_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/skate_trends 数据统计-轮滑数据-数据趋势
 * @apiName activity/skate_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/rowing_trends 数据统计-划船数据-数据趋势
 * @apiName activity/rowing_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.duration  人均运动时长
 * @apiSuccess {string} data.distances 人均公里数
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45",
            "duration": "234",
            "distances": "1.00"
        },
        {
            "date": "20170213",
            "use_rate": "56",
            "duration": "433",
            "distances": "2.00"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/sleep_trends 数据统计-睡眠数据-数据趋势
 * @apiName activity/sleep_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45"
        },
        {
            "date": "20170213",
            "use_rate": "56"
        }
    ]
}
 */

/**
 * @api {post} statistics/activity/heart_rate_trends 数据统计-心率数据-数据趋势
 * @apiName activity/heart_rate_trends
 * @apiGroup statistics
 * @apiHeader {String} Access-Token 接口凭证
 *
 * @apiParam {int} [type] 类型 1-过去7天、2-过去30天
 * @apiParam {string} [stime] 查询[开始日期]
 * @apiParam {string} [etime] 查询[结束日期]
 *
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {array} data  数据
 * @apiSuccess {string} data.use_rate  使用率
 * @apiSuccess {string} data.date  日期
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": [
        {
            "date": "20170212",
            "use_rate": "45"
        },
        {
            "date": "20170213",
            "use_rate": "56"
        }
    ]
}
 */

/**
 * @api {post} record/get_admin_operate_lists 日志管理-操作日志-获取后台操作列表
 * @apiName get_admin_operate_lists
 * @apiGroup record
 *
 * @apiParam {int} [keyword]  手机号
 * @apiParam {int} [username]  用户名
 * @apiParam {int} [company]  公司名称
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(结束时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id            记录id
 * @apiSuccess {string} data.list.username   用户名
 * @apiSuccess {string} data.list.role_name  角色名
 * @apiSuccess {string} data.list.company    公司名
 * @apiSuccess {string} data.list.action     操作记录
 * @apiSuccess {int} data.list.ctime         创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "13",
                "username": "admin",
                "role_name": "超管",
                "company": "",
                "action": "删除管理员:admin,admin1",
                "ctime": "1520047660"
            },
        ]
    }
}
*/

/**
 * @api {post} record/get_interface_visit_lists 日志管理-接口日志-获取接口访问记录列表
 * @apiName get_interface_visit_lists
 * @apiGroup record
 *
 * @apiParam {int} [uid]  用户UID
 * @apiParam {int} [stime]  查询(开始时间)
 * @apiParam {int} [etime]  查询(结束时间)
 * @apiParam {int} page  页数
 *  
 * @apiSuccess {int} errcode 返回码，返回0是成功，其余都是错误
 * @apiSuccess {string} errmsg  错误信息，可以直接显示给用户
 * @apiSuccess {object} data  数据
 * @apiSuccess {int} data.total  总数量
 * @apiSuccess {int} data.size  每页数量
 * @apiSuccess {array} data.list  数据
 * @apiSuccess {int} data.list.id            记录id
 * @apiSuccess {string} data.list.uid        用户UID
 * @apiSuccess {string} data.list.url        接口地址
 * @apiSuccess {string} data.list.request    请求参数
 * @apiSuccess {string} data.list.result     返回结果
 * @apiSuccess {string} data.list.time_cost  用时
 * @apiSuccess {int} data.list.ctime         创建时间
 *
 * @apiSuccessExample Success-Response:
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "total": 1,
        "size": 10,
        "list": [
            {
                "id": "1",
                "uid": "1",
                "url": "111",
                "request": "",
                "result": "111",
                "time_cost": "1",
                "ctime": "1"
            }
        ]
    }
}
*/