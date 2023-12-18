export function countLetters(inputString: string): number {
    let letterCount: number = 0;

    for (const char of inputString) {
        if (/[a-zA-Z]/.test(char)) {
            letterCount++;
        }
    }

    return letterCount;
}