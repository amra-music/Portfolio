import moment from "moment";

export const longDateTimeFormat = "D MMMM YYYY [at] HH:mm";

export const getLongDateTime = (date) => {
    return moment.utc(date).local().format(longDateTimeFormat);
}