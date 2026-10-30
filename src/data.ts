export const unit = { name:'Emagrecentro Blumenau', address:'Rua Joinville, 990 — Vila Nova', city:'Blumenau/SC · CEP 89035-200', phone:'(47) 3322-5371', whatsapp:'(47) 99107-7203', instagram:'https://www.instagram.com/emagrecentroblumenau/', maps:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Emagrecentro Blumenau Rua Joinville 990 Vila Nova Blumenau SC 89035-200') };
export const contact = (category?:string) => 'https://wa.me/5547991077203?text='+encodeURIComponent(category ? `Olá! Vim pelo site da Emagrecentro Blumenau e gostaria de informações sobre ${category}.` : 'Olá! Vim pelo site da Emagrecentro Blumenau e gostaria de informações sobre a avaliação.');
export const phases = [
{ name:'Detox', label:'O primeiro passo', text:'Etapa inicial do programa divulgado pela rede. Consulte a equipe sobre a avaliação e a orientação para começar.' },
{ name:'Redox', label:'Cuidado em movimento', text:'Fase de emagrecimento do programa. Entenda com a equipe quais cuidados compõem o acompanhamento.' },
{ name:'Reindox', label:'Novos hábitos, novos caminhos', text:'Etapa apresentada como reeducação alimentar, com foco na continuidade dos hábitos orientados.' },
{ name:'Equilíbrio', label:'Continuidade que acolhe', text:'Fase de manutenção do programa. Converse sobre como funciona a continuidade do cuidado.' }
];
export const categories = [
{ name:'Emagrecimento', subtitle:'Um caminho que respeita o seu tempo.', description:'Conheça o Método 4 Fases e converse com a equipe sobre avaliação, orientação e acompanhamento.', items:['Método 4 Fases','Avaliação','Orientação sobre o programa'], image:'care' },
{ name:'Estética corporal', subtitle:'Cuidado para se sentir bem.', description:'Explore os cuidados corporais divulgados pelos canais empresariais e entenda a indicação de cada atendimento.', items:['Gordura localizada','Celulite','Flacidez','Estrias','Criolipólise','Criofrequência','Carboxiterapia','Lipo sem cirurgia'], image:'body' },
{ name:'Estética facial', subtitle:'A beleza da sua individualidade.', description:'Conheça a proposta facial e os procedimentos anunciados pela operação. Um olhar atento para cada pessoa.', items:['Harmonização facial','Toxina botulínica','Preenchimentos','EmagFace'], image:'face' },
{ name:'Massagens e bem-estar', subtitle:'Uma pausa para cuidar de você.', description:'Converse com a unidade sobre os atendimentos de massoterapia e estética, com atenção ao seu bem-estar.', items:['Massagem modeladora','Drenagem linfática','Cuidados com a pele'], image:'care' }
];
export const faqs = [
['Como consultar a avaliação?','Fale com a equipe pelo WhatsApp para conhecer o atendimento, a disponibilidade e as condições vigentes.'],
['O que é o Método 4 Fases?','É o programa divulgado pela rede Emagrecentro, organizado em Detox, Redox, Reindox e Equilíbrio. Consulte a unidade sobre sua aplicação e indicação.'],
['Onde fica a unidade?','Na Rua Joinville, 990, no bairro Vila Nova, em Blumenau.'],
['Como consultar valores?','A equipe informa os tratamentos disponíveis, seus valores e condições pelo canal de atendimento.'],
['Este contato é da unidade de Gaspar?','Este site apresenta a Emagrecentro Blumenau. O contato e o endereço exibidos são da unidade de Blumenau.']
];
