const Phone = [
    {name: "OnePlus 12R", image: "https://i.pinimg.com/736x/93/c6/a6/93c6a648e1be3ce23cfeb0991ff141a1.jpg"},
    {name: "OnePlus Nord CE4", image: "https://i.pinimg.com/736x/45/0f/fe/450ffef08fb2290a57ece3c6eb82fa01.jpg"},
    {name: "OnePlus 12", image: "https://i.pinimg.com/736x/f4/bb/c9/f4bbc937d02a9e17910d956c5c8d7fc4.jpg"},
    {name: "OnePlus Nord CE3 / CE3 Lite", image: "https://i.pinimg.com/564x/41/df/9d/41df9df644d495fb2b328401ebdb2018.jpg"},
    {name: "OnePlus Open", image: "https://i.pinimg.com/564x/0c/a6/50/0ca65016c581a52d4d9dd7109ca99d22.jpg"}
];

const Tablet = [
    {name: "OnePlus Pad", image: "https://www.digitaltrends.com/wp-content/uploads/2023/04/oneplus-pad-hero.jpg?p=1"},
    {name: "OnePlus Pad Go Pro", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/oneplus-go-tab-281647940-16x9.jpg?VersionId=Agr3ozr3tLpK0WRn0E2iAXlE3bc_LLVg"},
    {name: "OnePlus Pad2", image: "https://i.gadgets360cdn.com/large/oneplus_pad_pro_1719556107030.jpg"},
    {name: "Pad Accessories", image: "https://images.fonearena.com/blog/wp-content/uploads/2023/05/OnePlus-Pad_fonearena-3.jpg"}
];

const Wearables = [
    {name: "OnePlus Watch 2R", image: "https://i.pinimg.com/736x/71/22/c8/7122c8b917729e7e873bfe91e0eefa01.jpg"},
    {name: "OnePlus Watch 2", image: "https://i.pinimg.com/736x/2b/e1/cc/2be1cc65f5252d94295a4aa1228e6075.jpg"},
    {name: "OnePlus Watch 3", image: "https://i.pinimg.com/736x/c9/d6/8e/c9d68e189c5f1f09c2b56b2e931c2c60.jpg"}
];

const Audioo = [
    {name: "OnePlus Nord Buds 3 Pro", image: "https://i.pinimg.com/564x/77/b0/88/77b0887433ca404e97871e36e348f61c.jpg"},
    {name: "OnePlus BudsPro 2", image: "https://i.pinimg.com/564x/89/0b/96/890b968f14b879bbd071fdcb7645fe7f.jpg"},
    {name: "OnePlus Bulleets wireless Z2 ANC", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/Launches23/OnePlus/BulletsZ2ANC/Teaser/Mob/App_1.jpg"},
    {name: "OnePlus Bulleets wireless Z2", image: "https://fdn.gsmarena.com/imgroot/news/22/04/bullets-wireless-z2-review/inline/-1200w5/gsmarena_010.jpg"}
];

var Pimages = document.querySelector(".Pimages img");
const initialImage = "./oneplus.jpg";

function addHoverEffect(section, array) {
    var items = document.querySelectorAll(`.${section} h1`);
    items.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            Pimages.style.opacity = 0;
            setTimeout(() => {
                Pimages.setAttribute("src", array[index].image);
                Pimages.style.opacity = 1;
            }, 500);
        });
    });

    var sectionDiv = document.querySelector(`.${section}`);
    sectionDiv.addEventListener("mouseleave", () => {
        Pimages.style.opacity = 0;
        setTimeout(() => {
            Pimages.setAttribute("src", initialImage);
            Pimages.style.opacity = 1;
        }, 500);
    });
}

addHoverEffect("phone", Phone);
addHoverEffect("tablet", Tablet);
addHoverEffect("wearables", Wearables);
addHoverEffect("audio", Audioo);

var ProductHeadimg = document.querySelector("#product");
var ProductDIV = document.querySelector(".products");

var initialPosition = ProductDIV.style.top || "-100%"; 

ProductHeadimg.addEventListener("click", (event) => {
    event.stopPropagation(); 
    ProductDIV.style.top = "10%";
});

document.addEventListener("click", (event) => {
    if (!ProductHeadimg.contains(event.target) && !ProductDIV.contains(event.target)) {
        ProductDIV.style.top = initialPosition;
    }
});

var OneTopia = document.querySelector("#OT");
var OneTopiaDiv = document.querySelector(".Onetopia");

function showOneTopiaDiv() {
    OneTopiaDiv.classList.remove("hidden");
}

function hideOneTopiaDiv() {
    OneTopiaDiv.classList.add("hidden");
}

OneTopia.addEventListener("mouseover", showOneTopiaDiv);
OneTopiaDiv.addEventListener("mouseover", showOneTopiaDiv);

OneTopia.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!OneTopia.matches(':hover') && !OneTopiaDiv.matches(':hover')) {
            hideOneTopiaDiv();
        }
    }, 100);
});

OneTopiaDiv.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!OneTopia.matches(':hover') && !OneTopiaDiv.matches(':hover')) {
            hideOneTopiaDiv();
        }
    }, 100);
});

var Community = document.querySelector("#Com")
var CommunityDiv = document.querySelector(".Community")

var Community = document.querySelector("#Com");
var CommunityDiv = document.querySelector(".Community");

function showCommunityDiv() {
    CommunityDiv.classList.remove("hidden");
}

function hideCommunityDiv() {
    CommunityDiv.classList.add("hidden");
}

Community.addEventListener("mouseover", showCommunityDiv);
CommunityDiv.addEventListener("mouseover", showCommunityDiv);

Community.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!Community.matches(':hover') && !CommunityDiv.matches(':hover')) {
            hideCommunityDiv();
        }
    }, 100); 
});

CommunityDiv.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!Community.matches(':hover') && !CommunityDiv.matches(':hover')) {
            hideCommunityDiv();
        }
    }, 100);
});

var Support = document.querySelector("#St")
var SupportDiv = document.querySelector(".Support")

function showSupportDiv() {
    SupportDiv.classList.remove("hidden");
}

function hideSupportDiv() {
    SupportDiv.classList.add("hidden");
}

Support.addEventListener("mouseover", showSupportDiv);
SupportDiv.addEventListener("mouseover", showSupportDiv);

Support.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!Support.matches(':hover') && !SupportDiv.matches(':hover')) {
            hideSupportDiv();
        }
    }, 100); 
});

SupportDiv.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!Support.matches(':hover') && !SupportDiv.matches(':hover')) {
            hideSupportDiv();
        }
    }, 100); 
});

var LoginDiv = document.querySelector(".loginDiv");
var LoginImg = document.querySelector(".loginImg");

var initialRight = LoginDiv.style.right || "-100%"; 

LoginImg.addEventListener("click", (event) => {
    event.stopPropagation(); 
    LoginDiv.style.right = "0";
});

document.addEventListener("click", (event) => {
    if (!LoginImg.contains(event.target) && !LoginDiv.contains(event.target)) {
        LoginDiv.style.right = initialRight;
    }
});

var loader = document.querySelector(".loader")

setInterval(() => {
    loader.classList.add("hiddenn")
},4000)

var tl = gsap.timeline({
    scrollTrigger:{
        scroller:'body',
        trigger:'.page2',
        pin:true,
        start:'top top',
        end:"top -650",
        scrub:3
    }
})

tl.to(".P2",{
    y:"15%",
    duration:4
})

tl.to(".P3",{
    y:"30%",
    duration:4
})

tl.to(".P4",{
    y:"45%",
    duration:4
})