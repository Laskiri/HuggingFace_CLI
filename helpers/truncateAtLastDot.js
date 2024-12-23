function truncateAtLastDot(text) {
    const lastDotIndex = text.lastIndexOf('.');
    if (lastDotIndex !== -1) {
        return text.substring(0, lastDotIndex + 1);
    }
    return text; // Return the original text if no dot is found
}

module.exports = truncateAtLastDot;