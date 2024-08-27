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



INSERT INTO productos(nombre, descripcion, precio, stock, categoria, imagen) 
VALUES 
('Teclado Mecánico Corsair K95 RGB Platinum', 
 'Teclado mecánico con retroiluminación RGB, switches Cherry MX, y reposamuñecas desmontable.', 
 150, 
 30, 
 'Perifericos', 
 'https://www.invidcomputers.com/images/000000000041035879456410358--1-.png'),

('Auriculares HyperX Cloud II', 
 'Auriculares gaming con sonido envolvente 7.1, micrófono desmontable y almohadillas de memory foam.', 
 100, 
 25, 
 'Perifericos', 
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2YVdYjGMy_bRkjLyuV66mJc4Bt4ZmkaLUg&s'),

('Silla Gamer DXRacer Racing Series', 
 'Silla ergonómica para gaming con soporte lumbar, reposabrazos ajustables y base de acero.', 
 350, 
 10, 
 'Mobiliario', 
 'https://www.dxracer.com.ar/media/wysiwyg/blog-img/Post13_7.webp'),

('Mouse Logitech G502 HERO', 
 'Mouse gaming con sensor HERO 25K, 11 botones programables y pesos ajustables.', 
 70, 
 40, 
 'Perifericos', 
 'https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2018/10/mouse-logitech-gaming-g502-proteus-hero-11-teclas-16000dpi-D_NQ_NP_717910-MLA28296519816_102018-F.jpg?fit=600%2C600&ssl=1'),

('Tarjeta Gráfica NVIDIA GeForce RTX 3080', 
 'Tarjeta gráfica de alto rendimiento con 10GB GDDR6X, ray tracing y DLSS.', 
 700, 
 5, 
 'Componentes', 
 'https://http2.mlstatic.com/D_NQ_NP_687381-MLA48158776726_112021-O.webp'),

('Procesador AMD Ryzen 9 5900X', 
 'Procesador de 12 núcleos y 24 hilos con arquitectura Zen 3, ideal para gaming y creación de contenido.', 
 550, 
 8, 
 'Componentes', 
 'https://www.venex.com.ar/products_images/1609790688_microprocesadoramdryzen95900x.jpg'),

('SSD Samsung 970 EVO Plus 1TB', 
 'Unidad de estado sólido NVMe M.2 con velocidades de lectura/escritura de hasta 3500/3300 MB/s.', 
 150, 
 20, 
 'Almacenamiento', 
 'https://http2.mlstatic.com/D_NQ_NP_789863-MLU72533084404_102023-O.webp'),

('Fuente de Alimentación Corsair RM750x 750W', 
 'Fuente de alimentación totalmente modular con certificación 80 PLUS Gold y ventilador de 135mm.', 
 120, 
 15, 
 'Componentes', 
 'https://http2.mlstatic.com/D_NQ_NP_815204-MLU74957482395_032024-O.webp'),

('Gabinete NZXT H510', 
 'Gabinete ATX compacto con panel lateral de vidrio templado, gestión de cables y soporte para radiadores de hasta 280mm.', 
 80, 
 18, 
 'Componentes', 
 'https://m.media-amazon.com/images/I/51UmOLS2GyL._AC_SL1000_.jpg'
);




select * from productos;
