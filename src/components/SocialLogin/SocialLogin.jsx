import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
 
     const {googleLogin} = useContext(AuthContext);

    //  navigation
     const location = useLocation();
     const navigate = useNavigate();

     const handleSocialLogin = socialProvider => {
      socialProvider()
      .then(result => {
         if(result.user){
        
          navigate(location?.state || '/')
         }
      })
     }

    return (
        <div>
          <div className="divider">more options</div>
            <div className="form-control ml-7 mr-5">
                <button
              onClick={()=>handleSocialLogin(googleLogin)}
             
                className="btn bg-purple-300">Google</button>
                
              </div>
        </div>
    );
};

export default SocialLogin;