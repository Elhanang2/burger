create database burger_db;

use burger_db;

create table burgers(
	id int  NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) not null,
    devoured boolean default false,
    primary key(id)
);



