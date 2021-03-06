import * as acorn from "acorn";
import * as ts from "typescript";

import { Transform }  from "./transforms";

export interface KarmaTypescriptConfig {
    bundlerOptions?: BundlerOptions;
    compilerDelay?: number;
    compilerOptions?: any;
    coverageOptions?: CoverageOptions;
    exclude?: string[];
    include?: string[];
    remapOptions?: RemapOptions;
    reports?: Reports;
    transformPath?: Function;
    tsconfig?: string;
}

export interface BundlerOptions {
    acornOptions?: acorn.Options;
    addNodeGlobals?: boolean;
    constants?: { [key: string]: any };
    entrypoints?: RegExp;
    exclude?: string[];
    ignore?: string[];
    noParse?: string[];
    resolve?: Resolve;
    transforms?: Transform[];
    validateSyntax?: boolean;
}

export interface Resolve {
    alias?: {
        [key: string]: string;
    };
    extensions?: string[];
    directories?: string[];
}

export interface CompilerOptions extends ts.CompilerOptions {
    [key: string]: any;
}

export interface ThresholdOptions {
    file?: {
        branches?: number;
        excludes?: string[];
        functions?: number;
        lines?: number;
        overrides?: {
            [key: string]: {
                branches?: number;
                functions?: number;
                lines?: number;
                statements: number;
            }
        },
        statements?: number;
    };
    global?: {
        branches?: number;
        excludes?: string[];
        functions?: number;
        lines?: number;
        statements?: number;
    };
};

export interface CoverageOptions {
    instrumentation?: boolean;
    exclude?: RegExp | RegExp[];
    threshold?: ThresholdOptions;
}

export interface RemapOptions {
    exclude?: RegExp;
    readFile?: { (filepath: string): string };
    sources?: any;
    warn?: Function;
}

export interface Reports {
    clover?: string | Destination;
    cobertura?: string | Destination;
    html?: string | Destination;
    "json-summary"?: string | Destination;
    json?: string | Destination;
    lcovonly?: string | Destination;
    teamcity?: string | Destination;
    "text-lcov"?: string | Destination;
    "text-summary"?: string | Destination;
    text?: string | Destination;
}

export interface Destination {
    directory?: string;
    filename?: string;
    subdirectory?: string;
}
