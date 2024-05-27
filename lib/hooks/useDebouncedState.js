"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useDebouncedState(initialValue, delay = 150) {
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
}
exports.default = useDebouncedState;
//# sourceMappingURL=useDebouncedState.js.map