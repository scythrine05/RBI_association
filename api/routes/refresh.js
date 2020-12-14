//REFRESH ROUTE - to get new Access Token

//Importing 
const Router = require("router");
const handleJWT = require("../functions/handleJWT"); 

const router = Router();

//Routing
router.post( '/' , async(req, res)=>{
    
    try{
        //Getting Refersh Token from Authorization Header
        let refreshToken = req.headers.authorization.split(' ')[1];
        let userData = await handleJWT.validateRefreshToken(refreshToken); 

        //Configuring payload from RefreshToken payload

        let newUserData = {

            id: userData.id,
            name: userData.name,
            email: userData.email

        }

        // Getting New Access Token from handleJWT (getAccessToken Function)
        let newAccessToken = await  handleJWT.getAccessToken(newUserData);

        //Responsing with New Access Token
        res.send(newAccessToken);
    }

    catch(e){
        res.status(404).send(e);
    }
});

//Exporting
module.exports = router;