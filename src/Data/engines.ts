export type Engine = {
  name: string;
  cost: number;
  mass: number;
  thrust: {
    atmosphere: number;
    vacuum: number;
  };
  twRatio: {
    atmosphere: number;
    vacuum: number;
  };
  Isp: {
    atmosphere: number;
    vacuum: number;
  };
};

export const engines: Engine[] = [
  {
    name: `LV-1R "Spider" Liquid Fuel Engine`,
    cost: 120,
    mass: 0.02,
    thrust: {
      atmosphere: 1.79,
      vacuum: 2,
    },
    twRatio: {
      atmosphere: 9.14,
      vacuum: 10.2,
    },
    Isp: {
      atmosphere: 260,
      vacuum: 290,
    },
  },
  {
    name: `24-77 "Twitch" Liquid Fuel Engine`,
    cost: 230,
    mass: 0.08,
    thrust: {
      atmosphere: 15.17,
      vacuum: 16,
    },
    twRatio: {
      atmosphere: 19.32,
      vacuum: 16,
    },
    Isp: {
      atmosphere: 275,
      vacuum: 290,
    },
  },
  {
    name: `Mk-55 "Thud" Liquid Fuel Engine`,
    cost: 820,
    mass: 0.9,
    thrust: {
      atmosphere: 108.2,
      vacuum: 120,
    },
    twRatio: {
      atmosphere: 12.26,
      vacuum: 13.6,
    },
    Isp: {
      atmosphere: 275,
      vacuum: 305,
    },
  },
  {
    name: `LV-1 "Ant" Liquid Fuel Engine`,
    cost: 110,
    mass: 0.02,
    thrust: {
      atmosphere: 0.51,
      vacuum: 2,
    },
    twRatio: {
      atmosphere: 2.59,
      vacuum: 10.2,
    },
    Isp: {
      atmosphere: 80,
      vacuum: 315,
    },
  },
  {
    name: `48-7S "Spark" Liquid Fuel Engine`,
    cost: 240,
    mass: 0.13,
    thrust: {
      atmosphere: 16.56,
      vacuum: 20,
    },
    twRatio: {
      atmosphere: 12.99,
      vacuum: 15.69,
    },
    Isp: {
      atmosphere: 265,
      vacuum: 320,
    },
  },
  {
    name: `LV-909 "Terrier" Liquid Fuel Engine`,
    cost: 390,
    mass: 0.5,
    thrust: {
      atmosphere: 14.78,
      vacuum: 30,
    },
    twRatio: {
      atmosphere: 3.01,
      vacuum: 60,
    },
    Isp: {
      atmosphere: 85,
      vacuum: 345,
    },
  },
  {
    name: `LV-T30 "Reliant" Liquid Fuel Engine`,
    cost: 1100,
    mass: 1.25,
    thrust: {
      atmosphere: 205.16,
      vacuum: 240,
    },
    twRatio: {
      atmosphere: 16.75,
      vacuum: 19.58,
    },
    Isp: {
      atmosphere: 265,
      vacuum: 310,
    },
  },
  {
    name: `LV-T45 "Swivel" Liquid Fuel Engine`,
    cost: 1200,
    mass: 1.5,
    thrust: {
      atmosphere: 167.97,
      vacuum: 215,
    },
    twRatio: {
      atmosphere: 11.42,
      vacuum: 14.62,
    },
    Isp: {
      atmosphere: 250,
      vacuum: 320,
    },
  },
  {
    name: `S3 KS-25 "Vector" Liquid Fuel Engine`,
    cost: 18000,
    mass: 4,
    thrust: {
      atmosphere: 936.51,
      vacuum: 1000,
    },
    twRatio: {
      atmosphere: 23.87,
      vacuum: 64.745,
    },
    Isp: {
      atmosphere: 295,
      vacuum: 315,
    },
  },
  {
    name: `T-1 Toroidal Aerospike "Dart" Liquid Fuel Engine`,
    cost: 3850,
    mass: 1,
    thrust: {
      atmosphere: 153.53,
      vacuum: 180,
    },
    twRatio: {
      atmosphere: 15.66,
      vacuum: 18.35,
    },
    Isp: {
      atmosphere: 290,
      vacuum: 340,
    },
  },
  {
    name: `LV-N "Nerv" Atomic Rocket Motor`,
    cost: 10000,
    mass: 3,
    thrust: {
      atmosphere: 13.88,
      vacuum: 60,
    },
    twRatio: {
      atmosphere: 0.47,
      vacuum: 2.04,
    },
    Isp: {
      atmosphere: 185,
      vacuum: 800,
    },
  },
  {
    name: `RE-L10 "Poodle" Liquid Fuel Engine`,
    cost: 1300,
    mass: 1.75,
    thrust: {
      atmosphere: 64.29,
      vacuum: 250,
    },
    twRatio: {
      atmosphere: 3.75,
      vacuum: 14.57,
    },
    Isp: {
      atmosphere: 90,
      vacuum: 350,
    },
  },
  {
    name: `RE-I5 "Skipper" Liquid Fuel Engine`,
    cost: 5300,
    mass: 3,
    thrust: {
      atmosphere: 568.75,
      vacuum: 650,
    },
    twRatio: {
      atmosphere: 19.33,
      vacuum: 22.09,
    },
    Isp: {
      atmosphere: 280,
      vacuum: 320,
    },
  },
  {
    name: `RE-M3 "Mainsail" Liquid Fuel Engine`,
    cost: 13000,
    mass: 6,
    thrust: {
      atmosphere: 1379.03,
      vacuum: 1500,
    },
    twRatio: {
      atmosphere: 32.44,
      vacuum: 25.49,
    },
    Isp: {
      atmosphere: 285,
      vacuum: 310,
    },
  },
  {
    name: `LFB KR-1x2 "Twin-Boar" Liquid Fuel Engine`,
    cost: 17000,
    mass: 42.5,
    thrust: {
      atmosphere: 1866.67,
      vacuum: 2000,
    },
    twRatio: {
      atmosphere: 4.48,
      vacuum: 4.8,
    },
    Isp: {
      atmosphere: 280,
      vacuum: 300,
    },
  },
  {
    name: `Kerbodyne KR-2L+ "Rhino" Liquid Fuel Engine`,
    cost: 25000,
    mass: 9,
    thrust: {
      atmosphere: 1205.88,
      vacuum: 2000,
    },
    twRatio: {
      atmosphere: 13.66,
      vacuum: 22.66,
    },
    Isp: {
      atmosphere: 205,
      vacuum: 340,
    },
  },
  {
    name: `S3 KS-25x4 "Mammoth" Liquid Fuel Engine`,
    cost: 39000,
    mass: 15,
    thrust: {
      atmosphere: 3746.03,
      vacuum: 4000,
    },
    twRatio: {
      atmosphere: 25.47,
      vacuum: 27.19,
    },
    Isp: {
      atmosphere: 295,
      vacuum: 315,
    },
  },
  {
    name: `S3 KS-25x4 "Mammoth" Liquid Fuel Engine`,
    cost: 39000,
    mass: 15,
    thrust: {
      atmosphere: 3746.03,
      vacuum: 4000,
    },
    twRatio: {
      atmosphere: 25.47,
      vacuum: 27.19,
    },
    Isp: {
      atmosphere: 295,
      vacuum: 315,
    },
  },
];
