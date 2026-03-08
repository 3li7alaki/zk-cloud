export enum BiometricType {
    FINGERPRINT = 1,
    PALM = 8,
    FACE = 9
}

export const BiometricTypeLabels = {
    [BiometricType.FINGERPRINT]: 'Fingerprint',
    [BiometricType.PALM]: 'Palm',
    [BiometricType.FACE]: 'Face'
};