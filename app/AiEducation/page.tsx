'use client'

import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BookOpen, Cpu } from "lucide-react";
import Link from 'next/link';

export default function AiEducationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center justify-center">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="ml-2 text-2xl font-bold text-yellow-400">Next Iteration Co.,Ltd</span>
            </Link>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 text-white">
              ホームに戻る
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
                  AI教育支援
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  従業員のAIリテラシー向上を支援します。カスタマイズされたトレーニングプログラムで、AIツールの効果的な活用方法を学べます。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white">
              サービス内容
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">AIトレーニングプログラム</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    AIツールの効果的な活用方法を学ぶためのカスタマイズされたトレーニングプログラムを提供します。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">AIリテラシー向上支援</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    従業員のAIリテラシーを向上させ、企業の競争力を高めるための支援を行います。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center">
          <p className="text-xs text-gray-400">© 2024 Next Iteration Co., Ltd. All rights reserved.</p>
          <nav className="sm:ml-6 flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
              利用規約
            </a>
            <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
              プライバシーポリシー
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}