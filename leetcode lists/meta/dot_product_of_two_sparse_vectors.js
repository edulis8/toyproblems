/**
 * 
 * 1570. Dot Product of Two Sparse Vectors
Medium
1.1K
142
company
Facebook
company
Google
company
Bloomberg
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?

 

Example 1:

Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
Example 2:

Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
Example 3:

Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6
 

Constraints:

n == nums1.length == nums2.length
1 <= n <= 10^5
0 <= nums1[i], nums2[i] <= 100
Accepted
203.7K
Submissions
226K




 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  // A sparse vector is a vector that has mostly zero values, 
  // you should store the sparse vector efficiently and compute the dot product between two SparseVector.
  // DO NOT STORE ZEROS
  // USE A HASH MAP TO JUST STORE NON-ZEROs
  this.numsMap = nums.reduce((object, num, i) => {
      // don't store 0s, because they won't add to the result
      if (num !== 0) {
          object[i] = num;
      }
      return object;
  }, {});
};

// Return the dotProduct of two sparse vectors
/**
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function(vec) {
  let result = 0;
 // ITERATE OVER HASHMAP, FIND MATCHING VALUES IN OTHER HASHMAP, GET PRODUCT, SUM TO RESULT
  for (const key in this.numsMap) {
      if (vec.numsMap[key])  {
         result += (this.numsMap[key] * vec.numsMap[key])
      }
  }
  return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);

// let ans = v1.dotProduct(v2);


// nums1 = [1,0,0,2,3], 
// nums2 = [0,3,0,4,0]




/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    constructor(nums) {
        this.nums = nums;
    }

};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0;
    this.nums.forEach((el,i) => {
        result += el * vec.nums[i];
    })

    return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);

// let ans = v1.dotProduct(v2);


 // nums1 = [1,0,0,2,3], 
 // nums2 = [0,3,0,4,0]