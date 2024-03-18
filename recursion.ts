// #Look for a key in a box
class Key { }
class Box {
    child: Box | Key
    constructor(child: Box | Key) {
        this.child = child
    }
    isAKey() {
        if (this.child instanceof Key) {
            return true
        }
        return false
    }
}

function lookForKey(box: Box) {
    let currentBox = box
    let i = 1
    while (currentBox) {
        if (currentBox.isAKey()) {
            console.log("Found in box " + i)
            return
        }
        currentBox = currentBox.child as Box
        i++
    }
}

//lookForKey(new Box(new Box(new Box(new Key))))

// # Recursive function

function countdown(i: number) {
    console.log(i)
    if (i <= 1) return
    countdown(i - 1)
}

//countdown(100)

// # The call stack

function greet2(name: string) {
    console.log(`how are you, ${name}?`)
}

function bye() {
    console.log("ok bye!")
}


function greet(name: string) {
    console.log(`hello, ${name}!`)
    greet2(name)
    console.log("getting ready to say bye...")
    bye()
}

//greet("maggie")

function fact(x: number): number {
    if (x === 1) return 1
    return x * fact(x - 1)
}

// console.log(fact(5))
