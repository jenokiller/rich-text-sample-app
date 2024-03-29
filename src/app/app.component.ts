import {Component} from '@angular/core';

@Component({
  selector: 'rte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'メロスは激怒した。必ず、かの邪知暴虐の王を除かなければならぬと決意した。' +
    'メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮らしてきた。' +
    'けれども邪悪に対しては、人一倍に敏感であった。今日未明、メロスは村を出発し、野を越え山越え、' +
    '十里離れたこのシラクスの町にやって来た。メロスには父も、母もない。女房もない。十六の、内気な妹と二人暮らしだ。' +
    'この妹は、村のある律儀な一牧人を、近々花婿として迎えることになっていた。結婚式も間近なのである。メロスは、それゆえ、' +
    '花嫁の衣装やら祝宴のごちそうやらを買いに、はるばる町にやって来たのだ。まず、その品々を買い集め、' +
    'それから都の大路をぶらぶら歩いた。メロスには竹馬の友があった。セリヌンティウスである。今はこのシラクスの町で、' +
    '石工をしている。その友を、これから訪ねてみるつもりなのだ。久しく会わなかったのだから、訪ねていくのが楽しみである。\n' +
    '歩いているうちにメロスは、町の様子を怪しく思った。ひっそりしている。もう既に日も落ちて、町の暗いのはあたりまえだが、けれども、なんだか、夜のせいばかりではなく、町全体が、やけにさびしい。のんきなメロスも、だんだん不安になってきた。\n' +
    '道で会った若い衆をつかまえて、何かあったのか、二年前にこの町に来たときは、夜でも皆が歌を歌って、' +
    '町はにぎやかであったはずだが、と質問した。若い衆は、首を振って答えなかった。しばらく歩いて老爺に会い、今度はもっと語勢を強くして質問した。老爺は答えなかった。\n' +
    'メロスは両手で老爺の体を揺すぶって質問を重ねた。老爺は、辺りをはばかる低声で、わずか答えた。';

  changeTextColorToRed() {
    document.execCommand('forecolor', false, 'red');
  }

  changeTextFontToBold() {
    document.execCommand('bold', false, '<b>');
  }

  reset() {
    document.execCommand('removeFormat', false, '');
  }

  changeTextFontSizeToSmall() {
    document.execCommand('fontSize', false, '1');
  }

  changeTextFontSizeToBig() {
    document.execCommand('fontSize', false, '7');
  }
}
