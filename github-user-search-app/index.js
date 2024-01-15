let searchBarInput = document.getElementById("search")
let submitBtn = document.getElementById("search__bar__right__submit")
let userImg = document.getElementById("user__info__img")
let userImgWrapper = document.getElementById("user__info__left")
let userName = document.getElementById("user__info__right__name")
let userJoined = document.getElementById("user__info__right__joined")
let userUsername = document.getElementById("user__info__right__username")
let userBio = document.getElementById("user__info__right__bio")
let userRepos = document.getElementById("user__info__right__repos__number")
let userFollowers = document.getElementById("user__info__right__followers__number")
let userFollowing = document.getElementById("user__info__right__following__number")
let userLocation = document.getElementById("user__info__right__location__name")
let userTwitter = document.getElementById("user__info__right__twitter__name")
let userWebsite = document.getElementById("user__info__right__webiste__name")
let userCompany = document.getElementById("user__info__right__company__name")
let userInfo = document.getElementById("user__info")
let bannerTheme = document.getElementById("banner__theme")
userInfo.style.display = "none"
// userInfo.classList.add("hidden")






submitBtn.addEventListener("click",function(){
    if(searchBarInput.value == ""){
        document.getElementById("search__bar__right__error").textContent = "No results"
    }
    if(searchBarInput.value){
        fetch(`https://api.github.com/users/${searchBarInput.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message == "Not Found"){
                    console.log("not found")
                    document.getElementById("search__bar__right__error").textContent = "No results"
                }
                userImgWrapper.innerHTML = `
                <img class="user__info__img" src="${data.avatar_url}" alt="" id="user__info__img">
                `
                if(data.name != null){
                   userName.textContent = data.name 
                }
                if(data.login != null){
                    userUsername.textContent = `@${data.login}`
                }
                if(data.created_at != null){
                    let dateCreated = data.created_at
                    let datecreatedYear = dateCreated.slice(0,4)
                    let dateCreatedMonth = dateCreated.slice(5,7)
                    let dateCreatedDay = dateCreated.slice(8,10)
                    let dateCreatedString = ''
                    switch(dateCreatedDay){
                        case "01":
                            dateCreatedString = "Jan"
                            break;
                        case "02":
                            dateCreatedString = "Feb"
                        break;
                        case "03":
                            dateCreatedString = "Mar"
                        break;
                        case "04":
                            dateCreatedString = "Apr"
                        break;
                        case "05":
                            dateCreatedString = "May"
                        break;
                        case "06":
                            dateCreatedString = "Jun"
                        break;
                        case "07":
                            dateCreatedString = "Jul"
                        break;
                        case "08":
                            dateCreatedString = "Aug"
                        break;
                        case "09":
                            dateCreatedString = "Sep"
                        break;
                        case "10":
                            dateCreatedString = "Oct"
                        break;
                        case "11":
                            dateCreatedString = "Nov"
                        break;
                        case "12":
                            dateCreatedString = "Dec"
                        break;
                    }
                    userJoined.textContent = `Joined ${dateCreatedString} ${dateCreatedMonth} ${datecreatedYear}`
                }                
                if(data.bio != null){
                    userBio.textContent = data.bio
                }
                if(data.public_repos != null){
                    userRepos.textContent = data.public_repos
                }
                if(data.followers != null){
                    userFollowers.textContent = data.followers
                }
                if(data.following != null){
                    userFollowing.textContent = data.following
                }
                if(data.location != null){
                    userLocation.textContent = data.location
                }
                if(data.twitter_username != null){
                    userTwitter.textContent = data.twitter_username
                }
                if(data.blog != "" && data.blog != null) {
                    userWebsite.textContent = data.blog
                }
                if(data.company != null){
                    userCompany.textContent = data.company
                }
                
                userInfo.style.display = "flex"
            })
        }
})



bannerTheme.addEventListener("click",function(){
    if(document.querySelector(".banner__theme__mode").textContent == "LIGHT"){
        bannerTheme.innerHTML = `
        <p class="banner__theme__mode">DARK</p>
        <img class="banner__theme__img" src="./assets/icon-moon.svg" alt="sun icon">
        `
        changeTheme()
        
    }else{
        bannerTheme.innerHTML = `
        <p class="banner__theme__mode">LIGHT</p>
        <img class="banner__theme__img" src="./assets/icon-sun.svg" alt="sun icon">
        ` 
        changeTheme()
    }
})

function changeTheme(){
    //document.querySelector("").classList.toggle("")
    //F6F8FF
    document.body.classList.toggle("light-bg-drk")
    document.querySelector(".banner__title").classList.toggle("light-fnt-bld")
    document.querySelector(".search__bar").classList.toggle("light-bg")
    document.querySelector(".search__bar").classList.toggle("light-bg-shd")
    document.querySelector(".search__bar__left__search").classList.toggle("light-bg")
    document.querySelector(".search__bar__left__search").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info").classList.toggle("light-bg")
    document.querySelector(".user__info").classList.toggle("light-bg-shd")
    document.querySelector(".user__info__right__flex-3").classList.toggle("light-bg-drk")
    document.querySelector(".user__info__right__repos__name").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__repos__number").classList.toggle("light-fnt-bld")
    document.querySelector(".user__info__right__followers__name").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__followers__number").classList.toggle("light-fnt-bld")
    document.querySelector(".user__info__right__following__name").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__following__number").classList.toggle("light-fnt-bld")
    document.querySelector(".user__info__right__bio").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__name").classList.toggle("light-fnt-bld")
    document.querySelector(".user__info__right__joined").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__flex-4").classList.toggle("light-fnt-reg")
    document.querySelector(".user__info__right__flex-5").classList.toggle("light-fnt-reg")

    
}