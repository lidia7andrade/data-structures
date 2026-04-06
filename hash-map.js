// HASH MAP
class HashMap {
    constructor() {
        this.map = {};
    }
    set(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map[key];
    }
    getAll() {
        return this.map;
    }
    remove(key) {
        delete this.map[key];

        // const {[key]: keyDeleted, ...newMap} = this.map;
        // this.map(newMap);
    }
}

function wordsCounter(text) {
    const textArray = text.split(' ');
    const newHashMap = new HashMap();
    for (const word of textArray) {
        const wordCounter = newHashMap.get(word);
        if(wordCounter !== undefined) {
            const counter = wordCounter + 1;
            newHashMap.set(word, counter);
        } else {
            newHashMap.set(word, 1);
        }
    }
    return newHashMap.getAll();
}

function uniqueCharacter(text) {
    const map = new HashMap();
    // count
    for(const char of text) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
    }
    // find 
    for(const char of text) {
        if(map.get(char) === 1) {
            return char;
        }
    }

    return null;
}

function groupByProperty(objectsArray, propertyName) {
    const propertysMap = new HashMap();
    for(const object of objectsArray) {
        const propValuesFromMap = propertysMap.get(object[propertyName]);
        if(propValuesFromMap) {
            const propertyArray = [...propValuesFromMap, object];
            propertysMap.set(object[propertyName], propertyArray)
        } else {
            propertysMap.set(object[propertyName], [object])
        }
    }
    return propertysMap.getAll();
}
// Exercise 1
console.log(wordsCounter('hola hola adios'));
// Exercise 2
console.log(uniqueCharacter('swiss'));
// Exercise 3
const users = [
    {name:'lidia', role: 'admin'},
    {name:'Juan', role: 'user'},
    {name:'Catalina', role: 'admin'}
];
console.log(groupByProperty(users, 'role'));

const newHashMap = new HashMap();
newHashMap.set('A','lidia');
newHashMap.set('B','juan');
newHashMap.set('C','jorge');
console.log(newHashMap.getAll())
newHashMap.remove('A');
console.log(newHashMap)