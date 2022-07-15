type baseType = string | number | Record<string, boolean>;
type baseLoopType = baseType | Array<baseType>;

function $(defaultClassNames: TemplateStringsArray, ...params: baseLoopType[]) {
    let newClassName = '';
    for (let i = 0; i < defaultClassNames.length; i++) {
        newClassName += defaultClassNames[i];
        if (i < params.length) {
            (function handle(value: any, delimiter = '') {
                if (typeof value === 'string' || typeof value === 'number') {
                    newClassName += delimiter + value
                } else if (typeof value === 'object') {
                    if (Array.isArray(value)) {
                        for (const eachVal of value) {
                            handle(eachVal, ' ');
                        }
                    } else {
                        for (const key in value) {
                            if (value[key]) {
                                newClassName += ' ' + key
                            }
                        }
                    }
                }
            })(params[i])
        }
    }
    return newClassName
        .trim()
        .replace(/\s\s+/g, ' ');
}
export { $ as literal }
export default $
