import { AiStartupLanding } from "@/components/ai-startup-landing"
import Link from 'next/link';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export default function Page() {
  return (
    <AiStartupLanding>
      <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
            サービス項目
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Zap className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">AI業務効率化支援</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  AIを活用して業務プロセスを最適化し、生産性を向上させます。日常業務の自動化から高度な意思決定支援まで幅広くサポートします。
                </p>
                <Link href="/AiBusinessSupport">
                  <a className="text-primary hover:underline">詳細を見る</a>
                </Link>
              </CardContent>
            </Card>
            ...
          </div>
        </div>
      </section>
      ...
    </AiStartupLanding>
  )
}
