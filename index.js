const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction) {
if(direction === null) {
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'west') {
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'north') {
    character.src = 'assets/green-chracter/north.gif'
}
if(direction === 'east') {
    character.src = 'assets/green-character/east.gif'
}
if(direction === 'south') {
    character.src = 'assets/green-character/south.gif'
}
}
move(character) .withArrowKeys(100,250, handleDirectionChange)
let direction = null;
let x = 100;
let y = 250;

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

//function moveCharacter(function(){ the error says that 'function' is not a usable parameter, so i tried to change it to some of the other parameters that were previously used but none of them worked
if (direction === 'west') {
    x = x - 1
}
if (direction === 'east') {
    x = x + 1
}
if (direction === 'north') {
    y = y + 1
}
if (direction === 'south') {
    y = y - 1
}
element.style.left = x + 'px'
element.style.bottom = y + 'px'
}
//setInterval moveCharacter, 1) the error says that it was misspelled, but when i tried to change it the action itself was different and did not work

document.addEventListener('keydown', function(e) {
    if(e.repeat) return;
    if (e.key === 'ArrowLeft') {
        direction = 'west'
    }
    if(e.key === 'ArrowUp') {
        direction = 'north'
    }
    if(e.key === 'ArrowRight') {
        direction = 'east'
    }
    if(e.key === 'ArrowDown') {
        direction = 'south'
    }
    callback(direction)
})

document.addEventListener('keyup', function(e) {
    direction = null
    callback(direction)
})



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)