for(const item in statistics){
    const val = statistics[item];
    if(item.startsWith('r') || (val % 2 !== 0)){
        console.log(val);
    }
}