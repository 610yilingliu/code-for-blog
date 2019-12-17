import { Schema } from "mongoose";

const User = new Schema({
    // 用户名
    id:{
        type: String,
        required: true
    },
    // Email
    email:{
        type: String,
        required: true
    },
    // 手机号
    phone_number:{
        type: String,
        required: true
    },
    // 签名
    intro:{
        type: String,
        required: true
    },
    // 存储直播付费记录
    paid_live:{
        // 一个数组，存储已付费的直播数字ID。进直播间时后端会通过类似 if current_live_id in paid 判断。
        type: Array
    },
    // 视频付费记录，判断模式同上
    paid_video:{
        type: Array
    }
})
