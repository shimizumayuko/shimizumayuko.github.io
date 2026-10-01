document.addEventListener('DOMContentLoaded', function () {

  var papers = [
    {y:"2025.10", title:"「公害経験の継承」論の射程", journal:"季刊経済研究 44巻1-2号, pp.3-13", url:"https://doi.org/10.24729/0002003635"},
    {y:"2024.03", title:"〈公害経験の継承〉における動態的視点と修復的正義：川尻剛士氏の批判に応えて", journal:"季刊経済研究 42巻4号, pp.105-113", url:"https://doi.org/10.24544/omu.20240401-007"},
    {y:"2023.05", title:"日本における若年層の環境意識の実態とその影響要因に関する文献レビュー", journal:"社会科学研究年報 53号, pp.235-252", url:"https://doi.org/10.50873/10729"},
    {y:"2023.03", title:"若者にみる政治的関心と非政治的実践の乖離——「若者と民主主義に関するアンケート」調査から", journal:"龍谷大学政策学論集 12巻2号, pp.73-91"},
    {y:"2022.11", title:"「聞き書き」を用いたアクティブ・ラーニングの学習成果", journal:"龍谷大学政策学論集 12巻1号, pp.29-48", url:"https://opac.ryukoku.ac.jp/iwjs0005opc/catdbl.do?pkey=TD32191213&hidden_return_link=true"},
    {y:"2021.03", title:"龍谷大学政策学部「政策実践・探究演習（国内）」の科目開発過程", journal:"龍谷大学政策学論集 10巻2号, pp.187-207"},
    {y:"2021.01", title:"公害経験継承の課題：多様な解釈を包むコミュニティとしての公害資料館", journal:"環境と公害 50巻3号, pp.2-8", url:"https://www.iwanami.co.jp/files/kankyo/503/p02.pdf"},
    {y:"2021", title:"大阪市・西淀川における公害地域再生運動の展開と到達点(1)道路環境対策から交通まちづくりへ：公害経験継承としての地域再生運動：個人史アプローチによる分析", journal:"社会科学研究年報 52号, pp.87-102", url:"https://opac.ryukoku.ac.jp/iwjs0005opc/bdyview.do?bodyid=TD32188723&elmid=Body&fname=ssk-np_52_009.pdf&loginflg=on&once=true"},
    {y:"2020.09", title:"新型コロナウィルス感染拡大状況下での初年次教育の取り組み", journal:"龍谷大学政策学論集 10巻1号, pp.57-64"},
    {y:"2017.11", title:"公害経験継承の課題と可能性", journal:"大原社会問題研究所雑誌 709号, pp.32-43", url:"https://oisr-org.ws.hosei.ac.jp/oz/contents/?id=2-001-0000028"},
    {y:"2017.03", title:"都市近郊型里山における人々のかかわり経験と価値評価：長岡京市民アンケート調査から", journal:"龍谷大学政策学論集 6巻1号, pp.39-50"},
    {y:"2016.03", title:"現代における共同売店の展開可能性：沖縄本島北部・中部地域の現地調査報告", journal:"龍谷政策学論集 5巻2号, pp.73-89"},
    {y:"2012", title:"持続可能な地域発展の分析枠組み：兵庫県豊岡市コウノトリと共生する地域づくりの事例から", journal:"環境社会学研究 18巻"},
    {y:"2010", title:"討議による住民意見の熟成：西淀川交通まちづくり意見交換会の取組みから", journal:"交通科学 41巻1号, pp.20-31"},
    {y:"2008", title:"環境ストック概念を用いた公害地域再生の理論的検討：持続可能な地域発展に向けて", journal:"環境社会学研究 14巻, pp.185-201"}
  ];

  var books = [
    {y:"2025.03", title:"市民のための政策学", journal:"晃洋書房", url:"https://www.koyoshobo.co.jp/book/b659241.html"},
    {y:"2025.03", title:"若者と民主主義の今：その遠心力と求心力", journal:"晃洋書房", url:"https://www.koyoshobo.co.jp/book/b659002.html"},
    {y:"2025.02", title:"「公害地域再生」とは何か：大阪・西淀川「あおぞら財団」の軌跡と未来", journal:"藤原書店", url:"https://www.fujiwara-shoten-store.jp/SHOP/9784865784503.html"},
    {y:"2023.04", title:"シリーズ講座環境社会学１ なぜ公害は続くのか——潜在・散在・長期化する被害", journal:"新泉社"},
    {y:"2023.03", title:"環境社会学事典", journal:"丸善出版"},
    {y:"2023.03", title:"公害の経験を未来につなぐ：教育・フォーラム・アーカイブズを通した公害資料館の挑戦", journal:"ナカニシヤ出版", url:"https://www.nakanishiya.co.jp/book/b621951.html"},
    {y:"2022", title:"（書誌情報準備中）", journal:""},
    {y:"2021.10", title:"公害スタディーズ", journal:"ころから出版"},
    {y:"2019", title:"人口減少、脱工業化、災害：日本における持続可能な地域づくり", journal:""},
    {y:"2018.03", title:"里海学のすすめ：人と海の新たな関わり", journal:"勉誠出版"},
    {y:"2018.03", title:"琵琶湖水域圏の可能性：里山学からの展望", journal:"晃洋書房"},
    {y:"2017.03", title:"どうすれば環境保全はうまくいくのか：現場から考える「順応的ガバナンス」の進め方", journal:"新泉社"},
    {y:"2014.03", title:"東アジア中山間地域の内発的発展", journal:"公人の友社"},
    {y:"2013.03", title:"なぜ環境保全はうまくいかないのか：現場から考える「順応的ガバナンス」の可能性", journal:"新泉社"},
    {y:"2013.03", title:"地域空間の包容力と社会的持続性", journal:"日本経済評論社"},
    {y:"2012", title:"変貌する沖縄離島社会 八重山にみる地域「自治」", journal:"ナカニシヤ出版"},
    {y:"2011.03", title:"持続可能な地域実現と地域公共人材：日本における新しい地平", journal:"日本評論社"}
  ];

  var misc = [
    {y:"2026.02", title:"公害アーカイブズ研究の今日的意義——「記録」を多視点で解釈し対話することによって形成される「記憶」を継承する", journal:"図書新聞", url:"https://www.shimbun-online.com/product/toshoshimbunbookreview0260214.html"},
    {y:"2025.10", title:"公害を若者に伝える意味：西淀川に通い続ける大学生 〜今どきの学生ってどうなん?〜", journal:"りべら", url:"https://aozora.or.jp/archives/43786"},
    {y:"2024.12", title:"公害経験を継承する——龍谷大学清水ゼミでの学び", journal:"みずしま財団だより", url:"https://mizushima-f.or.jp/publishing/5914/"},
    {y:"2022.12", title:"住民の学習をつうじた公害経験の継承——特集 四日市公害裁判から50年 公害から今何を学ぶか", journal:"住民と自治", url:"https://www.jichiken.jp/jj/202212/"}
  ];

  var presentations = [
    {y:"2025.12", title:"「公害を起こさないまち」をつくる 〜大阪・西淀川の挑戦〜", journal:"第50回法政大学大学院まちづくりセミナー", url:"https://www.hosei.ac.jp/info/article-20251119112809/?auth=9abbb458a78210eb174f4bdd385bcf54"},
    {y:"2025.11", title:"コメント「公害地域再生とは何か」", journal:"第40回日本環境会議水島大会特別分科会 みずしま財団設立25周年記念シンポジウム", url:"http://www.einap.org/jec/article/jec/56/179"},
    {y:"2025.10", title:"子育てと自然環境", journal:"龍谷政策FES2025", url:"https://www.ryusei-al.com/event/348/"},
    {y:"2025.10", title:"大学生による公害経験継承の試みの成果と課題", journal:"日本環境教育学会第36回年次大会", url:"https://www.old.jsfee.jp/hokkaido2025/abstracts_2_1008.pdf"},
    {y:"2024.09", title:"公害経験継承論の射程", journal:"環境経済・政策学会2024年大会企画セッション", url:"https://conference.wdc-jp.com/seeps/2024/program/contents/common/doc/SP0016.pdf"}
  ];

  var newsItems = [
    {y:"2026.09.16", title:"ゼミで西淀川でのフィールドワークを行いました", url:"https://aozora.or.jp/archives/45303"},
    {y:"2026.09.12", title:"日本環境教育学会年次大会で「にしよど公害かるたの制作と活用」について報告しました（ポスター発表）"},
    {y:"2026.09.05", title:"教職員等環境教育・学習推進リーダー養成研修（プログラム・デザインコース）があおぞら財団で開催されました", url:"https://policies.env.go.jp/policy/eco/esd-teacher/program-design.html"},
    {y:"2026.08.08", title:"開発教育協会研究集会（d-lab2026）自主ラウンドテーブルで「にしよど公害かるた」を紹介しました"},
    {y:"2026.08.07", title:"環境社会学会研究例会「中間支援の環境社会学」を開催しました", url:"https://jaes.jp/9503/"}
  ];

  function renderNewsTrack(el, items) {
    var html = items.map(function (item) {
      var titleHtml = item.url
        ? '<a href="' + item.url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(245,241,228,0.4);">' + item.title + '</a>'
        : item.title;
      return '<span class="hero-news-item"><time>' + item.y + '</time>' + titleHtml + '</span>';
    }).join('');
    el.innerHTML = html;
  }

  renderNewsTrack(document.getElementById('newsTrack'), newsItems.slice(0, 2));

  function renderList(el, items) {
    el.innerHTML = items.map(function (item) {
      var meta = item.journal ? '<span class="pub-meta">' + item.journal + '</span>' : '';
      var titleHtml = item.url
        ? '<a class="pub-title" href="' + item.url + '" target="_blank" rel="noopener">' + item.title + '</a>'
        : '<span class="pub-title">' + item.title + '</span>';
      return '<li><span class="pub-year">' + item.y + '</span>' + titleHtml + meta + '</li>';
    }).join('');
  }

  renderList(document.getElementById('paperList'), papers.slice(0, 3));
  renderList(document.getElementById('miscList'), misc.slice(0, 3));
  renderList(document.getElementById('bookList'), books.slice(0, 3));
  renderList(document.getElementById('presList'), presentations.slice(0, 3));

  var tabs = document.querySelectorAll('.pub-tab');
  var panels = document.querySelectorAll('.pub-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.hidden = true; });
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).hidden = false;
    });
  });

  var heroLines = document.querySelectorAll('.hero-line');
  var heroBgImgs = document.querySelectorAll('.hero-bg-img');
  if (heroLines.length > 1) {
    var current = 0;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      setInterval(function () {
        heroLines[current].classList.remove('active');
        if (heroBgImgs[current]) heroBgImgs[current].classList.remove('active');
        current = (current + 1) % heroLines.length;
        heroLines[current].classList.add('active');
        if (heroBgImgs[current]) heroBgImgs[current].classList.add('active');
      }, 4500);
    }
  }

  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.getElementById('siteNav');
  menuToggle.addEventListener('click', function () {
    var open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });

});
