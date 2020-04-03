package com.yueyue.service;

import com.yueyue.pojo.Category;
import com.yueyue.utils.PagedResult;

import java.util.List;

/**
 * @description:
 * @author: LZC
 * @date: 2020/4/3 0003 上午 10:33
 * @version: 1.0
 * @modified By:
 */
public interface SortService {
    /**
     * 查询商品一级分类
     * @return
     */
    PagedResult queryFirstInfo(Integer page, Integer limit);

    /**
     * 保存分类
     * @param category
     */
    Integer saveSort(Category category);
}
