function capitalizeWords(str) {  
    let res = "";  
    
    for (let i = 0; i < str.length; i++) {  
        // Капитализация первого символа строки  
        if (i === 0) {  
            res += str[i].toUpperCase();  
        } else if (str[i - 1] === " ") {  
            // Капитализация первого символа после пробела  
            res += str[i].toUpperCase();  
        } else {  
            // Добавление остальных символов без изменения  
            res += str[i];  
        }  
    }  
    
    return res;  
}  
