import z from 'zod/v4';

export const signupSchema = z.object({
    firstName: z.string()
    .min(2,'Too short!')
    .max(10,'Too long!')
    .trim(),

    email: z.email()
    .min(1, 'Please provide an email.')
    .trim(),

    password: z.string()
    .min(8,'Mininum 8 characters!')
    .max(15,'Maximun 15 characters!')
    .regex(/[A-Z]/,"Password must include atleast one uppercase letter.")
    .regex(/[a-z]/,"Password must include atleast one lowercase letter.")
    .regex(/\d/,"Password must include atleast one digit.")
    .regex(/[!@#$%&*?]/,"Password must include atleast one special character.")

})

export const signinSchema = z.object({
    email: z.email()
    .min(1,'Please provide email')
    .trim(),

    password: z.string()
    .min(8,'Minimun 8 characters!')
    .max(12,'Maximun 12 characters')
    .trim()
    .regex(/[A-Z]/,"Password must include atleast one uppercase letter.")
    .regex(/[a-z]/,"Password must include atleast one lowercase letter.")
    .regex(/\d/,"Password must include atleast one digit.")
    .regex(/[!@#$%&*?]/,"Password must include atleast one special character.")
})

export const contentSchema = z.object({

    title: z.string()
    .min(5,'Please provide title..')
    .max(200,'Maximum 200 characters..')
    .trim(),

    url: z.string()
    .trim(),

    type: z.enum(['twitter' , 'youtube' , 'article']),
    
    tags: z.array(z.string()).optional()

})

export const tagsSchema = z.object({
    title: z.string()
})

