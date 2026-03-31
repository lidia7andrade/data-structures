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
        const {[key]:keyDeleted, ...newMap} = this.map;
        this.set(newMap);
    }
}

function wordsCounter(text) {
    const textArray = text.split(' ');
    const newHashMap = new HashMap();
    for (const word of textArray) {
        const wordCounter = newHashMap.get(word);
        if(wordCounter) {
            const counter = wordCounter + 1;
            newHashMap.set(word, counter);
        } else {
            newHashMap.set(word, 1);
        }
    }
    return newHashMap.getAll();
}

function uniqueCharacter(text) {
    const textArray = text.split('');
    const uniqueCharacterMap = new HashMap();
    const uniqueCharacters = [];
    for (const character of textArray) {
        const characterCounter = uniqueCharacterMap.get(character);
        if(!characterCounter) {
            uniqueCharacters.push(character);
            uniqueCharacterMap.set(character, 1);
        } else {
            const uniqueCharacterIndex = 
                uniqueCharacters.findIndex(
                    (value) => value === character
                );

            if(uniqueCharacterIndex >= 0) {
                uniqueCharacters.splice(uniqueCharacterIndex, 1)
            }
        }
    }
    
    return uniqueCharacters[0] || 'There is no unique character'
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