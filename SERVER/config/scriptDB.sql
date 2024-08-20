drop database if exists ecommerce_db;
create database ecommerce_db;
use ecommerce_db;

create table productos (
	id int auto_increment primary key,
    nombre varchar(100) not null,
    descripcion text,
    precio decimal(10,2) not null,
    stock int not null default 0,
    categoria varchar(50),
    imagen varchar(200),
    fecha_creacion timestamp DEFAULT current_timestamp
);

select * from productos;

