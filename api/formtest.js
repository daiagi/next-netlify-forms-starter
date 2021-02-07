exports.handler = async function(event, context) {
    // your server-side functionality

    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body)
        // console.log(request);
        if(body.firstName.includes('f') ) {
            return {
                statusCode: 400,
                body: JSON.stringify(
                    {
                        errors: {
                            firstName: "User name already exists"
                        }
                    }
                )
            }

    
        }
        return  {
            statusCode: 200,
            body: 'OK'
        }


    }

    return {statusCode: 405};
}