<div class="page-title">
  <h1>筋トレヒストリー アプリサポートページ（エクスポート/インポート機能）</h1>
</div>

## 目次

- [このページについて](#このページについて)
- [エクスポート機能](#エクスポート機能)
  - [エクスポートしたデータの解析](#エクスポートしたデータの解析)
    - [プロンプト例](#プロンプト例)
- [インポート機能](#インポート機能)

## このページについて

筋トレヒストリーは、あなたのトレーニング記録を簡単に管理できるiOSアプリです。このページでは、アプリのエクスポート/インポート機能の使い方と、エクスポートしたデータの活用方法について説明します。

<div class="app-store-link">
  <a href="https://getapp.cc/app/6745604705" target="_blank" rel="noopener">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="120">
  </a>
</div>

## エクスポート機能

アプリで記録したトレーニングデータを外部で活用するために、JSON形式でエクスポートすることができます。
エクスポートしたデータは、以下のような用途に活用できます：
- トレーニング記録のバックアップ
- データの分析や可視化
- AIによるトレーニングアドバイスの取得

### エクスポートしたデータの解析

アプリ内でのAI機能は計画中ですが、エクスポートしたデータをChatGPTなどの生成AIを活用して分析することができます。
これにより、以下のような有益なフィードバックを得ることができます：

- トレーニングの強度や頻度の分析
- 筋力の向上傾向の確認
- トレーニングメニューの改善提案
- 怪我のリスク評価

#### プロンプト例

以下のプロンプトをコピーして、ChatGPTに貼り付けてください。その後、エクスポートしたJSONデータをアップロードすることで、専門的なアドバイスを得ることができます。

<div class="copy-container">
  <button onclick="copyPrompt()" class="copy-button">
    <svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16">
      <path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
    プロンプトをコピー
  </button>
</div>

```text
筋トレトレーナーの専門家として、アップロード済みのトレーニングデータを評価し、アドバイスしてください。  
条件：単位はkg、性別は⚪︎、年齢XX 歳、体重YY kg、身長ZZZ cm
```

<div class="note-box">
  <strong>注意事項</strong>
  <ul>
    <li>プロンプト内の「⚪︎」「XX」「YY」「ZZZ」は、それぞれあなたの性別、年齢、体重、身長に置き換えてください</li>
  </ul>
</div>

## インポート機能

筋トレヒストリーアプリでは、過去のトレーニングデータをインポートすることができます。
この機能により、以下のようなデータを簡単に取り込むことができます：
- 他のアプリからの移行データ
- 手動で記録していた過去のトレーニング記録
- バックアップから復元するデータ

インポート用のJSONデータを生成するには、以下のツールをご利用ください：

[筋トレヒストリー - インポート用データ生成ツール](https://kintore-history.github.io/import-generator/)

このツールを使用することで、以下のような形式のデータを簡単に作成できます：
- 日付
- 種目名
- 重量
- 回数
- セット数

<div class="note-box">
  <strong>注意事項</strong>
  <ul>
    <li>インポートするデータは、アプリの仕様に準拠した形式である必要があります</li>
  </ul>
</div>

<script>
function copyPrompt() {
    const prompt = `筋トレトレーナーの専門家として、アップロード済みのトレーニングデータを評価し、アドバイスしてください。  
条件：単位はkg、性別は⚪︎、年齢XX 歳、体重YY kg、身長ZZZ cm`;
    navigator.clipboard.writeText(prompt).then(() => {
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        button.innerHTML = '<svg class="check-icon" viewBox="0 0 24 24" width="16" height="16"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>コピーしました！';
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}
</script>

<style>
.page-title {
    margin-bottom: 2rem;
}

.page-title h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
    padding: 0;
    border: none;
}

.app-store-link {
    margin: 1.5rem 0;
}

.app-store-link img {
    transition: opacity 0.2s ease;
}

.app-store-link img:hover {
    opacity: 0.8;
}

.copy-container {
    margin: 1rem 0;
}

.copy-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    color: #4a5568;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.copy-button:hover {
    background-color: #f7fafc;
    border-color: #cbd5e0;
}

.copy-button:active {
    background-color: #edf2f7;
}

.copy-button.copied {
    background-color: #48bb78;
    border-color: #48bb78;
    color: white;
}

.copy-icon {
    fill: currentColor;
}

.check-icon {
    fill: currentColor;
}

.note-box {
    background-color: #f8fafc;
    border-left: 4px solid #4299e1;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0 4px 4px 0;
}

.note-box strong {
    color: #2b6cb0;
    display: block;
    margin-bottom: 0.5rem;
}

.note-box ul {
    margin: 0;
    padding-left: 1.5rem;
}

.note-box li {
    margin: 0.25rem 0;
}

h2 {
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
    margin-top: 2rem;
}

h3 {
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.25rem;
    margin-top: 1.5rem;
}

h4 {
    border-bottom: 1px dashed #e2e8f0;
    padding-bottom: 0.25rem;
    margin-top: 1.25rem;
}
</style>