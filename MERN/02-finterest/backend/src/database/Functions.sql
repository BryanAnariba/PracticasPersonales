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

CREATE FUNCTION getLastIdFromImages()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	SET @lastId = (SELECT COUNT(*) + 1 FROM Image)
	RETURN @lastId 
END;
