rowscouter = 0;

document.getElementById("addrows").addEventListener('click', function () {
    if (rowscouter < 4) {
        rowscouter++;

        const RowsContainer = document.getElementById("rows")
        const Newrows = document.createElement('div')
        Newrows.className = "newrow"
        const Select = document.createElement('select');
        const Option1 = document.createElement('option');
        Option1.value = '1';
        Option1.textContent = 'Предоставление личных данных';
        Select.appendChild(Option1);

        const Option2 = document.createElement('option');
        Option2.value = '2';
        Option2.textContent = 'Предоставление фиксации';
        Select.appendChild(Option2);

        const Option3 = document.createElement('option');
        Option3.value = '3';
        Option3.textContent = 'Выписка из кадрового';
        Select.appendChild(Option3);

        const Inputs = document.createElement('div');
        Inputs.className = 'inputs'

        function inputsremove() {Inputs.replaceChildren()}

        function ld() {
            inputsremove()
            const input = document.createElement('input')
            input.type = 'text'
            input.className = 'line'
            Inputs.appendChild(input)
        }
        function videof() {
            inputsremove()
            const input = document.createElement('input')
            const input2 = document.createElement('input')
            input.type = 'text'
            input.className = 'line'
            input2.type = 'text'
            input2.className = 'line'
            Inputs.appendChild(input)
            Inputs.appendChild(input2)
        }
        function kadrov() { 
            inputsremove()
            const input = document.createElement('input')
            input.className = 'line'
            input.type = 'text'

            Inputs.appendChild(input)

        }

        Select.addEventListener('change', function () { 
            if (Select.value == '1') { ld() }
            if (Select.value == '2') { videof()} 
            if (Select.value == '3') { kadrov()} 
        })


        const ButtonRowRemove = document.createElement('button')
        ButtonRowRemove.className = "ButtonRowRemove"
        ButtonRowRemove.textContent = "✘"
        ButtonRowRemove.addEventListener('click',  () => { Newrows.remove(); rowscouter--; })

        Newrows.appendChild(ButtonRowRemove)
        Newrows.appendChild(Select)
        Newrows.appendChild(Inputs)
        RowsContainer.appendChild(Newrows);
    }
    else {
        alert("Хватить");
    }
});

document.getElementById("buttongenerate").addEventListener('click', function(){
 

});
 
