export default (mongoose) => {
    const gradeSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true,
            min: 0
        },
        lastModified: {
            type: Date,
            default: Date.now
        }
    });

    gradeSchema.method('toJSON', function () {      //metodo de tratamento do objeto retornado
        const {__v, _id, ...object} = this.toObject();

        object.id = _id;

        return object;
    })

    const gradeModel = mongoose.model('student', gradeSchema, 'student');
    
    return gradeModel;
}
