const mongoose =  require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/zootube',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect ok')
    }catch(error){
        console.log('fail')
    }
}

module.exports = connect