console.dir(Date)
const date = new Date()

// static property, static method 
console.log(Date.length)
console.log(Date.now())

// prototype method 
// const date = new Date()
console.log(typeof date)
console.log(typeof date.toString())
console.dir(date)

// to, get, set

// to => a twal lite u 
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// get => ta khu chin u 
console.log(date.getFullYear())

console.log(date.getMonth())
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[3])
console.log(months[date.getMonth()])

console.log(date.getDate())

console.log(date.getDay())
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[0])
console.log(days[date.getDay()])

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

console.log(date.getTime())

// constructor => past, present, future 
const date2 = new Date("2024-12-30")
console.log(date2)
console.log(date2.getMonth())

// set => time pyin lox ya, twat chat lox ya 
const date3 = new Date()
// ယခုကစပြီး နောက် နာရီ ၃၀၀ ဆိုရင်ဘယ်နေ့၊ ဘယ်အချိန်ဖြစ်မလဲ
console.log(date3.getHours() + 300) 
date3.setHours(date3.getHours() + 300)
console.log(date3)

// နောက်တစ်ကြိမ်သွေးလှူရမည့် month
console.log(date3.getMonth() + 4)
date3.setMonth(date3.getMonth() + 4)
console.log(date3)

// 50 hr ပါဝင်တဲ့ SWD course ကို တစ်နေ့ ၂နာရီ အခုစပြီးလေ့လာရင်၊ ဘယ်နေ့ပြီးမလဲ။
const courseHours = 50
const learHour = 2
const learnDay = courseHours / learHour
console.log(learnDay)
console.log(date3.getDate() + 25)
date3.setDate(date3.getDate() + 25)
console.log(date3)