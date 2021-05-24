export const PATTERN = {
    USERNAME: /^([a-zA-Z0-9]{1,})$/,
    EMAIL: /^([A-Za-z0-9._%+-])+@([A-Za-z0-9.-])+\.([A-Za-z]{2,4})$/,
    NOBLANK: /\S+/,
    STRONG_PASSWORD: /^.*(?=.{8,})((?=.*[!“§$%&/(){},:;/_#+*<> -]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    STRONG_PASSWORD_TEMP: /^.*(?=.{8,})((?=.*[!“§$%&/(){},:;/_#+*<> -]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    number: /[0-9]/,
    symbol: /[!“§$%&/(){},:;/_#+*<> -]/,
    minCharacters: /(?=.{8,})/,
    CODE: /^([A-Z0-9]{1,})$/,
    PHONE_NUMBER_VIETNAM: /^(0)?(\s|\.)?((3[2-9])|(5[2-9])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
    PHONE_NUMBER_VIETNAM_FULL: /^(0|\+84)(\s|\.)?((3[2-9])|(5[2-9])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
};