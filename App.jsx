import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { ChevronDown, Users, MessageCircle, Settings, Hash } from 'lucide-react'
import mdcLogo from './assets/image14.svg'
import './App.css'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)

  const steps = [
    {
      title: "招待を受ける",
      description: "筋ジストロフィーコミュニティへの招待が届きます。「mattachasabuとして承認」ボタンをクリックして参加しましょう。",
      image: "/src/assets/image.png"
    },
    {
      title: "ルールを確認する",
      description: "コミュニティのルールを確認し、自己紹介やリアクションについて理解しましょう。ルールはこちらから確認できます。",
      image: "/src/assets/image.png"
    },
    {
      title: "チャンネルを探索する",
      description: "様々なチャンネルが用意されています。自己紹介、SNSアカウント、宣伝など、目的に応じてチャンネルを選択できます。",
      image: "/src/assets/image.png"
    },
    {
      title: "メッセージを送る",
      description: "自己紹介チャンネルでメッセージを送信してみましょう。コミュニティメンバーとの交流が始まります。",
      image: "/src/assets/image.png"
    },
    {
      title: "サーバー設定を確認する",
      description: "サーバーニックネームの設定、ダイレクトメッセージの許可、アクティビティステータスの表示など、お好みに合わせて設定を調整できます。",
      image: "/src/assets/image.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0154FE] to-[#FEAB01] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <img 
              src={mdcLogo} 
              alt="MDC Logo" 
              className="w-32 h-32 mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            筋ジストロフィーコミュニティ
            <span className="block text-3xl text-[#0154FE] mt-2">（MDC）</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            筋ジストロフィーの患者さんとそのご家族、支援者の皆様が集まるコミュニティです。
            情報共有や相互支援を通じて、より良い生活を目指しています。
          </p>
        </div>
      </header>

      {/* How to Join Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            コミュニティへの参加方法
          </h2>
          <p className="text-lg text-gray-600">
            以下の手順に従って、MDCコミュニティにご参加ください
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#0154FE]">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#0154FE] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                      <div className="text-center text-gray-500">
                        スクリーンショット {index + 1}
                      </div>
                      <div className="mt-4 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-400">
                          <MessageCircle className="w-16 h-16 mx-auto mb-2" />
                          <p className="text-sm">画像プレビュー</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              コミュニティの特徴
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <Users className="w-16 h-16 text-[#0154FE] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">支援コミュニティ</h3>
                <p className="text-gray-600">
                  患者さんとご家族、支援者が集まる温かいコミュニティです
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <MessageCircle className="w-16 h-16 text-[#FEAB01] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">情報共有</h3>
                <p className="text-gray-600">
                  最新の医療情報や生活に役立つ情報を共有しています
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <Settings className="w-16 h-16 text-[#0154FE] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">カスタマイズ可能</h3>
                <p className="text-gray-600">
                  お好みに合わせてサーバー設定をカスタマイズできます
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img 
            src={mdcLogo} 
            alt="MDC Logo" 
            className="w-16 h-16 mx-auto mb-4 opacity-80"
          />
          <h3 className="text-xl font-bold mb-2">筋ジストロフィーコミュニティ（MDC）</h3>
          <p className="text-gray-400">
            共に支え合い、より良い未来を築いていきましょう
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

