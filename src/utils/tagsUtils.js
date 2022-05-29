/**
 * Normalize and transform tags appending a character between tags
 * @param {*} tags Tags to be converted
 * @param {*} splitRegex Regex to apply to split tags
 * @param {*} joinExpression Character to join tags
 * @returns converted tags
 */
const parseTags = async(tags, splitRegex = / +/g, character = '+') => {
    const result = tags.split(splitRegex).join(character);
    return result;
}

module.exports = parseTags;