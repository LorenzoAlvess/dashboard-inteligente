import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Eye } from "lucide-react";

// Mock data for KPIs
const mockKPIs = [
  {
    title: "Receita Total",
    value: "R$ 45.231",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "vs mês anterior"
  },
  {
    title: "Novos Usuários",
    value: "2.350",
    change: "+180.1%",
    trend: "up", 
    icon: Users,
    description: "vs mês anterior"
  },
  {
    title: "Vendas",
    value: "12.234",
    change: "-19%",
    trend: "down",
    icon: ShoppingCart,
    description: "vs mês anterior"
  },
  {
    title: "Visualizações",
    value: "8.432",
    change: "+201%",
    trend: "up",
    icon: Eye,
    description: "vs mês anterior"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard Inteligente</h1>
          <p className="text-muted-foreground">Acompanhe suas métricas principais em tempo real</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Categoria</CardTitle>
              <CardDescription>Distribuição das vendas nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Eletrônicos", value: 45, color: "bg-primary" },
                  { name: "Roupas", value: 30, color: "bg-secondary" },
                  { name: "Casa & Jardim", value: 25, color: "bg-accent" }
                ].map((category, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 text-sm font-medium">{category.value}%</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`${category.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${category.value}%` }}
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
              <CardDescription>Últimas ações no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Nova venda registrada", time: "2 min atrás", amount: "R$ 1.299" },
                  { action: "Usuário cadastrado", time: "5 min atrás", amount: null },
                  { action: "Produto atualizado", time: "12 min atrás", amount: null },
                  { action: "Venda cancelada", time: "1h atrás", amount: "R$ 599" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.amount && (
                      <Badge variant="outline">{activity.amount}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
