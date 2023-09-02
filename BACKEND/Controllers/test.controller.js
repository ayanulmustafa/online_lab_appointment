const tests = require('../Models/tests')


const getalltests = async(req,res) => {
    try {
        const test = await tests.find({})
        res.status(200).send({
            success:true , 
            message:'Tests List', 
            data: test
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false , message:'Error while loading tests', error})
    }

}

module.exports = getalltests