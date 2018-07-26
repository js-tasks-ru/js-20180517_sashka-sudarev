/**
 * processGenerator
 * @param {Generator} gen - генератор
 * @returns {Promise}
 */
function processGenerator(func){
    return new Promise(resolve => {

        function step(result){
            let f=func.next(result);
            if (f.done) resolve(f.value); else
                f.value.then(result => step(result));
        }

        func.next().value.then(result => step(result));
    });
}
