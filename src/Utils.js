// eslint-disable-next-line import/no-anonymous-default-export
export default {
    pluralize: (count, word) => {
        return count === 1 ? word : word + 's';
    }
}