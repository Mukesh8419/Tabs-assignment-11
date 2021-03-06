const btns=document.querySelectorAll('.tab-btn');
const about=document.querySelectorAll('.about');
const articles=document.querySelectorAll('.content');


about.addEventListener('click',function (e) {
    const id=e.target.dataset.id;
    if(id){
        //remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element=document.getElementById(id)
        //access my element
        element.classList.add('active');

    }
})

//if data exist/defined/undefined