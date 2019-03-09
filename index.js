module.exports = {
  hourglassSum: function(arr){
    var sums = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            sums.push(
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2]
            );
        }
    }
    return Math.max(...sums)
  },

  rotLeft: function(a, d){
    for (let i = 0; i < d; i++) {
        let oldFirstElem = a.shift()
        a.push(oldFirstElem)
    }
    return a
  },

  minimumBribes: function(q){
    let bribeCount = []
    let high = 0;

    for (let i = 0; i < q.length; i++) {
        let val = q[i]
        bribeCount[val] = 0
        high = Math.max(val, high)

        if (val < high) {
          for (let j = val + 1; j < bribeCount.length; j++) {
            bribeCount[j]++
            if (bribeCount[j] > 2) {
              return "Too chaotic";
            }
          }
        }
    }
    const sum = bribeCount.reduce((a, b) => a + b, 0)
    return sum;
  }
}