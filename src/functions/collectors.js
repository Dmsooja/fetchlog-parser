/**
 * Get collectors ready for the table + add column input comment (10 lines max?)
 * @param {String | ArrayBuffer} data - The content of collector column 
 */

export function parseCol(data) {

    const collectors = {
        collector: [],
        params: [],
        values: []
    };

    // Clear params and values in collectors
    collectors.collector.splice(0, collectors.collector.length);
    collectors.params.splice(0, collectors.params.length);
    collectors.values.splice(0, collectors.values.length);

    //
    const queryParams = data.split('&');
    collectors.collector.push(data);
    queryParams.forEach(qp => collectors.params.push(qp.split("=")[0]));
    queryParams.forEach(qp => collectors.values.push(qp.split("=")[1]));

    return collectors
}

//Caractère interdits : [àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]|\s