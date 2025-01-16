const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = []

function addPurchaseRecord(name, courses) {
    if (typeof(name) !== "string" || typeof(courses) !== "number" 
    || name === "" || courses <= 0)
        console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。")
    else {
        let coursePrice = 1500

        if (courses > 20)
            coursePrice = 1100
        else if (courses > 10)
            coursePrice = 1300
        
        let totalPrice = coursePrice * courses
        purchaseRecords.push({
            name,
            courses,
            coursePrice,
            totalPrice
        })
        console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`)
    }
}

function calculateTotalPrice() {
    let totalPrice = 0
    purchaseRecords.forEach((record) => totalPrice += record.totalPrice)

    console.log(`目前總營業額為 ${totalPrice} 元`)
}

function filterNoPurchaseMember() {
    const nonPurchaseMember = members.filter((member) => !purchaseRecords.some(record => record.name === member))
    // some 找出任一筆符合條件的資料，因此需使用 !some()
    // 而不能使用 record.name !== member，邏輯會變成，任一存在不相等記錄的會員。

    console.log(`未購買課程的會員有：${nonPurchaseMember}`)
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

calculateTotalPrice()
filterNoPurchaseMember()
