module.exports = {
    isAuth : (req,res,next) => {
        if( !req.isAuthenticated()
            || typeof req.session.passport === 'undefined'
            || !req.session.passport){
            // res.redirect('/auth/login');
            res.header(404);
            console.log("inside if")
            // res.send("no ok");
        }
        console.log("outside")
          next();
    }
}