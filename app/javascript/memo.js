function post ()  {
  //送信ボタンのid取得
const submit = document.getElementById("submit");
//送信ボタンがクリックされた時のイベント
submit.addEventListener("click", (e) => {
  //デフォルトをキャンセル(ブラウザ側をキャンセル)
  e.preventDefault();
  //送信される内容をidで取得
  const form = document.getElementById("form");
  //formDataオブジェクトを使って送信される値を取得
  const formData = new FormData(form);
  //XMLオブジェクトを使ってコントローラーとやりとりを可能に
  const XHR = new XMLHttpRequest();
  //openメソッドで送るリクエストを指定
  //アクション、場所、非同期の有無
  XHR.open("POST", "/posts", true);
  //レスポンスのタイプを指定
  XHR.responseType = "json";
  //sendオブジェクトで送る(実際に送る値を指定)
  XHR.send(formData);
  
  //通信に成功した場合
  XHR.onload = () => {
    //レスポンス200以外(失敗時)
    if (XHR.status != 200) {
      alert(``);
      return null;
    };
    //作成したhtmlを挿入したい場所のidを取得
    const list = document.getElementById("list");
    //実際に入力された文字列をidで取得
    const formText = document.getElementById("content");
    //コントローラーからキー送られてきたバリュー(値)を取得
    const value = XHR.response.b;
    //送られてきた値を使ってhtml作成
    const html = `
    <div class="post">
    <div class="post-date">
      投稿日時：${value.created_at}
    </div>
    <div class="post-content">
      ${value.content}
    </div>
  </div>`;
  //挿入する場所、前後の指定、挿入したい要素
  list.insertAdjacentHTML("afterend", html);
  //投稿された後、入力された値を空にする
  formText.value = "";
  };
});
};

window.addEventListener('load', post);
