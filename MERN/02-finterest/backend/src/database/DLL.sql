USE [master]
GO
/****** Object:  Database [FinterestDB]    Script Date: 27/11/2022 19:01:55 ******/
CREATE DATABASE [FinterestDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FinterestDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\FinterestDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'FinterestDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\FinterestDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [FinterestDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FinterestDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FinterestDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FinterestDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FinterestDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FinterestDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FinterestDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [FinterestDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FinterestDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FinterestDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FinterestDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FinterestDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FinterestDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FinterestDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FinterestDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FinterestDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FinterestDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FinterestDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FinterestDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FinterestDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FinterestDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FinterestDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FinterestDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FinterestDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FinterestDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [FinterestDB] SET  MULTI_USER 
GO
ALTER DATABASE [FinterestDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FinterestDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FinterestDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FinterestDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [FinterestDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [FinterestDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [FinterestDB] SET QUERY_STORE = OFF
GO
USE [FinterestDB]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 27/11/2022 19:01:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[imageId] [int] NOT NULL,
	[userId] [int] NOT NULL,
	[title] [varchar](80) NOT NULL,
	[imageDescription] [varchar](150) NOT NULL,
	[fileName] [varchar](255) NOT NULL,
	[path] [varchar](255) NOT NULL,
	[originalName] [varchar](255) NOT NULL,
	[mimeType] [varchar](255) NOT NULL,
	[size] [numeric](18, 0) NOT NULL,
	[createdAt] [datetime] NOT NULL,
 CONSTRAINT [PK_Image] PRIMARY KEY CLUSTERED 
(
	[imageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Person]    Script Date: 27/11/2022 19:01:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Person](
	[personId] [int] NOT NULL,
	[personStatus] [int] NOT NULL,
	[firstName] [varchar](80) NOT NULL,
	[lastName] [varchar](80) NOT NULL,
	[createdAt] [datetime] NOT NULL,
	[updatedAt] [datetime] NOT NULL,
	[avatar] [varchar](255) NULL,
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[personId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 27/11/2022 19:01:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[statusId] [int] NOT NULL,
	[statusDescription] [varchar](80) NOT NULL,
	[statusCreatedAt] [datetime] NOT NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[statusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 27/11/2022 19:01:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[userId] [int] NOT NULL,
	[userEmail] [varchar](100) NOT NULL,
	[userPassword] [varchar](255) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Image]  WITH CHECK ADD  CONSTRAINT [FK_Image_User] FOREIGN KEY([userId])
REFERENCES [dbo].[User] ([userId])
GO
ALTER TABLE [dbo].[Image] CHECK CONSTRAINT [FK_Image_User]
GO
ALTER TABLE [dbo].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_Status] FOREIGN KEY([personStatus])
REFERENCES [dbo].[Status] ([statusId])
GO
ALTER TABLE [dbo].[Person] CHECK CONSTRAINT [FK_Person_Status]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Person] FOREIGN KEY([userId])
REFERENCES [dbo].[Person] ([personId])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Person]
GO
USE [master]
GO
ALTER DATABASE [FinterestDB] SET  READ_WRITE 
GO
