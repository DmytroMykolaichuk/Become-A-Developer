function findMaxIncreasingSequence(arr) {
    let maxSeq = [];
    let currentSeq = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            currentSeq.push(arr[i]);
        } else {
            if (currentSeq.length > maxSeq.length) {
                maxSeq = [...currentSeq];
            }
            currentSeq = [arr[i]];
        }
    }
    if (currentSeq.length > maxSeq.length) {
        maxSeq = [...currentSeq];
    }
    return maxSeq.length==1?[]:maxSeq;
}

function findMaxDecreasingSequence(arr) {
    let maxSeq = [];
    let currentSeq = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            currentSeq.push(arr[i]);
        } else {
            if (currentSeq.length > maxSeq.length) {
                maxSeq = [...currentSeq];
            }
            currentSeq = [arr[i]];
        }
    }
    if (currentSeq.length > maxSeq.length) {
        maxSeq = [...currentSeq];
    }
    return maxSeq.length==1?[]:maxSeq;
}
function median(values) {
    values.sort((a, b) => a - b);
    const half = Math.floor(values.length / 2);
    if (values.length % 2 === 0) {
        return (values[half - 1] + values[half]) / 2;
    } else {
        return values[half];
    }
}

function calculator(data){
        const numbers = data.split('\n').map(Number);
        let maxNumber = numbers[0];
        let minNumber = numbers[0];
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }else if (numbers[i] < minNumber) {
                minNumber = numbers[i];
            }
            sum += numbers[i]
        }
        document.getElementById('value_max').innerText = maxNumber;
        document.getElementById('value_min').innerText = minNumber;
        document.getElementById('arithmetic_mean').innerText = sum / numbers.length;
        document.getElementById('mediana').innerText = median(numbers);
    }

    function  sequence(data){
        const numbers = data.split('\n').map(Number);
        const up=findMaxIncreasingSequence(numbers)
        document.getElementById('max_increasing_sequence').innerText = up.length;
        document.getElementById('arr_num_inc').innerText ='Ланцюжок :'+ up;

        const dawn=findMaxDecreasingSequence(numbers)
        document.getElementById('max_decreasing_sequence').innerText = dawn.length;
        document.getElementById('arr_num_dec').innerText ='Ланцюжок: '+ dawn;
        
    }

    function uploadFile() {
        const loader=document.getElementById('backdrop')
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        if (file) {
            loader.style.display='flex';
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                const content = event.target.result;
                calculator(content);
                sequence(content)
                loader.style.display='none';
            };
            reader.onerror = function(event) {
                console.error('Error reading file:', event.target.error);
            };
        } else {
            console.error('No file selected');
        }
        
    }