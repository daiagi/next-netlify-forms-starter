const thing = require('../api/formtest');
const cloudFunction = thing.handler;
test ('returns 200', async () => {
    const event =  {
        'httpMethod': 'POST',
        body: JSON.stringify({firstName: 'sadsdjknjk34'})
    };
    const output = await cloudFunction(event);
    expect(output.statusCode).toBe(200);

})

test ('respond with 405 to GET', async () => {
    const event =  {
        'httpMethod': 'GET',
    };
    const output = await cloudFunction(event);
    expect(output.statusCode).toBe(405);

})

test ('returns 400 and error object', async () => {
    const event =  {
        'httpMethod': 'POST',
        body: JSON.stringify({firstName: 'sadsdjfknjk34'})
    };
    const output = await cloudFunction(event);
    console.log(output)
    expect(output.statusCode).toBe(400);
    expect(output.body).toBeDefined();
    const responseBody = JSON.parse(output.body);
    expect(responseBody.errors).toBeDefined()

})