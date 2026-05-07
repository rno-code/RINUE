const buttons = document.querySelectorAll('.sellec_left button');
const images = document.querySelectorAll('.sel_img .img');
const texts = document.querySelectorAll('.sel_text .text'); // 🔥 추가

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        const target = this.dataset.img;

        // 이미지 변경
        images.forEach(img => img.classList.remove('active'));
        document.querySelector('.' + target).classList.add('active');

        // 🔥 텍스트 변경 (추가)
        texts.forEach(txt => txt.classList.remove('active'));
        document.querySelector('.sel_text .' + target).classList.add('active');
    });
});


// 🔥 데이터
const bestData = {
    NUE: {
        number: "3",
        title: "NUE",
        products: [
            {
                mainImg: "./images/main/4sellection/sel/Rectangle382.png",
                thumb: "./images/main/4sellection/sel/Rectangle382.png",
                name: "NUE <br> POINT CUSHION",
                desc: "누에 포인트 쿠션"
            },
            {
                mainImg: "./images/main/4sellection/sel/Rectangle383.png",
                thumb: "./images/main/4sellection/sel/Rectangle383.png",
                name: "NUE <br> BLANKET",
                desc: "누에 블랭킷"
            },
            {
                mainImg: "./images/main/4sellection/sel/Rectangle384.png",
                thumb: "./images/main/4sellection/sel/Rectangle384.png",
                name: "NUE <br> CUSHION",
                desc: "누에 쿠션"
            }
        ]
    },

    COCOA: {
        number: "4",
        title: "COCOA",
        products: [
            {
                mainImg: "./images/main/2best/image67.png",
                thumb: "./images/main/2best/image68.png",
                name: "COCOA <br> PAJAMA",
                desc: "코코아 파자마 (S~XXL)"
            },
            {
                mainImg: "./images/main/2best/image70.png",
                thumb: "./images/main/2best/image70.png",
                name: "COCOA <br> PILLOW SET",
                desc: "코코아 베개 세트"
            },
            {
                mainImg: "./images/main/2best/image71.png",
                thumb: "./images/main/2best/image71.png",
                name: "COCOA <br> BEDDING",
                desc: "코코아 이불"
            },
            {
                mainImg: "./images/main/2best/image72.png",
                thumb: "./images/main/2best/image72.png",
                name: "COCOA <br> SLIPPERS",
                desc: "코코아 실내화"
            }
        ]
    },

    AURA: {
        number: "3",
        title: "AURA",
        products: [
            {
                mainImg: "./images/main/2best/aura1.png",
                thumb: "./images/main/2best/aura11.png",
                name: "AURA <br> PILLOW",
                desc: "아우라 베개"
            },
            {
                mainImg: "./images/main/2best/aura2-1.png",
                thumb: "./images/main/2best/aura22.png",
                name: "AURA <br> BEDDING",
                desc: "아우라 이불"
            },
            {
                mainImg: "./images/main/2best/aura3-1.png",
                thumb: "./images/main/2best/aura33.png",
                name: "AURA <br> BEDDING",
                desc: "아우라 이불"
            }
        ]
    },

    BLOOM: {
        number: "3",
        title: "BLOOM",
        products: [
            {
                mainImg: "./images/main/2best/bloom1.png",
                thumb: "./images/main/2best/bloom1-2.png",
                name: "BLOOM <br> POINT CUSHION",
                desc: "블룸 포인트 쿠션"
            },
            {
                mainImg: "./images/main/2best/bloom2.png",
                thumb: "./images/main/2best/bloom2-2.png",
                name: "BLOOM <br> MOOD LIGHT",
                desc: "블룸 무드등"
            },
            {
                mainImg: "./images/main/2best/bloom3.png",
                thumb: "./images/main/2best/bloom3-2.png",
                name: "BLOOM <br> PILLOW",
                desc: "블룸 베개"
            }
        ]
    },

    HUSH: {
        number: "2",
        title: "HUSH",
        products: [
            {
                mainImg: "./images/main/2best/hush1.png",
                thumb: "./images/main/2best/hush11.png",
                name: "HUSH <br> CUSHION",
                desc: "허쉬 쿠션"
            },
            {
                mainImg: "./images/main/2best/hush2.png",
                thumb: "./images/main/2best/hush22.png",
                name: "HUSH <br> BEDDING",
                desc: "허쉬 이불"
            }
        ]
    }
};

// 🔥 상태
let currentCategory = "COCOA";

// 🔥 요소
const menuLinks = document.querySelectorAll('.best_menu li a');
const number = document.querySelector('.number');
const title = document.querySelector('.best_main h2');
const mainImg = document.querySelector('.best_main img');
const name = document.querySelector('.best_p h3');
const desc = document.querySelector('.best_p h4');
const bestItemWrap = document.querySelector('.best_item');


// 🔥 메뉴 클릭
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const key = this.textContent.trim();
        const data = bestData[key];
        if (!data) return;

        currentCategory = key;

        // active 처리
        menuLinks.forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        // 텍스트 변경
        number.textContent = data.number;
        title.textContent = data.title;

        // 🔥 썸네일 생성
        bestItemWrap.innerHTML = "";

        data.products.forEach((item, i) => {
            const li = document.createElement('li');

            li.innerHTML = `
                <a href="#">
                    <img src="${item.thumb}" data-index="${i}">
                </a>
            `;

            bestItemWrap.appendChild(li);
        });

        // 🔥 첫 번째 상품 적용
        mainImg.src = data.products[0].mainImg;
        name.innerHTML = data.products[0].name;
        desc.innerHTML = data.products[0].desc;

        // 🔥 썸네일 클릭 이벤트 다시 연결
        bindItemClick();
    });
});


// 🔥 썸네일 클릭
function bindItemClick() {
    const itemImgs = document.querySelectorAll('.best_item img');

    itemImgs.forEach(img => {
        img.addEventListener('click', function (e) {
            e.preventDefault();

            const index = this.dataset.index;
            const data = bestData[currentCategory].products[index];
            if (!data) return;

            mainImg.src = data.mainImg;
            name.innerHTML = data.name;
            desc.innerHTML = data.desc;
        });
    });
}


// 🔥 초기 실행
document.querySelector('.best_menu li a.active').click();


// NEW 버튼 활성화
const newMenus = document.querySelectorAll('.new_menu li a');

newMenus.forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault();

        // 🔥 기존 active 제거
        newMenus.forEach(el => el.classList.remove('active'));

        // 🔥 클릭한 것만 active
        this.classList.add('active');
    });
});