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

INSERT INTO Materia (idCarrera, idSemestre, NombreMateria, Notificacion) VALUES (1, 1, 'Primer Materia', 1);

INSERT INTO SubCompetencia (idCarrera, idSemestre, idMateria, NombreSubCom, Notificacion) VALUES (1, 1, 1, 'Primer subcompetencia', 1);

INSERT INTO Detalles (idCarrera, idSemestre, idMateria, idSubCom, NombreDetalles, TextoPrincip, TextoSec, BottonName, Link) VALUES (1, 1, 1, 1, 'Primer detalle', 'Lorem ipsum', 'Hola mundo', 'Nombre botton', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
