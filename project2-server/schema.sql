drop database if exists proj2;
create database proj2;
use proj2;

drop table if exists users;
create table users (

	-- primary key
    username varchar(128) not null,
    password varchar(256) not null

    primary key(username)
);

drop table if exists items;
create table items(
    id varchar(8) not null,
    item varchar(32) not null,
    qty int not null,
    username varchar(32) not null,

    primary key (id),
    constraint fk_username
        foreign key(username)
        references users(username)

);