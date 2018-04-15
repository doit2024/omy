
import ajax from './core'
import { aes } from '@/global'

export default {
  account: {
    login: ({username, password}) => ajax({url: 'account/login',
      data: {
        username: username && aes.encrypt(username),
        password: password && aes.encrypt(password)
      },
      whereCatch: 'local'
    }),
    logout: () => ajax({url: 'account/logout', whereCatch: 'local'}),
    info: () => ajax({url: 'account/info', whereCatch: 'local'}),
    setting: data => ajax({url: 'account/setting',
      data: {
        ...data,
        old_pwd: data.old_pwd && aes.encrypt(data.old_pwd),
        new_pwd: data.old_pwd && aes.encrypt(data.new_pwd),
        repwd: data.old_pwd && aes.encrypt(data.repwd)
      }
    })
  },

  admin: {
    lists: data => ajax({url: 'admin/lists', data}),
    get_admin_menu_list: data => ajax({url: 'admin/get_admin_menu_list', data}),
    add: data => ajax({url: 'admin/add', data}),
    edit: data => ajax({url: 'admin/edit', data}),
    del: data => ajax({url: 'admin/del', data}),
    get_basic_info: data => ajax({url: 'admin/get_basic_info', data}),
    get_all_role: data => ajax({url: 'admin/get_all_role', data})
  },
  role: {
    get_admin_menu_list: data => ajax({url: 'role/get_admin_menu_list', data}),
    save: data => ajax({url: 'role/save', data}),
    del: data => ajax({url: 'role/del', data}),
    lists: data => ajax({url: 'role/lists', data}),
    get_basic_info: data => ajax({url: 'role/get_basic_info', data})
  },
  company: {
    lists: data => ajax({url: 'company/lists', data}),
    add: data => ajax({url: 'company/add', data}),
    edit: data => ajax({url: 'company/edit', data}),
    del: data => ajax({url: 'company/del', data}),
    get_basic_info: data => ajax({url: 'company/get_basic_info', data})
  },
  device: {
    lists: data => ajax({url: 'device/lists', data}),
    get_all_company: data => ajax({url: 'device/get_all_company', data}),
    get_basic_info: data => ajax({url: 'device/get_basic_info', data}),
    change_company: data => ajax({url: 'device/change_company', data}),
    del: data => ajax({url: 'device/del', data}),
    export: data => ajax({url: 'device/export', data}),
    import: data => ajax({url: 'device/import', data})
  },
  message: {
    lists: data => ajax({url: 'message/lists', data}),
    get_basic_info: data => ajax({url: 'message/get_basic_info', data}),
    add: data => ajax({url: 'message/add', data}),
    del: data => ajax({url: 'message/del', data}),
    get_user_lists: data => ajax({url: 'message/get_user_lists', data})
  },
  user: {
    lists: data => ajax({url: 'user/lists', data}),
    get_basic_info: data => ajax({url: 'user/get_basic_info', data}),
    get_user_activity_data: data => ajax({url: 'user/get_user_activity_data', data}),
    get_user_track_data: data => ajax({url: 'user/get_user_track_data', data}),
    get_user_sleep_data: data => ajax({url: 'user/get_user_sleep_data', data}),
    get_user_heart_rate_data: data => ajax({url: 'user/get_user_heart_rate_data', data})
  },
  statistics: {
    active_user: data => ajax({url: 'statistics/active_user/trends', data}),
    activity: data => ajax({url: 'statistics/activity/heart_rate_trends', data})
  },
  record: {
    get_admin_operate_lists: data => ajax({url: 'record/get_admin_operate_lists', data}),
    get_interface_visit_lists: data => ajax({url: 'record/get_interface_visit_lists', data})
  }
}
