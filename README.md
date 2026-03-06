# Clock App

Next.js製デジタル時計アプリ。

## 機能

- リアルタイム時刻表示
- 日付表示（年月日・曜日）
- 多言語対応（日本語・英語）
- アクセシビリティ対応

## 技術スタック

Next.js 14 / React 18 / TypeScript / Tailwind CSS / next-intl / Vitest

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000

## スクリプト

| コマンド             | 説明         |
| -------------------- | ------------ |
| `npm run dev`        | 開発サーバー |
| `npm run build`      | ビルド       |
| `npm run test:run`   | テスト       |
| `npm run lint`       | Lint         |
| `npm run type-check` | 型チェック   |
| `npm run format`     | フォーマット |

## プロジェクト構造

```
src/
├── app/[locale]/      # ルーティング
├── components/        # UIコンポーネント
│   ├── clock/
│   ├── layout/
│   └── ui/
├── lib/               # ロジック・ユーティリティ
│   ├── hooks/
│   ├── i18n/
│   ├── utils/
│   └── web-vitals/
├── test/              # テストユーティリティ
└── types/             # 型定義
```

## 開発規約

[CLAUDE.md](./CLAUDE.md) を参照。
