package vttp.paf.day22.repositories;

public class Queries {

    public static final String SQL_INSERT_USER = "insert into user(username, password) values(?, sha1(?))";
    public static final String SQL_AUTHENTICATE_USER = "select count(*) > 0 as auth_state from user where username = ? and password = sha1(?)";
    public static final String SQL_AUTHENTICATE_USER_0 = "select * from user where username = ? and password = sha1(?)";

    public static final String SQL_INSERT_ORDER = "insert into order(id, item, qty, username) values(?, ?, ?, ?)";
    
}
