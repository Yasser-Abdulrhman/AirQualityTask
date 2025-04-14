const yup = require('yup')


module.exports.latAndLngSchema = yup.object({
    lat: yup.number().required(),
    long: yup.number().required(),
}) 