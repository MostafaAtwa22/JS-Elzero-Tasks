function multiply(...Nums) {
    let mult = 1;
    for (let i = 0; i < Nums.length; i++) {
        if (!isNaN(Nums[i]))
            mult *= parseInt(Nums[i]);
    }
    console.log(mult);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000