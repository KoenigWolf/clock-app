# Clock App

Next.js で作成されたシンプルなデジタル時計アプリです。

## 機能

- リアルタイムで更新される時刻表示
- 日本語形式の日付表示（年月日・曜日）
- レスポンシブデザイン

## 技術スタック

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## 必要条件

- Node.js 20.x 以上
- npm 10.x 以上

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアプリを確認できます。

## スクリプト

| コマンド                | 説明                          |
| ----------------------- | ----------------------------- |
| `npm run dev`           | 開発サーバーを起動            |
| `npm run build`         | プロダクションビルド          |
| `npm run start`         | プロダクションサーバーを起動  |
| `npm run lint`          | ESLint によるコードチェック   |
| `npm run lint:fix`      | ESLint で自動修正             |
| `npm run type-check`    | TypeScript 型チェック         |
| `npm run format`        | Prettier でコードフォーマット |
| `npm run format:check`  | フォーマットチェック          |
| `npm run test`          | Vitest でテストを実行 (watch) |
| `npm run test:run`      | Vitest でテストを実行 (単発)  |
| `npm run test:coverage` | カバレッジ付きでテストを実行  |
