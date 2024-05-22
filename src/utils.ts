import { StyleProps } from "./constants";

export const isEvent = (key: string) => key.startsWith("on") && key.length > 2;

export const isStyle = (key: string) => StyleProps.some((prop) => key.includes(prop));

export const isJSON = (obj: string) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
