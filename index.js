async function Eval(code){
 if(!code)throw new Error("No code was provided")
 try {
 return await eval(code)
 }catch(e){return e}
}
module.exports.Eval = Eval;
