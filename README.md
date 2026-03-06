# Clock App

Next.js で作成されたシンプルなデジタル時計アプリです。

## 機能

- リアルタイムで更新される時刻表示（毎秒更新）
- 日付表示（年月日・曜日）
- 多言語対応（日本語・英語）
- レスポンシブデザイン
- アクセシビリティ対応（ARIA属性、スクリーンリーダー対応）
- エラーバウンダリによる堅牢なエラーハンドリング

## 技術スタック

- Next.js 14 (App Router)
- React 18
- TypeScript (strict mode)
- Tailwind CSS
- next-intl (i18n)
- Vitest + React Testing Library

## 必要条件

- Node.js 20.x 以上
- npm 10.x 以上

## プロジェクト構造

```text
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx              # ルートレイアウト（i18n対応）
│       └── page.tsx                # メインページ
├── components/
│   ├── __tests__/
│   │   └── Clock.test.tsx          # Clockコンポーネントテスト
│   ├── Clock.tsx                   # 時計メインコンポーネント
│   ├── DateDisplay.tsx             # 日付表示
│   ├── ErrorBoundary.tsx           # エラーバウンダリ
│   ├── HoursMinutesDisplay.tsx     # 時・分表示
│   ├── LanguageSwitcher.tsx        # 言語切替ボタン
│   ├── SecondsDisplay.tsx          # 秒表示
│   ├── TimeDisplay.tsx             # 時刻表示
│   └── WebVitals.tsx               # パフォーマンス監視
├── hooks/
│   ├── __tests__/
│   │   └── useTime.test.ts         # useTimeフックテスト
│   └── useTime.ts                  # 時刻管理フック
├── i18n/
│   ├── config.ts                   # ロケール設定
│   └── request.ts                  # next-intl設定
├── test-utils/
│   └── i18n.tsx                    # テスト用IntlWrapper
├── types/
│   ├── next-intl.d.ts              # next-intl型定義
│   └── time.ts                     # 時刻関連の型
├── utils/
│   ├── __tests__/
│   │   └── formatDate.test.ts      # formatDate関数テスト
│   └── formatDate.ts               # 日付フォーマット
├── middleware.ts                   # ロケールルーティング
└── test-utils.d.ts                 # テスト型定義
messages/
├── en.json                         # 英語翻訳
└── ja.json                         # 日本語翻訳
```

## アーキテクチャ

### パフォーマンス最適化

- **useSyncExternalStore**: シングルトンタイマーで複数コンポーネント間で状態を共有
- **React.memo**: 不要な再レンダリングを防止
- **CSS containment**: レイアウト計算の最適化

### 状態管理

時刻の更新は `useTime` フックで一元管理され、全てのサブスクライバーに効率的に配信されます。

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

## CI/CD

GitHub Actions による自動化:

- **Lint**: ESLint + Prettier チェック
- **Type Check**: TypeScript 型チェック
- **Test**: Vitest によるテスト実行
- **Build**: プロダクションビルド検証

プルリクエスト時に自動実行されます。

## 開発環境

### 推奨 VS Code 拡張機能

- ESLint
- Prettier
- Tailwind CSS IntelliSense

### Pre-commit フック

Husky + lint-staged により、コミット時に自動でリント・フォーマットが実行されます。
