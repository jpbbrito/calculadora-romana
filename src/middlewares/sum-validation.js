module.exports = (request, response, next) => {
    const { 
        valor1,
        valor2
     } = request.body;

    let errors = [];
    
    if (!valor1 || typeof valor1 !== 'string' ) {
        errors.push({ valor1: 'Esse campo deve ter preenchido corretamene'});
    }
    if (!valor2 || typeof valor2 !== 'string') {
        errors.push({ valor2: 'Esse campo deve ter preenchido corretamene'});
    }

    if (errors.length > 0) {
        return response.status(400).json({
            errors
        });
    }
    return next();
}