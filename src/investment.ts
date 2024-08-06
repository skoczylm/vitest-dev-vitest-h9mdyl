class Investment {

  {
    initialAmount: 250000,
    recurringAmount: 5000,
    depositInterval: 'monthly',
    intrestRate: 8,
    capitalisationInterval: 'yearly',
    startAge: 32,
    endAge: 40,
  },
  
  
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');
