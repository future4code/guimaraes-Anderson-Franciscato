class Solution :
  def LargestFour(arr) :
    arr.sort()
    newArray = arr[-4:]
    final = newArray[0] + newArray[1] + newArray[2] + newArray[3]
    return final

print (Solution.LargestFour([1,2,3,4,5,6,7,8,9,10]))
