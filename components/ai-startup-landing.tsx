'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Cpu, BookOpen, Zap, BarChart, Users, Cog } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export function AiStartupLanding() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('フォームが送信されました。メール:', email, '、メッセージ:', message)
    setEmail('')
    setMessage('')
  }

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a className="flex items-center justify-center" href="#">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="ml-2 text-2xl font-bold text-yellow-400">Next Iteration Co.,Ltd</span>
            </a>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#services">
              サービス
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#team">
              チーム
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#testimonials">
              お客様の声
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#contact">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
                  AIで中小企業の未来を創造する
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Next Iteration：業務効率化と教育支援で、あなたの企業の成長をサポートします
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  無料相談を予約
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" size="lg">
                  サービス詳細
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
              サービス項目
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <Link href="/AiBusinessSupport">
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
                    <span className="text-primary hover:underline">
                      詳細を見る
                    </span>
                  </CardContent>
                </Link>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">AI教育支援</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    従業員のAIリテラシー向上を支援します。カスタマイズされたトレーニングプログラムで、AIツールの効果的な活用方法を学べます。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <BarChart className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">データ分析・可視化</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    企業データをAIで分析し、インサイトを抽出。わかりやすいダッシュボードで可視化し、データドリブンな意思決定をサポートします。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">AI導入コンサルティング</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    企業のニーズに合わせたAI導入戦略を提案。技術選定から実装、運用までトータルでサポートし、スムーズなAI導入を実現します。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Cog className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">カスタムAIソリューション開発</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    企業固有の課題に対応するカスタムAIソリューションを開発。独自のアルゴリズムで、競争力のある製品やサービスの創出を支援します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
              私たちのチーム
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Daisuke Iwai"
                      width={200}
                      height={200}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">岩井 大助</h3>
                    <p className="text-yellow-400 mb-4">CEO</p>
                    <p className="text-gray-300">
                      AIと企業変革の専門家。10年以上にわたり、多くの企業のデジタルトランスフォーメーションを成功に導いてきました。
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Kazuhiro Matsuzawa"
                      width={200}
                      height={200}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">松澤 一弘</h3>
                    <p className="text-yellow-400 mb-4">CTO</p>
                    <p className="text-gray-300">
                      AI技術のエキスパート。最先端の機械学習アルゴリズムと大規模データ処理技術を駆使し、革新的なソリューションを開発しています。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
              お客様の声
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">
                    「Next Iterationのサービスを利用して、業務効率が30%向上しました。AIの導入で従業員の作業時間が大幅に削減され、より創造的な業務に時間を割けるようになりました。」
                  </p>
                  <p className="font-bold text-white">山田太郎 様 - 製造業 経営者</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">
                    「AI教育支援プログラムのおかげで、社員全体のデジタルリテラシーが向上しました。今では社内でAIツルを積極的に活用し、イノベーションが加速しています。」
                  </p>
                  <p className="font-bold text-white">鈴木花子 様 - サービス業 人事部長</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
                  AIで企業変革を始めませんか？
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  お問い合わせください。Next Iterationが貴社の成長と革新をサポートいたします。
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder="メールアドレスを入力"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="メッセージを入力" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-700 text-white border-gray-600 focus:border-primary" 
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    送信する
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">© 2024 Next Iteration Co., Ltd. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              利用規約
            </a>
            <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              プライバシーポリシー
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}