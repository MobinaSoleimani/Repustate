export const validate= (data,type)=>{
    const errors={};
    
    if(!data.email)
    {
        errors.email="ایمیل  لازم است"
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="آدرس ایمیل معتبر نیست"
    }
    else 
    delete errors.email

    if(!data.password)
    {
        errors.password="رمز عبور لازم است"
    }else if(data.password.length<6){
        errors.password="رمز عبور باید 6 کاراکتر یا بیشتر باشد"
    }
    else 
    delete errors.password

    if(!data.confirmPassword)
    {
        errors.confirmPassword="تایید رمز عبور لازم است "
    }else if(data.confirmPassword!==data.password){
        errors.confirmPassword="تایید رمز عبور باید با رمز عبور برابر باشد"
    }
    else 
    delete errors.confirmPassword
    
    if(type==="login"){

    if(!data.name)
    {
        errors.name=" نام کاربری را وارد کنید"
    }
    else 
    delete errors.name
    }

    return errors;
}