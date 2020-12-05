const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    function hideTabContent (){
        content.forEach( (item, idx) => {
            item.style.display = 'none'
        })
        tab.forEach( item => {
            item.classList.remove(activeClass)
        })
    }
    function showTabContent (i){
        content[i].item.style.display = 'block'
        tab[i].forEach( item => {
            item.classList.add(activeClass)
        }) 
    }
}

export default tabs