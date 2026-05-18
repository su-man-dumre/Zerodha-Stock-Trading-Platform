const {model}=required("mongoose");

const {HoldingsSchema}=require('../schemas/HoldingsSchema');

const HoldingsModel=new model("holding",HoldingsSchema);
model.exports={HoldingsModel};