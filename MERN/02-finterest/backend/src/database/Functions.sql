-- OBTENER ULTIMO ID DE PERSONAS Y IMAGENES
-- SELECT dbo.getLastIdFromPersons() AS LastId
-- SELECT dbo.getLastIdFromImages() AS LastId
CREATE FUNCTION getLastIdFromPersons()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	SET @lastId = (SELECT COUNT(*) + 1 FROM Person);
	RETURN @lastId 
END;

USE [FinterestDB]
GO
/****** Object:  UserDefinedFunction [dbo].[getLastIdFromImages]    Script Date: 09/12/2022 7:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER FUNCTION [dbo].[getLastIdFromImages]()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	SET @lastId = (select MAX( imageId ) + 1 from [FinterestDB].[dbo].[Image])
	RETURN @lastId 
END;
