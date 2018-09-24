export class LSystem {
    constructor(axiom, rules) {
        this.axiom = axiom;
        this.rules = rules;
    }

    buildIter(iteration) {
        let system = this.axiom;
        for (let i = 0; i < iteration; i++) {
            const pattern = this.rules.map(rule => rule.sign).join("|")
            const regex = new RegExp(pattern, "g");
            system = system.replace(regex, strToReplace => this.rules.find(rule => rule.sign === strToReplace).ruleString);
        }
    }
}

export class Rule {
    constructor(sign, ruleString) {
        this.sign = sign;
        this.ruleString = ruleString;
    }
}