class moneyChange{
    constructor(type, title, money){
        this.type = type;
        this.title = title;
        this.money = money;
    }
}

class UI {
    addIncome(transaction){
            const incomes = document.getElementById('incomes-list');
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${transaction.title}: +${transaction.money}$ <a href="#" class="ml-auto delete">X</a>`;
          
            incomes.appendChild(li);
    }

    addExpense(transaction){
            const expenses = document.getElementById('expenses-list');
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${transaction.title}: -${transaction.money}$ <a href="#" class="ml-auto delete">X</a>`;
          
            expenses.appendChild(li);
    }

    deleteIncome(target){
            if (target.className === 'ml-auto delete'){
                target.parentElement.remove();
                $('#removeConfirm').fadeToggle(200).fadeToggle(4500);
            }
    }
    deleteExpense(target){
        if (target.className === 'ml-auto delete'){
            target.parentElement.parentElement.remove();
            $('#removeConfirm').fadeToggle(200).fadeToggle(4500);
        }
    }

    clearFields(){
            document.getElementById('type').value = '';
            document.getElementById('title').value = '';
            document.getElementById('money').value = '';
    }   
}


//Event listener for add
document.getElementById('cash-form').addEventListener('submit', function(e){
    //Get form values
    const type = document.getElementById('type').value,
          title = document.getElementById('title').value,
          money = document.getElementById('money').value;
    
    // Instantiate transaction
    const transaction = new moneyChange(type, title, money);
    
    // Instantiate UI
    const ui = new UI();

    //Validate
    if(type=='income'){
        ui.addIncome(transaction);
        ui.clearFields();
        $('#addConfirm').fadeToggle(200).fadeToggle(4500);
    } else if(type=='expense'){
        ui.addExpense(transaction);
        ui.clearFields();
        $('#addConfirm').fadeToggle(200).fadeToggle(4500);
    } else {
        alert('Choose a type of transaction!')
    } 

    e.preventDefault();
});


//Event listeners for delete
document.getElementById('incomes-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteIncome(e.target);
    e.preventDefault();
})

document.getElementById('expenses-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteExpense(e.target);
    e.preventDefault();
})