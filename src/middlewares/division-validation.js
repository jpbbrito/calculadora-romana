module.exports = (request, response, next) => {
    const { 
        dividendo,
        divisor
     } = request.body;

    let errors = [];
    
    if (!dividendo || typeof dividendo !== 'string' ) {
        errors.push({ dividendo: 'Esse campo deve ter preenchido corretamene'});
    }
    if (!divisor || typeof divisor !== 'string') {
        errors.push({ divisor: 'Esse campo deve ter preenchido corretamene'});
    }

    if (errors.length > 0) {
        return response.status(400).json({
            errors
        });
    }
    return next();
}