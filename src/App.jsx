import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { ChevronDown, Users, MessageCircle, Settings, Hash } from 'lucide-react';
import mdcLogo from './assets/image14.svg';
import feature1 from './assets/feature1.svg';
import feature2 from './assets/feature2.svg';
import feature3 from './assets/feature3.svg';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';
import './App.css';

function App() {
    const [isExpanded, setIsExpanded] = useState(false);

    const steps = [
        {
            title: '招待を承認する',
            description: '筋ジストロフィーコミュニティへの招待が開きます。「承認」ボタンをクリックして参加しましょう。',
            image: step1,
        },
        {
            title: 'ルールを確認する',
            description:
                'コミュニティのルールを確認し、自己紹介やリアクションについて理解しましょう。ルールはこちらから確認できます。',
            image: step2,
        },
        {
            title: 'メッセージを送る',
            description:
                '自己紹介チャンネルであなたについて紹介してみましょう。コミュニティメンバーとの交流が始まります。',
            image: step3,
        },
        {
            title: 'チャンネルを探索する',
            description:
                '様々なチャンネルが用意されています。雑談、SNSアカウント、宣伝など、目的に応じてチャンネルを選択できます。',
            image: step4,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
            {/* Header Section */}
            <header className="relative overflow-hidden bg-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0154FE] to-[#FEAB01] opacity-10"></div>
                <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
                    <div className="mb-8">
                        <img src={mdcLogo} alt="MDC Logo" className="w-32 h-32 mx-auto mb-6 drop-shadow-lg" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        筋ジストロフィーコミュニティ
                        <span className="block text-3xl text-[#0154FE] mt-2">（MDC）</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        筋ジストロフィーの患者さんとそのご家族、支援者の皆様が集まるコミュニティです。
                        情報共有や活動を通して積極的なやり取りを目指しています。
                    </p>
                </div>
            </header>

            <section className="text-center py-12 mt-12">
                <div>
                    <a
                        href="https://t.co/rtZpKMIWWm"
                        className="inline-block bg-[#0154FE] text-white px-16 py-8 rounded-lg text-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        参加はここから
                    </a>
                </div>
            </section>

            {/* How to Join Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">コミュニティへの参加方法</h2>
                    <p className="text-lg text-gray-600">以下の手順に従って、MDCコミュニティにご参加ください</p>
                </div>
                <div className="space-y-8 mb-12">
                    <Card
                        key={1}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#0154FE]"
                    >
                        <CardContent className="p-0">
                            <div className="flex flex-col lg:flex-row">
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-[#0154FE] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                                            {1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">招待を受ける</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        上にある「参加はここから」ボタンをクリックして、Discordの招待リンクを開きます。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#0154FE]"
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 p-8">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#0154FE] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                                                {index + 2}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                                    </div>
                                    {step.image && (
                                        <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                                            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                                                <div className="mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <img
                                                        src={step.image}
                                                        alt={`Step ${index + 2}`}
                                                        className="w-full h-auto object-contain rounded"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">コミュニティの特徴</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent>
                                <img src={feature1} alt="Support Community" className="w-32 h-32 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">患者と協力者の交流</h3>
                                <p className="text-gray-600">
                                    同じ境遇を持つ患者さんや、協力してくれる人たちと気軽に繋がることができます。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent>
                                <img src={feature2} alt="Information Sharing" className="w-32 h-32 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">多彩な話題で交流</h3>
                                <p className="text-gray-600">
                                    日常生活のことからニュースまで、さまざまなトピックについて自由に話し合えます。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent>
                                <img src={feature3} alt="Customizable" className="w-32 h-32 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">匿名で安心</h3>
                                <p className="text-gray-600">
                                    本名を名乗らずに交流できるので、安心して気軽にコミュニケーションを楽しめます。
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <img src={mdcLogo} alt="MDC Logo" className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-bold mb-2">筋ジストロフィーコミュニティ（MDC）</h3>
                    <p className="text-gray-400">繋がる・広がる</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
