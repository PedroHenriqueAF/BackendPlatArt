import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    nome: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ['cliente', 'vendedor'],
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
      }
      
});

const User = mongoose.model('User', userSchema);

export default User;