export const calculatePercents = (rotate: number): number => {
    const temp = Math.cos(rotate);

    if (temp > 0) {
        return 50 + Math.ceil(temp * 50);
    } else {
        return 50 - Math.ceil(-temp * 50);
    }
}