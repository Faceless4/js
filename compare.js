function cut(n) {
    if (n % 2 == 0) {
        return n / 2
    } else
        return n
}


console.log(cut(11), "how many pieces to cut the cake")

function pow(n) {
    let res = 1
    for (let i = 0; i < n / 2; i++) {
        res *= 2
        if (res === n)
            return "yes"
        if (i === Math.ceil(n / 2) - 1) {
            return "no"

        }

    }
}

let e = pow(32)
console.log(e, ", is number binary or not")

function rad(r1, r2, r3) {
    if (r1 + r2 <= r3)
        return "yes"
    else
        return "no"
}

x = rad(1, 4, 5)
console.log(x, ", will 2 circles fit in the third")


function pal(a) {
    let reversedString = ''
    let originalString = String(a)
    let length = originalString.length // l - string of our number
    for (let i = length - 1; i >= 0; i--) {
        reversedString += originalString[i];
    }
    if (originalString === reversedString) {
        return "yes";
    } else {
        return "no";
    }

}

console.log(pal(123321), ", palindrome or not")

function flowers(str, K) {

    let G = str[0]
    let C = str[1]
    let V = str[2]
    let remainder = K % 3
    switch (remainder) {
        case 1:
            return (V + G + C)

            break;
        case 2:
            return (C + V + G)

            break;
        default:
            return (G + C + V)

    }
    return
}


console.log(flowers("GCV", 999), ", violets and other flowers")

const sq = originalString => originalString.includes("0") ? 'no' : 'yes';


console.log(sq("11111111101111"), "includes 0 or not")