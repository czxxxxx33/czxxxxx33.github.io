const bancoDeQuestoes = [
    // Sistema Nervoso (18 questões)
    {
        id: 1,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'As três vesículas primárias do encéfalo durante o desenvolvimento embrionário são:',
        opcoes: ['Cérebro, cerebelo, tronco encefálico', 'Prosencéfalo, mesencéfalo, rombencéfalo', 'Telencéfalo, diencéfalo, metencéfalo', 'Córtex, medula, bulbo'],
        resposta: 'Prosencéfalo, mesencéfalo, rombencéfalo',
    },
    {
        id: 2,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'No SNC, os corpos celulares dos neurônios localizam-se na:',
        opcoes: ['Substância branca', 'Substância cinzenta', 'Axônios mielinizados', 'Fascículos'],
        resposta: 'Substância cinzenta',
    },
    {
        id: 3,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O córtex visual primário (V1) está localizado em qual lobo do cérebro?',
        opcoes: ['Lobo frontal', 'Lobo parietal', 'Lobo occipital', 'Lobo temporal'],
        resposta: 'Lobo occipital',
    },
    {
        id: 4,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O sulco que separa o lobo frontal e parietal do lobo temporal é conhecido como:',
        opcoes: ['Sulco central', 'Sulco lateral (fissura de Sylvius)', 'Sulco parieto-occipital', 'Sulco calcarino'],
        resposta: 'Sulco lateral (fissura de Sylvius)',
    },
    {
        id: 5,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O forame interventricular de Monro conecta quais ventrículos do cérebro?',
        opcoes: ['Terceiro e quarto ventrículo', 'Ventrículos laterais e terceiro ventrículo', 'Quarto ventrículo e aqueduto de Sylvius', 'Aqueduto de Sylvius e terceiro ventrículo'],
        resposta: 'Ventrículos laterais e terceiro ventrículo',
    },
    {
        id: 6,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual estrutura é responsável por transferir pensamentos e informações entre os dois hemisférios cerebrais?',
        opcoes: ['Núcleo da base', 'Hipotálamo', 'Tálamo', 'Corpo caloso'],
        resposta: 'Corpo caloso',
    },
    {
        id: 7,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'Qual das meninges reveste diretamente a superfície do encéfalo e da medula espinhal?',
        opcoes: ['Dura-máter', 'Aracnoide', 'Pia-máter', 'Espaço subaracnóideo'],
        resposta: 'Pia-máter',
    },
    {
        id: 8,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O ajuste fino dos movimentos e a coordenação motora são funções de qual parte do encéfalo?',
        opcoes: ['Percepções sensoriais', 'Cerebelo', 'Pensamentos abstratos', 'Hipotálamo'],
        resposta: 'Cerebelo',
    },
    {
        id: 9,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'O tecido nervoso é composto por neurônios e quais outros componentes?',
        opcoes: ['Células da glia', 'Fibras musculares', 'Vias vasculares', 'Tecido conjuntivo'],
        resposta: 'Células da glia',
    },
    {
        id: 10,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Os nervos espinais e os gânglios nervosos fazem parte de qual porção do sistema nervoso?',
        opcoes: ['Sistema Nervoso Central (SNC)', 'Sistema Nervoso Periférico (SNP)', 'Cerebelo', 'Tronco encefálico'],
        resposta: 'Sistema Nervoso Periférico (SNP)',
    },
    {
        id: 11,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O sulco central (ou de Rolando) separa o lobo frontal do:',
        opcoes: ['Lobo temporal', 'Lobo parietal', 'Lobo occipital', 'Cerebelo'],
        resposta: 'Lobo parietal',
    },
    {
        id: 12,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual estrutura é conhecida por conter os centros vitais para a regulação da respiração e circulação?',
        opcoes: ['Tálamo', 'Cerebelo', 'Tronco encefálico', 'Hipotálamo'],
        resposta: 'Tronco encefálico',
    },
    {
        id: 13,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Cite os três principais componentes do encéfalo.',
        resposta: ['Cérebro, cerebelo, tronco encefálico', 'Cérebro; cerebelo; tronco encefálico'],
    },
    {
        id: 14,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Cite as três divisões do tronco encefálico.',
        resposta: ['Mesencéfalo, ponte, bulbo', 'Mesencéfalo; ponte; bulbo'],
    },
    {
        id: 15,
        topico: 'Nervoso',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'O hipotálamo é uma sede central do sistema límbico. Quais funções ele regula?',
        resposta: ['Regula comportamentos motivados, funções endócrinas e autonômicas', 'Regula o sistema endócrino e autonômico'],
    },
    {
        id: 16,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Quais são os dois componentes principais do tecido nervoso?',
        resposta: ['Neurônios e células da glia', 'Neurônios e neuróglia', 'Células nervosas e células da glia'],
    },
    {
        id: 17,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual é a função do corpo celular (pericário) de um neurônio?',
        resposta: ['É o centro trófico da célula', 'Centro trófico da célula', 'Recepção e integração de estímulos'],
    },
    {
        id: 18,
        topico: 'Nervoso',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome das células que são o sistema mononuclear fagocitário no SNC?',
        resposta: ['Micróglia'],
    },

    // Sistema Urinário (18 questões)
    {
        id: 19,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A porção interna do rim, que é subdividida em pirâmides renais, é o(a):',
        opcoes: ['Córtex renal', 'Medula renal', 'Pelve renal', 'Cápsula renal'],
        resposta: 'Medula renal',
    },
    {
        id: 20,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A camada mais interna do ureter, que permite a distensão do órgão, é o(a):',
        opcoes: ['Epitélio simples pavimentoso', 'Epitélio de transição', 'Tecido muscular liso', 'Tecido conjuntivo denso'],
        resposta: 'Epitélio de transição',
    },
    {
        id: 21,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Os rins, por estarem localizados na parede posterior do abdome, fora da cavidade peritoneal, são considerados órgãos:',
        opcoes: ['Intraperitoneais', 'Subperitoneais', 'Retroperitoneais', 'Anteroperitoneais'],
        resposta: 'Retroperitoneal',
    },
    {
        id: 22,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A unidade funcional do rim, responsável pela filtração do plasma sanguíneo, é o(a):',
        opcoes: ['Glomérulo', 'Néfron', 'Cálice renal', 'Ureter'],
        resposta: 'Néfron',
    },
    {
        id: 23,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A urina é coletada das papilas renais por estruturas em forma de cálice, que se unem para formar a pelve renal. Essas estruturas são:',
        opcoes: ['Cálices menores', 'Cálices maiores', 'Pelve renal', 'Ureteres'],
        resposta: 'Cálices menores',
    },
    {
        id: 24,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A Túnica adventícia dos ureteres é o(a):',
        opcoes: ['Mais interna, revestida por epitélio de transição', 'Intermediária, composta por músculo liso', 'Mais superficial, de tecido conjuntivo frouxo', 'Apenas encontrada em homens'],
        resposta: 'Mais superficial, de tecido conjuntivo frouxo',
    },
    {
        id: 25,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual é a principal função do músculo detrusor da bexiga urinária?',
        opcoes: ['Relaxar para permitir o enchimento da bexiga', 'Contrair para ejetar a urina', 'Produzir urina', 'Regular a pressão sanguínea'],
        resposta: 'Contrair para ejetar a urina',
    },
    {
        id: 26,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Nos rins, o córtex se estende entre as pirâmides renais, formando estruturas chamadas:',
        opcoes: ['Túbulos coletores', 'Colunas renais', 'Alças de Henle', 'Cálices renais'],
        resposta: 'Colunas renais',
    },
    {
        id: 27,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'As células que revestem o folheto visceral da cápsula de Bowman e formam fendas de filtração são os:',
        opcoes: ['Células mesangiais', 'Podócitos', 'Pneumócitos', 'Células endoteliais'],
        resposta: 'Podócitos',
    },
    {
        id: 28,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Cite os quatro órgãos que compõem o sistema urinário.',
        resposta: ['Rins, Ureteres, Bexiga, Uretra', 'Rim, Ureter, Bexiga, Uretra'],
    },
    {
        id: 29,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual a função das células mesangiais dentro do glomérulo?',
        resposta: ['Suporte estrutural, fagocitose e produção de moléculas bioativas'],
    },
    {
        id: 30,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome da porção superior dilatada do ureter que coleta a urina dos cálices maiores?',
        resposta: ['Pelve renal', 'Bacinete'],
    },
    {
        id: 31,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A bexiga urinária, nos homens, está diretamente apoiada em qual órgão na face posterior?',
        resposta: ['Reto'],
    },
    {
        id: 32,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Nos homens, a única estrutura que passa entre o ureter e o peritônio é o:',
        resposta: ['Ducto deferente'],
    },
    {
        id: 33,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'As arteríolas eferentes do rim formam os vasa recta em qual tipo de néfron?',
        opcoes: ['Néfrons corticais', 'Néfrons justamedulares', 'Néfrons peritubulares', 'Túbulo contorcido distal'],
        resposta: 'Néfrons justamedulares',
    },
    {
        id: 34,
        topico: 'Urinario',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O hilo renal é a porta de entrada e saída para a artéria renal, veia renal, vasos linfáticos, suprimento nervoso e qual outra estrutura?',
        opcoes: ['Medula renal', 'Ureter', 'Córtex renal', 'Cápsula renal'],
        resposta: 'Ureter',
    },
    {
        id: 35,
        topico: 'Urinario',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A porção do néfron que é revestida por epitélio simples cúbico e que possui células menores e menos acidófilas que o TCP é o(a):',
        opcoes: ['Túbulo contorcido proximal', 'Túbulo contorcido distal', 'Glomérulo', 'Alça de Henle'],
        resposta: 'Túbulo contorcido distal',
    },

    // Sistema Cardiovascular (18 questões)
    {
        id: 36,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O sistema excitatório e condutor do coração, atuando como o "marca-passo" cardíaco, é o(a):',
        opcoes: ['Nó atrioventricular', 'Feixe de His', 'Nó sinusal', 'Fibras de Purkinje'],
        resposta: 'Nó sinusal',
    },
    {
        id: 37,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A veia cava superior e inferior, bem como o seio coronário, transportam sangue desoxigenado de volta para qual câmara do coração?',
        opcoes: ['Átrio direito', 'Átrio esquerdo', 'Ventrículo direito', 'Ventrículo esquerdo'],
        resposta: 'Átrio direito',
    },
    {
        id: 38,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual câmara do coração forma o ápice, que pode ser palpado no $4^{\circ}$ ou $5^{\circ}$ espaço intercostal?',
        opcoes: ['Átrio direito', 'Átrio esquerdo', 'Ventrículo direito', 'Ventrículo esquerdo'],
        resposta: 'Ventrículo esquerdo',
    },
    {
        id: 39,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A valva atrioventricular direita (valva tricúspide) está localizada entre quais câmaras do coração?',
        opcoes: ['Átrio direito e ventrículo direito', 'Átrio esquerdo e ventrículo esquerdo', 'Ventrículo direito e artéria pulmonar', 'Ventrículo esquerdo e aorta'],
        resposta: 'Átrio direito e ventrículo direito',
    },
    {
        id: 40,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A camada intermediária e a mais espessa da parede do coração, responsável pela contração, é o(a):',
        opcoes: ['Epicárdio', 'Miocárdio', 'Endocárdio', 'Pericárdio'],
        resposta: 'Miocárdio',
    },
    {
        id: 41,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O tronco braquiocefálico, a artéria carótida comum esquerda e a artéria subclávia esquerda são os três principais ramos do:',
        opcoes: ['Aorta ascendente', 'Arco da aorta', 'Tronco pulmonar', 'Veia cava superior'],
        resposta: 'Arco da aorta',
    },
    {
        id: 42,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'As células musculares cardíacas se unem umas às outras através de estruturas que permitem a propagação do sinal elétrico. O nome dessas estruturas é:',
        opcoes: ['Miofibrilas', 'Discos intercalares', 'Cordas tendíneas', 'Feixe de His'],
        resposta: 'Discos intercalares',
    },
    {
        id: 43,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'As artérias de médio a pequeno calibre, conhecidas por sua túnica média espessa e rica em músculo liso, são o(a):',
        opcoes: ['Artérias elásticas', 'Arteríolas', 'Artérias musculares', 'Capilares'],
        resposta: 'Artérias musculares',
    },
    {
        id: 44,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'Qual a principal diferença na túnica média entre as artérias e as veias?',
        opcoes: ['A túnica média é mais fina nas artérias', 'A túnica média é mais espessa nas veias', 'A túnica média é mais espessa nas artérias', 'Não há túnica média nas veias'],
        resposta: 'A túnica média é mais espessa nas artérias',
    },
    {
        id: 45,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'O coração impulsiona o sangue por dois circuitos em série. Quais são eles?',
        resposta: ['Circulação pulmonar e circulação sistêmica', 'Pequena circulação e grande circulação', 'Pequena circulação e sistêmica'],
    },
    {
        id: 46,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual é o nome da estrutura de tecido conjuntivo que serve como ponto de inserção para o miocárdio e as valvas cardíacas?',
        resposta: ['Esqueleto fibroso'],
    },
    {
        id: 47,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A valva do tronco pulmonar e a valva da aorta são classificadas como valvas:',
        resposta: ['Valvas semilunares', 'Semilunares'],
    },
    {
        id: 48,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual a função das junções comunicantes (Gap Junctions) nos discos intercalares do músculo cardíaco?',
        resposta: ['Permitem que o sinal elétrico se propague rapidamente de uma célula para outra', 'Permitem que o músculo cardíaco atue como um sincício funcional'],
    },
    {
        id: 49,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual é o único local de conexão fisiológica entre o sincício atrial e o sincício ventricular?',
        resposta: ['Feixe atrioventricular', 'Feixe AV', 'Feixe de His'],
    },
    {
        id: 50,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'As artérias pulmonares são as únicas artérias que transportam que tipo de sangue?',
        resposta: ['Sangue desoxigenado', 'Sangue venoso'],
    },

    // Sistema Reprodutor (18 questões)
    {
        id: 51,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O útero pode ser dividido em três partes. Quais são elas?',
        opcoes: ['Fundo, corpo e colo', 'Camada funcional, camada basal, miométrio', 'Perimétrio, miométrio, endométrio', 'Corpo, colo e vagina'],
        resposta: 'Fundo, corpo e colo',
    },
    {
        id: 52,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A camada do útero que se desprende durante a menstruação é o(a):',
        opcoes: ['Camada basal do endométrio', 'Perimétrio', 'Miométrio', 'Camada funcional do endométrio'],
        resposta: 'Camada funcional do endométrio',
    },
    {
        id: 53,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual das seguintes estruturas é o homólogo feminino do pênis masculino?',
        opcoes: ['Vagina', 'Lábios menores', 'Clitóris', 'Bulbos do vestíbulo'],
        resposta: 'Clitóris',
    },
    {
        id: 54,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Os testículos são descritos em relação à parede anterior do abdome e à região:',
        opcoes: ['Renal', 'Inguinal', 'Pélvica', 'Torácica'],
        resposta: 'Inguinal',
    },
    {
        id: 55,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A principal artéria que irriga o útero é o(a):',
        opcoes: ['Artéria ovárica', 'Artéria uterina', 'Artéria ilíaca externa', 'Artéria pudenda interna'],
        resposta: 'Artéria uterina',
    },
    {
        id: 56,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A uretra masculina, que serve como via comum para urina e sêmen, atravessa qual glândula sexual acessória?',
        opcoes: ['Glândula seminal', 'Glândula bulbouretral', 'Próstata', 'Epidídimo'],
        resposta: 'Próstata',
    },
    {
        id: 57,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A estrutura que transporta o ovócito ou óvulo fertilizado do ovário para o útero é o(a):',
        opcoes: ['Ovário', 'Vagina', 'Trompa de Falópio', 'Clitóris'],
        resposta: 'Trompa de Falópio',
    },
    {
        id: 58,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'Qual das seguintes estruturas masculinas transporta espermatozoides do epidídimo e é um tubo muscular de 45 cm?',
        opcoes: ['Glândula seminal', 'Ducto deferente', 'Uretra', 'Glândula bulbouretral'],
        resposta: 'Ducto deferente',
    },
    {
        id: 59,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome das estruturas que transportam o ovócito ou óvulo fertilizado do ovário para o útero?',
        resposta: ['Trompas de Falópio', 'Tubas uterinas'],
    },
    {
        id: 60,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'As células que se localizam nos túbulos seminíferos e fornecem suporte para os espermatozoides são:',
        resposta: ['Células de Sertoli'],
    },
    {
        id: 61,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'O assoalho pélvico é formado principalmente pelo músculo que sustenta as vísceras pélvicas. Qual o nome desse músculo?',
        resposta: ['Músculo levantador do ânus'],
    },
    {
        id: 62,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A uretra feminina se situa anteriormente a qual órgão do sistema reprodutor feminino?',
        resposta: ['Vagina'],
    },
    {
        id: 63,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'As células que se localizam no tecido conjuntivo intersticial dos testículos e são responsáveis pela secreção de testosterona são as:',
        resposta: ['Células de Leydig'],
    },
    {
        id: 64,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'O miométrio, a camada muscular do útero, é composto por:',
        opcoes: ['Epitélio simples colunar', 'Tecido conjuntivo frouxo', 'Músculo liso', 'Músculo estriado'],
        resposta: 'Músculo liso',
    },
    {
        id: 65,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A ovocitogênese resulta em um oócito maduro por ciclo, enquanto a espermatogênese produz quantos gametas a partir de um espermatócito primário?',
        opcoes: ['Um', 'Dois', 'Três', 'Quatro'],
        resposta: 'Quatro',
    },
    {
        id: 66,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome da estrutura feminina que é o homólogo do corpo esponjoso e bulbo do pênis masculino?',
        resposta: ['Bulbos do vestíbulo'],
    },
    {
        id: 67,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome da camada interna do útero, composta por epitélio simples colunar e lâmina própria?',
        resposta: ['Endométrio'],
    },
    {
        id: 68,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'A camada do útero que é sensível às flutuações hormonais é o endométrio. Cite uma de suas duas camadas principais.',
        resposta: ['Camada funcional', 'Camada basal'],
    },

    // Sistema Respiratório (18 questões)
    {
        id: 69,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O principal músculo da inspiração, que separa as cavidades torácica e abdominal, é o:',
        opcoes: ['Músculo intercostal', 'Diafragma', 'Músculo esternocleidomastóideo', 'Músculos abdominais'],
        resposta: 'Diafragma',
    },
    {
        id: 70,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'O epitélio do tipo respiratório, que reveste as fossas nasais, tem quais duas características principais?',
        opcoes: ['Cílios e células caliciformes', 'Epitélio simples e lúmen amplo', 'Tecido conjuntivo e fibras elásticas', 'Anéis de cartilagem e músculo liso'],
        resposta: 'Cílios e células caliciformes',
    },
    {
        id: 71,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A hematose ocorre na:',
        opcoes: ['Traqueia', 'Brônquios', 'Alvéolos', 'Bronquíolos'],
        resposta: 'Alvéolos',
    },
    {
        id: 72,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O plano transverso do tórax, onde a traqueia se bifurca em dois brônquios principais, corresponde ao nível do:',
        opcoes: ['Ângulo esternal', 'Músculo diafragma', 'Vértebra C7', 'Cartilagem tireóidea'],
        resposta: 'Ângulo esternal',
    },
    {
        id: 73,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual é a principal função da cartilagem tireóidea?',
        opcoes: ['Proteger as vias respiratórias', 'Produzir a voz', 'Impedir a aspiração de substâncias', 'Servir de fixação para as pregas vocais'],
        resposta: 'Servir de fixação para as pregas vocais',
    },
    {
        id: 74,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O ramo mais vertical e de maior calibre dos brônquios principais é o:',
        opcoes: ['Brônquio principal esquerdo', 'Brônquio principal direito', 'Brônquio lobar superior', 'Brônquio segmentar'],
        resposta: 'Brônquio principal direito',
    },
    {
        id: 75,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'Qual dos seguintes tipos de células alveolares é responsável pela produção e secreção de surfactante pulmonar?',
        opcoes: ['Macrófagos alveolares', 'Pneumócitos tipo I', 'Células de Clara', 'Pneumócitos tipo II'],
        resposta: 'Pneumócitos tipo II',
    },
    {
        id: 76,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A pleura visceral, que reveste a face externa dos pulmões, e a pleura parietal, que reveste a cavidade torácica, delimitam o espaço chamado:',
        opcoes: ['Recesso costodiafragmático', 'Mediastino', 'Cavidade pleural', 'Hilo pulmonar'],
        resposta: 'Cavidade pleural',
    },
    {
        id: 77,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A camada que se flexiona sobre a rima da glote durante a deglutição, impedindo a aspiração de substâncias para a traqueia, é o(a):',
        opcoes: ['Cartilagem tireóidea', 'Epiglote', 'Cartilagem cricóidea', 'Prega vestibular'],
        resposta: 'Epiglote',
    },
    {
        id: 78,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'As pregas vocais falsas (pregas vestibulares) têm qual função principal?',
        opcoes: ['Produção da voz', 'Filtro de air', 'Aumentar o volume do air', 'Função protetora'],
        resposta: 'Função protetora',
    },
    {
        id: 79,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A traqueia possui anéis de cartilagem hialina em formato de "C" para:',
        opcoes: ['Proporcionar flexibilidade durante a respiração', 'Manter a traqueia pérvia (aberta)', 'Permitir a deglutição de alimentos', 'Proteger o músculo traqueal'],
        resposta: 'Manter a traqueia pérvia (aberta)',
    },
    {
        id: 80,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'O processo de troca gasosa, conhecido como hematose, ocorre na unidade:',
        opcoes: ['Traqueobronquial', 'Alveolocapilar', 'Brônquio-alveolar', 'Pleuro-diafragmática'],
        resposta: 'Alveolocapilar',
    },
    {
        id: 81,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'O pulmão direito tem quantos lobos e quantas fissuras?',
        resposta: ['3 lobos e 2 fissuras', 'Três lobos e duas fissuras'],
    },
    {
        id: 82,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'O diafragma é inervado por qual nervo?',
        resposta: ['Nervo frênico'],
    },
    {
        id: 83,
        topico: 'Respiratorio',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'Qual a principal diferença entre os brônquios e os bronquíolos?',
        resposta: ['Brônquios possuem cartilagem e bronquíolos não possuem'],
    },
    {
        id: 84,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A traqueia possui anéis de cartilagem hialina em forma de "C". Qual a principal função desses anéis?',
        resposta: ['Manter a traqueia pérvia', 'Manter a traqueia aberta'],
    },
    {
        id: 85,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A hematose ocorre na unidade alveolocapilar. Quais são as três estruturas que compõem essa unidade?',
        resposta: ['Alvéolo, septo alveolar e rede capilar'],
    },
    {
        id: 86,
        topico: 'Respiratorio',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual o nome das estruturas que sustentam os brônquios e bronquíolos para que não colapsem?',
        resposta: ['Anéis de cartilagem', 'Placas de cartilagem'],
    },
    
    // Sistema Cardiovascular (Adicional) - Para garantir o mínimo de 20 questões por disciplina
    {
        id: 87,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A fina camada interna que reveste as câmaras e as valvas do coração é o(a):',
        opcoes: ['Epicárdio', 'Miocárdio', 'Endocárdio', 'Pericárdio seroso'],
        resposta: 'Endocárdio',
    },
    {
        id: 88,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'Qual a função dos músculos papilares do ventrículo esquerdo?',
        opcoes: ['Proteger a valva tricúspide', 'Sustentar as cordas tendíneas da valva mitral', 'Fornecer sangue para o átrio', 'Contrair para aumentar o volume ventricular'],
        resposta: 'Sustentar as cordas tendíneas da valva mitral',
    },
    {
        id: 89,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O tronco pulmonar se divide em quais artérias para levar sangue aos pulmões?',
        opcoes: ['Artéria pulmonar direita e esquerda', 'Artéria brônquica e intercostal', 'Veias pulmonares', 'Artérias coronárias'],
        resposta: 'Artéria pulmonar direita e esquerda',
    },
    {
        id: 90,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Quais são as únicas artérias que transportam sangue desoxigenado após o nascimento?',
        resposta: ['Artérias pulmonares', 'Artéria pulmonar'],
    },
    {
        id: 91,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'A fina camada interna que reveste as câmaras e as valvas do coração é chamada de:',
        resposta: ['Endocárdio'],
    },
    {
        id: 92,
        topico: 'Cardiovascular',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'A veia cava superior e inferior, bem como o seio coronário, transportam sangue desoxigenado de volta para qual câmara do coração?',
        resposta: ['Átrio direito', 'Átrio direito do coração'],
    },
    {
        id: 93,
        topico: 'Cardiovascular',
        disciplina: 'Histologia',
        tipo: 'discursiva',
        pergunta: 'No acoplamento excitação-contração do músculo cardíaco, a entrada de qual íon na célula desencadeia a liberação de mais cálcio do retículo sarcoplasmático?',
        resposta: ['Cálcio', 'Cálcio ($Ca^{2+}$)'],
    },
    // Sistema Reprodutor (Adicional)
    {
        id: 94,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'O assoalho pélvico é formado principalmente pelo:',
        opcoes: ['Diafragma da pelve', 'Músculo esfíncter externo do ânus', 'Músculo transverso superficial do períneo', 'Músculo levantador do ânus'],
        resposta: 'Diafragma da pelve',
    },
    {
        id: 95,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A inervação do músculo levantador do ânus é fornecida pelo:',
        opcoes: ['Nervo pudendo', 'Nervo anal inferior', 'Nervo para o M. levantador do ânus (ramos de S4)', 'Nervos esplâncnicos pélvicos'],
        resposta: 'Nervo para o M. levantador do ânus (ramos de S4)',
    },
    {
        id: 96,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'objetiva',
        pergunta: 'A drenagem venosa superficial do pênis ocorre pelas veias:',
        opcoes: ['Veias pudendas internas', 'Veias cavernosas', 'Veias pudendas externas', 'Veia dorsal profunda'],
        resposta: 'Veias pudendas externas',
    },
    {
        id: 97,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'Qual a principal função do músculo levantador do ânus?',
        resposta: ['Elevar o assoalho pélvico após seu relaxamento'],
    },
    {
        id: 98,
        topico: 'Reprodutor',
        disciplina: 'Morfologia',
        tipo: 'discursiva',
        pergunta: 'O assoalho pélvico sustenta a cabeça fetal durante o parto. Qual músculo do assoalho pélvico é o mais propenso a se romper nesse processo?',
        resposta: ['Músculo levantador do ânus'],
    },
    {
        id: 99,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'O miométrio, a camada muscular do útero, é composto por:',
        opcoes: ['Epitélio simples colunar', 'Tecido conjuntivo frouxo', 'Músculo liso', 'Músculo estriado'],
        resposta: 'Músculo liso',
    },
    {
        id: 100,
        topico: 'Reprodutor',
        disciplina: 'Histologia',
        tipo: 'objetiva',
        pergunta: 'A ovocitogênese resulta em um oócito maduro por ciclo, enquanto a espermatogênese produz quantos gametas a partir de um espermatócito primário?',
        opcoes: ['Um', 'Dois', 'Três', 'Quatro'],
        resposta: 'Quatro',
    },
];

