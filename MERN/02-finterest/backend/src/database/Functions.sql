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
/****** Object:  UserDefinedFunction [dbo].[getLastIdFromImages]    Script Date: 10/12/2022 18:18:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   FUNCTION [dbo].[getLastIdFromImages]()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	DECLARE @id INT
	SET @lastId = (select MAX( imageId ) from [FinterestDB].[dbo].[Image])
	If (@lastId is null)
		SET @id = 1
	Else
		SET @id = @lastId + 1
	
	RETURN @id 
END;
