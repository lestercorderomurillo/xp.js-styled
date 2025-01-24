/**
 * Creates a stable hash from component props to optimize re-renders
 * @param props The component props to hash
 * @param dependencies Additional dependencies to include in the hash
 * @returns A string hash representing the current prop state
 */
export declare const usePropHash: (props: Record<string, any>, dependencies?: any[]) => string;
