const { findUserByUUID, findUserByUsername, saveNewUser } = require('../repositories/users')

module.exports = {
    async save( request, response ) {
        const {
            userName,
            fullName,
            password
        } = request.body;
        const { authenticatedUser } = request;

        console.log('[usersController].save() authenticatedUser -> ', authenticatedUser)
        if(authenticatedUser.userName != 'admin') {
            return response.status(401).json({
                error: 'Usuario não tem privilegio para tal tarefa'
            })
        }
        const userWithUsername = await findUserByUsername(userName);
        if(userWithUsername) {
            return response.status(403).json({
                error: 'Já existe um usuario com esse userName'
            });
        }

        const userSaveOkay = await saveNewUser({userName, fullName, password});
        if(userSaveOkay === 'code_error_db'){
            return response.status(500).json({error: 'Houve algum problema, tentar novamente!'})
        } 
        const userSaved = await findUserByUUID(userSaveOkay, ['userName', 'fullName', 'createdAt', 'updatedAt']);
        if(userSaved === 'code_error_db'){
            return response.status(500).json({error: 'Houve algum problema, tentar novamente!'})
        } 
        
        return response.status(201).json(userSaved);
    },
    async getInfo(request, response){
        const { authenticatedUser } = request;
        const user = await findUserByUsername(authenticatedUser.userName, ['uuid','userName','fullName','createdAt','updatedAt']);
        return response.json(user);
    }
}