const localStorageKey = 'shopping-list'

function newItem(){
   let input = document.getElementById('item-input')

   if(!input.value){
    alert('Digite algo para inserir em sua lista.')
   }
    //else if()
   else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name:input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
   
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('items-list')
    list.innerHTML = ''

    for(let i = 0; i< values.length; i++){
        list.innerHTML +=  
            `
                <li class="flex items-center p-4 bg-amber-600 gap-3 rounded-xl">
                    <div class="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="5.5" fill="white"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="5.5" stroke="#D1D5DB"/>
                        </svg>
                    </div>
                ${values[i]['name']}</li>
            `
    }   
}

showValues()