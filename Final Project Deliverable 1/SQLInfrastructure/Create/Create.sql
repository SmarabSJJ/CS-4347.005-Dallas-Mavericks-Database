DROP DATABASE ProjectMavsDB;
CREATE DATABASE ProjectMavsDB;
USE ProjectMavsDB;

CREATE TABLE Player (
    PlayerID INT PRIMARY KEY,
    Fname VARCHAR(50),
    Minit CHAR(1),
    Lname VARCHAR(50),
    Height FLOAT,
    JerseyNo CHAR(2),
    Experience INT,
    Fflag BOOLEAN NOT NULL,
    F_type VARCHAR(2),
    Cflag BOOLEAN NOT NULL,
    C_type VARCHAR(2),
    Gflag BOOLEAN NOT NULL,
    G_type VARCHAR(2)
);

CREATE TABLE Coach (
    CoachID INT PRIMARY KEY,
    Fname VARCHAR(50),
    Minit CHAR(1),
    Lname VARCHAR(50),
    Start_year INT,
    Super_ID INT
);

CREATE TABLE Games (
    Game_number INT PRIMARY KEY,
    Season VARCHAR(50),
    Opponent VARCHAR(3),
    Location VARCHAR(100)
);

CREATE TABLE Executive_Staff (
    StaffID INT PRIMARY KEY,
    Fname VARCHAR(50),
    Minit CHAR(1),
    Lname VARCHAR(50),
    Position VARCHAR(50),
    Operation_type VARCHAR(50)
);

CREATE TABLE Contract (
    Py_ID INT,
    ContractID INT,
    Salary DECIMAL(12, 2),
    Duration INT,
    CONSTRAINT PK_Contract PRIMARY KEY (Py_ID, ContractID),
    CONSTRAINT FK_Player_Contract FOREIGN KEY (Py_ID) REFERENCES Player(PlayerID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Teams_Coached (
    C_ID INT,
    T_coached VARCHAR(100),
    CONSTRAINT PK_Teams_Coached PRIMARY KEY (C_ID, T_coached),
    CONSTRAINT FK_Coach_Teams_Coached FOREIGN KEY (C_ID) REFERENCES Coach(CoachID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Trains (
    P_ID INT,
    Ch_ID INT,
    Train_type VARCHAR(50),
    CONSTRAINT PK_Trains PRIMARY KEY(P_ID, Ch_ID),
    CONSTRAINT FK_Player_Trains FOREIGN KEY (P_ID) REFERENCES Player(PlayerID) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_Coach_Trains FOREIGN KEY (Ch_ID) REFERENCES Coach(CoachID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Played_in (
    Play_id INT,
    GNum INT,
    CONSTRAINT PK_Playedin PRIMARY KEY(Play_id, GNum),
    Sn VARCHAR(100),
    Min_played INT,
    CONSTRAINT FK_Player_Played_in FOREIGN KEY (Play_id) REFERENCES Player(PlayerID) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_Game_Playedin FOREIGN KEY (GNum) REFERENCES Games(Game_number) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Oversees (
    P_ID INT,
    Staff_ID INT,
    CONSTRAINT PK_Oversees PRIMARY KEY(P_ID, Staff_ID),
    CONSTRAINT FK_Player_Oversee FOREIGN KEY (P_ID) REFERENCES Player(PlayerID) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FK_Player_Staff_ID FOREIGN KEY (Staff_ID) REFERENCES Executive_Staff(StaffID) ON UPDATE CASCADE ON DELETE CASCADE
);
