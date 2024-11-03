import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const client = new OpenAI();

export async function POST(request: Request) {
  const { message } = await request.json();
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'あなたはAIを活用した業務効率化を推進するプロフェッショナルです。難しいAIについてとてもわかりやすく、中学生でも理解できる言葉を使って、ユーザーの質問に答えます。',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const reply = response.choices[0].message.content;
  return NextResponse.json({ reply });
} 