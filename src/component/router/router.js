import Sign_up from "../sign up/Sign_up"
import Sign_in from "../sign_in/Sign_in";
import Post_ride from "../post_ride/Post_ride";
import Request_ride from "../request_ride/Request_ride";
import Report from "../report/Report";
import Navbar from "../navbar/Navbar"



const ROUTES = [
    {
      path:'/',
      element: <Navbar/>
    },
    {
        path: '/signup',
        element: <Sign_up />
    },
    {
        path: '/signin', // Fixed the case (Signin -> signin)
        element: <Sign_in />
    },
    {
        path: '/post-ride',
        element: <Post_ride />
    },
    {
        path: '/request-ride',
        element: <Request_ride />
    },
    {
        path: '/report',
        element: <Report />
    }
];

export default ROUTES;
