(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[220],{

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/custom-theme.md?vue&type=template&id=5dea404f

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"kasutamutema\"><a class=\"header-anchor\" href=\"#kasutamutema\">¶</a> カスタムテーマ</h2><p>要素は BEM スタイルの CSS を使用しているので、スタイルを簡単に上書きすることができます。しかし、テーマの色を青からオレンジや緑に変更するなど、大規模にスタイルを置き換える必要がある場合は、1 つずつオーバーライドするのはあまり良いアイデアではないかもしれません。スタイル変数を変更する方法を 4 つ用意しています。</p><h3 id=\"temakarano-bian-geng\"><a class=\"header-anchor\" href=\"#temakarano-bian-geng\">¶</a> テーマカラーの変更</h3><p>Element Plus のテーマカラーを変更したいなら、<a href=\"https://element-plus.github.io/theme-chalk-preview/#/en-US\">テーマプレビューサイト</a>がおすすめです。Element Plus のテーマカラーは、明るくて親しみやすいブルーです。これを変更することで、Element Plus をより視覚的に特定のプロジェクトに結びつけることができます。</p><p>上記のウェブサイトでは、リアルタイムで新しいテーマカラーのテーマをプレビューすることができ、あなたが直接ダウンロードするために新しいテーマカラーに基づいた完全なスタイルパッケージを生成することができます（あなたのプロジェクトで新しいスタイルファイルをインポートするには、このセクションの <code>カスタムテーマをインポート</code> または <code>コンポーネントテーマをオンデマンドでインポート</code> の部分を参照してください）。</p><h3 id=\"puroziekuto-neino-scss-bian-shuwo-geng-xinsuru\"><a class=\"header-anchor\" href=\"#puroziekuto-neino-scss-bian-shuwo-geng-xinsuru\">¶</a> プロジェクト内の SCSS 変数を更新する</h3><p><code>theme-chalk</code> は SCSS で書かれています。プロジェクトでも SCSS を使用している場合は、Element Plus のスタイル変数を直接変更することができます。例えば <code>element-variables.scss</code> のように、新しいスタイルファイルを作成します :</p><pre><code class=\"hljs language-html\">/* theme color */ $--color-primary: teal; /* icon font path, required */\n$--font-path: &#39;~element-plus/lib/theme-chalk/fonts&#39;; @import\n&quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code></pre><p>そして、プロジェクトのエントリーファイルで、Element Plus の内蔵 CSS の代わりにこのスタイルファイルをインポートします。:</p><pre><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code></pre><div class=\"tip\"><p>アイコンのフォントパスを Element のフォントファイルの相対パスにオーバーライドする必要があるので注意してください。</p></div><h3 id=\"cli-tematuru\"><a class=\"header-anchor\" href=\"#cli-tematuru\">¶</a> CLI テーマツール</h3><p>プロジェクトが SCSS を使用していない場合は、CLI テーマツールを使用してテーマをカスタマイズすることができます:</p><h4 id=\"insutoru\"><a class=\"header-anchor\" href=\"#insutoru\">¶</a> <strong>インストール</strong></h4><p>はじめにテーマジェネレータをグローバルまたはローカルにインストールします。ローカルにインストールすることをお勧めします。なぜなら、他の人があなたのプロジェクトをクローンしたときに npm が自動的にインストールしてくれるからです。</p><pre><code class=\"hljs language-shell\">npm i element-theme -g\n</code></pre><p>そして、npm や GitHub から chalk テーマをインストールします。</p><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> from npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> from GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code></pre><h4 id=\"bian-shuhuairuno-chu-qi-hua\"><a class=\"header-anchor\" href=\"#bian-shuhuairuno-chu-qi-hua\">¶</a> <strong>変数ファイルの初期化</strong></h4><p>上記のパッケージのインストールに成功すると、CLI で <code>et</code> というコマンドが利用できます(ローカルにインストールされている場合は、代わりに <code>node_modules/.bin/et</code> を利用してください)。デフォルトで <code>element-variables.scss</code> に出力される変数ファイルを初期化するために <code>-i</code> を実行してください。初期化されたファイルはデフォルトで <code>element-variables.scss</code> に出力されます。</p><pre><code class=\"hljs language-shell\">et -i [custom output file]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code></pre><p><code>element-variables.scss</code> の中には、Element Plus のスタイル設定に使用したすべての変数があり、SCSS 形式で定義されています。以下はその一部です。:</p><pre><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code></pre><h4 id=\"bian-shuno-bian-geng\"><a class=\"header-anchor\" href=\"#bian-shuno-bian-geng\">¶</a> <strong>変数の変更</strong></h4><p><code>element-variables.scss</code>を編集するだけです。例えば、テーマの色を赤に変更するは以下の通りです:</p><pre><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code></pre><h4 id=\"birudotema\"><a class=\"header-anchor\" href=\"#birudotema\">¶</a> <strong>ビルドテーマ</strong></h4><p>変数ファイルを保存したら、<code>et</code> を使って自分のテーマを構築してください。 パラメータ <code>-w</code> を追加することで、<code>watch</code> モードを有効にすることができます。また、変数ファイルの出力をカスタマイズした場合は、パラメータ <code>-c</code> と変数ファイル名を追加する必要があります。デフォルトでは、ビルドテーマファイルは <code>./theme</code> 内に置かれます。パラメータ <code>-o</code> で出力ディレクトリを指定することができます。</p><pre><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code></pre><h3 id=\"kasutamutemawo-shi-yongsuru\"><a class=\"header-anchor\" href=\"#kasutamutemawo-shi-yongsuru\">¶</a> カスタムテーマを使用する</h3><h4 id=\"kasutamutemawoinpotosuru\"><a class=\"header-anchor\" href=\"#kasutamutemawoinpotosuru\">¶</a> <strong>カスタムテーマをインポートする</strong></h4><p>独自のテーマをインポートすることは、デフォルトのテーマをインポートするのと同じですが、今回は <code>オンラインテーマローラー</code> または<code>CLIツール</code> からビルドされたファイルをインポートします。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code></pre><h4 id=\"konponentotemawoondemandodeinpoto\"><a class=\"header-anchor\" href=\"#konponentotemawoondemandodeinpoto\">¶</a> <strong>コンポーネントテーマをオンデマンドでインポート</strong></h4><p>オンデマンドインポートに <code>babel-plugin-component</code> を使用している場合は、<code>.babelrc</code> を修正し、<code>styleLibraryName</code> を <code>.babelrc</code> からの相対パスにカスタムテーマが置かれているパスに指定するだけです。 <code>~</code> は必須であることに注意してください。</p><pre><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code></pre><p>もし、<code>babel-plugin-component</code>に慣れていない場合は、<a href=\"./#/en-US/component/quickstart\">クイックスタート</a>を参照してください。詳細は <code>element-theme</code> の <a href=\"https://github.com/ElementUI/element-theme\">project repository</a> を参照してください。</p>", 37);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/custom-theme.md?vue&type=template&id=5dea404f

// CONCATENATED MODULE: ./website/docs/jp/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);