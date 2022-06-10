import moment from "moment";
import {} from "./data";

moment.locale("pt-br");

const day = moment().format("dddd");
const date = moment().format("DD/MM/YYYY");
const time = moment().format("HH:mm");
const today = moment.isMoment 
    