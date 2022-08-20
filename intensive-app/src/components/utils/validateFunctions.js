export const validate = (state, firstName, lastName) => {
    if (!isValidateCapitalize(firstName)
        || !isValidateCapitalize(lastName)
        || !validateURL(state.site.value)
        || !checkEmptiesFileds(state)
        || !validateTextArea(state.about.value)
        || !validateTextArea(state.stack.value)
        || !validateTextArea(state.lastProject.value)) return false;
    return true;
};

export function checkEmptiesFileds(state) {
    return Object.values(state).every((elem) => elem.value.length !== 0);
};

export function isValidateCapitalize(str) {
    if (str.length === 0) return false;
    if (str[0].toUpperCase() === str[0]) {
        return true;
    }
    return false;
}

export function validateURL(url) {
    const pattern = /^(https?):\/\/[^\s$.?#].[^\s]*$/;
    return pattern.test(url);
};

export function isValidatePhone(str) {
    const pattern = /\(?([0-9]{1})\)?[-]([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})$/;
    if (str.length !== 12) return false;
    return pattern.test(str);
};

export function validateTextArea(data) {
    const maxLen = 600;
    return data.length < maxLen;
}

export function addInputMask(data) {
    const value = data.replace(/\D+/g, "");
    if (value.length >= 12) { return data }
    let result = '';
    for (let i = 0; i < value.length; i++) {
        result += value[i];
        switch (i) {
            case 0:
                result += '-';
                break;
            case 4:
                result += "-";
                break;
            case 6:
                result += "-";
                break;
            default:
                break;
        }
    }
    return result;
}


