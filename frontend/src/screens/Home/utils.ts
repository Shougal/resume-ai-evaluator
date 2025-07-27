export function cleanEvaluationText(text: string): string {
  return text
    .replace(/\*\*/g, "") // remove bold markers
    .replace(/(?<=\d\.)\s*/g, " ") // clean up "1. " style lists
    .replace(/\*/g, "•"); // convert bullets
}
