import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Clock, DollarSign, Eye, Activity, Stethoscope } from "lucide-react";

// Mock data for KPIs - Clínica dos Olhos
const mockKPIs = [
  {
    title: "Faturamento Mensal",
    value: "R$ 185.450",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs mês anterior"
  },
  {
    title: "Ticket Médio por Aparelho",
    value: "R$ 850",
    change: "+8.2%",
    trend: "up", 
    icon: Activity,
    description: "vs mês anterior"
  },
  {
    title: "Tempo Médio de Atendimento",
    value: "25 min",
    change: "-15%",
    trend: "up",
    icon: Clock,
    description: "vs mês anterior"
  },
  {
    title: "Pacientes Atendidos",
    value: "1.285",
    change: "+18%",
    trend: "up",
    icon: Users,
    description: "vs mês anterior"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Clínica dos Olhos - Dashboard BI</h1>
          <p className="text-muted-foreground">Acompanhe as métricas da clínica em tempo real</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockKPIs.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={kpi.trend === "up" ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {kpi.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {kpi.change}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{kpi.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Faturamento por Exame</CardTitle>
              <CardDescription>Distribuição dos exames nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Consulta Oftalmológica", value: 40, color: "bg-primary", amount: "R$ 74.180" },
                  { name: "Exame de Campo Visual", value: 25, color: "bg-secondary", amount: "R$ 46.362" },
                  { name: "OCT/Retinografia", value: 20, color: "bg-accent", amount: "R$ 37.090" },
                  { name: "Cirurgias", value: 15, color: "bg-muted", amount: "R$ 27.818" }
                ].map((exam, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium">{exam.value}%</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{exam.name}</span>
                        <span className="text-xs text-muted-foreground">{exam.amount}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`${exam.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${exam.value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume por Plano</CardTitle>
              <CardDescription>Distribuição de pacientes por convênio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Particular", value: 35, pacientes: "450", color: "bg-primary" },
                  { name: "Unimed", value: 28, pacientes: "360", color: "bg-secondary" },
                  { name: "Bradesco Saúde", value: 20, pacientes: "257", color: "bg-accent" },
                  { name: "SulAmérica", value: 17, pacientes: "218", color: "bg-muted" }
                ].map((plan, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium">{plan.value}%</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{plan.name}</span>
                        <span className="text-xs text-muted-foreground">{plan.pacientes} pac.</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`${plan.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${plan.value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Últimos atendimentos registrados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Consulta Dr. Silva finalizada", time: "5 min atrás", amount: "R$ 180", icon: Stethoscope },
                  { action: "Exame OCT agendado", time: "12 min atrás", amount: "R$ 320", icon: Eye },
                  { action: "Pagamento recebido - Particular", time: "25 min atrás", amount: "R$ 450", icon: DollarSign },
                  { action: "Cirurgia de catarata concluída", time: "1h atrás", amount: "R$ 2.800", icon: Activity }
                ].map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{activity.amount}</Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Segunda linha de cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Faturamento por Médico</CardTitle>
              <CardDescription>Performance dos profissionais no mês</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Dr. João Silva", specialty: "Retina", value: "R$ 45.280", patients: "156 pac.", change: "+12%" },
                  { name: "Dra. Maria Santos", specialty: "Glaucoma", value: "R$ 38.950", patients: "142 pac.", change: "+8%" },
                  { name: "Dr. Carlos Lima", specialty: "Catarata", value: "R$ 52.110", patients: "89 pac.", change: "+15%" },
                  { name: "Dra. Ana Costa", specialty: "Geral", value: "R$ 28.340", patients: "198 pac.", change: "+5%" }
                ].map((doctor, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{doctor.name}</p>
                          <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{doctor.value}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{doctor.patients}</span>
                            <Badge variant="outline" className="text-xs">
                              {doctor.change}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contas a Receber</CardTitle>
              <CardDescription>Status dos recebimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">R$ 28.450</p>
                    <p className="text-xs text-muted-foreground">Em dia</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-100 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">R$ 8.750</p>
                    <p className="text-xs text-muted-foreground">Vencendo (7 dias)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">R$ 4.280</p>
                    <p className="text-xs text-muted-foreground">Vencidas</p>
                  </div>
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-xs text-muted-foreground">Taxa de recebimento</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <span>Fluxo diário médio:</span>
                    <span className="font-medium">R$ 6.180</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