const telaInicial = document.getElementById('tela-inicial');
const telaProva = document.getElementById('tela-prova');
const telaResultados = document.getElementById('tela-resultados');
const btnIniciarProva = document.getElementById('iniciar-prova');
const btnFinalizarProva = document.getElementById('finalizar-prova');
const btnIniciarNovo = document.getElementById('iniciar-novo');
const questoesContainer = document.getElementById('questoes-container');
const cronometroDisplay = document.getElementById('cronometro');
const acertosSpan = document.getElementById('acertos');
const totalQuestoesSpan = document.getElementById('total-questoes');
const gabaritoContainer = document.getElementById('gabarito-container');

// Elementos da mensagem de boas-vindas
const welcomeMessage = document.getElementById('welcome-message');
const okButton = document.getElementById('ok-button');
const discursivaModal = document.getElementById('discursiva-modal');
const okDiscursivaButton = document.getElementById('ok-discursiva-button');


let questoesProva = [];
let respostasUsuario = {};
let tempoRestante = 30 * 60;
let timerInterval;

// Mostra a mensagem de boas-vindas na primeira vez que a página é carregada
window.onload = function() {
    welcomeMessage.style.display = 'flex';
    telaInicial.style.display = 'none';
    telaProva.style.display = 'none';
    telaResultados.style.display = 'none';
};

