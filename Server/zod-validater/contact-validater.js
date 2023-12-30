const {z} = require("zod");

const contactVlidater = z.object({

    username:z
    .string({required_error: "username reqire"})
    .trim()
    .min(3,{message:"enter proper username"})
    .max (50,{message :"plz enter a proper name"}),
    email: z
    .string({required_error: "email reqire"})
    .trim()
    .email({ message:"email is in vallid"})
    .min(3,{message:"enter proper email"})
    .max (50,{message :"plz enter a proper name"}),
    request:z
    .string({required_error: "username reqire"})
    .trim()
    .min(5,{message:"minum 5 letters or words "})
    .max (500,{message :"limte is 500 letters "}),
});

module.exports = contactVlidater;