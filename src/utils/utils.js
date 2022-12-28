export const uuid = () => self?.crypto?.randomUUID() ?? Math.random();
