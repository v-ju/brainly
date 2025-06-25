import { Schema,model,Types,Document } from 'mongoose'

interface User extends Document {
    firstName: string,
    email: string,
    password:string
}

interface Content extends Document{
    title: String,
    link: String,
    type: String,
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
}

interface Tag extends Document{
    title: string
}

interface Link extends Document{
    hash:string,
    userId: Types.ObjectId;
}



const userSchema = new Schema<User>({
    firstName: {
        type:String,
        required:true,
        minlength:[2,'Firstname should have mininum 2 characters'],
        maxlength:[10, 'Firstname should have maximun 10 characters']  
    },
    email:{
        type: String,
        required: true,
        unique:true,        
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true})


const contentSchema = new Schema<Content>({
    title: {
        type: String,
        required:true
    },
    link: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required:true
    },
    tags: [{
        type: Types.ObjectId, 
        ref:'Tag'
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},{timestamps: true})


const tagSchema = new Schema<Tag>({
    title: {type: String}
},{timestamps: true})


const linkSchema = new Schema<Link>({
    hash: {type: String},
    userId: {
        type: Schema.Types.ObjectId,
        ref:'User',
    }
},{timestamps: true})




export const UserModel = model('User',userSchema)
export const ContentModel = model('Content', contentSchema)
export const TagModel = model('Tag',tagSchema)
export const LinkModel = model('Link',linkSchema)