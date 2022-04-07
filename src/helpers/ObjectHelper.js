export default class ObjectHelper {
    copyObj = (obj) => {
        return JSON.parse(JSON.stringify(obj));
    };
}