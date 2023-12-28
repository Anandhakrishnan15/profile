const {z} = require("zod");

const loginValidater = z.object ({
    email: z
    .string({required_error: "email reqire"})
    .trim()
    .email({ message:"email is in vallid"})
    .min(3,{message:"enter proper email"})
    .max (50,{message :"name must not bemore  than 50 letters"}),

    password: z
    .string({required_error: "namenis reqire"})
    .trim()
    .min(8,{message:"npwd too short"})
    .max (50,{message :"name must not bemore  than 50 letters"}),

})

module.exports = loginValidater