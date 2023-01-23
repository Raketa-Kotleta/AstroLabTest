<template>
<div class="container">
   <div class="header">
        <h2 class="title">
            Ready for a great
            User experience?
        </h2>
        <h3 class="subtitle">
            Bring your media to the next level!
        </h3>
        <nav class="navbar">
           <button class="btn signup-btn">
                <RouterLink to="/signup" class="btn-link">Sign up</RouterLink>
           </button>
           <button class="btn signin-btn">
                <RouterLink to="/signin" class="btn-link"> 
                    <img src="../assets/right_arrow.svg" alt="">
                </RouterLink>
           </button>
        </nav>
        <img src="../assets/enter_screen_background.svg" alt="" class="bg-screen">
   </div>
    
</div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default{
    name: "EnterScreen",
    components:{
    RouterLink
}
}
</script>

<style scoped lang="scss">
.container{
   
   .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 63px;
        .title{
            margin: 0 0;
            @include SetFontWithParameters("Inter", $extra-bold, 1.375rem);
            color: $title;
            line-height: 30px;
        }
        .title,.subtitle{
            text-align: center;
            max-width: 220px;
            
        }
        .subtitle{
            @include SetFontWithParameters("Inter", $thin, 0.875rem);
            color: $subtitle;
            margin: 17px 0;
        }
        .navbar{
            display: flex;
            justify-content: center;
            margin: 10px 0;
            .btn{
                border: none;
                outline: none;
                padding: 14px 0px;
               
                margin: 0 8px;
                &-link{
                    @include SetFontWithParameters("Inter", $thin, 0.875rem);
                }
            }
            .signin-btn{
                background-color: $submit-btn;
                border-radius: 100%;
                height: 48px;
                width: 48px;
                line-height: 25px;
                .btn-link{
                    color:white;
                    text-decoration: none;
                    img{
                        height: 16px;
                        width: auto;
                    }
                }
                
            }
            .signup-btn{
                border-radius: 50px;
                background-color: white;
                padding-inline: 24px;
                .btn-link{
                    color:black;
                    text-decoration: none;
                }
            }
        }
   }
    .bg-screen{
        position: fixed;
        width: 100%;
        max-height: 62vh;
        bottom: 0;
        left: 0;
        right: 0;
        
    }
}

</style>