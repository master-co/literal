function $(defaultClassNames: TemplateStringsArray, ...params: any[]) {
    let newClassName = '';
    for (let i = 0; i < defaultClassNames.length; i++) {
        newClassName += defaultClassNames[i];
        if (i < params.length) {
            (function handle(value: any, delimiter = '') {
                if (value) {
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
                }
            })(params[i])
        }
    }
    return newClassName
        .trim()
        .replace(/\n/g, ' ')
        .replace(/  +/g, ' ')
}
export { $ as literal }
export default $
