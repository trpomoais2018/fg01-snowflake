'use strict'


/** Represents simple L-System */
export default class LSystem {
    /**
     * Create L-System
     * @param {Array} axiom - L-System axiom (symbol array)
     * @param {object} rule - {symbol: 'symbol', replacement: [symbol1, symbol2...]}
     *
     */
    constructor(axiom, rule) {
        this.axiom = axiom;
        this.rule = rule;
    }

    /**
     * @param {number} depth
     * @returns {Array} result - array of sybols
     */
    getOutput(depth) {
        if (depth < 1)
            throw new RangeError('depth must be positive number');
        if (depth === 1)
            return this.axiom;

        let result = [];
        this.getOutput(depth - 1).forEach(symbol => {
            if (symbol === this.rule.symbol)
                this.rule.replacement.forEach(s => result.push(s));
            else
                result.push(symbol);
        });
        return result;
    }
}