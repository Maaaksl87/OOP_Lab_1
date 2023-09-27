let date = Date();

let name = prompt('What you name:', );
alert(`Hello ${name} today ${date}`);


class Calculator {
    constructor() {
      this.a = prompt("Введіть число: ");
    }
  
    calculate() {
      return Math.cos(this.a);
    }
  }
  
  const calculator = new Calculator();
  
  alert(calculator.calculate());
  

class TemperatureConverter {
    static convert(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
  
    static main() {
      const start = Number(prompt("Введіть початок діапазону: "));
      const end = Number(prompt("Введіть кінець діапазону: "));
  
      for (let temperature = start; temperature <= end; temperature++) {
        const celsius = TemperatureConverter.convert(temperature);
        alert(`${temperature}°F = ${celsius}°C`);
      }
    }
  }
  
  TemperatureConverter.main();
  
  