class Point {
constructor(x = 0, y = 0) {
this.x = x;
this.y = y;
}

distanceToOrigin() {
return Math.sqrt(this.x * this.x + this.y * this.y);
}
}
class Point3D extends Point {
constructor(x = 0, y = 0, z = 0) {
super(x, y);
this.z = z;
}

static vectorLength(a, b) {
const dx = a.x - b.x;
const dy = a.y - b.y;
const dz = a.z - b.z;
return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
}

class Queue {
constructor(items = []) {
this.items = items;
}

push(item) {
this.items.push(item);
}

pop() {
if (this.items.length > 0) {
return this.items.shift();
} else {
return null;
}
}

get size() {
return this.items.length;
}

clear() {
this.items = [];
}
}

module.exports = {
Point,
Point3D,
Queue,
};
