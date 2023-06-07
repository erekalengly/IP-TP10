import { Validator } from "node-input-validator"
import jwt from "jsonwebtoken"

async function registerValidator(req, res, next){
    const validator = new Validator(req.body, {
        email: 'required|email',
        username: 'required|string',
        firstname: 'required|string',
        lastname: 'required|string',
        password: 'required|string'
       
    })
    const matched = await validator.check();
    if (!matched)
        return res.status(422).json({
            success: false,
            message: validator.errors
        })

    next()
}

async function loginValidator(req, res, next) {
    const validator = new Validator(req.body, {
        email: 'required|email',
        password: 'required|string'
    })

    const matched = await validator.check();

    if (!matched)
        return res.status(422).json({
            success: false,
            message: validator.errors
        })

    next()
}

async function private_route(req, res, next){
    const jwt_token = req.cookies.accessToken
   // console.log(jwt_token)
    // if (jwt_token == null) return false
    // const verify = jwt.verify(jwt_token, "4c9fec8211c8e98a7435453af544de4e07c44b372a6a34f5e3ddcc80b68dd1ada333791cc763a6927d654185906ffd2a3f24d7e5a58ecc5678087303cb475fb7")

    // if (!verify)
    //     return res.status(402).json({
    //         success: false,
    //         message: "User not authenticated"
    //     })

    if (jwt_token == null) 
        return res.status(401).json({
            success: false,
            message: "user not authenticated"
        })
    const verify = jwt.verify(jwt_token, "nguy$007$eng$#@nah", (err, user) => {
        if (err) {
            console.log("fail")
            return res.status(401).json({
                success: false,
                message: "token expired"
            })
        }
        next()
    })
}

export {
    registerValidator,
    loginValidator,
    private_route
}