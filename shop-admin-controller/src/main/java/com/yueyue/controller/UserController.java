package com.yueyue.controller;

import com.yueyue.utils.IMoocJSONResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.sound.midi.SysexMessage;
import java.util.Map;

/**
 * @description:
 * @author: LZC
 * @date: 2020/3/24 0024 下午 13:34
 * @version: 1.0
 * @modified By:
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @PostMapping("login")
    public IMoocJSONResult login(String username, String password){

        if("admin".equals(username) && "123".equals(password)){

            return IMoocJSONResult.ok();
        }
        else{
            return IMoocJSONResult.errorMsg("用户名或密码错误");
        }
    }



}
