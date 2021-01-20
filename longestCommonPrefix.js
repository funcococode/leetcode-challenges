var longestCommonPrefix = function (strs) {
    // let lcp = new Set();
    // let index = 0;

    // for (let i = 0; i < strs.length; i++) {
    //     for(let j = i; j < strs[i].length;j++){
    //         if(lcp.has(strs[i][j]))
    //         lcp.add(strs[i][j]);
    //     }
    // }

    // return lcp.keys();
    let isRunning = true;
    let lcp = '';
    let i=0;
    while(isRunning){   
        lcp = strs[i].substr(0,i)
        if(i == strs[i].length - 1){
            isRunning = false;
        }
        i++;  
    }
    return lcp;
};


console.log(longestCommonPrefix(["flower", "flow", "floght"]));

