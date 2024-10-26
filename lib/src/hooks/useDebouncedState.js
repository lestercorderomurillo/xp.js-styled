"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedState = void 0;
const react_1 = require("react");
/**
 * useDebouncedState Hook allows to defer a state update by a timelapse, to rate limit state updates
 */
const useDebouncedState = (initialValue, delay = 90) => {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(initialValue);
    (0, react_1.useEffect)(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return [debouncedValue, setValue];
};
exports.useDebouncedState = useDebouncedState;
exports.default = exports.useDebouncedState;
//# sourceMappingURL=useDebouncedState.js.map