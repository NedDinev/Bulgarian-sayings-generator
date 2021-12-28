let quote = document.getElementById("quote");
let button = document.getElementById("button");
let quoteList = [
  "Абе то ще се мре, ама току здраве да е.",
  "Агне в чувал не се купува.",
  "Агнето го гледай по опашката, а ярето по гърдите.",
  "Агнешките кожи са по-много на пазар от овчите.",
  "Адет не е закон, ама закон става.",
  "Аз баща си не вярвам, че тебе ли?",
  "Аз бога мъчно вярвам, та че дявола ли ше ти вярвам?.",
  "Аз ваша, ти наша, кой ще вари каша?",
  "Аз го карам на чаиря, а то бяга по баиря.",
  "Аз го кръщавам, то пърди.",
  "Аз го оставям, тютюна, ама той нe ме оставя.",
  "Аз го тегля към озата, то се тегли към гората.",
  "Аз го уча на ум, а то си трън вади.",
  "Аз да те питам, ти да не знаеш.",
  "Аз да ти казвам, ти да не вярваш.",
  "Аз й казвам дюгеню, тя дозема иргеню.",
  "Аз казувам на дякона и той на клисаря.",
  "Аз казувам на котката, а тя на опашката си.",
  "Аз ми са космите свиват на главата, а той му кефат иде.",
  "Аз мижа и продавам, ти си очите отваряй.",
  "Аз може да съм дребен, ама като си седна на портфейла и ставам по-висок от всички.",
  "Аз му казвам: добр' утро, а той - що ма попържаш? Казва се за опак и неразбран човек.",
  "Аз му казвам: 'Скопен съм', а той пита колко деца имам. - Кога някой не разбира или не раче да вникне в положението на другиго.",
  "Аз му са разправям, а то ма и не керти.",
  "Аз на теб заповядвам, а ти на комуто мож'.",
  "Аз на хайваните хака не зимам - т.е. вода не пия, а все вино.",
  "Аз не ща попа, че тропа.",
  "Аз от зеле бягам, те ми зелник полагат.",
  "Аз пия, тебе хваща (виното).",
  "Аз са отмичам, то са намича.",
  "Аз ти показвам плевника, пък ти му търси вратата.",
  "Айран няма за пиене, а с кон ходи да пикае.",
  "Ако би имала баба мустаци, не би прела шестаци.",
  "Ако го боли, както го мързи, отдавна да е умрял.",
  "Ако го изпъдиш от вратата, то се навира през прозореца.",
  "Ако гониш два заека, няма да хванеш ни един.",
  "Ако господ ме не ще, дяволът рушвет дава за мен.",
  "Ако господ слушаше магаретата, нямаше да има самари.",
  "Ако вървиш след бръмбар ще стигнеш до лайно.",
  "Ако денят е къс, годината е дълга.",
  "Ако е гарга, да е рошава!",
  "Ако жена ти е много хубава, не я пущай сама на сватба.",
  "Ако живеем на село, трева не пасем.",
  "Ако има грешка, има и прошка.",
  "Ако искаш да вземаш, научи се да даваш.",
  "Ако искаш да познаеш човека, дай му власт.",
  "Ако искаш да ти е мирна главата, не я туряй в торбата.",
  "Ако младостта знаеше, ако старостта можеше!",
  "Ако не кърпиш вехтото, ново няма да носиш.",
  "Ако не посееш нещо, няма да ожънеш нищо.",
  "Ако не разбиеш калта, не стават кирпичи.",
  "Ако не съмва рано, ти подрани.",
  "Ако не щеш мира, на ти секира!",
  "Ако няма ум, крака няма ли?",
  "Ако попът се напива, селото не изтрезнява.",
  "Ако работата беше хубаво нещо и дядо владика щеше да работи.",
  "Ако работата имаше край, още дядо ти да я беше свършил.",
  "Ако ръка дава, а сърце не дава, нищо не става.",
  "Ако се направиш на агне, вълкът ще те изяде.",
  "Ако си богат, всякому си сват.",
  "Ако си мома, стой си дома.",
  "Ако си овца, вълци все ще се намерят.",
  "Ако ти даде яйце назаем, и то е без жълтък. (стиснат)",
  "Ако ще нарушаваш постите, по-добре го направи със свинско, а не с извара.",
  "Ако ще се давиш, не се мъчи в плитка вода.",
  "Акъл — море, глава — шамандура.",
  "Акъл до коляно, ум до глезени.",
  "Апетитът идва с яденето.",
  "Ахо-ихо гладно ляга.",
  "Бабини деветини.",
  "Балък лозе копа, юнак вино пие.",
  "Бащина поука — синова сполука.",
  "Без захмет не се яде мед.",
  "Без мокри гащи раци се не хващат.",
  "Без наука няма сполука.",
  "Без труд почивката не е сладка.",
  "Бели кахъри.",
  "Бели пари за черни дни.",
  "Бисерът е малко зрънце, ама е на голяма почит.",
  "Бистра водица, мирна главица.",
  "Бий самара, да се сеща магарето.",
  "Блага дума железни врата отваря.",
  "Благословено вино, проклето пиянство.",
  "Бог високо, цар далеко.",
  "Бог помага, ала в кошара не вкарва.",
  "Бог търпи, ама не спи.",
  "Богат е, който е здрав.",
  "Боднеш пръчка, пиеш вино.",
  "Болен здрав носи.",
  "Бостанджията иска дъжд, а керемидчията — слънце.",
  "Брат брата не храни, но тежко му който го няма.",
  "Буря в чаша вода.",
  "Бърза като теле пред майка си.",
  "Бързата работа — срам за майстора.",
  "Бяга като дявол от тамян.",
  "В механата бил, вино не помирисал.",
  "В него хляба, в него ножа.",
  "В нужда се другар познава.",
  "В окото ти да бръкнат, пак няма да видиш.",
  "В отворена ръка голяма пара не се пуска. — на просещия дават съвсем малко",
  "В царството на слепите едноокият е цар.",
  "В чужда манджа сол не туряй.",
  "Вади си вода от новия кладенец, но не плюй в стария.",
  "Вечерната работа не оставай за сутринта.",
  "Взетото назаем брашно, тъпкано се връща.",
  "Видяла жабата, че подковават вола, и тя вдигнала крак.",
  "Виното влиза, думите излизат.",
  "Виното и баба подмладява.",
  "Виното и дядо разиграва.",
  "Виното седи кротко само в бъчвата; излезе ли оттам - големи поразии прави.",
  "Власите накрай Дунава се давят.",
  "Вместо вежди да изпише, очи извади.",
  "Вода гази, жаден ходи.",
  "Водата изпира всичко освен позора.",
  "Времето е пари.",
  "Всеки си хвàли своето, а не чуждото.",
  "Всичко хубаво си има и край.",
  "Всяка жаба да си знае гьола.",
  "Всяка лястовица своето гнездо най-много хвали.",
  "Всяка работа си хвали майстора.",
  "Всяка циганка си хвали своите метли.",
  "Всяко дърво си има червей да го яде.",
  "Всяко зло за добро.",
  "Всяко чудо за три дни.",
  "Вчера ни грош, днеска цял кош.",
  "Вълк в овча кожа.",
  "Вълкът козината си мени, но нрава — никога",
  "Върви му като на бито куче тояга.",
  "Вържи попа, да е мирно селото.",
  "Върти се като муха без глава.",
  "Вятър го вее на бял кон.",
  "Времето е най големият критик, то ще покаже кой е прав кой е крив.",
  "Гарван гарвану око не вади.",
  "Гайда къща не храни.",
  "Глава има, ама в главата няма.",
  "Главата не е само за калпак.",
  "Глад не види нищо освен хляб.",
  "Гладна кокошка просо сънува.",
  "Гладна мечка хоро не играе, ама като се нахрани и ляга да спи.",
  "Гладни очи не заспиват.",
  "Гладно куче и гол кокал гризе.",
  "Глас народен — глас божи.",
  "Гледа като теле в железница.",
  "Гледа, ама не вижда.",
  "Гневен става, бит сяда.",
  "Големи хвалби, ама малки торби.",
  "Голям залък лапни, голяма дума не казвай.",
  "Госта гощавай, на врага си прощавай.",
  "Гръмнал слепият, та убил заек, а куцият припнал и го уловил.",
  "Гузен негонен бяга.",
  "Гъз глава затрива.",
  "Гъз дъно няма.",
  "Гътнала му се е циганката, та за това се хвали сам.",
  "Да би мирно седяло, не би чудо видяло.",
  "Да би се яло, не би стояло.",
  "Да е учено — добро, да е умно — по-добро.",
  "Да запретнем ръкави!",
  "Да имаше сирене, щях да надробя попара, ама няма хляб.",
  "Дай ми пари да си купя кесия, та да си слагам в нея парите.",
  "Да ме опази Господ от приятелите ми, а от враговете си сам ще се пазя.",
  "Да ти е обеца на ухото!",
  "Да хванеш бика за рогата.",
  "Дава колкото за Бог да прости.",
  "Дават ли ти — еж, гонят ли те — беж!",
  "Дави се, но не умира.",
  "Два бика и една каруца зад тях.",
  "Двама се карат, третият печели.",
  "Ден година храни.",
  "Ден да мине друг да дойде.",
  "Денят се познава от сутринта.",
  "Дето гърми големият тъпан, малкият се не чува.",
  "Дето комин, там и дим.",
  "Дим да го няма.",
  "Днес трябва да го купим, та да го живеем.",
  "Днешната работа не оставяй за утре.",
  "Добра дума железни врата отваря.",
  "Добрият кон сам си изкарва зобта.",
  "Дойде гост, развали пост.",
  "Докарва го откъм хвалби.",
  "Докато гонеше дивото, изтърва питомното.",
  "Докато не хвърлиш в нивата, не никне.",
  "Докато умните се наумуват, лудите се налудуват.",
  "Донеси си, да ти сложа да ядеш!",
  "Дума дупка не прави,само хабер праща!",
  "Дърво и камък да седи, ти да не седиш.",
  "Дървото се превива докато е младо.",
  "Доброто се забравя, злото — никога.",
  "Добър кон и под съдран чул се познава.",
  "До 25 години човек се жени сам, до 30 години го женят роднините му, а от 30 нагоре го жени цялото село.",
  "Дойде умът, ала пойде кумът.",
  "Докато има зъби, лисицата хаджийка не става.",
  "Докато не изпиташ злото, не ще познаеш доброто.",
  "Докато ти завиждат, радвай се. Започнат ли да те съжаляват — тежко ти.",
  "Докато човек умре, все ум събира и пак без ум умира.",
  "Дърт пръч млада върба кърши.",
  "Дума Дупка не прави, но за дума се гони до дупка.",
  "Дявол от тамян не се плаши.",
  "Евтин на брашното, скъп на триците.",
  "Един грош да имаш, ама като чорбаджия да го дадеш.",
  "Един камък триста гарги пропъжда.",
  "Една птичка пролет не прави.",
  "Езикът кости няма, ама кости троши.",
  "Евтиното месо и кучетата не го ядат.",
  "Едвам се научил да вдява и надминал майстора си.",
  "Един гледа сватба, друг — брадва.",
  "Един гроб е и за сиромаха и за болярина.",
  "Един държи рогата, друг дои кравата.",
  "Един зяпа, друг лапа.",
  "Един пие, а друг плаща.",
  "Един сее, друг жъне.",
  "Един се родил да сее, друг да пее.",
  "Един ум — за зиме ли, за лете ли?",
  "Един яде лимон, на друг текат лигите.",
  "Една лястовица пролет не прави.",
  "Едни копаят и режат, а други се нарязват.",
  "Едно мисли, друго казва, трето върши.",
  "Едно си баба знае, едно си баба бае.",
  "Желязото се кове, дорде е горещо.",
  "Желязото сече и дърво и камък, ама и него ръждата го яде.",
  "Живее на широка нога.",
  "Живот се с пари не купува.",
  "Животът е като стълба — едни се качват, други слизат.",
  "Жабата на сухо не кряка.",
  "Жабите се плашат от щъркела, жената от старостта.",
  "Жадна мечка и росата лиже.",
  "Жадният кон и мътна вода пие.",
  "Желаеш ли чуждото, загубваш своето.",
  "Жената знае „дай мъжо“, а не „дай боже“.",
  "Жена и кокошка синор нямат.",
  "Жена и съдран калпак лесно се добиват.",
  "Жена, огън и море да не срещаш по-добре.",
  "Жената е колкото сладка, толкова и горчива.",
  "Жената е най-скъпата покъщнина.",
  "Жената не бие мъжа си, но лесно го надвива.",
  "Жената не казва сал което не знай.",
  "Жената си крие злината като котка ноктите.",
  "Жени ли се на шега, той ще носи рога.",
  "Жени мързеливи — деца въшливи.",
  "Женски език от турска сабя по-остър.",
  "Живее кат бълха в тъпан.",
  "Живее като сврака на драка.",
  "Живеем, колкото да не е светът без хора.",
  "Живее само да яде, а не и да работи.",
  "Живеят като котката и кучето.",
  "Живеят като снаха и свекърва.",
  "За всеки влак си има пътници.",
  "За всяка болка си има билка.",
  "За вълка приказват, и вълкът в кошарата.",
  "За да изкопаеш кладенец, копай на едно място.",
  "За две пари яйце ще снесе, пък за сто гюрултия ще вдигне.",
  "За дявола тамян не дава.",
  "За една бълха не изгаряй цялата черга!",
  "За прехвалена стока с каруца не ходят.",
  "За прехвалени ягоди с големи кошници не се ходи.",
  "Загладил косъма.",
  "Заедно с мръсната вода изхвърля и бебето.",
  "Зайци плаши.",
  "Законът е врата през полето: будалите минават през вратата, тарикатите цепят през полето.",
  "Законът е за коня, не е за лъва.",
  "Залудо работи, залудо не стой.",
  "Залудо ходи, залудо не седи.",
  "Занаят да се учеше с гледане, кучето щеше да е касапин.",
  "Занаят не тегли глад.",
  "Запънал се като магаре на мост.",
  "Заради бълхата изгаря юргана.",
  "Заръчал да го закопаят под бъчвата.",
  "Затънат ли ти колелата, не чакай Крали Марко да ти ги изправи.",
  "За умрелите или добро, или нищо.",
  "Защо съм вълк, след като не ме лаят кучетата?",
  "Здрав като камък.",
  "Зина, та продума, рече та отсече.",
  "Знае Господ чие масло гори в кандилото.",
  "Знанието е сила — силата е успех.",
  "И без петел се съмва.",
  "И вълкът сит, и агнето цяло.",
  "И гробарите имат своите гробари.",
  "И да бягаш, на пътя ори, сей.",
  "И да паднем, пак ще станем - да не сме грънци да се счупим.",
  "И лудият бяга от пияния.",
  "И на гърба си има очи.",
  "И сам войнът е войн.",
  "И стените имат уши.",
  "Игла в купа сено.",
  "Игра гърне не пълни.",
  "Извади сабя ръждива, уплаши баба страхлива.",
  "Измъкна се като пръдня из гащи.",
  "Изниза се като мокра връв.",
  "Изплю камъчето.",
  "Изскочи като дявол от шише.",
  "Имане без труд лесно се пилей.",
  "Искаш ли голяма лъжица, вземи и голяма мотика!",
  "Истината излезе на бял свят.",
  "Кажи истината и бягай.",
  "Кажи ми какви са приятелите ти, за да ти кажа какъв си.",
  "Кажи на слепия, че е сляп, и той ще ти се разсърди.",
  "Казали на лисицата, а тя си казала на опашката.",
  "Казана дума, хвърлен камък.",
  "Каквото мислят мишките, котката го разваля.",
  "Каквото повикало, такова се и обадило.",
  "Каквото посадиш, такова ще пожънеш.",
  "Каквото селото, такъв и кмета.",
  "Каквото си надробиш, това ще сърбаш.",
  "Каквото ти е на върлина, такова ти е на гърбина.",
  "Както и да сядате, не ставате за музиканти.",
  "Както ръчица пипала, тъй гърбица носила.",
  "Камъкът на мястото си тежи.",
  "Канили магарето на сватба, но му заръчали да вземе и самара.",
  "Капка в морето.",
  "Капка катран бъчва мед разваля.",
  "Капка по капка вир става.",
  "Капката дълбае камъка не със сила, а с постоянство.",
  "Като вдигнеш тоягата виновната котка ще избяга.",
  "Като две и две — четири.",
  "Като две капки вода.",
  "Като дупе и гащи.",
  "Като не щеш мира — на ти секира. — предполагаеми думи на хан Крум към Никифор II.",
  "Като те удари горният таван ще се наведеш та да видиш и долния.",
  "Като се обърне каруцата — пътища много.",
  "Кефът цена няма.",
  "Клин клин избива.",
  "Кога човек умре, тогаз добър става.",
  "Когато атовете се ритат, магаретата теглят.",
  "Когато вървиш, напред гледай: ако не намериш нищо, поне няма да се препънеш.",
  "Когато нещо много го хвалят, не бързай да се радваш отрано; когато нещо много го чернят - не бързай да го отричаш предварително.",
  "Когато си видиш ушите.",
  "Когато ти е слаб умът, да ти е як гърбът.",
  "Когато фактите говорят и боговете мълчат.",
  "Когато хвалиш, нищо не губиш; когато проклинаш, нищо не печелиш.",
  "Когато цъфнат налъмите.",
  "Което дяволът не може, вика жената да го направи.",
  "Кой лежи, той тъжи; кой оре, той добре.",
  "Който бърза бавно - далеч не стига.",
  "Който бърка в меда, той си облизва пръстите.",
  "Който бърка в меда, често забравя лъжицата.",
  "Който видял вълка — вика, който не видял — дваж вика.",
  "Който говори пред теб зад гърба на другите, ще говори и пред другите зад твоя гръб.",
  "Който е копал лозето, той ще яде гроздето.",
  "Който е работен, ще бъде имотен.",
  "Който завижда-не вижда.",
  "Който има крава пие мляко.",
  "Който копае гроб другиму, сам пада в него.",
  "Който купува това, което не му е трябва, продава това, което му трябва.",
  "Който много чете, той и много знае.",
  "Който много се хвали, той бавни пали.",
  "Който не работи, не трябва да яде.",
  "Който не се е родил, той няма да умре.",
  "Който не се пече на нивата, не се пъчи на хорото.",
  "Който нож вади, от нож умира.",
  "Който няма воля, всичко му е неволя.",
  "Който няма, не му е свидно.",
  "Който пее, зло не мисли.",
  "Който плаща зле, плаща два пъти.",
  "Който плаща, той поръчва музиката.",
  "Който работи честно, ще живее по-лесно.",
  "Който сам се хвали, все едно сам се кори.",
  "Който се мъчи, той се и пъчи.",
  "Който се смее последен, най-добре се смее.",
  "Който се труди, не губи.",
  "Който се учи, той ще сполучи.",
  "Който се хвали, не пали; който мълчи, той върши работата.",
  "Който се цапа, той лапа.",
  "Който седи на воденицата, той си смила брашното.",
  "Който си върви полека, той отива надалеко.",
  "Който спи с куче, трябва да му търпи и бълхите.",
  "Който шъта в двора, той играе на сбора.",
  "Кокошка, дето най-много кудкудяка, най-малко снася.",
  "Колко мъки вижда хурката, дор напълни вретеното!",
  "Колкото да не е без хич.",
  "Колкото повече мълчи, по-хубава дума ще рече.",
  "Колкото толкова.",
  "Комуто лозето е прекопано, той ще има пълна бъчва.",
  "Котка по гърб не пада.",
  "Краставите магарета през девет земи се подушват.",
  "Краставото куче всички го лаят.",
  "Крушата не пада по-далеч от дървото.",
  "Кръвта вода не става.",
  "Кръвта на всички е червена.",
  "Куче от грозде не умира.",
  "Кучетата лаят, керванът си върви.",
  "Кучето лае, за да опази не селото, а себе си.",
  "Кучето скача според тоягата.",
  "Къде си тръгнал и ти с мечките мед да ядеш?!",
  "Където не го сееш, там никне.",
  "Където не достига лъвска кожа, пришиват лисича.",
  "Където те мразят - не ходѝ, където те обичат - не честѝ. — не ходѝ често.",
  "Който иска се натиска.",
  "Лае песът да си брани комата.",
  "Лакардия довършек няма.",
  "Лежешката не можеш си хапна ябълка.",
  "Лесно се галят момите, мъчно се дялат гредите.",
  "Лете без аба, зиме без торба не ходи.",
  "Лете измекяр, зиме господар.",
  "Лесно е да говориш, мъчно е да го сториш.",
  "Лесно е да кажеш, мъчно е да докажеш.",
  "Лесно е да развалиш, мъчно е да направиш.",
  "Лесно е на готови деца баща да бъдеш.",
  "Лесно се обещава, мъчно се дава.",
  "Лете под сенки, зиме по седенки.",
  "Лице невиждано, скоро се забравя.",
  "Либи либе с кусура му.",
  "Лисица на пазар не ходи.",
  "Лисица два пъти в капан не влиза.",
  "Лисицата и калугерка да стане, между кокошките не я пущай.",
  "Лисицата обича не курника, а кокошките.",
  "Лицето жени момата.",
  "Лозе не ще дядо попа, иска чичо пота.",
  "Лозето не ще молитва, а мотика.",
  "Лоша рана заздравява, но лоша дума не се забравя.",
  "Лошото време се оправя, лошият човек никога.",
  "Лошата дума от лошо сърце излиза.",
  "Лоши сме си, ама наши сме си.",
  "Лошите се лесно сдружават.",
  "Лоши уста всичко могат да кажат.",
  "Лошият и нощем види, ама и от сянката си се плаши.",
  "Лошият и от дявола не се страхува.",
  "Лошият човек и хаджия да е, пак е лош.",
  "Лошо правил, па добро никога не видял.",
  "Лошото иде с колата, а се отнема с иглата.",
  "Лошо се с лошо изпъжда.",
  "Лош човек ако се хване за дрехата ти, отрежи я и я остави в ръката му.",
  "Луд умора няма — само се поти.",
  "Луда мома по голямата китка се познава, а луд овчар — по голямата тояга.",
  "Луди направили, мъдри развалили.",
  "Лудите и несеяни никнат.",
  "Лудите нямат чорбаджия.",
  "Лудост се на пазар не продава.",
  "Лудостта е сват с белята.",
  "Луд свири, луд играе; който гледа, ум няма.",
  "Лъжа без катинар.",
  "Лъжа вода не гази.",
  "Лъжа се с лъжица не сърба.",
  "Лъжата върви по-напред, а истината — след нея.",
  "Лъжата върви по-напред, ама далеч не стига.",
  "Лъжата корен не хваща.",
  "Любов и кашлица не се крият.",
  "Лют човек приятел не държи.",
  "Любов хубост не гледа.",
  "Лятно време без аба, зимно време без храна не ходи!",
  "Ляга с кокошките, ама става с петлите.",
  "Лятоска царува, зимъска гладува.",
  "Магаре мътна вода не гази.",
  "Магаре от прякор не умира.",
  "Магаре от срам не мре.",
  "Магаре от срам не разбира.",
  "Магаре от тимар не проумява.",
  "Магарето и на хаджилък да иде, пак магаре ще се върне.",
  "Магарето, колкото да е кескини, ат не става.",
  "Магарето си продадох, от да карма магарета не се отървах.",
  "Магарещината кой сака, той си я купува и без пари.",
  "Магарещината не ходи по горите и скалите, а по хората.",
  "Магаре яхай, кон хвали.",
  "Магаре яха, магаре търси.",
  "Майка ми е веща, знае как се вари леща.",
  "Майка на чедо зло не мисли.",
  "Майка обича и келяв син.",
  "Майски дъждове плащат дългове.",
  "Малка е Янка за копане, а е голяма за тропане.",
  "Малко хитрувай, по-малко хортувай.",
  "Мара води хорото, котка яде брашното.",
  "Маха си опашката като котка за мръвка.",
  "Маха си пес опашката, дорде да грабне джигера.",
  "Маймуни с трици не се ловят.",
  "Малко говори, а много слушай.",
  "Малкото камъче колата обръща.",
  "Младост без любов — пролет без цвете.",
  "Много думи малко пари струват.",
  "Много приказки — на пазара.",
  "Мокрите гащи ядат риба, а сухите ядат пиперки.",
  "Мокър в бъчва влиза, ала сух излиза.",
  "Мокър от дъжд се не бои.",
  "Момата не е стока за пазене.",
  "Морето не е до колене.",
  "Мотика молитва не иска.",
  "Мъж под чехъл.",
  "Муж ко най-добра бабичка.",
  "Муж ко печурка — ритнеш га разлети се.",
  "Мъжка мръвка на женско не тежи.",
  "Мълчи като риба.",
  "Мълчи като блъснат.",
  "Мълчи като гроб.",
  "Мълчи като ибрик.",
  "Мълчи като кос на яйца.",
  "Мълчи като пукал.",
  "Мълчи като пън.",
  "Мълчи като фит.",
  "Мърдат му ръцете като на млада невяста краката.",
  "Мързеливата булка срещу празник преде.",
  "Мързеливата булка срещу празник се познава.",
  "Мързеливата жена по комшиите преспива.",
  "Мързеливите вечер се разработват.",
  "Мързеливият два пъти работи, а скъперникът два пъти плаща.",
  "Махни се, страшно, юнак ще мине!",
  "Механата е капан за пияниците.",
  "Мечка с мравки не се насища.",
  "Мижи да те лажем.",
  "Мий колкото щеш катраника, той все си е катраник.",
  "Мий магаре да ти плати с удари.",
  "Мий магаре със сапун, да загубиш и сапуна и труда.",
  "Миналото не се връща, само се прегръща.",
  "Мисли като кон на празни ясли.",
  "Много е лош; докато не го набият не му минава.",
  "Много за думане, нищо за ядене.",
  "Много занаяти, празни му ръце.",
  "Много думи пари не струват.",
  "Мнозина знаят да печелят пари, малцина знаят да ги задържат.",
  "Мнозина се раждат хора, а умират магарета.",
  "Мнозина философи пасат говеда.",
  "Молете се хора, дано Рада излезе мома.",
  "Мома гиздава, глава гнидава.",
  "Мома гиздосия, булка поразия.",
  "Мома наглед като тиква на плет.",
  "Морето с лъжица не се изчерпва.",
  "Мразила мома хорото, че се оженила за гадуларя.",
  "Мъж — като лайно на дъжд.",
  "Мъжът се познава по жената.",
  "Мързеливите жени в събота вечер се разработват.",
  "Мързи го да гледа.",
  "Мързи го, та го боли.",
  "Мъчи се да изкара от две баби мома.",
  "Мъчи се като грешен дявол.",
  "Мъчно е да напълниш съдран чувал.",
  "Мята се като заклана кокошка.",
  "Мята се като риба на сухо.",
  "На вълка затова му е дебел вратът, защото сам си върши работата.",
  "На гол тумбак чифте пищови.",
  "На дрът гъз зелен бъз.",
  "На лъжата краката са къси.",
  "На сила хубост не става.",
  "На чужд гръб и сто тояги са малко.",
  "Нахалост труд, кога няма ред.",
  "Нашето гардже е винаги най-хубаво, нашата къща е най-подредена.",
  "Не се хвалѝ какъв си бил, а какъв си сега.",
  "Нов ден - нов късмет.",
  "Обикаля като простудена магарица.",
  "Обичат се като куче и котка.",
  "Обущарят бос ходи.",
  "Обущарят ходи със скъсани обувки.",
  "Обърна петалата.",
  "Озърта се като обран евреин.",
  "Ойде коньо у реката.",
  "Око да види и ръка да пипне.",
  "Око за око, зъб за зъб. — с библейски произход",
  "Омазал се като халваджийска тесла.",
  "Опекъл си работата.",
  "Оплел конците и хвърлил топа.",
  "Оплескал се като аджамия акушерка.",
  "Оплескал се като халваджийска тесла.",
  "Ори и сей, догдето спи мързеливият.",
  "Ори, копай, храни се, с грабене не богати се.",
  "Орташката работа вълци я яли.",
  "Орташка кобила псета я яли.",
  "Ослушва се като шопар в царевица.",
  "От всяка трънка заек не излиза.",
  "От всяко дърво свирка не става.",
  "От дъжд на вятър.",
  "От едно гърне боб ядат и все се мислят за по-умни един от друг.",
  "От инат няма по-лош занаят.",
  "От кон, та на магаре.",
  "От лош длъжник и кош плява е добре.",
  "От мен да мине.",
  "От много работа богат не се става - гърбав се става.",
  "От потури фрак не става.",
  "От работа не се хубавее, а се гърбавее.",
  "От работа тежко, без работа по-тежко.",
  "От ситни парици стават жълтици.",
  "От стара коза яре е.",
  "От студ кове клинци.",
  "От тиквени семки алабаш (брюкселско зеле) няма да поникне.",
  "От трън, та на глог.",
  "Отива му — като на свинче звънче.",
  "Отидеш ли в Рим, прави като римляните.",
  "Открил Америка.",
  "Открил накрая колелото.",
  "Открил най-сетне топлата вода.",
  "Откъдето дошло, там отишло.",
  "Откъдето мине, там трева не никне.",
  "Откъсна му се от сърцето.",
  "Откъснаха ми се ръцете.",
  "Очи пълни, ръце празни.",
  "Очи, които не се виждат, се забравят.",
  "Очите всичко виждат, ала себе си — не.",
  "Парен каша духа.",
  "Пари при пари отиват.",
  "Парите излъгват жената, а жената — мъжа.",
  "Пачавра леке не хваща.",
  "Песът лае, за да си пази кома̀та.",
  "Петима Петко не чакат!",
  "Пила коза вино, че търси вълка да се борят.",
  "Пили — пели, плащали — плакали.",
  "Пилците се броят наесен.",
  "Питали вълка: защо ти е дебел вратът? Рекъл: защото сам си върша работата.",
  "Плюй си на ръцете!",
  "По дрехите посрещат, по ума изпращат.",
  "По-добре в село чорбаджия, отколкото в град кюмюрджия.",
  "По-добре да имаш лош брат, отколкото лош съсед.",
  "По-напред да добием, че тогаз да попием.",
  "Повлече крак.",
  "Под вола теле търси.",
  "Под голям камък — голяма риба.",
  "Под път и над път.",
  "Подадеш ли си кутрето — ще ти отхапе ръката.",
  "Поканил ме на гости, да ме учи на пости.",
  "Покритото мляко котките не го лочат.",
  "Помъчил се да лапне бивол, че лапнал муха.",
  "Пораснала му работата.",
  "Последна дупка на кавала.",
  "Посмали малко. — към някой, който много се хвали, обещава или преувеличава.",
  "Потопи си езика в мозъка, тогава акъл давай!",
  "Потта е като пчелата: откъдето и да иде, все носи.",
  "Почнало магарето да реве и да се хвали как се е въргаляло в праха насред мегдана.",
  "Прав си кривчо.",
  "Празна хвалà кесия не пълни.",
  "Прати го за зелен хайвер.",
  "Превържи си пръста и тръгни из селото, да видим колко доктора ще срещнеш.",
  "Пременил се Илия, погледнал се — пак у тия.",
  "Прескочи, пък тогаз викай „хоп“.",
  "Присмял се хърбел на щърбел.",
  "Пришива на копчето балтон.",
  "Приятел в нужда се познава.",
  "Приятелството си е приятелство, но сиренето е с пари.",
  "Пролетната песен не звучи наесен.",
  "Пуснали Тарльо под одъра, той се качил на одъра.",
  "Пусни го да пасе.",
  "По добре късно, отколкото никога.",
  "Под стари дрехи, често добър пияница ще познаеш.",
  "Работата да се бои от тебе, не ти от нея.",
  "Работата му работи.",
  "Работата му сама го хвали.",
  "Работата на ум учи.",
  "Работата не грози човека, мързелът го грози.",
  "Работи без плата, че не ходи без работа.",
  "Работи като буболечка, яде като мечка.",
  "Работи като хала.",
  "Работи от тъмно до тъмно.",
  "Работи така, като че ли ще живееш сто години, а живей така, като че ли ще умреш утре.",
  "Разлайва кучетата само. — т.е. вдига шум, разтръбява и предизвиква емоции, негодувание, възмущение за нещо несъществено, несериозно.",
  "Разпасал се като ахиевски читак.",
  "Рано пиле рано пее.",
  "Рове ко црно магаре у падину.",
  "Рибата в морето, а ний туряме котлето.",
  "Рибата още в морето, той приготвил тигана.",
  "Рибата се вмирисва откъм главата.",
  "Ритна камбаната.",
  "Ръждясали му парите в кесията.",
  "Ръка ръка мие, за да бъдат и двете бели.",
  "С вълците вий като вълк.",
  "С единия крак в гроба.",
  "С една ръка дава, с две взема.",
  "С игла геран не се копае.",
  "С какъвто се събереш, такъв ставаш.",
  "С кървава пот.",
  "С мечките мед да яде е тръгнал и той.",
  "С пари в рая, без пари по края.",
  "С песен трудът е лесен.",
  "С питане и до Цариград се стига.",
  "С решето вятър ловят.",
  "С трън да се завъртиш, няма що да закачиш.",
  "С чужда пита помен прави.",
  "С чужди ръце горещо желязо да пипаш — не е трудно.",
  "Сабя се на война назаем не дава.",
  "Свърши работата като кучето на нивата.",
  "Свърши се ракията, прекъсна се лакардията.",
  "Сговорна дружина планина повдига.",
  "Силният мъж преполовява дните.",
  "Симидчията, ако сам не си хвали симидите, няма да ги продаде.",
  "Сирoмах човек — жив дявол.",
  "Сиромашията се бои да влезе у работлива жена.",
  "Сит на гладен не вярва.",
  "Ситият гостенин трудно се гощава.",
  "Скарали се врабчетата за чуждото просо.",
  "След добра работа — добро ядене.",
  "След дъжд качулка.",
  "Слòжи му рога.",
  "Смирена главичка сабя не я сече.",
  "Снесла кокошката яйце и окудкудякала цялата махала.",
  "Собствен товар не тежи.",
  "Сол се слага, но не се вади.",
  "Срамът се с вода не измива.",
  "Стана за смях на кокошките.",
  "Стара дъска боя не хваща.",
  "Старата любов ръжда не хваща.",
  "Стигнал е до под кривата круша.",
  "Стрелян заек е.",
  "Сто гледали, един видял и той бил сляп с едното око.",
  "Сух като чироз.",
  "Суха пола риба не яде, а мокра.",
  "Счу̀пи — ку̀пи.",
  "Слънцето не изгрява за едного.",
  "Сънуваш ли баница — яж!",
  "Сърдит Петко, празна му торбата.",
  "Със свещ да го търсиш.",
  "Със свой псалтир в чужд манастир недей да ходиш.",
  "Таман научих магарето да не яде и то умря.",
  "Тебе лъжа — мене истина.",
  "Тежко на умния между будалите.",
  "Ти работи, аз ще ти помагам — рекъл господ.",
  "Тихата вода е най-дълбока.",
  "Това, дето го няма и царят не го яде.",
  "Трай бабо за хубост.",
  "Трай, коньо, за трева зелена.",
  "Три пъти мери, един път режи.",
  "Три пъти режа и все е късо.",
  "Трудът е здраве и живот.",
  "Тръгнало море в река да се дави.",
  "Тънка като топола.",
  "Тъпанът е голям, но е празен.",
  "Тъща къща обръща.",
  "Тафра ме напиня — Голоча ме съпиня.",
  "У всекиго има съвест, ала блазе томува, комуто е чиста.",
  "У всекиго има троха чест.",
  "У всекиго се намира за една пара ум.",
  "У грънчар ново гърне няма.",
  "У девет възли вързва една пара.",
  "У зетя тъпан бие, а у невястата хабер нямат.",
  "У когото е питата, у него е и ножът.",
  "У краката лъснат, у главата блъснат.",
  "У момата тъпан тупа, у момчето хабер няма.",
  "Убиец не е който прави ножове, а който убива с тях.",
  "Увира се като конска муха под опашка.",
  "Угоил се като дунавска свиня.",
  "Угоил се като ялова крава.",
  "Удари го на бяг.",
  "Удари го на живот.",
  "Удари го на молба.",
  "Удари го през просото.",
  "Удари келепира.",
  "Удари кьоравото.",
  "Удари му брадва о камък.",
  "Ударил яйца на масло.",
  "Ударила му косата о камък.",
  "Уйдиса му на акъла.",
  "Уловил я за опашката.",
  "Ум да дават — много, пари — никой.",
  "Ум и разум с пари не се купуват.",
  "Ум прави, глава тегли.",
  "Ум с кола, памет с вила.",
  "Ум се с пари не купува, па най-много пари струва.",
  "Ум царува, ум робува, ум патки пасе.",
  "Ума му толкоз кескин — разцепва конеца и на бълхата шалвари направя.",
  "Умей да пей, не умей да сей.",
  "Умен като попово прасе.",
  "Умен колкото девет улави.",
  "Умий си краката, че ще мине царят!",
  "Умила се лъжицата, та станала паница.",
  "Умира и в гърне надзира.",
  "Умирам от глад.",
  "Умирачката оправя всичкото.",
  "Умислил се като куче през велики пости.",
  "Умислил се, като че ли са му потънали гемиите.",
  "Умната жена струва повече от елмаз.",
  "Умните мъже си почитат жените.",
  "Умният и насън си изкарва хляба.",
  "Умният навсякъде си изкарва хляба.",
  "Умният човек в яда се познава.",
  "Умри, но не кради.",
  "Умри, но не се минавай; минеш ли се, не се издавай; издадеш ли се, да не ти пука.",
  "Умри, тате, да ям жито.",
  "Умря волът, развали се ортаклъкът.",
  "Умря с отворени очи.",
  "Умря тая циганка, що го хвалеше.",
  "Умрял кон не рита.",
  "Умрял кон от вълци не го е страх.",
  "Умрял съм за него.",
  "Умряла котката и пак за мишките мислела.",
  "Умрялото магаре от вълка не го е страх.",
  "Умрях си от смях.",
  "Умът ми не го побира.",
  "Умът му е в краката.",
  "Уплаши ми се окото.",
  "Уплашил се като вълк в хиляда овце.",
  "Уплел конците и ритнал топа.",
  "Урочасал от червеното.",
  "Усетила се Мара, че под нея е бара.",
  "Услуга за услуга.",
  "Уста защо са, ако ме не хвалят?",
  "Уста има, език няма.",
  "Уста кучешки, разядат се.",
  "Устата му като воденица.",
  "Устата му още на мляко миришат.",
  "Устата си затваряй, очите си отваряй.",
  "Утешавай болния, докле му изкочи душата.",
  "Утребила булката единия кът, а в другия се наместила.",
  "Утрото е по-мъдро от вечерта.",
  "Ухапала го пчела за езика — вика фефел.",
  "Ухилил се под мустак.",
  "Учен да те бие, прост да те не милва.",
  "Учен до прага, а умен до века.",
  "Учението край няма.",
  "Учението не е цяр да го изпиеш, та да станеш учен.",
  "Учи се от мал, кога остарееш да не ти е жал.",
  "Уж умница,ама с ум на патка.",
  "Хабер няма от света.",
  "Хабер си няма, че земята се върти.",
  "Хапни си от фасула куме! — Добре ми е и от хайвера!",
  "Харчи се като топъл хляб.",
  "Хванала се царската дъщеря на работа, та й се изприщили ръцете.",
  "Хвани единия, удари другия.",
  "Хитрата сврака, с двата крака.",
  "Хорските уста не са чувал да ги завържеш.",
  "Храната е спасила човечеството от гладна смърт.",
  "Храни куче да те лае.",
  "Хубава работа, ама циганска.",
  "Хубавите ябълки свинете ги ядат.",
  "Хубавият кон и под скъсан чул се познава.",
  "Хукнал презглава.",
  "Царят дава, пъдарят не дава.",
  "Чаша пълна, жена гладна.",
  "Черен гологан не се губи.",
  "Човек знае и две, и двеста.",
  "Човек не живее само с хляб.",
  "Човек се учи от що му се случи.",
  "Чрез нахалство към прогрес.",
  "Чуждата кокошка — гъска.",
  "Чуждият хляб — зъби кърши.",
  "Шило в торба не седи.",
  "Широко му около врата.",
  "Шушу-мушу къща разваля.",
  "Ще събере дом, колкото тъпан прах.",
  "Ще те гази мечка!",
  "Що е в ръка, не е лъжа.",
  "Що ми трябваше от мечка ремичка?",
  "Що мисли трезвен, пиян го казва.",
  "Ще му мине като на куче.",
  "Щом има грешка, има и прошка.",
  "Щом си се хванал на хорото, ще го играеш.",
  "Юнак без рана не ходи.",
  "Юнак си кон кове, а жабата крак вдига.",
  "Юрганът изгорял, той жали конците.",
  "Яде като мечка, а работи като с клечка.",
  "Ядене върху ядене върви, само бой върху бой не върви.",
  "Яйцето учи кокошката.",
  "Як като бик.",
  "Я камилата, я камиларя.",
];
function getRandomInt() {
  quote.innerHTML = quoteList[Math.floor(Math.random() * 832)];
}
