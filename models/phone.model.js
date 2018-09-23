const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: "brand is required"
    },
    name: {
        type: String,
        required: "name is required"
    },
    image: String,
    specs: {
        type: [String],
        default: []
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

const Phone = mongoose.model('Phone', PhoneSchema);

module.exports = Phone;