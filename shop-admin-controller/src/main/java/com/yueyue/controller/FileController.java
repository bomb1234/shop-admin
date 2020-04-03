package com.yueyue.controller;

import com.yueyue.utils.IMoocJSONResult;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.UUID;

/**
 * @description:
 * @author: LZC
 * @date: 2020/4/3 0003 下午 14:53
 * @version: 1.0
 * @modified By:
 */
@RestController
@Api(value="上传文件的接口",tags= {"上传文件相关业务的controller"})
@RequestMapping("upload")
public class FileController extends BaseController{

    @ApiOperation(value="上传图片",notes="上传图片")
    @PostMapping("/uploadImage")
    public IMoocJSONResult uploadFace(@RequestParam("file") MultipartFile files) throws Exception{

        //文件保存的命名空间
        String fileSpace = FILE_SPACE;

        FileOutputStream fileOutputStream = null;
        InputStream inputStream = null;

        //数据库中相对路径
        String uploadPathDB = "/admin/sort";

        try {
            if(files != null ) {
                //文件名
                String fileName = files.getOriginalFilename();

                fileName = UUID.randomUUID().toString()+"."+fileName.split("\\.")[1];

                if(StringUtils.isNotBlank(fileName)) {
                    //文件上传最终保存路径
                    String finalFacePath = fileSpace + uploadPathDB + "/" + fileName;
                    //设置数据库保存的路径
                    uploadPathDB = FILE_PERFIX + uploadPathDB + ("/" + fileName);

                    File outFile = new File(finalFacePath);
                    if(outFile.getParentFile() !=null || outFile.getParentFile().isDirectory()) {
                        //创建付父文件夹
                        outFile.getParentFile().mkdirs();
                    }

                    fileOutputStream = new FileOutputStream(outFile);
                    inputStream = files.getInputStream();
                    IOUtils.copy(inputStream, fileOutputStream);
                }
            }else {
                return IMoocJSONResult.errorMsg("上传出错");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return IMoocJSONResult.errorMsg("上传出错");
        } finally {
            if(fileOutputStream != null) {
                fileOutputStream.flush();
                fileOutputStream.close();
            }
        }



        return IMoocJSONResult.ok(uploadPathDB);
    }

}
