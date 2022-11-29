-- OBTENER ULTIMO ID
CREATE FUNCTION getLastIdFromPersons()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	SET @lastId = (SELECT COUNT(PersonId) + 1 FROM Person);
	RETURN @lastId 
END;
-- SELECT DBO.getLastIdFromPersons() AS LastId


CREATE FUNCTION getLastIdFromImages()
RETURNS INT
AS
BEGIN
	DECLARE @lastId INT
	SET @lastId = (SELECT COUNT(ImageId) + 1 FROM Image)
	RETURN @lastId 
END;

-- SELECT dbo.getLastIdFromImages() AS LastId