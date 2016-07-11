# WP API Sample Application [![license](https://img.shields.io/github/license/likr/wpapi-angular-example.svg)](https://github.com/likr/wpapi-angular-example/blob/master/LICENSE)

このリポジトリは[Node.js + WP-APIで作るウェブアプリケーションハンズオン](https://2016.kansai.wordcamp.org/handson/#hanson_10) in WordCamp Kansai 2016のサンプルです。

## Usage

1. Clone or download this repository

    ```bash
    $ git clone https://github.com/likr/wpapi-angular-example.git
    ```

    or

    [![Download](https://img.shields.io/badge/Download-v1.0.0-brightgreen.svg)](https://github.com/likr/wpapi-angular-example/archive/master.zip)

2. Install the dependencies

    ```bash
    $ npm install
    ```

3. Start to develop

    ```bash
    $ npm start
    ```

    See more commands:

    ```bash
    $ npm run
    ```

## Features

* Angular 1のモダンな構成を採用
* HTML, CSS, JavaScriptが分離されているので、JavaScriptを書かなくてもテーマが作れる
* 投稿、カテゴリ、タグ、ユーザーの取得をサポートしたWP APIクライアント
* CSS Modulesを採用しているので、コンポーネント間のclass名衝突がない

## Example

### タイトル、内容、抜粋の表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <h2 ng-class="$ctrl.style.entryTitle" ng-bind-html="post.title.rendered"></h2>
    <div ng-class="$ctrl.style.entryContent" ng-bind-html="post.excerpt.rendered"></div>
    <div ng-class="$ctrl.style.entryContent" ng-bind-html="post.content.rendered"></div>
  </li>
</ul>
```

### 詳細ページへのリンクの表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <a ng-href="#/posts/{{post.id}}">show detail</a>
  </li>
</ul>
```

### 著者の表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <h3>{{post.author.name}}</h3>
  </li>
</ul>
```

### カテゴリとタグの表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <h3>Categories</h3>
    <ul>
      <li ng-repeat="category in post.categories">{{category.name}}</li>
    </ul>
    <h3>Tags</h3>
    <ul>
      <li ng-repeat="tag in post.tags">{{tag.name}}</li>
    </ul>
  </li>
</ul>
```

### 著者アバターの表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <img ng-src="{{post.author.avatar_urls['24']}}" />
    <img ng-src="{{post.author.avatar_urls['48']}}" />
    <img ng-src="{{post.author.avatar_urls['96']}}" />
  </li>
</ul>
```

### WPページへのリンクの表示

`src/components/post-list.component.html`:

```html
<ul ng-class="$ctrl.style.postList">
  <li ng-class="$ctrl.style.post" ng-repeat="post in $ctrl.posts">
    <h3>Title</h3>
    <a ng-href="{{post.link}}" ng-bind-html="post.title.rendered"></a>
    <h3>Author</h3>
    <a ng-href="{{post.author.link}}">{{post.author.name}}</a>
    <h3>Categories</h3>
    <ul>
      <li ng-repeat="category in post.categories">
        <a ng-href="{{category.link}}">{{category.name}}</a>
      </li>
    </ul>
    <h3>Tags</h3>
    <ul>
      <li ng-repeat="tag in post.tags">
        <a ng-href="{{tag.link}}">{{tag.name}}</a>
      </li>
    </ul>
  </li>
</ul>
```

### ページネーション

`/posts`ページはクエリパラメータ`page`をサポートしています。

* http://localhost:8080/#/posts?page=1
* http://localhost:8080/#/posts?page=2
* http://localhost:8080/#/posts?page=3
* http://localhost:8080/#/posts?page=4

前へ及び次へリンクは以下のように実装できます。

```html
<a ng-href="#/posts?page={{$ctrl.page - 1}}">Prev</a>
<a ng-href="#/posts?page={{$ctrl.page + 1}}">Next</a>
```

更に、例えば以下のようにして、開始と終了ページでそれぞれ前へと次へのリンクを無効にすることができます。

```html
<a ng-href="#/posts?page={{$ctrl.page - 1}}" ng-if="$ctrl.page !== 1">Prev</a>
<a ng-if="$ctrl.page === 1">Prev</a>
<a ng-href="#/posts?page={{$ctrl.page + 1}}" ng-if="$ctrl.page !== $ctrl.totalPages">Next</a>
<a ng-if="$ctrl.page === $ctrl.totalPages">Next</a>
```

### 投稿クエリのカスタマイズ

`src/components/post-list.component.js`を変更することで記事の取得方法を変更できます。

例えば、

* `per_page` で1ページあたりの投稿件数を変更できます。
* `order` と `orderby` で投稿の並び順を変更できます。
* `search`で投稿内容の検索ができます。
* などなど

## 参考ドキュメント

* https://docs.angularjs.org/api
* http://ja.wp-api.org/reference/
