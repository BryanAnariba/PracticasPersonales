-- INSERTAR UNA IMAGEN NUEVA => EXEC dbo.SP_INSERTIMAGE 
CREATE OR ALTER PROCEDURE SP_INSERTIMAGE( 
	@userId INT,
	@title VARCHAR( 80 ),
	@imageDescription VARCHAR( 150 ),
	@fileName VARCHAR( 255 ),
	@path VARCHAR( 255 ),
	@originalName VARCHAR( 255 ),
	@mimeType VARCHAR( 255 ),
	@size NUMERIC( 18,0 ),
	@lastId INT OUT
)
AS
BEGIN
	-- OBTENEMOS EL ULTIMO ID DE LAS IMAGENES
	DECLARE @lastImageId INT
	SET @lastImageId = ( SELECT dbo.getLastIdFromImages() AS LastId )
	-- AHORA SI CUADRAMOS
	INSERT INTO [dbo].[Image] 
	( imageId, userId, title, imageDescription, fileName, path, originalName, mimeType, size, createdAt )
	VALUES 
	( @lastImageId, @userId, @title, @imageDescription, @fileName, @path, @originalName, @mimeType, @size, GETDATE() );
	SET @lastId = @lastImageId
END;


--EXEC SP_GETIMAGESFROMUSER 1
CREATE OR ALTER PROCEDURE SP_GETIMAGESFROMUSER( @userId INT )
AS
BEGIN
	SELECT * FROM [dbo].[Image] WHERE userId = @userId;
END;

-- EXEC SP_DELETEIMG 1,2
CREATE OR ALTER PROCEDURE SP_DELETEIMG( @userId INT, @imageId INT )
AS
BEGIN
	DELETE FROM [dbo].[Image] WHERE userId = @userId AND imageId = @imageId;
END;