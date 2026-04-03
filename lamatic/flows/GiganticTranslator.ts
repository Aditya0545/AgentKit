const flowConfig = {
  "id": "d41f9c12-dd95-4be4-86e3-e25cb002f25d",
  "name": "Gigantic Translator",
  "edges": [],
  "status": "active",
  "created_at": "2026-03-31T18:52:48.539406+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}