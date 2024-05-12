export const getFluidTouchOptions = (isTouch: boolean) => {
  const DENSITY_DISSIPATION = isTouch ? 0.05 : 10;
  const VELOCITY_DISSIPATION = isTouch ? 0.03 : 0.3;
  const PRESSURE = isTouch ? 0.01 : 0.8;
  const INITIAL = isTouch;
  const SPLAT_RADIUS = isTouch ? 0.3 : 0.06;
  const SPLAT_FORCE = isTouch ? 6000 : 4000;

  return {
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    INITIAL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
  };
};
