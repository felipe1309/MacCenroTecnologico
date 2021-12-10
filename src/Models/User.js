import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    compras:{
        type:Array,
        required:false,
    },
    phone:{
        type:Number,
        required:false,
        minlength:10,
        maxlength:10
    }
},{
    timestamps: true,
    versionKey: false
}
);
export default models.User || model('User', UserSchema);