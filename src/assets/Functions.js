export const Functions = {
    isLogin: () => {
        try {
            return localStorage.getItem("tokenAuth").length > 10;
        } catch (e) {
            return false;
        }
    },
    getToken: () => {
        try {
            return localStorage.getItem("tokenAuth");
        } catch (e) {
            return null;
        }
    },
    setToken: (token) => {
        try {
            localStorage.setItem('tokenAuth', token);
            const tokenSave = localStorage.getItem('tokenAuth');
            return tokenSave === token;
        } catch (e) {
            return false;
        }
    },
    getUser: () => {
        try {
            return localStorage.getItem("userAuth");
        } catch (e) {
            return {id: null, name: "Invitado"};
        }
    },
    setUser: (user) => {
     try {
         localStorage.setItem('userAuth',user);
         const userSave = localStorage.getItem('userAuth');
         return userSave === user;
     } catch (e) {
         return false;
     }
 }
   /* setUser: (objeto) => {
        try {
            localStorage.setItem('userAuth', JSON.stringify(objeto));
            const userSave = JSON.parse(localStorage.getItem('userAuth'));
            return userSave === objeto;
        } catch (e) {
            return false;
        }
    }*/
};