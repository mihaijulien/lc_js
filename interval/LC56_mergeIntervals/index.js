/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length){
        return intervals;
    }

    intervals.sort((a,b) => a[0] - b[0]);
    const res = [intervals[0]];
    for(let i=0; i< intervals.length; i++){
        const currentInterval = intervals[i];
        const lastInterval = res[res.length - 1];

        // if the currentInterval start time is less than last interval end time 
        // there's an intersection
        if(currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
        } else {
            res.push(currentInterval);
        }
    }

    return res;
};

module.exports = merge;