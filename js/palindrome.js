document.getElementById('checkispalindrome')
    .addEventListener('click', function(){
        let text = document.getElementById('palindromic').value.trim();
        text = text.toLowerCase().replace(/\s+/g, '');
        let isPalindrome = true;
        for (let i = 0, j = text.length - 1; i < j; i++, j--) {
            if (text[i] !== text[j]) {
                isPalindrome = false;
                break;
            }
        }
        const res = document.getElementById('result');
        res.textContent= isPalindrome ? 'Is a palindrome':'Is not a palindrome';
        res.style.color = isPalindrome ? 'green' : 'red';
    });