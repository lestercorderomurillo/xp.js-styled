"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePropHash = void 0;
const react_1 = require("react");
/**
 * Creates a stable hash from component props to optimize re-renders
 * @param props The component props to hash
 * @param dependencies Additional dependencies to include in the hash
 * @returns A string hash representing the current prop state
 */
const usePropHash = (props, dependencies = []) => {
    return (0, react_1.useMemo)(() => {
        const serializableProps = Object.entries(props).reduce((acc, [key, value]) => {
            // Skip non-serializable props like functions and symbols
            if (typeof value === 'function' ||
                typeof value === 'symbol' ||
                key === 'children' ||
                key === 'ref') {
                return acc;
            }
            // Handle arrays and objects
            if (typeof value === 'object' && value !== null) {
                acc[key] = JSON.stringify(value);
            }
            else {
                acc[key] = value;
            }
            return acc;
        }, {});
        // Create a stable string representation
        const propsString = Object.entries(serializableProps)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, value]) => `${key}:${value}`)
            .join('|');
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < propsString.length; i++) {
            const char = propsString.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash.toString(36);
    }, [
        ...Object.values(props).filter(value => typeof value !== 'function' &&
            typeof value !== 'symbol' &&
            value !== undefined),
        ...dependencies
    ]);
};
exports.usePropHash = usePropHash;
//# sourceMappingURL=usePropHash.js.map