// Event listener para o botão 'Ok' da mensagem de boas-vindas
okButton.addEventListener('click', () => {
    welcomeMessage.style.display = 'none';
    telaInicial.style.display = 'flex';
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

btnIniciarProva.addEventListener('click', () => {
    const topicosSelecionados = Array.from(document.querySelectorAll('.opcoes-topicos input:checked')).map(checkbox => checkbox.dataset.topico);
    const tipoQuestaoSelecionado = document.querySelector('input[name="tipo-questao"]:checked').value;

    if (topicosSelecionados.length === 0) {
        alert('Por favor, selecione pelo menos um tópico.');
        return;
    }

    if (tipoQuestaoSelecionado === 'mista') {
        discursivaModal.style.display = 'flex';
        okDiscursivaButton.onclick = () => {
            discursivaModal.style.display = 'none';
            iniciarProvaLogica(topicosSelecionados, tipoQuestaoSelecionado);
        };
    } else {
        iniciarProvaLogica(topicosSelecionados, tipoQuestaoSelecionado);
    }
});

function iniciarProvaLogica(topicosSelecionados, tipoQuestaoSelecionado) {
    let questoesMorfo = [];
    let questoesHistologia = [];

    const questoesFiltradas = bancoDeQuestoes.filter(q => topicosSelecionados.includes(q.topico));
    
    let questoesMorfoFiltradas = questoesFiltradas.filter(q => q.disciplina === 'Morfologia');
    let questoesHistologiaFiltradas = questoesFiltradas.filter(q => q.disciplina === 'Histologia');
    
    // Seleciona as questões de Morfologia
    if (tipoQuestaoSelecionado === 'mista') {
        const questoesMorfoObjetivas = questoesMorfoFiltradas.filter(q => q.tipo === 'objetiva');
        const questoesMorfoDiscursivas = questoesMorfoFiltradas.filter(q => q.tipo === 'discursiva');
        
        questoesMorfo = shuffleArray(questoesMorfoObjetivas).slice(0, 5);
        questoesMorfo = questoesMorfo.concat(shuffleArray(questoesMorfoDiscursivas).slice(0, 5));
    } else { // Somente Objetivas
        const questoesMorfoObjetivas = questoesMorfoFiltradas.filter(q => q.tipo === 'objetiva');
        questoesMorfo = shuffleArray(questoesMorfoObjetivas).slice(0, 10);
    }
    
    // Seleciona as questões de Histologia
    if (tipoQuestaoSelecionado === 'mista') {
        const questoesHistologiaObjetivas = questoesHistologiaFiltradas.filter(q => q.tipo === 'objetiva');
        const questoesHistologiaDiscursivas = questoesHistologiaFiltradas.filter(q => q.tipo === 'discursiva');
        
        questoesHistologia = shuffleArray(questoesHistologiaObjetivas).slice(0, 5);
        questoesHistologia = questoesHistologia.concat(shuffleArray(questoesHistologiaDiscursivas).slice(0, 5));
    } else { // Somente Objetivas
        const questoesHistologiaObjetivas = questoesHistologiaFiltradas.filter(q => q.tipo === 'objetiva');
        questoesHistologia = shuffleArray(questoesHistologiaObjetivas).slice(0, 10);
    }

    questoesProva = shuffleArray(questoesMorfo.concat(questoesHistologia));
    
    respostasUsuario = {};
    tempoRestante = 30 * 60;
    
    iniciarProva();
}

function iniciarProva() {
    telaInicial.style.display = 'none';
    telaProva.style.display = 'flex';
    
    questoesContainer.innerHTML = '';
    questoesProva.forEach((q, index) => {
        const questaoDiv = document.createElement('div');
        questaoDiv.classList.add('questao');
        
        let htmlConteudo = '';
        if (q.tipo === 'objetiva') {
            const opcoesEmbaralhadas = shuffleArray([...q.opcoes]);
            htmlConteudo = `
                <p>${q.pergunta}</p>
                ${opcoesEmbaralhadas.map(opcao => `
                    <label>
                        <input type="radio" name="questao-${q.id}" value="${opcao}">
                        ${opcao}
                    </label>
                `).join('<br>')}
            `;
        } else if (q.tipo === 'discursiva') {
            htmlConteudo = `
                <p>${q.pergunta}</p>
                <textarea name="questao-${q.id}" rows="4" cols="50" placeholder="Digite sua resposta aqui..."></textarea>
            `;
        }

        questaoDiv.innerHTML = `<h4>Questão ${index + 1}:</h4>${htmlConteudo}`;
        questoesContainer.appendChild(questaoDiv);
    });

    if (timerInterval) clearInterval(timerInterval);
    tempoRestante = 30 * 60;
    atualizarCronometro();
    timerInterval = setInterval(atualizarCronometro, 1000);
}

btnFinalizarProva.addEventListener('click', () => {
    clearInterval(timerInterval);
    calcularResultados();
    exibirGabarito();
});

btnIniciarNovo.addEventListener('click', () => {
    telaResultados.style.display = 'none';
    telaInicial.style.display = 'flex';
    document.querySelectorAll('.opcoes-topicos input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
});

function atualizarCronometro() {
    if (tempoRestante < 0) {
        clearInterval(timerInterval);
        alert('Tempo esgotado!');
        calcularResultados();
        exibirGabarito();
        return;
    }
    
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    cronometroDisplay.textContent = `Tempo restante: ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    tempoRestante--;
}

function normalizarResposta(str) {
    if (!str) return '';
    return str.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[,.;-]/g, '').replace(/\s+/g, ' ');
}

function calcularResultados() {
    let acertos = 0;
    questoesProva.forEach(q => {
        let respostaUsuario;
        let isCorreta = false;

        if (q.tipo === 'objetiva') {
            const radio = document.querySelector(`input[name="questao-${q.id}"]:checked`);
            respostaUsuario = radio ? radio.value : null;
            if (respostaUsuario === q.resposta) {
                isCorreta = true;
            }
        } else if (q.tipo === 'discursiva') {
            const textarea = document.querySelector(`textarea[name="questao-${q.id}"]`);
            respostaUsuario = textarea ? textarea.value : '';

            const termosUsuario = normalizarResposta(respostaUsuario).split(' ').filter(Boolean).sort().join(' ');
            
            isCorreta = q.resposta.some(resp => {
                const termosCorretos = normalizarResposta(resp).split(' ').filter(Boolean).sort().join(' ');
                return termosUsuario === termosCorretos;
            });
        }
        
        if (isCorreta) {
            acertos++;
        }
        respostasUsuario[q.id] = {
            usuario: respostaUsuario,
            correta: isCorreta,
            respostaCerta: q.resposta
        };
    });
    respostasUsuario.acertos = acertos;
    respostasUsuario.total = questoesProva.length;
}

function exibirGabarito() {
    telaProva.style.display = 'none';
    telaResultados.style.display = 'block';
    
    acertosSpan.textContent = respostasUsuario.acertos;
    totalQuestoesSpan.textContent = questoesProva.length;

    gabaritoContainer.innerHTML = '';
    questoesProva.forEach((q, index) => {
        const gabaritoDiv = document.createElement('div');
        gabaritoDiv.classList.add('questao');
        const resultado = respostasUsuario[q.id];
        const status = resultado.correta ? 'correta' : 'incorreta';
        
        let respostaCertaHtml = '';
        if (q.tipo === 'objetiva') {
            respostaCertaHtml = `<p>Resposta correta: ${q.resposta}</p>`;
        } else if (q.tipo === 'discursiva') {
            respostaCertaHtml = `<p>Respostas corretas possíveis: ${Array.isArray(q.resposta) ? q.resposta.join(' ou ') : q.resposta}</p>`;
        }

        gabaritoDiv.innerHTML = `
            <h4>Questão ${index + 1}: <span class="${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span></h4>
            <p>${q.pergunta}</p>
            <p>Sua resposta: ${resultado.usuario || 'Nenhuma resposta'}</p>
            ${respostaCertaHtml}
        `;
        gabaritoDiv.style.backgroundColor = resultado.correta ? '#d4edda' : '#f8d7da';
        gabaritoContainer.appendChild(gabaritoDiv);
    });
}
