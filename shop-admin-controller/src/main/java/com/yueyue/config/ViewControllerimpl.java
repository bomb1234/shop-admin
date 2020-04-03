package com.yueyue.config;

import com.yueyue.intercepter.IntercetorConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @description:
 * @author: LZC
 * @date: 2020/3/24 0024 下午 14:01
 * @version: 1.0
 * @modified By:
 */
@Configuration
public class ViewControllerimpl implements WebMvcConfigurer {

//    @Autowired
//    IntercetorConfig intercetorConfig;
//
//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
////        registry.addViewController("/").setViewName("login");
//    }
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
////        registry.addInterceptor(intercetorConfig).addPathPatterns("/**")
////        .excludePathPatterns("/","/login.html","/user/login","/static/**");
//    }


}
