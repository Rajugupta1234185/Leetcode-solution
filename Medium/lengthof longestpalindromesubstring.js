/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longpalind=s[0]||"";
    for(i=0;i<s.length;i++){
       
            //for odd
            let left=i-1;
            let right=i+1;
            while(left>=0 && right<s.length && s[left]===s[right]){
                const current=s.slice(left,right+1);
                if(current.length>longpalind.length){
                    longpalind=current;
                }
                left--;
                right++;
            }
        

    
 

        //for even
         left=i;
         right=i+1;
        while(left>=0 && right<s.length && s[left]===s[right]){
            const current=s.slice(left,right+1);
            if(current.length>longpalind.length){
                longpalind=current;
            }
            left--;
            right++;
        }
    

    }
  
 
    return longpalind;
    
};