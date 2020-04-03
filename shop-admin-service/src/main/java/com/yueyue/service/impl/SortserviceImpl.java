package com.yueyue.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yueyue.mapper.CategoryMapper;
import com.yueyue.pojo.Category;
import com.yueyue.service.SortService;
import com.yueyue.utils.PagedResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @description:
 * @author: LZC
 * @date: 2020/4/3 0003 上午 10:34
 * @version: 1.0
 * @modified By:
 */
@Service
public class SortserviceImpl implements SortService {

    @Autowired
    private CategoryMapper categoryMapper;

    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public PagedResult queryFirstInfo(Integer page,Integer limit) {
        PageHelper.startPage(page,limit);
        Example example = new Example(Category.class);
        example.orderBy("sort").desc();
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("type",1);

        List<Category> list = categoryMapper.selectByExample(example);
        PageInfo<Category> data = new PageInfo<>(list);

        PagedResult pagedResult = new PagedResult();
        pagedResult.setPage(page);
        pagedResult.setTotal(data.getPages());
        pagedResult.setRows(list);
        pagedResult.setRecords(data.getTotal());

        return  pagedResult;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Integer saveSort(Category category) {
        category.setType(1);
        return categoryMapper.insertSelective(category);
    }
}
