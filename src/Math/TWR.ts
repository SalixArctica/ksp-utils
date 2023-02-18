const KerbinGravity = 9.8;

const convertMassToGravitationalForce = (mass: number): number =>
  mass * KerbinGravity;

export const calcThrustWeightRatio = (mass: number, thrust: number): number => {
  const gravityForce = convertMassToGravitationalForce(mass);
  return thrust / gravityForce;
};
