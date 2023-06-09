//题目：https://javascript.info/class-inheritance#extended-clock

//我的答案

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock{
    constructor({template, precision=1000}){
        super({template: template});
        this.precision = precision;
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
  }

/*
let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
});
*/

let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s'
});

lowResolutionClock.start();

//标准答案
//constructor里面可以定义变量

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

//object destructuring的用法

let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
