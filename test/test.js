const assert = require('chai').assert;
const hourglassSum = require('../index').hourglassSum;

describe("Array Practice", function(){
  describe("hourglassSum", function(){
    describe("testCaseZero", function(){
      let arrCaseZero = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]]

      let resultCaseZero = hourglassSum(arrCaseZero)
        
      it('should return a number', function(){
        assert.typeOf(resultCaseZero, 'number')
      })

      it('should return max hourglass sum', function(){
        assert.equal(resultCaseZero, 19)
      })
    })

    describe("testCaseOne", function(){
      let arrCaseOne = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 9, 2, -4, -4, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0]]

      let resultCaseOne = hourglassSum(arrCaseOne)
        
      it('should return a number', function(){
        assert.typeOf(resultCaseOne, 'number')
      })

      it('should return max hourglass sum', function(){
        assert.equal(resultCaseOne, 13)
      })
    })
  })
})