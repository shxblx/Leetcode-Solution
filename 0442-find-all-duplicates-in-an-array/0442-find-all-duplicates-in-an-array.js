/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const seen=new Set()
    const duplicates=new Set()

    nums.forEach((item)=>{
        if(seen.has(item)){
            duplicates.add(item)
        }else{
            seen.add(item)
        }
    })

    return [...duplicates]
};