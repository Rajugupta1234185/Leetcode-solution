/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   
    nums2.forEach((k)=>{
        nums1.push(k) //it combines all number in num1 array

    });

    //for sorting

    for(i=0 ; i<nums1.length;i++){
        for(k=0; k<nums1.length;k++){
            if(nums1[k]>nums1[k+1]){
                const l=nums1[k] ;
                nums1[k]=nums1[k+1];
                nums1[k+1]=l;           }
        
        }
    }  //finally sorting completes
    console.log(nums1);

    const length=nums1.length;
    if(length%2==0){
        const k=length/2;
        return (nums1[k]+nums1[k-1])/2;
    }
    else{
       return nums1[((length + 1) / 2) - 1];

    }

};