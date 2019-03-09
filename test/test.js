const assert = require('chai').assert;
const expect = require('chai').expect;
const hourglassSum = require('../index').hourglassSum;
const rotLeft = require('../index').rotLeft;

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

  describe("Left Rotation", function(){
    describe("testCaseZero", function(){
      let arrCaseZero = [1, 2, 3, 4, 5]

      let resultCaseZero = rotLeft(arrCaseZero, 4)

      it('should return array after rotations', function(){
        expect(resultCaseZero).to.eql([5, 1, 2, 3, 4])
      })
    })

    describe("testCaseOne", function(){
      let arrCaseOne = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]

      let resultCaseOne = rotLeft(arrCaseOne, 10)

      it('should return array after rotations', function(){
        expect(resultCaseOne).to.eql([77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77])
      })
    })
  })
})