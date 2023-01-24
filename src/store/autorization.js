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
        isUserExists(context,{users, email}){
            let MatchedUser = null;
            users.forEach(CurrentUser=>{
                if (CurrentUser.Email == email)
                    {
                        MatchedUser = CurrentUser;
                        return;
                    }
            });
            return MatchedUser;
        },
        loadUserDataFromLocalStorage(context, key){
            return JSON.parse(localStorage.getItem(key)) ?? [];
        },
        async login(context,email){
            const Users = await context.dispatch('loadUserDataFromLocalStorage', USER_DATA_STORAGE_KEY);
            let MatchedUser = await context.dispatch('isUserExists', {
                users: Users,
                email: email,
            });
            
            if (MatchedUser){
                context.commit('setLoggedUser', MatchedUser);
                return true;
            }
            return false;
        },

        async register(context,user){
            const Users = await context.dispatch('loadUserDataFromLocalStorage', USER_DATA_STORAGE_KEY);
            let MatchedUser = await context.dispatch('isUserExists', {
                users: Users,
                email: user.Email,
            });
            if (MatchedUser)
                return false;
            else{
                Users.push(user);
                const UsersJson = JSON.stringify(Users);
                localStorage.setItem(USER_DATA_STORAGE_KEY, UsersJson); 
                return true;
            }
        },
       
    }
} 
export default autorization;