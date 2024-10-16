
/*

1xx informational response – 
    the request was received & understood, 
    process  is continuing
    client will be alerted to wait for final response
-----------------------------------------------------------------
2xx successful – the request was successfully received, understood, and accepted
    200 OK                  Standard response for successful HTTP requests
    201 created             a new resource was created
-----------------------------------------------------------------
3xx redirection – further action needs to be taken in order to complete the request

-----------------------------------------------------------------
4xx client error – the request contains bad syntax or cannot be fulfilled
    400 Bad Request             server cannot process the request due to client error
    401 unauthorised            user authentication failed... 
                                    response must include www-authenticate header field
    402                         reserved for future use
    403 forbidden               request contained valid data and was understood by the server
                                    but the server is refusing action.
    404                         requested resource could not be found but may be available in future. 
                                    Subsequent requests by the client are permissible.
-----------------------------------------------------------------
5xx server error – the server failed to fulfil an apparently valid request

    500 Internal Server Error       generic error message, given when no specific message is suitable.
    
    501 Not Implemented             server either does not recognize the request method
                                        or it lacks the ability to fulfil the request. 
                                        Usually this implies future availability 
                                        a new feature of a web-service API

    502 Bad Gateway                 The server was acting as a gateway or proxy 
                                        and received an invalid response from upstream server
    503 Service Unavailable         The server cannot handle the request 
                                        because it is overloaded or down for maintenance. 
                                        Generally, this is a temporary state.
    504 Gateway Timeout             The server was acting as a gateway or proxy 
                                        and didnt receive a timely response from the upstream server.

*/

var httpStatusCodes = {
    ok:200,
    serverError: 500,
}


module.exports = httpStatusCodes