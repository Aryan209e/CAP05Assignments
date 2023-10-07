let display = document.getElementById('display')
let table = document.getElementById('Table')
// let tableRow = document.getElementsByClassName('tableRow')

async function todos(){
    try {

      let res = await  fetch(`https://jsonplaceholder.typicode.com/todos`)
      let data = await res.json()
       displayData(data)
       console.log(data[0])
    } catch (error) {
        console.log(error)
    }
}


function displayData(tasks){
    tasks.forEach(({userId,id,title,completed}) => {

        let main_Container = document.createElement('div')

        let table = document.getElementById('table')
          
        
        let mainId = document.createElement('td')
        mainId.textContent = userId;

        let secondId = document.createElement('td')
        secondId.textContent = id

        let mainTitle = document.createElement('td')
        mainTitle.textContent= title

        let done = document.createElement('td')
        done.textContent = completed
   

main_Container.append(mainId,secondId,mainTitle,done)

    display.append(main_Container)
    // table.append(mainId,secondId,mainTitle,done)
});
}
todos()