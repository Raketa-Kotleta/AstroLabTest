import User from "@/classes/User";
const USER_DATA_STORAGE_KEY = "USERSDATA1";

const autorization = {
    namespaced: true,
    state:{
        user: null
    },
    mutations:{
        setLoggedUser(state, user){
            state.user = user;
        }
    },
    actions:{
        login(context,{email,password}){
            const UsersJsonData = localStorage.getItem(USER_DATA_STORAGE_KEY);
            const Users = JSON.parse(UsersJsonData) ?? [];
            let MatchedUser = null;
            Users.forEach(CurrentUser => {
                if (email === CurrentUser.Email && password === CurrentUser.Password)
                    MatchedUser = new User(
                        CurrentUser.Name,
                        CurrentUser.Email,
                        CurrentUser.Password
                    );
            });
            return MatchedUser;
        },
        register(context,user){
            let UsersJson = localStorage.getItem(USER_DATA_STORAGE_KEY);
            const Users = JSON.parse(UsersJson) ?? [];
            let MatchedUser = null;
            Users.forEach(cuurent_user => {
                if (cuurent_user.Email == user.Email)
                    MatchedUser =  cuurent_user;
            });
            if (MatchedUser)
                return MatchedUser;
            Users.push(user);
            UsersJson = JSON.stringify(Users);
            localStorage.setItem(USER_DATA_STORAGE_KEY, UsersJson); 
            return null;
        }
    }
} 
export default autorization;