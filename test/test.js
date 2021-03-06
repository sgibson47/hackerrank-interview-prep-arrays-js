const assert = require('chai').assert;
const expect = require('chai').expect;
const hourglassSum = require('../index').hourglassSum;
const rotLeft = require('../index').rotLeft;
const minimumBribes = require('../index').minimumBribes;
const minimumSwaps = require('../index').minimumSwaps

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

  describe("New Years Chaos", function(){
    describe("testCaseZeroA", function(){
      let arrCaseZeroA = [2, 1, 5, 3, 4]

      let resultCaseZeroA = minimumBribes(arrCaseZeroA)

      it('should return min number of bribes', function(){
        expect(resultCaseZeroA).to.eql(3)
      })
    })

    describe("testCaseZeroB", function(){
      let arrCaseZero = [2, 5, 1, 3, 4]

      let resultCaseZero = minimumBribes(arrCaseZero)

      it('should return "Too chaotic"', function(){
        expect(resultCaseZero).to.eql("Too chaotic")
      })
    })

    describe("testCaseOneA", function(){
      let arrCaseOneA = [5, 1, 2, 3, 7, 8, 6, 4]

      let resultCaseOneA = minimumBribes(arrCaseOneA)

      it('should return "Too chaotic"', function(){
        expect(resultCaseOneA).to.eql("Too chaotic")
      })
    })

    describe("testCaseOneB", function(){
      let arrCaseOneB = [1, 2, 5, 3, 7, 8, 6, 4]

      let resultCaseOneB = minimumBribes(arrCaseOneB)

      it('should return min number of bribes', function(){
        expect(resultCaseOneB).to.eql(7)
      })
    })
  })

  describe("Minimum Swas 2", function(){
    describe("testCaseZero", function(){
      let arrCaseZero = [4, 3, 1, 2]

      let resultCaseZero = minimumSwaps(arrCaseZero)

      it('should return min swaps', function(){
        assert.equal(resultCaseZero, 3)
      })
    })

    describe("testCaseOne", function(){
      let arrCaseOne = [2, 3, 4, 1, 5]

      let resultCaseOne = minimumSwaps(arrCaseOne)

      it('should return min swaps', function(){
        assert.equal(resultCaseOne, 3)
      })
    })

    describe("testCaseTwo", function(){
      let arrCaseTwo = [1, 3, 5, 2, 4, 6, 7]

      let resultCaseTwo = minimumSwaps(arrCaseTwo)

      it('should return min swaps', function(){
        assert.equal(resultCaseTwo, 3)
      })
    })
  })

})