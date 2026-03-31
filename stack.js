// 1. STACK (LIFO)
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item)
    }
    pop() {
      this.items.pop();
    }
    peek() {
      const lastIndex = this.items.length - 1
      if(lastIndex === -1)
        return null
      else
        return this.items[lastIndex]
    }
    isEmpty() {
      return this.items.length === 0
    }
    size () {
      return this.items.length;
    }
  }
  
  function isValid(string = '') {
    let isValid = true;
    const openSymbols = ['(', '{', '['];
    const closeSymbols = [')', '}', ']'];
    const openAndCloseSymbols = ['()', '{}', '[]'];
    const openSymbolsStack = new Stack();
    const stringArray = string.split('');
    for (const symbol of stringArray) {
      if(openSymbols.includes(symbol)) {
        openSymbolsStack.push(symbol);
      } else if(closeSymbols.includes(symbol)) {
        const pairOfSymbols = openSymbolsStack.peek() + symbol;
        if(!openAndCloseSymbols.includes(pairOfSymbols)) {
          isValid = false;
          break;
        } else {
          openSymbolsStack.pop();
        }
      }
    }
    return isValid;
  }
  
  const history = new Stack();
  history.push('home');
  history.push('about');
  history.push('contact');
  history.pop();
  console.log(history.peek());
  
  console.log(isValid('({[{}{}]})'));
  console.log(isValid('()[]{}'));
  console.log(isValid('(]'));