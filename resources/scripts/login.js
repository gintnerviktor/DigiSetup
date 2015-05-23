/**
 * Created by viktor on 22/03/15.
 */

(function (window) {
    'use strict';

    function LoginScreen(szoveg){
        console.log(szoveg);
    }

    LoginScreen.prototype.getBody = function(){
        var text = '';
        return text;
    }



// Az Export to window
    app.LoginScreen = LoginScreen;
})(window);