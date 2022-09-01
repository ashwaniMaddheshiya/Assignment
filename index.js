// Array containing the random items...
let arr = ["Apple", "Milk", "Banana", "Bread","Peanut Butter","Oats","Almonds","Paneer","Apple Juice","Pomegranate","Salad"]


// Function to add random item in the menu...
function addItem(){
    const table = document.getElementById('myTable');
    const rowChild = document.createElement('tr');
    const dataChild = document.createElement('td');
    let fruits = arr[Math.floor(Math.random()*arr.length)];
    dataChild.innerHTML = fruits;
    table.appendChild(rowChild).appendChild(dataChild);
}


// Function to filter....
function filter_search(){
    let input, filter, a, txtValue, tr, td, i,table;
    input = document.getElementById('search');
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    filter = input.value.toUpperCase();
    for(i=0;i<tr.length;i++){
        td = tr[i].getElementsByTagName('td')[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = ""
            }else{
                tr[i].style.display = "none";
            }
        }
    }

}