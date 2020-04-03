package com.yueyue.controller;

import com.yueyue.pojo.Category;
import com.yueyue.service.SortService;
import com.yueyue.utils.IMoocJSONResult;
import com.yueyue.utils.PagedResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @description:
 * @author: LZC
 * @date: 2020/4/3 0003 上午 10:25
 * @version: 1.0
 * @modified By:
 */
@RestController
@RequestMapping("sort")
public class SortController {

    @Autowired
    private SortService sortService;

    @RequestMapping("queryFirstInfo")
    public IMoocJSONResult queryFirstInfo(@RequestParam("page") Integer page,@RequestParam("limit") Integer limit) {
        PagedResult pagedResult = sortService.queryFirstInfo(page, limit);
        return IMoocJSONResult.ok(pagedResult);
    }

    @RequestMapping("saveSort")
    public IMoocJSONResult saveSort(@RequestBody Category category) {
        Integer result = sortService.saveSort(category);
        if(result == 1){
            return IMoocJSONResult.ok("添加成功");
        }else{
            return  IMoocJSONResult.errorMsg("添加失败");
        }

    }
}
