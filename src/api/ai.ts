import request from "@/api/request";
import {
  type StreamID,
  type GenerateAsk,
  type GenerateBlock,
} from "@/types/ai";

export const generateContentApi = async (
  session_id: string,
  ask: GenerateAsk,
) => {
  return request.post<GenerateBlock>(`/agents/generate/${session_id}`, ask);
};

export const streamOnApi = async (session_id: string, ask: GenerateAsk) => {
  return request.post<StreamID>(
    `/agents/generate/stream_on/${session_id}`,
    ask,
  );
};
