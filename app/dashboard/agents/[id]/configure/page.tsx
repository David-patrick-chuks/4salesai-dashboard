import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ConfigureAgentForm } from "@/components/dashboard/configure-agent-form"

export default function ConfigureAgentPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <ConfigureAgentForm agentId={params.id} />
    </DashboardLayout>
  )
}
