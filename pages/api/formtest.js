


  export default async (request, response) => {
    
    if (request.method === 'POST') {
        // console.log(request);
        if(request.body.firstName.includes('f') ) {
            return response.status(400).json({
                errors: {
                    firstName: "User name already exists"
                }
            });
    
        }
    
        return response.status(200).send('OK');

    }

    return response.status(405).end()
  }

