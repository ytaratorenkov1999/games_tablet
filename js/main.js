(() => {
    "use strict";

    const SLIDER_GAME_INDEXES = [16, 5, 9, 19, 17];

    const e = document.querySelector(".swiper-wrapper"),
        t = document.querySelector(".cards"),
        s = document.querySelector(".graph-modal"),
        i = {
            ru: {
                btnBack: "Назад",
                btnPlay: "Играть",
                btnYes: "Да",
                btnNo: "Нет",
                howPlay: "Об игре",
                control: "Управление - сенсорное.",
                confirm: "Вы действительно хотите выйти из игры?"
            },
            en: {
                btnBack: "Back",
                btnPlay: "Play",
                btnYes: "Yes",
                btnNo: "No",
                howPlay: "About game",
                control: "Control - touch.",
                confirm: "Do you really want to quit the game?"
            },
            de: {
                btnBack: "Zurück",
                btnPlay: "Spielen",
                btnYes: "Ja",
                btnNo: "No",
                howPlay: "Über das Spiel",
                control: "Kontrolle - Berührung.",
                confirm: "Willst du wirklich aus dem Spiel aussteigen?"
            },
            fr: {
                btnBack: "Précédent",
                btnPlay: "Jouer",
                btnYes: "Voui",
                btnNo: "Non",
                howPlay: "A propos du jeu",
                control: "Contrôle - tactile.",
                confirm: "Voulez-vous vraiment vous retirer du jeu?"
            },
            it: {
                btnBack: "Indietro",
                btnPlay: "Giocare",
                btnYes: "Sí",
                btnNo: "No",
                howPlay: "Informazioni sul gioco",
                control: "Controllo - touch.",
                confirm: "Vuoi davvero uscire dal gioco?"
            },
            es: {
                btnBack: "Anterior",
                btnPlay: "Jugar",
                btnYes: "Sí",
                btnNo: "No",
                howPlay: "Sobre el juego",
                control: "Control - táctil.",
                confirm: "¿De verdad quieres salir del juego?"
            },
            zh: {
                btnBack: "返回按钮",
                btnPlay: "玩",
                btnYes: "是",
                btnNo: "不",
                howPlay: "游戏详情",
                control: "管控-触摸。",
                confirm: "你真的想退出游戏吗？"
            },
            ja: {
                btnBack: "前へ",
                btnPlay: "遊ぶ",
                btnYes: "応",
                btnNo: "いいえ",
                howPlay: "試合について",
                control: "コントロール - タッチ。",
                confirm: "本当に試合から降りたいのか？"
            },
            ko: {
                btnBack: "이전",
                btnPlay: "게임",
                btnYes: "예",
                btnNo: "아니",
                howPlay: "게임 정보",
                control: "컨트롤 - 터치.",
                confirm: "정말 게임에서 벗어나고 싶으신가요?"
            }
        },
        a = [{
            index: 1,
            name: "checkers",
            rate: 0,
            ru: {
                title: "Шашки",
                desc: "Шашки — логическая настольная игра для двух игроков, в которой нужно передвигать фишки-шашки по клеткам шашечной доски."
            },
            en: {
                title: "Checkers",
                desc: "Checkers is a logical board game for two players in which players move checker pieces across the squares of a checkerboard."
            },
            de: {
                title: "Dame",
                desc: "Dame – ein logisches Brettspiel für zwei Spieler, bei dem man Spielsteine über die Felder eines Damebretts bewegen muss"
            },
            fr: {
                title: "Dames",
                desc: "Les dames sont un jeu de société logique pour deux joueurs, dans lequel il faut déplacer des pions sur les cases d'un damier."
            },
            it: {
                title: "Dama",
                desc: "Il gioco della dama è un gioco da tavolo logico per due giocatori, in cui è necessario spostare le pedine su una scacchiera a caselle."
            },
            es: {
                title: "Damas",
                desc: "Las damas son un juego de mesa lógico para dos jugadores en el que hay que mover fichas por las casillas de un tablero de damas."
            },
            zh: {
                title: "跳棋",
                desc: "跳棋——一种供两名玩家参与的逻辑桌游，玩家需在棋盘格子上移动棋子。"
            },
            ja: {
                title: "チェッカー",
                desc: "チェッカーは、2人のプレイヤーがチェッカー盤のマス目に駒を移動させる論理的なボードゲームです。"
            },
            ko: {
                title: "체스",
                desc: "체스 — 두 명의 플레이어가 체스판의 칸을 따라 말(체스 말)을 움직여야 하는 논리적인 보드 게임입니다."
            }
        }, {
            index: 2,
            name: "chess",
            rate: 0,
            ru: {
                title: "Шахматы",
                desc: "Шахматы — это древняя стратегическая игра для двух игроков, где на 64-клеточной доске сражаются 32 фигуры: 16 белых и 16 черных. Цель игры — поставить королю противника шах и мат, то есть захватить его в ловушку, из которой он не сможет выбраться."
            },
            en: {
                title: "Chess",
                desc: "Chess is an ancient strategic game for two players in which 32 pieces—16 white and 16 black—battle on a 64-square board. The goal of the game is to checkmate the opponent’s king, trapping it so that it cannot escape."
            },
            de: {
                title: "Schach",
                desc: "Schach ist ein altes Strategiespiel für zwei Spieler, bei dem 32 Figuren – 16 weiße und 16 schwarze – auf einem Brett mit 64 Feldern gegeneinander antreten. Das Ziel des Spiels ist es, den König des Gegners schachmatt zu setzen, d. h. ihn in eine Falle zu locken, aus der er sich nicht mehr befreien kann."
            },
            fr: {
                title: "Échecs",
                desc: "Les échecs sont un jeu stratégique ancien pour deux joueurs, où 32 pièces s'affrontent sur un échiquier de 64 cases : 16 blanches et 16 noires. Le but du jeu est de mettre le roi adverse échec et mat, c'est-à-dire de le piéger de manière à ce qu'il ne puisse plus s'échapper."
            },
            it: {
                title: "Scacchi",
                desc: "Gli scacchi sono un antico gioco strategico per due giocatori, in cui 32 pezzi (16 bianchi e 16 neri) si affrontano su una scacchiera a 64 caselle. Lo scopo del gioco è dare scacco matto al re avversario, ovvero intrappolarlo in una posizione dalla quale non può uscire."
            },
            es: {
                title: "Ajedrez",
                desc: "El ajedrez es un antiguo juego estratégico para dos jugadores en el que se enfrentan 32 piezas (16 blancas y 16 negras) en un tablero de 64 casillas. El objetivo del juego es hacer jaque mate al rey del adversario, es decir, atraparlo en una trampa de la que no pueda escapar."
            },
            zh: {
                title: "国际象棋",
                desc: "国际象棋是一种古老的双人策略游戏，在64格棋盘上展开32枚棋子的较量：16枚白棋与16枚黑棋。游戏目标是将对手的国王置于死地，即将其困于无法脱身的陷阱之中。"
            },
            ja: {
                title: "チェス",
                desc: "チェスは、2人のプレイヤーが64マスの盤上で32個の駒（白16個、黒16個）を使って戦う、古代から伝わる戦略ゲームです。ゲームの目的は、相手の王を詰ませること、つまり逃げ場のない罠に陥れることです。"
            },
            ko: {
                title: "체커",
                desc: "체스는 두 명의 플레이어가 64칸의 보드 위에서 32개의 말(16개의 흰 말과 16개의 검은 말)을 움직여 싸우는 고대 전략 게임입니다. 게임의 목표는 상대방의 왕을 체크메이트 상태로 만드는 것, 즉 왕이 빠져나올 수 없는 함정에 가두는 것입니다."
            }
        }, {
            index: 3,
            name: "sudoku",
            rate: 0,
            ru: {
                title: "Судоку",
                desc: "Судоку — головоломка с числами, где нужно расставить цифры от 1 до 9 на квадратном поле 9x9 так, чтобы они не повторялись в каждой строке, столбце и квадрате 3x3."
            },
            en: {
                title: "Sudoku",
                desc: "Sudoku is a number puzzle where you have to place the numbers 1 to 9 in a 9x9 square grid so that they do not repeat in each row, column, and 3x3 square."
            },
            de: {
                title: "Sudoku",
                desc: "Sudoku ist ein Zahlenrätsel, bei dem die Zahlen von 1 bis 9 in einem 9x9-Quadrat so angeordnet werden müssen, dass sie sich in jeder Zeile, Spalte und jedem 3x3-Quadrat nicht wiederholen."
            },
            fr: {
                title: "Sudoku",
                desc: "Le sudoku est un casse-tête mathématique dans lequel il faut placer les chiffres de 1 à 9 dans une grille carrée de 9x9 cases, de manière à ce qu'ils ne se répètent pas dans chaque ligne, chaque colonne et chaque carré de 3x3 cases."
            },
            it: {
                title: "Sudoku",
                desc: "Sudoku è un rompicapo con i numeri in cui bisogna disporre i numeri da 1 a 9 su una griglia quadrata 9x9 in modo che non si ripetano in ogni riga, colonna e quadrato 3x3."
            },
            es: {
                title: "Sudoku",
                desc: "Sudoku: un rompecabezas con números en el que hay que colocar los números del 1 al 9 en un cuadrado de 9x9 de manera que no se repitan en ninguna fila, columna o cuadrado de 3x3."
            },
            zh: {
                title: "数独",
                desc: "数独是一种数字谜题，要求在9×9的方格中填入数字1至9，确保每个数字在每行、每列及每个3×3的小方格中均不重复。"
            },
            ja: {
                title: "数独",
                desc: "数独は、1から9までの数字を9×9の正方形のマスに配置する数字パズルです。各行、各列、および3×3の正方形（ブロック）内で同じ数字が重複しないように配置する必要があります。"
            },
            ko: {
                title: "스도쿠",
                desc: "스도쿠는 숫자로 된 퍼즐로, 9×9 정사각형 격자 안에 1부터 9까지의 숫자를 배치해야 하며, 각 행, 열, 그리고 3×3 사각형 영역마다 같은 숫자가 중복되지 않도록 해야 합니다."
            }
        }, {
            index: 4,
            name: "crossword",
            rate: 12,
            ru: {
                title: "Кроссворды",
                desc: "Любите головоломки? Тогда кроссворды для вас! Множество заданий, разные темы и сложность. Развивайте логику, память и эрудицию в увлекательной игре."
            },
            en: {
                title: "Crossword Puzzles",
                desc: "Do you like puzzles? Then crossword puzzles are for you! There are plenty of puzzles to solve, covering a variety of topics and difficulty levels. Sharpen your logic, memory, and general knowledge with this fun game."
            },
            de: {
                title: "Kreuzworträtsel",
                desc: "Magst du Rätsel? Dann sind Kreuzworträtsel genau das Richtige für dich! Zahlreiche Aufgaben, verschiedene Themen und Schwierigkeitsgrade. Trainiere dein logisches Denken, dein Gedächtnis und dein Allgemeinwissen in diesem spannenden Spiel."
            },
            fr: {
                title: "Mots croisés",
                desc: "Vous aimez les casse-têtes? Si c'est le cas, les mots croisés sont faits pour vous! De nombreux défis, des thèmes variés, des niveaux de difficulté variés. Améliorez votre logique, votre mémoire et votre culture générale grâce à ce jeu passionnant."
            },
            it: {
                title: "Cruciverba",
                desc: "Ti piacciono i rompicapo? Allora i cruciverba fanno per te! Tante sfide con temi diversi e vari livelli di difficoltà. Allena logica, memoria ed erudizione con questo gioco coinvolgente."
            },
            es: {
                title: "Crucigramas",
                desc: "¿Te gustan los rompecabezas? ¡Entonces los crucigramas son para ti! Gran variedad de tareas con diferentes temas y niveles de dificultad. Desarrolla tu lógica, memoria y cultura general en este entretenido juego."
            },
            zh: {
                title: "纵横填字谜",
                desc: "你喜欢解谜吗？这款游戏专为你打造！海量填字关卡，不同主题与难度，持续挑战你的思维能力。在轻松有趣的游戏中提升逻辑、记忆力与知识储备。"
            },
            ja: {
                title: "クロスワードパズル",
                desc: "パズルが好きですか？それならクロスワードがおすすめ！豊富な問題、多彩なテーマ、さまざまな難易度を収録。楽しく遊びながら、論理力・記憶力・知識を鍛えましょう。"
            },
            ko: {
                title: "십자말풀이",
                desc: "퍼즐을 좋아하시나요? 그렇다면 십자말풀이 퍼즐이 여러분께 딱 맞습니다! 다양한 주제와 난이도의 수많은 퍼즐이 준비되어 있습니다. 재미있게 게임을 즐기며 논리력, 기억력을 비롯하여 교양을 키워보세요."
            }
        }, {
            index: 5,
            name: "spacecraft",
            rate: 6,
            ru: {
                title: "Spacecraft: Война кораблей",
                desc: "Динамичная космическая аркада, где вы управляете модульным кораблем и сражаетесь с врагами. Собирайте новые части, улучшайте оружие, усиливайте корабль, проходите уровни и превращайте его в мощную боевую станцию!"
            },
            en: {
                title: "Spacecraft: War of the Ships",
                desc: "A fast-paced space arcade game where you pilot a modular ship and battle enemies. Collect new parts, upgrade your weapons, enhance your ship, complete levels, and turn it into a powerful battle station!"
            },
            de: {
                title: "Spacecraft: Der Krieg der Raumschiffe",
                desc: "Ein dynamisches Weltraum-Arcade-Spiel, in dem du ein modulares Raumschiff steuerst und gegen Feinde kämpfst. Sammle neue Teile, verbessere deine Waffen, rüste dein Raumschiff auf, meistere die Level und verwandle es in eine mächtige Kampfstation!"
            },
            fr: {
                title: "Spacecraft: La guerre des vaisseaux",
                desc: "Un jeu d'arcade spatial dynamique où vous pilotez un vaisseau modulaire et combattez des ennemis. Collectez de nouvelles pièces, améliorez vos armes, renforcez votre vaisseau, passez des niveaux et transformez-le en une puissante station de combat!"
            },
            it: {
                title: "Spacecraft: Guerra nello spazio",
                desc: "Un arcade spaziale dinamico dove controlli un’astronave modulare e combatti contro i nemici. Raccogli nuovi componenti, potenzia le armi, rinforza la nave, supera i livelli e trasforma la nave in una potente stazione da combattimento!"
            },
            es: {
                title: "Spacecraft: Guerra de naves espaciales",
                desc: "Un dinámico arcade espacial donde controlas una nave modular y luchas contra los enemigos. ¡Reúne nuevas piezas, mejora tus armas, fortalece tu nave, supera niveles y conviértela en una poderosa estación de combate!"
            },
            zh: {
                title: "星际战舰：太空战争",
                desc: "动态太空射击游戏，操控可组装的战舰迎战敌人。收集新部件，升级武器系统，强化战舰性能，完成关卡挑战，将你的飞船打造为最强宇宙战斗堡垒！"
            },
            ja: {
                title: "スペースクラフト：宇宙船戦争",
                desc: "モジュール式の宇宙船を操り、敵と戦うダイナミックな宇宙アーケードゲーム。新しいパーツを集めて武器を強化し、宇宙船を強力な戦闘ステーションへと進化させましょう！ "
            },
            ko: {
                title: "Spacecraft: 우주선 전쟁",
                desc: "모듈식 우주선을 조종하며 적들과 싸우는 역동적인 우주 아케이드 게임입니다. 새로운 부품을 수집해 무기와 함선을 강화하고, 레벨을 클리어하여 나만의 우주선을 강력한 전투 기지로 만들어 보세요!"
            }
        }, {
            index: 6,
            name: "tank_attack_5",
            rate: 12,
            ru: {
                title: "Tank Attack 5",
                desc: "Экшен про танковые сражения! Покупайте и улучшайте боевую технику, проходите аркадные бои, защищайте базу, сражайтесь с боссами и открывайте новые танки, камуфляжи и локации."
            },
            en: {
                title: "Tank Attack 5",
                desc: "An action game featuring tank battles! Buy and upgrade your tanks, take on arcade-style battles, defend your base, fight bosses, and unlock new tanks, camouflage patterns, and locations."
            },
            de: {
                title: "Tank Attack 5",
                desc: "Ein Action-Spiel rund um Panzerschlachten! Kaufe und verbessere deine Kampftechnik, bestreite Arcade-Kämpfe, verteidige deine Basis, kämpfe gegen Bosse und schalte neue Panzer, Tarnungen und Schauplätze frei."
            },
            fr: {
                title: "Tank Attack 5",
                desc: "Un jeu d'action sur des combats de chars! Achetez et améliorez votre matériel de combat, participez à des combats de type arcade, défendez votre camp, affrontez des boss et débloquez de nouveaux chars, camouflages et lieux."
            },
            it: {
                title: "Tank Attack 5",
                desc: "Un action game sulle battaglie tra carri armati! Acquista e potenzia i mezzi da combattimento, affronta battaglie arcade, difendi la base, combatti contro i boss e sblocca nuovi carri armati, mimetiche e ambientazioni."
            },
            es: {
                title: "Tank Attack 5",
                desc: "¡Juego de acción sobre batallas de tanques! Compra y mejora tu equipo de combate, participa en combates arcade, defiende la base, enfréntate a los jefes y desbloquea nuevos tanques, camuflajes y escenarios."
            },
            zh: {
                title: "坦克突击5",
                desc: "激烈的坦克动作射击游戏！购买并升级战斗装备，在街机式战斗中生存下来，保卫基地，对抗强力boss，解锁全新坦克、涂装与战斗地图。"
            },
            ja: {
                title: "タンクアタック5",
                desc: "戦車バトルを楽しめるアクションゲーム！戦車を購入・強化し、アーケードバトルに挑戦。基地を守り、ボスと戦い、新しい戦車や迷彩、ステージをアンロックしましょう。"
            },
            ko: {
                title: "Tank Attack 5",
                desc: "전차 액션 게임입니다! 전투 장비를 구매하고 업그레이드하며, 아케이드 전장을 누비며 기지를 사수하세요. 보스를 물리치면서 새로운 전차, 스킨, 맵을 해금하세요."
            }
        }, {
            index: 7,
            name: "trampoline_basketball",
            rate: 0,
            ru: {
                title: "Баскетбол на батутах",
                desc: "Добро пожаловать в захватывающий мир баскетбола на батуте! Прыгайте, цельтесь и попадайте в красные ведра, чтобы пройти к финишу. Проходите уровни, открывайте новые испытания и старайтесь набрать максимум очков за точность и скорость."
            },
            en: {
                title: "Trampoline Basketball",
                desc: "Welcome to the exciting world of trampoline basketball! Jump, aim, and shoot into the red baskets to reach the finish line. Complete levels, unlock new challenges, and try to score as many points as possible for accuracy and speed."
            },
            de: {
                title: "Basketball auf Trampolinen",
                desc: "Willkommen in der aufregenden Welt des Trampolin-Basketballs! Spring, ziele und triff die roten Eimer, um bis zur Ziellinie zu gelangen. Spiele die Levels durch, schalte neue Herausforderungen frei und versuche, möglichst viele Punkte für Genauigkeit und Geschwindigkeit zu sammeln."
            },
            fr: {
                title: "Basketball sur trampoline",
                desc: "Bienvenue dans l'univers passionnant du basketball sur trampoline! Sautez, visez et touchez les seaux rouges pour arriver en finale. Passez les niveaux, débloquez de nouveaux défis et tâchez de marquer un maximum de points pour précision et rapidité."
            },
            it: {
                title: "Trampoline Basketball",
                desc: "Benvenuto nell’emozionante mondo del basket sui trampolini! Salta, mira e centra i secchi rossi per raggiungere il traguardo. Supera i livelli, sblocca nuove sfide e cerca di ottenere il massimo dei punti grazie a precisione e velocità."
            },
            es: {
                title: "Baloncesto sobre camas elásticas",
                desc: "¡Bienvenido al apasionante mundo del baloncesto sobre cama elástica! Salta, apunta y encesta en los baldes rojos para llegar a la meta. Supera niveles, desbloquea nuevos desafíos e intenta conseguir la máxima puntuación por tu precisión y velocidad."
            },
            zh: {
                title: "蹦床篮球",
                desc: "欢迎来到充满趣味与挑战的蹦床篮球世界！跳跃、瞄准，将篮球精准投入红色篮筐，顺利冲向终点。不断挑战关卡，解锁全新玩法，在速度与精准之间冲击更高分数。"
            },
            ja: {
                title: "トランポリンバスケットボール",
                desc: "エキサイティングなトランポリンバスケットボールの世界へようこそ！ジャンプして狙いを定め、赤いバケツにボールを入れてゴールを目指しましょう。ステージをクリアして新たなチャレンジを解放し、正確さとスピードでハイスコアを目指してください。"
            },
            ko: {
                title: "트램펄린 농구",
                desc: "트램펄린 농구의 짜릿한 세계에 오신 것을 환영합니다! 점프하고, 조준하고, 빨간 버킷에 공을 넣어서 결승선까지 도달하세요. 레벨을 클리어하여 새로운 도전을 잠금 해제하고, 정확도와 속도를 발휘해 최고 점수를 획득하도록 노력해 보세요."
            }
        }, {
            index: 8,
            name: "the_domino",
            rate: 0,
            ru: {
                title: "Домино",
                desc: "Классическая игра с простыми правилами и понятным управлением. Выкладывайте костяшки, подбирайте лучшие ходы, блокируйте соперников и старайтесь первым избавиться от всех доминошек."
            },
            en: {
                title: "Dominoes",
                desc: "A classic game with simple rules and easy-to-understand controls. Place your dominoes, choose the best moves, block your opponents, and try to be the first to get rid of all your dominoes."
            },
            de: {
                title: "Domino",
                desc: "Ein klassisches Spiel mit einfachen Regeln und intuitiver Steuerung. Lege die Dominosteine aus, wähle die besten Züge aus, blockiere deine Gegner und versuche, als Erster alle Dominosteine loszuwerden."
            },
            fr: {
                title: "Dominos",
                desc: "Un jeu classique aux règles simples et aux commandes intuitives. Placez vos dominos, choisissez les meilleurs coups, bloquez vos adversaires et tâchez d'être le premier à vous débarrasser de tous vos dominos."
            },
            it: {
                title: "Domino",
                desc: "Un classico con regole semplici e comandi intuitivi. Gioca le tessere, scegli le mosse migliori, blocca gli avversari e cerca di liberarti per primo di tutte le tessere."
            },
            es: {
                title: "Dominó",
                desc: "Un juego clásico con reglas simples y controles intuitivos. Coloca las fichas, elige las mejores jugadas, bloquea a tus rivales e intenta ser el primero en quedarte sin fichas de dominó."
            },
            zh: {
                title: "多米诺骨牌",
                desc: "经典玩法，简单规则，轻松操作，带来纯粹的休闲体验。合理出牌，制定最佳策略，阻挡对手行动，率先清空所有骨牌，赢得胜利。"
            },
            ja: {
                title: "ドミノ",
                desc: "シンプルなルールと分かりやすい操作が魅力の定番ドミノゲーム。タイルを配置し、最善の一手を考え、相手をブロックしながら、誰よりも早く手持ちのドミノをなくしましょう。"
            },
            ko: {
                title: "도미노 ",
                desc: "규칙이 간단하고 조작법이 직관적인 고전 게임입니다. 패를 내려놓으며 가장 좋은 수를 골라내고, 상대를 막아내면서 누구보다 빠르게 여러분의 도미노를 모두 털어내 보세요."
            }
        }, {
            index: 9,
            name: "screwdom",
            rate: 0,
            ru: {
                title: "Достань Винтик: Головоломка",
                desc: "Выкручивай винты, освобождай детали и ищи верную последовательность! Каждый уровень становится сложнее и требует внимательности и логики. Простое управление, сложные загадки - увлекательно для всех возрастов!"
            },
            en: {
                title: "Get the Screw - Puzzle",
                desc: "Unscrew the bolts, remove the parts, and figure out the right sequence! Each level gets harder and requires attention to detail and logical thinking. Simple controls, challenging puzzles—fun for all ages!"
            },
            de: {
                title: "Hol die Schraube heraus – Rätsel",
                desc: "Drehe die Schrauben heraus, löse die Teile und finde die richtige Reihenfolge! Jedes Level wird schwieriger und erfordert Aufmerksamkeit und logisches Denken. Einfache Steuerung, knifflige Rätsel – ein Spielspaß für alle Altersgruppen!"
            },
            fr: {
                title: "Enlève une vis - Casse-tête",
                desc: "Dévissez des vis, retirez des pièces et trouvez la bonne séquence de mouvements! Chaque niveau est encore plus difficile et exige de la concentration et de la logique. Des commandes simples, des énigmes complexes: un jeu passionnant pour tous les âges!"
            },
            it: {
                title: "Rompicapo delle viti incastrate",
                desc: "Svita le viti, libera i componenti e trova la sequenza giusta! Ogni livello diventa progressivamente più impegnativo, richiedendo attenzione e logica. Comandi semplici, enigmi complessi: divertimento per tutte le età!"
            },
            es: {
                title: "«Sacar el tornillo» - Rompecabezas",
                desc: "¡Desatornilla los tornillos, libera las piezas y busca el orden correcto! Cada nivel se hace más complicado y requiere atención y lógica. Controles sencillos, acertijos desafiantes: ¡divertido para todas las edades!"
            },
            zh: {
                title: "拆螺丝益智挑战",
                desc: "旋转螺丝，释放卡住的零件，寻找正确的拆解顺序！每一关难度逐步提升，更加考验你的观察力与逻辑思维。简单操作，烧脑谜题，适合所有年龄段的解压益智游戏体验！"
            },
            ja: {
                title: "ネジを外せ！パズル",
                desc: "ネジを外し、パーツを解放し、正しい手順を見つけましょう！ステージが進むごとに難易度が上がり、注意力と論理力が試されます。簡単操作で奥深い謎解きを楽しめる、誰でも遊べるパズルゲームです！"
            },
            ko: {
                title: "나사 뽑기 - 퍼즐",
                desc: "나사를 풀고, 부품을 분리하면서 올바른 순서를 찾아보세요! 레벨이 올라갈수록 난이도가 높아지므로 집중력과 논리적 사고력이 필요합니다. 간편한 조작과 정교한 퍼즐로 모든 연령대가 즐길 수 있는 게임입니다!"
            }
        }, {
            index: 10,
            name: "traffic_rider",
            rate: 12,
            ru: {
                title: "Езда на мотоцикле: Мотогонщик",
                desc: "Динамичная гоночная игра, где вы мчитесь по дорогам, обходите транспорт и стараетесь проехать как можно дальше. Улучшайте характеристики и проверяйте реакцию в скоростных заездах!"
            },
            en: {
                title: "Motorcycling: Motorcycle Racer",
                desc: "A fast-paced racing game where you speed down the roads, dodge other vehicles, and try to go as far as possible. Upgrade your car's performance and test your reflexes in high-speed races!"
            },
            de: {
                title: "Motorradfahren: Motorradrennfahrer",
                desc: "Ein dynamisches Rennspiel, in dem du über die Straßen rast, andere Fahrzeuge überholst und versuchst, so weit wie möglich zu kommen. Verbessere deine Werte und teste deine Reaktion in rasanten Rennen!"
            },
            fr: {
                title: "La course moto: Le motard",
                desc: "Un jeu de course dynamique où vous parcourez des routes à toute vitesse, slalomez entre les véhicules et tâchez d'aller le plus loin possible. Améliorez vos performances et testez vos réflexes lors de courses de vitesse!"
            },
            it: {
                title: "Corse in moto: Il pilota",
                desc: "Un gioco di corse dinamico dove sfrecci sulle strade, superi i veicoli e cerchi di andare il più lontano possibile. Migliora le prestazioni e metti alla prova i tuoi riflessi nelle gare ad alta velocità!"
            },
            es: {
                title: "Conducción de motocicleta: Motociclista",
                desc: "Un juego de carreras trepidante en el que tendrás que correr por las carreteras, esquivar a otros vehículos e intentar llegar lo más lejos posible. ¡Mejora las características y pon a prueba tus reflejos en carreras rápidas!"
            },
            zh: {
                title: "极速赛车：摩托竞速王",
                desc: "一款高速竞速游戏，驾驶车辆在道路上飞驰，灵活躲避车流，尽可能跑得更远。升级车辆性能，在极速挑战中不断突破反应极限，体验紧张刺激的飙车快感！ "
            },
            ja: {
                title: "バイクライド：モトレーサー",
                desc: "道路を駆け抜け、車を避けながらできるだけ遠くまで走る爽快バイクレースゲーム。バイクの性能を強化し、ハイスピードなレースで反射神経を試しましょう！"
            },
            ko: {
                title: "오토바이 운전: 모터레이서",
                desc: "도로를 질주하며 다른 차량을 피하고, 가능한 한 멀리까지 달려나가는 역동적인 레이싱 게임입니다. 성능을 향상시키고 초고속 주행을 즐기면서 여러분의 순발력을 확인해 보세요!"
            }
        }, {
            index: 11,
            name: "dreamy_room",
            rate: 6,
            ru: {
                title: "Комната мечты: Расстановка предметов",
                desc: "Расслабляющая игра про порядок и уют. Расставляй мебель, раскладывай предметы по местам и создавай комнату мечты. Простое управление, приятная атмосфера и спокойный геймплей для всех возрастов!"
            },
            en: {
                title: "The Dream Room: Arranging the Furniture",
                desc: "A relaxing game about organization and coziness. Arrange furniture, put items in their places, and create the room of your dreams. Simple controls, a pleasant atmosphere, and laid-back gameplay for all ages!"
            },
            de: {
                title: "Das Traumzimmer: Einrichtung nach Wunsch",
                desc: "Ein entspannendes Spiel rund um Ordnung und Gemütlichkeit. Stelle die Möbel auf, ordne die Gegenstände an ihren Plätzen an und gestalte deinen Traumraum. Einfache Steuerung, angenehme Atmosphäre und entspanntes Gameplay für alle Altersgruppen!"
            },
            fr: {
                title: "La chambre de mes rêves: je de rangement",
                desc: "Un jeu apaisant sur l'ordre et le confort. Disposez des meubles, rangez des objets et créez une pièce de vos rêves. Des commandes simples, une ambiance agréable et un gameplay tranquille pour tous les âges!"
            },
            it: {
                title: "Stanza dei sogni: riorganizzazione degli oggetti",
                desc: "Un gioco rilassante dedicato all’ordine e al comfort. Disponi i mobili, sistema gli oggetti al loro posto e crea la stanza dei tuoi sogni. Comandi semplici, atmosfera piacevole e gameplay rilassante per tutte le età!"
            },
            es: {
                title: "La habitación de tus sueños: distribución de objetos",
                desc: "Un juego relajante sobre orden y confort. Ubica muebles, organiza objetos y crea la habitación de tus sueños. ¡Controles sencillos, ambiente agradable y jugabilidad relajada para todas las edades!"
            },
            zh: {
                title: "梦想房间：家居布置大师",
                desc: "一款轻松治愈的整理收纳游戏。摆放家具，整理物品，让房间恢复整洁与温馨。简单操作，舒适氛围，适合所有年龄段的放松体验！"
            },
            ja: {
                title: "ドリームルーム：アイテム配置",
                desc: " 整理整頓と癒やしがテーマのリラックスゲーム。 家具を配置し、アイテムを片付けて理想のお部屋を作りましょう。簡単操作と心地よい雰囲気で、誰でものんびり楽しめます！"
            },
            ko: {
                title: "꿈의 방: 가구 배치",
                desc: "정리와 아늑함을 주제로 한 편안한 게임입니다. 가구를 배치하고, 물건들을 제자리에 놓으며 꿈에 그리던 방을 만들어 보세요. 간편한 조작법, 즐거운 분위기로 모든 연령대가 즐길 수 있는 여유로운 게임입니다!"
            }
        }, {
            index: 13,
            name: "jewels_palace",
            rate: 6,
            ru: {
                title: "Найди сокровища: Три в ряд",
                desc: "Яркая игра, где нужно собирать комбинации, проходить уровни и искать необычные сокровища. Используйте бонусы, продумывайте ходы и отправляйтесь в приключение через сотни увлекательных испытаний!"
            },
            en: {
                title: "Find the Treasure - Match 3",
                desc: "A vibrant game where you have to make combinations, complete levels, and search for unusual treasures. Use bonuses, plan your moves, and set off on an adventure through hundreds of exciting challenges!"
            },
            de: {
                title: "Finde die Schätze – Drei in einer Reihe",
                desc: "Ein farbenfrohes Spiel, bei dem man Kombinationen bilden, Level meistern und nach ungewöhnlichen Schätzen suchen muss. Nutze die Boni, überlege dir deine Züge gut und begib dich auf ein Abenteuer durch Hunderte spannender Herausforderungen!"
            },
            fr: {
                title: "La chasse aux trésors - Match 3",
                desc: "Un jeu haut en couleurs où il faut former des combinaisons, passer des niveaux et chercher des trésors insolites. Profitez des bonus, réfléchissez bien à vos coups et lancez-vous dans une aventure ponctuée de centaines d'épreuves passionnantes!"
            },
            it: {
                title: "Trova i tesori - Tre di fila",
                desc: "Un gioco vivace dove devi creare combinazioni, superare livelli e cercare tesori insoliti. Usa i bonus, pianifica le mosse e parti per un’avventura tra centinaia di sfide appassionanti!"
            },
            es: {
                title: "Encontrar tesoros - Tres en línea",
                desc: "Un emocionante juego en el que tienes que formar combinaciones, superar niveles y buscar tesoros increíbles. ¡Utiliza bonificaciones, piensa bien tus jugadas y embárcate en una aventura a través de cientos de emocionantes pruebas!"
            },
            zh: {
                title: "寻宝三消：宝藏连线",
                desc: "这是一款色彩丰富的三消闯关游戏。收集组合，完成关卡挑战，寻找稀有宝藏。合理使用道具，规划每一步行动，在数百个精彩关卡中开启冒险之旅！"
            },
            ja: {
                title: "宝探し：マッチ3",
                desc: "組み合わせを作ってステージをクリアし、不思議な宝物を探すカラフルなパズルゲーム。ブースターを活用し、戦略を練りながら、何百もの楽しいステージを冒険しましょう！"
            },
            ko: {
                title: "보물 찾기 - 3 매치 퍼즐",
                desc: "조합을 완성하고, 레벨을 클리어하며, 독특한 보물을 찾아야 하는 화려한 게임입니다. 다양한 보너스 아이템을 활용하고, 전략을 세우며, 수백 가지의 흥미진진한 시련을 헤쳐 나가는 모험을 떠나보세요!"
            }
        }, {
            index: 14,
            name: "horror_haze",
            rate: 16,
            ru: {
                title: "Побег из Портала",
                desc: "Вы застряли между мирами. Исследуйте катакомбы, обходите ловушки, решайте головоломки и сражайтесь с монстрами. Найдите способ активировать портал и выбраться!"
            },
            en: {
                title: "Escape from the Portal",
                desc: "You're stuck between worlds. Explore the catacombs, avoid traps, solve puzzles, and battle monsters. Find a way to activate the portal and escape!"
            },
            de: {
                title: "Die Flucht aus dem Portal",
                desc: "Du steckst zwischen zwei Welten fest. Erkunde die Katakomben, weiche den Fallen aus, löse Rätsel und kämpfe gegen Monster. Find einen Weg, das Portal zu aktivieren und zu entkommen!"
            },
            fr: {
                title: "Portal Escape",
                desc: "Vous êtes coincé entre deux mondes. Explorez les catacombes, évitez les pièges, résolvez des énigmes et affrontez des monstres. Trouvez un moyen d'activer le portail pour vous échapper!"
            },
            it: {
                title: "Fuga dal Portale",
                desc: "Sei rimasto intrappolato tra due mondi. Esplora le catacombe, evita le trappole, risolvi enigmi e combatti contro i mostri. Trova il modo di attivare il portale ed evadere!"
            },
            es: {
                title: "Escape del Portal",
                desc: "Estás atrapado entre mundos. Explora catacumbas, esquiva trampas, resuelve acertijos y enfréntate a monstruos. ¡Encuentra cómo activar el portal y escapar!"
            },
            zh: {
                title: "逃离传送门",
                desc: "你被困在两个世界之间。探索地下迷宫，躲避致命陷阱，破解复杂谜题，并与怪物战斗。寻找激活传送门的方法，努力逃离这个未知世界！"
            },
            ja: {
                title: "ポータルからの脱出",
                desc: "あなたは世界と世界の狭間に閉じ込められてしまいました。地下迷宮を探索し、罠を避け、謎を解き、モンスターと戦いましょう。ポータルを起動して脱出する方法を見つけよう！"
            },
            ko: {
                title: "포털 탈출",
                desc: "여러분은 두 세계 사이에 갇혀 있습니다. 지하 미궁을 탐험하며 함정을 피하고, 퍼즐을 풀어 몬스터들을 물리치세요. 포털을 활성화하고 탈출할 방법을 찾아보세요!"
            }
        },  {
            index: 15,
            name: "gas_station",
            rate: 12,
            ru: {
                title: "Симулятор заправки: Стикман",
                desc: "Веселая игра про развитие собственной заправки. Обслуживайте машины, улучшайте станцию, открывайте магазин, кафе и новые зоны, нанимайте помощников и превращайте маленькую заправку в прибыльный бизнес!"
            },
            en: {
                title: "Gas Station Simulator - Stickman",
                desc: "A fun game about building your own gas station. Serve customers, upgrade your station, open a store, a café, and new areas, hire assistants, and turn your small gas station into a profitable business!"
            },
            de: {
                title: "Tankstellen-Simulator – Stickman",
                desc: "Ein unterhaltsames Spiel, bei dem du deine eigene Tankstelle aufbaust und entwickelst. Warte die Fahrzeuge, verbessere die Tankstelle, eröffne einen Laden, ein Café und neue Bereiche, stelle Mitarbeiter ein und verwandle die kleine Tankstelle in ein profitables Unternehmen!"
            },
            fr: {
                title: "Jeu de simulation station-service - Stickman",
                desc: "Un jeu amusant sur le développement de sa propre station-service. Entretenez les véhicules, améliorez la station-service, ouvrez une boutique, un café et de nouvelles zones, embauchez des assistants et faites de cette petite station-service une entreprise prospère!"
            },
            it: {
                title: "Gas Station - Stick Simulator",
                desc: "Un gioco divertente sulla gestione della propria stazione di servizio. Servi le auto, migliora la stazione, apri negozio, caffetteria e nuove aree, assumi aiutanti e trasforma una piccola stazione in un’attività redditizia!"
            },
            es: {
                title: "Simulador de gasolinera - Stickman",
                desc: "Un divertido juego sobre el desarrollo de tu propia gasolinera. Haz el mantenimiento de los vehículos, mejora la estación, abre una tienda, una cafetería y nuevas zonas, contrata a ayudantes y convierte una pequeña gasolinera en un negocio rentable."
            },
            zh: {
                title: "火柴人加油站模拟器",
                desc: "一款轻松有趣的加油站经营游戏。为车辆提供服务，升级你的加油站，解锁商店、咖啡厅和更多功能区域。雇佣员工，优化运营，把小型加油站逐步发展成高收益商业帝国！"
            },
            ja: {
                title: "ガソリンスタンドシミュレーター：スティックマン",
                desc: "自分のガソリンスタンドを経営する楽しいゲームです。車をサービスし、スタンドをアップグレードし、ショップやカフェ、新エリアを開設してスタッフを雇い、小さなガソリンスタンドを収益性の高いビジネスに成長させよう！"
            },
            ko: {
                title: "주유 시뮬레이터 - 스틱맨",
                desc: "자신만의 주유소를 운영해 나가는 재미있는 게임입니다. 차량을 정비하고, 주유소를 개선하며, 상점과 카페, 새로운 구역을 개설하고, 직원을 고용하여 작은 주유소를 수익성 높은 사업으로 키워보세요!"
            }
        }, {
            index: 16,
            name: "dinosaur_land",
            rate: 6,
            ru: {
                title: "Твоя ферма динозавров",
                desc: "Игра, где вы создаете и развиваете собственную ферму с динозаврами. Ухаживайте за доисторическими существами, расширяйте территорию, открывайте новые виды и превращайте ферму в настоящий парк динозавров."
            },
            en: {
                title: "Your Dinosaur Farm",
                desc: "A game where you build and grow your own dinosaur farm. Take care of prehistoric creatures, expand your territory, discover new species, and turn your farm into a real dinosaur park."
            },
            de: {
                title: "Deine Dinosaurierfarm",
                desc: "Ein Spiel, in dem du deine eigene Dinosaurierfarm aufbaust und weiterentwickelst. Kümmere dich um prähistorische Lebewesen, erweitere dein Territorium, entdecke neue Arten und verwandle deine Farm in einen echten Dinosaurierpark."
            },
            fr: {
                title: "Ta ferme de dinosaures",
                desc: "Un jeu pour construire son exploitation et élever des dinosaures. Prenez soin de créatures préhistoriques, agrandissez votre domaine, découvrez de nouvelles espèces et transformez votre ferme en un véritable parc de dinosaures."
            },
            it: {
                title: "La tua fattoria di dinosauri",
                desc: "Un gioco in cui crei e sviluppi la tua fattoria di dinosauri. Prenditi cura delle creature preistoriche, amplia il territorio, scopri nuove specie e trasforma la fattoria in un vero parco dei dinosauri."
            },
            es: {
                title: "Tu granja de dinosaurios",
                desc: "Un juego en el que creas y gestionas tu propia granja de dinosaurios. Cuida de las criaturas prehistóricas, amplía el territorio, descubre nuevas especies y convierte tu granja en un auténtico parque de dinosaurios."
            },
            zh: {
                title: "你的恐龙农场",
                desc: "打造并经营属于你的恐龙农场世界。悉心照顾史前巨兽，扩展你的领地，解锁更多恐龙物种，逐步将农场发展成壮观的恐龙主题乐园。"
            },
            ja: {
                title: "恐竜ファーム",
                desc: "自分だけの恐竜ファームを作り上げる育成ゲームです。太古の生き物たちのお世話をし、土地を広げ、新しい種類の恐竜を発見して、本格的な恐竜パークへと発展させましょう。"
            },
            ko: {
                title: "나만의 공룡 농장",
                desc: "공룡과 함께 나만의 농장을 건설하고 발전시켜 나가는 게임입니다. 선사 시대의 생물들을 돌보고, 영토를 확장하며, 새로운 종을 발견하면서 농장을 진정한 공룡 공원으로 만들어 보세요."
            }
        }, {
            index: 17,
            name: "bear_shooter",
            rate: 0,
            ru: {
                title: "Шарики стрельба",
                desc: "Лопай шарики меткими выстрелами! Собирай комбинации, круши стеклянные пузыри и проходи уровни. Армия пузырей не устоит!"
            },
            en: {
                title: "Ball Shooting",
                desc: "Pop the bubbles with well-aimed shots! Make combinations, burst the glass bubbles, and beat the levels. The bubble army won't stand a chance!"
            },
            de: {
                title: "Kugelschießen",
                desc: "Zerschieße die Bälle mit gezielten Schüssen! Bilde Kombinationen, zerplatze die Glasblasen und meistere die Level. Die Blasenarmee wird nicht standhalten!"
            },
            fr: {
                title: "Bubble Shooter",
                desc: "Faites éclater des bulles avec des tirs précis! Créez des combinaisons, faites éclater des bulles de verre et passez des niveaux. L'armée des bulles ne tiendra pas le coup!"
            },
            it: {
                title: "Bubble Shooter",
                desc: "Fai scoppiare le palline con tiri precisi! Crea combinazioni, rompi bolle di vetro e supera i livelli. L’esercito delle bolle non resisterà!"
            },
            es: {
                title: "Tiro con bolas",
                desc: "¡Revienta las bolas con disparos precisos! Forma combinaciones, rompe burbujas de cristal y completa niveles. ¡El ejército de burbujas no resistirá!"
            },
            zh: {
                title: "泡泡射击",
                desc: "精准射击，击破彩色泡泡，完成连锁消除！组合强力连击，粉碎玻璃气泡，在关卡中不断突破。泡泡军团无法抵挡你的火力！"
            },
            ja: {
                title: "バブルシューター",
                desc: "狙いを定めてバブルをはじこう！コンボを作り、ガラスのバブルを壊してステージをクリア。バブル軍団に勝利しましょう！"
            },
            ko: {
                title: "버블 슈터",
                desc: "정확한 사격으로 풍선을 터뜨리세요! 조합을 만들어 유리 방울을 터뜨리고 레벨을 클리어하세요. 거품 군대는 버텨내지 못할 것입니다!"
            }
        }, {
            index: 18,
            name: "billiards",
            rate: 0,
            ru: {
                title: "Бильярд",
                desc: "Проверьте свою точность, рассчитывайте удары и станьте мастером бильярда."
            },
            en: {
                title: "Billiards",
                desc: "Test your accuracy, calculate your shots, and become a master of billiards."
            },
            de: {
                title: "Billard",
                desc: "Testen Sie Ihre Präzision, planen Sie Ihre Stöße und werden Sie zum Billardmeister."
            },
            fr: {
                title: "Billard",
                desc: "Testez votre précision, calculez vos coups et devenez un maître du billard."
            },
            it: {
                title: "Biliardo",
                desc: "Metti alla prova la tua precisione, calcola i tuoi colpi e diventa un maestro del biliardo."
            },
            es: {
                title: "Billar",
                desc: "Pon a prueba tu precisión, calcula tus golpes y conviértete en un maestro del billar."
            },
            zh: {
                title: "台球",
                desc: "考验你的精准度，计算每一次击球，成为台球大师。"
            },
            ja: {
                title: "ビリヤード",
                desc: "正確さを試し、一打一打を計算して、ビリヤードの達人を目指しましょう。"
            },
            ko: {
                title: "당구",
                desc: "정확도를 시험하고, 샷을 계산하며, 당구의 달인이 되어 보세요."
            }
        }, {
            index: 19,
            name: "nardi",
            rate: 0,
            ru: {
                title: "Нарды",
                desc: "Игра для двух игроков, цель игрока во время игры — бросая кости и передвигая шашки в соответствии с выпавшими очками, переместить все свои шашки в определенную область игрового поля раньше противника."
            },
            en: {
                title: "Backgammon",
                desc: "A game for two players. The objective is to roll the dice and move your checkers according to the numbers rolled, bringing all your checkers into the designated area of the board before your opponent."
            },
            de: {
                title: "Backgammon",
                desc: "Ein Spiel für zwei Spieler. Ziel des Spiels ist es, die Würfel zu werfen und die Spielsteine entsprechend den gewürfelten Zahlen zu ziehen, um alle eigenen Spielsteine vor dem Gegner in den Zielbereich des Spielbretts zu bringen."
            },
            fr: {
                title: "Backgammon",
                desc: "Un jeu pour deux joueurs. Le but est de lancer les dés et de déplacer ses pions selon les résultats obtenus afin d'amener tous ses pions dans la zone d'arrivée avant son adversaire."
            },
            it: {
                title: "Backgammon",
                desc: "Un gioco per due giocatori. L'obiettivo è lanciare i dadi e muovere le proprie pedine in base ai risultati ottenuti, portando tutte le pedine nell'area di arrivo prima dell'avversario."
            },
            es: {
                title: "Backgammon",
                desc: "Un juego para dos jugadores. El objetivo es lanzar los dados y mover las fichas según los puntos obtenidos, llevando todas tus fichas a la zona de destino antes que tu oponente."
            },
            zh: {
                title: "双陆棋",
                desc: "一款双人游戏。玩家需要掷骰子，并根据点数移动棋子，在对手之前将所有棋子移动到棋盘的目标区域。"
            },
            ja: {
                title: "バックギャモン",
                desc: "2人用のゲームです。サイコロを振り、出た目に従って駒を動かし、相手より先に自分の駒をすべて所定のエリアへ運ぶことが目的です。"
            },
            ko: {
                title: "백개먼",
                desc: "2인용 게임입니다. 주사위를 굴리고 나온 숫자에 따라 말을 이동하여, 상대보다 먼저 자신의 모든 말을 목표 구역으로 옮기는 것이 목표입니다."
            }
        }],
        n = location.pathname.match(/_(\w+)\.html$/),
        r = n ? n[1] : "ru";
    var o;

    function l(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function d(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
            void 0 === e[s] ? e[s] = t[s] : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 && d(e[s], t[s])
        }))
    }! function (t) {
        e ? (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).forEach((s => {
            const i = t.find((g => g.index === s));
            if (!i) return;
            const a = `\n      <div class="swiper-slide" data-graph-path="${i.index}">\n        <h1 class="slide-title">${i[r]?.title||""}</h1>\n        <img src="img/${i.name}__slider.png" alt="${i.name} cover">\n      </div>`;
            e.insertAdjacentHTML("beforeend", a)
        })) : console.warn("sliderContainer не найден в DOM")
    }(a, SLIDER_GAME_INDEXES),
    function (e) {
        e.forEach((e => {
            const s = `<div class="cards__item" data-graph-path="${e.index}">\n        <img class="cards__item__cover" src="img/${e.name}.jpg" alt="Cover">\n        <div class="cards__item__info">\n          <h2 class="cards__item__info__title">${e[r]?.title||""}</h2>\n          <div class="cards__item__info__age">${e.rate}+</div>\n        </div>\n      </div>`;
            t.insertAdjacentHTML("beforeend", s)
        }))
    }(a),
    function (e) {
        e.forEach((e => {
            const t = `<div class="graph-modal__container" role="dialog" aria-modal="true" data-graph-target="${e.index}">\n\n      <div class="graph-modal__controls">\n\n          <button class="btn-reset button js-modal-close">\n            <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M12.7499 27.54L2.42658 17.2167C1.20742 15.9975 1.20742 14.0025 2.42658 12.7833L12.7499 2.45999" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            <p data-i18n="btnBack">Назад</p>\n          </button>\n\n          <button class="btn-reset button game-launcher" data-url="games/${e.name}/index.html">\n            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M13.9929 19.1484L18.0463 15.0951L13.9929 11.0417" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M1.83398 15.095H17.9365" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M14.5 2.33325C21.4983 2.33325 27.1667 7.08325 27.1667 14.9999C27.1667 22.9166 21.4983 27.6666 14.5 27.6666" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            <p data-i18n="btnPlay">Играть</p>\n          </button>\n\n      </div>\n\n      <div class="graph-modal__content">\n\n        <div class="graph-modal__title">\n          <h1 class="title">${e[r]?.title||""}</h1>\n          <p class="age">${e.rate}+</p>\n        </div>\n\n        <div class="graph-modal__info">\n          <div class="head">\n\n            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="5" viewBox="0 0 30 5" preserveAspectRatio="none">\n              <line x1="0" y1="3" x2="30" y2="3" />\n            </svg>\n\n            <h3 data-i18n="howPlay">Как играть</h3>\n\n            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="5" viewBox="0 0 30 5" preserveAspectRatio="none">\n              <line x1="0" y1="3" x2="30" y2="3" />\n            </svg>\n\n          </div>\n\n          <div class="info">\n            <p>${e[r]?.desc||""}</p>\n            <p data-i18n="control">Управление - тач</p>\n          </div>\n\n        </div>\n\n        <div class="graph-modal__screens">\n          <img src="img/${e.name}__screen_1.jpg" alt="screen" onerror="this.src='img/blanc.png'">\n          <img src="img/${e.name}__screen_2.jpg" alt="screen" onerror="this.src='img/blanc.png'">\n          <img src="img/${e.name}__screen_3.jpg" alt="screen" onerror="this.src='img/blanc.png'">\n        </div>\n\n      </div>\n    </div>`;
            s.insertAdjacentHTML("beforeend", t)
        }))
    }(a), o = r, document.querySelectorAll("[data-i18n]").forEach((e => {
        const t = e.dataset.i18n;
        i[o] && i[o][t] && (e.textContent = i[o][t])
    })), document.documentElement.lang = o, setTimeout((() => {
        "function" == typeof initSwiper ? (initSwiper(), console.log(`Swiper initialized with language: ${r}`)) : console.warn("initSwiper is not defined yet")
    }), 100);
    const c = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function u() {
        const e = "undefined" != typeof document ? document : {};
        return d(e, c), e
    }
    const p = {
        document: c,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function m() {
        const e = "undefined" != typeof window ? window : {};
        return d(e, p), e
    }

    function h(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function g() {
        return Date.now()
    }

    function f(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function v() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
            const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != a && (s = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t],
                        n = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== n && n.enumerable && (f(e[i]) && f(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : v(e[i], a[i]) : !f(e[i]) && f(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : v(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        var s;
        return e
    }

    function b(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: i
        } = e;
        const a = m(),
            n = -t.translate;
        let r, o = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
        const d = s > n ? "next" : "prev",
            c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
            u = () => {
                r = (new Date).getTime(), null === o && (o = r);
                const e = Math.max(Math.min((r - o) / l, 1), 0),
                    d = .5 - Math.cos(e * Math.PI) / 2;
                let p = n + d * (s - n);
                if (c(p, s) && (p = s), t.wrapperEl.scrollTo({
                        [i]: p
                    }), c(p, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [i]: p
                    })
                })), void a.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = a.requestAnimationFrame(u)
            };
        u()
    }

    function y(e, t) {
        void 0 === t && (t = "");
        const s = m(),
            i = [...e.children];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
    }

    function S(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }

    function T(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function (e) {
            return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
    }

    function x(e, t) {
        return m().getComputedStyle(e, null).getPropertyValue(t)
    }

    function E(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
            return t
        }
    }

    function C(e, t) {
        const s = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
        return s
    }

    function k(e, t, s) {
        const i = m();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function M(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
    }
    let P, z, L;

    function A() {
        return P || (P = function () {
            const e = m(),
                t = u();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), P
    }

    function D(e) {
        return void 0 === e && (e = {}), z || (z = function (e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = A(),
                i = m(),
                a = i.navigator.platform,
                n = t || i.navigator.userAgent,
                r = {
                    ios: !1,
                    android: !1
                },
                o = i.screen.width,
                l = i.screen.height,
                d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === a;
            let g = "MacIntel" === a;
            return !c && g && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), g = !1), d && !h && (r.os = "android", r.android = !0), (c || p || u) && (r.os = "ios", r.ios = !0), r
        }(e)), z
    }

    function O() {
        return L || (L = function () {
            const e = m(),
                t = D();
            let s = !1;

            function i() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (i()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    s = e < 16 || 16 === e && i < 2
                }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                n = i();
            return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || a && t.ios,
                isWebView: a
            }
        }()), L
    }
    var I = {
        on(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const a = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
            })), i
        },
        once(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;

            function a() {
                i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
                t.apply(i, n)
            }
            return a.__emitterProxy = t, i.on(e, a, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const i = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, a) => {
                    (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(a, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, i;
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
            return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(i, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(i, s)
                }))
            })), e
        }
    };
    const _ = (e, t, s) => {
            t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        G = (e, t, s) => {
            t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        B = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        },
        j = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        },
        q = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                a = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = a,
                    n = [s - t];
                return n.push(...Array.from({
                    length: t
                }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
                    n.includes(t.column) && j(e, s)
                }))
            }
            const n = a + i - 1;
            if (e.params.rewind || e.params.loop)
                for (let i = a - t; i <= n + t; i += 1) {
                    const t = (i % s + s) % s;
                    (t < a || t > n) && j(e, t)
                } else
                    for (let i = Math.max(a - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== a && (i > n || i < a) && j(e, i)
        };
    var $ = {
        updateSize: function () {
            const e = this;
            let t, s;
            const i = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(x(i, "padding-left") || 0, 10) - parseInt(x(i, "padding-right") || 0, 10), s = s - parseInt(x(i, "padding-top") || 0, 10) - parseInt(x(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function () {
            const e = this;

            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }
            const s = e.params,
                {
                    wrapperEl: i,
                    slidesEl: a,
                    size: n,
                    rtlTranslate: r,
                    wrongRTL: o
                } = e,
                l = e.virtual && s.virtual.enabled,
                d = l ? e.virtual.slides.length : e.slides.length,
                c = y(a, `.${e.params.slideClass}, swiper-slide`),
                u = l ? e.virtual.slides.length : c.length;
            let p = [];
            const m = [],
                h = [];
            let g = s.slidesOffsetBefore;
            "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
            let f = s.slidesOffsetAfter;
            "function" == typeof f && (f = s.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
                w = e.slidesGrid.length;
            let S = s.spaceBetween,
                T = -g,
                E = 0,
                C = 0;
            if (void 0 === n) return;
            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * n : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, c.forEach((e => {
                r ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
            })), s.centeredSlides && s.cssMode && (b(i, "--swiper-centered-offset-before", ""), b(i, "--swiper-centered-offset-after", ""));
            const M = s.grid && s.grid.rows > 1 && e.grid;
            let P;
            M ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const z = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < u; i += 1) {
                let a;
                if (P = 0, c[i] && (a = c[i]), M && e.grid.updateSlide(i, a, c), !c[i] || "none" !== x(a, "display")) {
                    if ("auto" === s.slidesPerView) {
                        z && (c[i].style[e.getDirectionLabel("width")] = "");
                        const n = getComputedStyle(a),
                            r = a.style.transform,
                            o = a.style.webkitTransform;
                        if (r && (a.style.transform = "none"), o && (a.style.webkitTransform = "none"), s.roundLengths) P = e.isHorizontal() ? k(a, "width", !0) : k(a, "height", !0);
                        else {
                            const e = t(n, "width"),
                                s = t(n, "padding-left"),
                                i = t(n, "padding-right"),
                                r = t(n, "margin-left"),
                                o = t(n, "margin-right"),
                                l = n.getPropertyValue("box-sizing");
                            if (l && "border-box" === l) P = e + r + o;
                            else {
                                const {
                                    clientWidth: t,
                                    offsetWidth: n
                                } = a;
                                P = e + s + i + r + o + (n - t)
                            }
                        }
                        r && (a.style.transform = r), o && (a.style.webkitTransform = o), s.roundLengths && (P = Math.floor(P))
                    } else P = (n - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (P = Math.floor(P)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${P}px`);
                    c[i] && (c[i].swiperSlideSize = P), h.push(P), s.centeredSlides ? (T = T + P / 2 + E / 2 + S, 0 === E && 0 !== i && (T = T - n / 2 - S), 0 === i && (T = T - n / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && p.push(T), m.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(T), m.push(T), T = T + P + S), e.virtualSize += P + S, E = P, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, n) + f, r && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize+S}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), M && e.grid.updateWrapperSize(P, p), !s.centeredSlides) {
                const t = [];
                for (let i = 0; i < p.length; i += 1) {
                    let a = p[i];
                    s.roundLengths && (a = Math.floor(a)), p[i] <= e.virtualSize - n && t.push(a)
                }
                p = t, Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - n)
            }
            if (l && s.loop) {
                const t = h[0] + S;
                if (s.slidesPerGroup > 1) {
                    const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                        a = t * s.slidesPerGroup;
                    for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + a)
                }
                for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && p.push(p[p.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
            }
            if (0 === p.length && (p = [0]), 0 !== S) {
                const t = e.isHorizontal() && r ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${S}px`
                }))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                h.forEach((t => {
                    e += t + (S || 0)
                })), e -= S;
                const t = e > n ? e - n : 0;
                p = p.map((e => e <= 0 ? -g : e > t ? t + f : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                h.forEach((t => {
                    e += t + (S || 0)
                })), e -= S;
                const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < n) {
                    const s = (n - e - t) / 2;
                    p.forEach(((e, t) => {
                        p[t] = e - s
                    })), m.forEach(((e, t) => {
                        m[t] = e + s
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: p,
                    slidesGrid: m,
                    slidesSizesGrid: h
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                b(i, "--swiper-centered-offset-before", -p[0] + "px"), b(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (u !== d && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`,
                    i = e.el.classList.contains(t);
                u <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function (e) {
            const t = this,
                s = [],
                i = t.virtual && t.params.virtual.enabled;
            let a, n = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const r = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                    s.push(e)
                }));
                else
                    for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                        const e = t.activeIndex + a;
                        if (e > t.slides.length && !i) break;
                        s.push(r(e))
                    } else s.push(r(t.activeIndex));
            for (a = 0; a < s.length; a += 1)
                if (void 0 !== s[a]) {
                    const e = s[a].offsetHeight;
                    n = e > n ? e : n
                }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function () {
            const e = this,
                t = e.slides,
                s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: i,
                    rtlTranslate: a,
                    snapGrid: n
                } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            a && (r = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let o = s.spaceBetween;
            "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
            for (let e = 0; e < i.length; e += 1) {
                const l = i[e];
                let d = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
                const c = (r + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                    u = (r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                    p = -(r - d),
                    m = p + t.slidesSizesGrid[e],
                    h = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
                    g = p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size;
                g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), _(l, g, s.slideVisibleClass), _(l, h, s.slideFullyVisibleClass), l.progress = a ? -c : c, l.originalProgress = a ? -u : u
            }
        },
        updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                i = t.maxTranslate() - t.minTranslate();
            let {
                progress: a,
                isBeginning: n,
                isEnd: r,
                progressLoop: o
            } = t;
            const l = n,
                d = r;
            if (0 === i) a = 0, n = !0, r = !0;
            else {
                a = (e - t.minTranslate()) / i;
                const s = Math.abs(e - t.minTranslate()) < 1,
                    o = Math.abs(e - t.maxTranslate()) < 1;
                n = s || a <= 0, r = o || a >= 1, s && (a = 0), o && (a = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0),
                    i = t.getSlideIndexByData(t.slides.length - 1),
                    a = t.slidesGrid[s],
                    n = t.slidesGrid[i],
                    r = t.slidesGrid[t.slidesGrid.length - 1],
                    l = Math.abs(e);
                o = l >= a ? (l - a) / r : (l + r - n) / r, o > 1 && (o -= 1)
            }
            Object.assign(t, {
                progress: a,
                progressLoop: o,
                isBeginning: n,
                isEnd: r
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), r && !d && t.emit("reachEnd toEdge"), (l && !n || d && !r) && t.emit("fromEdge"), t.emit("progress", a)
        },
        updateSlidesClasses: function () {
            const e = this,
                {
                    slides: t,
                    params: s,
                    slidesEl: i,
                    activeIndex: a
                } = e,
                n = e.virtual && s.virtual.enabled,
                r = e.grid && s.grid && s.grid.rows > 1,
                o = e => y(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let l, d, c;
            if (n)
                if (s.loop) {
                    let t = a - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                } else l = o(`[data-swiper-slide-index="${a}"]`);
            else r ? (l = t.find((e => e.column === a)), c = t.find((e => e.column === a + 1)), d = t.find((e => e.column === a - 1))) : l = t[a];
            l && (r || (c = function (e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const i = e.nextElementSibling;
                    t ? i.matches(t) && s.push(i) : s.push(i), e = i
                }
                return s
            }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function (e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const i = e.previousElementSibling;
                    t ? i.matches(t) && s.push(i) : s.push(i), e = i
                }
                return s
            }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                G(e, e === l, s.slideActiveClass), G(e, e === c, s.slideNextClass), G(e, e === d, s.slidePrevClass)
            })), e.emitSlidesClasses()
        },
        updateActiveIndex: function (e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    snapGrid: i,
                    params: a,
                    activeIndex: n,
                    realIndex: r,
                    snapIndex: o
                } = t;
            let l, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
            };
            if (void 0 === d && (d = function (e) {
                    const {
                        slidesGrid: t,
                        params: s
                    } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                    let a;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? a = e : i >= t[e] && i < t[e + 1] && (a = e + 1) : i >= t[e] && (a = e);
                    return s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
                }(t)), i.indexOf(s) >= 0) l = i.indexOf(s);
            else {
                const e = Math.min(a.slidesPerGroupSkip, d);
                l = e + Math.floor((d - e) / a.slidesPerGroup)
            }
            if (l >= i.length && (l = i.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
            if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
            const u = t.grid && a.grid && a.grid.rows > 1;
            let p;
            if (t.virtual && a.virtual.enabled && a.loop) p = c(d);
            else if (u) {
                const e = t.slides.find((e => e.column === d));
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(s / a.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                p = e ? parseInt(e, 10) : d
            } else p = d;
            Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: l,
                previousRealIndex: r,
                realIndex: p,
                previousIndex: n,
                activeIndex: d
            }), t.initialized && q(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (r !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function (e, t) {
            const s = this,
                i = s.params;
            let a = e.closest(`.${i.slideClass}, swiper-slide`);
            !a && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !a && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (a = e)
            }));
            let n, r = !1;
            if (a)
                for (let e = 0; e < s.slides.length; e += 1)
                    if (s.slides[e] === a) {
                        r = !0, n = e;
                        break
                    } if (!a || !r) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
            s.clickedSlide = a, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };

    function F(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: i,
            step: a
        } = e;
        const {
            activeIndex: n,
            previousIndex: r
        } = t;
        let o = i;
        if (o || (o = n > r ? "next" : n < r ? "prev" : "reset"), t.emit(`transition${a}`), s && n !== r) {
            if ("reset" === o) return void t.emit(`slideResetTransition${a}`);
            t.emit(`slideChangeTransition${a}`), "next" === o ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`)
        }
    }
    var N = {
            slideTo: function (e, t, s, i, a) {
                void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
                const n = this;
                let r = e;
                r < 0 && (r = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: c,
                    activeIndex: u,
                    rtlTranslate: p,
                    wrapperEl: m,
                    enabled: h
                } = n;
                if (!h && !i && !a || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
                void 0 === t && (t = n.params.speed);
                const g = Math.min(n.params.slidesPerGroupSkip, r);
                let f = g + Math.floor((r - g) / n.params.slidesPerGroup);
                f >= l.length && (f = l.length - 1);
                const v = -l[f];
                if (o.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * v),
                            s = Math.floor(100 * d[e]),
                            i = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? r = e : t >= s && t < i && (r = e + 1) : t >= s && (r = e)
                    }
                if (n.initialized && r !== u) {
                    if (!n.allowSlideNext && (p ? v > n.translate && v > n.minTranslate() : v < n.translate && v < n.minTranslate())) return !1;
                    if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (u || 0) !== r) return !1
                }
                let b;
                r !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(v), b = r > u ? "next" : r < u ? "prev" : "reset";
                const y = n.virtual && n.params.virtual.enabled;
                if ((!y || !a) && (p && -v === n.translate || !p && v === n.translate)) return n.updateActiveIndex(r), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(v), "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)), !1;
                if (o.cssMode) {
                    const e = n.isHorizontal(),
                        s = p ? v : -v;
                    if (0 === t) y && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                        m[e ? "scrollLeft" : "scrollTop"] = s
                    }))) : m[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame((() => {
                        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                    }));
                    else {
                        if (!n.support.smoothScroll) return w({
                            swiper: n,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        m.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                const S = O().isSafari;
                return y && !a && S && n.isElement && n.virtual.update(!1, !1, r), n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, b), 0 === t ? n.transitionEnd(s, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, b))
                }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function (e, t, s, i) {
                void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
                const a = this;
                if (a.destroyed) return;
                void 0 === t && (t = a.params.speed);
                const n = a.grid && a.params.grid && a.params.grid.rows > 1;
                let r = e;
                if (a.params.loop)
                    if (a.virtual && a.params.virtual.enabled) r += a.virtual.slidesBefore;
                    else {
                        let e;
                        if (n) {
                            const t = r * a.params.grid.rows;
                            e = a.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                        } else e = a.getSlideIndexByData(r);
                        const t = n ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
                            {
                                centeredSlides: s
                            } = a.params;
                        let o = a.params.slidesPerView;
                        "auto" === o ? o = a.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(a.params.slidesPerView, 10)), s && o % 2 == 0 && (o += 1));
                        let l = t - e < o;
                        if (s && (l = l || e < Math.ceil(o / 2)), i && s && "auto" !== a.params.slidesPerView && !n && (l = !1), l) {
                            const i = s ? e < a.activeIndex ? "prev" : "next" : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                            a.loopFix({
                                direction: i,
                                slideTo: !0,
                                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                slideRealIndex: "next" === i ? a.realIndex : void 0
                            })
                        }
                        if (n) {
                            const e = r * a.params.grid.rows;
                            r = a.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                        } else r = a.getSlideIndexByData(r)
                    } return requestAnimationFrame((() => {
                    a.slideTo(r, t, s, i)
                })), a
            },
            slideNext: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this,
                    {
                        enabled: a,
                        params: n,
                        animating: r
                    } = i;
                if (!a || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
                    d = i.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (r && !d && n.loopPreventsSliding) return !1;
                    if (i.loopFix({
                            direction: "next"
                        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                        i.slideTo(i.activeIndex + l, e, t, s)
                    })), !0
                }
                return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
            },
            slidePrev: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this,
                    {
                        params: a,
                        snapGrid: n,
                        slidesGrid: r,
                        rtlTranslate: o,
                        enabled: l,
                        animating: d
                    } = i;
                if (!l || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                const c = i.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (d && !c && a.loopPreventsSliding) return !1;
                    i.loopFix({
                        direction: "prev"
                    }), i._clientLeft = i.wrapperEl.clientLeft
                }

                function u(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const p = u(o ? i.translate : -i.translate),
                    m = n.map((e => u(e))),
                    h = a.freeMode && a.freeMode.enabled;
                let g = n[m.indexOf(p) - 1];
                if (void 0 === g && (a.cssMode || h)) {
                    let e;
                    n.forEach(((t, s) => {
                        p >= t && (e = s)
                    })), void 0 !== e && (g = h ? n[e] : n[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== g && (f = r.indexOf(g), f < 0 && (f = i.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), a.rewind && i.isBeginning) {
                    const a = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(a, e, t, s)
                }
                return a.loop && 0 === i.activeIndex && a.cssMode ? (requestAnimationFrame((() => {
                    i.slideTo(f, e, t, s)
                })), !0) : i.slideTo(f, e, t, s)
            },
            slideReset: function (e, t, s) {
                void 0 === t && (t = !0);
                const i = this;
                if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s)
            },
            slideToClosest: function (e, t, s, i) {
                void 0 === t && (t = !0), void 0 === i && (i = .5);
                const a = this;
                if (a.destroyed) return;
                void 0 === e && (e = a.params.speed);
                let n = a.activeIndex;
                const r = Math.min(a.params.slidesPerGroupSkip, n),
                    o = r + Math.floor((n - r) / a.params.slidesPerGroup),
                    l = a.rtlTranslate ? a.translate : -a.translate;
                if (l >= a.snapGrid[o]) {
                    const e = a.snapGrid[o];
                    l - e > (a.snapGrid[o + 1] - e) * i && (n += a.params.slidesPerGroup)
                } else {
                    const e = a.snapGrid[o - 1];
                    l - e <= (a.snapGrid[o] - e) * i && (n -= a.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, s)
            },
            slideToClickedSlide: function () {
                const e = this;
                if (e.destroyed) return;
                const {
                    params: t,
                    slidesEl: s
                } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let a, n = e.clickedIndex;
                const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex(y(s, `${r}[data-swiper-slide-index="${a}"]`)[0]), h((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex(y(s, `${r}[data-swiper-slide-index="${a}"]`)[0]), h((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n)
                } else e.slideTo(n)
            }
        },
        V = {
            loopCreate: function (e) {
                const t = this,
                    {
                        params: s,
                        slidesEl: i
                    } = t;
                if (!s.loop || t.virtual && t.params.virtual.enabled) return;
                const a = () => {
                        y(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    },
                    n = t.grid && s.grid && s.grid.rows > 1,
                    r = s.slidesPerGroup * (n ? s.grid.rows : 1),
                    o = t.slides.length % r != 0,
                    l = n && t.slides.length % s.grid.rows != 0,
                    d = e => {
                        for (let i = 0; i < e; i += 1) {
                            const e = t.isElement ? T("swiper-slide", [s.slideBlankClass]) : T("div", [s.slideClass, s.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    };
                o ? (s.loopAddBlankSlides ? (d(r - t.slides.length % r), t.recalcSlides(), t.updateSlides()) : S("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : l ? (s.loopAddBlankSlides ? (d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()) : S("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : a(), t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function (e) {
                let {
                    slideRealIndex: t,
                    slideTo: s = !0,
                    direction: i,
                    setTranslate: a,
                    activeSlideIndex: n,
                    byController: r,
                    byMousewheel: o
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: d,
                    allowSlidePrev: c,
                    allowSlideNext: u,
                    slidesEl: p,
                    params: m
                } = l, {
                    centeredSlides: h
                } = m;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== l.snapIndex ? m.centeredSlides && l.snapIndex < m.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = c, l.allowSlideNext = u, void l.emit("loopFix");
                let g = m.slidesPerView;
                "auto" === g ? g = l.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)), h && g % 2 == 0 && (g += 1));
                const f = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
                let v = f;
                v % f != 0 && (v += f - v % f), v += m.loopAdditionalSlides, l.loopedSlides = v;
                const b = l.grid && m.grid && m.grid.rows > 1;
                d.length < g + v ? S("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && S("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const w = [],
                    y = [];
                let T = l.activeIndex;
                void 0 === n ? n = l.getSlideIndex(d.find((e => e.classList.contains(m.slideActiveClass)))) : T = n;
                const x = "next" === i || !i,
                    E = "prev" === i || !i;
                let C = 0,
                    k = 0;
                const M = b ? Math.ceil(d.length / m.grid.rows) : d.length,
                    P = (b ? d[n].column : n) + (h && void 0 === a ? -g / 2 + .5 : 0);
                if (P < v) {
                    C = Math.max(v - P, f);
                    for (let e = 0; e < v - P; e += 1) {
                        const t = e - Math.floor(e / M) * M;
                        if (b) {
                            const e = M - t - 1;
                            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && w.push(t)
                        } else w.push(M - t - 1)
                    }
                } else if (P + g > M - v) {
                    k = Math.max(P - (M - 2 * v), f);
                    for (let e = 0; e < k; e += 1) {
                        const t = e - Math.floor(e / M) * M;
                        b ? d.forEach(((e, s) => {
                            e.column === t && y.push(s)
                        })) : y.push(t)
                    }
                }
                if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                        l.__preventObserver__ = !1
                    })), E && w.forEach((e => {
                        d[e].swiperLoopMoveDOM = !0, p.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                    })), x && y.forEach((e => {
                        d[e].swiperLoopMoveDOM = !0, p.append(d[e]), d[e].swiperLoopMoveDOM = !1
                    })), l.recalcSlides(), "auto" === m.slidesPerView ? l.updateSlides() : b && (w.length > 0 && E || y.length > 0 && x) && l.slides.forEach(((e, t) => {
                        l.grid.updateSlide(t, e, l.slides)
                    })), m.watchSlidesProgress && l.updateSlidesOffset(), s)
                    if (w.length > 0 && E) {
                        if (void 0 === t) {
                            const e = l.slidesGrid[T],
                                t = l.slidesGrid[T + C] - e;
                            o ? l.setTranslate(l.translate - t) : (l.slideTo(T + Math.ceil(C), 0, !1, !0), a && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                        } else if (a) {
                            const e = b ? w.length / m.grid.rows : w.length;
                            l.slideTo(l.activeIndex + e, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                        }
                    } else if (y.length > 0 && x)
                    if (void 0 === t) {
                        const e = l.slidesGrid[T],
                            t = l.slidesGrid[T - k] - e;
                        o ? l.setTranslate(l.translate - t) : (l.slideTo(T - k, 0, !1, !0), a && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                    } else {
                        const e = b ? y.length / m.grid.rows : y.length;
                        l.slideTo(l.activeIndex - e, 0, !1, !0)
                    } if (l.allowSlidePrev = c, l.allowSlideNext = u, l.controller && l.controller.control && !r) {
                    const e = {
                        slideRealIndex: t,
                        direction: i,
                        setTranslate: a,
                        activeSlideIndex: n,
                        byController: !0
                    };
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === m.slidesPerView && s
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                        ...e,
                        slideTo: l.controller.control.params.slidesPerView === m.slidesPerView && s
                    })
                }
                l.emit("loopFix")
            },
            loopDestroy: function () {
                const e = this,
                    {
                        params: t,
                        slidesEl: s
                    } = e;
                if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const i = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    i[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), i.forEach((e => {
                    s.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

    function H(e, t, s) {
        const i = m(),
            {
                params: a
            } = e,
            n = a.edgeSwipeDetection,
            r = a.edgeSwipeThreshold;
        return !n || !(s <= r || s >= i.innerWidth - r) || "prevent" === n && (t.preventDefault(), !0)
    }

    function R(e) {
        const t = this,
            s = u();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
            a.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void H(t, i, i.targetTouches[0].pageX);
        const {
            params: n,
            touches: r,
            enabled: o
        } = t;
        if (!o) return;
        if (!n.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let l = i.target;
        if ("wrapper" === n.touchEventsTarget && ! function (e, t) {
                const s = m();
                let i = t.contains(e);
                return !i && s.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function (e, t) {
                    const s = [t];
                    for (; s.length > 0;) {
                        const t = s.shift();
                        if (e === t) return !0;
                        s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t))), i
            }(l, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const d = !!n.noSwipingClass && "" !== n.noSwipingClass,
            c = i.composedPath ? i.composedPath() : i.path;
        d && i.target && i.target.shadowRoot && c && (l = c[0]);
        const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
            h = !(!i.target || !i.target.shadowRoot);
        if (n.noSwiping && (h ? function (e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === u() || s === m()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(p, l) : l.closest(p))) return void(t.allowClick = !0);
        if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
        r.currentX = i.pageX, r.currentY = i.pageY;
        const f = r.currentX,
            v = r.currentY;
        if (!H(t, i, f)) return;
        Object.assign(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), r.startX = f, r.startY = v, a.touchStartTime = g(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
        let b = !0;
        l.matches(a.focusableElements) && (b = !1, "SELECT" === l.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== l && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !l.matches(a.focusableElements)) && s.activeElement.blur();
        const w = b && t.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !w || l.isContentEditable || i.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
    }

    function W(e) {
        const t = u(),
            s = this,
            i = s.touchEventsData,
            {
                params: a,
                touches: n,
                rtlTranslate: r,
                enabled: o
            } = s;
        if (!o) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let l, d = e;
        if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
            if (null !== i.touchId) return;
            if (d.pointerId !== i.pointerId) return
        }
        if ("touchmove" === d.type) {
            if (l = [...d.changedTouches].find((e => e.identifier === i.touchId)), !l || l.identifier !== i.touchId) return
        } else l = d;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
        const c = l.pageX,
            p = l.pageY;
        if (d.preventedByNestedSwiper) return n.startX = c, void(n.startY = p);
        if (!s.allowTouchMove) return d.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: c,
            startY: p,
            currentX: c,
            currentY: p
        }), i.touchStartTime = g()));
        if (a.touchReleaseOnEdges && !a.loop)
            if (s.isVertical()) {
                if (p < n.startY && s.translate <= s.maxTranslate() || p > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== d.target && "mouse" !== d.pointerType && t.activeElement.blur(), t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", d), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = p;
        const m = n.currentX - n.startX,
            h = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
        let f = s.isHorizontal() ? m : h,
            v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        a.oneWayMovement && (f = Math.abs(f) * (r ? 1 : -1), v = Math.abs(v) * (r ? 1 : -1)), n.diff = f, f *= a.touchRatio, r && (f = -f, v = -v);
        const b = s.touchesDirection;
        s.swipeDirection = f > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
        const w = s.params.loop && !a.cssMode,
            y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (w && y && s.loopFix({
                    direction: s.swipeDirection
                }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)
        }
        if ((new Date).getTime(), !1 !== a._loopSwapReset && i.isMoved && i.allowThresholdMove && b !== s.touchesDirection && w && y && Math.abs(f) >= 1) return Object.assign(n, {
            startX: c,
            startY: p,
            currentX: c,
            currentY: p,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = f + i.startTranslate;
        let S = !0,
            T = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (T = 0), f > 0 ? (w && y && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > s.minTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + f) ** T))) : f < 0 && (w && y && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }), i.currentTranslate < s.maxTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - f) ** T))), S && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
            if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function Y(e) {
        const t = this,
            s = t.touchEventsData;
        let i, a = e;
        if (a.originalEvent && (a = a.originalEvent), "touchend" === a.type || "touchcancel" === a.type) {
            if (i = [...a.changedTouches].find((e => e.identifier === s.touchId)), !i || i.identifier !== s.touchId) return
        } else {
            if (null !== s.touchId) return;
            if (a.pointerId !== s.pointerId) return;
            i = a
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && (!["pointercancel", "contextmenu"].includes(a.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
            params: n,
            touches: r,
            rtlTranslate: o,
            slidesGrid: l,
            enabled: d
        } = t;
        if (!d) return;
        if (!n.simulateTouch && "mouse" === a.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = g(),
            u = c - s.touchStartTime;
        if (t.allowClick) {
            const e = a.path || a.composedPath && a.composedPath();
            t.updateClickedSlide(e && e[0] || a.target, e), t.emit("tap click", a), u < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
        }
        if (s.lastClickTime = g(), h((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let p;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = n.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
        if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: p
        });
        const m = p >= -t.maxTranslate() && !t.params.loop;
        let f = 0,
            v = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
            const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            void 0 !== l[e + t] ? (m || p >= l[e] && p < l[e + t]) && (f = e, v = l[e + t] - l[e]) : (m || p >= l[e]) && (f = e, v = l[l.length - 1] - l[l.length - 2])
        }
        let b = null,
            w = null;
        n.rewind && (t.isBeginning ? w = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (b = 0));
        const y = (p - l[f]) / v,
            S = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (u > n.longSwipesMs) {
            if (!n.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? b : f + S) : t.slideTo(f)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(f + S) : null !== w && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(w) : t.slideTo(f))
        } else {
            if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || a.target !== t.navigation.nextEl && a.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== b ? b : f + S), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f)) : a.target === t.navigation.nextEl ? t.slideTo(f + S) : t.slideTo(f)
        }
    }

    function U() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: i,
            allowSlidePrev: a,
            snapGrid: n
        } = e, r = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = r && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
    }

    function X(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function K() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: i
            } = e;
        if (!i) return;
        let a;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        a = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, a !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function J(e) {
        const t = this;
        B(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }

    function Z() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }
    const Q = (e, t) => {
            const s = u(),
                {
                    params: i,
                    el: a,
                    wrapperEl: n,
                    device: r
                } = e,
                o = !!i.nested,
                l = "on" === t ? "addEventListener" : "removeEventListener",
                d = t;
            a && "string" != typeof a && (s[l]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }), a[l]("touchstart", e.onTouchStart, {
                passive: !1
            }), a[l]("pointerdown", e.onTouchStart, {
                passive: !1
            }), s[l]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), s[l]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), s[l]("touchend", e.onTouchEnd, {
                passive: !0
            }), s[l]("pointerup", e.onTouchEnd, {
                passive: !0
            }), s[l]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), s[l]("touchcancel", e.onTouchEnd, {
                passive: !0
            }), s[l]("pointerout", e.onTouchEnd, {
                passive: !0
            }), s[l]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), s[l]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (i.preventClicks || i.preventClicksPropagation) && a[l]("click", e.onClick, !0), i.cssMode && n[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", U, !0) : e[d]("observerUpdate", U, !0), a[l]("load", e.onLoad, {
                capture: !0
            }))
        },
        ee = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var te = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function se(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const i = Object.keys(s)[0],
                a = s[i];
            "object" == typeof a && null !== a ? (!0 === e[i] && (e[i] = {
                enabled: !0
            }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in a ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                enabled: !1
            }), v(t, s)) : v(t, s)) : v(t, s)
        }
    }
    const ie = {
            eventsEmitter: I,
            update: $,
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        wrapperEl: a
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let n = function (e, t) {
                        void 0 === t && (t = "x");
                        const s = m();
                        let i, a, n;
                        const r = function (e) {
                            const t = m();
                            let s;
                            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                        }(e);
                        return s.WebKitCSSMatrix ? (a = r.transform || r.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === a ? "" : a)) : (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (a = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (a = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), a || 0
                    }(a, e);
                    return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: a,
                            wrapperEl: n,
                            progress: r
                        } = s;
                    let o, l = 0,
                        d = 0;
                    s.isHorizontal() ? l = i ? -e : e : d = e, a.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, a.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : a.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
                    const c = s.maxTranslate() - s.minTranslate();
                    o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, s, i, a) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                    const n = this,
                        {
                            params: r,
                            wrapperEl: o
                        } = n;
                    if (n.animating && r.preventInteractionOnTransition) return !1;
                    const l = n.minTranslate(),
                        d = n.maxTranslate();
                    let c;
                    if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), r.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!n.support.smoothScroll) return w({
                                swiper: n,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"))
                    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: i
                        } = s;
                    i.cssMode || (i.autoHeight && s.updateAutoHeight(), F({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: i
                        } = s;
                    s.animating = !1, i.cssMode || (s.setTransition(0), F({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: N,
            loop: V,
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                },
                unsetGrabCursor: function () {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            },
            events: {
                attachEvents: function () {
                    const e = this,
                        {
                            params: t
                        } = e;
                    e.onTouchStart = R.bind(e), e.onTouchMove = W.bind(e), e.onTouchEnd = Y.bind(e), e.onDocumentTouchStart = Z.bind(e), t.cssMode && (e.onScroll = K.bind(e)), e.onClick = X.bind(e), e.onLoad = J.bind(e), Q(e, "on")
                },
                detachEvents: function () {
                    Q(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    const e = this,
                        {
                            realIndex: t,
                            initialized: s,
                            params: i,
                            el: a
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const r = u(),
                        o = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase,
                        l = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : r.querySelector(i.breakpointsBase),
                        d = e.getBreakpoint(n, o, l);
                    if (!d || e.currentBreakpoint === d) return;
                    const c = (d in n ? n[d] : void 0) || e.originalParams,
                        p = ee(e, i),
                        m = ee(e, c),
                        h = e.params.grabCursor,
                        g = c.grabCursor,
                        f = i.enabled;
                    p && !m ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && m && (a.classList.add(`${i.containerModifierClass}grid`), (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === i.grid.fill) && a.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === c[t]) return;
                        const s = i[t] && i[t].enabled,
                            a = c[t] && c[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const b = c.direction && c.direction !== i.direction,
                        w = i.loop && (c.slidesPerView !== i.slidesPerView || b),
                        y = i.loop;
                    b && s && e.changeDirection(), v(e.params, c);
                    const S = e.params.enabled,
                        T = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), f && !S ? e.disable() : !f && S && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", c), s && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && T ? (e.loopCreate(t), e.updateSlides()) : y && !T && e.loopDestroy()), e.emit("breakpoint", c)
                },
                getBreakpoint: function (e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let i = !1;
                    const a = m(),
                        n = "window" === t ? a.innerHeight : s.clientHeight,
                        r = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    r.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < r.length; e += 1) {
                        const {
                            point: n,
                            value: o
                        } = r[e];
                        "window" === t ? a.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= s.clientWidth && (i = n)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: i
                        } = s;
                    if (i) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: i,
                            el: a,
                            device: n
                        } = e,
                        r = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && s.push(t + i)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: n.android
                        }, {
                            ios: n.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...r), a.classList.add(...t), e.emitContainerClasses()
                },
                removeClasses: function () {
                    const {
                        el: e,
                        classNames: t
                    } = this;
                    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                }
            }
        },
        ae = {};
    class ne {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = v({}, t), e && !t.el && (t.el = e);
            const n = u();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const i = v({}, t, {
                        el: s
                    });
                    e.push(new ne(i))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = A(), r.device = D({
                userAgent: t.userAgent
            }), r.browser = O(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const o = {};
            r.modules.forEach((e => {
                e({
                    params: t,
                    swiper: r,
                    extendParams: se(t, o),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = v({}, te, o);
            return r.params = v({}, l, ae, t), r.originalParams = v({}, r.params), r.passedParams = v({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            } [e]
        }
        getSlideIndex(e) {
            const {
                slidesEl: t,
                params: s
            } = this, i = E(y(t, `.${s.slideClass}, swiper-slide`)[0]);
            return E(e) - i
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        recalcSlides() {
            const {
                slidesEl: e,
                params: t
            } = this;
            this.slides = y(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const i = s.minTranslate(),
                a = (s.maxTranslate() - i) * e + i;
            s.translateTo(a, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s => {
                const i = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: i
                }), e.emit("_slideClass", s, i)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: i,
                slidesGrid: a,
                slidesSizesGrid: n,
                size: r,
                activeIndex: o
            } = this;
            let l = 1;
            if ("number" == typeof s.slidesPerView) return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
                for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), l += 1, t > r && (e = !0));
                for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > r && (e = !0))
            } else if ("current" === e)
                for (let e = o + 1; e < i.length; e += 1)(t ? a[e] + n[e] - a[o] < r : a[e] - a[o] < r) && (l += 1);
            else
                for (let e = o - 1; e >= 0; e -= 1) a[o] - a[e] < r && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let a;
            if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && B(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    a = e.slideTo(t.length - 1, 0, !1, !0)
                } else a = e.slideTo(e.activeIndex, 0, !1, !0);
                a || i()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                i = s.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
            s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let a = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : y(s, i())[0];
            return !a && t.params.createElements && (a = T("div", t.params.wrapperClass), s.append(a), y(s, `.${t.params.slideClass}`).forEach((e => {
                a.append(e)
            }))), Object.assign(t, {
                el: s,
                wrapperEl: a,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === x(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === x(s, "direction")),
                wrongRTL: "-webkit-box" === x(a, "display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                e.complete ? B(t, e) : e.addEventListener("load", (e => {
                    B(t, e.target)
                }))
            })), q(t), t.initialized = !0, q(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: i,
                    el: a,
                    wrapperEl: n,
                    slides: r
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a && "string" != typeof a && a.removeAttribute("style"), n && n.removeAttribute("style"), r && r.length && r.forEach((e => {
                e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            v(ae, e)
        }
        static get extendedDefaults() {
            return ae
        }
        static get defaults() {
            return te
        }
        static installModule(e) {
            ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
            const t = ne.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => ne.installModule(e))), ne) : (ne.installModule(e), ne)
        }
    }

    function re(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
    }
    Object.keys(ie).forEach((e => {
        Object.keys(ie[e]).forEach((t => {
            ne.prototype[t] = ie[e][t]
        }))
    })), ne.use([function (e) {
        let {
            swiper: t,
            on: s,
            emit: i
        } = e;
        const a = m();
        let n = null,
            r = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
            },
            l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                r = a.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: i
                    } = t;
                    let a = s,
                        n = i;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: i,
                            target: r
                        } = e;
                        r && r !== t.el || (a = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
                    })), a === s && n === i || o()
                }))
            })), n.observe(t.el)) : (a.addEventListener("resize", o), a.addEventListener("orientationchange", l))
        })), s("destroy", (() => {
            r && a.cancelAnimationFrame(r), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), a.removeEventListener("resize", o), a.removeEventListener("orientationchange", l)
        }))
    }, function (e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: a
        } = e;
        const n = [],
            r = m(),
            o = function (e, s) {
                void 0 === s && (s = {});
                const i = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const s = function () {
                        a("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(s) : r.setTimeout(s, 0)
                }));
                i.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: t.isElement || (void 0 === s.childList || s).childList,
                    characterData: void 0 === s.characterData || s.characterData
                }), n.push(i)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), i("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = C(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), o(t.wrapperEl, {
                    attributes: !1
                })
            }
        })), i("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]), ne.use([function (e) {
        let t, s, {
            swiper: i,
            extendParams: a,
            on: n,
            emit: r,
            params: o
        } = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, a({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let l, d, c, p, m, h, g, f, v = o && o.autoplay ? o.autoplay.delay : 3e3,
            b = o && o.autoplay ? o.autoplay.delay : 3e3,
            w = (new Date).getTime();

        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), f || e.detail && e.detail.bySwiperTouchMove || k())
        }
        const S = () => {
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? d = !0 : d && (b = l, d = !1);
                const e = i.autoplay.paused ? l : w + b - (new Date).getTime();
                i.autoplay.timeLeft = e, r("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
                    S()
                }))
            },
            T = e => {
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(s), S();
                let a = void 0 === e ? i.params.autoplay.delay : e;
                v = i.params.autoplay.delay, b = i.params.autoplay.delay;
                const n = (() => {
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.find((e => e.classList.contains("swiper-slide-active"))) : i.slides[i.activeIndex], e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(n) && n > 0 && void 0 === e && (a = n, v = n, b = n), l = a;
                const o = i.params.speed,
                    d = () => {
                        i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(o, !0, !0), r("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, o, !0, !0), r("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(o, !0, !0), r("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, o, !0, !0), r("autoplay")), i.params.cssMode && (w = (new Date).getTime(), requestAnimationFrame((() => {
                            T()
                        }))))
                    };
                return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    d()
                }), a)) : requestAnimationFrame((() => {
                    d()
                })), a
            },
            x = () => {
                w = (new Date).getTime(), i.autoplay.running = !0, T(), r("autoplayStart")
            },
            E = () => {
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), r("autoplayStop")
            },
            C = (e, s) => {
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (g = !0);
                const a = () => {
                    r("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : k()
                };
                if (i.autoplay.paused = !0, s) return h && (l = i.params.autoplay.delay), h = !1, void a();
                const n = l || i.params.autoplay.delay;
                l = n - ((new Date).getTime() - w), i.isEnd && l < 0 && !i.params.loop || (l < 0 && (l = 0), a())
            },
            k = () => {
                i.isEnd && l < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (w = (new Date).getTime(), g ? (g = !1, T(l)) : T(), i.autoplay.paused = !1, r("autoplayResume"))
            },
            M = () => {
                if (i.destroyed || !i.autoplay.running) return;
                const e = u();
                "hidden" === e.visibilityState && (g = !0, C(!0)), "visible" === e.visibilityState && k()
            },
            P = e => {
                "mouse" === e.pointerType && (g = !0, f = !0, i.animating || i.autoplay.paused || C(!0))
            },
            z = e => {
                "mouse" === e.pointerType && (f = !1, i.autoplay.paused && k())
            };
        n("init", (() => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", z)), u().addEventListener("visibilitychange", M), x())
        })), n("destroy", (() => {
            i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", z)), u().removeEventListener("visibilitychange", M), i.autoplay.running && E()
        })), n("_freeModeStaticRelease", (() => {
            (p || g) && k()
        })), n("_freeModeNoMomentumRelease", (() => {
            i.params.autoplay.disableOnInteraction ? E() : C(!0, !0)
        })), n("beforeTransitionStart", ((e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? C(!0, !0) : E())
        })), n("sliderFirstMove", (() => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? E() : (c = !0, p = !1, g = !1, m = setTimeout((() => {
                g = !0, p = !0, C(!0)
            }), 200)))
        })), n("touchEnd", (() => {
            if (!i.destroyed && i.autoplay.running && c) {
                if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return p = !1, void(c = !1);
                p && i.params.cssMode && k(), p = !1, c = !1
            }
        })), n("slideChange", (() => {
            !i.destroyed && i.autoplay.running && (h = !0)
        })), Object.assign(i.autoplay, {
            start: x,
            stop: E,
            pause: C,
            resume: k
        })
    }, function (e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: a
        } = e;
        const n = "swiper-pagination";
        let r;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${n}-bullet`,
                bulletActiveClass: `${n}-bullet-active`,
                modifierClass: `${n}-`,
                currentClass: `${n}-current`,
                totalClass: `${n}-total`,
                hiddenClass: `${n}-hidden`,
                progressbarFillClass: `${n}-progressbar-fill`,
                progressbarOppositeClass: `${n}-progressbar-opposite`,
                clickableClass: `${n}-clickable`,
                lockClass: `${n}-lock`,
                horizontalClass: `${n}-horizontal`,
                verticalClass: `${n}-vertical`,
                paginationDisabledClass: `${n}-disabled`
            }
        }), t.pagination = {
            el: null,
            bullets: []
        };
        let o = 0;

        function l() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function d(e, s) {
            const {
                bulletActiveClass: i
            } = t.params.pagination;
            e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
        }

        function c(e) {
            const s = e.target.closest(re(t.params.pagination.bulletClass));
            if (!s) return;
            e.preventDefault();
            const i = E(s) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === i) return;
                const e = (a = t.realIndex, n = i, (n %= r = t.slides.length) == 1 + (a %= r) ? "next" : n === a - 1 ? "previous" : void 0);
                "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(i)
            } else t.slideTo(i);
            var a, n, r
        }

        function u() {
            const e = t.rtl,
                s = t.params.pagination;
            if (l()) return;
            let i, n, c = t.pagination.el;
            c = M(c);
            const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                p = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (n = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let l, u, p;
                if (s.dynamicBullets && (r = k(a[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = r * (s.dynamicMainBullets + 4) + "px"
                    })), s.dynamicMainBullets > 1 && void 0 !== n && (o += i - (n || 0), o > s.dynamicMainBullets - 1 ? o = s.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(i - o, 0), u = l + (Math.min(a.length, s.dynamicMainBullets) - 1), p = (u + l) / 2), a.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    })), c.length > 1) a.forEach((e => {
                    const a = E(e);
                    a === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (a >= l && a <= u && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), a === l && d(e, "prev"), a === u && d(e, "next"))
                }));
                else {
                    const e = a[i];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && a.forEach(((e, t) => {
                            e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                        })), s.dynamicBullets) {
                        const e = a[l],
                            t = a[u];
                        for (let e = l; e <= u; e += 1) a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        d(e, "prev"), d(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        n = (r * i - r) / 2 - p * r,
                        o = e ? "right" : "left";
                    a.forEach((e => {
                        e.style[t.isHorizontal() ? o : "top"] = `${n}px`
                    }))
                }
            }
            c.forEach(((e, n) => {
                if ("fraction" === s.type && (e.querySelectorAll(re(s.currentClass)).forEach((e => {
                        e.textContent = s.formatFractionCurrent(i + 1)
                    })), e.querySelectorAll(re(s.totalClass)).forEach((e => {
                        e.textContent = s.formatFractionTotal(p)
                    }))), "progressbar" === s.type) {
                    let a;
                    a = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const n = (i + 1) / p;
                    let r = 1,
                        o = 1;
                    "horizontal" === a ? r = n : o = n, e.querySelectorAll(re(s.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                    }))
                }
                "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, p), 0 === n && a("paginationRender", e)) : (0 === n && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
            }))
        }

        function p() {
            const e = t.params.pagination;
            if (l()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
            let i = t.pagination.el;
            i = M(i);
            let n = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? n += e.renderBullet.call(t, s, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((s => {
                "custom" !== e.type && (s.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(re(e.bulletClass)))
            })), "custom" !== e.type && a("paginationRender", i[0])
        }

        function m() {
            t.params.pagination = function (e, t, s, i) {
                return e.params.createElements && Object.keys(i).forEach((a => {
                    if (!s[a] && !0 === s.auto) {
                        let n = y(e.el, `.${i[a]}`)[0];
                        n || (n = T("div", i[a]), n.className = i[a], e.el.append(n)), s[a] = n, t[a] = n
                    }
                })), s
            }(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s;
            "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.find((e => C(e, ".swiper")[0] === t.el)))), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
                el: s
            }), s = M(s), s.forEach((s => {
                "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass)
            })))
        }

        function h() {
            const e = t.params.pagination;
            if (l()) return;
            let s = t.pagination.el;
            s && (s = M(s), s.forEach((s => {
                s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c))
            }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        i("changeDirection", (() => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let {
                el: s
            } = t.pagination;
            s = M(s), s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), i("init", (() => {
            !1 === t.params.pagination.enabled ? g() : (m(), p(), u())
        })), i("activeIndexChange", (() => {
            void 0 === t.snapIndex && u()
        })), i("snapIndexChange", (() => {
            u()
        })), i("snapGridLengthChange", (() => {
            p(), u()
        })), i("destroy", (() => {
            h()
        })), i("enable disable", (() => {
            let {
                el: e
            } = t.pagination;
            e && (e = M(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), i("lock unlock", (() => {
            u()
        })), i("click", ((e, s) => {
            const i = s.target,
                n = M(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                a(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }));
        const g = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {
                el: e
            } = t.pagination;
            e && (e = M(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), h()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = M(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), m(), p(), u()
            },
            disable: g,
            render: p,
            update: u,
            init: m,
            destroy: h
        })
    }]), window.initSwiper = function () {
        window.swiper = new ne(".swiper", {
            speed: 1200,
            loop: !0,
            slidesPerView: 3,
            centeredSlides: !0,
            spaceBetween: -200,
            loopedSlides: 3,
            autoplay: {
                delay: 3e3,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar"
            },
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            }
        })
    }, new class {
        constructor(e) {
            this.options = Object.assign({
                isOpen: () => {},
                isClose: () => {}
            }, e), this.modal = document.querySelector(".graph-modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events()
        }
        events() {
            this.modal && (document.addEventListener("click", function (e) {
                const t = e.target.closest("[data-graph-path]");
                if (t) {
                    let e = t.dataset.graphPath,
                        s = t.dataset.graphAnimation,
                        i = t.dataset.graphSpeed;
                    return this.animation = s || "fade", this.speed = i ? parseInt(i) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${e}"]`), void this.open()
                }
                e.target.closest(".js-modal-close") && this.close()
            }.bind(this)), window.addEventListener("keydown", function (e) {
                27 == e.keyCode && this.isOpen && this.close(), 9 == e.which && this.isOpen && this.focusCatch(e)
            }.bind(this)), document.addEventListener("click", function (e) {
                e.target.classList.contains("graph-modal") && e.target.classList.contains("is-open") && this.close()
            }.bind(this)))
        }
        open(e) {
            if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
            this.modalContainer = this._nextContainer, e && (this.modalContainer = document.querySelector(`[data-graph-target="${e}"]`)), this.modalContainer.scrollTo(0, 0), this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.disableScroll(), this.modalContainer.classList.add("graph-modal-open"), this.modalContainer.classList.add(this.animation), setTimeout((() => {
                this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap()
            }), this.speed)
        }
        close() {
            this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("graph-modal-open"), this.enableScroll(), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()))
        }
        focusCatch(e) {
            const t = this.modalContainer.querySelectorAll(this._focusElements),
                s = Array.prototype.slice.call(t),
                i = s.indexOf(document.activeElement);
            e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()), e.shiftKey || i !== s.length - 1 || (s[0].focus(), e.preventDefault())
        }
        focusTrap() {
            const e = this.modalContainer.querySelectorAll(this._focusElements);
            this.isOpen ? e.length && e[0].focus() : this.previousActiveElement.focus()
        }
        disableScroll() {
            let e = window.scrollY;
            this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = e, document.body.style.top = -e + "px"
        }
        enableScroll() {
            let e = parseInt(document.body.dataset.position, 10);
            this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scrollTo({
                top: e,
                left: 0
            }), document.body.removeAttribute("data-position")
        }
        lockPadding() {
            let e = window.innerWidth - document.body.offsetWidth + "px";
            this._fixBlocks.forEach((t => {
                t.style.paddingRight = e
            })), document.body.style.paddingRight = e
        }
        unlockPadding() {
            this._fixBlocks.forEach((e => {
                e.style.paddingRight = "0px"
            })), document.body.style.paddingRight = "0px"
        }
    }({
        isOpen: () => {
            console.log("Модальное окно открыто"), window.swiper && window.swiper.autoplay.stop()
        },
        isClose: () => {
            console.log("Модальное окно закрыто"), window.swiper && window.swiper.autoplay.start()
        }
    }), document.addEventListener("click", (function (e) {
        const t = e.target.closest(".game-launcher");
        if (!t) return;
        const s = t.getAttribute("data-url"),
            i = document.getElementById("gameFrame"),
            a = document.querySelector(".game__container");
        s && i.src !== s && (i.src = s, a.classList.add("visible"))
    })), document.addEventListener("DOMContentLoaded", (function () {
        const e = document.querySelector(".game__container"),
            t = document.querySelector(".game__container__confirm"),
            s = document.getElementById("gameFrame"),
            i = document.querySelector(".button__game-close"),
            a = document.querySelector(".cancel-btn"),
            n = document.querySelector(".exit-btn"),
            r = document.querySelector(".close");
        i?.addEventListener("click", (function () {
            t?.classList.remove("is-hidden")
        })), a?.addEventListener("click", (function () {
            t?.classList.add("is-hidden")
        })), n?.addEventListener("click", (function () {
            s.src = "", e.classList.remove("visible"), t?.classList.add("is-hidden")
        })), r?.addEventListener("click", (function (e) {
            e.preventDefault(), "undefined" != typeof android && android.close && android.close()
        }))
    }))
})();