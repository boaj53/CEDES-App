CREATE TABLE Carrera 
(
    idCarrera INTEGER PRIMARY KEY AUTOINCREMENT,
    NameCarrera TEXT
);

CREATE TABLE Usuarios 
(
    idCarrera INTEGER, 
    idUsuarios INTEGER PRIMARY KEY AUTOINCREMENT,
    Correo TEXT,
    Contraseña TEXT,
    FOREIGN KEY (idCarrera) REFERENCES Carrera(idCarrera)
);

CREATE TABLE Semestre 
(
    idCarrera INTEGER, 
    idSemestre INTEGER PRIMARY KEY AUTOINCREMENT,
    NumSemestre INTEGER,
    FOREIGN KEY (idCarrera) REFERENCES Carrera(idCarrera)
);

CREATE TABLE Materia 
(
    idCarrera INTEGER,
    idSemestre INTEGER, 
    idMateria INTEGER PRIMARY KEY AUTOINCREMENT,
    NombreMateria TEXT,
    Notificacion INTEGER,
    FOREIGN KEY (idCarrera) REFERENCES Carrera(idCarrera),
    FOREIGN KEY (idSemestre) REFERENCES Semestre(idSemestre)
);

CREATE TABLE SubCompetencia 
(
    idCarrera INTEGER,
    idSemestre INTEGER,
    idMateria INTEGER,
    idSubCom INTEGER PRIMARY KEY AUTOINCREMENT,
    NombreSubCom TEXT,
    Notificacion INTEGER,
    FOREIGN KEY (idCarrera) REFERENCES Carrera(idCarrera),
    FOREIGN KEY (idSemestre) REFERENCES Semestre(idSemestre),
    FOREIGN KEY (idMateria) REFERENCES Materia(idMateria)
);

CREATE TABLE Detalles 
(
    idCarrera INTEGER,
    idSemestre INTEGER,
    idMateria INTEGER,
    idSubCom INTEGER,
    idDetalles INTEGER PRIMARY KEY AUTOINCREMENT,
    NombreDetalles TEXT,
    TextoPrincip TEXT,
    TextoSec TEXT,
    BottonName TEXT,
    Link TEXT,
    FOREIGN KEY (idCarrera) REFERENCES Carrera(idCarrera),
    FOREIGN KEY (idSemestre) REFERENCES Semestre(idSemestre),
    FOREIGN KEY (idMateria) REFERENCES Materia(idMateria),
    FOREIGN KEY (idSubCom) REFERENCES SubCompetencia(idSubCom)
);

PRAGMA foreign_keys = ON;

INSERT INTO Carrera (NameCarrera) VALUES ('LESI');
INSERT INTO Carrera (NameCarrera) VALUES ('LDMG');
INSERT INTO Carrera (NameCarrera) VALUES ('ALL');

INSERT INTO Usuarios (idCarrera, Correo, Contraseña) VALUES (3, 'root', 'root');

INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,1);
INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,2);
INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,3);
INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,4);
INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,5);
INSERT INTO Semestre (idCarrera, NumSemestre) VALUES (1,6);

INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Economía y Mercado', 1);
INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Estado y Sociedad', 1);
INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Gobierno y Población', 1);
INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Naturaleza del Conocimiento', 1);
INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Razonamiento Matemático', 1);
INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Sociedad Actual', 1);


INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 1, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 1, 'Subcompetencia 2', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 1, 'Subcompetencia 3', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 1, 'Producto Final', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 2, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 2, 'Subcompetencia 2', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 2, 'Producto Final', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 3, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 3, 'Subcompetencia 2', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 3, 'Producto Final', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 4, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 4, 'Subcompetencia 2', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 4, 'Subcompetencia 3', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 4, 'Prodcuto Final', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 5, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 5, 'Producto Final', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 6, 'Subcompetencia 1', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 6, 'Subcompetencia 2', 1);
INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 6, 'Producto Final', 1);



INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Actividad Preliminar', 'Las actividades económicas que hoy en día se realizan en la familia, el trabajo, diversiones, etcétera, han sido producto de la evolución y condición social del ser humano.\nDebido a ello y por el considerable peso que tienen en el que hacer cotidiano, es necesario conocer las características más importantes de dichas actividades económicas.', 'Observa el video Actividades económicas, participa en el foro Actividades económicas y responde la siguiente pregunta:\n¿Cuáles son las actividades económicas que realizas en tu vida y por qué?', 'Acceder a Material', 'https://www.youtube.com/embed/IbWiuX2vUUM');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Actividad 1', 'La economía es una ciencia social que ha cambiado sus postulados conforme el desarrollo de los sistemas económicos, los cuales han pasado de ser simples intercambios económicos a complicadas transacciones financieras en los bancos, casas de bolsa, etcétera. Actualmente el sistema económico es más complejo que el que vivieron los clásicos de la economía (Adam Smith, David Ricardo y Carlos Marx), ya que se caracteriza principalmente por el predominio del capital financiero sobre las actividades productivas, dentro del contexto de la globalización neoliberal.', 'Observa el video La economía como ciencia social, de Gonzalo Cóporo Quintana, y elabora una reseña', 'Acceder a Material', 'https://www.youtube.com/watch?v=tHIM8sA1UGk');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Actividad 2', 'El objeto y método de estudio de la economía se ha construido, desde la economía política clásica marxista, con base en el método dialéctico y en el materialismo histórico. Lee los textos La construcción del objeto, de Pierre Bourdieu et al., y Economía política, de Federico Engels. Posteriormente elabora un resumen de ambos textos, en el que resaltes el objeto de estudio de la economía y el método que utiliza.', 'Elabora tu actividad en un archivo de Word con una extensión de dos cuartillas y con apego a las reglas ortográficas y gramaticales.', 'Acceder a Material', 'https://drive.google.com/drive/u/1/folders/1cVNmDf6-akrsfe4aEhu2iOSZ1frORhN6');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubcom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Actividad 3', 'La economía es una ciencia social con distintas definiciones. Generalmente sólo se conoce la teoría subjetiva del valor, que relaciona la economía con los recursos escasos, una de las tradiciones teóricas más trascendentes es la teoría objetiva del valor, que define la economía como la ciencia que estudia la producción, distribución, intercambio y consumo de bienes.', 'Lee el texto Teoría objetiva y teoría subjetiva del valor, de Silvestre Méndez.', 'Acceder a Material', 'https://drive.google.com/drive/u/1/folders/1cVNmDf6-akrsfe4aEhu2iOSZ1frORhN6');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Actividad Integradora', 'Lee el texto Teoría objetiva y teoría subjetiva del valor de Silvestre Méndez', 'Debido a la importancia del tema, realiza una recapitulación de los contenidos y actividades de esta subcompetencia y con base en éstos elabora un mapa conceptual ','Acceder a Material', 'https://www.youtube.com/embed/xSAE9i6sM1I');

INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 2, 'Actividad Preliminar', 'El sistema económico, de acuerdo con Méndez (2009), es la organización de las actividades económicas que cada sociedad asume históricamente para satisfacer sus necesidades. También se puede definir como el conjunto de mecanismos organizadores de las actividades económicas.', 'Para que conozcas mejor la dinámica del sistema económico observa la presentación Elementos fundamentales de economía, de Gonzalo Cóporo Quintana', 'Acceder a Material', 'https://cv.unach.mx/uvfile/uv/lesi/m1/economia/s2ap_elementos.ppt');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 2, 'Actividad 1', 'Los agentes económicos son unidades de producción y de consumo que satisfacen sus necesidades por medio del intercambio de bienes y servicios; sólo dos de estos agentes (gobierno y familias) pueden producir y consumir al mismo tiempo dentro de un sistema económico dinámico, en el cual el gobierno es un regulador del mercado.', 'Lee el texto Los agentes económicos, de Mauricio Reina, Sandra Zuluaga y Marcela Rozo; enseguida, y para ampliar tus conocimientos sobre este tema, realiza una investigación sobre las definiciones y los bienes de los agentes económicos', 'Acceder a Material', 'https://cv.unach.mx/uvfile/uv/lesi/m1/economia/s2a1_agentes.pdf' );
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 2, 'Actividad Integradora', 'El funcionamiento del sistema económico se ha descrito a través de modelos económicos, desde el modelo de Quesnay hasta la versión de corte estructural de la Comisión Económica para América Latina y el Caribe (CEPAL), incluyendo, entre otros, el modelo de flujo circular y el de Schumpeter.', 'Lee el texto Modelos económicos, de Gustavo Vargas Sánchez.', 'Acceder a Material', 'https://cv.unach.mx/uvfile/uv/lesi/m1/economia/s2ai_modelos.pdf' );

INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 3, 'Actividad Preliminar', 'El mercado en economía, independientemente de su forma física, es el espacio donde se intercambian bienes, servicios y capitales, por ello, puede ser desde un tianguis hasta la bolsa de valores. La mayoría de las personas conoce distintos tipos de mercado; en esta actividad debes identificar algunos aspectos comunes entre ellos', 'Participa en el wiki El mercado económico y menciona cuántos tipos de mercado conoces y cuáles son sus características. En caso de que sea necesario, puedes consultar en fuentes impresas o digitales, pero no olvides anotar las referencias de las fuentes. El último estudiante en participar en el wiki debe redactar la definición final del concepto mercado, con base en las aportaciones de sus compañeros, y ordenar alfabéticamente las referencias utilizadas', 'Acceder a Material', '');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 3, 'Actividad 1','El mercado actual es una institución que se ha configurado paulatinamente desde el siglo XII con las premisas del mercado libre; gracias a esta configuración, el lucro y la máxima ganancia obtenidos son primicia sobre las relaciones sociales.\nUna de las características básicas del mercado es el principio de autorregulación, cuya lógica consiste en que el precio de un producto encuentra su punto de equilibrio a partir de la coincidencia entre la oferta y la demanda, bajo un modelo de competencia perfecta.','Lee los textos Del caos a la autorregulación de un mercado libre, de Octave Gélinier y Emmanuel Pateyron, y Mercado, clases de mercado, competencia perfecta e imperfecta, de Silvestre Méndez. Posteriormente elabora un resumen en el que abordes los siguientes temas: el origen del mercado, el mercado y su clasificación, la oferta y la demanda, la competencia perfecta e imperfecta y el proceso de fijación de los precios','Acceder a Material','https://cv.unach.mx/uvfile/uv/lesi/m1/economia/s3a1_caos.pdf');
INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 3, 'Actividad Integradora', 'El sistema económico no funciona con la precisión que suelen describir los modelos formales de la economía como la competencia perfecta, ya que actualmente en el capitalismo predomina la competencia imperfecta, cuyo mercado se orienta a la lógica de los monopolios y de los oligopolios y además existen otros factores como los institucionales, que deben ser tomados en cuenta en el desempeño del sistema económico.', 'Lee el texto Instituciones y desempeño económico, de José Ayala Espino, y con base en el texto elabora un mapa conceptual.', 'Acceder a Material', 'https://cv.unach.mx/uvfile/uv/lesi/m1/economia/s3ai_instituciones.pdf');

INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 4, 'Producto Final', 'Ahora que has finalizado el estudio de las tres subcompetencias de esta unidad elabora, como producto final, un ensayo en el que identifiques los elementos fundamentales de la economía y el funcionamiento del mercado', 'Redacta el ensayo en un documento de Word, con fondo blanco, fuente Arial, color negro, tamaño 12, interlineado de 1.5 y márgenes de 2.5 cm. \n\nEl producto final tiene un valor de 20 puntos, los cuales se sumarán al puntaje de las subcompetencias para determinar tu calificación en esta unidad.', 'Acceder a Material', 'https://cv.unach.mx/uvfile/uv/lesi/m1/economia/pf_guia_apa_6ta.pdf'); 
