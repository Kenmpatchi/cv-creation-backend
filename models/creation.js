const mongoose=require('mongoose');
const Cv = mongoose.model( 'Cv' , {
    user_id:{
        type:Object
    },
    types:{
        type:String
    },
    name:{
        type:String
    },
    prenom:{
        type:String

    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
    profil:{
        type:String
    },
    poste:{
        type:String
    },
    date_1:{
        type: String,
        match: /^[0-9]{4}\/(0[1-9]|1[0-2])$/
    },
    date_2:{
        type: String,
        match: /^[0-9]{4}\/(0[1-9]|1[0-2])$/
    },
    description:{
        type:String
    },
    diplome:{
        type:String
    },
    date_dip:{
        type:Number
    },
    competence:{
        type:String
    },
    languages:{
        type:String
    }

})
module.exports = Cv;