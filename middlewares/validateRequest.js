
module.exports.validate = (schema , target = 'body') => async (req , res , next) => {
    try{
        await schema.validate(req[target])
        next()
    } catch (error) {
        return res.status(400).json({ "Message": error.message});
    }
}