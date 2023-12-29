const {z} = require("zod");

const loginValidater = z.object({
    email: z
    .string({required_error: "email reqire"})
    .trim()
    .email({ message:"email is in vallid"})
    .min(3,{message:"enter proper email"})
    .max (50,{message :"plz enter a proper name"}),

    password: z
    .string({required_error: "enter the PWD"})
    .trim()
    .min(8,{message:"pwd is wrong"})
    .max (50,{message :"entwewd proper pwd"}),

})

module.exports = loginValidater