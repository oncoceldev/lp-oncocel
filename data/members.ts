export type RoleKey = 'coord' | 'colab' | 'dout' | 'mest' | 'ic'

export interface Member {
  name: string
  email: string
  role: string
  roleKey: RoleKey
  lattes: string
  project: string
  photo: string | null
  photoOffset?: string // Ex: '10%' para descer a foto
}

export const MEMBERS: Member[] = [
  {
    name: 'Luiza Rayanna Amorim',
    email: 'luiza.amorim@upe.br',
    role: 'Coordenadora',
    roleKey: 'coord',
    lattes: 'http://lattes.cnpq.br/3525637613163584',
    project: 'Coordenação geral do grupo de pesquisa ONCOCEL em oncologia celular experimental.',
    photo: 'Luiza Rayanna Amorim - Coordenadora.jpg',
  },

  // Colaboradores
  {
    name: 'Allan Vinícius Martins de Barros',
    email: '',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/8923600075222352',
    project: 'Colaborador do grupo de pesquisa · UPE, Campus Arcoverde',
    photo: 'Allan Vinícius Martins de Barros –  UPE Arcoverde.jpg',
  },
  {
    name: 'Auvani Antunes',
    email: 'auvani.antunesjr@upe.br',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/8530191076811620',
    project: 'Colaborador do grupo de pesquisa · UFPE, Recife',
    photo: 'Auvani Antunes  - UFPE Recife.jpg',
  },
  {
    name: 'Carolina de Albuquerque',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/5351538548897807',
    project: 'Colaboradora do grupo de pesquisa · UPE, Campus Arcoverde',
    photo: 'Carolina de Albuquerque – UPE Arcoverde.jpg',
  },
  {
    name: 'Claudenise Caldas',
    email: 'claudenise.dantas@upe.br',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/1489572404739546',
    project: 'Colaboradora do grupo de pesquisa · UPE, Campus Petrolina',
    photo: 'Claudenise Caldas - UPE Petrolina.jpg',
  },
  {
    name: 'Daniela de Araujo Viana',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/0788548123321981',
    project: 'Colaboradora do grupo de pesquisa · UPE, ICB / Santo Amaro',
    photo: 'Daniela de Araujo Viana – UPE ICB_Santo Amaro.png',
  },
  {
    name: 'Moacyr Jesus Barreto',
    email: '',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/7233767393471644',
    project: 'Colaborador do grupo de pesquisa · UFPE, Recife',
    photo: 'Moacyr Jesus Barreto - UFPE Recife.jpg',
  },
  {
    name: 'Moan Jéfter',
    email: '',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/7068268268110586',
    project: 'Colaborador do grupo de pesquisa · UPE, Campus Arcoverde',
    photo: 'Moan Jéfter – UPE Arcoverde.jpg',
  },
  {
    name: 'Natalie Emanuelle',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/4443122163296249',
    project: 'Colaboradora do grupo de pesquisa · UPE, Campus Garanhuns',
    photo: 'Natalie Emanuelle – UPE Garanhuns.png',
  },
  {
    name: 'Pedro Henrique Sette',
    email: '',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/6730016892651974',
    project: 'Colaborador do grupo de pesquisa · UPE, Campus Arcoverde',
    photo: 'Pedro Henrique Sette – UPE Arcoverde.png',
  },
  {
    name: 'Priscilla Barbosa Sales',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/2091307157054280',
    project: 'Colaboradora do grupo de pesquisa · UPE, ICB / Santo Amaro',
    photo: 'Priscilla Barbosa Sales – UPE ICB_Santo Amaro.png',
  },
  {
    name: 'Raquel Pedrosa Bezerra',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/1466206759539320',
    project: 'Colaboradora do grupo de pesquisa · UFRPE, Recife',
    photo: 'Raquel Pedrosa Bezerra - UFRPE Recife.png',
  },
  {
    name: 'Sara Isabel Silvério',
    email: '',
    role: 'Colaboradora',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/8237256911182788',
    project: 'Colaboradora do grupo de pesquisa · Universidade do Minho, Portugal',
    photo: 'Sara Isabel Silvério - Universidade do Minho (Portugal).JPG',
  },
  {
    name: 'Vladimir da Mota Silveira',
    email: '',
    role: 'Colaborador',
    roleKey: 'colab',
    lattes: 'http://lattes.cnpq.br/2796640443683985',
    project: 'Colaborador do grupo de pesquisa · UPE, Campus Garanhuns',
    photo: 'Vladimir da Mota Silveira – UPE Garanhuns_.jpg',
  },

  // Doutorandos
  {
    name: 'Lídia Pinheiro',
    email: 'lidia.nobrega@upe.br',
    role: 'Doutoranda',
    roleKey: 'dout',
    lattes: 'http://lattes.cnpq.br/6243657402583089',
    project:
      'Avaliação da expressão diferencial das proteínas ADAM-10 e ADAMTS-13 como biomarcadores de diagnóstico e prognóstico de neoplasias gastrintestinais.',
    photo: 'Lídia Pinheiro - Doutoranda.jpg',
  },
  {
    name: 'Gisele Mendes',
    email: 'gisele.mendes@upe.br',
    role: 'Doutoranda',
    roleKey: 'dout',
    lattes: 'http://lattes.cnpq.br/1756929502512974',
    project:
      'Potencial anticâncer dos metabólitos secundários resultante da fermentação do galacto-oligossacarídeo por probióticos em células de câncer colorretal.',
    photo: 'Gisele Mendes - Doutoranda.jpg',
  },
  {
    name: 'Ana Beatriz Aguiar',
    email: 'ana.basbezerra@upe.br',
    role: 'Doutoranda',
    roleKey: 'dout',
    lattes: 'http://lattes.cnpq.br/0001745884792243',
    project: 'Avaliação da sarcopenia por triagem SARC-F, força de preensão palmar, ultrassonografia e desfechos de mediadores inflamatórios: estudo randomizado de intervenção em idosos oncológicos.',
    photo: 'Ana Beatriz Aguiar - Doutoranda.jpg',
  },
  {
    name: 'José Cláudio da Silva',
    email: 'joseclaudio.sjunior@upe.br',
    role: 'Doutorando',
    roleKey: 'dout',
    lattes: 'https://lattes.cnpq.br/9089480646403067',
    project:
      'Impactos da implantação do teste molecular DNA-HPV na detecção precoce do câncer de colo de útero em municípios da Mata Sul de Pernambuco.',
    photo: 'José Claudio da Silva - Doutorando.jpg',
    photoOffset: '25%',
  },
  {
    name: 'Juliana Henrique',
    email: 'juliana.henrique@upe.br',
    role: 'Doutoranda',
    roleKey: 'dout',
    lattes: 'http://lattes.cnpq.br/7397905510445193',
    project:
      'Efeito sinérgico dos metabólitos prebióticos na sensibilização em linhagens celulares de neoplasias gastrointestinais ao 5-Fluorouracil.',
    photo: 'Juliana Henrique - Doutoranda.jpg',
  },

  // Mestrandos
  {
    name: 'Ana Beatriz Macêdo',
    email: 'beatriz.macedolima@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'http://lattes.cnpq.br/9235486704434483',
    project:
      'Avaliação do Potencial Anticâncer de Extratos da Schinopsis brasiliensis Engler frente ao Câncer Espinocelular de Boca.',
    photo: 'Ana Beatriz Macedo - Mestranda.jpg',
  },
  {
    name: 'Davi Guilherme Teixeira',
    email: 'davi.guilherme@upe.br',
    role: 'Mestrando',
    roleKey: 'mest',
    lattes: 'http://lattes.cnpq.br/2675752390089456',
    project:
      'Avaliação do Efeito Antiproliferativo e Citotóxico de Metabólitos Secundários Produzidos pela Fermentação Prebiótica de Fungos do Gênero Aspergillus sp.',
    photo: 'Davi Guilherme Teixeira - Mestrando.jpg',
  },
  {
    name: 'Emylle Leoncio',
    email: 'emylle.leoncio@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'http://lattes.cnpq.br/6076292686081588',
    project:
      'Estudo da atividade antitumoral de uma proteína obtida de Arthrospira platensis frente a células do câncer colorretal.',
    photo: 'Emylle Leoncio - Mestranda.jpg',
  },
  {
    name: 'Roseane Nunes',
    email: 'roseane.nunes@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'http://lattes.cnpq.br/5356728553318342',
    project:
      'Avaliação do Potencial Anticâncer de uma Proteína Obtida de Arthrospira platensis frente a Células de Câncer de Pulmão.',
    photo: 'Roseane Nunes - Mestranda.jpg',
    photoOffset: '25%',
  },
  {
    name: 'Jessica dos Santos',
    email: 'jessica.santoss@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'http://lattes.cnpq.br/1902682275756415',
    project:
      'Metabólitos bioativos de fungos Aspergillus spp. em meio prebiótico: uma avaliação do potencial antitumoral in vitro.',
    photo: 'Jessica dos Santos - Mestranda.jpg',
  },
  {
    name: 'Luis Henrique',
    email: 'luis.hdmendes@upe.br',
    role: 'Mestrando',
    roleKey: 'mest',
    lattes: 'https://lattes.cnpq.br/1318449876678396',
    project:
      'Impacto de diferentes critérios definidores de inflamação no diagnóstico de desnutrição pelo GLIM em pacientes oncológicos.',
    photo: 'Luis Henrique - Mestrando.jpg',
  },
  {
    name: 'Daniele Barbosa',
    email: 'daniele.machado@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'https://lattes.cnpq.br/3788375366051624',
    project:
      'Avaliação do Perfil Farmacológico e Toxicológico do Extrato de Chrysobalanus icaco C. (Abajerú).',
    photo: 'Daniele Barbosa - Mestranda.jpg',
  },
  {
    name: 'Isabella Siqueira',
    email: 'isabella.siqueira@upe.br',
    role: 'Mestranda',
    roleKey: 'mest',
    lattes: 'https://lattes.cnpq.br/8708522362226344',
    project:
      'Produção de Colagenase por URM 8878 e Avaliação de Peptídeos Bioativos Contra Carcinoma Oral SCC-4.',
    photo: 'Isabella Siqueira - Mestranda.jpg',
    photoOffset: '25%',
  },

  // Iniciação Científica
  {
    name: 'João Paulo Barbosa',
    email: 'joao.pbnunes@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/7441394272337462',
    project:
      'Análise in silico do potencial anticâncer do propionato como metabólito secundário produzido por probióticos a partir de fermentação prebiótica.',
    photo: 'João Paulo Barbosa - IC.png',
  },
  {
    name: 'Thiago Henrique',
    email: 'thiago.henriquem@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/4825991731332142',
    project: 'Metabólito secundário produzido por probióticos a partir da fermentação prebiótica.',
    photo: 'Thiago Henrique - IC.jpg',
  },
  {
    name: 'Filipe Othmar',
    email: 'filipe.othmar@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/9197202929697127',
    project:
      'Produção de formulação com atividade antiofídica a partir do extrato aquoso da casca de Schinopsis brasiliensis imobilizado em gel de galactomanana.',
    photo: 'Filipe Othmar - IC.jpg',
  },
  {
    name: 'Geovana Brum',
    email: 'geovana.brum@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/4917546478334128',
    project:
      'Avaliação da Expressão Diferencial da Enzima ADAMTS-13 como Biomarcador de Diagnóstico e Prognóstico de Neoplasias Malignas Pancreáticas.',
    photo: 'Geovana Brum - IC.jpg',
  },
  {
    name: 'Pedro Henrique Vieira',
    email: 'pedro.henriquevieira@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/4704602929836424',
    project:
      'Schinopsis brasiliensis e a Inibição do Crescimento de Células de Câncer Bucal: uma Abordagem Experimental in vitro.',
    photo: 'Pedro Henrique Vieira - IC.jpg',
  },
  {
    name: 'Leandra Carmen Leal',
    email: 'leandra.cslaraujo@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/9967077182503420',
    project:
      'Avaliação in vitro do efeito citotóxico e antiproliferativo do sobrenadante contendo metabólitos secundários obtidos a partir da fermentação de fruto-oligossacarídeos por probióticos.',
    photo: 'Leandra Carmen Leal - IC.jpg',
  },
  {
    name: 'Victória Sthefanie',
    email: 'victoria.gomes@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/1913844235255741',
    project:
      'Avaliação do efeito antiproliferativo e citotóxico do sobrenadante contendo metabólitos secundários produzidos pela fermentação prebiótica de fungos do gênero Aspergillus sp.',
    photo: 'Victória Sthefanie - IC.webp',
  },
  {
    name: 'Vitória Zayne',
    email: 'vitoria.zspimentel@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/2771064416634438',
    project:
      'Extração otimizada da ficocianina da microalga Arthrospira platensis e avaliação da sua atividade antitumoral in vitro em linhagens neoplásicas.',
    photo: 'Vitória Zayne - IC_.jpg',
  },
  {
    name: 'Gabriela Basilio',
    email: 'gabriela.basilio@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/3314787092189646',
    project:
      'Investigação do Potencial Citotóxico e Antiproliferativo da Proteína Ficocianina Obtida de Arthrospira platensis frente a Células de Câncer de Pulmão.',
    photo: 'Gabriela Basilio - IC.jpg',
  },
  {
    name: 'Isa Lara',
    email: 'isa.lmbleandro@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/1953475725213002',
    project:
      'Avaliação da Expressão Diferencial da Enzima ADAMTS13 como Biomarcador de Diagnóstico do Câncer Colorretal.',
    photo: 'Isa Lara - IC.jpg',
  },
  {
    name: 'Matheus Queiroz',
    email: 'metheus.qmonteiro@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/4608412157765710',
    project: 'Distribuição de Diagnóstico do Câncer de Colo de Útero em Mulheres Negras em Pernambuco.',
    photo: 'Matheus Queiroz - IC.jpg',
  },
  {
    name: 'Rayka Emanuelly',
    email: 'rayka.emanuelly@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/1981053186849270',
    project: '',
    photo: 'Rayka Emanuelly - IC.png',
  },
  {
    name: 'Giovana Letícia',
    email: 'giovana.lpcorreia@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/7567601401541803',
    project: '',
    photo: 'Giovana Letícia - IC.png',
  },
  {
    name: 'Domingos Sávio',
    email: 'domingos.barros@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/3739757678275853',
    project: '',
    photo: 'Domingos Sávio - IC.jpg',
  },
  {
    name: 'Douglas Gonçalves',
    email: 'douglas.brandao@upe.br',
    role: 'Iniciação Científica',
    roleKey: 'ic',
    lattes: 'http://lattes.cnpq.br/7993542873436567',
    project: '',
    photo: 'Douglas Gonçalves - IC.jpg',
  },
]

const ORDER: Record<RoleKey, number> = { coord: 0, dout: 1, mest: 2, ic: 3, colab: 4 }
MEMBERS.sort((a, b) => ORDER[a.roleKey] - ORDER[b.roleKey])
