const {Schema}=require("mongoose");
const eventoSchema = new Schema(
{
  Titulo_Evento:Date,
    Fecha: Date,
    Hora: Date,
    cliente: {type: String, ref: "Usuario"},
  });
  eventoSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
  };
  eventoSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
  };
  eventoSchema.statics.insert = async function (evento){
    return await this.create(evento);
  };
  eventoSchema.statics.change = async function (id, evento){
    return await this.findByIdAndUpdate(id, evento,{new:true});
  };
  eventoSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = eventoSchema;