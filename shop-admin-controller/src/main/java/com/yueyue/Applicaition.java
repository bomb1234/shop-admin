package com.yueyue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import tk.mybatis.spring.annotation.MapperScan;

/**
 * @description:
 * @author: LZC
 * @date: 2020/3/9 0009 下午 14:33
 * @version: 1.0
 * @modified By:
 */
@SpringBootApplication
//扫描mybatis通用mapper所在的包
@MapperScan(basePackages = "com.yueyue.mapper")
//扫描所有包以及组件类
@ComponentScan(basePackages = {"org.n3r.idworker","com.yueyue"})
public class Applicaition extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(Applicaition.class,args);
    }

    @Override
    protected SpringApplicationBuilder configure(
            SpringApplicationBuilder builder) {
        return builder.sources(Applicaition.class);
    }
}
