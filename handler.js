module.exports.handler = async (event) => {
    const currentTime = new Date();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            currentTime: currentTime
        }),
    };
    return response;
};