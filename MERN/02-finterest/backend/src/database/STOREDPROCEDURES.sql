--  PARA REGISTRAR UNA PERSONA
USE FinterestDB
GO
CREATE PROCEDURE CREATEPERSON(
	@personId INT,
	@personStatus INT,
	@firstName VARCHAR(80),
	@lastName VARCHAR(80),
	@avatar VARCHAR(80)
)
AS
	INSERT INTO Person( personId, personStatus, firstName, lastName, avatar, createdAt, updatedAt ) VALUES 
	( @personId, @personStatus, @firstName, @lastName, @avatar, GETDATE(), GETDATE());
GO

--  PARA REGISTRAR UN USUARIO
USE FinterestDB
GO
CREATE PROCEDURE CREATEUSER(
	@personId INT,
	@userEmail VARCHAR(100),
	@userPassword VARCHAR(255)
)
AS
	INSERT INTO [dbo].[User]( userId, userEmail, userPassword ) VALUES 
	( @personId, @userEmail, @userPassword )
GO

-- VER UN USUARIO POR EMAIL => EXEC dbo.GET_USER_BY_EMAIL 'test1@gmail.com'
USE FinterestDB
GO
CREATE PROCEDURE GET_USER_BY_EMAIL( @userEmail VARCHAR(80) )
AS
	WITH CTE_EXISTS_USER
	AS
	(
		SELECT 
			[dbo].[Person].personId, 
			[dbo].[Person].firstName, 
			[dbo].[Person].lastName, 
			[dbo].[Person].personStatus, 
			[dbo].[Person].createdAt, 
			[dbo].[Person].updatedAt,
			[dbo].[User].userEmail,
			[dbo].[User].userPassword
			FROM [dbo].[Person] INNER JOIN [dbo].[User] 
			ON [dbo].[Person].personId = [dbo].[User].userId
	)
	SELECT * FROM CTE_EXISTS_USER WHERE CTE_EXISTS_USER.userEmail = @userEmail
GO