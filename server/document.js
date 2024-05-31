import  {Schema, model} from 'mongoose'

const Doc = new Schema ({
    _id : String,
    data : Object,
})

const Document  = model ("Document",Doc);

export default Document ;