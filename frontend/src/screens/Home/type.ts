export type EvaluationResultItem = {
  id: string;
  result: string;
};

export type EvaluationResponse = {
  message: string;
  mimetype: string;
  preview: string;
  evaluationResult: EvaluationResultItem[];
};
