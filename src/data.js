var data = {
	test: {
		あ: '아',
		い: '이',
		う: '우',
		え: '에',
		お: '오'
	},
	hiragana: {
		あ: '아',
		い: '이',
		う: '우',
		え: '에',
		お: '오',
		か: '카',
		き: '키',
		く: '쿠',
		け: '케',
		こ: '코',
		さ: '사',
		し: '시',
		す: '스',
		せ: '세',
		そ: '소',
		た: '타',
		ち: '치',
		つ: '츠',
		て: '테',
		と: '토',
		な: '나',
		に: '니',
		ぬ: '누',
		ね: '네',
		の: '노',
		は: '하',
		ひ: '히',
		ふ: '후',
		へ: '헤',
		ほ: '호',
		ま: '마',
		み: '미',
		む: '무',
		め: '메',
		も: '모',
		や: '야',
		ゆ: '유',
		よ: '요',
		ら: '라',
		り: '리',
		る: '루',
		れ: '레',
		ろ: '로',
		わ: '와',
		を: '오',
		きゃ: '캬',
		きゅ: '큐',
		きょ: '쿄',
		しゃ: '샤',
		しゅ: '슈',
		しょ: '쇼',
		ちゃ: '챠',
		ちゅ: '츄',
		ちょ: '쵸',
		にゃ: '냐',
		にゅ: '뉴',
		にょ: '뇨',
		ひゃ: '햐',
		ひゅ: '휴',
		ひょ: '효',
		みゃ: '먀',
		みゅ: '뮤',
		みょ: '묘',
		りゃ: '랴',
		りゅ: '류',
		りょ: '료',
		が: '가',
		ぎ: '기',
		ぐ: '구',
		げ: '게',
		ご: '고',
		ざ: '자',
		じ: '지',
		ず: '즈',
		ぜ: '제',
		ぞ: '조',
		だ: '다',
		ぢ: '지',
		づ: '즈',
		で: '데',
		ど: '도',
		ば: '바',
		び: '비',
		ぶ: '부',
		べ: '베',
		ぼ: '보',
		ぎゃ: '갸',
		ぎゅ: '규',
		ぎょ: '교',
		じゃ: '쟈',
		じゅ: '쥬',
		じょ: '죠',
		ぢゃ: '쟈',
		ぢゅ: '쥬',
		ぢょ: '죠',
		びゃ: '뱌',
		びゅ: '뷰',
		びょ: '뵤',
		ぱ: '파',
		ぴ: '피',
		ぷ: '푸',
		ぺ: '페',
		ぽ: '포',
		ぴゃ: '퍄',
		ぴゅ: '퓨',
		ぴょ: '표'
	},
	gatagana: {
		ア: '아',
		イ: '이',
		ウ: '우',
		エ: '에',
		オ: '오',
		カ: '카',
		キ: '키',
		ク: '쿠',
		ケ: '케',
		コ: '코',
		サ: '사',
		シ: '시',
		ス: '스',
		セ: '세',
		ソ: '소',
		タ: '타',
		チ: '치',
		ツ: '츠',
		テ: '테',
		ト: '토',
		ナ: '나',
		二: '니',
		ヌ: '누',
		ネ: '네',
		ノ: '노',
		ハ: '하',
		ヒ: '히',
		フ: '후',
		ヘ: '헤',
		ホ: '호',
		マ: '마',
		ミ: '미',
		ム: '무',
		メ: '메',
		モ: '모',
		ヤ: '야',
		ユ: '유',
		ヨ: '요',
		ラ: '라',
		リ: '리',
		ル: '루',
		レ: '레',
		ロ: '로',
		ワ: '와',
		ヲ: '오',
		キャ: '캬',
		キュ: '큐',
		キョ: '쿄',
		シャ: '샤',
		シュ: '슈',
		ショ: '쇼',
		チャ: '챠',
		チュ: '츄',
		チョ: '쵸',
		二ャ: '냐',
		二ュ: '뉴',
		二ョ: '뇨',
		ヒャ: '햐',
		ヒュ: '휴',
		ヒョ: '효',
		ミャ: '먀',
		ミュ: '뮤',
		ミョ: '묘',
		リャ: '랴',
		リュ: '류',
		リョ: '료',
		ガ: '가',
		ギ: '기',
		グ: '구',
		ゲ: '게',
		ゴ: '고',
		ザ: '자',
		ジ: '지',
		ズ: '즈',
		ゼ: '제',
		ゾ: '조',
		ダ: '다',
		ヂ: '지',
		ヅ: '즈',
		デ: '데',
		ド: '도',
		バ: '바',
		ビ: '비',
		ブ: '부',
		ベ: '베',
		ボ: '보',
		ギャ: '갸',
		ギュ: '규',
		ギョ: '교',
		ジャ: '쟈',
		ジュ: '쥬',
		ジョ: '죠',
		ヂャ: '쟈',
		ヂュ: '쥬',
		ヂョ: '죠',
		ビャ: '뱌',
		ビュ: '뷰',
		ビョ: '뵤',
		パ: '파',
		ピ: '피',
		プ: '푸',
		ペ: '페',
		ポ: '포',
		ピャ: '퍄',
		ピュ: '퓨',
		ピョ: '표'
	},
	N5_mean: {
		秋: '가을',
		朝: '아침',
		朝ご飯: '아침밥',
		あさって: '모레',
		足: '발',
		明日: '내일',
		あそこ: '저기',
		頭: '머리',
		あちら: '저쪽',
		後: '뒤',
		あなた: '당신',
		兄: '형',
		姉: '누나',
		雨: '비',
		家: '집',
		いくつ: '몇개',
		いくら: '얼마',
		池: '연못',
		医者: '의사',
		いす: '의자',
		一日: '하루',
		いつ: '언제',
		一週間: '일주일',
		犬: '개',
		今: '지금',
		意味: '의미',
		妹: '여동생',
		入り口: '입구',
		色: '색',
		上: '위',
		後ろ: '뒤',
		歌: '노래',
		海: '바다',
		上着: '겉옷',
		絵: '그림',
		映画: '영화',
		英語: '영어',
		駅: '역',
		円: '엔',
		鉛筆: '연필',
		お母さん: '어머니',
		お菓子: '과자',
		お金: '돈',
		お客さん: '손님',
		奥さん: '부인',
		お酒: '술',
		お皿: '접시',
		おじいさん: '할아버지',
		おじさん: '이저씨',
		お茶: '차',
		お父さん: '아버지',
		弟: '남동생',
		男: '남자',
		男の子: '남자아이',
		男の人: '남자',
		一昨日: '그저께',
		一昨年: '재작년',
		大人: '어른',
		お腹: '배',
		お兄さん: '형',
		お姉さん: '누나',
		おばあさん: '할머니',
		おばさん: '아주머니',
		お風呂: '목욕',
		お弁当: '도시락',
		おまわりさん: '경찰',
		音楽: '음악',
		女: '여자',
		女の子: '여자아이',
		女の人: '여자',
		外国人: '외국인',
		会社: '회사',
		会社員: '회사원',
		階段: '계단',
		買い物: '장보기',
		顔: '얼굴',
		かぎ: '열쇠',
		学生: '학생',
		かさ: '우산',
		風: '바람',
		風邪: '감기',
		家族: '가족',
		学校: '학교',
		角: '모퉁이'
	},
	N5_pro: {
		秋: '아키',
		朝: '아사',
		朝ご飯: '아사고항',
		あさって: '아삿테',
		足: '아시',
		明日: '아시타',
		あそこ: '아소코',
		頭: '아타마',
		あちら: '아치라',
		後: '아토',
		あなた: '아나타',
		兄: '아니',
		姉: '아네',
		雨: '아메',
		家: '이에',
		いくつ: '이쿠츠',
		いくら: '이쿠라',
		池: '이케',
		医者: '이샤',
		いす: '이스',
		一日: '이치니치',
		いつ: '이츠',
		一週間: '잇슈ㅡ칸',
		犬: '이누',
		今: '이마',
		意味: '이미',
		妹: '이모ㅡ토',
		入り口: '이리구치',
		色: '이로',
		上: '우에',
		後ろ: '우시로',
		歌: '우타',
		海: '우미',
		上着: '우와기',
		絵: '에',
		映画: '에ㅡ가',
		英語: '에ㅡ고',
		駅: '에키',
		円: '엔',
		鉛筆: '엔피츠',
		お母さん: '오카ㅡ상',
		お菓子: '오카시',
		お金: '오카네',
		お客さん: '오캬쿠상',
		奥さん: '오쿠상',
		お酒: '오사케',
		お皿: '오사라',
		おじいさん: '오지ㅡ상',
		おじさん: '오지상',
		お茶: '오챠',
		お父さん: '오토ㅡ상',
		弟: '오토ㅡ토',
		男: '오토코',
		男の子: '오토코노코',
		男の人: '오토코노히토',
		一昨日: '오토토이',
		一昨年: '오토토시',
		大人: '오토나',
		お腹: '오나카',
		お兄さん: '오니ㅡ상',
		お姉さん: '오네ㅡ상',
		おばあさん: '오바-상',
		おばさん: '오바상',
		お風呂: '오후로',
		お弁当: '오벤토ㅡ',
		おまわりさん: '오마와리상',
		音楽: '온가쿠',
		女: '온나',
		女の子: '온나노코',
		女の人: '온나노히토',
		外国人: '가이코쿠진',
		会社: '카이샤',
		会社員: '카이샤인',
		階段: '카이단',
		買い物: '카이모노',
		顔: '카오',
		かぎ: '카기',
		学生: '가쿠세ㅡ',
		かさ: '카사',
		風: '카제',
		風邪: '카제',
		家族: '카소쿠',
		学校: '각코ㅡ',
		角: '카도'
	}
};

export default data;
