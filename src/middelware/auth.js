const admin_auth=(req,res,next)=>{
    const token="abc";
    const midelerauth=token==="abc";
    if(!midelerauth){
        res.send("adminis unauthenticated")
    }else{
       next()

    }
}
const user_auth=(req,res,next)=>{
    const token="abe";
    const middelware=token==="abe";
    if(!middelware){
        res.send("adminis unautherticated from user_auth")
    }else{
        next()
    }
}
module.exports={
    admin_auth,user_auth

}