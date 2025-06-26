"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsSchema = exports.contentSchema = exports.signinSchema = exports.signupSchema = void 0;
var v4_1 = require("zod/v4");
exports.signupSchema = v4_1.default.object({
    firstName: v4_1.default.string()
        .min(2, 'Too short!')
        .max(10, 'Too long!')
        .trim(),
    email: v4_1.default.email()
        .min(1, 'Please provide an email.')
        .trim(),
    password: v4_1.default.string()
        .min(8, 'Mininum 8 characters!')
        .max(15, 'Maximun 15 characters!')
        .regex(/[A-Z]/, "Password must include atleast one uppercase letter.")
        .regex(/[a-z]/, "Password must include atleast one lowercase letter.")
        .regex(/\d/, "Password must include atleast one digit.")
        .regex(/[!@#$%&*?]/, "Password must include atleast one special character.")
});
exports.signinSchema = v4_1.default.object({
    email: v4_1.default.email()
        .min(1, 'Please provide email')
        .trim(),
    password: v4_1.default.string()
        .min(8, 'Minimun 8 characters!')
        .max(12, 'Maximun 12 characters')
        .trim()
        .regex(/[A-Z]/, "Password must include atleast one uppercase letter.")
        .regex(/[a-z]/, "Password must include atleast one lowercase letter.")
        .regex(/\d/, "Password must include atleast one digit.")
        .regex(/[!@#$%&*?]/, "Password must include atleast one special character.")
});
exports.contentSchema = v4_1.default.object({
    title: v4_1.default.string()
        .min(5, 'Please provide title..')
        .max(200, 'Maximum 200 characters..')
        .trim(),
    url: v4_1.default.string()
        .trim(),
    type: v4_1.default.enum(['twitter', 'youtube', 'article']),
    tags: v4_1.default.array(v4_1.default.string()).optional()
});
exports.tagsSchema = v4_1.default.object({
    title: v4_1.default.string()
});
