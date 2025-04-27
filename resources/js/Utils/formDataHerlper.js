export const appendIfExists = (formData, key, value) => {
    if (value !== undefined && value !== null) {
        formData.append(key, value);
    }
};
