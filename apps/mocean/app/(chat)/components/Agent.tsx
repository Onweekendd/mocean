import { useStore } from "@/app/store/useStore";

const AgentSelect = () => {
  const { agentList } = useStore();
  return (
    <div>
      {agentList.map((agent) => (
        <div key={agent.id}>
          <div>{agent.name}</div>
          <div>{agent.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AgentSelect;
