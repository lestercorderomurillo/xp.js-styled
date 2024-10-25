import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Appearance, Dimensions, Platform } from 'react-native';
import { color, deepMap, deepMerge, hexToRGB, normalizeMediaQueries, shade, size, splitProps } from '../src/functions/transformers';

// Mock React Native modules
vi.mock('react-native', () => ({
  Appearance: {
    getColorScheme: vi.fn(),
  },
  Dimensions: {
    get: vi.fn(),
  },
  Platform: {
    OS: 'ios',
  },
}));

// Mock React Native modules
vi.mock('react-native', () => ({
  Appearance: {
    getColorScheme: vi.fn(),
  },
  Dimensions: {
    get: vi.fn(),
  },
  Platform: {
    OS: 'ios',
  },
}));

describe('xp.js-styled testing suite: ', () => {

  describe('splitProps tests:', () => {
    it('should split props into element props and style props', () => {
      const input = {
        testProp: 'test',
        color: 'red',
        fontSize: 16,
      };
      const result = splitProps(input);
      expect(result).toEqual({
        elementProps: { testProp: 'test' },
        styleProps: { color: 'red', fontSize: 16 },
      });
    });

    it('should handle nested style props', () => {
      const input = {
        id: 'test-id',
        style: {
          color: 'blue',
          padding: 10,
        },
        backgroundColor: 'white',
      };
      const result = splitProps(input);
      expect(result).toEqual({
        elementProps: { id: 'test-id' },
        styleProps: {
          color: 'blue', 
          padding: 10,
          backgroundColor: 'white',
        },
      });
    });

    it('should handle empty objects', () => {
      const result = splitProps({});
      expect(result).toEqual({
        elementProps: {},
        styleProps: {},
      });
    });

  });

  describe('deepMap skip keys tests:', () => {
    it('should remove skipKeys from output', () => {
      const input = {
        transform: 1,
        skip: 2,
        nested: {
          transform: 3,
          skip: 4,
        },
      };
      const result = deepMap({
        values: input,
        match: (value) => typeof value === 'number',
        map: ({ value }) => value * 2,
        skipKeys: ['skip'],
      });
      expect(result).toEqual({
        transform: 2,
        nested: {
          transform: 6,
        },
      });
    });
  
    it('should handle multiple skipKeys', () => {
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
      const result = deepMap({
        values: input,
        match: (value) => typeof value === 'number',
        map: ({ value }) => value * 2,
        skipKeys: ['skip1', 'skip2'],
      });
      expect(result).toEqual({
        transform: 2,
        nested: {
          transform: 8,
          deep: {
            value: 16,
          },
        },
      });
    });
  
    it('should handle skipKeys that are objects', () => {
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
      const result = deepMap({
        values: input,
        match: (value) => typeof value === 'number',
        map: ({ value }) => value * 2,
        skipKeys: ['skip'],
      });
      expect(result).toEqual({
        transform: 2,
        keep: {
          value: 8,
        },
      });
    });
  
    it('should handle empty skipKeys array', () => {
      const input = {
        transform: 1,
        skip: 2,
        nested: {
          value: 3,
        },
      };
      const result = deepMap({
        values: input,
        match: (value) => typeof value === 'number',
        map: ({ value }) => value * 2,
        skipKeys: [],
      });
      expect(result).toEqual({
        transform: 2,
        skip: 4,
        nested: {
          value: 6,
        },
      });
    });
  
    it('should handle nested transformations with skipKeys', () => {
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
      const result = deepMap({
        values: input,
        match: (value) => typeof value === 'number',
        map: ({ value }) => value * 2,
        skipKeys: ['skip'],
      });
      expect(result).toEqual({
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

  describe('deepMerge tests:', () => {
    it('should merge objects deeply', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      const result = deepMerge([obj1, obj2]);
      expect(result).toEqual({
        a: 1,
        b: { c: 2, d: 3 },
        e: 4,
      });
    });

    it('should merge arrays', () => {
      const obj1 = { arr: [1, 2] };
      const obj2 = { arr: [3, 4] };
      const result = deepMerge([obj1, obj2]);
      expect(result).toEqual({
        arr: [1, 2, 3, 4],
      });
    });

    it('should merge multiple objects', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const obj3 = { c: 3 };
      const result = deepMerge([obj1, obj2, obj3]);
      expect(result).toEqual({
        a: 1,
        b: 2,
        c: 3,
      });
    });
  });

  describe('normalizeMediaQueries tests:', () => {
    beforeEach(() => {
      vi.mocked(Appearance.getColorScheme).mockReturnValue('light');
      vi.mocked(Dimensions.get).mockReturnValue({ width: 100, fontScale: 1.0, height: 100, scale: 1 });
    });

    it('should apply media queries based on device properties', () => {
      const input = {
        color: 'black',
        '@xxs': { color: 'blue' },
      };
      const result = normalizeMediaQueries(input);
      expect(result).toEqual({ color: 'blue' });
    });

    it('should handle multiple breakpoints', () => {
      const input = {
        color: 'black',
        '@xxs': { color: 'red' },
        '@sm': { color: 'blue' },
        '@md': { color: 'green' },
      };
      const result = normalizeMediaQueries(input);
      expect(result).toEqual({ color: 'red' });
    });

    it('should handle dark mode queries', () => {
      vi.mocked(Appearance.getColorScheme).mockReturnValue('dark');
      const input = {
        color: 'white',
        '@dark': { color: 'black' },
      };
      const result = normalizeMediaQueries(input);
      expect(result).toEqual({ color: 'black' });
    });

    it('should handle platform-specific queries', () => {
      const input = {
        padding: 10,
        '@ios': { padding: 20 },
        '@android': { padding: 15 },
      };
      const result = normalizeMediaQueries(input);
      expect(result).toEqual({ padding: 20 });
    });
  });

  describe('shade tests:', () => {
    it('should generate shades of a color', () => {
      const result = shade('#FF0000', 700);
      expect(result).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('should handle different shade levels', () => {
      const color = '#FF0000';
      const shade100 = shade(color, 100);
      const shade900 = shade(color, 900);
      expect(shade100).not.toEqual(shade900);
      expect(shade100).toMatch(/^#[0-9A-F]{6}$/i);
      expect(shade900).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('should handle white color', () => {
      const result = shade('#FFFFFF', 500);
      expect(result).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('should handle black color', () => {
      const result = shade('#000000', 500);
      expect(result).toMatch(/^#[0-9A-F]{6}$/i);
    });
  });

  describe('color tests:', () => {
    it('should resolve color values', () => {
      const result = color('red.500');
      expect(result).toMatch(/^#[0-9A-F]{6}$/i);
    });

    it('should handle hex colors', () => {
      const result = color('#FF0000');
      expect(result).toBe('#FF0000');
    });

    it('should handle rgb colors', () => {
      const result = color('rgb(255, 0, 0)');
      expect(result).toBe('rgb(255, 0, 0)');
    });

    it('should handle rgba colors', () => {
      const result = color('rgba(255, 0, 0, 0.5)');
      expect(result).toBe('rgba(255, 0, 0, 0.5)');
    });
  });

  describe('size tests:', () => {
    it('should resolve size values', () => {
      const result = size({ key: 'fontSize', value: 'md' });
      expect(typeof result).toBe('number');
    });

    it('should handle pixel values', () => {
      const result = size({ key: 'width', value: '100px' });
      expect(result).toBe(100);
    });

    it('should handle percentage values', () => {
      const result = size({ key: 'height', value: '50%' });
      expect(typeof result).toBe('string');
      expect(result).toBe('50%');
    });
  });

  describe('hexToRGB tests:', () => {
    it('should convert hex to RGB', () => {
      const result = hexToRGB('#FF0000');
      expect(result).toEqual([255, 0, 0]);
    });

    /*it('should handle short hex format', () => {
      const result = hexToRGB('#F00');
      expect(result).toEqual([255, 0, 0]);
    });*/

    it('should throw an error for invalid hex', () => {
      expect(() => hexToRGB('#GG0000')).toThrow('Invalid hex color string');
    });

    it('should handle uppercase and lowercase', () => {
      const result1 = hexToRGB('#ff0000');
      const result2 = hexToRGB('#FF0000');
      expect(result1).toEqual(result2);
    });
  });
});