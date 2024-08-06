export const squared = (n: number) => n * n;

const depositData = [
  {
    initialAmount: 250000,
    recurringAmount: 5000,
    depositInterval: 'monthly',
    intrestRate: 8,
    capitalisationInterval: 'yearly',
    startAge: 32,
    endAge: 40,
  },
];

let yearByYear: any[] = [];

for (var i = 0; i < depositData[0].endAge - depositData[0].startAge; i++) {
  // var rowYear = calculateYear(depositData[0]);

  console.log('iteration', i);

  let row = {};

  if (i == 0) {
    const capitalAmount = depositData[0].initialAmount;
    const depositAmount = 12 * depositData[0].recurringAmount;
    const gainsAmount =
      ((capitalAmount + depositAmount) * depositData[0].intrestRate) / 100;
    const sumAmount = capitalAmount + depositAmount + gainsAmount;
    row = {
      year: i + 1,
      age: depositData[0].startAge + 1,
      capital: capitalAmount,
      deposit: depositAmount,
      gains: Math.round(gainsAmount * 100) / 100,
      sum: Math.round(sumAmount * 100) / 100,
      something: '2%',
      withdrawals: '0 zł',
    };
    yearByYear.push(row);
  } else {
    // Get last year
    const lastYear = yearByYear.slice(-1).pop();

    const capitalAmount = lastYear.sum;
    const depositAmount = 12 * depositData[0].recurringAmount;
    const gainsAmount =
      ((capitalAmount + depositAmount) * depositData[0].intrestRate) / 100;
    const sumAmount = capitalAmount + depositAmount + gainsAmount;

    row = {
      year: lastYear.year + 1,
      age: lastYear.age + 1,
      capital: capitalAmount,
      deposit: depositAmount,
      gains: Math.round(gainsAmount * 100) / 100,
      sum: Math.round(sumAmount * 100) / 100,
      something: '2%',
      withdrawals: '0 zł',
    };
    yearByYear.push(row);
  }
}
