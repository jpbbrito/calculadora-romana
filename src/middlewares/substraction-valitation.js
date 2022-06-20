module.exports = (request, response, next) => {
    const { 
        minuendo,
        subtraendo
     } = request.body;

    let errors = [];
    
    if (!minuendo || typeof minuendo !== 'string' ) {
        errors.push({ minuendo: 'Esse campo deve ter preenchido corretamene'});
    }
    if (!subtraendo || typeof subtraendo !== 'string') {
        errors.push({ subtraendo: 'Esse campo deve ter preenchido corretamene'});
    }


    if (errors.length > 0) {
        return response.status(400).json({
            errors
        });
    }
    return next();
}