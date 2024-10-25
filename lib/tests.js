"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const transformers_1 = require("./functions/transformers");
// Mock React Native modules
jest.mock('react-native', () => ({
    Appearance: {
        getColorScheme: jest.fn(),
    },
    Dimensions: {
        get: jest.fn(),
    },
    Platform: {
        OS: 'ios',
    },
}));
describe('transformers', () => {
    describe('splitProps', () => {
        it('should split props into element props and style props', () => {
            const input = {
                testProp: 'test',
                color: 'red',
                fontSize: 16,
            };
            const result = (0, transformers_1.splitProps)(input);
            expect(result).toEqual({
                elementProps: { testProp: 'test' },
                styleProps: { color: 'red', fontSize: 16 },
            });
        });
    });
    describe('deepMap', () => {
        it('should recursively map nested objects', () => {
            const input = {
                a: 1,
                b: {
                    c: 2,
                    d: {
                        e: 3,
                    },
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: [],
            });
            expect(result).toEqual({
                a: 2,
                b: {
                    c: 4,
                    d: {
                        e: 6,
                    },
                },
            });
        });
    });
    describe('deepMerge', () => {
        it('should merge objects deeply', () => {
            const obj1 = { a: 1, b: { c: 2 } };
            const obj2 = { b: { d: 3 }, e: 4 };
            const result = (0, transformers_1.deepMerge)([obj1, obj2]);
            expect(result).toEqual({
                a: 1,
                b: { c: 2, d: 3 },
                e: 4,
            });
        });
    });
    describe('normalizeMediaQueries', () => {
        beforeEach(() => {
            react_native_1.Appearance.getColorScheme.mockReturnValue('light');
            react_native_1.Dimensions.get.mockReturnValue({ width: 400 });
        });
        it('should apply media queries based on device properties', () => {
            const input = {
                color: 'black',
                '@ios': { color: 'red' },
                '@sm': { color: 'blue' },
                '@light': { color: 'green' },
            };
            const result = (0, transformers_1.normalizeMediaQueries)(input);
            expect(result).toEqual({ color: 'green' });
        });
    });
    describe('shade', () => {
        it('should generate shades of a color', () => {
            const result = (0, transformers_1.shade)('#FF0000', 700);
            expect(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
    });
    describe('color', () => {
        it('should resolve color values', () => {
            const result = (0, transformers_1.color)('red.500');
            expect(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
    });
    describe('size', () => {
        it('should resolve size values', () => {
            const result = (0, transformers_1.size)({ key: 'fontSize', value: 'md' });
            expect(typeof result).toBe('number');
        });
    });
    describe('hexToRGB', () => {
        it('should convert hex to RGB', () => {
            const result = (0, transformers_1.hexToRGB)('#FF0000');
            expect(result).toEqual([255, 0, 0]);
        });
        it('should throw an error for invalid hex', () => {
            expect(() => (0, transformers_1.hexToRGB)('#GG0000')).toThrow('Invalid hex color string');
        });
    });
});
//# sourceMappingURL=tests.js.map