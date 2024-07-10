import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    surname: string;
    emailOrMobile: string;
    password: string;
    dateOfBirth: Date;
    gender: 'Female' | 'Male' | 'Custom';
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    emailOrMobile: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            'Please fill a valid email address or mobile number',
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate: {
            validator: function (value: Date) {
                return !isNaN(value.getTime());
            },
            message: 'Invalid Date, please select a valid date',
        },
    },
    gender: {
        type: String,
        enum: ['Female', 'Male', 'Custom'],
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
