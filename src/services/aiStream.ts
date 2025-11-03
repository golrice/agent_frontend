import { streamOnApi } from "@/api/ai";
import { API_BASE } from "@/config";
import type { GenerateAsk } from "@/types/ai";

export const create_stream_channel = async (
  session_id: string,
  ask: GenerateAsk,
) => {
  const { data: stream_id } = await streamOnApi(session_id, ask);
  const eventSource = new EventSource(
    `${API_BASE}/agents/generate/stream/${session_id}/${stream_id.id}`,
  );
  eventSource.onerror = (err) => {
    eventSource.close();
  };

  return eventSource;
};
