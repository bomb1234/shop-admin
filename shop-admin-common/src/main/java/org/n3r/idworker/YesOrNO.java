package org.n3r.idworker;

/**
 * @description: 是否 枚举
 * @author: LZC
 * @date: 2020/2/28 0028 下午 13:56
 * @version: 1.0
 * @modified By:
 */
public enum YesOrNO {
    NO(0,"否"),
    YES(1,"是");

    public final  Integer  type;
    public final  String  value;

    YesOrNO(Integer type, String value) {
        this.type = type;
        this.value = value;
    }
}
