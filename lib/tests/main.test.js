"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_native_1 = require("react-native");
const transformers_1 = require("../src/functions/transformers");
// Mock React Native modules
vitest_1.vi.mock('react-native', () => ({
    Appearance: {
        getColorScheme: vitest_1.vi.fn(),
    },
    Dimensions: {
        get: vitest_1.vi.fn(),
    },
    Platform: {
        OS: 'ios',
    },
}));
// Mock React Native modules
vitest_1.vi.mock('react-native', () => ({
    Appearance: {
        getColorScheme: vitest_1.vi.fn(),
    },
    Dimensions: {
        get: vitest_1.vi.fn(),
    },
    Platform: {
        OS: 'ios',
    },
}));
(0, vitest_1.describe)('xp.js-styled testing suite: ', () => {
    (0, vitest_1.describe)('splitProps tests:', () => {
        (0, vitest_1.it)('should split props into element props and style props', () => {
            const input = {
                testProp: 'test',
                color: 'red',
                fontSize: 16,
            };
            const result = (0, transformers_1.splitProps)(input);
            (0, vitest_1.expect)(result).toEqual({
                elementProps: { testProp: 'test' },
                styleProps: { color: 'red', fontSize: 16 },
            });
        });
        (0, vitest_1.it)('should handle nested style props', () => {
            const input = {
                id: 'test-id',
                style: {
                    color: 'blue',
                    padding: 10,
                },
                backgroundColor: 'white',
            };
            const result = (0, transformers_1.splitProps)(input);
            (0, vitest_1.expect)(result).toEqual({
                elementProps: { id: 'test-id' },
                styleProps: {
                    color: 'blue',
                    padding: 10,
                    backgroundColor: 'white',
                },
            });
        });
        (0, vitest_1.it)('should handle empty objects', () => {
            const result = (0, transformers_1.splitProps)({});
            (0, vitest_1.expect)(result).toEqual({
                elementProps: {},
                styleProps: {},
            });
        });
    });
    (0, vitest_1.describe)('deepMap skip keys tests:', () => {
        (0, vitest_1.it)('should remove skipKeys from output', () => {
            const input = {
                transform: 1,
                skip: 2,
                nested: {
                    transform: 3,
                    skip: 4,
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: ['skip'],
            });
            (0, vitest_1.expect)(result).toEqual({
                transform: 2,
                nested: {
                    transform: 6,
                },
            });
        });
        (0, vitest_1.it)('should handle multiple skipKeys', () => {
            const input = {
                transform: 1,
                skip1: 2,
                skip2: 3,
                nested: {
                    transform: 4,
                    skip1: 5,
                    skip2: 6,
                    deep: {
                        skip1: 7,
                        value: 8,
                    },
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: ['skip1', 'skip2'],
            });
            (0, vitest_1.expect)(result).toEqual({
                transform: 2,
                nested: {
                    transform: 8,
                    deep: {
                        value: 16,
                    },
                },
            });
        });
        (0, vitest_1.it)('should handle skipKeys that are objects', () => {
            const input = {
                transform: 1,
                skip: {
                    nested: 2,
                    deeper: {
                        value: 3,
                    },
                },
                keep: {
                    value: 4,
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: ['skip'],
            });
            (0, vitest_1.expect)(result).toEqual({
                transform: 2,
                keep: {
                    value: 8,
                },
            });
        });
        (0, vitest_1.it)('should handle empty skipKeys array', () => {
            const input = {
                transform: 1,
                skip: 2,
                nested: {
                    value: 3,
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: [],
            });
            (0, vitest_1.expect)(result).toEqual({
                transform: 2,
                skip: 4,
                nested: {
                    value: 6,
                },
            });
        });
        (0, vitest_1.it)('should handle nested transformations with skipKeys', () => {
            const input = {
                level1: {
                    skip: 'skip me',
                    keep: 'keep me',
                    level2: {
                        skip: 'skip me too',
                        number: 42,
                        level3: {
                            skip: 'skip me three',
                            text: 'hello',
                        },
                    },
                },
            };
            const result = (0, transformers_1.deepMap)({
                values: input,
                match: (value) => typeof value === 'number',
                map: ({ value }) => value * 2,
                skipKeys: ['skip'],
            });
            (0, vitest_1.expect)(result).toEqual({
                level1: {
                    keep: 'keep me',
                    level2: {
                        number: 84,
                        level3: {
                            text: 'hello',
                        },
                    },
                },
            });
        });
    });
    (0, vitest_1.describe)('deepMerge tests:', () => {
        (0, vitest_1.it)('should merge objects deeply', () => {
            const obj1 = { a: 1, b: { c: 2 } };
            const obj2 = { b: { d: 3 }, e: 4 };
            const result = (0, transformers_1.deepMerge)([obj1, obj2]);
            (0, vitest_1.expect)(result).toEqual({
                a: 1,
                b: { c: 2, d: 3 },
                e: 4,
            });
        });
        (0, vitest_1.it)('should merge arrays', () => {
            const obj1 = { arr: [1, 2] };
            const obj2 = { arr: [3, 4] };
            const result = (0, transformers_1.deepMerge)([obj1, obj2]);
            (0, vitest_1.expect)(result).toEqual({
                arr: [1, 2, 3, 4],
            });
        });
        (0, vitest_1.it)('should merge multiple objects', () => {
            const obj1 = { a: 1 };
            const obj2 = { b: 2 };
            const obj3 = { c: 3 };
            const result = (0, transformers_1.deepMerge)([obj1, obj2, obj3]);
            (0, vitest_1.expect)(result).toEqual({
                a: 1,
                b: 2,
                c: 3,
            });
        });
    });
    (0, vitest_1.describe)('normalizeMediaQueries tests:', () => {
        (0, vitest_1.beforeEach)(() => {
            vitest_1.vi.mocked(react_native_1.Appearance.getColorScheme).mockReturnValue('light');
            vitest_1.vi.mocked(react_native_1.Dimensions.get).mockReturnValue({ width: 100, fontScale: 1.0, height: 100, scale: 1 });
        });
        (0, vitest_1.it)('should apply media queries based on device properties', () => {
            const input = {
                color: 'black',
                '@xxs': { color: 'blue' },
            };
            const result = (0, transformers_1.normalizeMediaQueries)(input);
            (0, vitest_1.expect)(result).toEqual({ color: 'blue' });
        });
        (0, vitest_1.it)('should handle multiple breakpoints', () => {
            const input = {
                color: 'black',
                '@xxs': { color: 'red' },
                '@sm': { color: 'blue' },
                '@md': { color: 'green' },
            };
            const result = (0, transformers_1.normalizeMediaQueries)(input);
            (0, vitest_1.expect)(result).toEqual({ color: 'red' });
        });
        (0, vitest_1.it)('should handle dark mode queries', () => {
            vitest_1.vi.mocked(react_native_1.Appearance.getColorScheme).mockReturnValue('dark');
            const input = {
                color: 'white',
                '@dark': { color: 'black' },
            };
            const result = (0, transformers_1.normalizeMediaQueries)(input);
            (0, vitest_1.expect)(result).toEqual({ color: 'black' });
        });
        (0, vitest_1.it)('should handle platform-specific queries', () => {
            const input = {
                padding: 10,
                '@ios': { padding: 20 },
                '@android': { padding: 15 },
            };
            const result = (0, transformers_1.normalizeMediaQueries)(input);
            (0, vitest_1.expect)(result).toEqual({ padding: 20 });
        });
    });
    (0, vitest_1.describe)('shade tests:', () => {
        (0, vitest_1.it)('should generate shades of a color', () => {
            const result = (0, transformers_1.shade)('#FF0000', 700);
            (0, vitest_1.expect)(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
        (0, vitest_1.it)('should handle different shade levels', () => {
            const color = '#FF0000';
            const shade100 = (0, transformers_1.shade)(color, 100);
            const shade900 = (0, transformers_1.shade)(color, 900);
            (0, vitest_1.expect)(shade100).not.toEqual(shade900);
            (0, vitest_1.expect)(shade100).toMatch(/^#[0-9A-F]{6}$/i);
            (0, vitest_1.expect)(shade900).toMatch(/^#[0-9A-F]{6}$/i);
        });
        (0, vitest_1.it)('should handle white color', () => {
            const result = (0, transformers_1.shade)('#FFFFFF', 500);
            (0, vitest_1.expect)(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
        (0, vitest_1.it)('should handle black color', () => {
            const result = (0, transformers_1.shade)('#000000', 500);
            (0, vitest_1.expect)(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
    });
    (0, vitest_1.describe)('color tests:', () => {
        (0, vitest_1.it)('should resolve color values', () => {
            const result = (0, transformers_1.color)('red.500');
            (0, vitest_1.expect)(result).toMatch(/^#[0-9A-F]{6}$/i);
        });
        (0, vitest_1.it)('should handle hex colors', () => {
            const result = (0, transformers_1.color)('#FF0000');
            (0, vitest_1.expect)(result).toBe('#FF0000');
        });
        (0, vitest_1.it)('should handle rgb colors', () => {
            const result = (0, transformers_1.color)('rgb(255, 0, 0)');
            (0, vitest_1.expect)(result).toBe('rgb(255, 0, 0)');
        });
        (0, vitest_1.it)('should handle rgba colors', () => {
            const result = (0, transformers_1.color)('rgba(255, 0, 0, 0.5)');
            (0, vitest_1.expect)(result).toBe('rgba(255, 0, 0, 0.5)');
        });
    });
    (0, vitest_1.describe)('size tests:', () => {
        (0, vitest_1.it)('should resolve size values', () => {
            const result = (0, transformers_1.size)({ key: 'fontSize', value: 'md' });
            (0, vitest_1.expect)(typeof result).toBe('number');
        });
        (0, vitest_1.it)('should handle pixel values', () => {
            const result = (0, transformers_1.size)({ key: 'width', value: '100px' });
            (0, vitest_1.expect)(result).toBe(100);
        });
        (0, vitest_1.it)('should handle percentage values', () => {
            const result = (0, transformers_1.size)({ key: 'height', value: '50%' });
            (0, vitest_1.expect)(typeof result).toBe('string');
            (0, vitest_1.expect)(result).toBe('50%');
        });
    });
    (0, vitest_1.describe)('hexToRGB tests:', () => {
        (0, vitest_1.it)('should convert hex to RGB', () => {
            const result = (0, transformers_1.hexToRGB)('#FF0000');
            (0, vitest_1.expect)(result).toEqual([255, 0, 0]);
        });
        /*it('should handle short hex format', () => {
          const result = hexToRGB('#F00');
          expect(result).toEqual([255, 0, 0]);
        });*/
        (0, vitest_1.it)('should throw an error for invalid hex', () => {
            (0, vitest_1.expect)(() => (0, transformers_1.hexToRGB)('#GG0000')).toThrow('Invalid hex color string');
        });
        (0, vitest_1.it)('should handle uppercase and lowercase', () => {
            const result1 = (0, transformers_1.hexToRGB)('#ff0000');
            const result2 = (0, transformers_1.hexToRGB)('#FF0000');
            (0, vitest_1.expect)(result1).toEqual(result2);
        });
    });
});
//# sourceMappingURL=main.test.js.map