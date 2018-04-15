
export default {

// '系统管理-账号管理-获取账号列表':
    '/local/admin/lists':
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
},
// '获取登录账户菜单列表':
    '/local/admin/get_admin_menu_list':
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
},
// '系统管理-账号管理-创建管理员账号':
    '/local/admin/add':
    {
    "errcode": 0,
    "errmsg": "创建成功"
},
// '系统管理-账号管理-编辑管理员账号':
    '/local/admin/edit':
    {
    "errcode": 0,
    "errmsg": "编辑成功"
},
// '系统管理-账号管理-删除管理员账号':
    '/local/admin/del':
    {
    "errcode": 0,
    "errmsg": "删除成功"
},
// '系统管理-账号管理-获取账号基本信息':
    '/local/admin/get_basic_info':
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
},
// '系统管理-账号管理-获取全部角色':
    '/local/admin/get_all_role':
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
},
// '系统管理-角色管理-获取全部菜单列表':
    '/local/role/get_admin_menu_list':
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
},
// '系统管理-角色管理-保存角色':
    '/local/role/save':
    {
    "errcode": 0,
    "errmsg": "保存成功"
},
// '系统管理-角色管理-删除角色':
    '/local/role/del':
    {
    "errcode": 0,
    "errmsg": "删除成功"
},
// '系统管理-角色管理-获取角色列表':
    '/local/role/lists':
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
},
// '系统管理-角色管理-获取角色详情':
    '/local/role/get_basic_info':
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
},
// '系统管理-商户管理-获取商户列表':
    '/local/company/lists':
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
},
// '系统管理-商户管理-创建商户':
    '/local/company/add':
    {
    "errcode": 0,
    "errmsg": "创建成功"
},
// '系统管理-商户管理-编辑商户':
    '/local/company/edit':
    {
    "errcode": 0,
    "errmsg": "编辑成功"
},
// '系统管理-商户管理-删除商户':
    '/local/company/del':
    {
    "errcode": 0,
    "errmsg": "删除成功"
},
// '系统管理-商户管理-获取商户基本信息':
    '/local/company/get_basic_info':
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
},
// '设备管理-获取设备列表':
    '/local/device/lists':
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
},
// '设备管理-获取全部商户':
    '/local/device/get_all_company':
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
},
// '设备管理-获取设备基本信息':
    '/local/device/get_basic_info':
    {
    "errcode": 0,
    "errmsg": "",
    "data": {
        "id": "1",
        "company_id": "4",
        "imei": "4eeee",
        "company": "ww"
    }
},
// '设备管理-变更商户':
    '/local/device/change_company':
    {
    "errcode": 0,
    "errmsg": "编辑成功"
},
// '设备管理-删除设备(未绑定用户)':
    '/local/device/del':
    {
    "errcode": 0,
    "errmsg": "删除成功"
},
// '设备管理-导出设备信息':
    '/local/device/export':
    {
    "errcode": 0,
    "errmsg": "",
    "data": {
        "file": "http://testfiles.ourslinks.com/upload/tmp/20171107/export_201711071913279559.xls"
    }
},
// '设备管理-导入设备':
    '/local/device/import':
    {
    "errcode": 0,
    "errmsg": "导入成功"
},
// '消息管理-获取推送消息列表':
    '/local/message/lists':
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
},
// '消息管理-获取消息详情':
    '/local/message/get_basic_info':
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
},
// '消息管理-新增消息(未完成)':
    '/local/message/add':
    {
    "errcode": 0,
    "errmsg": "新增成功"
},
// '消息管理-删除推送消息':
    '/local/message/del':
    {
    "errcode": 0,
    "errmsg": "删除成功"
},
// '获取用户列表':
    '/local/message/get_user_lists':
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
},
// '用户管理-获取用户列表':
    '/local/user/lists':
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
},
// '用户管理-用户信息-获取用户详情':
    '/local/user/get_basic_info':
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
},
// '用户管理-用户信息-获取用户运动数据':
    '/local/user/get_user_activity_data':
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
},
// '用户管理-用户信息-查看轨迹':
    '/local/user/get_user_track_data':
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
},
// '用户管理-用户信息-获取用户睡眠数据':
    '/local/user/get_user_sleep_data':
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
},
// '用户管理-用户信息-获取用户睡眠数据':
    '/local/user/get_user_heart_rate_data':
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
},
// '数据统计-活跃用户-数据概览':
    '/local/statistics/active_user/overview':
    {
    "errcode": 0,
    "errmsg": "",
    "data": {
        "active": "0",
        "active7": "0",
        "active30": "0"
    }
},
// '数据统计-活跃用户-数据趋势':
    '/local/statistics/active_user/trends':
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
},
// '数据统计-步行数据-数据趋势':
    '/local/statistics/activity/walk_trends':
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
},
// '数据统计-跑步数据-数据趋势':
    '/local/statistics/activity/running_trends':
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
},
// '数据统计-骑行数据-数据趋势':
    '/local/statistics/activity/ride_trends':
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
},
// '数据统计-健身数据-数据趋势':
    '/local/statistics/activity/exercise_trends':
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
},
// '数据统计-挑战数据-数据趋势':
    '/local/statistics/activity/challenge_trends':
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
 
吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无
/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
},
// '数据统计-攀岩数据-数据趋势':
    '/local/statistics/activity/climbing_trends':
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
},
// '数据统计-滑雪数据-数据趋势':
    '/local/statistics/activity/skiing_trends':
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
},
// '数据统计-轮滑数据-数据趋势':
    '/local/statistics/activity/skate_trends':
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
},
// '数据统计-划船数据-数据趋势':
    '/local/statistics/activity/rowing_trends':
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
},
// '数据统计-睡眠数据-数据趋势':
    '/local/statistics/activity/sleep_trends':
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
},
// '数据统计-心率数据-数据趋势':
    '/local/statistics/activity/heart_rate_trends':
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
},
// '日志管理-操作日志-获取后台操作列表':
    '/local/record/get_admin_operate_lists':
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
},
// '日志管理-接口日志-获取接口访问记录列表':
    '/local/record/get_interface_visit_lists':
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
}